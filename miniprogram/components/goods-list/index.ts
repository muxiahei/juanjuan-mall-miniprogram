// components/goods-list/index.ts
Component({
  externalClasses: ['wr-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    goodsList: {
      type: Array,
      value: [],
    },
    id: {
      type: String,
      value: '',
      observer: (id:String) => {
        globalThis.genIndependentID(id);
      },
    },
    thresholds: {
      type: Array,
      value: [],
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    independentID: '',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClickGoods(e:any) {
      const { index } = e.currentTarget.dataset;
      this.triggerEvent('click', { ...e.detail, index });
    },
    // 加入购入车
    onAddCart(e:any) {
      const { index } = e.currentTarget.dataset;
      this.triggerEvent('addcart', { ...e.detail, index });
    },
    //
    onClickGoodsThumb(e:any) {
      const { index } = e.currentTarget.dataset;
      this.triggerEvent('thumb', { ...e.detail, index });
    },
    init() {
      this.genIndependentID(this.id || '');
    },
    //获取
    genIndependentID(id:string) {
      if (id) {
        this.setData({ independentID: id });
      } else {
        this.setData({
          independentID: `goods-list-${~~(Math.random() * 10 ** 8)}`,
        });
      }
    },
  }
})
