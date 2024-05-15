const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const spinButton = document.getElementById('spinButton');

// Set up a container for the message box within the body
const messageContainer = document.createElement('div');
messageContainer.classList.add('message-container');
document.body.appendChild(messageContainer);

// Define your wheel options and sections
const options = ['https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/200.jpeg', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/200w.jpeg', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/7fac79123d8a4a43b73aa4a6ad046fe9.jpeg', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/9.jpeg', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/Cursed-Cat.jpeg', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/KS-crunchy-cat-op.jpeg', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/SC-Blog-Background-v1-1.jpeg', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/Screenshot_2023-10-20_112038_1435x.jpeg', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/angry-cat-meme-cat.jpeg', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/cat-lover-pattern-background-design_53876-100662.jpeg', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/cat-meme-astarion-v0-9droe81983pb1.jpeg', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/distorted-cat-meme-distortion.jpeg', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/fcd5dd8ccf8d7a90a8040f55dc916125_7aae96bbc41922030f842aee835b0f5a.jpeg', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/funny-cat-meme-200416038.jpeg', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/funny-cat-ophtalmologist-appointmet-squinting-600nw-585833486.jpeg', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images%20(1).jpeg', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images%20(13).jpeg', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images%20(9).jpeg', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/oAQ6LYhDaABAVGEn0g86nXoEztBgfgAaSBAy0I~tplv-nhvfeczskr-1_250_0.jpeg', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/sub-buzz-794-1680571811-8.jpeg', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/womanyellingcat-1573233850.jpg', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/www-instagram-com-monkeycatluna-hl-851711797.jpg', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/190517-grumpy-cat-mc-10372-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/26fc02d99371bd107494db6d281efd26-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/360_F_678341834_RIflXrrwXxViWDjB2u3Cv6aBM35PNd71-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/4d0cbff9ff8fce081ea5d12269c52e51822a4dc1-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/51WHgHxF5YL._AC_UF1000_1000_QL80_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/51e1c1e3f6fba151c520655b21e4b9f0-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/74f4f548392fbdafbe8a5d9764c83eaf-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/82daf4_ff1c0ff1c7fa4ae59bff4fae6b167008-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/835eee_8b310b4221674019a1bf266dc48e117f_mv2_d_3024_4032_s_4_2-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/838548423060_e47f8b5cc8f5aa7a75da_512-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/8e1a0c16bf0c2cfa3bc131c209051cf5b64a2c46-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/950a2ae627971a42a86b7a9b8fc70108-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/Cat-Memes-1-75603-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/Cute-Cat-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/Example-of-Cat-Meme-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/FYhKdfsVsAAAsBs-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/FcIOzz7aMAIQb5d-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/Fv_0otvWwAE2BPA-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/HD-wallpaper-loadnig-cat-meme-loading-cat-meme-cat-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/Longcat_is_loooooooooong-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/Scared-cat-meme-1-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/Screenshot_2024-04-28_at_14.47.07-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/Screenshot_2024-04-29_at_19.45.47-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/Screenshot_2024-04-29_at_19.45.55-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/Screenshot_2024-04-29_at_19.46.01-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/Screenshot_2024-04-29_at_19.46.10-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/Screenshot_2024-04-29_at_19.46.17-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/Screenshot_2024-04-29_at_19.46.25-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/Screenshot_2024-04-29_at_19.46.31-removebg-preview (1).png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/Smiling-Cat-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/Spin_the_cat-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/Stong-cat-meme-10__1_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/b31-92532f841b9349638d226a6c62aa9e85-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/b9c47ef70bff06613d397abfce02c6e7-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/bg_f8f8f8-flat_750x_075_f-pad_750x1000_f8f8f8.u1-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/blackcatzoningout_meme-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/bring-news-front-mlord-food-bowls-are-empty-litter-boxes-are-full-and-natives-are-getting-restless-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/c30fc84cb79fc13e7bc622f570b18cd8-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/cat-cat-meme-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/cat-meme-2-b352cdf2fd6b42889d23abbff1a069bc-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/cat-meme-blog-001-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/crunching_cat-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/daf8770e27db98bad904b66d48168a39-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/de197b1532fdd800d086513e107ed6e2-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/download-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/download__10_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/download__11_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/download__12_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/download__13_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/download__14_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/download__15_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/download__16_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/download__17_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/download__18_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/download__19_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/download__1_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/download__20_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/download__21_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/download__22_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/download__2_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/download__4_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/download__5_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/download__6_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/download__7_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/download__8_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/download__9_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/f407cc90d1e0c4f0487747d9d3b05ad8-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/f4130c376e8c1633b900e6006fea8d89-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/fposter_small_wall_texture_product_750x1000-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/h5bgitnm8m7b1-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/hqdefault-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/huh_cat-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/i-keep-seeing-this-angry-cat-meme-does-anyone-know-what-v0-n9p8aheg9jw91-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images_-_2024-04-27T144749.132-removebg-preview%20(1).png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images_-_2024-04-27T144749.132-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images_-_2024-04-27T144805.185-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images_-_2024-04-27T144811.682-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images_-_2024-04-27T144814.442-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images_-_2024-04-27T144817.357-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images_-_2024-04-27T144823.249-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images_-_2024-04-27T144826.492-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images_-_2024-04-27T144829.642-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images_-_2024-04-27T144837.072-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images_-_2024-04-27T144843.629-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__100_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__10_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__11_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__12_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__14_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__15_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__16_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__17_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__18_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__19_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__20_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__21_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__22_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__23_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__24_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__25_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__26_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__27_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__28_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__29_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__2_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__30_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__31_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__32_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__33_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__34_-removebg-preview%20(1).png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__34_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__35_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__36_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__37_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__38_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__39_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__3_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__40_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__41_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__42_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__43_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__44_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__45_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__47_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__48_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__49_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__4_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__50_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__51_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__52_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__53_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__54_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__55_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__56_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__57_-removebg-preview%20(1).png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__57_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/mages__58_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__59_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__5_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__60_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__61_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__62_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__63_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__64_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__65_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__66_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__67_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__68_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__69_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__6_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__71_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__72_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__73_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__74_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__75_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__76_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__77_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__78_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__79_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__7_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__80_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__81_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__82_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__83_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__84_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__85_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__86_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__87_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__88_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__89_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__8_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__90_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__91_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__92_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__93_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__94_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__95_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__96_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__97_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/images__99_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/istockphoto-1434414228-612x612-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/listen-you-are-the-best-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/main-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/s-l1200-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/s-l1600-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/s3wr054razbb1-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/space-cat-che-crea-l-arcobaleno-tra-le-stelle-scintillanti-gatto-caldo-illustrazione-del-vettore-meme-cat-2fkdkar-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/st_small_507x507-pad_600x600_f8f8f8-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/st_small_507x507-pad_600x600_f8f8f8.u2-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/st_small_507x507-pad_600x600_f8f8f8__1_-removebg-preview (1).png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/st_small_507x507-pad_600x600_f8f8f8__1_-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/stupidcatmemes320-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/ux74bsifrpda1-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/watch-a-fat-cat-dance-an-american-dance-girlfriend-removebg-preview.png', 'https://spinthecats2.s3.eu-north-1.amazonaws.com/cats/white-british-cat-are-wear-sunglass-shirt-concept-summer-yellow-background-1-removebg-preview.png'];
const numOptions = options.length;
const degreesPerOption = 360 / numOptions;

