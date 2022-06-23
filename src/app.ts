export const qiankun = {
  // 子应用在挂载完成时，打印 props 信息
  async afterMount(props: any) {
    console.log('[umi-qiankun-sub1] afterMount', props);
  },
};
