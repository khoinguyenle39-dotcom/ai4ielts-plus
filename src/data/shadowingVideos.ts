export interface ShadowingSentence {
  id: number;
  startSec: number;
  endSec: number;
  en: string;
  vi: string;
}

export interface ShadowingLesson {
  id: string;
  youtubeId: string;
  title: string;
  channelName: string;
  topic: string;
  topicId: string;
  level: "Cơ bản (Band 4.5-5.5)" | "Trung cấp (Band 6.0-7.0)" | "Nâng cao (Band 7.5-8.5+)";
  duration: string;
  sentenceCount: number;
  thumbnailUrl: string;
  description: string;
  sentences: ShadowingSentence[];
}

export const SHADOWING_TOPICS = [
  { id: "all", name: "Tất cả chủ đề", icon: "Sparkles" },
  { id: "daily-life", name: "Đời sống hàng ngày", icon: "Coffee" },
  { id: "academic", name: "Học thuật & IELTS Speaking", icon: "GraduationCap" },
  { id: "travel", name: "Du lịch & Khám phá", icon: "Plane" },
  { id: "cooking", name: "Ẩm thực & Nấu ăn", icon: "UtensilsCrossed" },
  { id: "tech", name: "Công nghệ & Trí tuệ nhân tạo", icon: "Cpu" },
  { id: "business", name: "Kinh doanh & Khởi nghiệp", icon: "Briefcase" },
  { id: "nature", name: "Môi trường & Thiên nhiên", icon: "Leaf" },
  { id: "psychology", name: "Tâm lý & Phát triển bản thân", icon: "Brain" },
  { id: "entertainment", name: "Phim ảnh & Giải trí", icon: "Film" },
  { id: "health", name: "Sức khỏe & Thể thao", icon: "Activity" },
  { id: "news", name: "Thời sự & Xã hội", icon: "Newspaper" },
  { id: "art", name: "Nghệ thuật & Âm nhạc", icon: "Palette" },
  { id: "interview", name: "Phỏng vấn & Công sở", icon: "Users" },
  { id: "history", name: "Lịch sử & Di sản thế giới", icon: "Landmark" },
];

