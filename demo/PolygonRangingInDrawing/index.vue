<template>
    <div id="container"></div>
    <div class="btn-control">
        <div class="btn" @click="onToggle">
            {{ enabled ? "关闭" : "启用" }}绘制测距
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { onMounted, onUnmounted } from "vue";
import { PolygonRangingInDrawing } from "../../src/main.ts";

let mapIns: AMap.Map | null = null;

let mouseTool: AMap.MouseTool | null = null;

let polygonRangingInDrawingIns: PolygonRangingInDrawing | null = null;

const enabled = ref(true);

const registryMap = () => {
    mapIns = new AMap.Map("container", {
        center: [116.400274, 39.905812],
        zoom: 14,
    });
};

const registryMouseTool = () => {
    if (mouseTool) return mouseTool;
    mouseTool = new AMap.MouseTool(mapIns!);
    return mouseTool;
};

const registryDrawFinish = () => {
    registryMouseTool().on("draw", () => {
        //
        if (polygonRangingInDrawingIns) {
            polygonRangingInDrawingIns.reset();
        }
    });
};

const onDrawPolygon = () => {
    registryMouseTool()!.polygon({});
};

const createPolygonRangingInDrawing = () => {
    if (polygonRangingInDrawingIns) return polygonRangingInDrawingIns;
    polygonRangingInDrawingIns = new PolygonRangingInDrawing(mapIns!);
    polygonRangingInDrawingIns.start();
    return polygonRangingInDrawingIns;
};

const open = () => {
    createPolygonRangingInDrawing().start();
};

const close = () => {
    createPolygonRangingInDrawing().destroy();
};

const onToggle = () => {
    enabled.value = !enabled.value;
    if (enabled.value) {
        open();
    } else {
        close();
    }
};

onMounted(() => {
    registryMap();
    registryMouseTool();
    registryDrawFinish();
    onDrawPolygon();
    createPolygonRangingInDrawing();
});

onUnmounted(() => {
    polygonRangingInDrawingIns!.destroy();
});
</script>

<style lang="css" scoped>
.container {
    width: 100%;
    height: 100%;
}

.btn-control {
    position: fixed;
    bottom: 100px;
    right: 10px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 2px 2px #0000003d;
}

.btn {
    color: cornflowerblue;
    padding: 0 12px;
    cursor: pointer;
    margin: 10px 0;
}
</style>
