<template>
	<el-container id="app">
  <div class="card" v-for="card in cards" v-bind:key="card">
    <div class="flipper">
      <transition-group name="flip" tag="div">
        <div class="front" v-show="!flipCard" key="front">
          <el-card>
            <div slot="header">
              <span>card n°{{card}}</span>
              <el-button
                type="primary"
                style="float: right; padding: 0 1px;"
                @click="flipCardSwitch">
                back
              </el-button>
            </div>
            <div>
              card front content
            </div>
          </el-card>
        </div>
        <div class="back" v-show="flipCard" key="back">
          <el-card class="back-content">
            <div slot="header">
              <span>card n°{{card}}</span>
              <el-button
                type="primary"
                style="float: right; padding: 0 1px;"
                @click="flipCardSwitch">
                front
              </el-button>
            </div>
            <div>
              card back content
            </div>
          </el-card>
        </div>
      </transition-group>
    </div>
  </div>
	</el-container>
</template>

<script>
export default {
  name: "card",
  data() {
    return {
      flipCard: false,
      cards: [1, 2, 3]
    };
  },
  methods: {
    flipCardSwitch: function() {
      this.flipCard = !this.flipCard;
    }
  }
};
</script>

<style>
body {
  background-color: #409eff;
}

.card {
  position: relative;
  width: 180px;
  height: 180px;
}

.front,
.back {
  width: 180px;
  height: 180px;
}

/* hide back of pane during swap */
.front,
.back {
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
}

/* back, initially hidden pane */
.back-content {
  background-color: #e3e3e3;
}

.flip-enter-active,
.flip-leave-active {
  transition: all 0.6s ease;
}
.flip-enter,
.flip-leave-to {
  transform: rotateY(180deg);
}
</style>
