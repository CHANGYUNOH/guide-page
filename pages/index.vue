<template>
    <div class="publish-guide">
        <div class="progress-bar" :style="{ width: scrollProgress + '%' }"></div>
        <div class="top">
            <a href="/guide"><img src="/assets/images/default/img_logo.png" alt="x-coach"></a>
            <p>Design style guide v.1</p>
       </div>
       <nav :class="{ 'is-active' : handleMenu }">
            <button type="button" class="btn-menu" @click="handleMenu = !handleMenu">
                <img src="/assets/images/icon/icon_list.png" />
            </button>
            <dl>
                <dd v-for="(item, index) in gnbList" :key="index">
                    <a  :href="`# + ${item.name}`" 
                        :data-section-id="item.name"
                        :class="{ 'is-active' : item.name === 'Colors' }"
                        ref="gnbListlink"
                        @click.prevent="scrollTo(item.name, $event)">{{ item.name }}</a>
                </dd>
            </dl>
       </nav>
       <main>
            <section class="container" id="Colors">
                <h2 class="title">Colors</h2>
                <div class="cont">
                    <p class="desc">Primary Color</p>
                    <div class="color">
                        <div class="color-list" v-for="(item, index) in PrimaryColor" :key="index">
                            <div class="color-list-item" @click="colorCopy(item.color)">
                                <div :style="{ backgroundColor: '#' + item.color }"></div>
                                <p>#{{ item.color }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cont">
                    <p class="desc">Indicatation Color</p>
                    <div class="color">
                        <div class="color-list" v-for="(item, index) in IndicatationColor" :key="index">
                            <div class="color-list-item" @click="colorCopy(item.color)">
                                <div :style="{ backgroundColor: '#' +  item.color }"></div>
                                <p>#{{ item.color }}</p>
                            </div>
                        </div>
                    </div>
                    <transition name="fade">
                        <div class="toast-modal" ref="toastRef" v-if="colorMessageShow">
                            <p class="message">{{ colorMessage }}</p>
                        </div>
                    </transition>
                </div>
                <div class="cont">
                    <p class="desc">Grayscale Color</p>
                    <div class="color">
                        <div class="color-list" v-for="(item, index) in GrayscaleColor" :key="index">
                            <div class="color-list-item" @click="colorCopy(item.color)">
                                <div :style="{ backgroundColor: '#' + item.color }"></div>
                                <p>#{{ item.color }}</p>
                            </div>
                            <div class="color-list-sub" v-if="item.name">{{ item.name }}</div>
                        </div>
                    </div>
                </div>
                <div class="cont">
                    <p class="desc">Accent Color</p>
                    <div class="color">
                        <div class="color-list" v-for="(item, index) in AccentColor" :key="index">
                            <div class="color-list-item" @click="colorCopy(item.color)">
                                <div :style="{ backgroundColor: '#' + item.color }"></div>
                                <p>#{{ item.color }}</p>
                            </div>
                            <div class="color-list-sub" v-if="item.name">{{ item.name }}</div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="container" id="Tyopgraphy">
                <h2 class="title">Tyopgraphy</h2>
                <div class="cont">
                    <p class="desc">Typeface</p>
                    <div class="font">
                        <p class="font-list" style="font-family: 'Pretendard'; font-weight: 400;">Pretendard / Regular 400</p>
                        <p class="font-list" style="font-family: 'Pretendard'; font-weight: 500;">Pretendard / Medium 500</p>
                        <p class="font-list" style="font-family: 'Pretendard'; font-weight: 700;">Pretendard / Bold 700</p>
                        <br>
                        <p class="font-list" style="font-family:'Montserrat'; font-weight: 400;">Montserrat / Regular 400</p>
                        <p class="font-list" style="font-family:'Montserrat'; font-weight: 500;">Montserrat / Medium 500</p>
                        <p class="font-list" style="font-family:'Montserrat'; font-weight: 700;">Montserrat / Bold 700</p>
                    </div>
                </div>
                <div class="cont">
                    <p class="desc">Headings</p>
                    <div class="font" style="line-height: 1.5;">
                        <h1>h1. heading 48px</h1>
                        <h2>h2. heading 32px</h2>
                        <h3>h3. heading 28px</h3>
                        <h4>h4. heading 24px</h4>
                        <h5>h5. heading 20px</h5>
                        <h6>h6. heading 16px</h6>
                    </div>
                </div>
                <div class="cont">
                    <p class="desc">Display Headings</p>
                    <div class="font">
                        <p class="font-list" style="font-size: 80px;">Display1 80px</p>
                        <p class="font-list" style="font-size: 72px;">Display2 72px</p>
                        <p class="font-list" style="font-size: 64px;">Display3 64px</p>
                        <p class="font-list" style="font-size: 56px;">Display4 56px</p>
                        <p class="font-list" style="font-size: 48px;">Display5 48px</p>
                        <p class="font-list" style="font-size: 40px;">Display6 40px</p>
                    </div>
                </div>
            </section>
            <section class="container" id="Icons">
                <h2 class="title">Icons</h2>
                <div class="cont">
                    <p class="desc">Google Material Symbols</p>
                    <div class="icons">
                        <ul>
                            <li v-for="(item, index) in iconList" :key="index" @click="iconCopy(item.name)">
                                <img :src="`/images/icon/${item.name}.png`" alt="">
                            </li>
                        </ul>
                        <!-- <ul>
                            <li @click="iconCopy('icon_check')">
                                <img src="/assets/images/icon/icon_check.png">
                            </li>
                            <li @click="iconCopy('icon_check_fill')">
                                <img src="/assets/images/icon/icon_check_fill.png">
                            </li>
                            <li @click="iconCopy('icon_eye')">
                                <img src="/assets/images/icon/icon_eye.png">
                            </li>
                            <li @click="iconCopy('icon_heart_fill')">
                                <img src="/assets/images/icon/icon_heart_fill.png">
                            </li>
                            <li @click="iconCopy('icon_heart_line')">
                                <img src="/assets/images/icon/icon_heart_line.png">
                            </li>
                            <li @click="iconCopy('icon_comment_fill')">
                                <img src="/assets/images/icon/icon_comment_fill.png">
                            </li>
                            <li @click="iconCopy('icon_comment_line')">
                                <img src="/assets/images/icon/icon_comment_line.png">
                            </li>
                            <li @click="iconCopy('icon_star_fill')">
                                <img src="/assets/images/icon/icon_star_fill.png">
                            </li>
                            <li @click="iconCopy('icon_star_line')">
                                <img src="/assets/images/icon/icon_star_line.png">
                            </li>
                            <li @click="iconCopy('icon_close')">
                                <img src="/assets/images/icon/icon_close.png">
                            </li>
                            <li @click="iconCopy('icon_arrow_down')">
                                <img src="/assets/images/icon/icon_arrow_down.png">
                            </li>
                            <li @click="iconCopy('icon_arrow_up')">
                                <img src="/assets/images/icon/icon_arrow_up.png">
                            </li>
                            <li @click="iconCopy('icon_arrow_prev')">
                                <img src="/assets/images/icon/icon_arrow_prev.png">
                            </li>
                            <li @click="iconCopy('icon_arrow_next')">
                                <img src="/assets/images/icon/icon_arrow_next.png">
                            </li>
                            <li @click="iconCopy('icon_plus')">
                                <img src="/assets/images/icon/icon_plus.png">
                            </li>
                            <li @click="iconCopy('icon_minus')">
                                <img src="/assets/images/icon/icon_minus.png">
                            </li>
                            <li @click="iconCopy('icon_video_camera')">
                                <img src="/assets/images/icon/icon_video_camera.png">
                            </li>
                            <li @click="iconCopy('icon_share')">
                                <img src="/assets/images/icon/icon_share.png">
                            </li>
                            <li @click="iconCopy('icon_calendar')">
                                <img src="/assets/images/icon/icon_calendar.png">
                            </li>
                            <li @click="iconCopy('icon_search')">
                                <img src="/assets/images/icon/icon_search.png">
                            </li>
                        </ul>
                        <ul>
                            <li @click="iconCopy('icon_location')">
                                <img src="/assets/images/icon/icon_location.png">
                            </li>
                            <li @click="iconCopy('icon_flag')">
                                <img src="/assets/images/icon/icon_flag.png">
                            </li>
                            <li @click="iconCopy('icon_call')">
                                <img src="/assets/images/icon/icon_call.png">
                            </li>
                            <li @click="iconCopy('icon_my_location')">
                                <img src="/assets/images/icon/icon_my_location.png">
                            </li>
                            <li @click="iconCopy('icon_explore_fill')">
                                <img src="/assets/images/icon/icon_explore_fill.png">
                            </li>
                            <li @click="iconCopy('icon_explore_line')">
                                <img src="/assets/images/icon/icon_explore_line.png">
                            </li>
                            <li @click="iconCopy('icon_information')">
                                <img src="/assets/images/icon/icon_information.png">
                            </li>
                            <li @click="iconCopy('icon_clip')">
                                <img src="/assets/images/icon/icon_clip.png">
                            </li>
                            <li @click="iconCopy('icon_time_fill')">
                                <img src="/assets/images/icon/icon_time_fill.png">
                            </li>
                            <li @click="iconCopy('icon_time_line')">
                                <img src="/assets/images/icon/icon_time_line.png">
                            </li>
                            <li @click="iconCopy('icon_flag_hole')">
                                <img src="/assets/images/icon/icon_flag_hole.png">
                            </li>
                            <li @click="iconCopy('icon_power')">
                                <img src="/assets/images/icon/icon_power.png">
                            </li>
                            <li @click="iconCopy('icon_manage_accounts')">
                                <img src="/assets/images/icon/icon_manage_accounts.png">
                            </li>
                            <li @click="iconCopy('icon_list')">
                                <img src="/assets/images/icon/icon_list.png">
                            </li>
                            <li @click="iconCopy('icon_sort')">
                                <img src="/assets/images/icon/icon_sort.png">
                            </li>
                            <li @click="iconCopy('icon_link')">
                                <img src="/assets/images/icon/icon_link.png">
                            </li>
                            <li @click="iconCopy('icon_sns_youtube')">
                                <img src="/assets/images/icon/icon_sns_youtube.png">
                            </li>
                            <li @click="iconCopy('icon_sns_medium')">
                                <img src="/assets/images/icon/icon_sns_medium.png">
                            </li>
                            <li @click="iconCopy('icon_sns_facebook')">
                                <img src="/assets/images/icon/icon_sns_facebook.png">
                            </li>
                            <li @click="iconCopy('icon_sns_instagram')">
                                <img src="/assets/images/icon/icon_sns_instagram.png">
                            </li>
                        </ul> -->
                    </div>
                </div>
            </section>
            <section class="container" id="Forms">
                <h2 class="title">Forms</h2>
                <div class="cont">
                    <p class="desc">Styling & Sizing</p>
                    <div class="forms">
                        <div class="forms-list">
                            <div class="forms-list-row">
                                <div class="input-text">
                                    <input type="text" class="lg" placeholder=".form-control-lg" style="width: 320px;">
                                    <span class="focus-border">
                                        <i></i>
                                    </span>
                                </div>
                            </div>
                            <div class="forms-list-row">
                                <div class="select-default">
                                    <select class="lg" style="width: 320px;">
                                        <option>.form-select-lg</option>
                                    </select>
                                    <span class="focus-border">
                                        <i></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="forms-list">
                            <div class="forms-list-row">
                                <div class="input-text">
                                    <input type="text" class="md" placeholder=".form-control-md" style="width: 320px;">
                                    <span class="focus-border">
                                        <i></i>
                                    </span>
                                </div>
                            </div>
                            <div class="forms-list-row">
                                <div class="select-default">
                                    <select class="md" style="width: 320px;">
                                        <option>.form-select-md</option>
                                    </select>
                                    <span class="focus-border">
                                        <i></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="forms-list">
                            <div class="forms-list-row">
                                <div class="input-text">
                                    <input type="text" class="sm" placeholder=".form-control-sm" style="width: 320px;">
                                    <span class="focus-border">
                                        <i></i>
                                    </span>
                                </div>
                            </div>
                            <div class="forms-list-row">
                                <div class="select-default">
                                    <select class="sm" style="width: 320px;">
                                        <option>.form-select-sm</option>
                                    </select>
                                    <span class="focus-border">
                                        <i></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="forms-list">
                            <div class="forms-list-row">
                                <div class="input-search">
                                    <div class="input-text">
                                        <input type="text" 
                                               v-model="inputSearch"
                                               @input="handleInput"
                                               placeholder="검색내용을 입력하세요." 
                                               style="width: 320px;">
                                        <span class="focus-border">
                                            <i></i>
                                        </span>
                                        <button type="button" class="btn-close" v-if="isClose" @click="handleInputSearch">
                                            <i />
                                        </button>
                                        <button type="button" class="btn-search" v-else>
                                            <i />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="forms-list-row">
                                <div class="form-list">
                                    <div class="input-text">
                                        <input type="text" style="width: 320px;"
                                        placeholder="Search" 
                                        :class="{ 'is-active' : selectShow === true }" 
                                        readonly
                                        :value="selectInput"
                                        class="lg"
                                        @click="selectShow = !selectShow">
                                        <span class="focus-border">
                                            <i></i>
                                        </span>
                                    </div>
                                    <img src="/assets/images/icon/icon_arrow_down.png" :class="{ 'is-active' : selectShow }">
                                    <transition name="slide">
                                        <ul class="select-list" v-if="selectShow" ref="inputContRef">
                                            <li class="select-list-item" v-for="(item, index) in optionList" :key="index">
                                                <div class="select-item">
                                                    <input type="radio" id="radio_0" name="radio_custom" :value="item" v-model="inputItems" @click="selectShow = false">
                                                    <label for="radio_0">{{ item }}</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </transition>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cont">
                    <p class="desc">Status & Validation</p>
                    <div class="forms-list">
                        <div class="forms-list-row">
                            <div class="input-text">
                                <input type="text" class="input-text-lg" placeholder="Empty" style="width: 320px;">
                                <span class="focus-border">
                                    <i></i>
                                </span>
                            </div>
                        </div>
                        <div class="forms-list-row">
                            <div class="select-default">
                                <select style="width: 320px;">
                                    <option>Default</option>
                                </select>
                                <span class="focus-border">
                                    <i></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="forms-list">
                        <div class="forms-list-row">
                            <div class="input-text">
                                <input type="text" class="input-text-lg" placeholder="Disable" disabled style="width: 320px;">
                                <span class="focus-border">
                                    <i></i>
                                </span>
                            </div>
                        </div>
                        <div class="forms-list-row">
                            <div class="select-default">
                                <select disabled style="width: 320px;">
                                    <option>Disable</option>
                                </select>
                                <span class="focus-border">
                                    <i></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="forms-list">
                        <div class="forms-list-row">
                            <div class="input-text">
                                <input type="text" class="input-text-lg" placeholder="Focus" style="border: 1px solid #000; width: 320px;">
                                <span class="focus-border">
                                    <i></i>
                                </span>
                            </div>
                        </div>
                        <div class="forms-list-row">
                            <div class="select-default">
                                <select style="border: 1px solid #000; width: 320px;">
                                    <option>Focus</option>
                                </select>
                                <span class="focus-border">
                                    <i></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="forms-list">
                        <div class="forms-list-row">
                            <div class="input-text">
                                <input type="text" class="input-text-lg" value="Filled" style="width: 320px;">
                                <span class="focus-border">
                                    <i></i>
                                </span>
                            </div>
                        </div>
                        <div class="forms-list-row">
                            <div class="select-default">
                                <select style="width: 320px;">
                                    <option>Selected</option>
                                </select>
                                <span class="focus-border">
                                    <i></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="forms-list">
                        <div class="forms-list-row">
                            <div class="input-form success">
                                <div class="input-text">
                                    <input type="text" value="Success" placeholder="success" pattern="[a-z]*" style="width: 320px;">
                                    <span class="focus-border">
                                        <i></i>
                                    </span>
                                    <i class="icon" />
                                </div>
                            </div>
                        </div>
                        <div class="forms-list-row">
                            <div class="input-form error">
                                <div class="input-text">
                                    <input type="text" value="Error" placeholder="error" pattern="[a-z]*" style="width: 320px;">
                                    <span class="focus-border">
                                        <i></i>
                                    </span>
                                    <i class="icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cont">
                    <p class="desc">Checkboxes</p>
                    <div class="checkbox">
                        <div class="checkbox-list">
                            <div class="check-box">
                                <input type="checkbox" id="chk_0" name="chk_0">
                                <label for="chk_0">
                                    <span class="check-box-item">
                                        <span class="item-blur" />
                                        <i class="item-line" />
                                    </span>
                                    <span class="check-box-txt">Default</span>
                                </label>
                            </div>
                        </div>
                        <div class="checkbox-list">
                            <div class="check-box">
                                <input type="checkbox" id="chk_1" name="chk_1" checked>
                                <label for="chk_1">
                                    <span class="check-box-item">
                                        <span class="item-blur" />
                                        <i class="item-line" />
                                    </span>
                                    <span class="check-box-txt">Checked</span>
                                </label>
                            </div>
                        </div>
                        <div class="checkbox-list">
                            <div class="check-box">
                                <input type="checkbox" id="chk_2" name="chk_2" disabled>
                                <label for="chk_2">
                                    <span class="check-box-item">
                                        <span class="item-blur" />
                                        <i class="item-line" />
                                    </span>
                                    <span class="check-box-txt">Disabled</span>
                                </label>
                            </div>
                        </div>
                        <div class="checkbox-list">
                            <div class="check-box">
                                <input type="checkbox" id="chk_3" name="chk_3" disabled checked>
                                <label for="chk_3">
                                    <span class="check-box-item">
                                        <span class="item-blur" />
                                        <i class="item-line" />
                                    </span>
                                    <span class="check-box-txt">Disabled - checked</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cont">
                    <p class="desc">Radios</p>
                    <div class="radiobox">
                        <div class="radiobox-list">
                            <div class="radio-box">
                                <input type="radio" id="radio_0" name="radio_0">
                                <label for="radio_0">
                                    <span class="check-box-item">
                                        <span class="item-blur" />
                                    </span>
                                    <span class="check-box-txt">Default</span>
                                </label>
                            </div>
                        </div>
                        <div class="radiobox-list">
                            <div class="radio-box">
                                <input type="radio" id="radio_1" name="radio_0" checked> 
                                <label for="radio_1">
                                    <span class="check-box-item">
                                        <span class="item-blur" />
                                    </span>
                                    <span class="check-box-txt">Checked</span>
                                </label>
                            </div>
                        </div>
                        <div class="radiobox-list">
                            <div class="radio-box">
                                <input type="radio" id="radio_2" name="radio_0" disabled>
                                <label for="radio_2">
                                    <span class="check-box-item">
                                        <span class="item-blur" />
                                    </span>
                                    <span class="check-box-txt">Disabled</span>
                                </label>
                            </div>
                        </div>
                        <div class="radiobox-list">
                            <div class="radio-box">
                                <input type="radio" id="radio_3" name="radio_1" disabled checked>
                                <label for="radio_3">
                                    <span class="check-box-item">
                                        <span class="item-blur" />
                                    </span>
                                    <span class="check-box-txt">Disabled - checked</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="container" id="Buttons">
                <h2 class="title">Buttons</h2>
                <div class="cont">
                    <p class="desc">Primary Button</p>
                    <div class="buttons">
                        <div class="buttons-list">
                            <button type="button" class="btn-md-fill">Default</button>
                            <button type="button" class="btn-lg-fill">Large</button>
                        </div>
                    </div>
                </div>
                <div class="cont">
                    <p class="desc">Secondary Button</p>
                    <div class="buttons">
                        <div class="buttons-list">
                            <button type="button" class="btn-md-line">Default</button>
                            <button type="button" class="btn-lg-line">Large</button>
                        </div>
                        <div class="buttons-list">
                            <button type="button" class="btn-next">
                                <svgArrow />
                            </button>
                        </div>
                        <div class="buttons-list">
                            <button type="button" class="btn-play">
                                <svgPlay />
                            </button>
                        </div>
                    </div>
                </div>
                <div class="cont">
                    <p class="desc">ETC.</p>
                    <div class="buttons">
                        <div class="buttons-list">
                            <div class="input-form lg">
                                <div class="input-text">
                                    <input type="text" placeholder=".form-select-lg">
                                    <span class="focus-border">
                                        <i></i>
                                    </span>
                                </div>
                                <button type="button" class="btn-lg-fill">btn-lg-fill</button>
                            </div>
                        </div>
                        <div class="buttons-list">
                            <div class="input-form md">
                                <div class="input-text">
                                    <input type="text" placeholder=".form-select-md">
                                    <span class="focus-border">
                                        <i></i>
                                    </span>
                                </div>
                                <button type="button" class="btn-md-fill">btn-md-fill</button>
                            </div>
                        </div>
                        <div class="buttons-list">
                            <div class="input-form sm">
                                <div class="input-text">
                                    <input type="text" placeholder=".form-select-sm">
                                    <span class="focus-border">
                                        <i></i>
                                    </span>
                                </div>
                                <button type="button" class="btn-sm-fill">btn-sm-fill</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="container" id="Tabs">
                <h2 class="title">Tabs</h2>
                <div class="cont">
                    <p class="desc">Primary</p>
                    <div class="tab type01 box"> 
                        <div class="tab-list"
                            :class="{ 'is-active': currentTab === index }"
                            v-for="(item, index) in menuList" 
                            :key="index" 
                            @click="tabClick(index)">
                            {{ item }}
                        </div>
                        <div class="tab-highlight" :style="highlightStyle" />
                    </div>
                    <div class="tab-cont">
                        {{ currentTab }}
                    </div>
                </div>
                <div class="cont">
                    <p class="desc">Secondary</p>
                    <ul class="tab type02 box"> 
                        <li class="tab-list"
                            :class="{'is-active' : currentTab02 === item }" 
                            v-for="(item, index) in menuList" 
                            :key="index" 
                            @click="currentTab02 = item">{{ item }}</li>
                    </ul>
                    <div class="tab-cont">
                        {{ currentTab02 }}
                    </div>
                </div>
            </section>
            <section class="container" id="Pagination">
                <h2 class="title">Pagination</h2>
                <div class="cont">
                    <div class="pagination-container" style="justify-content: flex-start;">
                        <div class="pagination-container-list">
                            <button type="button" class="paginate-buttons" @click="goToFirstPage" :disabled="currentIndex === 1">
                                <img src="/assets/images/icon/icon_chevron_left.png" />
                            </button>
                        </div>
                        <div class="pagination-container-list">
                            <button type="button" class="paginate-buttons" @click="prevPage" :disabled="currentIndex === 1">
                                <img src="/assets/images/icon/icon_prev.png" />
                            </button>
                        </div>
                        <div class="pagination-container-wrap">
                            <div class="pagination-container-list" v-for="(item, index) in pagiList" :key="index">
                                <button type="button" 
                                        class="paginate-buttons" 
                                        :class="{ 'active' : currentIndex === item }" @click="currentIndex = item">{{ item }}</button>
                            </div>
                            <div class="pagination-container-highlight" :style="highlightStyle02" />
                        </div>
                        <div class="pagination-container-list">
                            <button type="button" class="paginate-buttons" @click="nextPage" :disabled="currentIndex === totalPages">
                                <img src="/assets/images/icon/icon_next.png" />
                            </button>
                        </div>
                        <div class="pagination-container-list">
                            <button type="button" class="paginate-buttons" @click="goToLastPage" :disabled="currentIndex === totalPages">
                                <img src="/assets/images/icon/icon_chevron_right.png" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section class="container" id="Breadcrumb">
                <h2 class="title">Breadcrumb</h2>
                <div class="cont">
                    <ul class="gnb">
                        <li class="gnb-list">
                            <a href="" class="gnb-list-link">Home</a>
                        </li>
                        <li class="gnb-list">
                            <a href="" class="gnb-list-link">Category</a>
                        </li>
                    </ul>
                </div>
            </section>
            <section class="container" id="Tables">
                <h2 class="title">Tables</h2>
                <div class="cont">
                    <p class="desc">Primary</p>
                    <table>
                        <colgroup>
                            <col width="*">
                        </colgroup>
                        <thead>
                            <tr>
                                <th>HEAD</th>
                                <th>HEAD</th>
                                <th>HEAD</th>
                                <th>HEAD</th>
                                <th>HEAD</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>CELL</td>
                                <td>CELL</td>
                                <td>CELL</td>
                                <td>CELL</td>
                                <td>CELL</td>
                            </tr>
                            <tr>
                                <td>CELL</td>
                                <td>CELL</td>
                                <td>CELL</td>
                                <td>CELL</td>
                                <td>CELL</td>
                            </tr>
                            <tr>
                                <td>CELL</td>
                                <td>CELL</td>
                                <td>CELL</td>
                                <td>CELL</td>
                                <td>CELL</td>
                            </tr>
                            <tr>
                                <td>CELL</td>
                                <td>CELL</td>
                                <td>CELL</td>
                                <td>CELL</td>
                                <td>CELL</td>
                            </tr> 
                        </tbody>
                    </table>
                </div>
                <div class="cont">
                    <p class="desc">Secondary</p>
                    <table class="is-mob">
                        <colgroup>
                            <col width="*">
                        </colgroup>
                        <tbody>
                            <tr>
                                <td> 
                                    <p class="tit">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatum laborum quas, labore ratione eligendi iste laboriosam explicabo eos. Sequi iure voluptate soluta cumque recusandae provident doloribus aspernatur nostrum vel!</p>
                                    <div class="sub">2021.07.22</div>
                                </td>
                            </tr>
                            <tr>
                                <td> 
                                    <p class="tit">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatum laborum quas, labore ratione eligendi iste laboriosam explicabo eos. Sequi iure voluptate soluta cumque recusandae provident doloribus aspernatur nostrum vel!</p>
                                    <div class="sub">2021.07.22</div>
                                </td>
                            </tr>
                            <tr>
                                <td> 
                                    <p class="tit">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatum laborum quas, labore ratione eligendi iste laboriosam explicabo eos. Sequi iure voluptate soluta cumque recusandae provident doloribus aspernatur nostrum vel!</p>
                                    <div class="sub">2021.07.22</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section class="container" id="Alert">
                <h2 class="title">Alert</h2>
                <div class="cont">
                    <p class="desc">알림창</p>
                    <div class="alert">
                        <button type="button" class="btn-md-fill" @click="toastOpen">알림창</button>
                        <transition name="fade">
                            <div class="toast-modal" ref="toastRef" v-if="toastShow">
                                <i class="icon" />
                                <p class="txt">알림창입니다.</p>
                            </div>
                        </transition>
                    </div>
                </div>
            </section>
       </main>
       <button type="button" class="btn-top" v-if="topBtn" @click="topScroll">
        <svgArrow />
       </button>
    </div>
