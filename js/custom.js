// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();



foodListData = [
    {
        "name": "Canh cải ngọt thịt bằm",
        "desc": "Canh cải ngọt thịt bằm",
        "image": "https://cdn.tgdd.vn/2021/04/CookProduct/caingotthitbamthumb-1200x676-1200x676.jpg",
        "chef": "Khánh An",
        "filter": "canh"
    },
    {
        "name": "Canh bí đỏ thịt bằm",
        "desc": "Canh bí đỏ thịt bằm",
        "image": "https://cdn.tgdd.vn/2021/05/CookProduct/1-1200x676-41.jpg",
        "chef": "Khánh An",
        "filter": "canh"
    },
    {
        "name": "Thịt kho tiêu",
        "desc": "Thịt kho tiêu",
        "image": "https://cdn.tgdd.vn/2021/03/CookRecipe/Avatar/thit-nac-kho-tieu-thumbnail.jpg",
        "chef": "Khánh An",
        "filter": "kho"
    },
    {
        "name": "Trứng hấp",
        "desc": "Trứng hấp",
        "image": "https://thitmatmeatdeli.com/wp-content/uploads/2020/05/thit-mat-meatdeli-1-7.jpg",
        "chef": "Khánh An",
        "filter": "khac"
    },
    {
        "name": "Trứng chiên",
        "desc": "Trứng chiên",
        "image": "https://cdn.tgdd.vn/Files/2017/05/05/979580/bi-quyet-chien-trung-thom-ngon-202209091323069084.jpg",
        "chef": "Khánh An",
        "filter": "chien"
    },
    {
        "name": "Trứng luộc",
        "desc": "Trứng luộc",
        "image": "https://cdn.tgdd.vn/Files/2020/07/20/1272202/5-cach-luoc-trung-long-dao-beo-ngay-de-lam-tai-nha-202201191409355515.jpg",
        "chef": "Khánh An",
        "filter": "khac"
    },
    {
        "name": "Trứng kho",
        "desc": "Trứng kho",
        "image": "https://img-global.cpcdn.com/recipes/977dd7e690d7c1c8/680x482cq70/tr%E1%BB%A9ng-v%E1%BB%8Bt-kho-recipe-main-photo.jpg",
        "chef": "Khánh An",
        "filter": "kho"
    },
    {
        "name": "Đậu hủ nhồi thịt sốt cà",
        "desc": "Đậu hủ nhồi thịt sốt cà",
        "image": "https://cdn.tgdd.vn/Files/2020/03/12/1241599/chi-trang-chia-se-cach-lam-dau-hu-nhoi-thit-mon-don-gian-va-de-an-202209091444581966.jpg",
        "chef": "Khánh An",
        "filter": "khac"
    },
    {
        "name": "Đậu hủ nhồi thịt chiên",
        "desc": "Đậu hủ nhồi thịt chiên",
        "image": "https://cdn.tgdd.vn/Files/2020/03/12/1241599/chi-trang-chia-se-cach-lam-dau-hu-nhoi-thit-mon-don-gian-va-de-an-202003120957141299.jpg",
        "chef": "Khánh An",
        "filter": "chien"
    },
    {
        "name": "Thịt chiên",
        "desc": "Thịt chiên",
        "image": "https://i.ytimg.com/vi/MjsT5x0yI78/maxresdefault.jpg",
        "chef": "Khánh An",
        "filter": "chien"
    },
    {
        "name": "Tàu hủ chiên",
        "desc": "Tàu hủ chiên",
        "image": "https://cdn.tgdd.vn/Files/2017/08/14/1012860/4-meo-giup-dau-hu-chien-vang-uom-gion-rum-de-ca-tieng-van-gion-202206031650196014.jpg",
        "chef": "Khánh An",
        "filter": "chien"
    },
    {
        "name": "Tàu hủ chiên nước mắm",
        "desc": "Tàu hủ chiên nước mắm",
        "image": "https://cdn.tgdd.vn/Files/2021/10/02/1387294/cach-lam-dau-hu-chien-mam-me-vua-ngon-vua-de-lam-an-mai-khong-chan-202110021341298427.jpg",
        "chef": "Khánh An",
        "filter": "kho"
    },
    {
        "name": "Canh kim chi",
        "desc": "Canh kim chi",
        "image": "https://cdn.tgdd.vn/Files/2019/04/17/1161301/cach-nau-canh-kim-chi-han-quoc-thom-ngon-dam-vi-202109281344057075.jpg",
        "chef": "Khánh An",
        "filter": "canh"
    },
    {
        "name": "Thịt xào đậu que",
        "desc": "Thịt xào đậu que",
        "image": "https://cdn.tgdd.vn/Files/2019/06/15/1173363/cach-lam-dau-que-xao-thit-heo-gion-ngon-8_800x450.jpg",
        "chef": "Khánh An",
        "filter": "xao" 
    },
    {
        "name": "Gà hầm",
        "desc": "Gà hầm",
        "image": "https://cdn.tgdd.vn/Files/2021/09/29/1386479/bi-quyet-nau-ga-ham-hat-sen-tao-do-boi-bo-suc-khoe-cho-ca-nha-202109291134115457.jpg",
        "chef": "Khánh An",
        "filter": "canh" 
    },
    {
        "name": "Gà chiên nước mắm",
        "desc": "Gà chiên nước mắm",
        "image": "https://cdn.tgdd.vn/Files/2020/04/04/1246636/chia-se-cach-lam-canh-ga-chien-nuoc-mam-thom-ngon-kho-cuong-202202251510579911.jpg",
        "chef": "Khánh An",
        "filter": "chien" 
    },
    {
        "name": "Gà chiên bột",
        "desc": "Gà chiên bột",
        "image": "https://cdn.tgdd.vn/Files/2019/05/31/1170182/cach-lam-ga-chien-bot-gion-tan-voi-bot-chien-gion-aji-quick-202107171416301335.jpg",
        "chef": "Khánh An, Cẩm Nhi",
        "filter": "chien" 
    },
    {
        "name": "Xúc xích chiên",
        "desc": "Xúc xích chiên",
        "image": "https://bizweb.dktcdn.net/100/362/433/products/xuc-xich-2-1c5bc25b-5b88-4de4-b387-f1652c482816.jpg?v=1689311499920",
        "chef": "Khánh An",
        "filter": "chien" 
    }
]
// isotope js
$(window).on('load', function () {
    function createRecipeHTML(food) {
        return `
        <div class="col-sm-6 col-lg-4 all ${food.filter}">
        <div class="box">
        <div>
        <div class="img-box">
        <img src="${food.image}" alt="">
        </div>
                <div class="detail-box">
                <h5>
                    ${food.name}
                </h5>
                <p>
                    ${food.desc}
                </p>
                <div class="options">
                    <h6>
                    ${food.chef}
                    </h6>
                    <a href="">
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 456.029 456.029" style="enable-background:new 0 0 456.029 456.029;" xml:space="preserve">
                        <g>
                        <g>
                            <path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                        c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z" />
                        </g>
                        </g>
                        <g>
                        <g>
                            <path d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                        C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                        c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                        C457.728,97.71,450.56,86.958,439.296,84.91z" />
                        </g>
                        </g>
                        <g>
                        <g>
                            <path d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                        c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z" />
                        </g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                    </svg>
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
        `;
    } 

    function render(data){
        const foodList = $("#food-list");
        foodList.empty()

        data.forEach(function (recipe) {
            const recipeHTML = createRecipeHTML(recipe);
            foodList.append(recipeHTML);
        });

        var $grid = $(".grid").isotope({
            itemSelector: ".all",
            percentPosition: false,
            masonry: {
                columnWidth: ".all"
            }
        })

        $('.filters_menu li').click(function () {
            $('.filters_menu li').removeClass('active');
            $(this).addClass('active');
    
            var data = $(this).attr('data-filter');
            $grid.isotope({
                filter: data
            })
        });
    }

    render(foodListData)
});

// nice select
$(document).ready(function() {
    $('select').niceSelect();
  });

/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});