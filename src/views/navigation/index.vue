<template>
  <div class="app-container">
    <!-- <sticky :z-index="10" class-name="sub-navbar"> -->
    <el-tag type="info">
      <time
        class="time"
      >{{ $t('navigationUtil.welcome') }} {{ $t('navigationUtil.ourMail') }} dzreal1993@gmail.com</time>
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
            <a href="#">{{ $t('navigationUtil.commonToolsCategory') }}</a>
          </el-menu-item>
          <el-menu-item index="2">
            <a href="#">{{ $t('navigationUtil.pictureModifyCategory') }}</a>
          </el-menu-item>
          <el-menu-item index="3">
            <a href="#">
              {{ $t(
                'navigationUtil.conversionFormatCategory') }}
            </a>
          </el-menu-item>
          <el-menu-item index="4">
            <a href="#">{{ $t('navigationUtil.downloadCategory') }}</a>
          </el-menu-item>
          <el-menu-item index="5">
            <a href="#">{{ $t('navigationUtil.calculatorCategory') }}</a>
          </el-menu-item>
        </el-menu>
        <div class="line" />
      </div>
    </sticky>

    <div class="floor_one" />
    <div class="nav-card">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>{{ $t('navigationUtil.commonToolsCategory') }}</span>
        </div>
        <!-- <div class="nav-card-content"> -->
        <el-row :gutter="20" justify="space-around">
          <!-- 翻译word、PDF -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://www.pdfwordconvert.com/en/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://www.pdfwordconvert.com/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUtil.translatingPdfTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUtil.translatingPdfContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <!-- 临时邮箱 -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://temp-mail.org/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://temp-mail.org/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUtil.tempMailboxTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUtil.tempMailboxContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <!-- 临时接收短信 -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://smsreceivefree.com/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://smsreceivefree.com/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUtil.tempSMSTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUtil.tempSMSContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
        </el-row>
      </el-card>
    </div>

    <div class="floor_two" />
    <div class="nav-card">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>{{ $t('navigationUtil.pictureModifyCategory') }}</span>
        </div>
        <el-row :gutter="20" justify="space-around">
          <!-- 在线修改图片尺寸 -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://resizeyourimage.com/EN/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://resizeyourimage.com/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUtil.pictureSizeModifyTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUtil.pictureSizeModifyContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <!-- 图片批量加水印 -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://watermarkly.com/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://watermarkly.com/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUtil.waterMarkTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUtil.waterMarkContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <!-- 在线压缩图片 -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://tinyjpg.com/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://tinyjpg.com' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUtil.compressedPicturesTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUtil.compressedPicturesContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <!-- 去除图片背景 -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://www.remove.bg/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://www.remove.bg/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUtil.rmBgImagesTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUtil.rmBgImagesContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <!-- 照片马赛克 -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="http://www.easymoza.com/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://www.easymoza.com' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUtil.mosaicTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUtil.mosaicContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <!-- 黑白图片变彩色 -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://demos.algorithmia.com/colorize-photos/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://demos.algorithmia.com/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUtil.pictureColorfulTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUtil.pictureColorfulContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <!-- 模糊图片变清晰 -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="http://bigjpg.com/en" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://bigjpg.com/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUtil.pictureClearTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUtil.pictureClearContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <!-- 生成二维码 -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://www.qr-code-generator.com/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://www.qr-code-generator.com/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUtil.genQrCodeTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUtil.genQrCodeContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <!-- 制作gif -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://ezgif.com/maker" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://ezgif.com/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUtil.genGifTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUtil.genGifContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
        </el-row>
      </el-card>
    </div>

    <div class="floor_three" />
    <div class="nav-card">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>
            {{ $t(
              'navigationUtil.conversionFormatCategory') }}
          </span>
        </div>
        <el-row :gutter="20" justify="space-around">
          <!-- 音视频格式转换 -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://convertio.co/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://convertio.co/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUtil.audioTransTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUtil.audioTransContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <!-- PDF格式转换 -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://www.ilovepdf.com/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://www.ilovepdf.com/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUtil.pdfTransTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUtil.pdfTransContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <!-- 在线电子书转换器 -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://www.office-converter.com/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://www.office-converter.com' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUtil.bookTransTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUtil.bookTransContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <!-- 图片格式转换 -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://www.aconvert.com/image/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://www.aconvert.com/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUtil.picTransTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUtil.picTransContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <!-- 文字转语音 -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://www.naturalreaders.com/online/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://www.naturalreaders.com/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUtil.voiceTransTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUtil.voiceTransContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
        </el-row>
      </el-card>
    </div>

    <div class="floor_four" />
    <div class="nav-card">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>{{ $t('navigationUtil.downloadCategory') }}</span>
        </div>
        <el-row :gutter="20" justify="space-around">
          <!-- youtube、fb字幕下载 -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://savesubs.com/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://savesubs.com/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUtil.youtubeFbDownloadTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUtil.youtubeFbDownloadContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <!-- youtube视频下载 -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://www.onlinevideoconverter.com/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://www.onlinevideoconverter.com/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUtil.youtubeVideoDownloadTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUtil.youtubeVideoDownloadContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <!-- tiktok去水印 -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://musicallydown.com/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://musicallydown.com/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUtil.tiktokVideoDownloadTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUtil.tiktokVideoDownloadContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
        </el-row>
      </el-card>
    </div>

    <div class="floor_five" />
    <div class="nav-card">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>{{ $t('navigationUtil.calculatorCategory') }}</span>
        </div>
        <el-row :gutter="20" justify="space-around">
          <!-- 金融计算器 -->
          <el-col :span="4" style="margin: 5px 0;">
            <a
              href="https://www.calculator.net/financial-calculator.html"
              target="_blank"
              rel="nofollow"
            >
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://www.calculator.net/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUtil.financeCalculatorTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUtil.financeCalculatorContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <!-- 数学计算器 -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://zs.symbolab.com/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://zs.symbolab.com/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUtil.mathCalculatorTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUtil.mathCalculatorContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <!-- 健康计算器 -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://www.omnicalculator.com/health" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://www.omnicalculator.com/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUtil.healthyCalculatorTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUtil.healthyCalculatorContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <!-- 医学计算器 -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://www.mdcalc.com/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://www.mdcalc.com/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUtil.medicineCalculatorTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUtil.medicineCalculatorContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
        </el-row>
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
  name: 'NavigationUtil',
  components: { BackToTop, Sticky },
  filters: {
    titleEllipsis(value) {
      if (!value) return ''
      if (value.length > 17) {
        return value.slice(0, 17) + '...'
      }
      return value
    },
    contentEllipsis(value) {
      if (!value) return ''
      if (value.length > 50) {
        return value.slice(0, 50) + '...'
      }
      return value
    }
  },
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
      activeIndex: '1',
      myBackToTopStyle: {
        right: '50px',
        bottom: '50px',
        width: '40px',
        height: '40px',
        'border-radius': '4px',
        'line-height': '45px', // 请保持与高度一致以垂直居中 Please keep consistent with height to center vertically
        background: '#e7eaf1' // 按钮的背景颜色 The background color of the button
      },
      // logoPrefix: "https://api.uixsj.cn/favicon/get.php?url"
      // logoPrefix: "http://statics.dnspod.cn/proxy_favicon/_/favicon?domain=",
      logoSuffix: 'favicon.ico'
      // logoPrefix: "http://g.etfv.co/url="
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
        // console.log(1);
      } else if (val > this.floorThree && val <= this.floorFour) {
        this.steps = 2
        // console.log(2);
      } else if (val > this.floorFour && val <= this.floorFive) {
        this.steps = 3
        // console.log(3);
      } else if (val > this.floorFive) {
        this.steps = 4
        // console.log(4);
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
      // console.log(key, keyPath);
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
          distance += small_interval
          // console.log((distance += small_interval));
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
          distance -= small_interval
          // console.log((distance -= small_interval));
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
      const floorOne = document.getElementsByClassName('floor_one')[0]
        .offsetTop
      const floorTwo = document.getElementsByClassName('floor_two')[0]
        .offsetTop
      const floorThree = document.getElementsByClassName('floor_three')[0]
        .offsetTop
      const floorFour = document.getElementsByClassName('floor_four')[0]
        .offsetTop
      const floorFive = document.getElementsByClassName('floor_five')[0]
        .offsetTop
      this.floorOne = floorOne
      this.floorTwo = floorTwo
      this.floorThree = floorThree
      this.floorFour = floorFour
      this.floorFive = floorFive
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
  height: 98px;
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