</template>
<script setup>
import { onMounted, onUnmounted } from 'vue'
import { onClickOutside } from '@vueuse/core';
import svgArrow from '../components/svg/svgArrow.vue';
import svgPlay from '../components/svg/svgPlay.vue';

const gnbList = [
    {
        name: 'Colors'
    },
    {
        name: 'Tyopgraphy'
    },
    {
        name: 'Icons'
    },
    {
        name: 'Forms'
    },
    {
        name: 'Buttons'
    },
    {
        name: 'Tabs'
    },
    {
        name: 'Pagination'
    },
    {
        name: 'Breadcrumb'
    },
    {
        name: 'Tables'
    },
    {
        name: 'Alert'
    }
]

const PrimaryColor = [
    {
        color: '000000'
    },
    {
        color: 'FFFFFF'
    }
]

const IndicatationColor = [
    {
        color: '00B34A'
    },
    {
        color: 'EF2B49'
    },
    {
        color: 'FFC107'
    }
]

const GrayscaleColor = [
    {
        color: 'F8F9FA',
        name: 'Background'
    },
    {
        color: 'E5E7E8',
        name: 'Line'
    },
    {
        color: 'CDCFD1'
    },
    {
        color: 'ADB0B3',
    },
    {
        color: '9B9FA3'
    },
    {
        color: '676D73'
    },
    {
        color: '52575C',
        name: 'Text-Body'
    },
    {
        color: '35383B',
        name: 'Border-Type'
    },
    {
        color: '14171A',
        name: 'Text-Title'
    }
]

