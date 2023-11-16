<template>
    <div class="mask-area" @mousewheel="scrollArea">
        <div class="mask-area-item active ease vertical list">
            <div class="mask-area-content">
                <div class="mask-area-title">Cariyar</div>
                <div class="mask-area-div">
                    <ul>
                        <li>
                            <a href="https://github.com/lazyCatSleeping">github</a>
                        </li>
                        <li>
                            <a href="https://juejin.cn/user/1216518654002861">掘金</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="mask-area-item left up-ready">
            <div class="mask-area-content">
                <div class="mask-area-title">简历</div>
                <div class="mask-area-div">最新的项目</div>
            </div>
        </div>
        <div class="mask-area-item right up-hide">
            <div class="mask-area-content">
                <div class="mask-area-title">博文</div>
                <div class="mask-area-div">最新的一篇博文</div>
            </div>
        </div>
        <div class="mask-area-item left up-hide">
            <div class="mask-area-content">
                <div class="mask-area-title">实验</div>
                <div class="mask-area-div">最新的实验项目</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BlogIndex",
    setup() {
        let scrollArea = (e) => {
            const tar = e.target.offsetParent,
                wheelDrect = e.wheelDelta < 0,
                front = wheelDrect ? "down" : "up",
                last = wheelDrect ? "up" : "down",
                frontEl = wheelDrect ? "preElem" : "nextElem",
                lastEl = wheelDrect ? "nextElem" : "preElem";

            const ACT = "active",
                READY = "-ready",
                HIDE = "-hide";

            const elObj = {
                preElem: tar.previousSibling,
                nextElem: tar.nextSibling
            };
            // 如果滚轮方向的下一个元素不存在则返回
            if (elObj[lastEl] === null) return;

            e.preventDefault();

            // 为当前元素移除.active
            tar.classList.remove(ACT);
            tar.classList.add(front + READY);

            // 为滚轮方向的下一个元素添加.active
            elObj[lastEl].classList.remove(last + READY);
            elObj[lastEl].classList.add("ease", ACT);

            // 如果滚轮方向的下下个元素存在就移除下下个元素的hide
            elObj[lastEl] = elObj[lastEl][wheelDrect ? "nextSibling" : "previousSibling"];
            if (elObj[lastEl]) {
                elObj[lastEl].classList.add(last + READY);
                elObj[lastEl].classList.remove(last + HIDE);
            }
            //将滚轮方向的之前的元素的ease效果删去并调整位置
            while (elObj[frontEl]) {
                elObj[frontEl].classList.remove("ease");
                elObj[frontEl].classList.add(front + HIDE);
                elObj[frontEl] = elObj[frontEl][wheelDrect ? "previousSibling" : "nextSibling"];
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
    overflow: hidden;
    position: relative;
}

/* 
    故意这么写的，不然就用控件了 
*/
/* 一个块的样式 */
.mask-area .mask-area-item {
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 0;
    transform: scale(1);
    transition: transform .4s ease-in-out;
}

/* 当前显示的块 */
.mask-area .mask-area-item.active {
    z-index: 2;
    transform: translateY(0) scale(1);
}

/* 隐藏起来的块，就是懒得在js里面写计算=。= */
.mask-area .mask-area-item.up-hide {
    transform: translateY(calc((100vh - 80px) * 2)) scale(1);
}

.mask-area .mask-area-item.down-hide {
    transform: translateY(calc((-100vh + 80px) * 2)) scale(1);
}

/* 预备显示的块 */
.mask-area .mask-area-item.up-ready {
    transform: translateY(calc(100vh - 80px)) scale(1);
}

.mask-area .mask-area-item.down-ready {
    transform: translateY(calc(-100vh + 80px)) scale(1);
}

/* 
    块内内容的布局
*/
.mask-area .mask-area-item .mask-area-content {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
}
.mask-area .mask-area-item.vertical .mask-area-content {
    flex-direction: column;
    justify-content: center;
}

.mask-area .mask-area-item.right .mask-area-content,
.mask-area .mask-area-item.left .mask-area-content {
    justify-content: space-around;
}

.mask-area .mask-area-item.right .mask-area-content {
    flex-direction: row-reverse;
}

.mask-area .mask-area-item .mask-area-content .mask-area-title {
    font-size: 80px;
    font-weight: bolder;
}

.mask-area .mask-area-item .mask-area-content .mask-area-div {
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