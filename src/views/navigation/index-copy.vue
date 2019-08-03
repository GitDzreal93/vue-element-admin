<template>
  <div class="app-container">
    <!-- <sticky :z-index="10" class-name="sub-navbar"> -->
    <el-tag type="info">
      <time class="time">北京时间：{{ currentDate }}</time>
    </el-tag>
    <sticky :z-index="100">
      <div class="menu">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <!-- <sticky :z-index="10"> -->
          <el-menu-item index="1">
            <!-- <a href="#" @click="goAnchor('#anchor-1')">常用工具</a> -->
            <a href="#">常用工具</a>
          </el-menu-item>
          <el-menu-item index="2">
            <a href="#">论坛咨询</a>
          </el-menu-item>
          <el-menu-item index="3">
            <a href="#">社交营销</a>
          </el-menu-item>
          <el-menu-item index="4">
            <a href="#">官方网址</a>
          </el-menu-item>
          <el-menu-item index="5">
            <a href="#">其他平台</a>
          </el-menu-item>
          <el-menu-item index="6">
            <a href="#">独立站</a>
          </el-menu-item>
          <!-- </sticky> -->
        </el-menu>
        <div class="line" />
      </div>
    </sticky>

    <div class="nav-card">
      <div class="floor_one" />
      <el-card class="box-card">
        <el-tabs tab-position="left" style="height: 200px;">
          <el-tab-pane label="常用工具">
            <el-row :gutter="20" type="flex">
              <el-col :span="3">
                <el-tooltip class="item" effect="dark" content="网址提示信息" placement="bottom">
                  <a
                    href="https://sellercentral.amazon.com/hz/fba/profitabilitycalculator/index?lang=en_US"
                    target="_blank"
                    rel="nofollow"
                  >
                    <div class="nav-card-item">
                      <el-avatar
                        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                        size="small"
                        shape="square"
                        style="vertical-align: middle;"
                      />

                      <strong>FBA费用计算</strong>
                    </div>
                  </a>
                </el-tooltip>
              </el-col>
              <el-col :span="3">
                <el-tooltip class="item" effect="dark" content="网址提示信息" placement="bottom">
                  <a
                    href="https://sellercentral.amazon.com/hz/fba/profitabilitycalculator/index?lang=en_US"
                    target="_blank"
                    rel="nofollow"
                  >
                    <div class="nav-card-item">
                      <el-avatar
                        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                        size="small"
                        shape="square"
                        style="vertical-align: middle;"
                      />
                      <strong>FBA费用计算</strong>
                    </div>
                  </a>
                </el-tooltip>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="站外管理">站外管理</el-tab-pane>
        </el-tabs>
      </el-card>
    </div>

    <div class="floor_two" />
    <div class="nav-card">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>论坛咨询</span>
        </div>
        <!-- <div class="nav-card-content"> -->
        <el-row :gutter="20" justify="space-around">
          <el-col :span="4" style="margin: 5px 0;">
            <a
              href="https://sellercentral.amazon.com/hz/fba/profitabilitycalculator/index?lang=en_US"
              target="_blank"
              rel="nofollow"
            >
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                    size="small"
                    shape="square"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>FBA费用计算</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">FBA补货计算/库存管理/PPC助手/sku利润分析</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <el-col :span="4" style="margin: 5px 0;">
            <a
              href="https://sellercentral.amazon.com/hz/fba/profitabilitycalculator/index?lang=en_US"
              target="_blank"
              rel="nofollow"
            >
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                    size="small"
                    shape="square"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>FBA费用计算</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">FBA补货计算/库存管理/PPC助手/sku利润分析</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <el-col :span="4" style="margin: 5px 0;">
            <a
              href="https://sellercentral.amazon.com/hz/fba/profitabilitycalculator/index?lang=en_US"
              target="_blank"
              rel="nofollow"
            >
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                    size="small"
                    shape="square"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>FBA费用计算</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">FBA补货计算/库存管理/PPC助手/sku利润分析</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <el-col :span="4" style="margin: 5px 0;">
            <a
              href="https://sellercentral.amazon.com/hz/fba/profitabilitycalculator/index?lang=en_US"
              target="_blank"
              rel="nofollow"
            >
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                    size="small"
                    shape="square"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>FBA费用计算</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">FBA补货计算/库存管理/PPC助手/sku利润分析</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <el-col :span="4" style="margin: 5px 0;">
            <a
              href="https://sellercentral.amazon.com/hz/fba/profitabilitycalculator/index?lang=en_US"
              target="_blank"
              rel="nofollow"
            >
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                    size="small"
                    shape="square"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>FBA费用计算</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">FBA补货计算/库存管理/PPC助手/sku利润分析</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <el-col :span="4" style="margin: 5px 0;">
            <a
              href="https://sellercentral.amazon.com/hz/fba/profitabilitycalculator/index?lang=en_US"
              target="_blank"
              rel="nofollow"
            >
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                    size="small"
                    shape="square"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>FBA费用计算</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">FBA补货计算/库存管理/PPC助手/sku利润分析</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <el-col :span="4" style="margin: 5px 0;">
            <a
              href="https://sellercentral.amazon.com/hz/fba/profitabilitycalculator/index?lang=en_US"
              target="_blank"
              rel="nofollow"
            >
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                    size="small"
                    shape="square"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>FBA费用计算</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">FBA补货计算/库存管理/PPC助手/sku利润分析</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <el-col :span="4" style="margin: 5px 0;">
            <a
              href="https://sellercentral.amazon.com/hz/fba/profitabilitycalculator/index?lang=en_US"
              target="_blank"
              rel="nofollow"
            >
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    src="https://api.uixsj.cn/favicon/get.php?url=https://www.pdfwordconvert.com/en/"
                    size="small"
                    shape="square"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>FBA费用计算</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">FBA补货计算/库存管理/PPC助手/sku利润分析</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
        </el-row>
        <!-- </div> -->
      </el-card>
    </div>

    <div class="floor_three" />
    <div class="nav-card">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>社交营销</span>
        </div>
      </el-card>
    </div>

    <div class="floor_four" />
    <div class="nav-card">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>官方网址</span>
        </div>
      </el-card>
    </div>

    <div class="floor_five" />
    <div class="nav-card">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>其他平台</span>
        </div>
      </el-card>
    </div>

    <div class="floor_six" />
    <div class="nav-card">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>独立站</span>
        </div>
      </el-card>
    </div>

    <el-tooltip placement="top" content="tooltip">
      <back-to-top
        :custom-style="myBackToTopStyle"
        :visibility-height="300"
        :back-position="50"
        transition-name="fade"
      />
    </el-tooltip>
  </div>