const AccentColor = [
    {
        color: '3577F1',
        name: 'Blue'
    },
    {
        color: '0033A1',
        name: 'Indigo'
    },
    {
        color: '552BB6',
        name: 'Purple'
    },
    {
        color: 'CE2F92',
        name: 'Pink'
    },
    {
        color: 'FF7519',
        name: 'Orange'
    },
    {
        color: '008086',
        name: 'Teal'
    },
    {
        color: '22BBBB',
        name: 'Cyan'
    },
    {
        color: 'CDEA35',
        name: 'Lime'
    }
]

const iconList = [
    {
        name: 'icon_check'
    },
    {
        name: 'icon_check_fill'
    },
    {
        name: 'icon_eye'
    },
    {
        name: 'icon_heart_fill'
    },
    {
        name: 'icon_heart_line'
    },
    {
        name: 'icon_comment_fill'
    },
    {
        name: 'icon_comment_line'
    },
    {
        name: 'icon_star_fill'
    },
    {
        name: 'icon_star_line'
    },
    {
        name: 'icon_close'
    },
    {
        name: 'icon_arrow_down'
    },
    {
        name: 'icon_arrow_up'
    },
    {
        name: 'icon_arrow_prev'
    },
    {
        name: 'icon_arrow_next'
    },
    {
        name: 'icon_plus'
    },
    {
        name: 'icon_minus'
    },
    {
        name: 'icon_video_camera'
    },
    {
        name: 'icon_share'
    },
    {
        name: 'icon_calendar'
    },
    {
        name: 'icon_search'
    },
    {
        name: 'icon_location'
    },
    {
        name: 'icon_flag'
    },
    {
        name: 'icon_call'
    },
    {
        name: 'icon_my_location'
    },
    {
        name: 'icon_explore_fill'
    },
    {
        name: 'icon_explore_line'
    },
    {
        name: 'icon_information'
    },
    {
        name: 'icon_clip'
    },
    {
        name: 'icon_time_fill'
    },
    {
        name: 'icon_time_line'
    },
    {
        name: 'icon_flag_hole'
    },
    {
        name: 'icon_power'
    },
    {
        name: 'icon_manage_accounts'
    },
    {
        name: 'icon_list'
    },
    {
        name: 'icon_sort'
    },
    {
        name: 'icon_link'
    },
    {
        name: 'icon_sns_youtube'
    },
    {
        name: 'icon_sns_medium'
    },
    {
        name: 'icon_sns_facebook'
    },
    {
        name: 'icon_sns_instagram'
    }
]

