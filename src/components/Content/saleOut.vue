<template>
  <section id="sale-out">
    <div class="wrapper">
      <div class="sale-out">
        <div class="sale-out__inner">
          <h2 class="section-title sale-out-title">Распродажа</h2>
          <div class="sale-out__content">
            <!-- <sale-out-tabs-navigation class="sale-out__nav"></sale-out-tabs-navigation> -->
            <sale-out-tabs
              @setActiveIndex="setActiveIndex"
              :tabs="tabs"
              :activeTab="activeTab"
              @prev="prev"
              @next="next"
            />
            <sale-out-tabs-content
              v-for="(tab, index) in tabs"
              v-show="activeTab === index"
              :key="index"
              :activeTab="activeTab"
              :tabsData="tabs[index]"
              :class="{ active: activeTab === index }"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import saleOutTabs from "@/components/SaleOut/saleOutTabs.vue";
import saleOutTabsContent from "@/components/SaleOut/saleOutTabsContent.vue";
import saleOutTabsNavigation from "@/components/SaleOut/saleOutTabsNavigation.vue";
export default {
  data() {
    return {
      activeTab: 0,
      getTabsLength() {
        return this.tabNames.length;
      },
      tabs: [
        {
          name: "Кольца",
          items: [
            {
              badges: [{ type: "sale", name: "sale" }],
              currentPrice: "41 000 ₽",
              discount: "65 000 ₽",
              label: "-45%",
              description: "Стильное кольцо из белого золота c бриллиантами",
            },
            {
              badges: null,
              currentPrice: "56 000 ₽",
              discount: null,
              label: null,
              description: "Стильное кольцо из белого золота c бриллиантами",
            },
            {
              badges: null,
              currentPrice: "37 500 ₽",
              discount: null,
              label: null,
              description: "Стильное кольцо из белого золота c бриллиантами",
            },
            {
              badges: null,
              currentPrice: "39 200 ₽",
              discount: null,
              label: null,
              description: "Стильное кольцо из белого золота c бриллиантами",
            },
            {
              badges: [
                { type: "sale", name: "sale" },
                { type: "hit", name: "хит" },
                { type: "new", name: "new" },
              ],
              currentPrice: "41 000 ₽",
              discount: "65 000 ₽",
              label: "-45%",
              description: "Стильное кольцо из белого золота c бриллиантами",
            },
            {
              badges: null,
              currentPrice: "56 000 ₽",
              discount: null,
              label: null,
              description: "Стильное кольцо из белого золота c бриллиантами",
            },
            {
              badges: [{ type: "new", name: "new" }],
              currentPrice: "37 500 ₽",
              discount: null,
              label: null,
              description: "Стильное кольцо из белого золота c бриллиантами",
            },
            {
              badges: [{ type: "hit", name: "хит" }],
              currentPrice: "39 200 ₽",
              discount: null,
              label: null,
              description: "Стильное кольцо из белого золота c бриллиантами",
            },
          ],
        },
        {
          name: "Серьги",
          items: [
            {
              badges: [{ type: "sale", name: "sale" }],
              currentPrice: "31 000 ₽",
              discount: "65 000 ₽",
              label: "-45%",
              description: "Стильная серьга из белого золота c бриллиантами",
            },
            {
              badges: null,
              currentPrice: "26 000 ₽",
              discount: null,
              label: null,
              description: "Стильная серьга из белого золота c бриллиантами",
            },
            {
              badges: null,
              currentPrice: "67 500 ₽",
              discount: null,
              label: null,
              description: "Стильная серьга из белого золота c бриллиантами",
            },
            {
              badges: null,
              currentPrice: "79 200 ₽",
              discount: null,
              label: null,
              description: "Стильная серьга из белого золота c бриллиантами",
            },
            {
              badges: [
                { type: "sale", name: "sale" },
                { type: "new", name: "new" },
              ],
              currentPrice: "41 000 ₽",
              discount: "65 000 ₽",
              label: "-45%",
              description: "Стильная серьга из белого золота c бриллиантами",
            },
            {
              badges: null,
              currentPrice: "56 000 ₽",
              discount: null,
              label: null,
              description: "Стильная серьга из белого золота c бриллиантами",
            },
            {
              badges: [{ type: "new", name: "new" }],
              currentPrice: "37 500 ₽",
              discount: null,
              label: null,
              description: "Стильная серьга из белого золота c бриллиантами",
            },
            {
              badges: [{ type: "hit", name: "хит" }],
              currentPrice: "39 200 ₽",
              discount: null,
              label: null,
              description: "Стильная серьга из белого золота c бриллиантами",
            },
          ],
        },
        {
          name: "Браслеты",
          items: [
            {
              badges: [{ type: "sale", name: "sale" }],
              currentPrice: "31 000 ₽",
              discount: "65 000 ₽",
              label: "-45%",
              description: "Браслет из белого золота c бриллиантами",
            },
            {
              badges: null,
              currentPrice: "26 000 ₽",
              discount: null,
              label: null,
              description: "Браслет из белого золота c бриллиантами",
            },
            {
              badges: null,
              currentPrice: "67 500 ₽",
              discount: null,
              label: null,
              description: "Браслет из белого золота c бриллиантами",
            },
            {
              badges: null,
              currentPrice: "79 200 ₽",
              discount: null,
              label: null,
              description: "Браслет из белого золота c бриллиантами",
            },
            {
              badges: [
                { type: "sale", name: "sale" },
                { type: "new", name: "new" },
              ],
              currentPrice: "41 000 ₽",
              discount: "65 000 ₽",
              label: "-45%",
              description: "Браслет из белого золота c бриллиантами",
            },
            {
              badges: null,
              currentPrice: "56 000 ₽",
              discount: null,
              label: null,
              description: "Браслет из белого золота c бриллиантами",
            },
            {
              badges: [{ type: "new", name: "new" }],
              currentPrice: "37 500 ₽",
              discount: null,
              label: null,
              description: "Браслет из белого золота c бриллиантами",
            },
            {
              badges: [{ type: "hit", name: "хит" }],
              currentPrice: "39 200 ₽",
              discount: null,
              label: null,
              description: "Браслет из белого золота c бриллиантами",
            },
          ],
        },
        {
          name: "Часы",
          items: [
            {
              badges: [{ type: "sale", name: "sale" }],
              currentPrice: "31 000 ₽",
              discount: "65 000 ₽",
              label: "-45%",
              description: "Часы c бриллиантами",
            },
            {
              badges: null,
              currentPrice: "26 000 ₽",
              discount: null,
              label: null,
              description: "Часы c бриллиантами",
            },
            {
              badges: null,
              currentPrice: "67 500 ₽",
              discount: null,
              label: null,
              description: "Часы c бриллиантами",
            },
            {
              badges: null,
              currentPrice: "79 200 ₽",
              discount: null,
              label: null,
              description: "Часы c бриллиантами",
            },
            {
              badges: [
                { type: "sale", name: "sale" },
                { type: "new", name: "new" },
              ],
              currentPrice: "41 000 ₽",
              discount: "65 000 ₽",
              label: "-45%",
              description: "Часы c бриллиантами",
            },
            {
              badges: null,
              currentPrice: "56 000 ₽",
              discount: null,
              label: null,
              description: "Часы c бриллиантами",
            },
            {
              badges: [{ type: "new", name: "new" }],
              currentPrice: "37 500 ₽",
              discount: null,
              label: null,
              description: "Часы c бриллиантами",
            },
            {
              badges: [{ type: "hit", name: "хит" }],
              currentPrice: "39 200 ₽",
              discount: null,
              label: null,
              description: "Часы c бриллиантами",
            },
          ],
        },
      ],
    };
  },
  methods: {
    setActiveIndex(index) {
      console.log("clicked tab index: " + index);
      this.activeTab = index;
    },
  },
  mounted() {
    // let tabsLength = this.tabsData.getTabsLength();
  },
  components: {
    saleOutTabs,
    saleOutTabsContent,
    saleOutTabsNavigation,
  },
};
</script>

<style lang="scss" scoped>
.sale-out__content {
  position: relative;
  width: 100%;
  max-width: 1340px;
}

.sale-out__nav {
  position: absolute;
  top: -15px;
  right: 0;
}

.sale-out__inner {
  margin-top: 120px;
}

.sale-out-title {
  font-family: "Prata";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 100%;
  color: #303030;
  margin-bottom: 24px;
}
</style>
