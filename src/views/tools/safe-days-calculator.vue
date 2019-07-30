<template>
  <div>
    <aside>
      {{ $t('tools.welcome') }}
      <strong>{{ $t('tools.safeDaysCalculator') }}</strong> ！
    </aside>
    <el-row type="flex" justify="center">
      <el-col :span="8">
        <div class="grid-content bg-purple-dark">
          <el-card class="box-card" style="margin-top:5px;">
            <div slot="header" class="clearfix">
              <i class="el-icon-moon-night" />
              <span style="margin-left:10px;">{{ $t('tools.safeDaysCalculator') }}</span>
            </div>
            <el-form ref="form" :model="form" :rules="rules" label-width="120px">
              <el-form-item :label="$t('tools.lastPeriodLabel')" prop="lastPeriod">
                <el-date-picker
                  v-model="form.lastPeriod"
                  align="right"
                  type="date"
                  :placeholder="$t('tools.datePickerPlaceholder')"
                  :picker-options="form.pickerOptions"
                />
              </el-form-item>

              <el-form-item :label="$t('tools.shortPeriodLabel')">
                <el-tooltip :content="$t('tools.periodTooltip')" placement="bottom" effect="light">
                  <el-input
                    v-model="form.shortPeriod"
                    :placeholder="$t('tools.dayInputPlaceholder')"
                  />
                </el-tooltip>
              </el-form-item>

              <el-form-item :label="$t('tools.longPeriodLabel')">
                <el-input v-model="form.longPeriod" :placeholder="$t('tools.dayInputPlaceholder')" />
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="onSubmit('form')">{{ $t('tools.calcButton') }}</el-button>
              </el-form-item>
            </el-form>
          </el-card>
        </div>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card" style="margin-top:5px;">
          <div slot="header" class="clearfix">
            <i class="el-icon-paperclip" />
            <span style="margin-left:10px;">{{ $t('tools.tips') }}</span>
          </div>
          <el-tag>{{ $t('tools.calendarTipsTag') }}</el-tag>
          <p class="atips">&nbsp;&nbsp;&nbsp;&nbsp;{{ $t('tools.calendarTipsContent') }}</p>
          <el-tag type="warning">{{ $t('tools.warmTipsTag') }}</el-tag>
          <p class="atips">&nbsp;&nbsp;&nbsp;&nbsp;{{ $t('tools.warmTipsTagContent') }}</p>
        </el-card>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="16">
        <div class="grid-content bg-purple-light">
          <el-card class="box-card" style="margin-top:5px;">
            <div slot="header" class="clearfix">
              <i class="el-icon-date" />
              <span style="margin-left:10px;">{{ $t('tools.calcResult') }}</span>
            </div>
            <el-row type="flex" justify="center">
              <el-col :span="5" :offset="4">
                <el-tag type="info">{{ $t('tools.today') }}✔️</el-tag>
              </el-col>
              <el-col :span="5">
                <el-tag type="success">{{ $t('tools.safeDay') }}</el-tag>
              </el-col>
              <el-col :span="5">
                <el-tag type="danger">{{ $t('tools.ovulation') }}</el-tag>
              </el-col>
              <el-col :span="5">
                <el-tag type="warning">{{ $t('tools.period') }}</el-tag>
              </el-col>
            </el-row>
            <div style="line-height:1;font-size:14px">
              <el-calendar>
                <template slot="dateCell" slot-scope="{date, data}">
                  <div>
                    {{ data.day.split('-')[2] }} {{ (dateFormat(new Date()) == data.day) ? '✔️': '' }}
                    <div v-if="getDisplyTag() == true" style="margin-top:20px">
                      <el-tag
                        v-if="judgeDayTypeWrapper(data.day,form.lastPeriod,form.shortPeriod,form.longPeriod) == 'isPeriodDay'"
                        type="warning"
                      >{{ $t('tools.period') }}</el-tag>
                      <el-tag
                        v-else-if="judgeDayTypeWrapper(data.day,form.lastPeriod,form.shortPeriod,form.longPeriod) == 'isOvulationDay'"
                        type="danger"
                      >{{ $t('tools.ovulation') }}</el-tag>
                      <el-tag v-else type="success">{{ $t('tools.safeDay') }}</el-tag>
                    </div>
                  </div>
                </template>
              </el-calendar>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'SafeDaysCalculator',
  data() {
    return {
      form: {
        lastPeriod: '',
        shortPeriod: 28,
        longPeriod: 28,
        calcResult: {
          showTag: false
        },
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now()
          },
          shortcuts: [
            {
              text: '今天',
              onClick(picker) {
                picker.$emit('pick', new Date())
              }
            },
            {
              text: '昨天',
              onClick(picker) {
                const date = new Date()
                date.setTime(date.getTime() - 3600 * 1000 * 24)
                picker.$emit('pick', date)
              }
            },
            {
              text: '一周前',
              onClick(picker) {
                const date = new Date()
                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
                picker.$emit('pick', date)
              }
            }
          ]
        }
      },
      rules: {
        lastPeriod: [
          {
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }
        ]
      }
    }
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.setDisplayTag()
        } else {
          return false
        }
      })
    },
    judgeDayTypeWrapper(thisDay, lastPeriod, shortPeriod, longPeriod) {
      /** 入参格式化成时间戳，方便计算 */
      const thisDayTimestamp = new Date(thisDay).getTime()
      // console.log(thisDayTimestamp);
      // 月经日，时间转化成时间戳去计算
      const priodDayTimestamp = lastPeriod.getTime()
      // 月经周期换算成时间戳
      const avgPriod = this.calcAvgPriod(shortPeriod, longPeriod)
      const priodTimestamp = this.days2TimestampFormat(avgPriod)

      return this.judgeDayType(
        thisDayTimestamp,
        priodDayTimestamp,
        priodTimestamp
      )
    },
    judgeDayType(thisDayTimestamp, priodDayTimestamp, priodTimestamp) {
      // 计算排卵日日期
      const ovulationDayObj = this.calcOvulationDay(
        priodDayTimestamp,
        priodTimestamp
      )
      // 计算月经日日期
      const priodDayObj = this.calcPeriodDay(priodDayTimestamp)
      if (thisDayTimestamp < priodDayObj.startPriodDay) {
        priodDayTimestamp -= priodTimestamp
        return this.judgeDayType(
          thisDayTimestamp,
          priodDayTimestamp,
          priodTimestamp
        )
      } else if (
        thisDayTimestamp >
        priodDayObj.startPriodDay + priodTimestamp
      ) {
        priodDayTimestamp += priodTimestamp
        return this.judgeDayType(
          thisDayTimestamp,
          priodDayTimestamp,
          priodTimestamp
        )
      } else {
        /* continue regardless of error */
      }
      if (
        thisDayTimestamp > priodDayObj.startPriodDay &&
        thisDayTimestamp < priodDayObj.endPriodDay
      ) {
        return 'isPeriodDay'
      } else if (
        thisDayTimestamp > ovulationDayObj.startOvuationDay &&
        thisDayTimestamp < ovulationDayObj.endOvulationDay
      ) {
        return 'isOvulationDay'
      } else {
        return 'isSafeDay'
      }
    },
    setDisplayTag() {
      this.form.calcResult.showTag = true
    },
    getDisplyTag() {
      return this.form.calcResult.showTag
    },
    dateFormat(Date) {
      /** 格式化时间成 yyyy-MM-dd */
      const Y = Date.getFullYear()
      let M = Date.getMonth() + 1
      M = M < 10 ? '0' + M : M // 不够两位补充0
      let D = Date.getDate()
      D = D < 10 ? '0' + D : D
      return Y + '-' + M + '-' + D
    },
    days2TimestampFormat(days) {
      return days * 3600 * 1000 * 24
    },
    calcOvulationDay(priodDay, priod) {
      /** 计算排卵期 */
      const ovulationDayTimestamp =
        priodDay + priod - this.days2TimestampFormat(14)
      // 返回值是时间戳
      return {
        startOvuationDay: ovulationDayTimestamp - this.days2TimestampFormat(5),
        endOvulationDay: ovulationDayTimestamp + this.days2TimestampFormat(5)
      }
    },
    calcPeriodDay(priodDayTimestamp) {
      /** 计算月经期 */
      return {
        startPriodDay: priodDayTimestamp,
        endPriodDay: priodDayTimestamp + this.days2TimestampFormat(5)
      }
    },
    calcAvgPriod(shortPeriod, longPeriod) {
      // 计算月经周期平均天数
      return Math.round((parseInt(shortPeriod) + parseInt(longPeriod)) / 2)
    }
  }
}
</script>

<style  scoped>
.atips {
  line-height: 1.5;
  font-size: 14px;
}
</style>