</template>

<script>
import BackToTop from '@/components/BackToTop'
import Sticky from '@/components/Sticky'

export default {
  name: 'Navigation',
  components: { BackToTop, Sticky },
  data() {
    return {
      currentDate: new Date().toLocaleString(),
      steps: 0,
      scrolltop: 0, // 滑轮 距顶部的距离
      floorOne: 0,
      floorTwo: 0,
      floorThree: 0,
      floorFour: 0,
      floorFive: 0,
      floorSix: 0,
      activeIndex: '1',
      myBackToTopStyle: {
        right: '50px',
        bottom: '50px',
        width: '40px',
        height: '40px',
        'border-radius': '4px',
        'line-height': '45px', // 请保持与高度一致以垂直居中 Please keep consistent with height to center vertically
        background: '#e7eaf1' // 按钮的背景颜色 The background color of the button
      }
    }
  },
  watch: {
    // 监听 滑轮滚动的值的变化 来实现自动锚点
    scrolltop(val) {
      val += 200
      if (val > this.floorOne && val <= this.floorTwo) {
        this.steps = 0
      } else if (val > this.floorTwo && val <= this.floorThree) {
        this.steps = 1
        console.log(1)
      } else if (val > this.floorThree && val <= this.floorFour) {
        this.steps = 2
        console.log(2)
      } else if (val > this.floorFour && val <= this.floorFive) {
        this.steps = 3
        console.log(3)
      } else if (val > this.floorFive) {
        this.steps = 4
        console.log(4)
      }
    },
    steps(res) {
      // 查看步数
      // console.log(res);
    }
  },
  mounted() {
    this.getFloorDistance()
    this.getPulleyTopDistance()
  },
  methods: {
    handleSelect(key, keyPath) {
      this.anchors(key)
      console.log(key, keyPath)
    },
    anchors(val) {
      switch (val) {
        case '1':
          this.pulleyRoll(this.floorOne, this.scrolltop)
          break
        case '2':
          this.pulleyRoll(this.floorTwo, this.scrolltop)
          break
        case '3':
          this.pulleyRoll(this.floorThree, this.scrolltop)
          break
        case '4':
          this.pulleyRoll(this.floorFour, this.scrolltop)
          break
        case '5':
          this.pulleyRoll(this.floorFive, this.scrolltop)
          break
        case '6':
          this.pulleyRoll(this.floorSix, this.scrolltop)
          break
      }
    },
    /**
     * 滑轮 向上滚动和向下滚动的函数
     * top是楼层距窗体顶部的距离,distance当前滚动条与窗体顶部的距离
     * */
    pulleyRoll(top, distance) {
      /* 向下滚动*/
      if (distance < top) {
        const small_interval = (top - distance) / 50
        let i = 0
        const timer = setInterval(() => {
          i++
          console.log((distance += small_interval))
          document.documentElement.scrollTop = distance
          if (i === 50) {
            clearInterval(timer)
          }
        }, 10)
      } else if (distance > top) {
        /* 向上滚动*/
        const small_interval = (distance - top) / 50
        let i = 0
        const timer = setInterval(() => {
          i++
          console.log((distance -= small_interval))
          document.documentElement.scrollTop = distance
          if (i === 50) {
            clearInterval(timer)
          }
        }, 10)
      }
    },
    /**
     * 拿到所有 楼层距窗体顶部的距离
     * */
    getFloorDistance() {
      // 拿到每个 楼层距窗体顶部的距离
      const floorOne = document.getElementsByClassName('floor_one')[0].offsetTop
      const floorTwo = document.getElementsByClassName('floor_two')[0].offsetTop
      const floorThree = document.getElementsByClassName('floor_three')[0]
        .offsetTop
      const floorFour = document.getElementsByClassName('floor_four')[0]
        .offsetTop
      const floorFive = document.getElementsByClassName('floor_five')[0]
        .offsetTop
      const floorSix = document.getElementsByClassName('floor_six')[0].offsetTop
      this.floorOne = floorOne
      this.floorTwo = floorTwo
      this.floorThree = floorThree
      this.floorFour = floorFour
      this.floorFive = floorFive
      this.floorSix = floorSix
    },
    /**
     * 滑轮滚动事件 返回滑轮距顶部的距离
     * */
    getPulleyTopDistance() {
      var that = this
      window.onscroll = function() {
        that.scrolltop =
          document.documentElement.scrollTop || document.body.scrollTop
      }
    }
  }
}
</script>

<style scoped>
.menu {
  margin-bottom: 30px;
  background-color: lightblue;
}
.nav-card {
  margin: 20px 10px;
}

.nav-card-content {
  padding: 5px;
  font-size: 13px;
}

.nav-card-item {
  align-content: center;
  line-height: 14px;
  font-size: 13px;
}

.bottom {
  /* margin-top: 5px; */
  line-height: 12px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.description {
  text-align: left;
  display: block;
  color: #a2a2a2;
  font-size: 10px;
}

ul {
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  list-style-type: none;
}

ul li {
  text-align: left;
  margin-bottom: 3px;
}

a {
  text-decoration: none;
  background-color: transparent;
  display: block;
}
a:hover {
  color: orangered;
}
a:hover .description {
  color: black;
  font-weight: inherit;
}
a:hover .website {
  color: orangered;
  font-weight: bolder;
}
a:hover .nav-card-content {
  background: #f0f8ff;
}
/* strong:hover{
  color: cadetblue
} */
</style>

