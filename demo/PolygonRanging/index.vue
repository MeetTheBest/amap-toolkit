<template>
    <div id="container"></div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted } from "vue";
import { PolygonRanging } from "../../src/main.ts";

let mapIns: AMap.Map | null = null;

let polygon: AMap.Polygon | null = null;

let polygonRangingIns: PolygonRanging | null = null;

const registryMap = () => {
    mapIns = new AMap.Map("container", {
        center: [116.400274, 39.905812],
        zoom: 14,
    });
};

const createPolygon = () => {
    if (!mapIns) return;

    const path = [
        [116.403322, 39.920255],
        [116.410703, 39.897555],
        [116.402292, 39.892353],
        [116.389846, 39.891365],
    ];

    const polygonOptions = {
        path: path,
        strokeColor: "#FF33FF",
        strokeWeight: 6,
        strokeOpacity: 0.2,
        fillOpacity: 0.4,
        fillColor: "#1791fc",
        zIndex: 50,
        bubble: true,
        draggable: true,
        cursor: "pointer",
    } as AMap.PolygonOptions;

    polygon = new AMap.Polygon();
    polygon.setOptions(polygonOptions);

    mapIns.add([polygon]);
    // 缩放地图到合适的视野级别
    mapIns.setFitView();

    return polygon;
};

const createPolygonRanging = () => {
    polygonRangingIns = new PolygonRanging(mapIns!);
    polygonRangingIns.open(polygon!);
};

onMounted(() => {
    registryMap();
    createPolygon();
    createPolygonRanging();
});

onUnmounted(() => {
    polygonRangingIns!.destroy();
});
</script>

<style>
.container {
    width: 100%;
    height: 100%;
}
</style>
