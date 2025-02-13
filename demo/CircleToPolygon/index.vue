<template>
    <div class="page">
        <div id="container"></div>
        <div class="controller">
            <div class="item">
                <div class="label">半径</div>
                <div class="wrapper">
                    <input v-model="inputValue" type="number" />
                </div>
            </div>
            <div class="item">
                <div class="label">度数切割</div>
                <div class="wrapper">
                    <input v-model="degValue" type="number" />
                </div>
            </div>
            <div class="item">
                <div class="label">点个数</div>
                <div class="wrapper">
                    <input v-model="countValue" type="number" />
                </div>
            </div>
            <div>"点个数"有值，优先使用"点个数"；其次使用"度数切割"</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from "vue";

let mapIns: AMap.Map | null = null;

let circleIns: AMap.Circle | null = null;

let polygonIns: AMap.Polygon | null = null;

let editor: AMap.PolygonEditor;

// let center: AMap.LngLat;

let containerRadius: number;

const inputValue = ref("50");
const degValue = ref("45");
const countValue = ref();

const registryMap = () => {
    mapIns = new AMap.Map("container", {
        center: [116.400274, 39.905812],
        zoom: 18,
        doubleClickZoom: false,
    });
};

const registryMapMouseClickEvent = () => {
    if (!mapIns) return;

    mapIns.on("dblclick", (event) => {
        const { lnglat } = event;
        const center = lnglat as AMap.LngLat;

        if (!inputValue.value) {
            return alert("请先输入半径");
        }

        if (Number.isNaN(+inputValue.value)) {
            return alert("半径不规范");
        }

        if (!(degValue.value || countValue.value)) {
            return alert("度数切割和点个数至少输入一个");
        }

        if (degValue.value && Number.isNaN(degValue.value)) {
            return alert("度数切割不规范");
        }

        if (countValue.value && Number.isNaN(countValue.value)) {
            return alert("点个数不规范");
        }

        destory();

        createCircle(center, +inputValue.value);

        toPolygon();
    });
};

const createCircle = (center: AMap.LngLat, radius: number) => {
    // const center = [116.400274, 39.905812] as AMap.CircleOptions["center"];
    circleIns = new AMap.Circle({ center, radius });
    console.log("circleIns ===>", circleIns);
    mapIns?.add(circleIns);
    return circleIns;
};

// const createMarker = (
//     position: AMap.MarkerOptions["position"],
//     options?: AMap.MarkerOptions
// ) => {
//     const labelMarker = new AMap.Marker({ position, ...options });
//     mapIns?.add(labelMarker);
// };

const getContainerRadius = () => {
    const { center } = circleIns?.getOptions();
    console.log(center, "=center=");
    // const [centerLng, centerLat] = center;
    const { lng: centerLng, lat: centerLat } = center;
    const { northEast, southWest } = circleIns?.getBounds()!;
    const rightPointInCircleLng = northEast.lng;
    const rightPointInCircleLat = (northEast.lat + southWest.lat) / 2;
    console.log(rightPointInCircleLng, rightPointInCircleLat);

    const lnglat = new AMap.LngLat(centerLng, centerLat);
    const centerPixel = mapIns!.lngLatToContainer(lnglat);
    console.log(centerPixel, "=centerPixel=");

    const rightPointInCircleLngLat = new AMap.LngLat(
        rightPointInCircleLng,
        rightPointInCircleLat
    );
    const rightPointInCirclePixel = mapIns!.lngLatToContainer(
        rightPointInCircleLngLat
    );
    console.log(rightPointInCirclePixel, "=rightPointInCirclePixel=");

    // createMarker([rightPointInCircleLng, rightPointInCircleLat], {});
    containerRadius = rightPointInCirclePixel.x - centerPixel.x;
    console.log(containerRadius, "=containerRadius=");
};

const toPolygon = () => {
    const { center } = circleIns?.getOptions();

    getContainerRadius();

    const radius = containerRadius;

    console.log("radius ===>", radius);

    console.log("getOptions ===>", circleIns?.getOptions());
    // const [centerX, centerY] = center;
    const { lng: centerX, lat: centerY } = center;

    // 经纬度 转 容器坐标
    const lnglat = new AMap.LngLat(centerX, centerY);
    const pixel = mapIns!.lngLatToContainer(lnglat);
    console.log("pixel ==>", pixel);
    const { x, y } = pixel;
    console.log("x ==>", x);
    console.log("y ==>", y);

    const getPoint = (deg: number) => {
        const x1 = x + radius * Math.cos((deg * 3.14) / 180);
        const y1 = y + radius * Math.sin((deg * 3.14) / 180);
        // return { x: x1, y: y1 };
        const completedPixel = new AMap.Pixel(x1, y1);
        const completedLnglat = mapIns!.containerToLngLat(completedPixel);
        return [completedLnglat.lng, completedLnglat.lat];
    };

    const path: number[][] = [];

    if (degValue.value) {
        for (let deg = 0; deg <= 360; ) {
            path.push(getPoint(deg));
            deg = +(deg + +degValue.value);
        }
    }

    if (countValue.value) {
        path.length = 0;
        const c = Math.ceil(360 / countValue.value);

        for (let deg = 0; deg <= 360; ) {
            path.push(getPoint(deg));
            deg = +(deg + +c);
        }
    }

    console.log(path);
    polygonIns = new AMap.Polygon({ path });
    mapIns?.add(polygonIns);

    editor = new AMap.PolygonEditor(mapIns!, polygonIns);
    editor.open();

    circleIns!.hide();
    // createMarker([completedLnglat.lng, completedLnglat.lat]);

    // createMarker([completedLnglat.lng, completedLnglat.lat]);
};

const destory = () => {
    if (circleIns) {
        mapIns?.remove(circleIns);
        circleIns.destroy();
    }

    if (polygonIns) {
        mapIns?.remove(polygonIns);
        polygonIns.destroy();
    }

    if (editor) {
        editor.close();
    }
};

onMounted(async () => {
    registryMap();
    registryMapMouseClickEvent();

    // createCircle(200);

    // toPolygon();

    // 东北点
    // createMarker([116.40086, 39.906261]);

    // 西南点
    // createMarker([116.399688, 39.905363]);
});

onUnmounted(() => {});
</script>

<style>
.page {
    position: relative;
    width: 100%;
    height: 100%;
}

.container {
    width: 100%;
    height: 100%;
}

.controller {
    position: absolute;
    width: 360px;
    height: 240px;
    right: 0;
    bottom: 0;
    /* border-top-left-radius: 8px; */
    background: #fff;
    border: 1px solid #eee;
    padding: 14px 16px;
    box-sizing: border-box;
}

.item {
    display: flex;
    align-items: center;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
}

.label {
    width: 80px;
}

.wrapper {
    flex: 1;

    input {
        height: 28px;
        line-height: 28px;
    }
}
</style>
