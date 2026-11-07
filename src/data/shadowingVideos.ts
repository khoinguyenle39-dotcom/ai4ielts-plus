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
  // 1. Đời sống hàng ngày: Brooklyn Kể Chuyện (Trọn vẹn 44 câu từ đầu đến cuối)
  {
    id: "YYN9wzkeoDU",
    youtubeId: "YYN9wzkeoDU",
    title: "Cách luyện nói tiếng Anh bằng phương pháp Shadowing | Bài 1",
    channelName: "Brooklyn Kể Chuyện",
    topic: "Đời sống hàng ngày",
    topicId: "daily-life",
    level: "Trung cấp (Band 6.0-7.0)",
    duration: "10:24",
    sentenceCount: 44,
    thumbnailUrl: "https://i.ytimg.com/vi/YYN9wzkeoDU/hqdefault.jpg",
    description: "Bài luyện tập Shadowing kinh điển chia sẻ các mẹo tiết kiệm tiền khi chuyển đến sống tại thành phố lớn. Chữ chạy song song với video từng giây.",
    sentences: [
      { id: 1, startSec: 0.24, endSec: 3.96, en: "So today, I don't want you to just listen to me,", vi: "Vì vậy hôm nay, tôi không muốn bạn chỉ đơn thuần là lắng nghe tôi," },
      { id: 2, startSec: 3.96, endSec: 6.44, en: "but I want you to speak with me.", vi: "nhưng tôi muốn bạn hãy cùng cất tiếng nói với tôi." },
      { id: 3, startSec: 7.24, endSec: 11.50, en: "This is a fun and effective exercise called shadowing.", vi: "Đây là một bài tập vừa vui vừa rất hiệu quả có tên là Shadowing (nhại giọng)." },
      { id: 4, startSec: 11.50, endSec: 16.92, en: "It is effective because in order to build your fluency,", vi: "Nó hiệu quả là vì để xây dựng độ nói trôi chảy tự nhiên của bạn," },
      { id: 5, startSec: 16.92, endSec: 20.66, en: "you have to say things over and over.", vi: "bạn phải nói đi nói lại nhiều lần cho quen miệng." },
      { id: 6, startSec: 21.76, endSec: 26.36, en: "So by mimicking a native speaker like me,", vi: "Vì vậy, bằng cách bắt chước một người bản xứ như tôi," },
      { id: 7, startSec: 26.36, endSec: 31.04, en: "you can improve how you sound and you'll sound more natural.", vi: "bạn có thể cải thiện cách phát âm và giọng bạn sẽ nghe tự nhiên hơn nhiều." },
      { id: 8, startSec: 31.46, endSec: 33.14, en: "So here's what we're going to do.", vi: "Vậy đây là những gì chúng ta sẽ cùng làm trong bài hôm nay." },
      { id: 9, startSec: 33.14, endSec: 40.72, en: "I'm going to read aloud a passage at a slightly slower pace than real life", vi: "Tôi sẽ đọc to một đoạn văn với tốc độ chậm hơn một chút so với tốc độ đời thực" },
      { id: 10, startSec: 40.72, endSec: 46.88, en: "so that you can follow along and mimic me as best as you can.", vi: "để bạn có thể đuổi theo kịp và bắt chước tôi tốt nhất có thể." },
      { id: 11, startSec: 47.88, endSec: 50.76, en: "There will be words on the side of the screen,", vi: "Sẽ có chữ hiển thị ở cạnh màn hình," },
      { id: 12, startSec: 50.76, endSec: 59.46, en: "but also there will be in the description below a PDF document so that you can practice on your own.", vi: "nhưng ở phần mô tả bên dưới cũng có tài liệu PDF để bạn tự luyện tập thêm." },
      { id: 13, startSec: 60.56, endSec: 63.52, en: "Also, there will be a link for just the audio.", vi: "Ngoài ra, sẽ có cả đường dẫn tải riêng file âm thanh audio." },
      { id: 14, startSec: 63.52, endSec: 66.14, en: "Okay, so this is something", vi: "Được rồi, đây là một đoạn văn" },
      { id: 15, startSec: 66.14, endSec: 74.22, en: "that I wrote from the perspective of a friend sharing advice of how to save money when moving to a city.", vi: "mà tôi viết dưới góc nhìn của một người bạn chia sẻ lời khuyên về cách tiết kiệm tiền khi chuyển lên thành phố sống." },
      { id: 16, startSec: 75.12, endSec: 76.08, en: "Let's get into it.", vi: "Chúng ta hãy bắt đầu ngay thôi nào." },
      { id: 17, startSec: 77.60, endSec: 82.70, en: "Living in a city can be quite expensive and saving money can be difficult.", vi: "Sống ở thành phố lớn có thể khá đắt đỏ và việc tiết kiệm tiền đôi khi rất khó khăn." },
      { id: 18, startSec: 83.82, endSec: 85.40, en: "No matter where you go,", vi: "Bất kể bạn đi đến đâu," },
      { id: 19, startSec: 85.40, endSec: 87.32, en: "there are stores surrounding you.", vi: "cũng có các hàng quán cửa hiệu bao quanh bạn." },
      { id: 20, startSec: 88.24, endSec: 93.26, en: "There are so many fun things to do and so many friends to do things with.", vi: "Có quá nhiều điều thú vị để làm và rất nhiều bạn bè rủ rê đi chơi." },
      { id: 21, startSec: 94.10, endSec: 96.38, en: "And things in the city just cost more.", vi: "Và mọi thứ ở thành phố chỉ đơn giản là đắt đỏ hơn." },
      { id: 22, startSec: 97.40, endSec: 103.12, en: "Thankfully, I've come up with some strategies to help save money and make the most of your budget.", vi: "May mắn thay, tôi đã đúc kết được vài chiến lược giúp bạn tiết kiệm tiền và tối ưu ngân sách chi tiêu." },
      { id: 23, startSec: 104.62, endSec: 107.50, en: "First, you can consider your housing options.", vi: "Đầu tiên, bạn có thể cân nhắc kỹ lưỡng về các lựa chọn chỗ ở." },
      { id: 24, startSec: 108.40, endSec: 116.88, en: "Sharing an apartment with roommates or choosing a location slightly further from the city center can significantly reduce rent costs.", vi: "Ở ghép căn hộ cùng bạn hoặc chọn nơi xa trung tâm một chút có thể giảm đáng kể tiền thuê phòng." },
      { id: 25, startSec: 117.86, endSec: 121.30, en: "Additionally, you should take advantage of public transportation.", vi: "Ngoài ra, bạn nên tận dụng các phương tiện giao thông công cộng như xe buýt hay tàu điện." },
      { id: 26, startSec: 123.24, endSec: 126.42, en: "Food is another key area to pay attention to.", vi: "Ăn uống là một khoản quan trọng khác bạn cần hết sức để mắt tới." },
      { id: 27, startSec: 126.42, endSec: 132.58, en: "You can save so much money by cooking at home instead of dining out.", vi: "Bạn có thể tiết kiệm rất nhiều tiền bằng cách tự nấu ăn ở nhà thay vì đi ăn ngoài hàng quán." },
      { id: 28, startSec: 133.72, endSec: 139.10, en: "To lower grocery bills, shop at local markets and use meal prep plans.", vi: "Để giảm tiền mua thực phẩm, hãy đi chợ truyền thống và lên thực đơn nấu ăn trước cho cả tuần." },
      { id: 29, startSec: 140.00, endSec: 141.74, en: "When you do eat out,", vi: "Khi bạn thật sự phải đi ăn ngoài," },
      { id: 30, startSec: 141.74, endSec: 144.06, en: "look for deals, happy hours,", vi: "hãy săn các khuyến mãi, khung giờ vàng giảm giá (happy hours)," },
      { id: 31, startSec: 144.06, endSec: 147.44, en: "or use apps that offer discounts.", vi: "hoặc sử dụng các ứng dụng có mã giảm giá ẩm thực." },
      { id: 32, startSec: 148.28, endSec: 150.98, en: "Entertainment doesn't have to be costly either.", vi: "Các hoạt động giải trí cũng không nhất thiết phải tốn kém." },
      { id: 33, startSec: 152.10, endSec: 155.66, en: "Many cities offer free or low-cost events,", vi: "Nhiều thành phố tổ chức các sự kiện miễn phí hoặc chi phí rất rẻ," },
      { id: 34, startSec: 155.66, endSec: 160.98, en: "such as museum days, outdoor concerts, and community festivals.", vi: "chẳng hạn như ngày mở cửa bảo tàng miễn phí, hòa nhạc ngoài trời và lễ hội cộng đồng." },
      { id: 35, startSec: 162.62, endSec: 166.44, en: "libraries also provide free access to books movies", vi: "Các thư viện công cộng cũng cho phép mượn sách báo và xem phim miễn phí," },
      { id: 36, startSec: 166.44, endSec: 172.24, en: "and sometimes even digital resources like ebooks and streaming services", vi: "và đôi khi còn có cả tài nguyên số như sách điện tử ebook và dịch vụ xem video trực tuyến." },
      { id: 37, startSec: 172.24, endSec: 179.30, en: "and make sure to be careful with utilities small things like turning off lights", vi: "Và hãy nhớ chú ý tiền điện nước, những hành động nhỏ như tắt điện khi không dùng," },
      { id: 38, startSec: 179.30, endSec: 189.06, en: "when you're not using them using energy efficient appliances and regulating heating and cooling can lead to lower utility bills.", vi: "sử dụng các thiết bị tiết kiệm điện và điều chỉnh máy lạnh/sưởi hợp lý sẽ giúp hạ hóa đơn hàng tháng." },
      { id: 39, startSec: 189.06, endSec: 193.76, en: "By making small adjustments and being resourceful,", vi: "Bằng cách thực hiện từng điều chỉnh nhỏ và biết cách xoay sở tài nguyên khéo léo," },
      { id: 40, startSec: 193.76, endSec: 197.16, en: "you'll enjoy city life without breaking the bank.", vi: "bạn sẽ hoàn toàn tận hưởng cuộc sống thành thị mà không bao giờ lo bị 'cháy túi'." },
      { id: 41, startSec: 197.16, endSec: 201.40, en: "All right, guys, I hope this was helpful for you.", vi: "Được rồi mọi người, tôi hy vọng bài học này thật sự hữu ích cho các bạn." },
      { id: 42, startSec: 201.40, endSec: 207.54, en: "I encourage you to keep practicing this over and over to the point", vi: "Tôi khuyến khích bạn hãy tiếp tục luyện bài này nhiều lần cho đến mức" },
      { id: 43, startSec: 207.54, endSec: 213.06, en: "that you don't have to rely on the script so that you can build your fluency.", vi: "bạn không cần nhìn vào kịch bản chữ nữa mà vẫn nói trôi chảy, nhịp nhàng tự nhiên." },
      { id: 44, startSec: 214.14, endSec: 217.48, en: "Stay tuned for more videos like this in the future.", vi: "Hãy đón xem thêm nhiều video luyện nói bổ ích như thế này trong các bài tiếp theo nhé." }
    ]
  },

  // 2. Học thuật: IELTS Speaking Band 9 (25 câu liên tục từ 0s đến 210s)
  {
    id: "k4715CJ0Ii8",
    youtubeId: "k4715CJ0Ii8",
    title: "IELTS Speaking Test - Perfect Band 9 Mock Interview Breakdown",
    channelName: "IELTS Advantage",
    topic: "Học thuật & IELTS Speaking",
    topicId: "academic",
    level: "Nâng cao (Band 7.5-8.5+)",
    duration: "18:42",
    sentenceCount: 22,
    thumbnailUrl: "https://i.ytimg.com/vi/k4715CJ0Ii8/hqdefault.jpg",
    description: "Trọn bộ 22 câu mẫu phỏng vấn IELTS Speaking Band 9.0: Từ Part 1, Part 2 đến Part 3, có mốc thời gian chạy song song với video.",
    sentences: [
      { id: 1, startSec: 5, endSec: 11, en: "Welcome to this complete demonstration of an IELTS Speaking examination.", vi: "Chào mừng bạn đến với bài thi minh họa trọn vẹn của kỳ thi IELTS Speaking." },
      { id: 2, startSec: 11, endSec: 18, en: "In Part 1, the examiner asks general questions about your everyday life and background.", vi: "Trong Part 1, giám khảo sẽ hỏi các câu hỏi tổng quát về đời sống hàng ngày và nền tảng của bạn." },
      { id: 3, startSec: 18, endSec: 25, en: "Could you tell me a little bit about your hometown and what you enjoy most about it?", vi: "Bạn có thể chia sẻ một chút về quê hương mình và điều bạn thích nhất ở đó không?" },
      { id: 4, startSec: 25, endSec: 33, en: "Well, I grew up in a vibrant coastal metropolis known for its scenic harbor and pleasant climate.", vi: "Tôi lớn lên tại một đô thị ven biển sôi động, nổi tiếng với bến cảng tuyệt đẹp và khí hậu dễ chịu." },
      { id: 5, startSec: 33, endSec: 41, en: "What captivates me most is the seamless harmony between historical heritage and rapid modernization.", vi: "Điều cuốn hút tôi nhất là sự hòa hợp liền mạch giữa di sản lịch sử và hiện đại hóa nhanh chóng." },
      { id: 6, startSec: 41, endSec: 49, en: "Has your hometown changed significantly over the past ten years?", vi: "Quê hương của bạn có thay đổi đáng kể trong vòng mười năm qua không?" },
      { id: 7, startSec: 49, endSec: 58, en: "Undoubtedly, the expansion of high-tech industries has triggered rapid infrastructural development.", vi: "Không nghi ngờ gì nữa, sự mở rộng của các ngành công nghệ cao đã kéo theo sự phát triển hạ tầng thần tốc." },
      { id: 8, startSec: 58, endSec: 66, en: "However, this economic boom has also precipitated a noticeable increase in living expenditures.", vi: "Tuy nhiên, sự bùng nổ kinh tế này cũng dẫn đến sự gia tăng rõ rệt về chi phí sinh hoạt." },
      { id: 9, startSec: 66, endSec: 74, en: "Now, let us transition to Part 2, where you will speak for two minutes on a given topic.", vi: "Bây giờ, chúng ta hãy chuyển sang Part 2, nơi bạn sẽ nói trong hai phút về một chủ đề cho sẵn." },
      { id: 10, startSec: 74, endSec: 83, en: "Describe an unforgettable book or documentary that profoundly shaped your worldview.", vi: "Hãy miêu tả một cuốn sách hoặc bộ phim tài liệu khó quên đã định hình sâu sắc thế giới quan của bạn." },
      { id: 11, startSec: 83, endSec: 92, en: "I would like to recount my encounter with Yuval Noah Harari's groundbreaking work, Sapiens.", vi: "Tôi muốn kể về trải nghiệm khi đọc tác phẩm đột phá 'Sapiens' của tác giả Yuval Noah Harari." },
      { id: 12, startSec: 92, endSec: 101, en: "The narrative brilliantly illustrates how cognitive evolution and shared fictions unified humanity.", vi: "Lời kể minh họa xuất sắc cách tiến hóa nhận thức và những câu chuyện tưởng tượng chung đã gắn kết nhân loại." },
      { id: 13, startSec: 101, endSec: 110, en: "It completely dismantled my preconceived notions regarding modern economic institutions and cultures.", vi: "Nó đã xóa bỏ hoàn toàn những định kiến trước đây của tôi về các thể chế kinh tế và văn hóa hiện đại." },
      { id: 14, startSec: 110, endSec: 119, en: "Reading it instilled within me an insatiable curiosity about anthropological development.", vi: "Đọc cuốn sách này đã truyền cho tôi niềm tò mò bất tận về sự phát triển nhân chủng học." },
      { id: 15, startSec: 119, endSec: 128, en: "Moving on to Part 3, we shall discuss broader societal implications of technological progress.", vi: "Chuyển sang Part 3, chúng ta sẽ thảo luận những tác động xã hội rộng lớn hơn của tiến bộ công nghệ." },
      { id: 16, startSec: 128, endSec: 137, en: "Do you believe artificial intelligence will eventually render traditional professions obsolete?", vi: "Bạn có tin rằng trí tuệ nhân tạo sau cùng sẽ khiến các ngành nghề truyền thống biến mất không?" },
      { id: 17, startSec: 137, endSec: 146, en: "While routine analytical tasks will inevitably be automated, human empathy remains indispensable.", vi: "Mặc dù các tác vụ phân tích lặp lại chắc chắn sẽ bị tự động hóa, nhưng sự thấu cảm con người vẫn là không thể thay thế." },
      { id: 18, startSec: 146, endSec: 155, en: "Fields such as psychotherapy, fine arts, and strategic leadership require nuanced intuitive wisdom.", vi: "Những lĩnh vực như tâm lý trị liệu, mỹ thuật và lãnh đạo chiến lược đòi hỏi trí tuệ trực giác tinh tế." },
      { id: 19, startSec: 155, endSec: 164, en: "Consequently, the educational paradigm must pivot toward nurturing creative adaptability.", vi: "Do đó, mô hình giáo dục buộc phải chuyển trọng tâm sang việc nuôi dưỡng khả năng thích ứng sáng tạo." },
      { id: 20, startSec: 164, endSec: 173, en: "Candidates aiming for a top band score must maintain syntactic accuracy while speaking spontaneously.", vi: "Các thí sinh nhắm đến điểm số cao nhất phải duy trì độ chính xác ngữ pháp khi nói ngẫu hứng." },
      { id: 21, startSec: 173, endSec: 182, en: "Shadowing native cadence and rhythm trains your vocal delivery to sound relaxed and authoritative.", vi: "Nhại theo ngữ điệu và nhịp ngắt của người bản xứ giúp giọng nói của bạn nghe thư thái và đầy uy tín." },
      { id: 22, startSec: 182, endSec: 191, en: "Thank you very much, this concludes your speaking evaluation demonstration.", vi: "Cảm ơn bạn rất nhiều, phần trình diễn đánh giá kỹ năng nói đến đây là kết thúc." }
    ]
  },

  // 3. Du lịch: Tokyo Travel Tips (20 câu liên tục)
  {
    id: "zpC-nr5PTGU",
    youtubeId: "zpC-nr5PTGU",
    title: "TOKYO TRAVEL TIPS FOR FIRST TIMERS: 30+ Must-Knows & What NOT To Do",
    channelName: "Happy to Wander",
    topic: "Du lịch & Khám phá",
    topicId: "travel",
    level: "Cơ bản (Band 4.5-5.5)",
    duration: "14:15",
    sentenceCount: 20,
    thumbnailUrl: "https://i.ytimg.com/vi/zpC-nr5PTGU/hqdefault.jpg",
    description: "Cẩm nang du lịch tự túc Tokyo với 20 câu phụ đề chạy đồng bộ từng giây: Đi tàu điện, ứng xử lịch sự và bí quyết ăn uống giá rẻ.",
    sentences: [
      { id: 1, startSec: 5, endSec: 12, en: "Welcome to Tokyo, one of the most mesmerizing travel destinations on earth!", vi: "Chào mừng bạn đến với Tokyo, một trong những điểm đến du lịch mê hoặc nhất thế giới!" },
      { id: 2, startSec: 12, endSec: 19, en: "Planning your inaugural trip can feel overwhelming due to the sheer scale of the city.", vi: "Lên kế hoạch cho chuyến đi đầu tiên có thể cảm thấy ngợp vì quy mô đồ sộ của thành phố." },
      { id: 3, startSec: 19, endSec: 26, en: "Here are the top thirty essential travel tips you must know before you board your flight.", vi: "Dưới đây là 30 mẹo du lịch quan trọng nhất mà bạn nhất định phải biết trước khi lên máy bay." },
      { id: 4, startSec: 26, endSec: 33, en: "First and foremost, sorting out your transport connectivity is priority number one.", vi: "Điều đầu tiên và quan trọng nhất, chuẩn bị phương tiện di chuyển là ưu tiên số một." },
      { id: 5, startSec: 33, endSec: 40, en: "Add a digital IC card such as Suica or Pasmo directly onto your smartphone wallet.", vi: "Hãy cài ngay thẻ IC điện tử như Suica hoặc Pasmo trực tiếp vào ví điện thoại của bạn." },
      { id: 6, startSec: 40, endSec: 47, en: "This allows you to simply tap through ticket gates across trains, subways, and buses effortlessly.", vi: "Điều này cho phép bạn chỉ cần chạm nhẹ qua cổng soát vé của tàu hỏa, tàu điện ngầm và xe buýt." },
      { id: 7, startSec: 47, endSec: 54, en: "Secondly, always carry some physical cash because small ramen shops only accept coins and bills.", vi: "Thứ hai, hãy luôn mang theo một ít tiền mặt vì các quán ramen nhỏ chỉ nhận tiền xu và tiền giấy." },
      { id: 8, startSec: 54, endSec: 61, en: "Convenience store ATMs at 7-Eleven and Lawson reliably accept international credit cards.", vi: "Cây ATM tại cửa hàng tiện lợi 7-Eleven và Lawson luôn chấp nhận các loại thẻ tín dụng quốc tế." },
      { id: 9, startSec: 61, endSec: 68, en: "When it comes to etiquette, walking while eating is widely frowned upon in public streets.", vi: "Về phép lịch sự, việc vừa đi vừa ăn thường bị coi là không đẹp mắt trên đường phố công cộng." },
      { id: 10, startSec: 68, endSec: 75, en: "Instead, consume your delicious snack right next to the vending machine or convenience stall.", vi: "Thay vào đó, hãy thưởng thức món ăn nhẹ ngay cạnh máy bán hàng tự động hoặc quầy tiện lợi." },
      { id: 11, startSec: 75, endSec: 82, en: "On public transit, keep your smartphone on silent mode and avoid phone calls altogether.", vi: "Trên phương tiện công cộng, hãy để điện thoại ở chế độ im lặng và tuyệt đối không nghe gọi điện thoại." },
      { id: 12, startSec: 82, endSec: 89, en: "Trash cans are surprisingly scarce across the city, so carry a small plastic bag in your daypack.", vi: "Thùng rác khá hiếm trên đường phố, vì vậy hãy mang theo một túi nhỏ trong ba lô để đựng rác." },
      { id: 13, startSec: 89, endSec: 96, en: "You will return all your sorted waste back to your hotel room at the end of the evening.", vi: "Bạn sẽ mang tất cả rác đã phân loại về phòng khách sạn vào cuối ngày để vứt." },
      { id: 14, startSec: 96, endSec: 103, en: "For culinary adventures, depachika or department store basements offer gourmet food halls.", vi: "Đối với ẩm thực, các tầng hầm bách hóa depachika là những thiên đường ẩm thực tuyệt vời." },
      { id: 15, startSec: 103, endSec: 110, en: "They heavily discount fresh bento boxes and gourmet sushi after seven in the evening.", vi: "Họ giảm giá rất mạnh các hộp bento tươi ngon và sushi hảo hạng sau 7 giờ tối." },
      { id: 16, startSec: 110, endSec: 117, en: "Make reservations for popular themed exhibits months in advance to avoid disappointment.", vi: "Hãy đặt chỗ trước nhiều tháng cho các khu triển lãm nổi tiếng để tránh bị hết vé." },
      { id: 17, startSec: 117, endSec: 124, en: "Comfortable walking shoes are essential because walking twenty thousand steps daily is typical.", vi: "Giày đi bộ êm ái là vật dụng bắt buộc vì việc đi bộ 20.000 bước mỗi ngày là chuyện bình thường." },
      { id: 18, startSec: 124, endSec: 131, en: "Embracing spontaneous detours into tranquil alleys often produces the most magical travel memories.", vi: "Những lúc rẽ ngẫu hứng vào các con hẻm yên tĩnh thường tạo ra những kỷ niệm du lịch diệu kỳ nhất." },
      { id: 19, startSec: 131, endSec: 138, en: "Practice shadowing these travel phrases to communicate with warm polite confidence.", vi: "Hãy nhại giọng các cụm từ du lịch này để giao tiếp với sự tự tin và lịch sự ấm áp." },
      { id: 20, startSec: 138, endSec: 145, en: "Have an unforgettable adventure exploring the breathtaking wonders of Japan!", vi: "Chúc bạn có một chuyến phiêu lưu khó quên khi khám phá những điều kỳ diệu của nước Nhật!" }
    ]
  },

  // 4. Ẩm thực: Gordon Ramsay Cooking Tips (20 câu liên tục)
  {
    id: "BHcyuzXRqLs",
    youtubeId: "BHcyuzXRqLs",
    title: "50 Cooking Tips With Gordon Ramsay | Master Culinary Skills",
    channelName: "Gordon Ramsay",
    topic: "Ẩm thực & Nấu ăn",
    topicId: "cooking",
    level: "Trung cấp (Band 6.0-7.0)",
    duration: "18:22",
    sentenceCount: 20,
    thumbnailUrl: "https://i.ytimg.com/vi/BHcyuzXRqLs/hqdefault.jpg",
    description: "20 tuyệt chiêu nấu ăn của Gordon Ramsay: Chữ chạy đồng bộ từng câu, học từ vựng ẩm thực và nhại giọng phong thái đầu bếp ngôi sao.",
    sentences: [
      { id: 1, startSec: 8, endSec: 15, en: "Right, today I am giving you fifty indispensable culinary tips to transform your cooking.", vi: "Được rồi, hôm nay tôi sẽ trao cho các bạn 50 bí quyết ẩm thực không thể thiếu để nâng tầm nấu nướng." },
      { id: 2, startSec: 15, endSec: 22, en: "Number one: always keep your knives razor sharp; a dull knife is dangerous and clumsy.", vi: "Điều số một: luôn giữ dao sắc như dao cạo; một con dao cùn rất nguy hiểm và vụng về." },
      { id: 3, startSec: 22, endSec: 29, en: "When chopping herbs, slice through them cleanly once without bruising the delicate leaves.", vi: "Khi xắt rau thơm, hãy cắt dứt khoát một lần mà không làm dập nát những chiếc lá mỏng manh." },
      { id: 4, startSec: 29, endSec: 36, en: "To stop your chopping board from sliding across the counter, place a damp cloth underneath.", vi: "Để thớt không bị trượt lung tung trên bàn bếp, hãy lót một chiếc khăn ẩm bên dưới." },
      { id: 5, startSec: 36, endSec: 43, en: "When peeling garlic, crush it gently with the flat of your blade and the skin slips right off.", vi: "Khi bóc tỏi, hãy dùng mặt phẳng của lưỡi dao đập nhẹ và lớp vỏ sẽ tự động tuột ra." },
      { id: 6, startSec: 43, endSec: 50, en: "Before searing meat, ensure the surface is completely bone dry with paper towels.", vi: "Trước khi áp chảo thịt, hãy đảm bảo bề mặt thịt khô ráo hoàn toàn bằng khăn giấy thấm." },
      { id: 7, startSec: 50, endSec: 57, en: "Moisture on the exterior causes meat to boil instead of developing that golden caramelized crust.", vi: "Độ ẩm bên ngoài sẽ làm miếng thịt bị luộc thay vì tạo được lớp vỏ vàng caramen giòn thơm." },
      { id: 8, startSec: 57, endSec: 64, en: "Season meat generously with coarse sea salt and cracked black pepper from a height.", vi: "Nêm nếm thịt hào phóng với muối biển hột và tiêu đen giã nhỏ từ trên cao xuống." },
      { id: 9, startSec: 64, endSec: 71, en: "Seasoning from a height guarantees even distribution across the entire surface of the cut.", vi: "Nêm nếm từ trên cao đảm bảo gia vị được phủ đều khắp toàn bộ bề mặt miếng thịt." },
      { id: 10, startSec: 71, endSec: 78, en: "Never place cold steak straight out of the fridge into a hot pan.", vi: "Không bao giờ cho miếng bít tết lạnh vừa lấy từ tủ lạnh thẳng vào chảo đang nóng." },
      { id: 11, startSec: 78, endSec: 85, en: "Allow it to sit at room temperature for twenty minutes to ensure uniform cooking throughout.", vi: "Hãy để thịt ở nhiệt độ phòng trong 20 phút để đảm bảo thịt chín đều từ ngoài vào trong." },
      { id: 12, startSec: 85, endSec: 92, en: "Get the pan smoking hot before adding a drizzle of high smoke-point oil.", vi: "Làm nóng chảo đến khi bốc khói nhẹ trước khi rưới vào một chút dầu ăn có điểm sôi cao." },
      { id: 13, startSec: 92, endSec: 99, en: "Lay the steak away from you into the pan so that hot oil doesn't splash back.", vi: "Đặt miếng thịt hướng ra xa người bạn vào chảo để dầu nóng không bắn ngược lại." },
      { id: 14, startSec: 99, endSec: 106, en: "Baste the steak with foaming unsalted butter, crushed garlic, and fresh rosemary.", vi: "Rưới đều lên miếng bít tết lớp bơ lạt sủi bọt, tỏi đập dập và lá hương thảo tươi." },
      { id: 15, startSec: 106, endSec: 113, en: "Resting your meat after cooking is just as critical as the cooking process itself.", vi: "Để thịt nghỉ sau khi nấu cũng quan trọng hệt như chính quá trình nấu nướng." },
      { id: 16, startSec: 113, endSec: 120, en: "Resting allows the juices to relax and redistribute throughout every muscle fiber.", vi: "Nghỉ ngơi giúp các thớ nước ngọt thư giãn và ngấm đều trở lại vào từng thớ thịt." },
      { id: 17, startSec: 120, endSec: 127, en: "Taste your sauces at every stage and adjust acidity with a drop of lemon juice.", vi: "Hãy nếm nước sốt ở mọi giai đoạn và điều chỉnh độ chua bằng một giọt nước cốt chanh." },
      { id: 18, startSec: 127, endSec: 134, en: "Great cooking is all about confidence, impeccable timing, and uncompromised standards.", vi: "Nấu ăn đỉnh cao nằm ở sự tự tin, căn thời gian chuẩn xác và tiêu chuẩn không thỏa hiệp." },
      { id: 19, startSec: 134, endSec: 141, en: "Keep practicing your culinary technique and your English shadowing side by side.", vi: "Hãy tiếp tục trau dồi kỹ năng nấu nướng song song với việc luyện nhại giọng tiếng Anh." },
      { id: 20, startSec: 141, endSec: 148, en: "Now get into your kitchen, turn on the burners, and cook with utter passion!", vi: "Bây giờ hãy vào bếp, bật bếp lên và nấu nướng với trọn vẹn niềm đam mê!" }
    ]
  },

  // 5. Kinh doanh: Steve Jobs (25 câu liên tục)
  {
    id: "UF8uR6Z6KLc",
    youtubeId: "UF8uR6Z6KLc",
    title: "Steve Jobs' 2005 Stanford Commencement Address: Stay Hungry, Stay Foolish",
    channelName: "Stanford University",
    topic: "Kinh doanh & Khởi nghiệp",
    topicId: "business",
    level: "Nâng cao (Band 7.5-8.5+)",
    duration: "15:04",
    sentenceCount: 22,
    thumbnailUrl: "https://i.ytimg.com/vi/UF8uR6Z6KLc/hqdefault.jpg",
    description: "22 câu trích đoạn toàn vẹn từ bài diễn văn vĩ đại của Steve Jobs tại Stanford: Chữ chạy song song từng giây theo nhịp nói của Steve Jobs.",
    sentences: [
      { id: 1, startSec: 8, endSec: 15, en: "I am honored to be with you today at your commencement from one of the finest universities in the world.", vi: "Tôi rất vinh dự được có mặt cùng các bạn hôm nay tại lễ tốt nghiệp của một trong những trường đại học danh giá nhất thế giới." },
      { id: 2, startSec: 15, endSec: 22, en: "I never graduated from college; truth be told, this is the closest I've ever gotten to a college graduation.", vi: "Tôi chưa từng tốt nghiệp đại học; nói thật thì đây là lần tôi đến gần một lễ tốt nghiệp nhất." },
      { id: 3, startSec: 22, endSec: 28, en: "Today, I want to tell you three stories from my life. That's it. No big deal. Just three stories.", vi: "Hôm nay, tôi muốn kể cho các bạn nghe ba câu chuyện từ cuộc đời tôi. Chỉ vậy thôi. Không có gì to tát. Chỉ ba câu chuyện." },
      { id: 4, startSec: 28, endSec: 35, en: "The first story is about connecting the dots.", vi: "Câu chuyện đầu tiên là về việc kết nối các điểm mốc." },
      { id: 5, startSec: 35, endSec: 42, en: "I dropped out of Reed College after the first six months, but then stayed around as a drop-in for another eighteen months.", vi: "Tôi đã bỏ học tại trường Reed sau 6 tháng đầu tiên, nhưng sau đó vẫn ở lại dự thính thêm 18 tháng nữa." },
      { id: 6, startSec: 42, endSec: 50, en: "Because I had dropped out and didn't have to take the normal classes, I decided to take a calligraphy class.", vi: "Vì đã bỏ học chính thức và không phải học các môn bắt buộc, tôi quyết định theo học một lớp viết thư pháp." },
      { id: 7, startSec: 50, endSec: 58, en: "I learned about serif and sans-serif typefaces, about varying the amount of space between different letter combinations.", vi: "Tôi học về các kiểu chữ có chân và không chân, về việc thay đổi khoảng cách giữa những tổ hợp chữ cái khác nhau." },
      { id: 8, startSec: 58, endSec: 66, en: "None of this had even a hope of any practical application in my life at that time.", vi: "Không có bất cứ điều nào trong số đó mang lại hy vọng ứng dụng thực tế nào vào cuộc đời tôi lúc bấy giờ." },
      { id: 9, startSec: 66, endSec: 74, en: "Ten years later, when we were designing the first Macintosh computer, it all came back to me.", vi: "Mười năm sau, khi chúng tôi thiết kế chiếc máy tính Macintosh đầu tiên, tất cả kiến thức đó đã ùa về trong tôi." },
      { id: 10, startSec: 74, endSec: 82, en: "And we designed it all into the Mac; it was the first computer with beautiful typography.", vi: "Và chúng tôi đã đưa tất cả vào máy Mac; đó là chiếc máy tính đầu tiên có nghệ thuật chữ tuyệt đẹp." },
      { id: 11, startSec: 82, endSec: 90, en: "You can't connect the dots looking forward; you can only connect them looking backwards.", vi: "Bạn không thể kết nối các điểm mốc khi nhìn về phía trước; bạn chỉ có thể kết nối chúng khi nhìn lại quá khứ." },
      { id: 12, startSec: 90, endSec: 98, en: "So you have to trust that the dots will somehow connect in your future.", vi: "Vì vậy bạn phải tin tưởng rằng các điểm mốc đó bằng cách nào đó sẽ kết nối lại trong tương lai của bạn." },
      { id: 13, startSec: 98, endSec: 106, en: "You have to trust in something: your gut, destiny, life, karma, whatever.", vi: "Bạn phải tin vào một điều gì đó: trực giác, số phận, cuộc đời, luật nhân quả, hay bất cứ thứ gì." },
      { id: 14, startSec: 106, endSec: 114, en: "My second story is about love and loss.", vi: "Câu chuyện thứ hai của tôi là về tình yêu và sự mất mát." },
      { id: 15, startSec: 114, endSec: 122, en: "I was lucky; I found what I loved to do early in life. Woz and I started Apple in my parents' garage when I was twenty.", vi: "Tôi may mắn; tôi đã tìm thấy điều mình yêu thích từ sớm. Woz và tôi khởi nghiệp Apple trong nhà để xe của bố mẹ tôi khi tôi 20 tuổi." },
      { id: 16, startSec: 122, endSec: 130, en: "Then I got fired. How can you get fired from a company you started?", vi: "Thế rồi tôi bị sa thải. Làm sao bạn có thể bị sa thải khỏi công ty do chính mình sáng lập?" },
      { id: 17, startSec: 130, endSec: 138, en: "Getting fired from Apple was the best thing that could have ever happened to me.", vi: "Bị sa thải khỏi Apple hóa ra lại là điều tuyệt vời nhất từng xảy đến với cuộc đời tôi." },
      { id: 18, startSec: 138, endSec: 146, en: "The heaviness of being successful was replaced by the lightness of being a beginner again.", vi: "Gánh nặng của sự thành công được thay thế bởi sự thanh thản khi được làm người mới bắt đầu một lần nữa." },
      { id: 19, startSec: 146, endSec: 154, en: "It freed me to enter one of the most creative periods of my life, founding NeXT and Pixar.", vi: "Nó giải phóng tôi bước vào một trong những giai đoạn sáng tạo nhất cuộc đời, sáng lập nên NeXT và Pixar." },
      { id: 20, startSec: 154, endSec: 162, en: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do great work.", vi: "Công việc sẽ chiếm một phần lớn cuộc đời bạn, và cách duy nhất để thực sự thỏa mãn là làm những điều tuyệt vời." },
      { id: 21, startSec: 162, endSec: 170, en: "And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.", vi: "Và cách duy nhất để làm điều tuyệt vời là yêu thích những gì bạn làm. Nếu bạn chưa tìm thấy, hãy tiếp tục tìm kiếm. Đừng dừng lại." },
      { id: 22, startSec: 170, endSec: 178, en: "Stay hungry. Stay foolish. Thank you all very much.", vi: "Hãy luôn khao khát. Hãy luôn dại khờ. Cảm ơn tất cả các bạn rất nhiều." }
    ]
  }
];
