<template>
    <div id="container"></div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted } from "vue";

import {
    LikeRectangle,
    ILikeRectangleOptions,
    LikeRectangleEditor,
} from "../../src/main";

let mapIns: AMap.Map | null = null;

let likeRectangleIns: LikeRectangle | null = null;

let likeRectangleEditorIns: LikeRectangleEditor | null = null;

const registryMap = async () => {
    mapIns = new AMap.Map("container", {
        center: [116.400274, 39.905812],
        zoom: 18,
    });
};

const createLikeRectangle = () => {
    if (!mapIns) return;

    const likeRectangleOptions = {
        map: mapIns,
        // center: [116.400274, 39.905812],
        // width: 200,
        // height: 50,
        path: [
            [116.40091, 39.906052],
            [116.400254, 39.90535],
            [116.39983, 39.905583],
            [116.400482, 39.906286],
        ],
        draggable: true,
        cursor: "pointer",
        rotatable: true,
        rotationOptions: {
            controllerPointRadius: 18,
        },
        bubble: true, // 事件穿透
    } as ILikeRectangleOptions;

    likeRectangleIns = new LikeRectangle(likeRectangleOptions);

    // 旋转时，地图临时不可拖拽
    likeRectangleIns!.on("rotateStart", () =>
        mapIns!.setStatus({ dragEnable: false })
    );
    likeRectangleIns!.on("rotateEnd", () =>
        mapIns!.setStatus({ dragEnable: true })
    );

    mapIns.add([likeRectangleIns as unknown as AMap.Polygon]);

    return likeRectangleIns;
};

const createLikeRectangleEditor = () => {
    likeRectangleEditorIns = new LikeRectangleEditor(
        mapIns!,
        likeRectangleIns as LikeRectangle
        // { isMobile: true }
    );
    likeRectangleEditorIns.open();
};

onMounted(async () => {
    await registryMap();

    likeRectangleIns = createLikeRectangle()!;

    createLikeRectangleEditor();
});

onUnmounted(() => {
    likeRectangleIns!.destroy();
});
</script>

<style>
.container {
    width: 100%;
    height: 100%;
}
</style>
