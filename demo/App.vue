<template>
    <div class="nav">
        <span
            :class="['btn', isPolygonRangingPage ? 'active' : '']"
            @click="toPolygonRangingPage"
        >
            查看多边形边线长度
        </span>
        <span
            :class="['btn', isPolygonRangingInDrawingPage ? 'active' : '']"
            @click="toPolygonRangingInDrawingPage"
        >
            查看多边形绘制时测距
        </span>
        <span
            :class="['btn', isPolygonEditorRangingPage ? 'active' : '']"
            @click="toPolygonEditorRangingPage"
        >
            查看多边形编辑器测距页
        </span>
        <span
            :class="['btn', isPolygonEditorEvent ? 'active' : '']"
            @click="toPolygonEditorEventPage"
        >
            多边形点位事件监听
        </span>
        <span
            :class="['btn', isLikeRectangle ? 'active' : '']"
            @click="toLikeRectanglePage"
        >
            类矩形
        </span>
        <span
            :class="['btn', isLikeRectangleEdtior ? 'active' : '']"
            @click="toLikeRectangleEdtitorPage"
        >
            类矩形操作
        </span>
        <span
            :class="['btn', isCircleToPolygonPage ? 'active' : '']"
            @click="toCircleToPolygonPage"
        >
            圆转多边形
        </span>
    </div>

    <CircleToPolygon v-if="isCircleToPolygonPage" />
    <PolygonRanging v-if="isPolygonRangingPage" />
    <PolygonRangingInDrawing v-if="isPolygonRangingInDrawingPage" />
    <PolygonEditorRanging v-if="isPolygonEditorRangingPage" />
    <PolygonEdtiorEvent v-if="isPolygonEditorEvent" />
    <!-- 类矩形 -->
    <LikeRectangle v-if="isLikeRectangle" />
    <!-- 类矩形操作 -->
    <LikeRectangleEditor v-if="isLikeRectangleEdtior" />
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";

import CircleToPolygon from "./CircleToPolygon/index.vue";
import PolygonRanging from "./PolygonRanging/index.vue";
import PolygonRangingInDrawing from "./PolygonRangingInDrawing/index.vue";
import PolygonEditorRanging from "./PolygonEditorRanging/index.vue";
import PolygonEdtiorEvent from "./PolygonEditorEvent/index.vue";
import LikeRectangle from "./LikeRectangle/index.vue";
import LikeRectangleEditor from "./LikeRectangleEditor/index.vue";

enum Page {
    PolygonRanging = "PolygonRanging",
    PolygonRangingInDrawing = "PolygonRangingInDrawing",
    PolygonEditorRanging = "PolygonEditorRanging",
    PolygonEditorEvent = "PolygonEditorEvent",
    LikeRectangle = "LikeRectangle",
    LikeRectangleEditor = "LikeRectangleEditor",
    CircleToPolygon = "CircleToPolygon",
}

const page = ref(Page.PolygonRanging);

const isPolygonRangingPage = computed(() => page.value === Page.PolygonRanging);
const isPolygonRangingInDrawingPage = computed(
    () => page.value === Page.PolygonRangingInDrawing
);
const isPolygonEditorRangingPage = computed(
    () => page.value === Page.PolygonEditorRanging
);
const isPolygonEditorEvent = computed(
    () => page.value === Page.PolygonEditorEvent
);
const isLikeRectangle = computed(() => page.value === Page.LikeRectangle);
const isLikeRectangleEdtior = computed(
    () => page.value === Page.LikeRectangleEditor
);
const isCircleToPolygonPage = computed(
    () => page.value === Page.CircleToPolygon
);

const toPolygonRangingPage = () => (page.value = Page.PolygonRanging);
const toPolygonRangingInDrawingPage = () =>
    (page.value = Page.PolygonRangingInDrawing);
const toPolygonEditorRangingPage = () =>
    (page.value = Page.PolygonEditorRanging);
const toPolygonEditorEventPage = () => (page.value = Page.PolygonEditorEvent);
const toLikeRectanglePage = () => (page.value = Page.LikeRectangle);
const toLikeRectangleEdtitorPage = () =>
    (page.value = Page.LikeRectangleEditor);
const toCircleToPolygonPage = () => (page.value = Page.CircleToPolygon);
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

html,
body,
#container {
    height: 100vh;
    width: 100vw;
}

.nav {
    position: fixed;
    top: 0px;
    left: 0;
    right: r0;
    height: 40px;
    background: #fff;
    z-index: 999;
    width: 100vw;
    display: flex;
    align-items: center;
    padding: 0 20px;
}

.btn {
    padding: 0 12px;
    cursor: pointer;
}

.active {
    color: cornflowerblue;
}
</style>