// 스크롤 진행 상태 바 이벤트
const scrollProgress = ref(0)

const updateScrollProgress = () => {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  scrollProgress.value = (scrollTop / docHeight) * 100
}

// 2024.12.18[cgnoh]: 스크롤 이벤트
const scrollTo = (sectionId, event) => {
  const targetSection = document.getElementById(sectionId);

  const menuLink = document.querySelectorAll("nav > dl > dd > a");
  menuLink.forEach((item) => {
    item.classList.remove("is-active");
  });

  event.target.classList.add("is-active");

  if (targetSection) {

    // 현재 스크롤 위치와 목표 위치 계산
    const offset = 200; // 원하는 오프셋 값
    const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - offset;

    // 부드럽게 이동
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });

  }
};

// 컬러값 복사 이벤트
const colorMessageShow = ref(false);
const colorMessage = ref(null);
const colorCopy = (value) => {
    const copyText = value;
    const copyArea = document.createElement('textarea');

    copyArea.value = copyText;
    document.body.appendChild(copyArea);
    copyArea.select();
    document.execCommand('copy');
    document.body.removeChild(copyArea);
    colorMessageShow.value = true;
    colorMessage.value = `${copyText} 복사완료!`

    setTimeout(() => {
        colorMessageShow.value = false;
        colorMessage.value = '';
    }, 500);
}