// Define an array of colors
const colors = ['RosyBrown', 'IndianRed', 'LightCoral', 'Salmon', 'DarkSalmon', 'LightSalmon', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'PaleVioletRed', 'LightSalmon', 'Coral', 'Tomato', 'OrangeRed', 'DarkOrange', 'Orange', 'Gold', 'Yellow', 'LightYellow', 'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Khaki', 'DarkKhaki', 'Lavender', 'Thistle', 'Plum', 'Violet', 'Orchid', 'Fuchsia', 'Magenta', 'MediumOrchid', 'MediumPurple', 'RebeccaPurple', 'BlueViolet', 'DarkViolet', 'DarkOrchid', 'DarkMagenta', 'Purple', 'Indigo', 'SlateBlue', 'DarkSlateBlue', 'MediumSlateBlue', 'GreenYellow', 'Chartreuse', 'LawnGreen', 'Lime', 'LimeGreen', 'PaleGreen', 'LightGreen', 'MediumSpringGreen', 'SpringGreen', 'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'YellowGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'MediumAquamarine', 'DarkSeaGreen', 'LightSeaGreen', 'DarkCyan', 'Teal', 'Aqua', 'Cyan', 'LightCyan', 'PaleTurquoise', 'Aquamarine', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'CadetBlue', 'SteelBlue', 'LightSteelBlue', 'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue', 'DeepSkyBlue', 'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'Blue', 'MediumBlue', 'DarkBlue', 'Navy', 'MidnightBlue', 'Cornsilk', 'BlanchedAlmond', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan', 'RosyBrown', 'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru', 'Chocolate', 'SaddleBrown', 'Sienna', 'Brown', 'Maroon', 'White', 'Snow', 'Honeydew', 'MintCream', 'Azure', 'AliceBlue', 'GhostWhite', 'WhiteSmoke', 'Seashell', 'Beige', 'OldLace', 'FloralWhite', 'Ivory', 'AntiqueWhite', 'Linen', 'LavenderBlush', 'MistyRose', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray', 'DimGray', 'LightSlateGray', 'SlateGray', 'DarkSlateGray', 'Black']; // Add more colors as needed

// Function to draw the wheel sections with multicolor rectangles
function drawWheelSectionsMulticolor() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the wheel sections with multicolor rectangles
    for (let i = 0; i < numOptions; i++) {
        const sliceAngle = (2 * Math.PI) / numOptions;
        const x = canvas.width / 2;
        const y = canvas.height / 2;
        const radius = Math.min(canvas.width, canvas.height) / 2;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(sliceAngle * i);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, radius, 0, sliceAngle);
        ctx.closePath();
        ctx.fillStyle = colors[i % colors.length]; // Assign a color from the array based on the index
        ctx.fill();
        ctx.restore();
    }
}

