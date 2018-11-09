<template>
  <div>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :address-info ="addressInfo"
      :search-result="searchResult"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script type='text/ecmascript-6'>
import { AddressEdit, Area } from "vant";
import areaList from "@/assets/js/area";
export default {
  name: "addressList",
  components: {
    [AddressEdit.name]: AddressEdit,
    [Area.name]: Area
  },
  data() {
    return {
      areaList,
      searchResult: [],
      addressInfo: this.$store.state.addresObj
    };
  },
  methods: {
    onSave(val) {
      // console.log(val);
      // console.log(val.id);
      // console.log(val.name);
      // console.log(val.tel);
      // console.log(val.province);
      // console.log(val.city);
      // console.log(val.county);
      // console.log(val.addressDetail);
      // console.log(val.areaCode);
      // console.log(val.postalCode);
      this.$store.commit("ADDRESSEDIT", val);
      this.$store.commit("iS_CONSIG_ADD", true);
      this.$store.commit("IS_HEAD_ICON", true); //head(logo / back)
    },
    onDelete(val) {
      //console.log(val,"123")
      this.$store.commit("iS_CONSIG_ADD", true);
      this.$store.commit("IS_HEAD_ICON", false); //head(logo / back)
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "钟楼",
            address: "西安市中心"
          },
          {
            name: "捷瑞智能大厦",
            address: "西安市东二环"
          }
        ];
      } else {
        this.searchResult = [];
      }
    }
  },
  created() {
    this.$store.commit("IS_HEAD_ICON", true); //head(logo / back)
  }
};
</script>

<style lang='less' scoped>
</style>