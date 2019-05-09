<template>
    <div class="tips-message-container">
        <div class="tips-message" :class="[visible?'show':'hide']" :style="{'left': left, 'top': top}">
            <span :class="direction">{{message}}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.show {
    display: block;
}
.hide {
    display: none;
}
.tips-message-container {
    position: absolute;
    z-index: 998;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.tips-message {
    position: absolute;
    padding: 10px 15px;
    border-radius: 8px;
    background-color: #333333;
}
.tips-message span {
    max-width: 150px;
    display: block;
    font-size: 12px;
    line-height: 20px;
    color: #ffffff;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.tips-message span:before{
    content: '';
    position: absolute;
    z-index: 999;
    width: 0;
    height: 0;
}
.tips-message span.top:before {
    top: -17px;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 8px solid #333333;
}
.tips-message span.bottom:before {
    bottom: -17px;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 8px solid #333333;
}
.tips-message span.left:before {
    left: -22px;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-right: 8px solid #333333;
}
.tips-message span.right:before {
    right: -22px;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 8px solid #333333;
}
</style>

<script>
export default {
    data () {
        return {
            direction: 'top',
            visible: false,
            message: '',
            left: '',
            top: ''
        }
    }
}
</script>


