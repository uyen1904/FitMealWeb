/**
 * @file menu.js
 * CHỈ CHỨA DỮ LIỆU SẢN PHẨM.
 * Dữ liệu này được xuất ra để các file script khác có thể sử dụng.
 */

function getProductData() {
    return {
        menukhachle: {
            hero: { label: 'Menu khách lẻ', subtitle: 'Thực đơn tươi mới - ngon, nhẹ, đủ chất', img: '/asset/img/contact_blog/pexels-foodie-factor-162291-566566.jpg' },
            subCategories: { 
              'can-doi': { name: 'Cân đối', hero: { label: 'CÂN ĐỐI', subtitle: 'Cân bằng dinh dưỡng cho ngày dài năng động', img: '/asset/img/menukhachle/can_doi/main_B0.png' } },
              'giau-dam': { name: 'Giàu đạm', hero: { label: 'GIÀU ĐẠM', subtitle: 'Tối ưu hóa việc xây dựng và phục hồi cơ bắp', img: '/asset/img/menukhachle/giau_dam/main_H0.png' } },
              'it-calo': { name: 'Ít Calo', hero: { label: 'ÍT CALO', subtitle: 'Hỗ trợ giảm cân, giữ dáng hiệu quả', img: '/asset/img/menukhachle/it_calo/main_L0.png' } },
              'mon-chay': { name: 'Món chay', hero: { label: 'MÓN CHAY', subtitle: 'Thanh đạm, tốt cho sức khỏe từ thực vật', img: '/asset/img/menukhachle/mon_chay/main_V0.png' } },
              'do-uong': { name: 'Đồ uống', hero: { label: 'ĐỒ UỐNG', subtitle: 'Bổ sung vitamin và khoáng chất thiết yếu', img: '/asset/img/menukhachle/do_uong/main_J0.jpg' } },
              'salad-soup': { name: 'Salad & Soup', hero: { label: 'SALAD & SOUP', subtitle: 'Lựa chọn nhẹ nhàng, tươi mát và giàu chất xơ', img: '/asset/img/menukhachle/salad_soup/main.jpg' } }
            },
            products: [
              // === DANH MỤC: ÍT CALO (it-calo) ===
                { "id": 1, "name": "Bò nướng khoai lang", "img": "/asset/img/menukhachle/it_calo/bo_nuong_khoai_lang.png", "price": 75000, "kcal": "274", "category": "it-calo" },
                { "id": 2, "name": "Cá hồi rau củ", "img": "/asset/img/menukhachle/it_calo/ca_hoi_rau_cu.png", "price": 85000, "kcal": "320", "category": "it-calo" },
                { "id": 3, "name": "Mì tôm Nhật", "img": "/asset/img/menukhachle/it_calo/mi_tom_Nhat.png", "price": 80000, "kcal": "341", "category": "it-calo" },
                { "id": 4, "name": "Ức gà khoai tây", "img": "/asset/img/menukhachle/it_calo/uc_ga_khoai_tay.png", "price": 70000, "kcal": "285", "category": "it-calo" },
                { "id": 5, "name": "Mì gà sốt cajun", "img": "/asset/img/menukhachle/it_calo/mi_ga_sot_cajun.png", "price": 78000, "kcal": "351", "category": "it-calo" },
                { "id": 6, "name": "Cá ngừ khoai bắp", "img": "/asset/img/menukhachle/it_calo/ca_ngu_khoai_bap.png", "price": 75000, "kcal": "311", "category": "it-calo" },
                { "id": 7, "name": "Gà sốt cajun củ dền", "img": "/asset/img/menukhachle/it_calo/ga_sot_cajun_cu_den.png", "price": 75000, "kcal": "373", "category": "it-calo" },
                { "id": 8, "name": "Mì cá basa", "img": "/asset/img/menukhachle/it_calo/mi_ca_basa.png", "price": 70000, "kcal": "439", "category": "it-calo" },
                { "id": 9, "name": "Bò bông cải xanh", "img": "/asset/img/menukhachle/it_calo/bo_bong_cai_xanh.png", "price": 78000, "kcal": "341", "category": "it-calo" },
                { "id": 10, "name": "Ức vịt bí đỏ", "img": "/asset/img/menukhachle/it_calo/uc_vit_bi_do.png", "price": 85000, "kcal": "341", "category": "it-calo" },

              // === DANH MỤC: CÂN ĐỐI (can-doi) ===
                { "id": 11, "name": "Cơm gạo lứt cá hồi", "img": "/asset/img/menukhachle/can_doi/com_gao_lut_ca_hoi.png", "price": 90000, "kcal": "435", "category": "can-doi" },
                { "id": 12, "name": "Cơm trắng bò", "img": "/asset/img/menukhachle/can_doi/com_trang_bo.png", "price": 85000, "kcal": "438", "category": "can-doi" },
                { "id": 13, "name": "Mì tôm đậu", "img": "/asset/img/menukhachle/can_doi/mi_tom_dau.png", "price": 82000, "kcal": "435", "category": "can-doi" },
                { "id": 14, "name": "Nui cá hồi", "img": "/asset/img/menukhachle/can_doi/nui_ca_hoi.png", "price": 95000, "kcal": "508" ,"category": "can-doi"},
                { "id": 15, "name": "Cơm gạo lứt ức vịt", "img": "/asset/img/menukhachle/can_doi/com_gao_lut_uc_vit.png", "price": 90000, "kcal": "485", "category": "can-doi" },
                { "id": 16, "name": "Cơm gạo lứt cá ngừ", "img": "/asset/img/menukhachle/can_doi/com_gao_lut_ca_ngu.png", "price": 85000, "kcal": "434", "category": "can-doi" },
                { "id": 17, "name": "Cơm trắng ức vịt", "img": "/asset/img/menukhachle/can_doi/com_trang_uc_vit.png", "price": 92000, "kcal": "586" ,"category": "can-doi" },
                { "id": 18, "name": "Cơm gạo lứt cá basa", "img": "/asset/img/menukhachle/can_doi/com_gao_lut_ca_basa.png", "price": 78000, "kcal": "442", "category": "can-doi" },
                { "id": 19, "name": "Ức gà khoai tây", "img": "/asset/img/menukhachle/can_doi/uc_ga_khoai_tay.png", "price": 70000, "kcal": "440" ,"category": "can-doi"},
                { "id": 20, "name": "Cơm gạo lứt gà tôm", "img": "/asset/img/menukhachle/can_doi/com_gao_lut_ga_tom.png", "price": 85000, "kcal": "488", "category": "can-doi" },
                { "id": 21, "name": "Cơm gạo lứt bò", "img": "/asset/img/menukhachle/can_doi/com_gao_lut_bo.png", "price": 90000, "kcal": "557" ,"category": "can-doi" },
                { "id": 22, "name": "Cơm trắng cá ngừ", "img": "/asset/img/menukhachle/can_doi/com_trang_ca_ngu.png", "price": 85000, "kcal": "437" ,"category": "can-doi" },
                { "id": 23, "name": "Cơm gạo lứt ức gà", "img": "/asset/img/menukhachle/can_doi/com_gao_lut_uc_ga.png", "price": 75000, "kcal": "542", "category": "can-doi" },
                { "id": 24, "name": "Cơm gạo lứt cá basa chiên", "img": "/asset/img/menukhachle/can_doi/com_gao_lut_ca_basa_chien.png", "price": 85000, "kcal": "441", "category": "can-doi" },
                { "id": 25, "name": "Mì bò tôm", "img": "/asset/img/menukhachle/can_doi/mi_bo_tom.png", "price": 90000, "kcal": "515", "category": "can-doi" },
            
              // === DANH MỤC: GIÀU ĐẠM (giau-dam) ===
                { "id": 26, "name": "Cơm gạo lứt bò gà", "img": "/asset/img/menukhachle/giau_dam/com_gao_lut_bo_ga.png", "price": 90000, "kcal": "562", "category": "giau-dam" },
                { "id": 27, "name": "Bò tôm khoai tây", "img": "/asset/img/menukhachle/giau_dam/bo_tom_khoai_tay.png", "price": 85000, "kcal": "615", "category": "giau-dam" },
                { "id": 28, "name": "Mì bơ cá basa", "img": "/asset/img/menukhachle/giau_dam/mi_bo_ca_basa.png", "price": 95000, "kcal": "560" ,"category": "giau-dam"},
                { "id": 29, "name": "Ức vịt tôm", "img": "/asset/img/menukhachle/giau_dam/uc_vit_tom.png", "price": 90000, "kcal": "584", "category": "giau-dam" },
                { "id": 30, "name": "Cơm gạo lứt bò gà khoai", "img": "/asset/img/menukhachle/giau_dam/com_gao_lut_bo_ga_khoai.png", "price": 92000, "kcal": "720", "category": "giau-dam" },
                { "id": 31, "name": "Nui ức gà", "img": "/asset/img/menukhachle/giau_dam/nui_uc_ga.png", "price": 85000, "kcal": "611" ,"category": "giau-dam" },
                { "id": 32, "name": "Cơm gạo lứt bò vịt", "img": "/asset/img/menukhachle/giau_dam/com_gao_lut_bo_vit.png", "price": 90000, "kcal": "583", "category": "giau-dam" },
                { "id": 33, "name": "Cơm gạo lứt bò khoai", "img": "/asset/img/menukhachle/giau_dam/com_gao_lut_bo_khoai.png", "price": 80000, "kcal": "649" ,"category": "giau-dam"},
                { "id": 34, "name": "Cơm trắng bò bắp", "img": "/asset/img/menukhachle/giau_dam/com_trang_bo_bap.png", "price": 82000, "kcal": "611", "category": "giau-dam" },  
                { "id": 35, "name": "Cơm trắng gà cá hồi", "img": "/asset/img/menukhachle/giau_dam/com_trang_ga_ca_hoi.png", "price": 95000, "kcal": "617", "category": "giau-dam" },

              // === DANH MỤC: MÓN CHAY (mon-chay) ===
                { "id": 36, "name": "Cơm gạo lứt rau nấm", "img": "/asset/img/menukhachle/mon_chay/com_gao_lut_rau_nam.png", "price": 70000, "kcal": "434", "category": "mon-chay" },
                { "id": 37, "name": "Mì đậu gà", "img": "/asset/img/menukhachle/mon_chay/mi_dau_ga.png", "price": 75000, "kcal": "438", "category": "mon-chay" },
                { "id": 38, "name": "Cơm trắng khoai bơ", "img": "/asset/img/menukhachle/mon_chay/com_trang_khoai_bo.png", "price": 72000, "kcal": "435", "category": "mon-chay" },
                { "id": 39, "name": "Cơm gạo lứt đậu gà", "img": "/asset/img/menukhachle/mon_chay/com_gao_lut_dau_ga.png", "price": 75000, "kcal": "508", "category": "mon-chay" },
                { "id": 40, "name": "Nui đậu phụ", "img": "/asset/img/menukhachle/mon_chay/nui_dau_phu.png", "price": 78000, "kcal": "485", "category": "mon-chay" },

              // === DANH MỤC: ĐỒ UỐNG (do-uong) ===
                { "id": 41, "name": "Detox tổng hợp", "img": "/asset/img/menukhachle/do_uong/detox_tong_hop.png", "price": 50000, "kcal": "95", "category": "do-uong" },
                { "id": 42, "name": "Táo - Nho", "img": "/asset/img/menukhachle/do_uong/tao_nho.png", "price": 45000, "kcal": "90", "category": "do-uong" },
                { "id": 43, "name": "Táo - Đào - Anh đào", "img": "/asset/img/menukhachle/do_uong/tao_dao_anhdao.png", "price": 45000, "kcal": "100", "category": "do-uong" },
                { "id": 44, "name": "Anh đào - Kiwi", "img": "/asset/img/menukhachle/do_uong/anhdao_kiwi.png", "price": 45000, "kcal": "85", "category": "do-uong" },
                { "id": 45, "name": "Xoài - Việt quất - Dâu", "img": "/asset/img/menukhachle/do_uong/xoai_vietquat_dau.png", "price": 45000, "kcal": "110", "category": "do-uong" },
                { "id": 46, "name": "Đào - Táo - Cà rốt", "img": "/asset/img/menukhachle/do_uong/dao_tao_carot.png", "price": 45000, "kcal": "105", "category": "do-uong" },
                { "id": 47, "name": "Đào - Vải - Mật ong - Dừa", "img": "/asset/img/menukhachle/do_uong/dao_vai_matong_dua.png", "price": 50000, "kcal": "135", "category": "do-uong" },

              // === DANH MỤC: SALAD & SOUP (salad-soup) ===
                { "id": 48, "name": "Bắp cải xào", "img": "/asset/img/menukhachle/salad_soup/bap_cai_xao.png", "price": 35000, "kcal": "150", "category": "salad-soup" },
                { "id": 49, "name": "Dưa muối", "img": "/asset/img/menukhachle/salad_soup/dua_muoi.png", "price": 25000, "kcal": "80", "category": "salad-soup" },
                { "id": 50, "name": "Rau chân vịt trộn", "img": "/asset/img/menukhachle/salad_soup/rau_chan_vit_tron.png", "price": 45000, "kcal": "180", "category": "salad-soup" },
                { "id": 51, "name": "Salad hạt dinh dưỡng", "img": "/asset/img/menukhachle/salad_soup/salad_hat_dinh_duong.png", "price": 65000, "kcal": "250", "category": "salad-soup" },
                { "id": 52, "name": "Rau củ xào thập cẩm", "img": "/asset/img/menukhachle/salad_soup/Saute-mixed-veggies-300x300.png", "price": 40000, "kcal": "160", "category": "salad-soup" },
                { "id": 53, "name": "Soup cà chua đậu lăng", "img": "/asset/img/menukhachle/salad_soup/soup_ca_chua_dau_lang.png", "price": 55000, "kcal": "220", "category": "salad-soup" },
                { "id": 54, "name": "Súp bí đỏ hạt chia", "img": "/asset/img/menukhachle/salad_soup/sup_bi_do_hat_chia.png", "price": 50000, "kcal": "200", "category": "salad-soup" }
              ]
        },

goiantuan: {
    hero: { 
        label: 'Gói ăn tuần', 
        subtitle: 'Eat clean trọn tuần', 
        img: '/asset/img/contact_blog/pexels-ella-olsson-572949-1640769.jpg' 
    },
    subCategories: { 
        '1-tuan': { name: '1 tuần', hero: { label: '1 TUẦN', subtitle: 'Gói ăn 5 ngày', img: '' } },
    },
    products: [
        { 
            "id": 101, 
            name: '1 tuần (22/09 - 26/09)', 
            img: '/asset/img/goiantuan/image 58 (3).png', 
            price: 2520000, 
            kcal: '1665',
            category: '1-tuan',
            badge: '1 tuần (22/09 - 26/09)',
            nutrition: {
                calories: '1,665',
                carbs: '152',
                fat: '95',
                protein: '114',
                fiber: '25'
            },
            meals: [
                {
                    day: 'Thứ 2',
                    dayName: 'MONDAY',
                    dayNumber: '23',
                    breakfast: { 
                        name: 'Bánh canh cá lóc lứt & cá chẽm', 
                        nameEn: 'Snakehead & sea bass thick noodle soup',
                        img: '/asset/img/menukhachle/can_doi/com_gao_lut_ca_hoi.png', 
                        kcal: '435',
                        energy: '565',
                        carb: '50',
                        fat: '20',
                        protein: '39',
                        fiber: '9'
                    },
                    lunch: { 
                        name: 'Ức gà nướng mầm tỏi', 
                        nameEn: 'Grilled chicken breast with garlic sprouts',
                        img: '/asset/img/menukhachle/it_calo/bo_nuong_khoai_lang.png', 
                        kcal: '274',
                        energy: '524',
                        carb: '96',
                        fat: '17',
                        protein: '37',
                        fiber: '9'
                    },
                    dinner: { 
                        name: 'Salad caesar & tôm', 
                        nameEn: 'Caesar salad with shrimp',
                        img: '/asset/img/menukhachle/it_calo/mi_tom_Nhat.png', 
                        kcal: '341',
                        energy: '581',
                        carb: '19',
                        fat: '41',
                        protein: '35',
                        fiber: '8'
                    }
                },
                {
                    day: 'Thứ 3',
                    dayName: 'TUESDAY',
                    dayNumber: '23',
                    breakfast: { 
                        name: 'Bún gạo lứt thịt heo nướng', 
                        nameEn: 'Brown rice noodle with grilled pork',
                        img: '/asset/img/menukhachle/can_doi/com_trang_bo.png', 
                        kcal: '438',
                        energy: '517',
                        carb: '51',
                        fat: '23',
                        protein: '31',
                        fiber: '9'
                    },
                    lunch: { 
                        name: 'Bạch tuột nướng mầm me', 
                        nameEn: 'Grilled octopus with tamarind',
                        img: '/asset/img/menukhachle/it_calo/ca_hoi_rau_cu.png', 
                        kcal: '320',
                        energy: '508',
                        carb: '58',
                        fat: '17',
                        protein: '48',
                        fiber: '9'
                    },
                    dinner: { 
                        name: 'Cá nướng xoài tây sốt tăm ớt chia đậu mù', 
                        nameEn: 'Grilled chicken asparagus & fresh herb',
                        img: '/asset/img/menukhachle/it_calo/uc_ga_khoai_tay.png', 
                        kcal: '285',
                        energy: '575',
                        carb: '26',
                        fat: '32',
                        protein: '48',
                        fiber: '11'
                    }
                },
                {
                    day: 'Thứ 4',
                    dayName: 'WEDNESDAY',
                    dayNumber: '21',
                    breakfast: { 
                        name: 'Cơm trộn bò nướng hàn quốc', 
                        nameEn: 'Korean bibimbap with grilled beef rice bowl',
                        img: '/asset/img/menukhachle/can_doi/mi_tom_dau.png', 
                        kcal: '435',
                        energy: '517',
                        carb: '46',
                        fat: '20',
                        protein: '27',
                        fiber: '7'
                    },
                    lunch: { 
                        name: 'Xà lách cá hồi nướng & sốt mật ong', 
                        nameEn: 'Grilled salmon salad & honey',
                        img: '/asset/img/menukhachle/it_calo/mi_ga_sot_cajun.png', 
                        kcal: '351',
                        energy: '637',
                        carb: '17',
                        fat: '51',
                        protein: '31',
                        fiber: '7'
                    },
                    dinner: { 
                        name: 'Khoai tây sốt hầm hạt đậu & gà nướng', 
                        nameEn: 'Potatoe mushroom potatoes & chicken',
                        img: '/asset/img/menukhachle/it_calo/ca_ngu_khoai_bap.png', 
                        kcal: '311',
                        energy: '503',
                        carb: '36',
                        fat: '21',
                        protein: '41',
                        fiber: '7'
                    }
                },
                {
                    day: 'Thứ 5',
                    dayName: 'THURSDAY',
                    dayNumber: '24',
                    breakfast: { 
                        name: 'Cơm ớt nướng bulgogi', 
                        nameEn: 'Bulgogi sweet potato bowl',
                        img: '/asset/img/menukhachle/can_doi/nui_ca_hoi.png', 
                        kcal: '508',
                        energy: '482',
                        carb: '55',
                        fat: '14',
                        protein: '33',
                        fiber: '7'
                    },
                    lunch: { 
                        name: 'Xà lách cá bò tôm nướng', 
                        nameEn: 'Pumpkin seeds & goat cheese',
                        img: '/asset/img/menukhachle/it_calo/ga_sot_cajun_cu_den.png', 
                        kcal: '373',
                        energy: '512',
                        carb: '25',
                        fat: '30',
                        protein: '37',
                        fiber: '11'
                    },
                    dinner: { 
                        name: 'Gà nướng khoai lang sốt pesto', 
                        nameEn: 'Pesto sweet potatoes & grilled',
                        img: '/asset/img/menukhachle/it_calo/mi_ca_basa.png', 
                        kcal: '439',
                        energy: '499',
                        carb: '54',
                        fat: '23',
                        protein: '40',
                        fiber: '7'
                    }
                },
                {
                    day: 'Thứ 6',
                    dayName: 'FRIDAY',
                    dayNumber: '32',
                    breakfast: { 
                        name: 'Gà nướng, khoai lang & sốt cà chua', 
                        nameEn: 'Grilled chicken with sweet potatoes & tomato sauce',
                        img: '/asset/img/menukhachle/can_doi/com_gao_lut_uc_vit.png', 
                        kcal: '485',
                        energy: '597',
                        carb: '56',
                        fat: '24',
                        protein: '35',
                        fiber: '15'
                    },
                    lunch: { 
                        name: 'Cơm cá ngừ nướng sốt ponzu', 
                        nameEn: 'Grilled tuna bowl with ponzu sauce',
                        img: '/asset/img/menukhachle/it_calo/bo_bong_cai_xanh.png', 
                        kcal: '341',
                        energy: '498',
                        carb: '59',
                        fat: '20',
                        protein: '48',
                        fiber: '8'
                    },
                    dinner: { 
                        name: 'Gỏi hải sản kiểu pn', 
                        nameEn: 'Vn-style seafood salad',
                        img: '/asset/img/menukhachle/it_calo/uc_vit_bi_do.png', 
                        kcal: '341',
                        energy: '506',
                        carb: '34',
                        fat: '25',
                        protein: '43',
                        fiber: '9'
                    }
                }
            ]
        },
        { 
            "id": 102, 
            name: '1 tuần (29/09 - 03/10)', 
            img: '/asset/img/goiantuan/image 58 (2).png', 
            price: 2520000, 
            kcal: '1676',
            category: '1-tuan',
            badge: '1 tuần (29/09 - 03/10)',
            nutrition: {
                calories: '1,676',
                carbs: '131',
                fat: '77',
                protein: '115',
                fiber: '23'
            },
            meals: [
                {
                    day: 'Thứ 2',
                    dayName: 'MONDAY',
                    dayNumber: '23',
                    breakfast: { 
                        name: 'Cơm gạo lứt bò gà', 
                        nameEn: 'Brown rice with beef & chicken',
                        img: '/asset/img/menukhachle/giau_dam/com_gao_lut_bo_ga.png', 
                        kcal: '562',
                        energy: '562',
                        carb: '62',
                        fat: '14',
                        protein: '45',
                        fiber: '6'
                    },
                    lunch: { 
                        name: 'Bò tôm khoai tây', 
                        nameEn: 'Beef & shrimp with potatoes',
                        img: '/asset/img/menukhachle/giau_dam/bo_tom_khoai_tay.png', 
                        kcal: '615',
                        energy: '615',
                        carb: '58',
                        fat: '15',
                        protein: '42',
                        fiber: '5'
                    },
                    dinner: { 
                        name: 'Cơm trắng bò', 
                        nameEn: 'White rice with beef',
                        img: '/asset/img/menukhachle/can_doi/com_trang_bo.png', 
                        kcal: '438',
                        energy: '438',
                        carb: '62',
                        fat: '10',
                        protein: '28',
                        fiber: '4'
                    }
                },
                {
                    day: 'Thứ 3',
                    dayName: 'TUESDAY',
                    dayNumber: '23',
                    breakfast: { 
                        name: 'Mì bơ cá basa', 
                        nameEn: 'Butter noodle with basa fish',
                        img: '/asset/img/menukhachle/giau_dam/mi_bo_ca_basa.png', 
                        kcal: '560',
                        energy: '560',
                        carb: '64',
                        fat: '16',
                        protein: '38',
                        fiber: '4'
                    },
                    lunch: { 
                        name: 'Ức vịt tôm', 
                        nameEn: 'Duck breast with shrimp',
                        img: '/asset/img/menukhachle/giau_dam/uc_vit_tom.png', 
                        kcal: '584',
                        energy: '584',
                        carb: '52',
                        fat: '16',
                        protein: '40',
                        fiber: '5'
                    },
                    dinner: { 
                        name: 'Cơm gạo lứt cá hồi', 
                        nameEn: 'Brown rice with salmon',
                        img: '/asset/img/menukhachle/can_doi/com_gao_lut_ca_hoi.png', 
                        kcal: '435',
                        energy: '435',
                        carb: '58',
                        fat: '12',
                        protein: '30',
                        fiber: '6'
                    }
                },
                {
                    day: 'Thứ 4',
                    dayName: 'WEDNESDAY',
                    dayNumber: '21',
                    breakfast: { 
                        name: 'Cơm gạo lứt bò gà khoai', 
                        nameEn: 'Brown rice with beef chicken potato',
                        img: '/asset/img/menukhachle/giau_dam/com_gao_lut_bo_ga_khoai.png', 
                        kcal: '720',
                        energy: '720',
                        carb: '75',
                        fat: '18',
                        protein: '48',
                        fiber: '8'
                    },
                    lunch: { 
                        name: 'Nui ức gà', 
                        nameEn: 'Pasta with chicken breast',
                        img: '/asset/img/menukhachle/giau_dam/nui_uc_ga.png', 
                        kcal: '611',
                        energy: '611',
                        carb: '70',
                        fat: '11',
                        protein: '42',
                        fiber: '7'
                    },
                    dinner: { 
                        name: 'Mì tôm đậu', 
                        nameEn: 'Noodle with shrimp & tofu',
                        img: '/asset/img/menukhachle/can_doi/mi_tom_dau.png', 
                        kcal: '435',
                        energy: '435',
                        carb: '55',
                        fat: '8',
                        protein: '26',
                        fiber: '5'
                    }
                },
                {
                    day: 'Thứ 5',
                    dayName: 'THURSDAY',
                    dayNumber: '24',
                    breakfast: { 
                        name: 'Cơm gạo lứt bò vịt', 
                        nameEn: 'Brown rice with beef & duck',
                        img: '/asset/img/menukhachle/giau_dam/com_gao_lut_bo_vit.png', 
                        kcal: '583',
                        energy: '583',
                        carb: '64',
                        fat: '16',
                        protein: '44',
                        fiber: '6'
                    },
                    lunch: { 
                        name: 'Cơm gạo lứt bò khoai', 
                        nameEn: 'Brown rice with beef & sweet potato',
                        img: '/asset/img/menukhachle/giau_dam/com_gao_lut_bo_khoai.png', 
                        kcal: '649',
                        energy: '649',
                        carb: '72',
                        fat: '14',
                        protein: '41',
                        fiber: '7'
                    },
                    dinner: { 
                        name: 'Nui cá hồi', 
                        nameEn: 'Pasta with salmon',
                        img: '/asset/img/menukhachle/can_doi/nui_ca_hoi.png', 
                        kcal: '508',
                        energy: '508',
                        carb: '64',
                        fat: '14',
                        protein: '32',
                        fiber: '7'
                    }
                },
                {
                    day: 'Thứ 6',
                    dayName: 'FRIDAY',
                    dayNumber: '32',
                    breakfast: { 
                        name: 'Cơm trắng bò bắp', 
                        nameEn: 'White rice with beef & corn',
                        img: '/asset/img/menukhachle/giau_dam/com_trang_bo_bap.png', 
                        kcal: '611',
                        energy: '611',
                        carb: '70',
                        fat: '15',
                        protein: '39',
                        fiber: '5'
                    },
                    lunch: { 
                        name: 'Cơm trắng gà cá hồi', 
                        nameEn: 'White rice with chicken & salmon',
                        img: '/asset/img/menukhachle/giau_dam/com_trang_ga_ca_hoi.png', 
                        kcal: '617',
                        energy: '617',
                        carb: '68',
                        fat: '16',
                        protein: '43',
                        fiber: '4'
                    },
                    dinner: { 
                        name: 'Cơm gạo lứt ức vịt', 
                        nameEn: 'Brown rice with duck breast',
                        img: '/asset/img/menukhachle/can_doi/com_gao_lut_uc_vit.png', 
                        kcal: '485',
                        energy: '485',
                        carb: '60',
                        fat: '11',
                        protein: '28',
                        fiber: '6'
                    }
                }
            ]
        },
        { 
            "id": 103, 
            name: '1 tuần (06/10 - 10/10)', 
            img: '/asset/img/goiantuan/image 58 (1).png', 
            price: 2520000, 
            kcal: '1627',
            category: '1-tuan',
            badge: '1 tuần (06/10 - 10/10)',
            nutrition: {
                calories: '1,627',
                carbs: '121',
                fat: '75',
                protein: '116',
                fiber: '24'
            },
            meals: [
                {
                    day: 'Thứ 2',
                    dayName: 'MONDAY',
                    dayNumber: '23',
                    breakfast: { 
                        name: 'Cơm gạo lứt cá ngừ', 
                        nameEn: 'Brown rice with tuna',
                        img: '/asset/img/menukhachle/can_doi/com_gao_lut_ca_ngu.png', 
                        kcal: '434',
                        energy: '434',
                        carb: '58',
                        fat: '9',
                        protein: '30',
                        fiber: '6'
                    },
                    lunch: { 
                        name: 'Cá hồi rau củ', 
                        nameEn: 'Salmon with vegetables',
                        img: '/asset/img/menukhachle/it_calo/ca_hoi_rau_cu.png', 
                        kcal: '320',
                        energy: '320',
                        carb: '28',
                        fat: '12',
                        protein: '32',
                        fiber: '6'
                    },
                    dinner: { 
                        name: 'Mì tôm Nhật', 
                        nameEn: 'Japanese shrimp noodle',
                        img: '/asset/img/menukhachle/it_calo/mi_tom_Nhat.png', 
                        kcal: '341',
                        energy: '341',
                        carb: '45',
                        fat: '6',
                        protein: '24',
                        fiber: '4'
                    }
                },
                {
                    day: 'Thứ 3',
                    dayName: 'TUESDAY',
                    dayNumber: '23',
                    breakfast: { 
                        name: 'Cơm trắng ức vịt', 
                        nameEn: 'White rice with duck breast',
                        img: '/asset/img/menukhachle/can_doi/com_trang_uc_vit.png', 
                        kcal: '586',
                        energy: '586',
                        carb: '68',
                        fat: '13',
                        protein: '29',
                        fiber: '3'
                    },
                    lunch: { 
                        name: 'Ức gà khoai tây', 
                        nameEn: 'Chicken breast with potato',
                        img: '/asset/img/menukhachle/it_calo/uc_ga_khoai_tay.png', 
                        kcal: '285',
                        energy: '285',
                        carb: '35',
                        fat: '5',
                        protein: '30',
                        fiber: '4'
                    },
                    dinner: { 
                        name: 'Mì gà sốt cajun', 
                        nameEn: 'Chicken cajun noodle',
                        img: '/asset/img/menukhachle/it_calo/mi_ga_sot_cajun.png', 
                        kcal: '351',
                        energy: '351',
                        carb: '48',
                        fat: '8',
                        protein: '26',
                        fiber: '3'
                    }
                },
                {
                    day: 'Thứ 4',
                    dayName: 'WEDNESDAY',
                    dayNumber: '21',
                    breakfast: { 
                        name: 'Cơm gạo lứt cá basa', 
                        nameEn: 'Brown rice with basa fish',
                        img: '/asset/img/menukhachle/can_doi/com_gao_lut_ca_basa.png', 
                        kcal: '442',
                        energy: '442',
                        carb: '59',
                        fat: '8',
                        protein: '26',
                        fiber: '6'
                    },
                    lunch: { 
                        name: 'Cá ngừ khoai bắp', 
                        nameEn: 'Tuna with sweet potato & corn',
                        img: '/asset/img/menukhachle/it_calo/ca_ngu_khoai_bap.png', 
                        kcal: '311',
                        energy: '311',
                        carb: '38',
                        fat: '7',
                        protein: '28',
                        fiber: '5'
                    },
                    dinner: { 
                        name: 'Gà sốt cajun củ dền', 
                        nameEn: 'Chicken cajun with beetroot',
                        img: '/asset/img/menukhachle/it_calo/ga_sot_cajun_cu_den.png', 
                        kcal: '373',
                        energy: '373',
                        carb: '42',
                        fat: '9',
                        protein: '29',
                        fiber: '6'
                    }
                },
                {
                    day: 'Thứ 5',
                    dayName: 'THURSDAY',
                    dayNumber: '24',
                    breakfast: { 
                        name: 'Ức gà khoai tây', 
                        nameEn: 'Chicken breast with potato',
                        img: '/asset/img/menukhachle/can_doi/uc_ga_khoai_tay.png', 
                        kcal: '440',
                        energy: '440',
                        carb: '56',
                        fat: '7',
                        protein: '32',
                        fiber: '5'
                    },
                    lunch: { 
                        name: 'Mì cá basa', 
                        nameEn: 'Noodle with basa fish',
                        img: '/asset/img/menukhachle/it_calo/mi_ca_basa.png', 
                        kcal: '439',
                        energy: '439',
                        carb: '52',
                        fat: '8',
                        protein: '24',
                        fiber: '3'
                    },
                    dinner: { 
                        name: 'Bò bông cải xanh', 
                        nameEn: 'Beef with broccoli',
                        img: '/asset/img/menukhachle/it_calo/bo_bong_cai_xanh.png', 
                        kcal: '341',
                        energy: '341',
                        carb: '30',
                        fat: '10',
                        protein: '32',
                        fiber: '7'
                    }
                },
                {
                    day: 'Thứ 6',
                    dayName: 'FRIDAY',
                    dayNumber: '32',
                    breakfast: { 
                        name: 'Cơm gạo lứt gà tôm', 
                        nameEn: 'Brown rice with chicken & shrimp',
                        img: '/asset/img/menukhachle/can_doi/com_gao_lut_ga_tom.png', 
                        kcal: '488',
                        energy: '488',
                        carb: '61',
                        fat: '11',
                        protein: '33',
                        fiber: '6'
                    },
                    lunch: { 
                        name: 'Bò nướng khoai lang', 
                        nameEn: 'Grilled beef with sweet potato',
                        img: '/asset/img/menukhachle/it_calo/bo_nuong_khoai_lang.png', 
                        kcal: '274',
                        energy: '274',
                        carb: '32',
                        fat: '8',
                        protein: '28',
                        fiber: '5'
                    },
                    dinner: { 
                        name: 'Ức vịt bí đỏ', 
                        nameEn: 'Duck breast with pumpkin',
                        img: '/asset/img/menukhachle/it_calo/uc_vit_bi_do.png', 
                        kcal: '341',
                        energy: '341',
                        carb: '35',
                        fat: '9',
                        protein: '26',
                        fiber: '5'
                    }
                }
            ]
        },
        { 
            "id": 104, 
            name: '1 tuần (13/10 - 17/10)', 
            img: '/asset/img/goiantuan/image 58.png', 
            price: 2520000, 
            kcal: '1578',
            category: '1-tuan',
            badge: '1 tuần (13/10 - 17/10)',
            nutrition: {
                calories: '1,578',
                carbs: '130',
                fat: '69',
                protein: '114',
                fiber: '29'
            },
            meals: [
                {
                    day: 'Thứ 2',
                    dayName: 'MONDAY',
                    dayNumber: '23',
                    breakfast: { 
                        name: 'Cơm gạo lứt bò', 
                        nameEn: 'Brown rice with beef',
                        img: '/asset/img/menukhachle/can_doi/com_gao_lut_bo.png', 
                        kcal: '557',
                        energy: '557',
                        carb: '65',
                        fat: '13',
                        protein: '34',
                        fiber: '7'
                    },
                    lunch: { 
                        name: 'Mì tôm Nhật', 
                        nameEn: 'Japanese shrimp noodle',
                        img: '/asset/img/menukhachle/it_calo/mi_tom_Nhat.png', 
                        kcal: '341',
                        energy: '341',
                        carb: '45',
                        fat: '6',
                        protein: '24',
                        fiber: '4'
                    },
                    dinner: { 
                        name: 'Ức gà khoai tây', 
                        nameEn: 'Chicken breast with potato',
                        img: '/asset/img/menukhachle/it_calo/uc_ga_khoai_tay.png', 
                        kcal: '285',
                        energy: '285',
                        carb: '35',
                        fat: '5',
                        protein: '30',
                        fiber: '4'
                    }
                },
                {
                    day: 'Thứ 3',
                    dayName: 'TUESDAY',
                    dayNumber: '23',
                    breakfast: { 
                        name: 'Cơm trắng cá ngừ', 
                        nameEn: 'White rice with tuna',
                        img: '/asset/img/menukhachle/can_doi/com_trang_ca_ngu.png', 
                        kcal: '437',
                        energy: '437',
                        carb: '63',
                        fat: '8',
                        protein: '28',
                        fiber: '3'
                    },
                    lunch: { 
                        name: 'Cá hồi rau củ', 
                        nameEn: 'Salmon with vegetables',
                        img: '/asset/img/menukhachle/it_calo/ca_hoi_rau_cu.png', 
                        kcal: '320',
                        energy: '320',
                        carb: '28',
                        fat: '12',
                        protein: '32',
                        fiber: '6'
                    },
                    dinner: { 
                        name: 'Mì gà sốt cajun', 
                        nameEn: 'Chicken cajun noodle',
                        img: '/asset/img/menukhachle/it_calo/mi_ga_sot_cajun.png', 
                        kcal: '351',
                        energy: '351',
                        carb: '48',
                        fat: '8',
                        protein: '26',
                        fiber: '3'
                    }
                },
                {
                    day: 'Thứ 4',
                    dayName: 'WEDNESDAY',
                    dayNumber: '21',
                    breakfast: { 
                        name: 'Cơm gạo lứt ức gà', 
                        nameEn: 'Brown rice with chicken breast',
                        img: '/asset/img/menukhachle/can_doi/com_gao_lut_uc_ga.png', 
                        kcal: '542',
                        energy: '542',
                        carb: '66',
                        fat: '9',
                        protein: '36',
                        fiber: '7'
                    },
                    lunch: { 
                        name: 'Cá ngừ khoai bắp', 
                        nameEn: 'Tuna with sweet potato & corn',
                        img: '/asset/img/menukhachle/it_calo/ca_ngu_khoai_bap.png', 
                        kcal: '311',
                        energy: '311',
                        carb: '38',
                        fat: '7',
                        protein: '28',
                        fiber: '5'
                    },
                    dinner: { 
                        name: 'Gà sốt cajun củ dền', 
                        nameEn: 'Chicken cajun with beetroot',
                        img: '/asset/img/menukhachle/it_calo/ga_sot_cajun_cu_den.png', 
                        kcal: '373',
                        energy: '373',
                        carb: '42',
                        fat: '9',
                        protein: '29',
                        fiber: '6'
                    }
                },
                {
                    day: 'Thứ 5',
                    dayName: 'THURSDAY',
                    dayNumber: '24',
                    breakfast: { 
                        name: 'Cơm gạo lứt cá basa chiên', 
                        nameEn: 'Brown rice with fried basa',
                        img: '/asset/img/menukhachle/can_doi/com_gao_lut_ca_basa_chien.png', 
                        kcal: '441',
                        energy: '441',
                        carb: '60',
                        fat: '10',
                        protein: '27',
                        fiber: '5'
                    },
                    lunch: { 
                        name: 'Mì cá basa', 
                        nameEn: 'Noodle with basa fish',
                        img: '/asset/img/menukhachle/it_calo/mi_ca_basa.png', 
                        kcal: '439',
                        energy: '439',
                        carb: '52',
                        fat: '8',
                        protein: '24',
                        fiber: '3'
                    },
                    dinner: { 
                        name: 'Bò bông cải xanh', 
                        nameEn: 'Beef with broccoli',
                        img: '/asset/img/menukhachle/it_calo/bo_bong_cai_xanh.png', 
                        kcal: '341',
                        energy: '341',
                        carb: '30',
                        fat: '10',
                        protein: '32',
                        fiber: '7'
                    }
                },
                {
                    day: 'Thứ 6',
                    dayName: 'FRIDAY',
                    dayNumber: '32',
                    breakfast: { 
                        name: 'Mì bò tôm', 
                        nameEn: 'Noodle with beef & shrimp',
                        img: '/asset/img/menukhachle/can_doi/mi_bo_tom.png', 
                        kcal: '515',
                        energy: '515',
                        carb: '68',
                        fat: '12',
                        protein: '32',
                        fiber: '4'
                    },
                    lunch: { 
                        name: 'Bò nướng khoai lang', 
                        nameEn: 'Grilled beef with sweet potato',
                        img: '/asset/img/menukhachle/it_calo/bo_nuong_khoai_lang.png', 
                        kcal: '274',
                        energy: '274',
                        carb: '32',
                        fat: '8',
                        protein: '28',
                        fiber: '5'
                    },
                    dinner: { 
                        name: 'Ức vịt bí đỏ', 
                        nameEn: 'Duck breast with pumpkin',
                        img: '/asset/img/menukhachle/it_calo/uc_vit_bi_do.png', 
                        kcal: '341',
                        energy: '341',
                        carb: '35',
                        fat: '9',
                        protein: '26',
                        fiber: '5'
                    }
                }
            ]
        }
    ]
},
    // THAY THẾ phần goianthietke trong file menu.js bằng đoạn code này:
        goianthietke: {
            hero: { label: 'Gói ăn thiết kế riêng', subtitle: 'Xây dựng thực đơn dành riêng cho bạn', img: '/asset/img/contact_blog/hero-sample.jpg' },
            subCategories: {},
            products: [],
        }
    }
};


