<template>
  <section id="popular-products">
    <div class="wrapper">
      <div class="popular-products">
        <div class="popular-products__inner">
          <div class="popular-products-content">
            <h2 class="section-title popular-products-title">Популярные категории</h2>
            <div class="categories">
              <ul class="categories__list">
                <li class="categories__list-item">
                  <a class="popular-product" href="#">
                    <div class="popular-product-image">
                      <img
                        src="@/assets/img/popular/popular-item1.png"
                        alt="popular product"
                      />
                    </div>
                    <div class="popular-product-name">Кольца</div>
                  </a>
                </li>
                <li class="categories__list-item">
                  <a class="popular-product" href="#">
                    <div class="popular-product-image">
                      <img
                        src="@/assets/img/popular/popular-item2.png"
                        alt="popular product"
                      />
                    </div>
                    <div class="popular-product-name">Серьги</div>
                  </a>
                </li>
                <li class="categories__list-item">
                  <a class="popular-product" href="#">
                    <div class="popular-product-image">
                      <img
                        src="@/assets/img/popular/popular-item3.png"
                        alt="popular product"
                      />
                    </div>
                    <div class="popular-product-name">Помолвочные кольца</div>
                  </a>
                </li>
                <li class="categories__list-item">
                  <a class="popular-product" href="#">
                    <div class="popular-product-image">
                      <img
                        src="@/assets/img/popular/popular-item4.png"
                        alt="popular product"
                      />
                    </div>
                    <div class="popular-product-name">Браслеты</div>
                  </a>
                </li>
                <li class="categories__list-item">
                  <a class="popular-product" href="#">
                    <div class="popular-product-image">
                      <img
                        src="@/assets/img/popular/popular-item5.png"
                        alt="popular product"
                      />
                    </div>
                    <div class="popular-product-name">Колье и подвески</div>
                  </a>
                </li>
                <li class="categories__list-item">
                  <a class="popular-product" href="#">
                    <div class="popular-product-image">
                      <img
                        src="@/assets/img/popular/popular-item6.png"
                        alt="popular product"
                      />
                    </div>
                    <div class="popular-product-name">Часы</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/imports.scss";
.wrapper {
}
.popular-products {
  &__inner {
    margin-top: 120px;
  }
}
.popular-products-content {
}
.section-title {
}
.popular-products-title {
  @include fs($ff_P, 40px, $primary, 400);
  margin-bottom: 40px;
}
.categories {
  &__list {
    @include fdrjsb_aic;
  }

  &__list-item {
    @include fdrjc_aic;
    flex: 0 0 calc(100% / 6);
    max-width: calc(100% / 6);
  }
}

.popular-product {
  @include fdcje_aic;
  position: relative;
  width: 100%;
  max-width: 200px;
  min-width: 200px;
  height: 100%;
  min-height: 259px;
  max-height: 259px;
  padding: 37px 31px 25px 29px;
  background-color: $other;
  text-align: center;

  &:hover {
    opacity: 1;
    & .popular-product-image img {
      transform: translate(-50%, -50%) scale(1.27);
    }
  }
}

.popular-product-image {
  height: 100%;
  width: 100%;
  min-width: 200px;

  & img {
    -o-object-fit: contain;
    object-fit: contain;
    transition: 0.2s;
    position: absolute;
    left: 50%;
    top: 43%;
    transform: translate(-50%, -50%) scale(1);
    width: 61%;
  }
}
.popular-product-name {
  display: flex;
  flex-direction: column;
  @include fs($ff_I, 16px, $primary, 400);
}

@media screen and (max-width: 1266px) {
  .categories__list {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .categories__list-item {
    flex: 0 0 calc(100% / 4);
    max-width: calc(100% / 4);
    margin: 10px 0;
  }

  .popular-products-title {
    margin-bottom: 20px;
  }
}
@media screen and (max-width: 886px) {
  .categories__list-item {
    flex: 0 0 calc(100% / 3);
    max-width: calc(100% / 3);
  }
}

@media screen and (max-width: 668px) {
  .categories__list-item {
    flex: 0 0 calc(100% / 2);
    max-width: calc(100% / 2);
  }
}

@media screen and (max-width: 460px) {
  .popular-product {
    width: 130px;
  }
}

@media screen and (max-width: 460px) {
  .categories__list {
    flex-direction: column;
  }
  .categories__list-item {
    flex: 0 0 100%;
    max-width: 100%;
    width: 100%;
  }
  .popular-product {
    flex-direction: row-reverse;
    max-width: 100%;
    min-width: 100%;
    min-height: 80px;
    padding: 25px 20px;
    justify-content: flex-end;
  }
  .popular-product-image {
    position: absolute;
    top: 0;
    right: 0;
    justify-content: flex-end;
    display: flex;
    height: 100%;
    & img {
      padding: 10px;
      position: static;
      transform: none;
      width: 78px;
    }
  }
}

@media screen and (max-width: 319px) {
  .popular-product-image {
    display: none;
  }

  .popular-product {
    min-height: 40px;
    padding: 5px 10px;
    justify-content: center;
  }
}
</style>