// 아이콘 복사 이벤트
const iconCopy = (value) => {
    const copyText = value;
    const copyArea = document.createElement('textarea');

    copyArea.value = `<img src="/images/icons/${copyText}.png">`;
    document.body.appendChild(copyArea);
    copyArea.select();
    document.execCommand('copy');
    document.body.removeChild(copyArea);
    colorMessageShow.value = true;
    colorMessage.value = `${copyText} 복사완료!`

    setTimeout(() => {
        colorMessageShow.value = false;
        colorMessage.value = '';
    }, 500);
}

// 토스트 이벤트
const toastShow = ref(false);
const toastRef = ref();
const toastOpen = () => {
    toastShow.value = true;
    setTimeout(() => {
        toastShow.value = false;
    }, 1500)
}

const optionList = ['Option 1', 'Option 2', 'Option 3', 'Option 4']

// 2024.12.30[cgnoh]: 셀렉트 박스 보여줌 여부
const selectShow = ref(false);

// 2024.12.30[cgnoh]: 셀렉트 박스
const inputContRef = ref();

// 2024.12.30[cgnoh]: 외부 클릭 이벤트
onClickOutside(inputContRef, event => {
    const parent = event.target.closest('.input-text');

    if(parent === null) {
        selectShow.value = false;
    }
});