export const INITIAL_SHADOWING_LESSONS: ShadowingLesson[] = [
{
  "id": "YYN9wzkeoDU",
  "youtubeId": "YYN9wzkeoDU",
  "title": "Cách luyện nói tiếng Anh bằng phương pháp Shadowing | Bài 1",
  "channelName": "Brooklyn Kể Chuyện",
  "topic": "Đời sống hàng ngày",
  "topicId": "daily-life",
  "level": "Trung cấp (Band 6.0-7.0)",
  "duration": "10:24",
  "sentenceCount": 44,
  "thumbnailUrl": "https://i.ytimg.com/vi/YYN9wzkeoDU/hqdefault.jpg",
  "description": "Bài luyện tập Shadowing kinh điển chia sẻ các mẹo tiết kiệm tiền khi chuyển đến sống tại thành phố lớn. Chữ chạy song song với video từng giây.",
  "sentences": [
    {
      "id": 1,
      "startSec": 0.24,
      "endSec": 3.96,
      "en": "So today, I don't want you to just listen to me,",
      "vi": "Vì vậy hôm nay, tôi không muốn bạn chỉ đơn thuần là lắng nghe tôi,"
    },
    {
      "id": 2,
      "startSec": 3.96,
      "endSec": 6.44,
      "en": "but I want you to speak with me.",
      "vi": "nhưng tôi muốn bạn hãy cùng cất tiếng nói với tôi."
    },
    {
      "id": 3,
      "startSec": 7.24,
      "endSec": 11.5,
      "en": "This is a fun and effective exercise called shadowing.",
      "vi": "Đây là một bài tập vừa vui vừa rất hiệu quả có tên là Shadowing (nhại giọng)."
    },
    {
      "id": 4,
      "startSec": 11.5,
      "endSec": 16.92,
      "en": "It is effective because in order to build your fluency,",
      "vi": "Nó hiệu quả là vì để xây dựng độ nói trôi chảy tự nhiên của bạn,"
    },
    {
      "id": 5,
      "startSec": 16.92,
      "endSec": 20.66,
      "en": "you have to say things over and over.",
      "vi": "bạn phải nói đi nói lại nhiều lần cho quen miệng."
    },
    {
      "id": 6,
      "startSec": 21.76,
      "endSec": 26.36,
      "en": "So by mimicking a native speaker like me,",
      "vi": "Vì vậy, bằng cách bắt chước một người bản xứ như tôi,"
    },
    {
      "id": 7,
      "startSec": 26.36,
      "endSec": 31.04,
      "en": "you can improve how you sound and you'll sound more natural.",
      "vi": "bạn có thể cải thiện cách phát âm và giọng bạn sẽ nghe tự nhiên hơn nhiều."
    },
    {
      "id": 8,
      "startSec": 31.46,
      "endSec": 33.14,
      "en": "So here's what we're going to do.",
      "vi": "Vậy đây là những gì chúng ta sẽ cùng làm trong bài hôm nay."
    },
    {
      "id": 9,
      "startSec": 33.14,
      "endSec": 40.72,
      "en": "I'm going to read aloud a passage at a slightly slower pace than real life",
      "vi": "Tôi sẽ đọc to một đoạn văn với tốc độ chậm hơn một chút so với tốc độ đời thực"
    },
    {
      "id": 10,
      "startSec": 40.72,
      "endSec": 46.88,
      "en": "so that you can follow along and mimic me as best as you can.",
      "vi": "để bạn có thể đuổi theo kịp và bắt chước tôi tốt nhất có thể."
    },
    {
      "id": 11,
      "startSec": 47.88,
      "endSec": 50.76,
      "en": "There will be words on the side of the screen,",
      "vi": "Sẽ có chữ hiển thị ở cạnh màn hình,"
    },
    {
      "id": 12,
      "startSec": 50.76,
      "endSec": 59.46,
      "en": "but also there will be in the description below a PDF document so that you can practice on your own.",
      "vi": "nhưng ở phần mô tả bên dưới cũng có tài liệu PDF để bạn tự luyện tập thêm."
    },
    {
      "id": 13,
      "startSec": 60.56,
      "endSec": 63.52,
      "en": "Also, there will be a link for just the audio.",
      "vi": "Ngoài ra, sẽ có cả đường dẫn tải riêng file âm thanh audio."
    },
    {
      "id": 14,
      "startSec": 63.52,
      "endSec": 66.14,
      "en": "Okay, so this is something",
      "vi": "Được rồi, đây là một đoạn văn"
    },
    {
      "id": 15,
      "startSec": 66.14,
      "endSec": 74.22,
      "en": "that I wrote from the perspective of a friend sharing advice of how to save money when moving to a city.",
      "vi": "mà tôi viết dưới góc nhìn của một người bạn chia sẻ lời khuyên về cách tiết kiệm tiền khi chuyển lên thành phố sống."
    },
    {
      "id": 16,
      "startSec": 75.12,
      "endSec": 76.08,
      "en": "Let's get into it.",
      "vi": "Chúng ta hãy bắt đầu ngay thôi nào."
    },
    {
      "id": 17,
      "startSec": 77.6,
      "endSec": 82.7,
      "en": "Living in a city can be quite expensive and saving money can be difficult.",
      "vi": "Sống ở thành phố lớn có thể khá đắt đỏ và việc tiết kiệm tiền đôi khi rất khó khăn."
    },
    {
      "id": 18,
      "startSec": 83.82,
      "endSec": 85.4,
      "en": "No matter where you go,",
      "vi": "Bất kể bạn đi đến đâu,"
    },
    {
      "id": 19,
      "startSec": 85.4,
      "endSec": 87.32,
      "en": "there are stores surrounding you.",
      "vi": "cũng có các hàng quán cửa hiệu bao quanh bạn."
    },
    {
      "id": 20,
      "startSec": 88.24,
      "endSec": 93.26,
      "en": "There are so many fun things to do and so many friends to do things with.",
      "vi": "Có quá nhiều điều thú vị để làm và rất nhiều bạn bè rủ rê đi chơi."
    },
    {
      "id": 21,
      "startSec": 94.1,
      "endSec": 96.38,
      "en": "And things in the city just cost more.",
      "vi": "Và mọi thứ ở thành phố chỉ đơn giản là đắt đỏ hơn."
    },
    {
      "id": 22,
      "startSec": 97.4,
      "endSec": 103.12,
      "en": "Thankfully, I've come up with some strategies to help save money and make the most of your budget.",
      "vi": "May mắn thay, tôi đã đúc kết được vài chiến lược giúp bạn tiết kiệm tiền và tối ưu ngân sách chi tiêu."
    },
    {
      "id": 23,
      "startSec": 104.62,
      "endSec": 107.5,
      "en": "First, you can consider your housing options.",
      "vi": "Đầu tiên, bạn có thể cân nhắc kỹ lưỡng về các lựa chọn chỗ ở."
    },
    {
      "id": 24,
      "startSec": 108.4,
      "endSec": 116.88,
      "en": "Sharing an apartment with roommates or choosing a location slightly further from the city center can significantly reduce rent costs.",
      "vi": "Ở ghép căn hộ cùng bạn hoặc chọn nơi xa trung tâm một chút có thể giảm đáng kể tiền thuê phòng."
    },
    {
      "id": 25,
      "startSec": 117.86,
      "endSec": 121.3,
      "en": "Additionally, you should take advantage of public transportation.",
      "vi": "Ngoài ra, bạn nên tận dụng các phương tiện giao thông công cộng như xe buýt hay tàu điện."
    },
    {
      "id": 26,
      "startSec": 123.24,
      "endSec": 126.42,
      "en": "Food is another key area to pay attention to.",
      "vi": "Ăn uống là một khoản quan trọng khác bạn cần hết sức để mắt tới."
    },
    {
      "id": 27,
      "startSec": 126.42,
      "endSec": 132.58,
      "en": "You can save so much money by cooking at home instead of dining out.",
      "vi": "Bạn có thể tiết kiệm rất nhiều tiền bằng cách tự nấu ăn ở nhà thay vì đi ăn ngoài hàng quán."
    },
    {
      "id": 28,
      "startSec": 133.72,
      "endSec": 139.1,
      "en": "To lower grocery bills, shop at local markets and use meal prep plans.",
      "vi": "Để giảm tiền mua thực phẩm, hãy đi chợ truyền thống và lên thực đơn nấu ăn trước cho cả tuần."
    },
    {
      "id": 29,
      "startSec": 140,
      "endSec": 141.74,
      "en": "When you do eat out,",
      "vi": "Khi bạn thật sự phải đi ăn ngoài,"
    },
    {
      "id": 30,
      "startSec": 141.74,
      "endSec": 144.06,
      "en": "look for deals, happy hours,",
      "vi": "hãy săn các khuyến mãi, khung giờ vàng giảm giá (happy hours),"
    },
    {
      "id": 31,
      "startSec": 144.06,
      "endSec": 147.44,
      "en": "or use apps that offer discounts.",
      "vi": "hoặc sử dụng các ứng dụng có mã giảm giá ẩm thực."
    },
    {
      "id": 32,
      "startSec": 148.28,
      "endSec": 150.98,
      "en": "Entertainment doesn't have to be costly either.",
      "vi": "Các hoạt động giải trí cũng không nhất thiết phải tốn kém."
    },
    {
      "id": 33,
      "startSec": 152.1,
      "endSec": 155.66,
      "en": "Many cities offer free or low-cost events,",
      "vi": "Nhiều thành phố tổ chức các sự kiện miễn phí hoặc chi phí rất rẻ,"
    },
    {
      "id": 34,
      "startSec": 155.66,
      "endSec": 160.98,
      "en": "such as museum days, outdoor concerts, and community festivals.",
      "vi": "chẳng hạn như ngày mở cửa bảo tàng miễn phí, hòa nhạc ngoài trời và lễ hội cộng đồng."
    },
    {
      "id": 35,
      "startSec": 162.62,
      "endSec": 166.44,
      "en": "libraries also provide free access to books movies",
      "vi": "Các thư viện công cộng cũng cho phép mượn sách báo và xem phim miễn phí,"
    },
    {
      "id": 36,
      "startSec": 166.44,
      "endSec": 172.24,
      "en": "and sometimes even digital resources like ebooks and streaming services",
      "vi": "và đôi khi còn có cả tài nguyên số như sách điện tử ebook và dịch vụ xem video trực tuyến."
    },
    {
      "id": 37,
      "startSec": 172.24,
      "endSec": 179.3,
      "en": "and make sure to be careful with utilities small things like turning off lights",
      "vi": "Và hãy nhớ chú ý tiền điện nước, những hành động nhỏ như tắt điện khi không dùng,"
    },
    {
      "id": 38,
      "startSec": 179.3,
      "endSec": 189.06,
      "en": "when you're not using them using energy efficient appliances and regulating heating and cooling can lead to lower utility bills.",
      "vi": "sử dụng các thiết bị tiết kiệm điện và điều chỉnh máy lạnh/sưởi hợp lý sẽ giúp hạ hóa đơn hàng tháng."
    },
    {
      "id": 39,
      "startSec": 189.06,
      "endSec": 193.76,
      "en": "By making small adjustments and being resourceful,",
      "vi": "Bằng cách thực hiện từng điều chỉnh nhỏ và biết cách xoay sở tài nguyên khéo léo,"
    },
    {
      "id": 40,
      "startSec": 193.76,
      "endSec": 197.16,
      "en": "you'll enjoy city life without breaking the bank.",
      "vi": "bạn sẽ hoàn toàn tận hưởng cuộc sống thành thị mà không bao giờ lo bị 'cháy túi'."
    },
    {
      "id": 41,
      "startSec": 197.16,
      "endSec": 201.4,
      "en": "All right, guys, I hope this was helpful for you.",
      "vi": "Được rồi mọi người, tôi hy vọng bài học này thật sự hữu ích cho các bạn."
    },
    {
      "id": 42,
      "startSec": 201.4,
      "endSec": 207.54,
      "en": "I encourage you to keep practicing this over and over to the point",
      "vi": "Tôi khuyến khích bạn hãy tiếp tục luyện bài này nhiều lần cho đến mức"
    },
    {
      "id": 43,
      "startSec": 207.54,
      "endSec": 213.06,
      "en": "that you don't have to rely on the script so that you can build your fluency.",
      "vi": "bạn không cần nhìn vào kịch bản chữ nữa mà vẫn nói trôi chảy, nhịp nhàng tự nhiên."
    },
    {
      "id": 44,
      "startSec": 214.14,
      "endSec": 217.48,
      "en": "Stay tuned for more videos like this in the future.",
      "vi": "Hãy đón xem thêm nhiều video luyện nói bổ ích như thế này trong các bài tiếp theo nhé."
    }
  ]
},
{
  "id": "E7A9DNLikUo",
  "youtubeId": "E7A9DNLikUo",
  "title": "Luyện nói Shadowing tiếng Anh | Các thói quen sống lành mạnh | Bài 4",
  "channelName": "Brooklyn Kể Chuyện",
  "topic": "Sức khỏe & Thể thao",
  "topicId": "health",
  "level": "Trung cấp (Band 6.0-7.0)",
  "duration": "11:15",
  "sentenceCount": 46,
  "thumbnailUrl": "https://i.ytimg.com/vi/E7A9DNLikUo/hqdefault.jpg",
  "description": "Trọn vẹn 46 câu nói của Brooklyn Kể Chuyện về chủ đề xây dựng thói quen sống lành mạnh. Khớp 100% với khẩu hình và phụ đề YouTube.",
  "sentences": [
    {
      "id": 1,
      "startSec": 0.84,
      "endSec": 4.38,
      "en": "Welcome to our fourth speech practice video.",
      "vi": "Chào mừng bạn đến với video luyện nói tiếng Anh số 4 của chúng ta."
    },
    {
      "id": 2,
      "startSec": 4.38,
      "endSec": 10.9,
      "en": "To see the other ones and hear more about shadowing exercises, you can visit this playlist.",
      "vi": "Để xem các bài khác và tìm hiểu thêm về bài tập shadowing, bạn có thể ghé thăm danh sách phát này."
    },
    {
      "id": 3,
      "startSec": 10.9,
      "endSec": 14.84,
      "en": "So this passage is on building healthy habits.",
      "vi": "Đoạn văn hôm nay sẽ nói về việc xây dựng các thói quen sống lành mạnh."
    },
    {
      "id": 4,
      "startSec": 14.84,
      "endSec": 18.96,
      "en": "As I read it out loud, try to read it along with me,",
      "vi": "Khi tôi đọc to, hãy cố gắng đọc đuổi theo cùng với tôi,"
    },
    {
      "id": 5,
      "startSec": 18.96,
      "endSec": 25.24,
      "en": "mimicking me as close as you can.",
      "vi": "bắt chước giọng tôi sát nhất có thể."
    },
    {
      "id": 6,
      "startSec": 25.24,
      "endSec": 30.18,
      "en": "And as always, the PDF with the script and the audio link is down below",
      "vi": "Và như thường lệ, tài liệu PDF kịch bản và link nghe audio ở ngay bên dưới"
    },
    {
      "id": 7,
      "startSec": 30.18,
      "endSec": 41.42,
      "en": "so that you can continue practicing with those. Alright, let's do it.",
      "vi": "để bạn có thể tiếp tục tự luyện tập. Được rồi, bắt đầu thôi."
    },
    {
      "id": 8,
      "startSec": 43.9,
      "endSec": 48.06,
      "en": "Building healthy habits is something we all want to do,",
      "vi": "Xây dựng các thói quen lành mạnh là điều mà tất cả chúng ta đều mong muốn làm,"
    },
    {
      "id": 9,
      "startSec": 48.06,
      "endSec": 54.44,
      "en": "but let's be honest, it's easier said than done.",
      "vi": "nhưng hãy thành thật mà nói, nói thì luôn dễ hơn làm."
    },
    {
      "id": 10,
      "startSec": 54.44,
      "endSec": 58.4,
      "en": "Whether it's exercising more, eating better,",
      "vi": "Dù đó là tập thể dục nhiều hơn, ăn uống lành mạnh hơn,"
    },
    {
      "id": 11,
      "startSec": 58.4,
      "endSec": 66.04,
      "en": "or managing stress, we know these things are important for our long-term being.",
      "vi": "hay kiểm soát căng thẳng, chúng ta đều biết chúng rất quan trọng cho sức khỏe lâu dài."
    },
    {
      "id": 12,
      "startSec": 66.04,
      "endSec": 69,
      "en": "But where do you start?",
      "vi": "Nhưng bạn nên bắt đầu từ đâu?"
    },
    {
      "id": 13,
      "startSec": 69,
      "endSec": 75.32,
      "en": "And more importantly, how do you stick to it?",
      "vi": "Và quan trọng hơn, làm sao để bạn kiên trì duy trì nó?"
    },
    {
      "id": 14,
      "startSec": 75.32,
      "endSec": 79.02,
      "en": "First off, start small.",
      "vi": "Trước hết, hãy bắt đầu từ những điều nhỏ."
    },
    {
      "id": 15,
      "startSec": 79.02,
      "endSec": 83.82,
      "en": "We often get excited and want to change everything at once,",
      "vi": "Chúng ta thường hào hứng và muốn thay đổi tất cả mọi thứ cùng một lúc,"
    },
    {
      "id": 16,
      "startSec": 83.82,
      "endSec": 88.78,
      "en": "but this usually sets us up for burnout.",
      "vi": "nhưng điều này thường dẫn đến sự kiệt sức và bỏ cuộc."
    },
    {
      "id": 17,
      "startSec": 88.78,
      "endSec": 91.9,
      "en": "Instead, pick one thing.",
      "vi": "Thay vào đó, hãy chỉ chọn ra một việc duy nhất."
    },
    {
      "id": 18,
      "startSec": 91.9,
      "endSec": 99.08,
      "en": "Maybe it's drinking more water or going for a 10-minute walk after work.",
      "vi": "Có thể là uống nhiều nước hơn hoặc đi dạo 10 phút sau giờ làm việc."
    },
    {
      "id": 19,
      "startSec": 99.08,
      "endSec": 104.9,
      "en": "The key is consistency, not intensity.",
      "vi": "Chìa khóa ở đây là sự đều đặn kiên trì, chứ không phải cường độ dồn dập."
    },
    {
      "id": 20,
      "startSec": 104.9,
      "endSec": 107.74,
      "en": "Once you've got that small habit down, you can build on it.",
      "vi": "Một khi bạn đã thuần thục thói quen nhỏ đó, bạn có thể phát triển thêm."
    },
    {
      "id": 21,
      "startSec": 111.46,
      "endSec": 114.72,
      "en": "Next, make your habit part of your routine.",
      "vi": "Tiếp theo, hãy biến thói quen thành một phần lịch trình hàng ngày của bạn."
    },
    {
      "id": 22,
      "startSec": 114.72,
      "endSec": 120.54,
      "en": "Life gets busy, whether you're a recent grad, navigating a new job, or starting a family.",
      "vi": "Cuộc sống luôn bận rộn, dù bạn là sinh viên mới ra trường, bắt đầu việc mới hay lập gia đình."
    },
    {
      "id": 23,
      "startSec": 124.4,
      "endSec": 131.06,
      "en": "But if you tie your habit to something you already do every day, it becomes second nature.",
      "vi": "Nhưng nếu bạn gắn thói quen mới vào một việc bạn đã làm mỗi ngày, nó sẽ trở thành phản xạ tự nhiên."
    },
    {
      "id": 24,
      "startSec": 133.5,
      "endSec": 137.98,
      "en": "This is called habit stacking.",
      "vi": "Kỹ thuật này được gọi là chồng lớp thói quen (habit stacking)."
    },
    {
      "id": 25,
      "startSec": 137.98,
      "endSec": 146.48,
      "en": "For example, do squats while brushing your teeth or meditate for a few minutes before bed.",
      "vi": "Ví dụ: tập squat trong lúc đánh răng hoặc ngồi thiền vài phút trước khi đi ngủ."
    },
    {
      "id": 26,
      "startSec": 146.48,
      "endSec": 150.04,
      "en": "Accountability is huge.",
      "vi": "Trách nhiệm cam kết có sức mạnh cực kỳ to lớn."
    },
    {
      "id": 27,
      "startSec": 150.04,
      "endSec": 159.26,
      "en": "It's so easy to skip a workout or order takeout when no one's watching.",
      "vi": "Rất dễ dàng để bỏ tập hoặc gọi đồ ăn nhanh khi không có ai theo dõi."
    },
    {
      "id": 28,
      "startSec": 159.26,
      "endSec": 165.9,
      "en": "But when you have a buddy who's in it with you or even a simple tracker app,",
      "vi": "Nhưng khi bạn có một người bạn đồng hành hoặc một ứng dụng theo dõi đơn giản,"
    },
    {
      "id": 29,
      "startSec": 165.9,
      "endSec": 170.94,
      "en": "you're more likely to stick to your goals.",
      "vi": "bạn sẽ có nhiều khả năng kiên trì với mục tiêu của mình hơn."
    },
    {
      "id": 30,
      "startSec": 170.94,
      "endSec": 178.36,
      "en": "Sharing your progress or struggles can make it feel like a team effort.",
      "vi": "Chia sẻ tiến độ hoặc khó khăn giúp bạn cảm thấy như có cả một đội ngũ bên cạnh."
    },
    {
      "id": 31,
      "startSec": 178.36,
      "endSec": 182.42,
      "en": "Finally, don't be too hard on yourself.",
      "vi": "Cuối cùng, đừng quá khắt khe hay tạo áp lực lên chính mình."
    },
    {
      "id": 32,
      "startSec": 182.42,
      "endSec": 186.96,
      "en": "We're all going to have off days and that's fine.",
      "vi": "Tất cả chúng ta đều sẽ có những ngày mệt mỏi chệch hướng, và điều đó hoàn toàn bình thường."
    },
    {
      "id": 33,
      "startSec": 186.96,
      "endSec": 191.48,
      "en": "What matters is getting back on track.",
      "vi": "Điều quan trọng nhất là biết quay trở lại đường ray ngay sau đó."
    },
    {
      "id": 34,
      "startSec": 191.48,
      "endSec": 196.26,
      "en": "Building healthy habits is a marathon, not a sprint.",
      "vi": "Xây dựng thói quen tốt là một cuộc chạy marathon đường dài, không phải cuộc chạy nước rút."
    },
    {
      "id": 35,
      "startSec": 196.26,
      "endSec": 202.24,
      "en": "So give yourself some grace and celebrate the small wins.",
      "vi": "Vì vậy hãy bao dung với bản thân và ăn mừng những chiến thắng nho nhỏ."
    },
    {
      "id": 36,
      "startSec": 202.24,
      "endSec": 206.58,
      "en": "All right, guys, I hope this was helpful for you.",
      "vi": "Được rồi các bạn, tôi hy vọng bài học này thật sự hữu ích cho các bạn."
    },
    {
      "id": 37,
      "startSec": 206.58,
      "endSec": 211.6,
      "en": "I encourage you to keep practicing this over and over to a point",
      "vi": "Tôi khuyến khích bạn tiếp tục nhại đi nhại lại cho đến mức"
    },
    {
      "id": 38,
      "startSec": 211.6,
      "endSec": 217.44,
      "en": "that you don't have to rely on the script so that you can build your fluency.",
      "vi": "bạn không cần nhìn vào kịch bản chữ nữa mà vẫn nói trôi chảy tự nhiên."
    },
    {
      "id": 39,
      "startSec": 217.44,
      "endSec": 221.7,
      "en": "Stay tuned for the next video like this. Goodbye for now.",
      "vi": "Hãy đón chờ video tiếp theo như thế này nhé. Tạm biệt các bạn."
    }
  ]
},
{
  "id": "JsXWIwwo_SA",
  "youtubeId": "JsXWIwwo_SA",
  "title": "IELTS Speaking Part 1, 2, 3 - Bài mẫu câu hỏi thành phố & Đời sống hiện đại",
  "channelName": "ICOACH IELTS",
  "topic": "Học thuật & IELTS Speaking",
  "topicId": "academic",
  "level": "Nâng cao (Band 7.5-8.5+)",
  "duration": "03:45",
  "sentenceCount": 12,
  "thumbnailUrl": "https://i.ytimg.com/vi/JsXWIwwo_SA/hqdefault.jpg",
  "description": "Trọn bộ 12 câu hỏi & câu trả lời mẫu IELTS Speaking chuẩn format đề thi thật về chủ đề thành phố và cuộc sống hiện đại. Phụ đề khớp từng chữ trong video.",
  "sentences": [
    {
      "id": 1,
      "startSec": 0,
      "endSec": 2.19,
      "en": "Is your city a good place for young people?",
      "vi": "Thành phố của bạn có phải là một nơi tốt cho giới trẻ không?"
    },
    {
      "id": 2,
      "startSec": 2.3,
      "endSec": 9.11,
      "en": "Yes, I think it is, mainly because there are many educational institutions, job opportunities, and social activities.",
      "vi": "Vâng, tôi nghĩ là có, chủ yếu vì ở đây có nhiều cơ sở giáo dục, cơ hội việc làm và các hoạt động xã hội phong phú."
    },
    {
      "id": 3,
      "startSec": 9.34,
      "endSec": 13.93,
      "en": "Young people can meet different kinds of people and gain new experiences quite easily.",
      "vi": "Người trẻ có thể dễ dàng gặp gỡ nhiều tuýp người khác nhau và tích lũy các trải nghiệm mới mẻ."
    },
    {
      "id": 4,
      "startSec": 14.08,
      "endSec": 18.13,
      "en": "This environment can be very helpful for personal and professional development.",
      "vi": "Môi trường này có thể rất hữu ích cho sự phát triển cá nhân cũng như nghề nghiệp."
    },
    {
      "id": 5,
      "startSec": 18.72,
      "endSec": 21.39,
      "en": "What problems do cities usually have?",
      "vi": "Các thành phố thường gặp phải những vấn đề nan giải gì?"
    },
    {
      "id": 6,
      "startSec": 21.7,
      "endSec": 25.86,
      "en": "One common problem is traffic congestion, especially during peak hours.",
      "vi": "Một vấn đề phổ biến là tình trạng tắc nghẽn giao thông, đặc biệt là vào các khung giờ cao điểm."
    },
    {
      "id": 7,
      "startSec": 25.86,
      "endSec": 31.27,
      "en": "Pollution and the high cost of living are also major concerns in many large cities.",
      "vi": "Ô nhiễm môi trường và chi phí sinh hoạt đắt đỏ cũng là những mối quan ngại lớn ở nhiều thành phố lớn."
    },
    {
      "id": 8,
      "startSec": 31.48,
      "endSec": 36.35,
      "en": "These issues can affect people's quality of life if they are not managed properly.",
      "vi": "Những vấn đề này có thể ảnh hưởng đến chất lượng cuộc sống của người dân nếu không được quản lý hợp lý."
    },
    {
      "id": 9,
      "startSec": 37.14,
      "endSec": 40.29,
      "en": "Do you think cities are stressful places to live?",
      "vi": "Bạn có nghĩ thành phố là những nơi sống đầy áp lực không?"
    },
    {
      "id": 10,
      "startSec": 40.38,
      "endSec": 45.33,
      "en": "In some ways, yes, because the pace of life is often fast and competitive.",
      "vi": "Ở một khía cạnh nào đó thì đúng, vì nhịp sống thường rất hối hả và cạnh tranh khốc liệt."
    },
    {
      "id": 11,
      "startSec": 45.54,
      "endSec": 50.19,
      "en": "People may feel pressure from work, finances, or crowded environments.",
      "vi": "Mọi người có thể cảm thấy áp lực từ công việc, tài chính hoặc môi trường đông đúc ngột ngạt."
    },
    {
      "id": 12,
      "startSec": 50.38,
      "endSec": 56.27,
      "en": "However, many people still choose to live in cities because of the opportunities and convenience they offer.",
      "vi": "Tuy nhiên, nhiều người vẫn chọn sống ở thành phố vì những cơ hội và sự tiện nghi mà nó mang lại."
    }
  ]
},
{
  "id": "qu66xCXhxy4",
  "youtubeId": "qu66xCXhxy4",
  "title": "A2-B1 English Listening & Speaking Practice - Job Interviews",
  "channelName": "Listening Time",
  "topic": "Phỏng vấn & Công sở",
  "topicId": "interview",
  "level": "Cơ bản (Band 4.5-5.5)",
  "duration": "14:07",
  "sentenceCount": 25,
  "thumbnailUrl": "https://i.ytimg.com/vi/qu66xCXhxy4/hqdefault.jpg",
  "description": "25 câu đàm thoại luyện nói chủ đề phỏng vấn xin việc (Job Interviews) từ kênh Listening Time. Phát âm chuẩn người bản xứ, phụ đề chạy song song.",
  "sentences": [
    {
      "id": 1,
      "startSec": 0.16,
      "endSec": 1.28,
      "en": "Hey everybody!",
      "vi": "Chào tất cả mọi người!"
    },
    {
      "id": 2,
      "startSec": 1.28,
      "endSec": 5.5,
      "en": "Welcome to this A2 English listening practice video.",
      "vi": "Chào mừng bạn đến với video luyện nghe tiếng Anh trình độ A2 này."
    },
    {
      "id": 3,
      "startSec": 5.5,
      "endSec": 12.1,
      "en": "You can use this video to practice your listening and comprehension as I speak.",
      "vi": "Bạn có thể sử dụng video này để luyện nghe và hiểu khi tôi nói."
    },
    {
      "id": 4,
      "startSec": 12.66,
      "endSec": 19.66,
      "en": "Remember to sign up for our listening practice seminars at polyglossa.com.",
      "vi": "Hãy nhớ đăng ký tham gia các buổi hội thảo luyện nghe của chúng tôi."
    },
    {
      "id": 5,
      "startSec": 20.12,
      "endSec": 27.92,
      "en": "And remember to download my free Listening Time podcast so you can practice your listening skills.",
      "vi": "Và hãy nhớ tải podcast Listening Time miễn phí để rèn luyện kỹ năng nghe của bạn."
    },
    {
      "id": 6,
      "startSec": 33.24,
      "endSec": 37.2,
      "en": "So today I'm going to talk about job interviews.",
      "vi": "Hôm nay tôi sẽ nói về chủ đề phỏng vấn xin việc (job interviews)."
    },
    {
      "id": 7,
      "startSec": 37.2,
      "endSec": 46.56,
      "en": "This is an extremely important topic because usually in order to get a job you need to pass a job interview.",
      "vi": "Đây là một chủ đề vô cùng quan trọng vì thông thường để có được một công việc bạn phải vượt qua buổi phỏng vấn."
    },
    {
      "id": 8,
      "startSec": 46.56,
      "endSec": 55.76,
      "en": "Many people get nervous when they have to interview for a job because it can be intimidating or even scary.",
      "vi": "Nhiều người cảm thấy rất lo lắng khi đi phỏng vấn vì điều đó có thể tạo cảm giác áp lực, thậm chí đáng sợ."
    },
    {
      "id": 9,
      "startSec": 55.76,
      "endSec": 61.22,
      "en": "So why don't we discuss some of the different elements of job interviews",
      "vi": "Vậy tại sao chúng ta không thảo luận về những yếu tố khác nhau của một buổi phỏng vấn xin việc,"
    },
    {
      "id": 10,
      "startSec": 61.22,
      "endSec": 67.76,
      "en": "and maybe I can give you some tips that might help you with future interviews.",
      "vi": "và tôi có thể chia sẻ cho bạn một số bí quyết giúp ích cho các buổi phỏng vấn trong tương lai."
    },
    {
      "id": 11,
      "startSec": 68.18,
      "endSec": 73.1,
      "en": "First of all, let's talk about the different types of job interviews.",
      "vi": "Trước hết, hãy cùng nói về các hình thức phỏng vấn xin việc khác nhau."
    },
    {
      "id": 12,
      "startSec": 73.5,
      "endSec": 79.18,
      "en": "For example, there are one-on-one interviews and there are group interviews.",
      "vi": "Ví dụ: có phỏng vấn 1-1 trực tiếp và cũng có cả phỏng vấn theo nhóm."
    },
    {
      "id": 13,
      "startSec": 79.48,
      "endSec": 83.62,
      "en": "Most interviews are typically conducted one-on-one,",
      "vi": "Hầu hết các buổi phỏng vấn thường được tiến hành theo hình thức một đối một,"
    },
    {
      "id": 14,
      "startSec": 83.62,
      "endSec": 88.66,
      "en": "but I've actually had one or two group interviews before.",
      "vi": "nhưng trước đây tôi cũng đã từng trải qua một hoặc hai lần phỏng vấn nhóm."
    },
    {
      "id": 15,
      "startSec": 88.66,
      "endSec": 91.3,
      "en": "Also, there are phone interviews, video interviews, and in-person interviews.",
      "vi": "Ngoài ra, còn có phỏng vấn qua điện thoại, phỏng vấn qua video online và phỏng vấn trực tiếp."
    },
    {
      "id": 16,
      "startSec": 95.08,
      "endSec": 97.9,
      "en": "And there are general interviews, behavioral interviews, and technical interviews.",
      "vi": "Và có phỏng vấn tổng quát, phỏng vấn hành vi và phỏng vấn kỹ thuật chuyên môn."
    },
    {
      "id": 17,
      "startSec": 101.48,
      "endSec": 107.8,
      "en": "The type of questions you're asked can be really different depending on the type of interview",
      "vi": "Loại câu hỏi bạn được hỏi có thể rất khác nhau tùy thuộc vào từng hình thức phỏng vấn,"
    },
    {
      "id": 18,
      "startSec": 107.8,
      "endSec": 113.24,
      "en": "and the feel of the interview can also be really different.",
      "vi": "và bầu không khí của buổi phỏng vấn cũng hoàn toàn khác biệt."
    },
    {
      "id": 19,
      "startSec": 113.24,
      "endSec": 121.08,
      "en": "So for example, preparing for a behavioral interview is different than preparing for a technical interview.",
      "vi": "Ví dụ: chuẩn bị cho phỏng vấn hành vi rất khác so với chuẩn bị cho phỏng vấn kỹ thuật."
    },
    {
      "id": 20,
      "startSec": 121.08,
      "endSec": 126.24,
      "en": "You might be able to answer all the technical questions well,",
      "vi": "Bạn có thể trả lời rất tốt tất cả các câu hỏi chuyên môn kỹ thuật,"
    },
    {
      "id": 21,
      "startSec": 126.24,
      "endSec": 133.2,
      "en": "but maybe you don't know how to answer questions about your personality or your attributes.",
      "vi": "nhưng có thể bạn lại lúng túng trước các câu hỏi về tính cách hay phẩm chất cá nhân."
    },
    {
      "id": 22,
      "startSec": 133.2,
      "endSec": 139.06,
      "en": "I help many English learners prepare for job interviews in English,",
      "vi": "Tôi từng giúp nhiều người học tiếng Anh chuẩn bị cho các buổi phỏng vấn xin việc,"
    },
    {
      "id": 23,
      "startSec": 139.06,
      "endSec": 145.52,
      "en": "and usually it's hard for them to answer general and behavioral questions.",
      "vi": "và thông thường họ gặp nhiều khó khăn nhất khi trả lời các câu hỏi tình huống hành vi."
    },
    {
      "id": 24,
      "startSec": 145.52,
      "endSec": 152,
      "en": "Practicing your answers beforehand helps you speak with confidence and clarity.",
      "vi": "Luyện tập câu trả lời trước sẽ giúp bạn nói với sự tự tin và rành mạch rõ ràng."
    },
    {
      "id": 25,
      "startSec": 152,
      "endSec": 158.5,
      "en": "Keep practicing shadowing with these expressions to ace your next job interview!",
      "vi": "Hãy tiếp tục nhại giọng các mẫu câu này để chinh phục buổi phỏng vấn xin việc tiếp theo nhé!"
    }
  ]
},
{
  "id": "g1rGL_FYW6g",
  "youtubeId": "g1rGL_FYW6g",
  "title": "B2 Shadowing Practice - Missing A Connection At The Airport",
  "channelName": "Shadowing Practice",
  "topic": "Du lịch & Khám phá",
  "topicId": "travel",
  "level": "Trung cấp (Band 6.0-7.0)",
  "duration": "00:45",
  "sentenceCount": 12,
  "thumbnailUrl": "https://i.ytimg.com/vi/g1rGL_FYW6g/hqdefault.jpg",
  "description": "Bài luyện Shadowing tình huống lỡ chuyến bay nối chuyến tại sân bay. Rèn luyện sự bình tĩnh và cách xử lý khéo léo bằng tiếng Anh.",
  "sentences": [
    {
      "id": 1,
      "startSec": 0,
      "endSec": 2.69,
      "en": "I had missed my connection by 11 minutes.",
      "vi": "Tôi đã bị lỡ chuyến bay nối chuyến chỉ vỏn vẹn 11 phút."
    },
    {
      "id": 2,
      "startSec": 3.3,
      "endSec": 5.83,
      "en": "The woman at the desk barely looked up.",
      "vi": "Người phụ nữ ở quầy làm thủ tục thậm chí hầu như không ngẩng đầu lên nhìn."
    },
    {
      "id": 3,
      "startSec": 6.58,
      "endSec": 9.31,
      "en": "Nothing available until tomorrow, she said.",
      "vi": "'Không còn chuyến nào cho đến ngày mai đâu,' cô ấy nói."
    },
    {
      "id": 4,
      "startSec": 9.84,
      "endSec": 12.95,
      "en": "A year ago, I would have nodded and walked away.",
      "vi": "Nếu là một năm trước, tôi đã chỉ biết gật đầu và lủi thủi bước đi."
    },
    {
      "id": 5,
      "startSec": 13.56,
      "endSec": 15.27,
      "en": "So what did I do instead?",
      "vi": "Vậy thay vào đó tôi đã làm gì?"
    },
    {
      "id": 6,
      "startSec": 16.06,
      "endSec": 19.29,
      "en": "I asked whether there was anything on a different airline.",
      "vi": "Tôi đã hỏi liệu có chuyến bay nào của một hãng hàng không khác không."
    },
    {
      "id": 7,
      "startSec": 20.02,
      "endSec": 22.15,
      "en": "She paused and started typing.",
      "vi": "Cô ấy khựng lại một nhịp và bắt đầu gõ bàn phím."
    },
    {
      "id": 8,
      "startSec": 22.86,
      "endSec": 26.05,
      "en": "I did not argue, and I did not raise my voice.",
      "vi": "Tôi không hề cãi cọ, và tôi cũng không hề cao giọng."
    },
    {
      "id": 9,
      "startSec": 26.68,
      "endSec": 29.39,
      "en": "There was one seat, leaving in two hours.",
      "vi": "Và đã có một chỗ trống, cất cánh trong hai tiếng nữa."
    },
    {
      "id": 10,
      "startSec": 30.12,
      "endSec": 33.85,
      "en": "I simply asked a second question, politely in English.",
      "vi": "Tôi chỉ đơn giản là hỏi câu hỏi thứ hai, một cách thật lịch sự bằng tiếng Anh."
    },
    {
      "id": 11,
      "startSec": 34.62,
      "endSec": 39.07,
      "en": "That is the whole skill, not perfect grammar, but the nerve to ask twice.",
      "vi": "Đó chính là toàn bộ kỹ năng: không phải ngữ pháp hoàn hảo, mà là sự can đảm dám hỏi lại lần hai."
    },
    {
      "id": 12,
      "startSec": 39.94,
      "endSec": 41.39,
      "en": "Say this one with me.",
      "vi": "Hãy cùng nói to câu này với tôi nhé."
    }
  ]
},
{
  "id": "7-DuN0wUjSE",
  "youtubeId": "7-DuN0wUjSE",
  "title": "Strict Rules at Chandler and Joey's Place | FRIENDS Sitcom",
  "channelName": "Friends Official",
  "topic": "Phim ảnh & Giải trí",
  "topicId": "entertainment",
  "level": "Cơ bản (Band 4.5-5.5)",
  "duration": "00:35",
  "sentenceCount": 10,
  "thumbnailUrl": "https://i.ytimg.com/vi/7-DuN0wUjSE/hqdefault.jpg",
  "description": "Đoạn trích hài hước kinh điển từ series FRIENDS: Luyện nói tiếng Anh đời thường tự nhiên, ngữ điệu vui nhộn chuẩn người Mỹ.",
  "sentences": [
    {
      "id": 1,
      "startSec": 0,
      "endSec": 1.28,
      "en": "All right, you know what?",
      "vi": "Được rồi, cậu biết sao không?"
    },
    {
      "id": 2,
      "startSec": 1.3,
      "endSec": 1.64,
      "en": "Come on.",
      "vi": "Thôi nào."
    },
    {
      "id": 3,
      "startSec": 1.66,
      "endSec": 3.91,
      "en": "We really have to watch this while we eat.",
      "vi": "Chúng ta nhất định phải xem cái này trong lúc ăn."
    },
    {
      "id": 4,
      "startSec": 3.98,
      "endSec": 5.39,
      "en": "No, no, no, no, no, no, no!",
      "vi": "Không, không, không, không được đâu!"
    },
    {
      "id": 5,
      "startSec": 6,
      "endSec": 8.73,
      "en": "We don't know what could make this go away.",
      "vi": "Chúng ta không biết điều gì có thể làm mất tín hiệu này đâu."
    },
    {
      "id": 6,
      "startSec": 10.44,
      "endSec": 17.57,
      "en": "Yeah, so no one touches the remote, and no one touches the TV, and no one touches the air around the TV.",
      "vi": "Đúng thế, vậy nên không ai được chạm vào điều khiển, không ai chạm vào tivi, và không ai được chạm vào cả không khí quanh tivi."
    },
    {
      "id": 7,
      "startSec": 19.62,
      "endSec": 23.03,
      "en": "Imagine a protective bubble, if you will.",
      "vi": "Hãy tưởng tượng có một bong bóng bảo vệ xung quanh nó đi."
    },
    {
      "id": 8,
      "startSec": 25.36,
      "endSec": 26.72,
      "en": "I'm at least going to mute it.",
      "vi": "Ít nhất thì tớ cũng phải bấm tắt tiếng chứ."
    },
    {
      "id": 9,
      "startSec": 26.74,
      "endSec": 27.89,
      "en": "No, no, no, no, no, no!",
      "vi": "Không, không, không, đừng bấm!"
    },
    {
      "id": 10,
      "startSec": 31.66,
      "endSec": 32.97,
      "en": "We still have it.",
      "vi": "Phù, chúng ta vẫn còn giữ được nó."
    }
  ]
}
];
