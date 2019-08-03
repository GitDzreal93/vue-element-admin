<template>
  <div class="app-container">
    <!-- <sticky :z-index="10" class-name="sub-navbar"> -->
    <el-tag type="info">
      <time
        class="time"
      >{{ $t('navigationUS.welcome') }} {{ $t('navigationUS.ourMail') }} dzreal1993@gmail.com</time>
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
            <a href="#">{{ $t('navigationUS.socialEntCategory') }}</a>
          </el-menu-item>
          <el-menu-item index="2">
            <a href="#">{{ $t('navigationUS.newsCategory') }}</a>
          </el-menu-item>
          <el-menu-item index="3">
            <a href="#">
              {{ $t(
                'navigationUS.videoCategory') }}
            </a>
          </el-menu-item>
          <el-menu-item index="4">
            <a href="#">{{ $t('navigationUS.shoppingCategory') }}</a>
          </el-menu-item>
          <el-menu-item index="5">
            <a href="#">{{ $t('navigationUS.lifeCategory') }}</a>
          </el-menu-item>
        </el-menu>
        <div class="line" />
      </div>
    </sticky>

    <div class="nav-card">
      <div class="floor_one" />
      <el-card class="box-card">
        <el-tabs tab-position="left" style="height: 200px;">
          <el-tab-pane :label="$t('navigationUS.gameSubCategory')">
            <el-row :gutter="20" type="flex">
              <el-col :span="3">
                <el-tooltip class="item" effect="dark" :content="$t('navigationUS.iGNContent')" placement="bottom">
                  <a
                    href="https://www.ign.com/"
                    target="_blank"
                    rel="nofollow"
                  >
                    <div class="nav-card-item">
                      <el-avatar
                        :src="'https://www.ign.com/' + logoSuffix"
                        size="small"
                        shape="square"
                        style="vertical-align: middle;"
                      />
                      <strong>{{ $t('navigationUS.iGNTitle')| titleEllipsis }}</strong>
                    </div>
                  </a>
                </el-tooltip>
              </el-col>
              <el-col :span="3">
                <el-tooltip class="item" effect="dark" :content="$t('navigationUS.gameSpotContent')" placement="bottom">
                  <a
                    href="https://www.gamespot.com/"
                    target="_blank"
                    rel="nofollow"
                  >
                    <div class="nav-card-item">
                      <el-avatar
                        :src="'https://www.gamespot.com/' + logoSuffix"
                        size="small"
                        shape="square"
                        style="vertical-align: middle;"
                      />
                      <strong>{{ $t('navigationUS.gameSpotTitle')| titleEllipsis }}</strong>
                    </div>
                  </a>
                </el-tooltip>
              </el-col>
              <el-col :span="3">
                <el-tooltip class="item" effect="dark" :content="$t('navigationUS.gameSpyTitle')" placement="bottom">
                  <a
                    href="http://www.gamespy.com/"
                    target="_blank"
                    rel="nofollow"
                  >
                    <div class="nav-card-item">
                      <el-avatar
                        :src="'http://www.gamespy.com/' + logoSuffix"
                        size="small"
                        shape="square"
                        style="vertical-align: middle;"
                      />
                      <strong>{{ $t('navigationUS.gameSpyTitle')| titleEllipsis }}</strong>
                    </div>
                  </a>
                </el-tooltip>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane :label="$t('navigationUS.jobSubCategory')">
            <el-row :gutter="20" type="flex">
              <el-col :span="3">
                <el-tooltip class="item" effect="dark" :content="$t('navigationUS.monsterContent')" placement="bottom">
                  <a
                    href="https://www.monster.com/"
                    target="_blank"
                    rel="nofollow"
                  >
                    <div class="nav-card-item">
                      <el-avatar
                        :src="'https://www.monster.com/' + logoSuffix"
                        size="small"
                        shape="square"
                        style="vertical-align: middle;"
                      />
                      <strong>{{ $t('navigationUS.monsterTitle')| titleEllipsis }}</strong>
                    </div>
                  </a>
                </el-tooltip>
              </el-col>
              <el-col :span="3">
                <el-tooltip class="item" effect="dark" :content="$t('navigationUS.simplyHiredContent')" placement="bottom">
                  <a
                    href="https://www.simplyhired.com/"
                    target="_blank"
                    rel="nofollow"
                  >
                    <div class="nav-card-item">
                      <el-avatar
                        :src="'https://www.simplyhired.com/' + logoSuffix"
                        size="small"
                        shape="square"
                        style="vertical-align: middle;"
                      />
                      <strong>{{ $t('navigationUS.simplyHiredTitle')| titleEllipsis }}</strong>
                    </div>
                  </a>
                </el-tooltip>
              </el-col>
              <el-col :span="3">
                <el-tooltip class="item" effect="dark" :content="$t('navigationUS.indeedContent')" placement="bottom">
                  <a
                    href="https://www.indeed.com/"
                    target="_blank"
                    rel="nofollow"
                  >
                    <div class="nav-card-item">
                      <el-avatar
                        :src="'https://www.indeed.com/' + logoSuffix"
                        size="small"
                        shape="square"
                        style="vertical-align: middle;"
                      />
                      <strong>{{ $t('navigationUS.indeedTitle')| titleEllipsis }}</strong>
                    </div>
                  </a>
                </el-tooltip>
              </el-col>
              <el-col :span="3">
                <el-tooltip class="item" effect="dark" :content="$t('navigationUS.backstageContent')" placement="bottom">
                  <a
                    href="https://www.backstage.com/"
                    target="_blank"
                    rel="nofollow"
                  >
                    <div class="nav-card-item">
                      <el-avatar
                        :src="'https://www.backstage.com/' + logoSuffix"
                        size="small"
                        shape="square"
                        style="vertical-align: middle;"
                      />
                      <strong>{{ $t('navigationUS.backstageTitle')| titleEllipsis }}</strong>
                    </div>
                  </a>
                </el-tooltip>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane :label="$t('navigationUS.tourismSubCategory')">
            <el-row :gutter="20" type="flex">
              <el-col :span="3">
                <el-tooltip class="item" effect="dark" :content="$t('navigationUS.tripAdvisorContent')" placement="bottom">
                  <a
                    href="https://www.tripadvisor.com/"
                    target="_blank"
                    rel="nofollow"
                  >
                    <div class="nav-card-item">
                      <el-avatar
                        :src="'https://www.tripadvisor.com/' + logoSuffix"
                        size="small"
                        shape="square"
                        style="vertical-align: middle;"
                      />
                      <strong>{{ $t('navigationUS.tripAdvisorTitle')| titleEllipsis }}</strong>
                    </div>
                  </a>
                </el-tooltip>
              </el-col>
              <el-col :span="3">
                <el-tooltip class="item" effect="dark" :content="$t('navigationUS.bookingContent')" placement="bottom">
                  <a
                    href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiSscqp--HjAhWL_mQKHcitBBYYABAAGgJwag&ohost=www.google.com&cid=CAESQeD2G32qaACi52ESIw7HAjPnqG2f0Qf0IUsBAfnKZ2myMyE9SfnihisTudHlsAuYME2yY8GHwVeCNvM01UNlSw0B&sig=AOD64_1m_Z1mqCGwZeON-PBxFfCW9BIecg&q=&ved=2ahUKEwjk7cGp--HjAhWJv1QKHea6AjwQ0Qx6BAgOEAE&adurl="
                    target="_blank"
                    rel="nofollow"
                  >
                    <div class="nav-card-item">
                      <el-avatar
                        :src="'https://www.googleadservices.com/' + logoSuffix"
                        size="small"
                        shape="square"
                        style="vertical-align: middle;"
                      />
                      <strong>{{ $t('navigationUS.bookingTitle')| titleEllipsis }}</strong>
                    </div>
                  </a>
                </el-tooltip>
              </el-col>
              <el-col :span="3">
                <el-tooltip class="item" effect="dark" :content="$t('navigationUS.tripAdvisorContent')" placement="bottom">
                  <a
                    href="https://www.trip.com/"
                    target="_blank"
                    rel="nofollow"
                  >
                    <div class="nav-card-item">
                      <el-avatar
                        :src="'https://www.trip.com/' + logoSuffix"
                        size="small"
                        shape="square"
                        style="vertical-align: middle;"
                      />
                      <strong>{{ $t('navigationUS.tripTitle')| titleEllipsis }}</strong>
                    </div>
                  </a>
                </el-tooltip>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>

    <div class="floor_one" />
    <div class="nav-card">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>{{ $t('navigationUS.socialEntCategory') }}</span>
        </div>
        <!-- <div class="nav-card-content"> -->
        <el-row :gutter="20" justify="space-around">
          <!-- https://www.reddit.com/-->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://www.reddit.com/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://www.reddit.com/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUS.redditTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUS.redditContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <!-- https://twitter.com/ -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://twitter.com/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://twitter.com/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUS.twitterTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUS.twitterContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <!-- https://www.imdb.com/ -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://www.imdb.com/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://www.imdb.com/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUS.imdbTitleTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUS.imdbTitleContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <!-- https://www.pinterest.com/ -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://www.pinterest.com/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://www.pinterest.com/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUS.pinterestTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUS.pinterestContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <!-- https://www.eharmony.com/ -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://www.eharmony.com/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://www.eharmony.com/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUS.eharmonyTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUS.eharmonyContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <!-- https://www.eharmony.com/ -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://www.instagram.com/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://www.instagram.com/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUS.instagramTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUS.instagramContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <!-- https://www.tumblr.com/login -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://www.tumblr.com/login" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://www.tumblr.com/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUS.tumblrTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUS.tumblrContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <!-- https://www.linkedin.com/ -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://www.linkedin.com/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://www.linkedin.com/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUS.linkedinTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUS.linkedinContent') | contentEllipsis }}</p>
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
          <span>{{ $t('navigationUS.newsCategory') }}</span>
        </div>
        <el-row :gutter="20" justify="space-around">
          <!-- https://www.buzzfeed.com/ -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://www.buzzfeed.com/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://www.buzzfeed.com/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUS.buzzfeedTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUS.buzzfeedContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <!-- https://break.com/ -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://break.com/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://break.com/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUS.breakTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUS.breakContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <!-- https://www.dailymotion.com/us -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://www.dailymotion.com/us" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://www.dailymotion.com/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUS.dailymotionTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUS.dailymotionContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <!-- https://www.cnet.com/ -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://www.cnet.com/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://www.cnet.com/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUS.cNETTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUS.cNETContent') | contentEllipsis }}</p>
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
              'navigationUS.videoCategory') }}
          </span>
        </div>
        <el-row :gutter="20" justify="space-around">
          <!-- https://www.youtube.com/ -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://www.youtube.com/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://www.youtube.com/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUS.youTubeTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUS.youTubeContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <!-- https://www.twitch.tv/ -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://www.twitch.tv/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://www.twitch.tv/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUS.twitchTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUS.twitchContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <!-- https://vimeo.com/ -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://vimeo.com/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://vimeo.com/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUS.vimeoTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUS.vimeoContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <!-- https://www.netflix.com/ -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://www.netflix.com/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://www.netflix.com/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUS.netflixTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUS.netflixContent') | contentEllipsis }}</p>
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
          <span>{{ $t('navigationUS.shoppingCategory') }}</span>
        </div>
        <el-row :gutter="20" justify="space-around">
          <!-- https://www.amazon.com/ -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://www.amazon.com/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://www.amazon.com/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUS.amazonTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUS.amazonContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <!-- https://www.ebay.com/ -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://www.ebay.com/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://www.ebay.com/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUS.eBayTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUS.eBayContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <!-- https://www.macys.com/ -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://www.macys.com/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://www.macys.com/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUS.macyTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUS.macyContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <!-- https://www.walmart.com/ -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://www.walmart.com/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://www.walmart.com/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUS.walmartTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUS.walmartContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <!-- https://www.6pm.com/ -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://www.6pm.com/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://www.6pm.com/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUS.s6PMTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUS.s6PMContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <!-- https://www.homedepot.com/ -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://www.homedepot.com/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://www.homedepot.com/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUS.homedepotTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUS.homedepotContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <!-- https://www.homedepot.com/ -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://www.giftcards.com/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://www.giftcards.com/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUS.giftCardsTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUS.giftCardsContent') | contentEllipsis }}</p>
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
          <span>{{ $t('navigationUS.lifeCategory') }}</span>
        </div>
        <el-row :gutter="20" justify="space-around">
          <!-- https://www.craigslist.org/ -->
          <el-col :span="4" style="margin: 5px 0;">
            <a
              href="https://www.craigslist.org/"
              target="_blank"
              rel="nofollow"
            >
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://www.craigslist.org/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUS.craigslistTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUS.craigslistContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <!-- https://www.paypal.com/ -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://www.paypal.com/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://www.paypal.com/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUS.paypalTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUS.paypalContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <!-- https://www.zillow.com/ -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://www.zillow.com/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://www.zillow.com/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUS.zillowTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUS.zillowContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <!-- https://www.rent.com/ -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://www.rent.com/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://www.rent.com/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUS.rentTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUS.rentContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <!-- https://www.dropbox.com/home -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://www.dropbox.com/home" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://www.dropbox.com/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUS.dropboxTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUS.dropboxContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <!-- https://www.yelp.com/ -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://www.yelp.com/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://www.yelp.com/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUS.yelpTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUS.yelpContent') | contentEllipsis }}</p>
                  </div>
                </div>
              </el-card>
            </a>
          </el-col>
          <!-- https://travel.state.gov/ -->
          <el-col :span="4" style="margin: 5px 0;">
            <a href="https://travel.state.gov/" target="_blank" rel="nofollow">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="nav-card-content">
                  <el-avatar
                    :src="'https://travel.state.gov/' + logoSuffix"
                    size="small"
                    shape="circle"
                    style="vertical-align: middle;"
                  />
                  <span class="website">
                    <strong>{{ $t('navigationUS.travelTitle') | titleEllipsis }}</strong>
                  </span>
                  <div class="bottom clearfix">
                    <p class="description">{{ $t('navigationUS.travelContent') | contentEllipsis }}</p>
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
  name: 'NavigationUS',
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