// 2024.12.30[cgnoh]: 셀렉트 받는 값
const inputItems = ref([]);

// 2024.12.30[cgnoh]: 셀렉트 보내는 값
const selectInput = computed(() => {
    return inputItems.value;
});

// 2024.12.31[cgnoh]: 메뉴 리스트
const menuList = ['TAB1','TAB2','TAB3'];

// 2025.02.27[cgnoh]: 동적 클래스 바인딩 (하이라이트 바 위치 조정)
const currentTab = ref(0); // 현재 선택된 탭 인덱스
const highlightStyle = computed(() => ({
    width: `${100 / menuList.length}%`,  // 동적으로 너비 조정
    left: `${(100 / menuList.length) * currentTab.value}%`
}));
const tabClick = (index) => {
  currentTab.value = index;
};


const currentTab02 = ref('TAB1'); // 탭타입 2

// 2024.12.31[cgnoh]: 페이지 리스트
const pagiList = computed(() => {
  const pages = []
  for (let i = 1; i <= totalPages.value; i++) {
    pages.push(i)
  }
  return pages
})

const currentIndex = ref(1); // 현재 페이지
const totalPages = ref(10); // 총 페이지 수


const highlightStyle02 = computed(() => ({
    width: `${100 / totalPages.value}%`,  // totalPages.value 사용
    left: `${(100 / totalPages.value) * (currentIndex.value - 1)}%` // 0부터 시작해야 함
}));