// Call drawWheelSectionsMulticolor function when the page loads
drawWheelSectionsMulticolor();

// Define a flag to track whether the wheel is spinning
let isSpinning = false;

// Function to spin the wheel
function spinWheel() {
    // If the wheel is already spinning, do nothing
    if (isSpinning) {
        return;
    }

    // Set the flag to true to indicate that the wheel is spinning
    isSpinning = true;

    // Disable the spin button to prevent multiple clicks
    spinButton.disabled = true;

    const randomDegrees = Math.floor(Math.random() * 360) + 720; // Random rotation between 720 and 1080 degrees
    canvas.style.transition = 'transform 3s ease-out';
    canvas.style.transform = `rotate(${randomDegrees}deg)`;

    // Listen for the end of the spinning animation
    canvas.addEventListener('transitionend', () => {
        // Calculate the winning option
        const winningIndex = Math.floor(randomDegrees % 360 / degreesPerOption);
        const winningOption = options[winningIndex];

        // Create a new element to display the winning message
        const messageBox = document.createElement('div');
        messageBox.classList.add('message-box');

        // Create an image element for the winning option
        const winningImg = new Image();
        winningImg.src = winningOption;

        // Add an event listener to check when the image is loaded
        winningImg.onload = () => {
            console.log("Image loaded successfully");

            // Append the image to the message box
            messageBox.appendChild(winningImg);

            // Add text to the message box
            const text = document.createElement('p');
            text.textContent = "Congratulations mf! Here is your cat, go buy $SPINCAT";
            messageBox.appendChild(text);

            // Append the message box to the body
            document.body.appendChild(messageBox);

            // Remove the message box after 5 seconds
            setTimeout(() => {
                messageBox.remove();
                // Reset the flag to indicate that the wheel has stopped spinning
                isSpinning = false;
                // Re-enable the spin button
                spinButton.disabled = false;
            }, 5000);
        };

        // Add an event listener to handle image loading errors
        winningImg.onerror = () => {
            console.error("Failed to load image");
            console.error("URL:", winningImg.src);

            // Remove the message box if it exists
            if (messageBox.parentNode) {
                messageBox.parentNode.removeChild(messageBox);
            }

            // Re-spin the wheel
            spinWheel();
        };
    }, { once: true }); // Ensure the event listener only fires once
}


// Event listener for the spin button
spinButton.addEventListener('click', spinWheel);
