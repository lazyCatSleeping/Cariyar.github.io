<template>
    <div class="mask-area" @mousewheel="scrollArea">
        <div class="mask-area-item vertical list">
            <div class="mask-area-title">Cariyar</div>
            <div class="mask-area-div">
                <ul>
                    <li>
                        <a href="https://github.com/lazyCatSleeping">github</a>
                    </li>
                    <li>
                        <a href="https://juejin.cn/user/1216518654002861"
                            >掘金</a
                        >
                    </li>
                </ul>
            </div>
        </div>
        <div class="mask-area-item left hide">
            <div class="mask-area-title">简历</div>
            <div class="mask-area-div">最新的项目</div>
        </div>
        <div class="mask-area-item right hide">
            <div class="mask-area-title">博文</div>
            <div class="mask-area-div">最新的一篇博文</div>
        </div>
        <div class="mask-area-item left hide">
            <div class="mask-area-title">实验</div>
            <div class="mask-area-div">最新的实验项目</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BlogIndex",
    setup() {
        let scrollArea = (e) => {
            let tar = e.target;
            if (e.wheelDelta < 0 && tar.nextSibling) {
                // 如果往下滚，滚完继续往下显示footer
                e.preventDefault();
                tar.classList.add("hide");
                tar.nextSibling.classList.remove("hide");
            }
            if (e.wheelDelta > 0 && tar.previousSibling) {
                // 如果往上滚动，滚动完往上显示header
                e.preventDefault();
                tar.previousSibling.classList.remove("hide");
                tar.classList.add("hide");
            }
        };
        return {
            scrollArea,
        };
    },
};
</script>

<style scope>
.mask-area {
    background-color: #66a9c9;
    height: calc(100vh - 80px);
    margin-bottom: 30px;
}
.mask-area .mask-area-item {
    display: flex;
    align-items: center;
    height: 100%;
}
.mask-area .mask-area-item.hide {
    display: none;
}
.mask-area .mask-area-item.vertical {
    flex-direction: column;
    justify-content: center;
}
.mask-area .mask-area-item.right,
.mask-area .mask-area-item.left {
    justify-content: space-around;
}
.mask-area .mask-area-item.right {
    flex-direction: row-reverse;
}
.mask-area .mask-area-item .mask-area-title {
    font-size: 80px;
    font-weight: bolder;
}
.mask-area .mask-area-item .mask-area-div {
    margin-top: 1em;
}
.mask-area .mask-area-item.list .mask-area-div ul {
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
}
.mask-area .mask-area-item.list .mask-area-div ul li {
    margin-right: 5px;
}
.mask-area .mask-area-item.list .mask-area-div ul li:last-of-type {
    margin-right: 0;
}
</style>