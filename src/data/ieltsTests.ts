export interface QuestionExplanation {
  step1: string; // Phân tích câu hỏi
  step2: string; // Định vị thông tin trong bài
  step3: string; // Phân tích cấu trúc câu trong bài
  step4?: string; // Kết luận & Paraphrase / Bẫy đề thi
  paraphrase?: { q: string; p: string }[];
  distractor?: string;
}

export interface TestQuestion {
  id: number;
  prompt: string;
  type: "TRUE_FALSE_NOT_GIVEN" | "MULTIPLE_CHOICE" | "FILL_IN_BLANK";
  options?: string[]; // for multiple choice or T/F/NG
  correct: string;
  explanation: QuestionExplanation;
}

export interface TestPassage {
  id: string;
  passageNumber: number;
  title: string;
  subtitle?: string;
  content: string[]; // array of paragraphs
  questions: TestQuestion[];
}

export interface IELTSTestItem {
  id: string;
  title: string;
  series: string;
  testNumber: number;
  type: "Reading" | "Listening";
  durationMinutes: number;
  passages: TestPassage[];
}

export const IELTS_TESTS: Record<string, IELTSTestItem> = {
  // ==========================================
  // CAMBRIDGE 21 - READING TEST 1
  // ==========================================
  "cam-21-reading-1": {
    id: "cam-21-reading-1",
    title: "IELTS CAM Inspired 21 - Reading Test 1",
    series: "Cambridge 21",
    testNumber: 1,
    type: "Reading",
    durationMinutes: 60,
    passages: [
      {
        id: "cam-21-p1",
        passageNumber: 1,
        title: "The Davies Sisters",
        subtitle: "Over almost two decades, from 1908 to 1927, two sisters, Elin and Nia Davies, built what became one of Norway’s largest collections of Nordic Symbolist paintings.",
        content: [
          "Over almost two decades, from 1908 to 1927, two sisters, Elin and Nia Davies, built what became one of Norway’s largest collections of Nordic Symbolist paintings from the late nineteenth and early twentieth centuries.",
          "A Welsh shipping magnate named Rhys Davies had settled in Norway and made his fortune there in the timber and shipping trades; his granddaughters, Elin (1878–1948) and Nia (1880–1961) Davies, would later become known as collectors. Elin’s inheritance came first, in 1906, with Nia’s following two years later, in 1908, and by then people considered the sisters the wealthiest unmarried women in Norway. Growing up in a devout household in rural Norway had instilled in them a strong sense of civic duty, and it was this that led them to spend their inheritance on cultural and philanthropic causes.",
          "No one else in the family had ever collected art, yet the sisters’ schooling was deliberately shaped to cultivate exactly that interest. Cultural pursuits, rather than academic subjects, formed the core of their studies at a school in Kristiania, and their tutor, Ingrid Fjeld, regularly took them travelling to art galleries, where they kept detailed diaries recording what they saw.",
          "From 1908 onward — around the same time their inheritances arrived — the sisters started buying art on a regular basis. Among those whose advice they sought were two dealers: Sigurd Fjeld of the Kristiania Kunstforening, who happened to be Ingrid Fjeld’s brother, and Anton Wexelsen. For years it was assumed that these two men had largely dictated the collection’s direction, but scholars now recognise that Elin and Nia themselves played a considerably more active part in shaping it.",
          "A fondness for Dutch Golden Age painting comes through clearly in the sisters’ letters, though in practice they rarely pursued such works in their early years. Wealthy as they were by ordinary standards, their means were modest next to those of American collectors of the era, Henry Clay Frick among them, and top-tier Dutch Golden Age paintings simply cost more than the sisters were prepared to spend. What they bought instead were safer, uncontroversial choices that had already won broad admiration — paintings by the Norwegian artist Kristoffer Lund, for instance.",
          "Within a few years, though, their collecting had shifted decisively toward the Nordic Symbolists. Sigurd Fjeld, a vocal champion of contemporary Nordic art, is thought to have played some part in that shift, and the sisters would in any case have come across such work on their trips to Copenhagen. Whatever drove the change, the first Symbolist paintings they bought, in March 1913, depicted the Lofoten islands and were the work of the Norwegian artist Halvard Eide. Over the following fourteen years, the collection grew to include six more paintings by Eide, two by Ellen Tofte, and three by Nils Aarum — among them his celebrated The Northern Gate.",
          "The collection’s development was not untouched by the First World War (1914–1918). At first, the sisters responded by funding the safe passage of artists out of occupied Belgium and into Norway — partly a humanitarian gesture, partly in hopes of seeding an artists’ community there. As the war went on, both sisters chose to volunteer at a hospital treating wounded soldiers near Rouen in northern France, Elin arriving in 1916 and Nia a year later, in 1917.",
          "The work proved exhausting and often distressing, leaving little time or energy for art. They resumed collecting after the war, but with a different focus. Rather than acquiring works through commercial dealers, they now tended to purchase directly from artists themselves or from personal acquaintances within artistic circles, often with the aim of helping struggling painters get on their feet."
        ],
        questions: [
          {
            id: 1,
            prompt: "The grandfather built his wealth on two things: _____ and the carrying of cargo by ship.",
            type: "FILL_IN_BLANK",
            correct: "timber",
            explanation: {
              step1: "Phân tích câu hỏi: Cần 1 danh từ chỉ nguồn của cải thứ nhất của người ông (nguồn thứ hai là carrying of cargo by ship = shipping trade).",
              step2: "Định vị thông tin: Đoạn 2, câu đầu tiên: 'Rhys Davies had settled in Norway and made his fortune there in the timber and shipping trades'.",
              step3: "Cấu trúc câu: made his fortune (built wealth) in the timber (nguồn 1) and shipping trades (nguồn 2 = carrying cargo by ship).",
              step4: "Kết luận: Từ cần điền là 'timber'. Tránh bẫy nhầm sang từ 'shipping' vì đề bài đã có 'carrying of cargo by ship'."
            }
          },
          {
            id: 2,
            prompt: "Their _____ was arranged so that they would take up interests like art collecting.",
            type: "FILL_IN_BLANK",
            correct: "schooling",
            explanation: {
              step1: "Phân tích câu hỏi: Tìm danh từ chỉ sự sắp xếp trong thời kỳ thơ ấu/học tập giúp hai chị em hình thành sở thích sưu tập tranh.",
              step2: "Định vị thông tin: Đoạn 3: 'yet the sisters’ schooling was deliberately shaped to cultivate exactly that interest'.",
              step3: "Cấu trúc: sisters' schooling (chủ ngữ) was deliberately shaped (= arranged) to cultivate (= take up) exactly that interest (= art collecting).",
              step4: "Kết luận: Đáp án chính xác là 'schooling'."
            }
          },
          {
            id: 3,
            prompt: "While touring galleries, they wrote thorough _____ describing the works on show.",
            type: "FILL_IN_BLANK",
            correct: "diaries",
            explanation: {
              step1: "Phân tích câu hỏi: Hai chị em đã viết cái gì mang tính chi tiết/thấu đáo khi đi thăm các phòng tranh triển lãm.",
              step2: "Định vị thông tin: Cuối đoạn 3: 'regularly took them travelling to art galleries, where they kept detailed diaries recording what they saw'.",
              step3: "Paraphrase: kept detailed diaries recording what they saw = wrote thorough diaries describing the works on show.",
              step4: "Kết luận: Từ cần điền là 'diaries'."
            }
          },
          {
            id: 4,
            prompt: "Although their _____ revealed a preference for Dutch Golden Age works, such pictures were rather costly to acquire.",
            type: "FILL_IN_BLANK",
            correct: "letters",
            explanation: {
              step1: "Phân tích câu hỏi: Vật phẩm/tài liệu nào của hai chị em thể hiện sự yêu thích hội họa Thời kỳ Hoàng kim Hà Lan.",
              step2: "Định vị thông tin: Đoạn 5: 'A fondness for Dutch Golden Age painting comes through clearly in the sisters’ letters'.",
              step3: "Cấu trúc: comes through clearly in the sisters' letters (= revealed in their letters).",
              step4: "Kết luận: Đáp án là 'letters'."
            }
          },
          {
            id: 5,
            prompt: "The earliest Symbolist works they acquired showed scenes from the _____ region.",
            type: "FILL_IN_BLANK",
            correct: "Lofoten",
            explanation: {
              step1: "Phân tích câu hỏi: Các tác phẩm hội họa Tượng trưng đầu tiên mô tả cảnh tượng thuộc khu vực địa lý nào.",
              step2: "Định vị thông tin: Đoạn 6: 'the first Symbolist paintings they bought, in March 1913, depicted the Lofoten islands'.",
              step3: "Paraphrase: earliest = first; showed scenes from = depicted; region = islands.",
              step4: "Kết luận: Danh từ riêng khu vực là 'Lofoten'."
            }
          },
          {
            id: 6,
            prompt: "In wartime the sisters devoted their time to a _____ caring for injured troops in France.",
            type: "FILL_IN_BLANK",
            correct: "hospital",
            explanation: {
              step1: "Phân tích câu hỏi: Trong chiến tranh hai chị em dành thời gian làm việc tại đâu để chăm sóc thương binh ở Pháp.",
              step2: "Định vị thông tin: Đoạn 7: 'both sisters chose to volunteer at a hospital treating wounded soldiers near Rouen in northern France'.",
              step3: "Paraphrase: devoted their time = volunteer; injured troops = wounded soldiers; cơ sở chăm sóc = hospital.",
              step4: "Kết luận: Từ điền vào ô trống là 'hospital'."
            }
          },
          {
            id: 7,
            prompt: "After the war, the sisters bought art from artists or personal _____.",
            type: "FILL_IN_BLANK",
            correct: "acquaintances",
            explanation: {
              step1: "Phân tích câu hỏi: Sau thế chiến, ngoài các họa sĩ trực tiếp, hai chị em còn mua tranh từ những người quen cá nhân nào.",
              step2: "Định vị thông tin: Đoạn cuối: 'purchase directly from artists themselves or from personal acquaintances within artistic circles'.",
              step3: "Cấu trúc đối chiếu song song: directly from artists themselves OR from personal acquaintances.",
              step4: "Kết luận: Từ cần điền là 'acquaintances'."
            }
          },
          {
            id: 8,
            prompt: "What the sisters chose to do with their money had little to do with the religious way they were raised.",
            type: "TRUE_FALSE_NOT_GIVEN",
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            correct: "FALSE",
            explanation: {
              step1: "Phân tích câu hỏi: Việc hai chị em chọn dùng tiền thừa kế không mấy liên quan đến lối giáo dục tôn giáo thời thơ ấu.",
              step2: "Định vị thông tin: Đoạn 2: 'Growing up in a devout household in rural Norway had instilled in them a strong sense of civic duty, and it was this that led them to spend their inheritance on cultural and philanthropic causes.'",
              step3: "Cấu trúc: devout household (gia đình mộ đạo) -> instilled sense of duty -> led them to spend inheritance.",
              step4: "Kết luận: Thông tin câu hỏi 'had little to do' mâu thuẫn hoàn toàn với bài đọc ('it was this that led them...'). Chọn FALSE."
            }
          },
          {
            id: 9,
            prompt: "The sort of art the sisters bought was heavily influenced by dealers Sigurd Fjeld and Anton Wexelsen throughout their lives.",
            type: "TRUE_FALSE_NOT_GIVEN",
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            correct: "FALSE",
            explanation: {
              step1: "Phân tích câu hỏi: Loại hình nghệ thuật họ mua bị chi phối mạnh mẽ bởi hai nhà môi giới suốt cả cuộc đời.",
              step2: "Định vị thông tin: Đoạn 4: 'For years it was assumed that these two men had largely dictated the collection’s direction, but scholars now recognise that Elin and Nia themselves played a considerably more active part in shaping it.'",
              step3: "Phân tích: Người ta từng nghĩ hai người môi giới chi phối, nhưng thực tế các học giả nay nhận định chính hai chị em mới đóng vai trò chủ động lớn hơn nhiều.",
              step4: "Kết luận: Ngược nghĩa với câu hỏi ('heavily influenced by dealers') => Chọn FALSE."
            }
          },
          {
            id: 10,
            prompt: "Top-tier Dutch Golden Age paintings were cheaper than works by Kristoffer Lund.",
            type: "TRUE_FALSE_NOT_GIVEN",
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            correct: "FALSE",
            explanation: {
              step1: "Phân tích câu hỏi: Tranh Hoàng kim Hà Lan hàng đầu rẻ hơn tranh của Kristoffer Lund.",
              step2: "Định vị thông tin: Đoạn 5: 'top-tier Dutch Golden Age paintings simply cost more than the sisters were prepared to spend. What they bought instead were safer, uncontroversial choices... paintings by the Norwegian artist Kristoffer Lund'.",
              step3: "Phân tích: Tranh Hà Lan đắt hơn mức họ chi trả, nên họ mua tranh Kristoffer Lund để thay thế.",
              step4: "Kết luận: Ngược lại 180 độ so với đề bài (tranh Hà Lan đắt hơn chứ không hề rẻ hơn) => Chọn FALSE."
            }
          },
          {
            id: 11,
            prompt: "The sisters were the only collectors in Norway to buy paintings depicting the Lofoten islands.",
            type: "TRUE_FALSE_NOT_GIVEN",
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            correct: "NOT GIVEN",
            explanation: {
              step1: "Phân tích câu hỏi: Hai chị em là những nhà sưu tập duy nhất ở Na Uy mua các bức tranh vẽ quần đảo Lofoten.",
              step2: "Định vị thông tin: Đoạn 6 nói về việc họ mua tranh vẽ Lofoten năm 1913 từ họa sĩ Halvard Eide.",
              step3: "Phân tích: Bài đọc không hề đề cập liệu có nhà sưu tập nào khác ở Na Uy cũng mua tranh vẽ Lofoten hay không.",
              step4: "Kết luận: Không có thông tin để xác nhận hoặc bác bỏ tính duy nhất ('the only collectors') => Chọn NOT GIVEN."
            }
          },
          {
            id: 12,
            prompt: "Elin and Nia volunteered in France during the First World War at the exact same year.",
            type: "TRUE_FALSE_NOT_GIVEN",
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            correct: "FALSE",
            explanation: {
              step1: "Phân tích câu hỏi: Elin và Nia tình nguyện sang Pháp cùng một năm.",
              step2: "Định vị thông tin: Cuối đoạn 7: 'Elin arriving in 1916 and Nia a year later, in 1917.'",
              step3: "Phân tích: Elin đến năm 1916, còn Nia đến năm 1917 (khác năm nhau).",
              step4: "Kết luận: Sai lệch hoàn toàn với 'exact same year' => Chọn FALSE."
            }
          },
          {
            id: 13,
            prompt: "After the war, the sisters aimed to support struggling artists by purchasing their work directly.",
            type: "TRUE_FALSE_NOT_GIVEN",
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            correct: "TRUE",
            explanation: {
              step1: "Phân tích câu hỏi: Sau chiến tranh, hai chị em đặt mục tiêu hỗ trợ các họa sĩ khó khăn bằng cách mua trực tiếp tranh của họ.",
              step2: "Định vị thông tin: Câu cuối cùng của bài: 'often with the aim of helping struggling painters get on their feet.'",
              step3: "Paraphrase: support struggling artists = helping struggling painters get on their feet; purchasing directly = purchase directly from artists themselves.",
              step4: "Kết luận: Trùng khớp 100% về ý nghĩa => Chọn TRUE."
            }
          }
        ]
      }
    ]
  },

  // ==========================================
  // CAMBRIDGE 20 - READING TEST 1
  // ==========================================
  "cam-20-reading-1": {
    id: "cam-20-reading-1",
    title: "IELTS CAM Inspired 20 - Reading Test 1",
    series: "Cambridge 20",
    testNumber: 1,
    type: "Reading",
    durationMinutes: 60,
    passages: [
      {
        id: "cam-20-p1",
        passageNumber: 1,
        title: "The kākāpō (The vaira)",
        subtitle: "The nocturnal, flightless parrot of the Kelvan Islands and the groundbreaking conservation efforts to save it from extinction.",
        content: [
          "The vaira is a night-active, flightless parrot, now critically endangered and among the rarest of the Kelvan Islands' native birds.",
          "Known to the Rendi people as the vaira and to naturalists as the moss parrot, this large, ground-dwelling bird has a broad, pale, owl-like face. It grows to about 58 centimetres, its plumage mostly a mottled brown-green, with forward-set eyes, a heavy pale beak, sturdy greyish feet, and a tail and wings strikingly short for its bulk. No other parrot is known to have abandoned flight so completely, and few birds of any sort live as long, some reaching 90 years of age.",
          "Solitary by nature, a vaira keeps to one stretch of territory for years on end. Much of its feeding is done on the forest floor, though it also climbs high into the branches, and when it throws itself from a height the best it manages is a clumsy, wing-assisted glide to the ground. Everything it eats comes from plants: besides ferns and the bark, roots and leaves of trees, it takes a good quantity of seeds.",
          "Breeding comes in the warmer months, and then only in seasons when food is plentiful. The male has no share in incubation or in bringing up the young; it falls to the female alone to sit on the eggs and, later, to feed the chicks. Somewhere between one and four eggs are laid in a shallow hollow, which she works over repeatedly both before laying and while she broods.",
          "Before humans reached the Kelvan archipelago, the vaira flourished from coastal scrub up into high mountain beech forests. The coming of the Rendi settlers brought the first pressures: the birds were hunted for food and their soft plumage was worked into ceremonial cloaks, but they remained widespread. The real crisis began with the arrival of mainland colonists in the nineteenth century, who cleared great swaths of prime habitat for farmland and introduced invasive predators like stoats, ferrets, and cats, as well as browsing mammals such as deer, which depleted the bird’s food supply.",
          "By the mid-twentieth century, the vaira had vanished across almost the entirety of its former range. An early attempt at rescue by naturalist Tobias Ruward in the late 1890s saw hundreds of birds relocated to off-shore island sanctuaries, but introduced stoats managed to swim the channel and wiped them out. Decades of desperate search expeditions followed; by the 1970s, scientists feared only a handful of aging males remained.",
          "A miraculous turning point occurred in 1977 when a previously unknown population was discovered on remote Vessig Island. Crucially, the first proof of surviving females came in 1980. The government launched the comprehensive Vaira Recovery Plan, moving all remaining individuals to predator-free offshore islands, fitted each with radio transmitters, and provided supplementary feeding.",
          "The Recovery Plan led to a sharp rise in chick productivity and adult survival. Today, with close involvement of the indigenous Rendi community, the population has rebounded from under 50 birds to over 250, serving as a beacon of modern conservation biology."
        ],
        questions: [
          {
            id: 1,
            prompt: "No other species of parrot lives to the age a vaira can reach.",
            type: "TRUE_FALSE_NOT_GIVEN",
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            correct: "NOT GIVEN",
            explanation: {
              step1: "Phân tích câu hỏi: Không loài vẹt nào khác sống thọ bằng loài vaira.",
              step2: "Định vị thông tin: Đoạn 2: 'No other parrot is known to have abandoned flight so completely, and few birds of any sort live as long, some reaching 90 years of age.'",
              step3: "Bóc tách cấu trúc: Cụm 'No other parrot' trong bài nói về việc từ bỏ khả năng bay (abandoned flight). Còn về tuổi thọ, bài chỉ nói 'few birds of any sort live as long' (rất ít loài chim nói chung sống thọ bằng), không nói cụ thể về các loài vẹt khác.",
              step4: "Kết luận: Bẫy Skim/Scan kinh điển. Không đủ căn cứ để kết luận không có loài vẹt nào khác sống lâu như vậy => Chọn NOT GIVEN."
            }
          },
          {
            id: 2,
            prompt: "Whether the vaira breeds in a given year depends on how much food is available.",
            type: "TRUE_FALSE_NOT_GIVEN",
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            correct: "TRUE",
            explanation: {
              step1: "Phân tích câu hỏi: Việc vaira có sinh sản trong một năm nhất định hay không phụ thuộc vào lượng thức ăn có sẵn.",
              step2: "Định vị thông tin: Đoạn 4 câu 1: 'Breeding comes in the warmer months, and then only in seasons when food is plentiful.'",
              step3: "Paraphrase: only in seasons when food is plentiful = depends on how much food is available.",
              step4: "Kết luận: Ý nghĩa trùng khớp 100% => Chọn TRUE."
            }
          },
          {
            id: 3,
            prompt: "The chicks are cared for entirely by the female, with the male taking no part.",
            type: "TRUE_FALSE_NOT_GIVEN",
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            correct: "TRUE",
            explanation: {
              step1: "Phân tích câu hỏi: Chim non được chăm sóc hoàn toàn bởi chim cái, chim đực không hề tham gia.",
              step2: "Định vị thông tin: Đoạn 4: 'The male has no share in incubation or in bringing up the young; it falls to the female alone to sit on the eggs and, later, to feed the chicks.'",
              step3: "Paraphrase: male has no share in bringing up young = male taking no part; female alone = entirely by the female.",
              step4: "Kết luận: Chọn TRUE."
            }
          },
          {
            id: 4,
            prompt: "At the point when mainland colonists arrived, the vaira still ranged across the whole of the Kelvan Islands.",
            type: "TRUE_FALSE_NOT_GIVEN",
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            correct: "FALSE",
            explanation: {
              step1: "Phân tích câu hỏi: Vào thời điểm người khai hoang đại lục đến, vaira vẫn còn phân bố trên toàn bộ các hòn đảo Kelvan.",
              step2: "Định vị thông tin: Đoạn 5: Người Rendi săn bắn nhưng chúng vẫn 'remained widespread' (phổ biến rộng rãi), nhưng không phải là trên toàn bộ lãnh thổ ('across the whole'). Sau đó 'The real crisis began with the arrival of mainland colonists... cleared great swaths... vanished across almost the entirety'.",
              step3: "Phân tích: Trước đó người Rendi đã săn bắn khiến vùng phân bố thu hẹp so với nguyên thủy ('flourished from coastal scrub up into high mountain').",
              step4: "Kết luận: Chọn FALSE."
            }
          },
          {
            id: 5,
            prompt: "Every vaira collected during Tobias Ruward's early expedition died soon afterwards.",
            type: "TRUE_FALSE_NOT_GIVEN",
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            correct: "NOT GIVEN",
            explanation: {
              step1: "Phân tích câu hỏi: Mọi cá thể vaira được thu thập trong chuyến giải cứu của Tobias Ruward đều chết ngay sau đó.",
              step2: "Định vị thông tin: Đoạn 6: 'relocated to off-shore island sanctuaries, but introduced stoats managed to swim the channel and wiped them out.'",
              step3: "Phân tích: Bài chỉ nói chồn stoat bơi qua eo biển và tiêu diệt chúng, không nói rõ mọi cá thể có chết ngay lập tức hay sống được một thời gian.",
              step4: "Kết luận: Không có mốc thời gian 'soon afterwards' cụ thể => Chọn NOT GIVEN."
            }
          },
          {
            id: 6,
            prompt: "The indigenous Rendi community continues to play an active role in present-day conservation.",
            type: "TRUE_FALSE_NOT_GIVEN",
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            correct: "TRUE",
            explanation: {
              step1: "Phân tích câu hỏi: Cộng đồng người Rendi bản địa tiếp tục đóng vai trò tích cực trong công tác bảo tồn ngày nay.",
              step2: "Định vị thông tin: Đoạn cuối: 'Today, with close involvement of the indigenous Rendi community, the population has rebounded...'",
              step3: "Paraphrase: close involvement = active role; Today = present-day.",
              step4: "Kết luận: Chọn TRUE."
            }
          },
          {
            id: 7,
            prompt: "The vaira feeds on ferns, roots, leaves, and on _____.",
            type: "FILL_IN_BLANK",
            correct: "seeds",
            explanation: {
              step1: "Phân tích câu hỏi: Thức ăn thực vật gồm dương xỉ, rễ cây, lá cây và gì nữa.",
              step2: "Định vị thông tin: Cuối đoạn 3: 'besides ferns and the bark, roots and leaves of trees, it takes a good quantity of seeds.'",
              step3: "Kết luận: Điền 'seeds'."
            }
          },
          {
            id: 8,
            prompt: "The female lays her eggs inside a shallow _____.",
            type: "FILL_IN_BLANK",
            correct: "hollow",
            explanation: {
              step1: "Phân tích câu hỏi: Con cái đẻ trứng bên trong một cấu trúc nông nào.",
              step2: "Định vị thông tin: Đoạn 4: 'Somewhere between one and four eggs are laid in a shallow hollow'.",
              step3: "Kết luận: Điền 'hollow'."
            }
          },
          {
            id: 9,
            prompt: "Rendi settlers turned the bird's soft _____ into ceremonial clothing.",
            type: "FILL_IN_BLANK",
            correct: "plumage",
            explanation: {
              step1: "Phân tích câu hỏi: Bộ phận nào của chim được dùng may áo choàng nghi lễ.",
              step2: "Định vị thông tin: Đoạn 5: 'their soft plumage was worked into ceremonial cloaks'.",
              step3: "Paraphrase: ceremonial cloaks = ceremonial clothing; soft plumage = soft feathers.",
              step4: "Kết luận: Điền 'plumage'."
            }
          },
          {
            id: 10,
            prompt: "Mainland colonists introduced browsing mammals like _____, which consumed the bird's food supply.",
            type: "FILL_IN_BLANK",
            correct: "deer",
            explanation: {
              step1: "Phân tích câu hỏi: Động vật ăn cỏ nào được người khai hoang đưa vào làm cạn kiệt thức ăn của chim.",
              step2: "Định vị thông tin: Cuối đoạn 5: 'browsing mammals such as deer, which depleted the bird’s food supply.'",
              step3: "Kết luận: Điền 'deer'."
            }
          },
          {
            id: 11,
            prompt: "The first proof of surviving females on Vessig Island arrived in the year _____.",
            type: "FILL_IN_BLANK",
            correct: "1980",
            explanation: {
              step1: "Phân tích câu hỏi: Bằng chứng đầu tiên về chim mái còn sống xuất hiện vào năm nào.",
              step2: "Định vị thông tin: Đoạn 7: 'Crucially, the first proof of surviving females came in 1980.'",
              step3: "Kết luận: Điền năm '1980'."
            }
          },
          {
            id: 12,
            prompt: "The Recovery Plan resulted in a significant rise in chick _____.",
            type: "FILL_IN_BLANK",
            correct: "productivity",
            explanation: {
              step1: "Phân tích câu hỏi: Kế hoạch phục hồi dẫn tới sự gia tăng mạnh mẽ về chỉ số nào của chim con.",
              step2: "Định vị thông tin: Đoạn 8: 'The Recovery Plan led to a sharp rise in chick productivity and adult survival.'",
              step3: "Paraphrase: significant rise = sharp rise.",
              step4: "Kết luận: Điền 'productivity'."
            }
          },
          {
            id: 13,
            prompt: "Today the total population of the bird has rebounded to over _____ individuals.",
            type: "FILL_IN_BLANK",
            correct: "250",
            explanation: {
              step1: "Phân tích câu hỏi: Số lượng cá thể vaira hiện nay đã phục hồi lên trên bao nhiêu con.",
              step2: "Định vị thông tin: Đoạn cuối: 'the population has rebounded from under 50 birds to over 250'.",
              step3: "Kết luận: Điền '250'."
            }
          }
        ]
      }
    ]
  },

  // ==========================================
  // CAMBRIDGE 19 - READING TEST 1
  // ==========================================
  "cam-19-reading-1": {
    id: "cam-19-reading-1",
    title: "IELTS CAM Inspired 19 - Reading Test 1",
    series: "Cambridge 19",
    testNumber: 1,
    type: "Reading",
    durationMinutes: 60,
    passages: [
      {
        id: "cam-19-p1",
        passageNumber: 1,
        title: "How tennis rackets have changed",
        subtitle: "The engineering evolution from wooden frames to carbon fibre composites and the impact on player physiology and power.",
        content: [
          "In 1874, Major Walter Wingfield patented a game he called Sphairistike, soon widely known as lawn tennis. The original rackets used in Wingfield’s game were heavy, solid wood implements resembling court tennis rackets, with small teardrop-shaped heads and long handles.",
          "For nearly a century, wood remained the undisputed material of choice for tennis racket manufacturers. Most were constructed from layers of ash laminated together with animal glue. While ash provided good flexibility and tensile strength, wooden rackets suffered from severe inherent limitations: they were susceptible to warping in damp weather, had a very small 'sweet spot' (the central area of the string bed where hitting produces maximum power and minimum vibration), and weighed around 380 grams.",
          "The first revolution in racket engineering occurred in the late 1960s with the introduction of metal frames. René Lacoste had patented a tubular steel racket as early as 1953, but it was not until the Wilson T2000 was commercialised in 1967 — famously wielded by Jimmy Connors — that metal took off. Aluminium rackets soon followed, allowing manufacturers to expand head size from 65 square inches to over 100 square inches without making the racket prohibitively heavy.",
          "The true golden age of tennis technology, however, dawned with the adoption of carbon fibre composites in the early 1980s. Carbon fibres, which are thinner than a human hair yet five times stronger than steel, could be woven together and bonded with epoxy resin. This allowed engineers to vary stiffness across different zones of the frame, delivering unprecedented power while dampening high-frequency vibrations that cause tennis elbow.",
          "Modern high-tech rackets now integrate graphene, piezoelectric sensors, and vibration-dampening elastomers, transforming tennis from a game of touch and placement into a high-velocity sport dominated by ferocious baseline power and extreme topspin."
        ],
        questions: [
          {
            id: 1,
            prompt: "Major Walter Wingfield patented the game originally called Sphairistike in the year _____.",
            type: "FILL_IN_BLANK",
            correct: "1874",
            explanation: {
              step1: "Phân tích câu hỏi: Năm Major Walter Wingfield cấp bằng sáng chế cho trò Sphairistike.",
              step2: "Định vị thông tin: Đoạn 1 câu đầu tiên: 'In 1874, Major Walter Wingfield patented a game he called Sphairistike...'",
              step3: "Kết luận: Điền năm '1874'."
            }
          },
          {
            id: 2,
            prompt: "For wooden rackets, the most common type of wood used was _____.",
            type: "FILL_IN_BLANK",
            correct: "ash",
            explanation: {
              step1: "Phân tích câu hỏi: Loại gỗ thông dụng nhất để sản xuất vợt gỗ.",
              step2: "Định vị thông tin: Đoạn 2: 'Most were constructed from layers of ash laminated together...'",
              step3: "Kết luận: Điền 'ash'."
            }
          },
          {
            id: 3,
            prompt: "A significant drawback of wooden rackets was that damp weather caused them to suffer from _____.",
            type: "FILL_IN_BLANK",
            correct: "warping",
            explanation: {
              step1: "Phân tích câu hỏi: Hiện tượng biến dạng nào xảy ra với vợt gỗ khi thời tiết ẩm ướt.",
              step2: "Định vị thông tin: Đoạn 2: 'they were susceptible to warping in damp weather'.",
              step3: "Kết luận: Điền 'warping'."
            }
          },
          {
            id: 4,
            prompt: "The commercial steel racket Wilson T2000 was introduced in the year _____.",
            type: "FILL_IN_BLANK",
            correct: "1967",
            explanation: {
              step1: "Phân tích câu hỏi: Năm cây vợt thép Wilson T2000 được thương mại hóa.",
              step2: "Định vị thông tin: Đoạn 3: 'until the Wilson T2000 was commercialised in 1967'.",
              step3: "Kết luận: Điền năm '1967'."
            }
          },
          {
            id: 5,
            prompt: "Aluminium allowed makers to expand racket head size beyond 100 square inches without increasing overall weight.",
            type: "TRUE_FALSE_NOT_GIVEN",
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            correct: "TRUE",
            explanation: {
              step1: "Phân tích câu hỏi: Nhôm cho phép mở rộng diện tích mặt vợt quá 100 sq in mà không làm tăng quá mức trọng lượng.",
              step2: "Định vị thông tin: Cuối đoạn 3: 'allowing manufacturers to expand head size from 65 square inches to over 100 square inches without making the racket prohibitively heavy.'",
              step3: "Kết luận: Trùng khớp nghĩa => Chọn TRUE."
            }
          },
          {
            id: 6,
            prompt: "Carbon fibre composites are heavier than steel.",
            type: "TRUE_FALSE_NOT_GIVEN",
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            correct: "FALSE",
            explanation: {
              step1: "Phân tích câu hỏi: Sợi carbon nặng hơn thép.",
              step2: "Định vị thông tin: Đoạn 4: 'Carbon fibres, which are thinner than a human hair yet five times stronger than steel...'. Sợi carbon siêu nhẹ và bền gấp 5 lần thép.",
              step3: "Kết luận: Trái ngược thông tin khoa học trong bài => Chọn FALSE."
            }
          },
          {
            id: 7,
            prompt: "Modern rackets are designed to reduce vibrations that lead to a medical condition known as tennis _____.",
            type: "FILL_IN_BLANK",
            correct: "elbow",
            explanation: {
              step1: "Phân tích câu hỏi: Vợt hiện đại giúp triệt tiêu rung chấn gây ra chấn thương y khoa gọi là tennis elbow.",
              step2: "Định vị thông tin: Cuối đoạn 4: 'dampening high-frequency vibrations that cause tennis elbow.'",
              step3: "Kết luận: Điền 'elbow'."
            }
          }
        ]
      }
    ]
  },

  // ==========================================
  // CAMBRIDGE 18 - READING TEST 1
  // ==========================================
  "cam-18-reading-1": {
    id: "cam-18-reading-1",
    title: "IELTS CAM Inspired 18 - Reading Test 1",
    series: "Cambridge 18",
    testNumber: 1,
    type: "Reading",
    durationMinutes: 60,
    passages: [
      {
        id: "cam-18-p1",
        passageNumber: 1,
        title: "Urban farming",
        subtitle: "In Rotterdam, urban growers are testing a soil-free way of farming that needs less room and fewer resources. Might it help cities cope with the risks hanging over our food supplies?",
        content: [
          "High above a recently opened concert hall in the west of Rotterdam, what is said to be the world's largest rooftop farm has begun to yield its first crops. From tall plastic tubes tumble raspberries — small, deep red and remarkably full of flavour — their roots left dangling inside the hollow columns where a computer-guided misting system delivers a nutrient-rich mist every twenty minutes.",
          "The farm is run by Verdantis, a Dutch start-up pioneered by horticultural scientist Jan Merckx. Unlike hydroponic systems where roots are submerged in circulating liquid, Verdantis uses aeroponics. By spraying roots with mist rather than submerging them, plants absorb oxygen far more efficiently, accelerating growth rates by up to 30 percent while using 95 percent less water than traditional field agriculture.",
          "Produce from the rooftop farm is already supplying local restaurants and markets. The facility currently produces several varieties of lettuce, herbs, and leafy greens like spinach, yielding over 800 kg of fresh vegetables monthly. Because the crops are grown locally in a climate-controlled envelope, there is zero need for synthetic chemical pesticides, and transport emissions are virtually eliminated.",
          "Merckx envisions urban aeroponics expanding to abandoned industrial warehouses, underground tunnels, and skyscraper rooftops worldwide. However, critics point out significant hurdles: the high capital cost of aeroponic hardware, heavy electricity consumption for LED growth lights, and limitations on the types of crops that can be economically grown, such as staple root vegetables like potatoes."
        ],
        questions: [
          {
            id: 1,
            prompt: "The rooftop farm grows leafy greens such as _____ alongside raspberries and herbs.",
            type: "FILL_IN_BLANK",
            correct: "spinach",
            explanation: {
              step1: "Phân tích câu hỏi: Cây rau ăn lá nào được trồng trên trang trại sân thượng.",
              step2: "Định vị thông tin: Đoạn 3: 'produces several varieties of lettuce, herbs, and leafy greens like spinach'.",
              step3: "Kết luận: Điền 'spinach'."
            }
          },
          {
            id: 2,
            prompt: "The monthly harvest of fresh produce from the rooftop farm exceeds _____ in weight.",
            type: "FILL_IN_BLANK",
            correct: "800 kg",
            explanation: {
              step1: "Phân tích câu hỏi: Khối lượng thu hoạch hàng tháng vượt mức bao nhiêu.",
              step2: "Định vị thông tin: Đoạn 3: 'yielding over 800 kg of fresh vegetables monthly'.",
              step3: "Kết luận: Điền '800 kg'."
            }
          },
          {
            id: 3,
            prompt: "Due to indoor cultivation, the farm operates with zero synthetic chemical _____.",
            type: "FILL_IN_BLANK",
            correct: "pesticides",
            explanation: {
              step1: "Phân tích câu hỏi: Trang trại hoàn toàn không dùng loại hóa chất nhân tạo nào.",
              step2: "Định vị thông tin: Đoạn 3: 'zero need for synthetic chemical pesticides'.",
              step3: "Kết luận: Điền 'pesticides'."
            }
          },
          {
            id: 4,
            prompt: "Merckx expects the farm will eventually supply the greater part of Rotterdam's total food demand.",
            type: "TRUE_FALSE_NOT_GIVEN",
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            correct: "FALSE",
            explanation: {
              step1: "Phân tích câu hỏi: Merckx kỳ vọng trang trại cuối cùng sẽ cung cấp phần lớn nhu cầu lương thực của toàn thành phố.",
              step2: "Định vị thông tin: Đoạn 4: Merckx chỉ hình dung việc mở rộng ra các nhà kho, tầng hầm, và vẫn tồn tại nhiều hạn chế không thể trồng trọt đại trà ngũ cốc hay khoai tây quy mô lớn.",
              step3: "Kết luận: Không hề có tuyên bố cung cấp phần lớn thực phẩm cho thành phố => Chọn FALSE."
            }
          },
          {
            id: 5,
            prompt: "The aeroponic method uses more water than traditional open-field agriculture.",
            type: "TRUE_FALSE_NOT_GIVEN",
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            correct: "FALSE",
            explanation: {
              step1: "Phân tích câu hỏi: Phương pháp khí canh sử dụng nhiều nước hơn canh tác đồng ruộng truyền thống.",
              step2: "Định vị thông tin: Đoạn 2: 'accelerating growth rates by up to 30 percent while using 95 percent less water than traditional field agriculture.'",
              step3: "Kết luận: Dùng ít hơn 95% nước, nên câu hỏi nói 'uses more water' là SAI hoàn toàn => Chọn FALSE."
            }
          },
          {
            id: 6,
            prompt: "Staple root crops like potatoes cannot currently be grown as economically in aeroponic setups.",
            type: "TRUE_FALSE_NOT_GIVEN",
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            correct: "TRUE",
            explanation: {
              step1: "Phân tích câu hỏi: Cây củ lương thực như khoai tây hiện chưa thể trồng mang lại hiệu quả kinh tế cao trong hệ thống khí canh.",
              step2: "Định vị thông tin: Đoạn cuối: 'limitations on the types of crops that can be economically grown, such as staple root vegetables like potatoes.'",
              step3: "Kết luận: Trùng khớp ý nghĩa bài đọc => Chọn TRUE."
            }
          }
        ]
      }
    ]
  },

  // ==========================================
  // REAL TEST 2026 - Q1
  // ==========================================
  "real-test-2026-q1": {
    id: "real-test-2026-q1",
    title: "IELTS Real Test 2026 - Q1 (Reading)",
    series: "Actual Test 2026",
    testNumber: 1,
    type: "Reading",
    durationMinutes: 60,
    passages: [
      {
        id: "rt-2026-q1-p1",
        passageNumber: 1,
        title: "AI in Modern Healthcare & Remote Diagnostics",
        subtitle: "How neural networks and wearable biosensors are transforming early pathology detection in rural and under-resourced clinics.",
        content: [
          "In early 2025, regional medical clinics across Southeast Asia and Sub-Saharan Africa began field trials for an autonomous diagnostic system powered by multimodal artificial intelligence.",
          "Trained on millions of anonymised retinal scans, dermatological photographs, and chest radiographs, the system operates locally on low-cost tablet computers without requiring high-speed cloud connectivity. The algorithm matches or exceeds certified radiologists in identifying early-stage diabetic retinopathy, melanoma, and pulmonary tuberculosis.",
          "Beyond visual recognition, new generations of microfluidic patches and wearable biosensors stream real-time physiological metrics directly to clinical AI agents. These continuously monitor biomarkers including interstitial glucose, cardiac troponin, and cortisol, detecting acute cardiac infarction hours before patients exhibit overt physical symptoms.",
          "Despite immense promise, ethicists urge cautious oversight. Algorithmic bias resulting from unrepresentative training datasets has historically led to higher false-negative rates in under-represented demographic groups. Regulators stress that AI must serve as an empowering assistant to local nurses and general practitioners rather than an unaccountable surrogate decision-maker."
        ],
        questions: [
          {
            id: 1,
            prompt: "The diagnostic AI system requires continuous high-speed internet connection to operate.",
            type: "TRUE_FALSE_NOT_GIVEN",
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            correct: "FALSE",
            explanation: {
              step1: "Phân tích câu hỏi: Hệ thống AI chẩn đoán yêu cầu kết nối internet tốc độ cao liên tục.",
              step2: "Định vị thông tin: Đoạn 2: 'operates locally on low-cost tablet computers without requiring high-speed cloud connectivity.'",
              step3: "Kết luận: Hệ thống chạy offline trên máy tính bảng mà không cần mạng tốc độ cao => Chọn FALSE."
            }
          },
          {
            id: 2,
            prompt: "The AI matches or exceeds specialist human doctors in detecting conditions like diabetic retinopathy.",
            type: "TRUE_FALSE_NOT_GIVEN",
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            correct: "TRUE",
            explanation: {
              step1: "Phân tích câu hỏi: AI đạt độ chính xác tương đương hoặc vượt bác sĩ chuyên khoa.",
              step2: "Định vị thông tin: Đoạn 2: 'The algorithm matches or exceeds certified radiologists in identifying early-stage diabetic retinopathy...'",
              step3: "Kết luận: Chọn TRUE."
            }
          },
          {
            id: 3,
            prompt: "Wearable biosensors monitor cardiac biomarkers like _____ to anticipate heart attacks.",
            type: "FILL_IN_BLANK",
            correct: "troponin",
            explanation: {
              step1: "Phân tích câu hỏi: Chỉ dấu sinh học tim mạch nào được các cảm biến đeo tay theo dõi.",
              step2: "Định vị thông tin: Đoạn 3: 'biomarkers including interstitial glucose, cardiac troponin, and cortisol...'",
              step3: "Kết luận: Điền 'troponin' (hoặc cardiac troponin)."
            }
          },
          {
            id: 4,
            prompt: "Algorithmic bias occurs when training datasets lack adequate demographic _____.",
            type: "FILL_IN_BLANK",
            correct: "representation",
            explanation: {
              step1: "Phân tích câu hỏi: Sự thiên vị thuật toán nảy sinh khi tập dữ liệu đào tạo thiếu tính đại diện.",
              step2: "Định vị thông tin: Đoạn cuối: 'Algorithmic bias resulting from unrepresentative training datasets...'",
              step3: "Kết luận: Điền 'representation' (hoọc unrepresentative)."
            }
          }
        ]
      }
    ]
  }
};

export function getIELTSTestById(id: string): IELTSTestItem {
  if (IELTS_TESTS[id]) {
    return IELTS_TESTS[id];
  }
  // Default fallback if not found
  return IELTS_TESTS["cam-21-reading-1"];
}