// Dữ liệu mô tả chi tiết cho từng sản phẩm
const productDescriptions = {
    // ÍT CALO
    1: {
        description: "Bò nướng khoai lang là món ăn giàu protein từ thịt bò úc cao cấp kết hợp với khoai lang giàu chất xơ. Món ăn được ướp gia vị đặc biệt, nướng chín vừa tới, giữ nguyên độ mềm của thịt và vị ngọt tự nhiên của khoai lang.",
        ingredients: ["Thịt bò úc", "Khoai lang", "Rau củ tươi", "Gia vị tự nhiên"],
        nutrition: { carbs: "32g", protein: "28g", fat: "8g", fiber: "5g" },
        suitableFor: ["Giảm cân", "Tăng cơ", "Ăn kiêng"]
    },
    2: {
        description: "Cá hồi rau củ mang đến nguồn omega-3 dồi dào từ cá hồi Na Uy tươi ngon, kết hợp với rau củ đa dạng giúp cung cấp vitamin và khoáng chất. Món ăn được chế biến nhẹ nhàng, giữ nguyên giá trị dinh dưỡng.",
        ingredients: ["Cá hồi Na Uy", "Bông cải xanh", "Cà rót", "Hành tây", "Dầu olive"],
        nutrition: { carbs: "28g", protein: "32g", fat: "12g", fiber: "6g" },
        suitableFor: ["Tim mạch", "Giảm cân", "Tăng cường trí nhớ"]
    },
    3: {
        description: "Mì tôm Nhật được chế biến từ mì soba truyền thống Nhật Bản, kết hợp với tôm tươi giàu protein và rau củ. Món ăn có hương vị thanh nhẹ, phù hợp cho bữa trưa bận rộn.",
        ingredients: ["Mì soba Nhật", "Tôm tươi", "Nấm", "Rau cải", "Nước dashi"],
        nutrition: { carbs: "45g", protein: "24g", fat: "6g", fiber: "4g" },
        suitableFor: ["Bận rộn", "Ăn kiêng", "Văn phòng"]
    },
    4: {
        description: "Ức gà khoai tây là sự kết hợp hoàn hảo giữa protein từ ức gà và carbohydrate phức tạp từ khoai tây. Món ăn được nướng hoặc hấp, giữ nguyên độ tươi ngon và giá trị dinh dưỡng cao.",
        ingredients: ["Ức gà", "Khoai tây", "Rau xanh", "Tỏi", "Thảo mộc"],
        nutrition: { carbs: "35g", protein: "30g", fat: "5g", fiber: "4g" },
        suitableFor: ["Tăng cơ", "Giảm cân", "Thể thao"]
    },
    5: {
        description: "Mì gà sốt cajun mang hương vị cay nồng đặc trưng của gia vị Cajun Louisiana, kết hợp với thịt gà mềm và mì dai ngon. Món ăn kích thích vị giác nhưng vẫn đảm bảo dinh dưỡng cân đối.",
        ingredients: ["Mì fettuccine", "Ức gà", "Gia vị Cajun", "Ớt chuông", "Kem tươi light"],
        nutrition: { carbs: "48g", protein: "26g", fat: "8g", fiber: "3g" },
        suitableFor: ["Yêu vị cay", "Năng động", "Ăn kiêng"]
    },
    6: {
        description: "Cá ngừ khoai bắp kết hợp protein cao từ cá ngừ đại dương với carb lành mạnh từ khoai lang và ngô non. Món ăn giàu omega-3, vitamin A và chất xơ, giúp tăng cường sức khỏe tim mạch.",
        ingredients: ["Cá ngừ", "Khoai bắp", "Ngô non", "Rau củ", "Dầu olive"],
        nutrition: { carbs: "38g", protein: "28g", fat: "7g", fiber: "5g" },
        suitableFor: ["Tim mạch", "Giảm cân", "Thể thao"]
    },
    7: {
        description: "Gà sốt cajun củ dền là món ăn độc đáo với hương vị cajun đậm đà, thịt gà mềm ngọt kết hợp củ dền giàu chất sắt và chất chống oxy hóa. Món ăn giúp tăng cường sức đề kháng và làm đẹp da.",
        ingredients: ["Ức gà", "Củ dền", "Gia vị Cajun", "Hành tây", "Tỏi"],
        nutrition: { carbs: "42g", protein: "29g", fat: "9g", fiber: "6g" },
        suitableFor: ["Làm đẹp da", "Tăng sức đề kháng", "Ăn kiêng"]
    },
    8: {
        description: "Mì cá basa với cá basa phi lê tươi ngon, thịt trắng mềm, ít xương. Món ăn được chế biến nhẹ nhàng với mì và rau xanh, phù hợp cho mọi lứa tuổi.",
        ingredients: ["Cá basa", "Mì trứng", "Rau cải", "Hành lá", "Nước dùng thanh"],
        nutrition: { carbs: "52g", protein: "24g", fat: "8g", fiber: "3g" },
        suitableFor: ["Mọi lứa tuổi", "Dễ tiêu hóa", "Ăn kiêng"]
    },
    9: {
        description: "Bò bông cải xanh kết hợp thịt bò thăn mềm với bông cải xanh giàu vitamin C và K. Món ăn được xào nhanh giữ nguyên độ giòn của rau và độ mềm của thịt.",
        ingredients: ["Thịt bò thăn", "Bông cải xanh", "Tỏi", "Nước tương", "Dầu mè"],
        nutrition: { carbs: "30g", protein: "32g", fat: "10g", fiber: "7g" },
        suitableFor: ["Tăng cơ", "Giảm cân", "Thể thao"]
    },
    10: {
        description: "Ức vịt bí đỏ là sự kết hợp độc đáo giữa thịt vịt thơm ngon và bí đỏ giàu beta-carotene. Món ăn có màu sắc bắt mắt, vị ngọt tự nhiên và giàu dinh dưỡng.",
        ingredients: ["Ức vịt", "Bí đỏ", "Hành tây", "Thảo mộc", "Rượu vang đỏ"],
        nutrition: { carbs: "35g", protein: "26g", fat: "9g", fiber: "5g" },
        suitableFor: ["Làm đẹp da", "Sức khỏe mắt", "Ăn kiêng"]
    },

    // CÂN ĐỐI
    11: {
        description: "Cơm gạo lứt cá hồi là bữa ăn cân đối hoàn hảo với carb phức tạp từ gạo lứt và protein, omega-3 từ cá hồi. Món ăn giúp duy trì năng lượng ổn định cả ngày dài.",
        ingredients: ["Gạo lứt", "Cá hồi", "Rau củ", "Mè đen", "Rong biển"],
        nutrition: { carbs: "58g", protein: "30g", fat: "12g", fiber: "6g" },
        suitableFor: ["Văn phòng", "Cân đối dinh dưỡng", "Tim mạch"]
    },
    12: {
        description: "Cơm trắng bò kết hợp gạo jasmine thơm dẻo với thịt bò thăn mềm, rau củ tươi ngon. Món ăn đầy đủ dinh dưỡng, phù hợp cho bữa trưa năng động.",
        ingredients: ["Gạo jasmine", "Thịt bò thăn", "Cà rốt", "Đậu que", "Hành tây"],
        nutrition: { carbs: "62g", protein: "28g", fat: "10g", fiber: "4g" },
        suitableFor: ["Năng động", "Tăng cơ", "Cân đối"]
    },
    13: {
        description: "Mì tôm đậu kết hợp mì trứng, tôm tươi và đậu phụ non, tạo nên món ăn giàu protein thực vật và động vật. Món ăn nhẹ nhàng, dễ tiêu hóa.",
        ingredients: ["Mì trứng", "Tôm", "Đậu phụ", "Rau cải", "Nấm"],
        nutrition: { carbs: "55g", protein: "26g", fat: "8g", fiber: "5g" },
        suitableFor: ["Chay mặn", "Dễ tiêu", "Cân đối"]
    },
    14: {
        description: "Nui cá hồi với nui nguyên cám và cá hồi áp chảo, sốt kem nhẹ từ sữa tươi. Món ăn Ý phong cách healthy, giàu omega-3 và carb phức tạp.",
        ingredients: ["Nui nguyên cám", "Cá hồi", "Kem tươi light", "Rau húng quế", "Phô mai"],
        nutrition: { carbs: "64g", protein: "32g", fat: "14g", fiber: "7g" },
        suitableFor: ["Thích món Ý", "Dinh dưỡng cao", "Cân đối"]
    },
    15: {
        description: "Cơm gạo lứt ức vịt với thịt vịt áp chảo thơm phức, gạo lứt giàu chất xơ. Món ăn mang hương vị Á Đông, cung cấp năng lượng dồi dào.",
        ingredients: ["Gạo lứt", "Ức vịt", "Gừng", "Rau thơm", "Nước tương"],
        nutrition: { carbs: "60g", protein: "28g", fat: "11g", fiber: "6g" },
        suitableFor: ["Mùa đông", "Tăng năng lượng", "Cân đối"]
    },
    16: {
        description: "Cơm gạo lứt cá ngừ kết hợp gạo lứt hữu cơ với cá ngừ nướng giàu protein. Món ăn đơn giản nhưng đầy đủ dinh dưỡng, phù hợp cho người bận rộn.",
        ingredients: ["Gạo lứt hữu cơ", "Cá ngừ", "Bông cải", "Cà rốt", "Tỏi"],
        nutrition: { carbs: "58g", protein: "30g", fat: "9g", fiber: "6g" },
        suitableFor: ["Bận rộn", "Văn phòng", "Cân đối"]
    },
    17: {
        description: "Cơm trắng ức vịt với thịt vịt thơm ngon, cơm trắng dẻo mềm. Món ăn truyền thống được nâng cấp healthy, giảm dầu mỡ nhưng vẫn giữ hương vị.",
        ingredients: ["Gạo jasmine", "Ức vịt", "Dưa leo", "Cà chua", "Rau thơm"],
        nutrition: { carbs: "68g", protein: "29g", fat: "13g", fiber: "3g" },
        suitableFor: ["Truyền thống", "Năng lượng cao", "Cân đối"]
    },
    18: {
        description: "Cơm gạo lứt cá basa với cá basa hấp hoặc nướng, gạo lứt giàu vitamin B. Món ăn nhẹ nhàng, phù hợp cho người cần kiểm soát cân nặng.",
        ingredients: ["Gạo lứt", "Cá basa", "Rau muống", "Cà rốt", "Gừng"],
        nutrition: { carbs: "59g", protein: "26g", fat: "8g", fiber: "6g" },
        suitableFor: ["Kiểm soát cân nặng", "Dễ tiêu", "Cân đối"]
    },
    19: {
        description: "Ức gà khoai tây cung cấp protein chất lượng từ ức gà và carb từ khoai tây. Món ăn đơn giản, dễ chế biến, phù hợp cho người tập gym.",
        ingredients: ["Ức gà", "Khoai tây", "Rau xà lách", "Cà chua bi", "Tiêu"],
        nutrition: { carbs: "56g", protein: "32g", fat: "7g", fiber: "5g" },
        suitableFor: ["Tập gym", "Tăng cơ", "Cân đối"]
    },
    20: {
        description: "Cơm gạo lứt gà tôm kết hợp hai nguồn protein cao cấp với gạo lứt dinh dưỡng. Món ăn phong phú về mặt dinh dưỡng với đầy đủ macro cần thiết.",
        ingredients: ["Gạo lứt", "Ức gà", "Tôm", "Rau củ", "Tỏi"],
        nutrition: { carbs: "61g", protein: "33g", fat: "11g", fiber: "6g" },
        suitableFor: ["Thể thao", "Tăng cơ", "Cân đối"]
    },
    21: {
        description: "Cơm gạo lứt bò với thịt bò thăn mềm, gạo lứt giàu chất xơ. Món ăn cung cấp sắt và protein chất lượng cao cho cơ thể.",
        ingredients: ["Gạo lứt", "Thịt bò thăn", "Bông cải", "Cà rốt", "Hành"],
        nutrition: { carbs: "65g", protein: "34g", fat: "13g", fiber: "7g" },
        suitableFor: ["Thiếu máu", "Tăng cơ", "Năng động"]
    },
    22: {
        description: "Cơm trắng cá ngừ với cá ngừ tươi giàu omega-3, cơm trắng dẻo thơm. Món ăn đơn giản nhưng đầy đủ dinh dưỡng cho bữa trưa.",
        ingredients: ["Gạo jasmine", "Cá ngừ", "Dưa leo", "Cà chua", "Rau"],
        nutrition: { carbs: "63g", protein: "28g", fat: "8g", fiber: "3g" },
        suitableFor: ["Văn phòng", "Đơn giản", "Cân đối"]
    },
    23: {
        description: "Cơm gạo lứt ức gà là lựa chọn kinh điển cho người tập gym, kết hợp carb phức tạp và protein nạc. Món ăn clean eating chuẩn cho người rèn luyện thể hình.",
        ingredients: ["Gạo lứt", "Ức gà", "Rau xanh", "Cà rốt", "Tiêu đen"],
        nutrition: { carbs: "66g", protein: "36g", fat: "9g", fiber: "7g" },
        suitableFor: ["Gym", "Bodybuilding", "Tăng cơ giảm mỡ"]
    },
    24: {
        description: "Cơm gạo lứt cá basa chiên với cá basa giòn rụm bên ngoài, mềm bên trong. Món ăn kết hợp giữa healthy và thơm ngon.",
        ingredients: ["Gạo lứt", "Cá basa", "Bột chiên", "Rau củ", "Chanh"],
        nutrition: { carbs: "60g", protein: "27g", fat: "10g", fiber: "5g" },
        suitableFor: ["Cân đối", "Thích chiên", "Gia đình"]
    },
    25: {
        description: "Mì bò tôm kết hợp mì trứng dai ngon với thịt bò và tôm tươi. Món ăn giàu protein, phù hợp cho người cần năng lượng cao.",
        ingredients: ["Mì trứng", "Thịt bò", "Tôm", "Rau cải", "Nấm"],
        nutrition: { carbs: "68g", protein: "32g", fat: "12g", fiber: "4g" },
        suitableFor: ["Năng lượng cao", "Thể thao", "Cân đối"]
    },

    // GIÀU ĐẠM
    26: {
        description: "Cơm gạo lứt bò gà là món ăn siêu protein với hai nguồn thịt chất lượng cao. Phù hợp cho người tập luyện nặng, cần tăng khối lượng cơ bắp.",
        ingredients: ["Gạo lứt", "Thịt bò", "Ức gà", "Rau củ", "Trứng"],
        nutrition: { carbs: "62g", protein: "45g", fat: "14g", fiber: "6g" },
        suitableFor: ["Bodybuilding", "Tăng cơ", "Vận động viên"]
    },
    27: {
        description: "Bò tôm khoai tây kết hợp hai nguồn protein động vật với carb từ khoai tây. Món ăn giàu dinh dưỡng, hỗ trợ phục hồi cơ bắp sau tập luyện.",
        ingredients: ["Thịt bò", "Tôm", "Khoai tây", "Rau xanh", "Tỏi"],
        nutrition: { carbs: "58g", protein: "42g", fat: "15g", fiber: "5g" },
        suitableFor: ["Sau tập", "Tăng cơ", "Protein cao"]
    },
    28: {
        description: "Mì bơ cá basa với mì fettuccine, cá basa và sốt bơ thơm béo. Món ăn Ý giàu protein, cung cấp năng lượng dồi dào.",
        ingredients: ["Mì fettuccine", "Cá basa", "Bơ", "Tỏi", "Phô mai"],
        nutrition: { carbs: "64g", protein: "38g", fat: "16g", fiber: "4g" },
        suitableFor: ["Tăng cân", "Protein cao", "Dinh dưỡng"]
    },
    29: {
        description: "Ức vịt tôm kết hợp thịt vịt thơm phức và tôm tươi ngọt. Món ăn cao cấp giàu protein, phù hợp cho bữa ăn đặc biệt.",
        ingredients: ["Ức vịt", "Tôm", "Măng tây", "Nấm", "Rượu vang"],
        nutrition: { carbs: "52g", protein: "40g", fat: "16g", fiber: "5g" },
        suitableFor: ["Cao cấp", "Protein cao", "Dinh dưỡng"]
    },
    30: {
        description: "Cơm gạo lứt bò gà khoai là món ăn siêu dinh dưỡng với ba nguồn carb-protein chất lượng. Lý tưởng cho người tập gym tăng cơ.",
        ingredients: ["Gạo lứt", "Thịt bò", "Ức gà", "Khoai lang", "Trứng"],
        nutrition: { carbs: "75g", protein: "48g", fat: "18g", fiber: "8g" },
        suitableFor: ["Mass gainer", "Tăng cơ", "Vận động viên"]
    },
    31: {
        description: "Nui ức gà với nui nguyên cám và ức gà nướng thái lát. Món ăn đơn giản, giàu protein, ít béo, phù hợp cho người muốn duy trì cơ bắp.",
        ingredients: ["Nui nguyên cám", "Ức gà", "Sốt cà chua", "Húng quế", "Phô mai light"],
        nutrition: { carbs: "70g", protein: "42g", fat: "11g", fiber: "7g" },
        suitableFor: ["Lean protein", "Tăng cơ giảm mỡ", "Gym"]
    },
    32: {
        description: "Cơm gạo lứt bò vịt kết hợp hai loại thịt đỏ giàu protein và sắt. Món ăn mạnh mẽ, phù hợp cho nam giới tập luyện nặng.",
        ingredients: ["Gạo lứt", "Thịt bò", "Thịt vịt", "Rau củ", "Gia vị"],
        nutrition: { carbs: "64g", protein: "44g", fat: "16g", fiber: "6g" },
        suitableFor: ["Nam giới", "Tập nặng", "Protein cao"]
    },
    33: {
        description: "Cơm gạo lứt bò khoai với thịt bò thăn và khoai lang tím. Món ăn cung cấp năng lượng bền bỉ cho buổi tập luyện cường độ cao.",
        ingredients: ["Gạo lứt", "Thịt bò thăn", "Khoai lang tím", "Rau xanh", "Tiêu"],
        nutrition: { carbs: "72g", protein: "41g", fat: "14g", fiber: "7g" },
        suitableFor: ["Crossfit", "Tăng cơ", "Năng lượng cao"]
    },
    34: {
        description: "Cơm trắng bò bắp kết hợp thịt bò mềm với bắp ngọt tự nhiên. Món ăn ngon miệng, giàu protein và carb, phù hợp cho người cần tăng cân.",
        ingredients: ["Gạo trắng", "Thịt bò", "Bắp ngọt", "Đậu que", "Hành"],
        nutrition: { carbs: "70g", protein: "39g", fat: "15g", fiber: "5g" },
        suitableFor: ["Tăng cân", "Bulking", "Protein cao"]
    },
    35: {
        description: "Cơm trắng gà cá hồi là sự kết hợp độc đáo giữa hai nguồn protein cao cấp. Món ăn giàu omega-3, protein và năng lượng.",
        ingredients: ["Gạo jasmine", "Ức gà", "Cá hồi", "Rau củ", "Mè"],
        nutrition: { carbs: "68g", protein: "43g", fat: "16g", fiber: "4g" },
        suitableFor: ["Dinh dưỡng cao", "Tăng cơ", "Tim mạch"]
    },

    // MÓN CHAY
    36: {
        description: "Cơm gạo lứt rau nấm là món chay thanh đạm với rau củ đa dạng và nấm thơm ngon. Món ăn giàu chất xơ, vitamin, phù hợp cho ngày ăn chay.",
        ingredients: ["Gạo lứt", "Nấm các loại", "Rau củ", "Đậu phụ", "Mè"],
        nutrition: { carbs: "60g", protein: "18g", fat: "8g", fiber: "9g" },
        suitableFor: ["Ăn chay", "Detox", "Thanh lọc"]
    },
    37: {
        description: "Mì đậu gà chay với mì trứng, đậu phụ và nấm hương giả vị gà. Món ăn chay đầy đủ protein thực vật, ngon như món mặn.",
        ingredients: ["Mì trứng", "Đậu phụ", "Nấm hương", "Rau cải", "Hành"],
        nutrition: { carbs: "58g", protein: "20g", fat: "9g", fiber: "7g" },
        suitableFor: ["Ăn chay", "Chay mặn", "Healthy"]
    },
    38: {
        description: "Cơm trắng khoai bơ kết hợp cơm trắng với khoai lang và bơ béo ngậy. Món ăn chay giàu chất béo lành mạnh, năng lượng ổn định.",
        ingredients: ["Gạo trắng", "Khoai lang", "Bơ", "Rau củ", "Hạt chia"],
        nutrition: { carbs: "64g", protein: "12g", fat: "14g", fiber: "8g" },
        suitableFor: ["Ăn chay", "Năng lượng", "Khỏe mạnh"]
    },
    39: {
        description: "Cơm gạo lứt đậu gà chay với đậu phụ non và nấm bào ngư. Món chay giàu protein thực vật, dễ tiêu hóa và thanh đạm.",
        ingredients: ["Gạo lứt", "Đậu phụ non", "Nấm bào ngư", "Rau cải", "Tỏi"],
        nutrition: { carbs: "62g", protein: "22g", fat: "9g", fiber: "8g" },
        suitableFor: ["Ăn chay", "Protein thực vật", "Dễ tiêu"]
    },
    40: {
        description: "Nui đậu phụ với nui nguyên cám, đậu phụ áp chảo và sốt cà chua tự nhiên. Món chay Ý phong cách healthy, giàu protein và chất xơ.",
        ingredients: ["Nui nguyên cám", "Đậu phụ", "Cà chua", "Húng quế", "Tỏi"],
        nutrition: { carbs: "66g", protein: "24g", fat: "10g", fiber: "9g" },
        suitableFor: ["Ăn chay", "Món Ý", "Chất xơ cao"]
    },

    // ĐỒ UỐNG
    41: {
        description: "Detox tổng hợp là ly sinh tố xanh kết hợp nhiều loại rau củ quả giúp thanh lọc cơ thể. Đồ uống giàu vitamin, khoáng chất và enzyme tự nhiên.",
        ingredients: ["Cần tây", "Dưa leo", "Táo xanh", "Chanh", "Gừng"],
        nutrition: { carbs: "24g", protein: "2g", fat: "0.5g", fiber: "6g" },
        suitableFor: ["Detox", "Giảm cân", "Thanh lọc"]
    },
    42: {
        description: "Táo - Nho là ly nước ép tươi ngọt tự nhiên từ táo và nho. Đồ uống giàu chất chống oxy hóa, vitamin C, giúp tăng cường miễn dịch.",
        ingredients: ["Táo", "Nho", "Chanh", "Mật ong"],
        nutrition: { carbs: "22g", protein: "1g", fat: "0.3g", fiber: "3g" },
        suitableFor: ["Bổ sung vitamin", "Tăng miễn dịch", "Tươi mát"]
    },
    43: {
        description: "Táo - Đào - Anh đào là sự kết hợp ngọt ngào của ba loại trái cây hồng hào. Đồ uống giàu vitamin A, C và chất chống oxy hóa.",
        ingredients: ["Táo", "Đào", "Anh đào", "Chanh"],
        nutrition: { carbs: "25g", protein: "1.5g", fat: "0.4g", fiber: "4g" },
        suitableFor: ["Làm đẹp", "Chống lão hóa", "Ngọt ngào"]
    },
    44: {
        description: "Anh đào - Kiwi kết hợp vị ngọt của anh đào và vị chua của kiwi. Đồ uống giàu vitamin C gấp nhiều lần cam, tăng cường collagen.",
        ingredients: ["Anh đào", "Kiwi", "Mật ong", "Nước"],
        nutrition: { carbs: "21g", protein: "2g", fat: "0.5g", fiber: "5g" },
        suitableFor: ["Vitamin C cao", "Làm đẹp da", "Tăng collagen"]
    },
    45: {
        description: "Xoài - Việt quất - Dâu là ly smoothie nhiệt đới với hương vị ngọt ngào, chua nhẹ. Đồ uống giàu chất chống oxy hóa, vitamin và khoáng chất.",
        ingredients: ["Xoài", "Việt quất", "Dâu tây", "Sữa chua", "Mật ong"],
        nutrition: { carbs: "28g", protein: "3g", fat: "1.5g", fiber: "4g" },
        suitableFor: ["Smoothie", "Năng lượng", "Chống oxy hóa"]
    },
    46: {
        description: "Đào - Táo - Cà rốt kết hợp trái cây và rau củ tạo nên ly nước ép cân đối. Đồ uống giàu beta-carotene, vitamin A giúp sáng mắt, đẹp da.",
        ingredients: ["Đào", "Táo", "Cà rốt", "Gừng", "Chanh"],
        nutrition: { carbs: "26g", protein: "1.8g", fat: "0.4g", fiber: "5g" },
        suitableFor: ["Sáng mắt", "Làm đẹp da", "Cân đối"]
    },
    47: {
        description: "Đào - Vải - Mật ong - Dừa là ly smoothie nhiệt đới cao cấp với vị ngọt tự nhiên từ trái cây và mật ong. Đồ uống giàu năng lượng, điện giải từ nước dừa.",
        ingredients: ["Đào", "Vải", "Mật ong", "Nước dừa", "Chia seeds"],
        nutrition: { carbs: "33g", protein: "2.5g", fat: "2g", fiber: "4g" },
        suitableFor: ["Năng lượng", "Điện giải", "Cao cấp"]
    },

    // SALAD & SOUP
    48: {
        description: "Bắp cải xào là món rau xanh giòn ngọt, xào nhanh giữ nguyên vitamin. Món ăn kèm giàu chất xơ, hỗ trợ tiêu hóa tốt.",
        ingredients: ["Bắp cải", "Tỏi", "Dầu olive", "Muối", "Tiêu"],
        nutrition: { carbs: "18g", protein: "4g", fat: "8g", fiber: "6g" },
        suitableFor: ["Món kèm", "Tiêu hóa", "Chất xơ"]
    },
    49: {
        description: "Dưa muối truyền thống Việt Nam lên men tự nhiên. Món ăn kèm giàu probiotic, hỗ trợ hệ vi sinh đường ruột khỏe mạnh.",
        ingredients: ["Dưa cải", "Muối", "Men tự nhiên"],
        nutrition: { carbs: "12g", protein: "2g", fat: "0.5g", fiber: "4g" },
        suitableFor: ["Probiotic", "Tiêu hóa", "Truyền thống"]
    },
    50: {
        description: "Rau chân vịt trộn với sốt mè rang thơm bùi. Món salad xanh giàu sắt, canxi và vitamin K, tốt cho xương khớp và máu.",
        ingredients: ["Rau chân vịt", "Mè rang", "Tỏi", "Nước tương", "Giấm"],
        nutrition: { carbs: "22g", protein: "6g", fat: "9g", fiber: "7g" },
        suitableFor: ["Bổ máu", "Xương khớp", "Salad"]
    },
    51: {
        description: "Salad hạt dinh dưỡng kết hợp nhiều loại hạt, rau xanh và vinaigrette. Món salad cao cấp giàu chất béo lành mạnh, protein thực vật.",
        ingredients: ["Hạt hạnh nhân", "Hạt óc chó", "Rau xà lách", "Cà chua bi", "Dầu olive"],
        nutrition: { carbs: "28g", protein: "12g", fat: "18g", fiber: "8g" },
        suitableFor: ["Healthy fats", "Protein thực vật", "Cao cấp"]
    },
    52: {
        description: "Rau củ xào thập cẩm với nhiều loại rau củ tươi ngon. Món ăn đầy màu sắc, giàu vitamin và khoáng chất đa dạng.",
        ingredients: ["Bông cải", "Cà rốt", "Đậu que", "Nấm", "Tỏi"],
        nutrition: { carbs: "20g", protein: "5g", fat: "7g", fiber: "6g" },
        suitableFor: ["Vitamin đa dạng", "Món kèm", "Healthy"]
    },
    53: {
        description: "Soup cà chua đậu lăng là món súp thanh mát, giàu lycopene từ cà chua và protein từ đậu lăng. Món ăn tốt cho tim mạch và tiêu hóa.",
        ingredients: ["Cà chua", "Đậu lăng", "Hành tây", "Tỏi", "Húng quế"],
        nutrition: { carbs: "32g", protein: "14g", fat: "4g", fiber: "10g" },
        suitableFor: ["Tim mạch", "Protein thực vật", "Súp"]
    },
    54: {
        description: "Súp bí đỏ hạt chia là món súp kem mịn màng từ bí đỏ nướng, trang trí hạt chia. Món ăn giàu beta-carotene, chất xơ và omega-3.",
        ingredients: ["Bí đỏ", "Hạt chia", "Sữa tươi", "Hành tây", "Thảo mộc"],
        nutrition: { carbs: "28g", protein: "8g", fat: "9g", fiber: "7g" },
        suitableFor: ["Làm đẹp da", "Chất xơ", "Súp kem"]
    }
};

export {productDescriptions};

// Xuất hàm này ra để các file khác có thể import và sử dụng
export default getProductData;
