<template>
  <div id="consigList">
    <van-address-list
    v-model="chosenAddressId"
    :list="list"
    :disabled-list="disabledList"
    disabled-text="以下地址超出配送范围"
    @add="onAdd"
    @edit="onEdit"
  />
  </div> 
</template>

<script type='text/ecmascript-6'>
import { mapState } from "vuex";
import { AddressList } from "vant";
export default {
  name: "consigList",
  components: {
    [AddressList.name]: AddressList
  },
  props: {},
  data() {
    return {
      chosenAddressId: "1",
      list: [],
      disabledList: []
    };
  },
  watch: {
    consigList: {
      handler: function(val) {
        this.list = val[0].list;
        this.disabledList = val[1].disList;
      },
      deep: true
    }
  },
  computed: {
    ...mapState(["consigList"])
  },
  methods: {
    onAdd() {
      this.$store.commit("ADDRESSEDIT", {}); //添加新的收货人信息
      this.$store.commit("iS_CONSIG_ADD", false);
    },
    onEdit(item, index) {
      // console.log(item,index)
      this.$store.commit("ADDRESSEDIT", { item, index }); //修改选择的收货人信息
      this.$store.commit("iS_CONSIG_ADD", false);
    }
  },
  created() {
    this.$store.dispatch("getConsigList");
  }
};
</script>

<style lang='less' scoped>
</style>