// 2025.02.27[cgnoh]: 첫 페이지로 이동
const goToFirstPage = () => {
  setPage(1);
}

// 2025.02.27[cgnoh]: 이전 페이지 이동
const prevPage = () => {
  setPage(currentIndex.value - 1);
}

// 2025.02.27[cgnoh]: 다음 페이지 이동
const nextPage = () => {
  setPage(currentIndex.value + 1);
}

// 2025.02.27[cgnoh]: 마지막 페이지로 이동
const goToLastPage = () => {
    setPage(totalPages.value);
}

const setPage = (page) => {
    if(page < 1 || page > totalPages.value) return;
    currentIndex.value = page;
}


// 2024.12.20[cgnoh]: 탑버튼 이벤트
const topScroll = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // 부드럽게 스크롤
  });
};

// 2024.12.19[cgnoh]: 스크롤 이벤트 핸들러
const topBtn = ref(false);
const scrollPosition = ref(0);
const gnbListlink = ref();
const handleScroll = () => {
  topBtn.value = window.scrollY > 100; // 스크롤 위치가 100px 이상이면 버튼 표시

  // 스크롤 위치 가져오기
  scrollPosition.value = window.scrollY;

  gnbListlink.value.forEach((item) => {
    item.classList.remove("is-active");

    const section = document.querySelector(`#${item.dataset.sectionId}`);

    if (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionBottom = sectionTop + sectionHeight;

      const activationThresholdTop = sectionTop - 300;
      const activationThresholdBottom = sectionBottom - 300;

      if (
        scrollPosition.value >= activationThresholdTop &&
        scrollPosition.value <= activationThresholdBottom
      ) {
        item.classList.add("is-active");
      }
    }
  });
};

// 2025.02.27[cgnoh]: 검색박스 이벤트
const inputSearch = ref('');
const isClose = ref(false);

const handleInputSearch = () => {
    inputSearch.value = '';
    isClose.value = false;
}

const handleInput = () => {
    if(inputSearch.value !== '') {
        isClose.value = true;
    }
}

const handleMenu = ref(false);

onMounted(() => {
  window.addEventListener('scroll', updateScrollProgress)
  window.addEventListener("scroll", handleScroll);
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollProgress)
  window.removeEventListener("scroll", handleScroll);
})

</script>
<style lang="scss" scoped>
@use '@/assets/scss/pages/index.scss';
</style>