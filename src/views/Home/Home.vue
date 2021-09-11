<template>
  <div>
    <home-banner :banners="banners"></home-banner>
    <video-list :videoList="videoList"> </video-list>
    <common-footer></common-footer>
  </div>
</template>

<script>
import HomeBanner from "./Component/Banner.vue";
import VideoList from "./Component/VideoList.vue";
import CommonFooter from "@/components/CommonFooter";
import { getBanner, getVideoList } from "@/api/index.js";

export default {
  name: "Home",
  //注册组件
  components: {
    HomeBanner,
    VideoList,
    CommonFooter,
  },
  //声明数据源
  data() {
    return {
      banners: [],
      videoList: [],
    };
  },

  mounted() {
    //页面渲染完成调用方法获取数据
    this.getBannerData();
    this.getVList();
  },
  //定义方法
  methods: {
    // 获取轮播图数据
    async getBannerData() {
      try {
        const result = await getBanner();
        console.log(result);
        if (result.data.code == 0) {
          this.banners = result.data.data;
        }
      } catch (error) {
        console.log(error);
      }
    },

    //获取视频列表
    async getVList() {
      try {
        const result = await getVideoList();
        if (result.data.code == 0) {
          this.videoList = result.data.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
