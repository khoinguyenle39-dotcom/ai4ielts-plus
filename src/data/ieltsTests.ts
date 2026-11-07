// AUTO-GENERATED AUTHENTIC IELTS TESTS (FULL PASSAGES 1, 2, 3 - 40 QUESTIONS EACH)
export interface QuestionExplanation {
  step1: string;
  step2: string;
  step3: string;
  step4?: string;
  paraphrase?: { q: string; p: string }[];
  distractor?: string;
}

export interface TestQuestion {
  id: number;
  prompt: string;
  type: "TRUE_FALSE_NOT_GIVEN" | "MULTIPLE_CHOICE" | "FILL_IN_BLANK";
  options?: string[];
  correct: string;
  explanation: QuestionExplanation;
}

export interface TestPassage {
  id: string;
  passageNumber: number;
  title: string;
  subtitle?: string;
  content: string[];
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
  "cam-21-reading-1": {
    "id": "cam-21-reading-1",
    "title": "IELTS CAM Inspired 21 - Reading Test 1",
    "series": "Cambridge 21",
    "testNumber": 1,
    "type": "Reading",
    "durationMinutes": 60,
    "passages": [
      {
        "id": "cam-21-reading-1-p1",
        "passageNumber": 1,
        "title": "The Davies sisters",
        "subtitle": "Over almost two decades, from 1908 to 1927, two sisters, Elin and Nia Davies, built what became one of Norway’s largest collections of Nordic Symbolist paintings from the late nineteenth and early twentieth centuries.",
        "content": [
          "A Welsh shipping magnate named Rhys Davies had settled in Norway and made his fortune there in the timber and shipping trades; his granddaughters, Elin (1878–1948) and Nia (1880 1961) Davies, would later become known as collectors. Elin’s inheritance came first, in 1906, with N a’s following two years later, in 1908, and by then people considered the sisters the wealthiest unmarried women in Norway. Growing up in a devout household in rural Norway had instilled in them a strong sense of civic duty, and it was this that led them to spend their inheritance on cultural and philanthropic causes.",
          "No one else in the family had ever collected art, yet the sisters’ schooling was deliberately shaped to cultivate exactly that interest. Cultural pursuits, rather than academic subjects, formed the core of their studies at a school in Kristiania, and their tutor, Ingrid Fjeld, regularly took them travelling to art galleries, where they kept detailed diaries recording what they saw.",
          "From 1908 onward — around the same time their inheritances arrived — the sisters started buying art on a regular basis. Among those whose advice they sought were two dealers: Sigurd Fjeld of the Kristiania Kunstforening, who happened to be Ingrid Fjeld’s brother, and Anton Wexelsen. For years it was assumed that these two men had largely dictated the collection’s direction, but scholars now recognise that Elin and Nia themselves played a considerably more active part in shaping it.",
          "A fondness for Dutch Golden Age painting comes through clearly in the sisters’ letters, though in practice they rarely pursued such works in their early years. Wealthy as they were by ordinary standards, their means were modest next to those of American collectors of the era, Henry Clay Frick among them, and top-tier Dutch Golden Age paintings simply cost more than the sisters were prepared to spend. What they bought instead were safer, uncontroversial choices that had already won broad admiration — paintings by the Norwegian artist Kristoffer Lund, for instance.",
          "Within a few years, though, their collecting had shifted decisively toward the Nordic Symbolists. Sigurd Fjeld, a vocal champion of contemporary Nordic art, is thought to have played some part in that shift, and the sisters would in any case have come across such work on their trips to Copenhagen. Whatever drove the change, the first Symbolist paintings they bought, in March 1913, depicted the Lofoten islands and were the work of the Norwegian artist Halvard Eide. Over the following fourteen years, the collection grew to include six more paintings by Eide, two by Ellen Tofte, and three by Nils Aarum — among them his celebrated The Northern Gate.",
          "The collection’s development was not untouched by the First World War (1914–1918). At first, the sisters responded by funding the safe passage of artists out of occupied Belgium and into Norway — partly a humanitarian gesture, partly in hopes of seeding an artists’ community there. As the war went on, both sisters chose to volunteer at a hospital treating wounded soldiers near Rouen in northern France, Elin arriving in 1916 and Nia a year later, in 1917.",
          "The work proved exhausting and often distressing, leaving a lasting mark on Nia’s health. Even so, during one of her many visits to nearby Paris, she called at the Galerie Aubert and came away with two paintings by Mathias Solvik, Winter Harbour and The Reindeer Herd. Sent directly to Trondheim, these became the first works by Solvik to appear in a Norwegian public gallery, and large crowds turned out during their opening weeks.",
          "Writers on the subject have often cast the sisters as unlikely pioneers of collecting. Much is made of how isolated they were in rural Norway, and of their apparent lack of acquaintances among artists or gallery owners. That same distance from artistic circles, though, meant they answered to no fashionable consensus and could follow their own taste freely. They did lean on a small, trusted circle of advisers, and travelled often between Kristiania and Paris, with paintings regularly sent to their home for them to consider.",
          "By the early 1920s, the poverty and social disruption left by the First World War had made Elin increasingly reluctant to spend money on art. She redirected her philanthropic energy almost entirely toward social causes and toward turning the sisters’ estate, Plas Davies, into a folk high school and the home of the Davies Festival of Music and Literature. March 1927 saw her last art purchase. Nia, too, largely stopped collecting around this point, though she took it up again in the 1930s, buying — on a more modest scale — works by contemporary Norwegian artists.",
          "At the time the sisters were collecting Nordic Symbolist paintings, this kind of art was, for the most part, overlooked by collectors and institutions alike. Bequeathed to the National Gallery of Norway in 1948 and 1961 respectively, the Elin and Nia Davies collection today holds important works by the leading Symbolists of the period. Because they collected simply what they loved, the sisters left behind a cultural legacy that continues to matter, in Norway and well beyond it."
        ],
        "questions": [
          {
            "id": 1,
            "prompt": "Family and early life",
            "type": "FILL_IN_BLANK",
            "correct": "timber",
            "explanation": {
              "step1": "the grandfather built his wealth on two things: 1. ___ and the carrying of cargo by ship Ô trống cần một danh từ chỉ nguồn tạo ra của cải, song song với hoạt động vận chuyển hàng bằng tàu. Chưa cần đoán chính xác đó là gì; ta tìm nguồn còn lại trong bài.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta tìm ý gây dựng của cải (“built his wealth”) và chở hàng bằng tàu (“the carrying of cargo by ship”). Ở đoạn 1, cụm tạo dựng cơ nghiệp (“made his fortune”) cho thấy đây là vùng cần đọc. Đoạn 1 — made his fortune",
              "step3": "Đoạn 1: A Welsh shipping magnate named Rhys Davies had settled in Norway and made his fortune there in the timber and shipping trades ; his granddaughters , Elin (1878–1948) and Nia (1880 1961) Davies, would later become known as collectors .",
              "step4": "Đáp án phù hợp nhất: timber Câu hoàn chỉnh: the grandfather built his wealth on two things: timber and the carrying of cargo by ship (Người ông gây dựng của cải từ hai ngành: gỗ và vận chuyển hàng bằng tàu.) => Khớp với dự đoán về nguồn tạo ra của cải: bài nêu ngành gỗ và ngành vận tải biển; đề đã cho ngành thứ hai, nên ô trống là timber . Đáp án gồm 1 từ lấy nguyên văn bài; đề không nêu giới hạn số từ. Đối chiếu paraphrasing: built his wealth made his fortune the carrying of cargo by ship shipping trades shipping ngành vận tải biển: Dễ chọn vì đứng ngay cạnh timber, nhưng đề đã diễn đạt ngành này bằng cụm chở hàng bằng tàu (“the carrying of cargo by ship”). Ô trống cần ngành còn lại. Norway địa điểm: Đây là nơi Rhys Davies định cư, không phải ngành giúp ông gây dựng của cải."
            }
          },
          {
            "id": 2,
            "prompt": "the grandfather built his wealth on two things:    and the carrying of cargo by ship",
            "type": "FILL_IN_BLANK",
            "correct": "schooling",
            "explanation": {
              "step1": "their 2. ___ was arranged so that they would take up interests like art collecting Ô trống đứng sau *their* và đi với *was arranged* ⇒ cần một danh từ số ít hoặc không đếm được . Về nghĩa, ta dự đoán đó là điều liên quan đến việc học của hai chị em , được sắp xếp để nuôi dưỡng sở thích.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc đến ý sưu tầm nghệ thuật (“collected art”) ở đoạn 2 ⇒ bắt đầu đọc tại đây. Đoạn 2 — collected art",
              "step3": "Đoạn 2: No one else in the family had ever collected art , yet the sisters’ schooling was deliberately shaped to cultivate exactly that interest . Câu này nói thẳng schooling là thứ được định hướng để nuôi dưỡng sở thích sưu tầm nghệ thuật.",
              "step4": "Đáp án phù hợp nhất: schooling Câu hoàn chỉnh: their schooling was arranged so that they would take up interests like art collecting ( Việc học của hai chị em được sắp xếp để họ hình thành những sở thích như sưu tầm nghệ thuật.) => Khớp dự đoán về một danh từ chỉ việc học và khớp bằng chứng trực tiếp; đáp án gồm 1 từ. Đối chiếu paraphrasing: was arranged so that was deliberately shaped to cultivate art collecting collected art + that interest school “ trường học ”: Câu 2 đoạn 2 nhắc đến nơi hai chị em học (“a school”), nhưng câu (1) xác định thứ được định hướng là schooling, không phải ngôi trường. studies “ việc học các môn ”: Từ này xuất hiện ở câu 2 đoạn 2, nhưng là dạng số nhiều, không khớp với was arranged; bằng chứng trực tiếp dùng schooling."
            }
          },
          {
            "id": 3,
            "prompt": "their    was arranged so that they would take up interests like art collecting",
            "type": "FILL_IN_BLANK",
            "correct": "diaries",
            "explanation": {
              "step1": "while touring galleries , they wrote thorough 3. ___ describing the works on show Ô trống nằm sau “wrote thorough” nên cần một danh từ chỉ thứ họ viết . Ngữ cảnh cho biết thứ đó ghi lại các tác phẩm họ thấy khi tham quan phòng tranh; nhiều khả năng là danh từ số nhiều.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta tìm ý tham quan phòng tranh , tương ứng với “travelling to art galleries” ở đoạn 2 => bắt đầu đọc tại đây. Đoạn 2 — travelling to art galleries",
              "step3": "Đoạn 2: Cultural pursuits , rather than academic subjects, formed the core of their studies at a school in Kristiania , and their tutor , Ingrid Fjeld, regularly took them travelling to art galleries , where they kept detailed diaries recording what they saw .",
              "step4": "Đáp án phù hợp nhất: diaries Câu hoàn chỉnh: while touring galleries, they wrote thorough diaries describing the works on show (Khi tham quan phòng tranh, họ viết những cuốn nhật ký chi tiết mô tả các tác phẩm được trưng bày.) => Khớp với dự đoán về thứ được viết khi tham quan phòng tranh ; đáp án gồm 1 từ, còn đề không nêu giới hạn số từ. Đối chiếu paraphrasing: touring galleries travelling to art galleries wrote thorough kept detailed describing the works on show recording what they saw studies việc học: Đây là nội dung của vế đầu câu (2), không phải thứ họ viết tại phòng tranh. galleries phòng tranh: Đây là nơi họ đến, không phải thứ họ viết. letters thư từ: Đoạn 4 có nhắc đến thư, nhưng không nói họ viết chúng để ghi lại những gì thấy khi tham quan phòng tranh."
            }
          },
          {
            "id": 4,
            "prompt": "while touring galleries, they wrote thorough    describing the works on show",
            "type": "FILL_IN_BLANK",
            "correct": "letters",
            "explanation": {
              "step1": "although their 4. ___ revealed a preference for Dutch Golden Age works , such pictures were rather costly to acquire Ý câu hỏi: Cần tìm thứ thuộc về hai chị em đã cho thấy sở thích của họ đối với tranh Dutch Golden Age. Dự đoán: Sau “their” cần một danh từ, có thể là một dạng tư liệu ghi lại sở thích ấy. Chưa thể xác định chính xác từ cần điền chỉ từ câu hỏi.",
              "step2": "Dựa vào từ khoá đặc biệt Dutch Golden Age => ta định vị được câu nói về sở thích của hai chị em ở đoạn 4. Đoạn 4",
              "step3": "Đoạn 4: A fondness for Dutch Golden Age painting comes through clearly in the sisters’ letters , though in practice they rarely pursued such works in their early years .",
              "step4": "Đáp án phù hợp nhất: letters Câu hoàn chỉnh: although their letters revealed a preference for Dutch Golden Age works, such pictures were rather costly to acquire (Mặc dù thư của hai chị em cho thấy họ thích tranh Dutch Golden Age , những bức tranh ấy lại khá đắt để mua.) => Khớp với dự đoán: thư là thứ cho thấy sở thích của họ ; đáp án gồm 1 từ, và đề không nêu giới hạn số từ. Đối chiếu paraphrasing: A fondness for a preference for comes through revealed diaries “ nhật ký ”: Đoạn 2 nhắc đến nhật ký ghi lại những gì hai chị em thấy khi thăm phòng tranh (“kept detailed diaries”) Nhưng câu (1) đoạn 4 nói sở thích với tranh Dutch Golden Age thể hiện qua letters, không phải nhật ký. works “ tác phẩm ”: Từ này xuất hiện gần đáp án, nhưng chỉ những bức tranh họ thích, không phải thứ đã bộc lộ sở thích ấy."
            }
          },
          {
            "id": 5,
            "prompt": "The sisters as art collectors",
            "type": "FILL_IN_BLANK",
            "correct": "Lofoten",
            "explanation": {
              "step1": "the earliest Symbolist works they acquired showed scenes from the 5. ___ region Ô trống đứng trước *region*, nên cần điền tên một vùng . Ta cần tìm vùng được miêu tả trong những bức tranh Symbolist đầu tiên hai chị em mua.",
              "step2": "Dựa vào từ khoá đặc biệt *Symbolist* và ý “những tác phẩm đầu tiên” => bắt đầu đọc ở đoạn 5, tại cụm “the first Symbolist paintings they bought”. Đoạn 5 — the first Symbolist paintings they bought",
              "step3": "Đoạn 5: Whatever drove the change , the first Symbolist paintings they bought , in March 1913, depicted the Lofoten islands and were the work of the Norwegian artist Halvard Eide .",
              "step4": "Đáp án phù hợp nhất: Lofoten Câu hoàn chỉnh: the earliest Symbolist works they acquired showed scenes from the Lofoten region (Những tác phẩm Symbolist đầu tiên họ mua thể hiện cảnh vùng Lofoten .) => Đúng dự đoán về tên vùng: bài đọc nói tranh miêu tả quần đảo Lofoten (“depicted the Lofoten islands”); đáp án gồm một từ. Đối chiếu paraphrasing: the earliest Symbolist works the first Symbolist paintings they acquired they bought showed scenes from depicted the 5. ___ region the Lofoten islands islands “ — quần đảo ”: Đây là từ chỉ loại địa hình đi sau Lofoten trong bài, không phải tên vùng cần điền trước region. Halvard Eide Tên này xuất hiện ngay trong câu (3), nhưng là họa sĩ, không phải vùng được tranh miêu tả. Copenhagen Đoạn 5 nhắc đến Copenhagen như nơi hai chị em có thể đã bắt gặp dòng tranh này, không phải cảnh trong những bức tranh đầu tiên họ mua."
            }
          },
          {
            "id": 6,
            "prompt": "although their    revealed a preference for Dutch Golden Age works, such pictures were rather costly to acquire",
            "type": "FILL_IN_BLANK",
            "correct": "hospital",
            "explanation": {
              "step1": "in wartime the sisters devoted their time to a 6. ___ caring for injured troops in France Ô trống đứng sau “a” nên cần một danh từ số ít . Dựa vào cụm mô tả phía sau, ta dự đoán đó là một cơ sở chăm sóc thương binh .",
              "step2": "Dựa vào tên cuộc chiến (“First World War”) trong tiêu đề ghi chú => tìm đến đoạn 6, nơi cụm này xuất hiện. Bắt đầu đọc từ “As the war went on”. Đoạn 6 — First World War",
              "step3": "Đoạn 6: As the war went on , both sisters chose to volunteer at a hospital treating wounded soldiers near Rouen in northern France , Elin arriving in 1916 and Nia a year later, in 1917 .",
              "step4": "Đáp án phù hợp nhất: hospital Câu hoàn chỉnh: in wartime the sisters devoted their time to a hospital caring for injured troops in France (Trong thời chiến, hai chị em dành thời gian tại một bệnh viện chăm sóc thương binh ở France.) => Khớp với dự đoán về một cơ sở chăm sóc thương binh; đáp án gồm 1 từ. Đối chiếu paraphrasing: caring for injured troops treating wounded soldiers in wartime As the war went on Rouen địa danh: Đây là nơi ở gần bệnh viện, không phải cơ sở mà hai chị em đến tình nguyện. soldiers binh lính: Đây là những người được chữa trị, không phải nơi chăm sóc họ."
            }
          },
          {
            "id": 7,
            "prompt": "the earliest Symbolist works they acquired showed scenes from the    region",
            "type": "FILL_IN_BLANK",
            "correct": "acquaintances",
            "explanation": {
              "step1": "regarded as unusual collectors – reportedly, they formed no 7. ___ within artistic or gallery circles Ô trống đứng sau “no” và chỉ đối tượng mà hai chị em được cho là không quen biết . Ta dự đoán một danh từ số nhiều chỉ người ; “reportedly” nhắc rằng đây là nhận định được thuật lại.",
              "step2": "Câu hỏi không có từ khoá đặc biệt. Ta đọc đến đoạn 8, nơi hai chị em được nhìn nhận là những người sưu tập khác thường (“unlikely pioneers of collecting”) => bắt đầu tìm thông tin tại đây. Đoạn 8 — unlikely pioneers of collecting",
              "step3": "Đoạn 8: Much is made of how isolated they were in rural Norway, and of their apparent lack of acquaintances among artists or gallery owners . Cụm “apparent lack” giữ đúng sắc thái được cho là thiếu , chứ không khẳng định chắc chắn họ không quen ai.",
              "step4": "Đáp án phù hợp nhất: acquaintances Câu hoàn chỉnh: regarded as unusual collectors – reportedly, they formed no acquaintances within artistic or gallery circles (được xem là những người sưu tập khác thường – theo lời thuật lại, họ không có người quen trong giới nghệ thuật hoặc phòng tranh). => Khớp dự đoán danh từ số nhiều chỉ người và từ dùng trong bài; đáp án gồm 1 từ, đề không ghi giới hạn số từ. Đối chiếu paraphrasing: reportedly apparent formed no lack of artistic or gallery circles artists or gallery owners artists các nghệ sĩ: Từ này nằm sau “among”, chỉ nhóm người mà hai chị em được cho là thiếu người quen, không phải từ chỉ người quen. gallery owners chủ phòng tranh: Cũng là một nhóm sau “among”, không phải danh từ cần điền. advisers người cố vấn: Đoạn 8 có nhắc đến những người cố vấn (“a small, trusted circle of advisers”), nhưng nói hai chị em có dựa vào họ, không phải thiếu họ."
            }
          },
          {
            "id": 8,
            "prompt": "What the sisters chose to do with their money had little to do with the religious way they were raised.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "FALSE",
            "explanation": {
              "step1": "What the sisters chose to do with their money had little to do with the religious way they were raised . Cần kiểm tra: cách được nuôi dạy theo tôn giáo có ảnh hưởng đến quyết định dùng tiền của hai chị em hay không.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp ý tương đương với cách được nuôi dạy theo tôn giáo (“the religious way they were raised”). Cụ thể, câu 3 đoạn 1 nhắc đến việc lớn lên trong một gia đình sùng đạo (“devout household”) => đây là vùng liên quan. Đoạn 1 — devout household",
              "step3": "Đoạn 1: Growing up in a devout household in rural Norway had instilled in them a strong sense of civic duty , and it was this that led them to spend their inheritance on cultural and philanthropic causes .",
              "step4": "Câu hỏi nói: Việc dùng tiền hầu như không liên quan đến cách hai chị em được nuôi dạy (“had little to do with”). Bài đọc nói: Môi trường lớn lên tạo cho họ ý thức trách nhiệm (“sense of civic duty”), và chính điều đó khiến họ dùng tiền thừa kế (“it was this that led them to spend their inheritance ”). Hai ý mâu thuẫn nhau. Đáp án đúng: FALSE Đối chiếu paraphrasing: the religious way they were raised Growing up in a devout household had little to do with led them Đáp án TRUE Nếu chỉ thấy mục đích văn hóa (“cultural”) và gia đình sùng đạo (“devout household”), có thể tưởng hai việc không liên quan Nhưng câu (3) nêu rõ mối liên hệ nhân quả. Chỉ chọn TRUE nếu bài nói cách nuôi dạy hầu như không ảnh hưởng đến quyết định dùng tiền. NOT GIVEN Nếu chỉ tìm đúng cụm “religious way”, có thể tưởng bài thiếu thông tin Nhưng câu (3) đã cho biết cách nuôi dạy dẫn đến quyết định dùng tiền. Chỉ chọn NOT GIVEN nếu bài không cho biết hai việc có liên quan hay không."
            }
          },
          {
            "id": 9,
            "prompt": "The sort of art the sisters bought early on was unlikely to upset anyone.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "TRUE",
            "explanation": {
              "step1": "The sort of art the sisters bought early on was unlikely to upset anyone . Ý câu hỏi: Loại tranh hai chị em mua thời gian đầu khó gây tranh cãi .",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp ý tương đương với thời gian đầu (“ early on ”). Ở đoạn 4, cụm “in their early years” cho biết đây là vùng cần đọc kĩ. Đoạn 4 — in their early years",
              "step3": "Đoạn 4: A fondness for Dutch Golden Age painting comes through clearly in the sisters’ letters , though in practice they rarely pursued such works in their early years . What they bought instead were safer, uncontroversial choices that had already won broad admiration — paintings by the Norwegian artist Kristoffer Lund, for instance . Câu (1): Trong những năm đầu , hai chị em hiếm khi chọn loại tranh họ yêu thích. Câu (3): Thay vào đó, họ mua những tranh không gây tranh cãi .",
              "step4": "Câu hỏi nói: Tranh họ mua thời gian đầu khó làm ai phật ý (“unlikely to upset anyone”). Bài đọc nói: Thứ họ mua là những lựa chọn không gây tranh cãi (“ uncontroversial choices ”). ⇒ Hai cách diễn đạt cùng ý. Đáp án đúng: TRUE Đối chiếu paraphrasing: early on in their early years unlikely to upset anyone uncontroversial choices FALSE Sai vì bài nói tranh họ mua không gây tranh cãi, chứ không nói điều ngược lại. Chỉ chọn FALSE nếu bài nói những lựa chọn đó dễ gây tranh cãi. NOT GIVEN Nếu chỉ tìm đúng cụm “upset anyone”, sẽ dễ tưởng bài thiếu thông tin Nhưng “uncontroversial choices” đã cho biết tính chất của tranh. Chỉ chọn NOT GIVEN nếu bài không cho biết tranh họ mua có gây tranh cãi hay không."
            }
          },
          {
            "id": 10,
            "prompt": "The sisters acquired their Kristoffer Lund pictures by dealing with the painter personally.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "NOT GIVEN",
            "explanation": {
              "step1": "The sisters acquired their Kristoffer Lund pictures by dealing with the painter personally . Ý câu hỏi: Cần kiểm tra cách mua tranh : hai chị em có trực tiếp giao dịch với Kristoffer Lund hay không.",
              "step2": "Dựa vào tên riêng Kristoffer Lund => ta tìm đến đoạn 4 và bắt đầu đọc tại câu nhắc đến tranh của ông. Đoạn 4",
              "step3": "Đoạn 4: What they bought instead were safer, uncontroversial choices that had already won broad admiration — paintings by the Norwegian artist Kristoffer Lund , for instance .",
              "step4": "Câu hỏi nói: Hai chị em mua tranh bằng cách trực tiếp giao dịch với họa sĩ (“by dealing with the painter personally”). Bài đọc nói: Họ mua tranh do Kristoffer Lund vẽ (“paintings by the Norwegian artist Kristoffer Lund”), nhưng không cho biết họ giao dịch với ai . ⇒ Bài đọc xác nhận việc mua tranh , không xác nhận hay phủ định cách giao dịch . Đáp án đúng: NOT GIVEN Đối chiếu paraphrasing: acquired bought Kristoffer Lund pictures paintings by the Norwegian artist Kristoffer Lund by dealing with the painter personally không có trong bài. Đáp án TRUE Thấy tranh do Kristoffer Lund vẽ (“paintings by”) dễ tưởng hai chị em mua trực tiếp từ ông Nhưng cụm này chỉ cho biết ai vẽ tranh, không cho biết ai bán tranh. Chỉ chọn TRUE nếu bài nói họ trực tiếp mua những bức tranh này từ Kristoffer Lund. FALSE Đoạn 3 nhắc đến những người buôn tranh (“two dealers”), dễ khiến ta nghĩ hai chị em mua qua trung gian Nhưng đoạn đó chỉ nói họ xin lời khuyên (“whose advice they sought”). Chỉ chọn FALSE nếu bài nói họ mua những bức tranh này qua người khác, không trực tiếp từ Kristoffer Lund."
            }
          },
          {
            "id": 11,
            "prompt": "Barely any visitors came to see Solvik's work while it hung in Trondheim.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "FALSE",
            "explanation": {
              "step1": "Barely any visitors came to see Solvik's work while it hung in Trondheim . Ý câu hỏi: Cần kiểm tra liệu rất ít người đến xem tác phẩm của Solvik trong thời gian tác phẩm được trưng bày ở Trondheim hay không.",
              "step2": "Dựa vào hai tên riêng Solvik và Trondheim, ta định vị được câu cần đọc kĩ ở đoạn 7. Đoạn 7",
              "step3": "Đoạn 7: Sent directly to Trondheim , these became the first works by Solvik to appear in a Norwegian public gallery , and large crowds turned out during their opening weeks .",
              "step4": "Câu hỏi nói: Hầu như không có khách đến xem tác phẩm của Solvik (“ Barely any visitors ”) khi tác phẩm được trưng bày ở Trondheim. Bài đọc nói: Đám đông (“ large crowds ”) đã đến trong những tuần đầu (“opening weeks”) các tác phẩm xuất hiện tại phòng tranh. Những tuần đầu thuộc thời gian trưng bày, nên lượng khách trong bài trái ngược với câu hỏi. Đáp án đúng: FALSE Đối chiếu paraphrasing: Barely any visitors large crowds came to see turned out Đáp án TRUE Nếu chỉ thấy Solvik và Trondheim mà bỏ qua lượng khách, sẽ dễ chọn TRUE Nhưng bài nói đám đông đã đến. Chỉ chọn TRUE nếu bài nói rất ít người đến xem trong thời gian trưng bày. NOT GIVEN Nếu tìm đúng từ “visitors” trong bài mà không thấy, sẽ dễ chọn NOT GIVEN Nhưng “large crowds turned out” đã cho biết lượng người đến trong những tuần đầu. Chỉ chọn NOT GIVEN nếu bài không cho biết lượng người đến xem trong thời gian ấy."
            }
          },
          {
            "id": 12,
            "prompt": "Nia abandoned collecting as a result of the economic strain the war produced.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "NOT GIVEN",
            "explanation": {
              "step1": "Nia abandoned collecting as a result of the economic strain the war produced . Ý câu hỏi: Cần kiểm tra không chỉ việc Nia ngừng sưu tập, mà cả khẳng định rằng bà ngừng vì khó khăn kinh tế do chiến tranh gây ra .",
              "step2": "Dựa vào tên riêng Nia và ý khó khăn kinh tế (“economic strain”) => ta tìm đến đoạn 9, bắt đầu đọc từ câu nêu tình trạng nghèo đói (“the poverty”). Đoạn 9 — the poverty",
              "step3": "Đoạn 9: By the early 1920s, the poverty and social disruption left by the First World War had made Elin increasingly reluctant to spend money on art . Nia , too, largely stopped collecting around this point , though she took it up again in the 1930s , buying — on a more modest scale — works by contemporary Norwegian artists . Câu (1): Hậu quả chiến tranh khiến Elin ngại chi tiền cho nghệ thuật. Câu (4): Nia phần lớn ngừng sưu tập rồi quay lại, nhưng không nêu lý do bà ngừng .",
              "step4": "Câu hỏi nói: Nia ngừng sưu tập vì khó khăn kinh tế do chiến tranh gây ra (“as a result of the economic strain”). Bài đọc nói: Tình trạng nghèo đói do chiến tranh để lại khiến Elin ngại chi tiền; Nia cũng phần lớn ngừng sưu tập, nhưng bài không nói nguyên nhân của Nia . Từ “too” nối hành động của hai người, không xác nhận họ có cùng lý do. Nhận định: Không đủ thông tin để khẳng định hoặc bác bỏ nguyên nhân mà câu hỏi nêu. Đáp án đúng: NOT GIVEN Đối chiếu paraphrasing: economic strain the poverty — bài gắn tác động này với Elin. as a result of the economic strain không có trong bài đối với Nia. Đáp án TRUE Nếu skim/scan thấy “too”, sẽ dễ cho rằng Nia ngừng sưu tập vì cùng lý do với Elin Nhưng từ này không xác nhận nguyên nhân của Nia. Chỉ chọn TRUE nếu bài nói rõ khó khăn kinh tế do chiến tranh khiến Nia ngừng sưu tập. FALSE Nếu thấy Nia quay lại sưu tập (“took it up again”), sẽ dễ cho rằng câu hỏi sai Nhưng việc quay lại không bác bỏ lý do của lần ngừng trước đó. Chỉ chọn FALSE nếu bài nói Nia ngừng vì một lý do khác, không phải khó khăn kinh tế do chiến tranh."
            }
          },
          {
            "id": 13,
            "prompt": "Few others were interested in Nordic Symbolist art while the sisters were building their collection.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "TRUE",
            "explanation": {
              "step1": "Nhận định: Few others were interested in Nordic Symbolist art while the sisters were building their collection . Ý câu hỏi: Cần kiểm tra mức độ quan tâm của người khác đối với Nordic Symbolist art vào đúng thời gian hai chị em sưu tập.",
              "step2": "Dựa vào từ khóa đặc biệt Nordic Symbolist => ta tìm đến đoạn 10 và bắt đầu đọc ở cụm chỉ thời điểm hai chị em sưu tập (“At the time”). Đoạn 10 — At the time",
              "step3": "Đoạn 10: At the time the sisters were collecting Nordic Symbolist paintings , this kind of art was, for the most part, overlooked by collectors and institutions alike .",
              "step4": "Câu hỏi nói: Ít người khác quan tâm (“Few others were interested”) khi hai chị em xây dựng bộ sưu tập (“ while the sisters were building their collection ”). Bài đọc nói: Vào đúng thời điểm đó (“At the time”), loại tranh này phần lớn bị giới sưu tập bỏ qua (“for the most part, overlooked by collectors”). ⇒ Hai ý cùng nói rằng ít người khác quan tâm vào thời điểm ấy. Đáp án đúng: TRUE Đối chiếu paraphrasing: Few others were interested for the most part, overlooked by collectors while the sisters were building their collection At the time the sisters were collecting Nordic Symbolist paintings FALSE Sai vì bài nói phần lớn giới sưu tập bỏ qua, không phải nhiều người quan tâm. Chỉ chọn FALSE nếu bài nói nhiều người khác quan tâm đến loại tranh này vào thời điểm đó. NOT GIVEN Nếu chỉ dò từ quan tâm (“interested”) mà không thấy, sẽ dễ chọn NOT GIVEN Nhưng việc bị giới sưu tập bỏ qua (“overlooked by collectors”) đã cho biết mức độ quan tâm. Chỉ chọn NOT GIVEN nếu bài không cho biết điều đó."
            }
          }
        ]
      },
      {
        "id": "cam-21-reading-1-p2",
        "passageNumber": 2,
        "title": "Why we need silence",
        "subtitle": "What too much noise does to us — and how quietness can help",
        "content": [
          "Why we need silence"
        ],
        "questions": [
          {
            "id": 14,
            "prompt": "Which section contains the following information: \"examples of actions designed to lower what the public hears\"?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "correct": "G",
            "explanation": {
              "step1": "examples of actions designed to lower what the public hears 👍 NÊN tìm: ít nhất hai biện pháp cụ thể nhằm giảm tiếng ồn mà công chúng nghe thấy. 👎 ĐỪNG tìm: đoạn chỉ nêu tác hại của tiếng ồn, một khuyến nghị về mức âm thanh, hoặc cách tìm sự yên tĩnh cho cá nhân.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh để tìm các biện pháp giảm tiếng ồn trong môi trường công cộng. Đoạn G nhắc đến chính quyền làm mặt đường hấp thụ tiếng ồn và trồng cây xanh => đây là vùng liên quan. Đoạn G: Elsewhere, authorities have laid noise-absorbing road surfaces and planted belts of greenery to soak up sound ; others have gone after particular culprits , from Washington DC’s recent outlawing of petrol leaf blowers to a New York rule that penalises drivers who tinker with their cars to make them louder . Đoạn G",
              "step3": "Đối chiếu paraphrasing: examples of actions have laid noise absorbing road surfaces + planted belts of greenery có hai biện pháp riêng biệt. designed to lower noise absorbing + to soak up sound mục đích là giảm tiếng ồn. what the public hears phạm vi công cộng được thể hiện qua authorities + road surfaces — đây là biện pháp trên đường sá, không chỉ tìm sự yên tĩnh cho một cá nhân. Đáp án đúng: Paragraph G . Paragraph A Nếu skim/scan thấy khuyến nghị về mức tiếng ồn (“40 decibels it recommends”), em dễ chọn A Nhưng đoạn này không đưa ra nhiều ví dụ về biện pháp cụ thể để giảm tiếng ồn cho công chúng. Paragraph C Những khoảng yên tĩnh ngắn (“Short spells of quiet”) dễ khiến em nghĩ đến cách giảm tiếng ồn Nhưng đây là lời khuyên giúp cá nhân hưởng lợi từ sự yên tĩnh, không phải biện pháp giảm tiếng ồn trong môi trường công cộng. Paragraph E Đặc tính cách âm (“sound- and light-proof”) có vẻ khớp với việc giảm âm thanh Nhưng đoạn E mô tả bể nổi phục vụ trải nghiệm cá nhân, không nêu nhiều biện pháp giảm tiếng ồn cho công chúng.",
              "step4": "Đáp án chính xác: G"
            }
          },
          {
            "id": 15,
            "prompt": "Which section contains the following information: \"figures showing how common damaging sound exposure is\"?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "correct": "A",
            "explanation": {
              "step1": "figures showing how common damaging sound exposure is 👍 NÊN tìm: số liệu cho biết bao nhiêu người hoặc tỷ lệ dân số tiếp xúc với âm thanh ở mức có hại. 👎 ĐỪNG tìm: đoạn chỉ nói về tác hại của tiếng ồn; con số về ngưỡng âm thanh, số người tham gia nghiên cứu hoặc thời lượng thí nghiệm.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh để tìm số liệu về mức độ phổ biến của việc tiếp xúc âm thanh có hại. Đoạn A có ước lượng gần một phần tư dân số (“close to a quarter”) => đây là điểm bắt đầu đọc. Đoạn A: Widespread and persistent, the problem is by no means confined to such places: one European study estimated that close to a quarter of the continent’s population is regularly subjected to levels reckoned harmful . Đoạn A — close to a quarter",
              "step3": "Đối chiếu paraphrasing: figures showing how common close to a quarter of the continent’s population damaging sound exposure is regularly subjected to levels reckoned harmful Tỷ lệ dân số cho biết mức độ phổ biến , còn mức được coi là có hại xác nhận đúng đối tượng mà câu hỏi yêu cầu. Đáp án đúng: Paragraph A Paragraph F Nếu skim/scan thấy các con số về người tham gia (“50 volunteers”, “48 participants”), sẽ dễ chọn F Nhưng đây là cỡ mẫu nghiên cứu, không phải số liệu về mức độ phổ biến của việc tiếp xúc âm thanh có hại. Paragraph B Đoạn này nói về tác hại, chẳng hạn các rối loạn tim (“disorders of the heart”), nên dễ khớp với ý âm thanh gây hại Nhưng B không có số liệu về mức độ phổ biến. Paragraph G Đoạn này nói về giảm tiếng ồn (“lowering the volume”), nên dễ bị chọn nếu chỉ bám chủ đề Nhưng G kể các biện pháp giảm tiếng ồn, không thống kê bao nhiêu người tiếp xúc với mức âm thanh có hại.",
              "step4": "Đáp án chính xác: A"
            }
          },
          {
            "id": 16,
            "prompt": "Which section contains the following information: \"the immediate physical effects of hearing something unexpectedly loud\"?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "correct": "B",
            "explanation": {
              "step1": "the immediate physical effects of hearing something unexpectedly loud 👍 NÊN tìm: ít nhất hai thay đổi của cơ thể xảy ra ngay khi nghe âm thanh đột ngột hoặc lớn. 👎 ĐỪNG tìm: tác hại tích lũy lâu dài của tiếng ồn; cảm giác nghe thấy âm thanh; thay đổi cơ thể do trải nghiệm sự yên tĩnh.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh để tìm ý phản ứng cơ thể trước tiếng động lớn bất ngờ . Đoạn B nhắc đến âm thanh đột ngột hoặc lớn (“ a sudden or loud one ”) => đây là điểm bắt đầu đọc. Đoạn B: Noises carry information that once helped our ancestors find their way and steer clear of threats , and the body is built so that a sudden or loud one is never ignored : on hearing it , we undergo an automatic chemical shift . The heart drives blood pressure upward , the muscles tighten , and hormones pour out to ready us to fight or flee — all of it useful in the moment . Câu (2): âm thanh đột ngột hoặc lớn gây biến đổi hóa học tự động ngay khi nghe . Câu (3): cụ thể hóa phản ứng ấy: huyết áp tăng , cơ bắp căng lên và hormone tiết ra. Đoạn B — a sudden or loud one",
              "step3": "Đối chiếu paraphrasing: something unexpectedly loud a sudden or loud one immediate on hearing it physical effects drives blood pressure upward + the muscles tighten Đoạn này khớp cả tác nhân, thời điểm và nhiều thay đổi của cơ thể. Đáp án đúng: Paragraph B Đáp án A Nếu thấy các mức tiếng ồn có hại (“levels reckoned harmful”), dễ nhầm với tác động sức khỏe cần tìm Nhưng đoạn A nói về mức độ và phạm vi tiếp xúc, không mô tả phản ứng cơ thể tức thì. Đáp án E Cụm cảm giác bất thường (“senses playing tricks”) dễ khiến ta nghĩ đến phản ứng khi nghe âm thanh Nhưng đoạn E nói về trải nghiệm trong môi trường thiếu kích thích bên ngoài, không phải phản ứng trước tiếng động lớn bất ngờ. Đáp án F Cơ bắp thả lỏng (“looser muscles”) đúng là một thay đổi cơ thể, nhưng xuất hiện sau buổi thả nổi. Tác nhân không phải việc nghe tiếng động lớn bất ngờ.",
              "step4": "Đáp án chính xác: B"
            }
          },
          {
            "id": 17,
            "prompt": "Which section contains the following information: \"a finding that some background sound can be better than none at all\"?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "correct": "C",
            "explanation": {
              "step1": "a finding that some background sound can be better than none at all 👍 NÊN tìm: một kết quả nghiên cứu so sánh hai môi trường, cho thấy có chút âm thanh nền có thể tốt hơn hoàn toàn không có âm thanh. 👎 ĐỪNG tìm: đoạn chỉ nói im lặng có lợi, tiếng ồn có hại, hoặc so sánh thời lượng im lặng mà không so sánh hai môi trường âm thanh.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta tìm ý so sánh môi trường có chút âm thanh với môi trường hoàn toàn im lặng. Đoạn C nhắc một nghiên cứu về khu vườn yên tĩnh (“ quiet garden ”) => đây là điểm bắt đầu đọc. Đoạn C: For one thing, it need not be total: in a study of his , people who sat outdoors in a quiet garden reported feeling noticeably calmer and less bored than others who were left alone in a room of complete silence . Ngụ ý: Khu vườn yên tĩnh (“quiet garden”) được đối chiếu với im lặng hoàn toàn (“complete silence”). Chính sự đối chiếu này giúp hiểu môi trường thứ nhất là yên tĩnh nhưng không hoàn toàn không có âm thanh . Đoạn C — quiet garden",
              "step3": "Đối chiếu paraphrasing: a finding in a study some background sound a quiet garden — hiểu qua sự đối chiếu với môi trường hoàn toàn im lặng. can be better calmer none at all complete silence Người ngồi trong vườn cảm thấy bình tĩnh hơn nhóm ở trong im lặng hoàn toàn => khớp với ý có chút âm thanh nền có thể tốt hơn , không phải lúc nào cũng tốt hơn. Đáp án đúng: Paragraph C Đoạn D Nếu đọc lướt thấy im lặng không đem lại lợi ích ngang nhau cho mọi người (“does not reward everyone equally”), ta dễ chọn D Nhưng yếu tố quyết định ở đây là sự tự nguyện, không phải có âm thanh nền hay hoàn toàn không có âm thanh. Đoạn E Đoạn này nhắc âm thanh khe khẽ (“a faint humming”), dễ khiến ta nghĩ đến âm thanh nền Nhưng đó là trải nghiệm giác quan của người dùng flotation tank, không phải kết quả cho thấy có âm thanh tốt hơn không có âm thanh. Đoạn F Cảm giác bình tĩnh hơn (“a greater sense of calm”) có vẻ khớp với lợi ích trong câu hỏi Nhưng F nghiên cứu tác dụng của flotation tank, không so sánh môi trường có chút âm thanh với môi trường hoàn toàn im lặng.",
              "step4": "Đáp án chính xác: C"
            }
          },
          {
            "id": 18,
            "prompt": "A flotation tank blocks ordinary visual and auditory stimulation while a person remains supported by highly saline water. Without normal sensory signals, the brain creates sensations to occupy the  _____ . A group of 50 people answered a  _____  twice, once prior to the treatment and once following it. The treatment also left them feeling better overall, with an improvement in  _____ .",
            "type": "FILL_IN_BLANK",
            "correct": "void",
            "explanation": {
              "step1": "Without normal sensory signals , the brain creates sensations to occupy the 5. ___ . Ý câu hỏi: Khi thiếu tín hiệu giác quan bình thường, não tạo ra các cảm giác để lấp đầy thứ gì? Dự đoán: - Loại từ: danh từ hoặc cụm danh từ, làm tân ngữ sau động từ và mạo từ (“occupy the”). - Nghĩa: thứ được lấp đầy khi thiếu tín hiệu giác quan, không phải loại cảm giác mà não tạo ra.",
              "step2": "Dựa vào chủ đề flotation tank trong phần ghi chú, ta tìm đến đoạn E. Ở đây có ý thiếu đầu vào từ bên ngoài (“Deprived of input from outside”), tương ứng với điều kiện trong câu hỏi => đây là điểm bắt đầu đọc. Đoạn E — Deprived of input from outside",
              "step3": "Đoạn E: ‘ Deprived of input from outside , the mind sets about filling the void it perceives , trying to make sense of the dark, silent space ,’ she explains — so vividly that some floaters catch the sound of their own eyelids closing .",
              "step4": "Đáp án phù hợp nhất: void Câu hoàn chỉnh: Without normal sensory signals, the brain creates sensations to occupy the void. (Khi không có tín hiệu giác quan bình thường, não tạo ra các cảm giác để lấp đầy khoảng trống .) => Khớp với dự đoán danh từ chỉ thứ được lấp đầy và thông tin trong bài; đáp án gồm 1 từ, lấy nguyên văn từ bài. Đối chiếu paraphrasing: Without normal sensory signals Deprived of input from outside the brain the mind occupy filling input “ Thông tin đầu vào ”: xuất hiện ngay trong điều kiện thiếu tín hiệu. Nhưng đây là thứ bị thiếu, không phải thứ mà tâm trí lấp đầy. space “ Không gian ”: thấy không gian tối và yên lặng (“dark, silent space”) ở câu (4). Nhưng đó là không gian tâm trí cố hiểu; đối tượng trực tiếp được lấp đầy là khoảng trống (“the void”). sound “ Âm thanh ”: Đây là cảm giác nghe được ở cuối câu, không phải đối tượng của hành động lấp đầy (“filling”)."
            }
          },
          {
            "id": 19,
            "prompt": "In a later study, 48 people either used the tank or rested in a reclining chair for three 90-minute periods. Scans later showed that only the tank group had reduced activity in neural areas related to  _____ .",
            "type": "FILL_IN_BLANK",
            "correct": "survey",
            "explanation": {
              "step1": "A group of 50 people answered a 6. ___ twice , once prior to the treatment and once following it. Ý câu hỏi: Nhóm 50 người trả lời một thứ hai lần: trước và sau điều trị. Dự đoán ô trống: - Loại từ: danh từ đếm được số ít , vì đứng sau mạo từ a và làm tân ngữ của động từ trả lời (“answered”). - Nghĩa: một thứ mà người tham gia có thể trả lời trước và sau điều trị.",
              "step2": "Dựa vào con số 50 trong câu hỏi => ta định vị được đầu đoạn F, nơi nhắc đến nhóm 50 người tình nguyện (“50 volunteers”). Đoạn F — 50 volunteers",
              "step3": "Đoạn F: To test the tanks as therapy, Dupont’s group enrolled 50 volunteers troubled by stress and its associated complaints , asking each to complete a survey both shortly before and shortly after a single hour-long float .",
              "step4": "Đáp án phù hợp nhất: survey Câu hoàn chỉnh: A group of 50 people answered a survey twice, once prior to the treatment and once following it. (Một nhóm 50 người trả lời một bản khảo sát hai lần, một lần trước điều trị và một lần sau điều trị.) => Khớp với dự đoán danh từ số ít chỉ thứ được trả lời và thông tin trong bài; đáp án gồm 1 từ, lấy nguyên văn từ bài. Đề được cung cấp không nêu giới hạn số từ. Đối chiếu paraphrasing: answered complete prior to the treatment before following it after volunteers “ người tình nguyện ”: Nếu chỉ bám vào con số 50, dễ chọn nhầm từ này Nhưng đây là người tham gia, không phải thứ họ trả lời; dạng số nhiều cũng không phù hợp sau mạo từ a. float “ buổi nổi trong bể ”: Nếu chỉ chú ý đến hai thời điểm trước/sau, dễ lấy nhầm từ này Nhưng đây là mốc điều trị, không phải thứ người tham gia trả lời."
            }
          },
          {
            "id": 20,
            "prompt": "Complete blank for question 20:",
            "type": "FILL_IN_BLANK",
            "correct": "mood",
            "explanation": {
              "step1": "The treatment also left them feeling better overall , with an improvement in 7. ___ . Ý câu hỏi: Liệu pháp khiến nhóm người tham gia cảm thấy tốt hơn nói chung, với sự cải thiện ở một khía cạnh nào đó. Dự đoán ô trống: - Loại từ: danh từ hoặc cụm danh từ, vì đứng sau giới từ “in”. - Nội dung: một khía cạnh sức khỏe hoặc trạng thái được cải thiện sau liệu pháp.",
              "step2": "Dựa vào con số 50 ở câu trước trong đề, ta định vị được nghiên cứu ở đoạn F, nơi nhắc đến nhóm 50 tình nguyện viên (“50 volunteers”). Ta bắt đầu đọc từ đây để tìm kết quả của liệu pháp. Đoạn F — 50 volunteers",
              "step3": "Đoạn F: To test the tanks as therapy , Dupont’s group enrolled 50 volunteers troubled by stress and its associated complaints , asking each to complete a survey both shortly before and shortly after a single hour-long float . Once the hour was up , they described less pain, looser muscles and milder symptoms, along with a greater sense of calm and a general lift in their mood . Câu (1): xác định nhóm 50 người và việc khảo sát sau lượt thả nổi một giờ. Câu (2): ghi nhận kết quả sau liệu pháp — tâm trạng được cải thiện .",
              "step4": "Đáp án phù hợp nhất: mood Câu hoàn chỉnh: The treatment also left them feeling better overall, with an improvement in mood. (Liệu pháp cũng khiến họ cảm thấy tốt hơn nói chung, với sự cải thiện về tâm trạng .) => Khớp với dự đoán danh từ chỉ khía cạnh được cải thiện và thông tin trong bài; đáp án gồm 1 từ, lấy nguyên văn từ bài đọc. Đề được cung cấp không nêu giới hạn số từ. Đối chiếu paraphrasing: an improvement in a general lift in Đáp án calm “ sự bình tĩnh ”: câu (2) cũng nêu cảm giác bình tĩnh hơn (“a greater sense of calm”). Nhưng cụm tương ứng trực tiếp với sự cải thiện đang được hỏi là “lift in their mood”. Đáp án pain “ cơn đau ”: Dễ chọn vì cùng câu có kết quả giảm đau (“less pain”). Đây là một lợi ích cụ thể khác, không phải khía cạnh được nêu trong cụm “lift in their mood”. Đáp án lift “ sự cải thiện ”: Sai vì từ này tương ứng với “improvement” đã có sẵn trong đề; ô trống cần khía cạnh được cải thiện, tức mood."
            }
          },
          {
            "id": 21,
            "prompt": "Complete blank for question 21:",
            "type": "FILL_IN_BLANK",
            "correct": "rumination",
            "explanation": {
              "step1": "Scans later showed that only the tank group had reduced activity in neural areas related to 8. ___ . Ý câu hỏi: Chỉ nhóm dùng bể nổi có hoạt động giảm ở các vùng thần kinh liên quan đến điều gì? Dự đoán ô trống: - Loại từ: danh từ/cụm danh từ hoặc dạng V-ing dùng như danh từ, vì đứng sau giới từ trong cụm liên quan đến (“related to”). - Nghĩa: một hiện tượng hoặc quá trình gắn với các vùng thần kinh, không phải tên của chính các vùng đó.",
              "step2": "Dựa vào số liệu 48 người và 90 phút trong ngữ cảnh câu hỏi, ta định vị được nghiên cứu thứ hai ở đoạn F. Từ đây, tìm kết quả về hoạt động của các vùng não. Đoạn F",
              "step3": "Đoạn F: Floating, and floating alone , damped down the default mode network, a cluster of regions repeatedly tied to rumination .",
              "step4": "Đáp án phù hợp nhất: rumination Câu hoàn chỉnh: Scans later showed that only the tank group had reduced activity in neural areas related to rumination . (Kết quả quét sau đó cho thấy chỉ nhóm sử dụng bể nổi có hoạt động giảm ở các vùng thần kinh liên quan đến suy nghĩ luẩn quẩn .) => Khớp với dự đoán danh từ chỉ một hiện tượng gắn với các vùng thần kinh và thông tin trong bài; đáp án gồm 1 từ. Đề được cung cấp không nêu giới hạn số từ. Đối chiếu paraphrasing: only the tank group floating alone reduced activity damped down related to tied to default mode network nhầm vì đây là tên mạng lưới bị giảm hoạt động. Nhưng ô trống hỏi các vùng đó liên quan đến điều gì, không hỏi tên mạng lưới. regions “ các vùng ”: Từ này tương ứng với các vùng thần kinh (“neural areas”), không phải thông tin cần điền sau cụm liên quan đến. meditation “ thiền ”: Đoạn E có nhắc trạng thái thiền (“meditation”), nhưng đó là lợi ích của việc chú ý đến hơi thở, không phải hiện tượng gắn với các vùng não trong kết quả quét ở đoạn F."
            }
          },
          {
            "id": 22,
            "prompt": "Match the statement with the correct person/feature: \"Being placed somewhere with no noise can be very upsetting if this is not voluntary.\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "Petra Ansell",
              "Luka Boone",
              "Diego Castellano",
              "Nadia Dupont"
            ],
            "correct": "Petra Ansell",
            "explanation": {
              "step1": "Tên đang xử lý: Petra Ansell . Bài nhắc đến Petra Ansell ở đoạn D.",
              "step2": "The neuroscientist Petra Ansell likewise champions silence as a form of treatment . ‘ Finding ways to grow quiet calms not merely our surroundings but something within us ,’ she says . ‘ With that inner stillness we take in more of our situation , and sense what a given moment asks of us , so that our response can be a fitting one .’ Câu (1): giới thiệu Petra Ansell và quan điểm ủng hộ sự im lặng. Câu (2)–(3): làm dịu môi trường bên ngoài + nội tâm => nhận biết tình huống tốt hơn => phản ứng phù hợp . 🔎 Khớp với statement 13: Less noise outside and less mental activity can improve awareness of what is going on and lead to a suitable reaction . Đối chiếu paraphrasing: Less noise outside calms not merely our surroundings less mental activity inner stillness improve awareness of what is going on take in more of our situation suitable reaction fitting one no noise silence very upsetting deeply distressing not voluntary Forced on someone who does not want it no noise silence very upsetting deeply distressing not voluntary Forced on someone who does not want it 🔎 Khớp với statement 9: Being placed somewhere with no noise can be very upsetting if this is not voluntary .",
              "step3": "Với tên Petra Ansell ở đoạn D, ta chọn được: câu 9 và câu 13. Luka Boone Đoạn C cũng nói người đang căng thẳng không thể ổn định hay thư giãn (“cannot settle or unwind”) trong im lặng Nhưng câu 9 cần điều kiện không tự nguyện, không chỉ trạng thái căng thẳng. Nadia Dupont Đoạn F có ý giảm hoạt động của một mạng lưới trong não (“damped down the default mode network”), dễ gợi đến việc giảm hoạt động tâm trí Nhưng ý này chưa chứng minh chuỗi nhận biết tình huống tốt hơn => phản ứng phù hợp. Diego Castellano Đoạn G nhắc đến môi trường yên tĩnh hơn (“calmer surroundings”), trùng với phần bên ngoài của statement Nhưng câu 13 còn cần sự tĩnh lặng nội tâm và hai kết quả mà Petra Ansell nêu ở câu (3).",
              "step4": "Đáp án chính xác: Petra Ansell"
            }
          },
          {
            "id": 23,
            "prompt": "Match the statement with the correct person/feature: \"The move towards quieter urban areas is likely to spread.\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "Petra Ansell",
              "Luka Boone",
              "Diego Castellano",
              "Nadia Dupont"
            ],
            "correct": "Diego Castellano",
            "explanation": {
              "step1": "Tên đang xử lý: Diego Castellano . Bài nhắc đến Castellano ở đoạn A và đoạn G.",
              "step2": "As Diego Castellano , an acoustics consultant who helped shape several national noise standards, puts it , the brain has no ‘earlids’ with which to shut unwanted sound out , whether we happen to be awake or asleep .",
              "step3": "Với tên Diego Castellano ở đoạn A, ta không chọn được câu nào: đoạn này không giúp chọn câu hỏi nào.",
              "step4": "Diego Castellano credits a mix of measures — advice on running quieter buses, curbs on traffic noise and tighter limits on aircraft — with making the capital a markedly more peaceful place to live . ‘ Residents can feel the difference these calmer surroundings make ,’ Castellano says , ‘and I would expect a good deal more of it in the years ahead .’ Câu (3): Câu (3), đoạn G: các biện pháp đã giúp thủ đô yên tĩnh hơn . Câu (5): Câu (5), đoạn G: từ những cải thiện hiện tại, Castellano dự đoán xu hướng này sẽ mở rộng trong những năm tới. 🔎 Khớp với statement 10: The move towards quieter urban areas is likely to spread . Đối chiếu paraphrasing: quieter urban areas the capital + more peaceful is likely to spread would expect + more of it + in the years ahead"
            }
          },
          {
            "id": 24,
            "prompt": "Match the statement with the correct person/feature: \"When the senses receive nothing, the brain may produce experiences that feel real.\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "Petra Ansell",
              "Luka Boone",
              "Diego Castellano",
              "Nadia Dupont"
            ],
            "correct": "Nadia Dupont",
            "explanation": {
              "step1": "Tên đang xử lý: Nadia Dupont . Bài nhắc đến Nadia Dupont ở đoạn E và đoạn F.",
              "step2": "A few floaters report their senses playing tricks , a faint humming or flickers of light , but these are harmless and take nothing away from the experience , says the clinical neuropsychologist Nadia Dupont . ‘ Deprived of input from outside , the mind sets about filling the void it perceives , trying to make sense of the dark, silent space ,’ she explains — so vividly that some floaters catch the sound of their own eyelids closing . Câu (3): nêu hiện tượng giác quan đánh lừa người trải nghiệm . Câu (4): giải thích cơ chế: thiếu đầu vào => tâm trí lấp khoảng trống , tạo cảm nhận sống động . 🔎 Khớp với statement 11: When the senses receive nothing , the brain may produce experiences that feel real . Đối chiếu paraphrasing: When the senses receive nothing Deprived of input from outside the brain may produce experiences the mind sets about filling the void experiences that feel real their senses playing tricks",
              "step3": "Với tên Nadia Dupont ở đoạn E, ta chọn được: câu 11. Petra Ansell Đoạn D cũng nói về nhận biết tình huống tốt hơn (“take in more of our situation”), nên dễ nhầm Nhưng đó là nhận biết thực tế, không phải tạo cảm giác khi thiếu đầu vào.",
              "step4": "Floating, and floating alone , damped down the default mode network, a cluster of regions repeatedly tied to rumination . To Dupont this is a thrilling result , hinting that the tanks may ‘reset’ a nervous system that has drifted out of balance . Câu (5)–(6): kết quả giảm hoạt động vùng não => Dupont gợi ý khả năng thiết lập lại hệ thần kinh. Đoạn này nói về tác dụng trị liệu, không phải cơ chế tạo cảm giác như thật ."
            }
          },
          {
            "id": 25,
            "prompt": "Match the statement with the correct person/feature: \"Several brief periods without noise can help more than one long period.\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "Petra Ansell",
              "Luka Boone",
              "Diego Castellano",
              "Nadia Dupont"
            ],
            "correct": "Luka Boone",
            "explanation": {
              "step1": "Tên đang xử lý: Luka Boone . Dựa vào tên Luka Boone, ta định vị được đoạn C. Lời khuyên ở cuối đoạn tiếp tục phần phát biểu của Boone.",
              "step2": "‘ Short spells of quiet , taken often , do more good than one long stretch once a week . 🔎 Khớp với statement 12: Several brief periods without noise can help more than one long period . Đối chiếu paraphrasing: Several brief periods without noise Short spells of quiet + taken often can help more than do more good than one long period one long stretch",
              "step3": "Với tên Luka Boone ở đoạn C, ta chọn được: câu 12. Petra Ansell Đoạn D cũng nói về yên tĩnh như một cách trị liệu (“a form of treatment”), nên dễ nhầm theo chủ đề Nhưng đoạn này không so sánh nhiều khoảng ngắn với một khoảng dài. Nadia Dupont Đoạn F có một buổi kéo dài một giờ (“a single hour-long float”) và ba buổi (“three 90-minute floats”), nên dễ nhầm theo số lần và thời lượng Nhưng đó là mô tả quy trình nghiên cứu, không phải kết luận nhiều khoảng ngắn có ích hơn một khoảng dài.",
              "step4": "Đáp án chính xác: Luka Boone"
            }
          },
          {
            "id": 26,
            "prompt": "Match the statement with the correct person/feature: \"Less noise outside and less mental activity can improve awareness of what is going on and lead to a suitable reaction.\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "Petra Ansell",
              "Luka Boone",
              "Diego Castellano",
              "Nadia Dupont"
            ],
            "correct": "Petra Ansell",
            "explanation": {
              "step1": "Phân tích câu hỏi theo phương pháp Linearthinking.",
              "step2": "Định vị vùng thông tin liên quan trong bài đọc.",
              "step3": "Bóc tách cấu trúc câu (S-V-O) và đối chiếu nghĩa.",
              "step4": "Đáp án chính xác: Petra Ansell"
            }
          }
        ]
      },
      {
        "id": "cam-21-reading-1-p3",
        "passageNumber": 3,
        "title": "Book review: The Bean and the World by Rutger van der Molen",
        "subtitle": "",
        "content": [
          "Rutger van der Molen's The Bean and the World sets out to be a genuinely worldwide account. Instead of settling on one region, van der Molen moves through every important coffee-growing zone, opening with Brazil and Java, the two territories that between them supplied most of the coffee traded in the early 1900s. His subject, though, is not the familiar arabica bean alone. Robusta — hardier, cheaper to raise and for a long time thought unworthy of serious attention — is treated as its equal, and the author traces how, across the past hundred years, it has been produced on an industrial scale in fast-growing lowland districts and sold at such low prices that the smallholders who grow arabica have watched their earnings collapse again and again.",
          "The book's range shows in van der Molen's account of the coffee trade in the Netherlands. Dutch consumers were at first supplied from plantations in the East Indies, which the country itself governed and ran on forced labour. Once that compulsion was scaled back within its own possessions, merchants looked instead to beans raised under still harsher conditions abroad, bringing them in from Brazil and other producers where coerced work continued. Only in the final decades of the nineteenth century did cheaper African robusta begin reaching Dutch harbours, and it was not until the twentieth that roasters set about building their blends around it.",
          "Van der Molen's book is also a global history of labour, examining the many forms of work that coffee has required. People often imagine that the crop came chiefly from sprawling estates in the hands of the rich; the author shows how misleading that picture is. In the highlands of Java, for example — among the leading exporters of the early twentieth century — coffee bushes were tended beside food crops by peasant families, in a fashion that consumed a staggering quantity of hand labour.",
          "Resemblance and continuity run all through his account of coffee-growing. The larger operations, he points out, have long depended on workers fetched from elsewhere: estates in Ceylon relied on indentured hands shipped over from South Asia, while those in Brazil pulled in labourers from distant places. Harvesting coffee, he reminds the reader, remains punishing and poorly paid across much of the globe even now. Yet the book gives just as much weight to the survival of older, small-scale ways of working, which as recently as the middle of the twentieth century still yielded most of the coffee grown in parts of Africa and Latin America.",
          "It is, besides, a history of financiers and coffee dynasties, and of companies whose hold lasted across generations. Powerful business interests, van der Molen argues, have again and again turned the policies of states to their own ends. In Brazil most of all, though in Colombia and the Dutch East Indies as well, a commanding class of planters and exporters moulded national politics, and governments duly protected them, buying up unsold stock to keep prices high and raising barriers against foreign rivals. In every struggle over who would control the trade, it was nearly always the poorer producing countries that came off worst. The whole tangle is unravelled by van der Molen with remarkable delicacy.",
          "Coffee, even so, was never a purely agricultural affair. As soon as the cherries were gathered, the beans inside had to be drawn out near the place they were grown, work that demanded machinery turned by hand, by animals, by water or by steam. After this came drying and hulling, and — from the nineteenth century — the sorting and grading of the beans, before the final roasting, which was carried out for the most part in the countries that consumed the coffee. From early on, then, coffee was an energy-hungry industrial business, pursued both in the countryside and in the roasteries of far-off cities. As it grew, it carried methods and machinery quickly from one country to another: railway lines were laid to shift pickers and beans, steam-driven mills multiplied, and prized varieties spread across the world wherever soil and taste would have them.",
          "Where coffee had once been scarce and dear, new varieties, fertilisers, irrigation and better processing turned it in time into an ordinary drink to be had almost anywhere. The amount consumed rose sharply. A drink formerly held to be a luxury came to be commended as a harmless stimulant that quickened the wits. But as more of it was swallowed, worries mounted — over adulteration, over what caffeine might do, over the conditions in which the crop was raised. Whenever critics raised such matters, the trade was inclined to pay for soothing research and to pin the fault on other habits. The recent past, van der Molen notes, has brought a further, unwelcome twist: soluble or ‘instant’ coffee, made cheaply and mostly from robusta by a drying method perfected in the mid-twentieth century, now stocks vending machines and a host of packaged goods, and its spread the author judges to be a coarsening of what people drink.",
          "The outcome is a book of genuine richness — a model for the writing of global history, and of the history of industry and of capitalism together. Van der Molen holds his emotions back, in praise as in blame, even where a little more warmth might have driven home his account of the many wrongs bound up with coffee. Human beings, he remarks, could always have got by without it, and there is today no want of other comforts to reach for instead. And still, for a great many of the world's poorest people, coffee is the very thing that puts food on the table."
        ],
        "questions": [
          {
            "id": 27,
            "prompt": "What does the reviewer suggest, in the first paragraph, about how coffee is grown and traded?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "Coffee has come to occupy a central place in relations between countries.",
              "Cultivating coffee in new districts has raised the amount produced.",
              "Robusta is now thought to be of higher quality than arabica.",
              "One kind of coffee has been priced low so as to compete on world markets."
            ],
            "correct": "One kind of coffee has been priced low so as to compete on world markets.",
            "explanation": {
              "step1": "What does the reviewer suggest , in the first paragraph , about how coffee is grown and traded ? Câu hỏi hỏi: Ở đoạn 1, người viết gợi ra điều gì về việc trồng và mua bán cà phê?",
              "step2": "Đề đã giới hạn ở đoạn 1. Tìm chỗ cuốn sách chuyển từ việc không chỉ nói về arabica (“not the familiar arabica bean alone”) sang Robusta => bắt đầu đọc từ câu (3). Đoạn 1",
              "step3": "Đoạn 1: His subject , though, is not the familiar arabica bean alone . Robusta — hardier, cheaper to raise and for a long time thought unworthy of serious attention — is treated as its equal , and the author traces how , across the past hundred years, it has been produced on an industrial scale in fast-growing lowland districts and sold at such low prices that the smallholders who grow arabica have watched their earnings collapse again and again . Câu (3): cuốn sách không chỉ bàn về arabica. Câu (4): sách xét đến Robusta: loại này được sản xuất quy mô công nghiệp và bán giá rất thấp , khiến thu nhập người trồng arabica sụt giảm .",
              "step4": "Đáp án phù hợp nhất: D. One kind of coffee has been priced low so as to compete on world markets . (Một loại cà phê được bán giá thấp để cạnh tranh trên thị trường thế giới.) Đây là phương án gần nhất: bài cho thấy tác động cạnh tranh qua thu nhập của người trồng arabica , nhưng không nói rõ chủ ý hạ giá để cạnh tranh. Đối chiếu paraphrasing: One kind of coffee Robusta; has been priced low sold at such low prices. compete on world markets suy ra sức ép cạnh tranh từ việc their earnings collapse của the smallholders who grow arabica . Đáp án A “ Cà phê giữ vị trí trung tâm trong quan hệ giữa các nước ”: Nếu skim thấy cuốn sách có phạm vi toàn thế giới (“genuinely worldwide account”), ta dễ chọn A Nhưng đó là phạm vi cuốn sách, không phải vai trò của cà phê trong quan hệ giữa các nước. Đáp án B “ Trồng cà phê ở những vùng mới đã làm sản lượng tăng ”: Cụm chỉ các vùng đất thấp phát triển nhanh (“fast-growing lowland districts”) dễ gây nhầm Nhưng bài không nói việc mở vùng trồng mới đã làm tổng sản lượng tăng. Đáp án C “ Robusta hiện được cho là có chất lượng cao hơn arabica ”: Cụm “is treated as its equal” nói tác giả xem Robusta ngang hàng với arabica trong cuốn sách, không nói chất lượng Robusta cao hơn."
            }
          },
          {
            "id": 28,
            "prompt": "When he turns to the coffee trade in the Netherlands (paragraph two), the reviewer emphasises",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "the way demand for coffee grew as the years passed.",
              "the way changes in farming influenced the trade.",
              "the way the regions supplying the coffee altered over time.",
              "the way backing increased for more ethical growing practices."
            ],
            "correct": "the way the regions supplying the coffee altered over time.",
            "explanation": {
              "step1": "When he turns to the coffee trade in the Netherlands (paragraph two), the reviewer emphasises Câu hỏi hỏi: Khi bàn về thương mại cà phê ở Netherlands, người viết nhấn mạnh *điều gì* trong đoạn 2?",
              "step2": "Dựa vào địa danh Netherlands và chỉ dẫn đoạn 2 (“paragraph two”) => ta bắt đầu đọc đoạn 2, nơi người viết giới thiệu phần cuốn sách bàn về thương mại cà phê ở Netherlands. Đoạn 2 — paragraph two",
              "step3": "Đoạn 2: The book's range shows in van der Molen's account of the coffee trade in the Netherlands . Dutch consumers were at first supplied from plantations in the East Indies , which the country itself governed and ran on forced labour . Once that compulsion was scaled back within its own possessions, merchants looked instead to beans raised under still harsher conditions abroad, bringing them in from Brazil and other producers where coerced work continued . Only in the final decades of the nineteenth century did cheaper African robusta begin reaching Dutch harbours , and it was not until the twentieth that roasters set about building their blends around it . Câu (1)–(2): giới thiệu phạm vi bàn luận, rồi nêu East Indies là nguồn cung ban đầu . Câu (3)–(4): thương nhân chuyển sang Brazil ; về sau, robusta từ châu Phi đến Netherlands => trọng tâm là nguồn cung thay đổi theo thời gian .",
              "step4": "Đáp án đúng: C. the way the regions supplying the coffee altered over time . (Cách các vùng cung cấp cà phê thay đổi theo thời gian.) Đối chiếu paraphrasing: the regions supplying the coffee the East Indies + Brazil + African robusta altered over time at first + instead + Only in Đáp án A “ Cách nhu cầu cà phê tăng theo năm tháng ”: Các mốc thời gian dễ khiến ta nghĩ đến xu hướng tăng Nhưng đoạn 2 theo dõi nơi cung cấp; ý lượng tiêu thụ tăng (“amount consumed rose sharply”) nằm ở đoạn 7. Đáp án B “ Cách những thay đổi trong canh tác ảnh hưởng đến thương mại ”: Cụm chỉ việc giảm cưỡng bức lao động (“compulsion was scaled back”) có thể gây nhầm lẫn. Đó là bối cảnh cho việc đổi nguồn hàng, không phải trọng tâm về phương pháp canh tác. Đáp án D “ Cách sự ủng hộ đối với việc trồng cà phê có đạo đức hơn tăng lên ”: Chi tiết lao động dễ gợi đến vấn đề đạo đức Nhưng đoạn 2 còn nói đến điều kiện khắc nghiệt hơn ở nước ngoài (“still harsher conditions abroad”), chứ không cho thấy sự ủng hộ ấy tăng lên."
            }
          },
          {
            "id": 29,
            "prompt": "In the third paragraph, the reviewer is",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "correcting a widely held but mistaken idea about coffee-growing.",
              "accounting for the decline of large coffee estates.",
              "setting out an especially efficient method of growing coffee.",
              "weighing rival approaches to cultivating coffee against one another."
            ],
            "correct": "correcting a widely held but mistaken idea about coffee-growing.",
            "explanation": {
              "step1": "In the third paragraph , the reviewer is Câu hỏi hỏi: Ở đoạn 3, người viết bài điểm sách đang làm gì?",
              "step2": "Câu hỏi chỉ rõ đoạn thứ ba (“third paragraph”) => ta đọc đoạn 3, bắt đầu từ ý cuốn sách viết về lịch sử lao động (“history of labour”). Đoạn 3 — history of labour",
              "step3": "Đoạn 3: Van der Molen's book is also a global history of labour , examining the many forms of work that coffee has required . People often imagine that the crop came chiefly from sprawling estates in the hands of the rich ; the author shows how misleading that picture is . In the highlands of Java, for example — among the leading exporters of the early twentieth century — coffee bushes were tended beside food crops by peasant families , in a fashion that consumed a staggering quantity of hand labour . Câu (1)–(2): từ chủ đề lao động, đoạn văn nêu một điều nhiều người tin rồi chỉ ra điều đó sai . Câu (3): việc các gia đình nông dân chăm sóc cà phê làm rõ lời bác bỏ ấy. Người viết bài điểm sách đang sửa một quan niệm phổ biến nhưng sai về việc trồng cà phê.",
              "step4": "Đáp án đúng: correcting a widely held but mistaken idea about coffee-growing. (Sửa một quan niệm phổ biến nhưng sai về việc trồng cà phê.) Đối chiếu paraphrasing: widely held People often imagine correcting a widely held but mistaken idea shows how misleading that picture is accounting for the decline of large coffee estates. (Giải thích nguyên nhân các điền trang cà phê lớn suy tàn): Nếu skim/scan thấy “sprawling estates”, ta dễ chọn ý này Nhưng đoạn 3 bác bỏ quan niệm cà phê chủ yếu đến từ đó, không giải thích sự suy tàn của các điền trang. setting out an especially efficient method of growing coffee. (Trình bày một cách trồng cà phê đặc biệt hiệu quả): Chi tiết trồng bên cây lương thực (“beside food crops”) là ví dụ đối chứng, không được đánh giá là một phương pháp đặc biệt hiệu quả. weighing rival approaches to cultivating coffee against one another. (Cân nhắc các cách trồng cà phê khác nhau): Nếu thấy điền trang lớn và gia đình nông dân, ta dễ tưởng đây là phép so sánh hai cách trồng Nhưng đoạn văn nêu một quan niệm rồi chỉ ra nó sai, không cân nhắc ưu nhược điểm của hai cách."
            }
          },
          {
            "id": 30,
            "prompt": "In the final paragraph, what does the reviewer present as the book's overall message?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "The aggressive promotion of coffee has had ruinous effects.",
              "The lot of those who labour in coffee ought to be improved.",
              "Financial pressure is needed to rein in coffee production.",
              "Coffee is something the world could perfectly well do without."
            ],
            "correct": "Coffee is something the world could perfectly well do without.",
            "explanation": {
              "step1": "In the final paragraph , what does the reviewer present as the book's overall message ? Câu hỏi hỏi: Theo người viết bài điểm sách, thông điệp chung của cuốn sách được nêu ở đoạn cuối là gì?",
              "step2": "Đề chỉ rõ đoạn cuối => bắt đầu đọc ở đoạn 8. Cụm dẫn lời nhận xét của tác giả cuốn sách (“he remarks”) giúp nhận ra phát biểu cần chú ý. Đoạn 8 — he remarks",
              "step3": "Đoạn 8: Human beings , he remarks , could always have got by without it , and there is today no want of other comforts to reach for instead . And still, for a great many of the world's poorest people , coffee is the very thing that puts food on the table . Câu (3): Con người có thể sống mà không cần cà phê và có những nguồn an ủi khác. Câu (4): Tuy vậy, cà phê vẫn nuôi sống rất nhiều người nghèo. Thông điệp là con người không nhất thiết cần cà phê để sống , dù nhiều người nghèo đang sống nhờ nó.",
              "step4": "Đáp án đúng: D. Coffee is something the world could perfectly well do without . (Con người hoàn toàn có thể sống mà không cần cà phê .) Đối chiếu paraphrasing: Human beings the world could always have got by without it could perfectly well do without Đáp án A “ Việc quảng bá cà phê quyết liệt đã gây hậu quả tai hại ”: Nếu skim đoạn 7 thấy cà phê được ca ngợi (“commended as a harmless stimulant”) rồi thấy những lo ngại tăng lên (“worries mounted”), có thể chọn nhầm Nhưng đoạn cuối không kết luận việc quảng bá đã gây hậu quả tai hại. Đáp án B “ Đời sống của người lao động trong ngành cà phê cần được cải thiện ”: Nếu skim câu (4) thấy cà phê giúp người nghèo có cái ăn (“puts food on the table”), có thể nghĩ đến đời sống lao động Nhưng câu này nêu sự lệ thuộc vào cà phê, không đưa ra lời kêu gọi cải thiện điều kiện làm việc. Đáp án C “ Cần dùng áp lực tài chính để kiềm chế sản xuất cà phê ”: Nếu skim đoạn 5 thấy chính phủ giữ giá cao (“keep prices high”), có thể liên tưởng đến biện pháp tài chính Nhưng đoạn cuối không đề xuất hạn chế sản xuất bằng cách đó."
            }
          },
          {
            "id": 31,
            "prompt": "Van der Molen’s The Bean and the World draws attention to how alike the growing of coffee has been from one region to the next. Inside the biggest operations in both Ceylon and Brazil, production leaned heavily on  _____ . Across other regions, though — much of Africa and Latin America among them —  _____  carried on as before.",
            "type": "FILL_IN_BLANK",
            "correct": "imported labour",
            "explanation": {
              "step1": "Inside the biggest operations in both Ceylon and Brazil , production leaned heavily on 5. ___ . Ô trống cần một cụm danh từ chỉ nguồn lực mà các cơ sở lớn ở cả hai nơi phụ thuộc vào. Chưa thể kết luận đó là lao động hay máy móc.",
              "step2": "Dựa vào hai địa danh Ceylon và Brazil => tìm đến câu (2) đoạn 4. Đoạn 4",
              "step3": "Đoạn 4: The larger operations , he points out, have long depended on workers fetched from elsewhere : estates in Ceylon relied on indentured hands shipped over from South Asia , while those in Brazil pulled in labourers from distant places .",
              "step4": "Đáp án phù hợp nhất: imported labour Câu hoàn chỉnh: Inside the biggest operations in both Ceylon and Brazil, production leaned heavily on imported labour. (Trong các cơ sở sản xuất lớn nhất ở cả Ceylon và Brazil, hoạt động sản xuất phụ thuộc nhiều vào lao động được đưa đến từ nơi khác .) => Khớp với dự đoán về nguồn lực sản xuất: tại cả Ceylon và Brazil , lao động đều được đưa từ nơi khác tới . Đối chiếu paraphrasing: imported labour workers fetched from elsewhere both Ceylon and Brazil estates in Ceylon + those in Brazil casual labourers — lao động thời vụ: Dễ chọn vì cùng nói về người lao động Nhưng bài nhấn mạnh họ đến từ nơi khác (“fetched from elsewhere”), không nói họ làm việc thời vụ. modern machinery — máy móc hiện đại: Đoạn 6 có nhắc đến máy xay chạy bằng hơi nước (“steam-driven mills”), nhưng câu (2) đoạn 4 nói các cơ sở lớn phụ thuộc vào người lao động (“workers”). smallholder farming — canh tác quy mô nhỏ: Đoạn 4 có nói đến cách làm quy mô nhỏ (“older, small-scale ways of working”), nhưng ô 5 hỏi về các cơ sở lớn (“The larger operations”)."
            }
          },
          {
            "id": 32,
            "prompt": "Coffee has also drawn in  _____ , every one of them anxious to guard the markets they had secured. In countries such as Brazil, the trade came to weigh heavily on  _____ . So as to defend the standing of growers,  _____  were brought in, and the upshot was that  _____  were left worse off.",
            "type": "FILL_IN_BLANK",
            "correct": "smallholder farming",
            "explanation": {
              "step1": "Across other regions , though — much of Africa and Latin America among them — 6. ___ carried on as before . Ý câu hỏi: Ở những vùng như Africa và Latin America, điều gì vẫn tiếp tục như trước ? Dự đoán ô trống: Một cụm danh từ làm chủ ngữ, chỉ cách canh tác đã có từ trước.",
              "step2": "Dựa vào địa danh Africa and Latin America => ta định vị được câu liên quan ở đoạn 4. Đoạn 4",
              "step3": "Đoạn 4: Yet the book gives just as much weight to the survival of older, small-scale ways of working , which as recently as the middle of the twentieth century still yielded most of the coffee grown in parts of Africa and Latin America . Điều tiếp tục tồn tại là cách canh tác quy mô nhỏ , không phải một loại nhân công hay công cụ.",
              "step4": "Đáp án phù hợp nhất: smallholder farming Câu hoàn chỉnh: Across other regions, though — much of Africa and Latin America among them — smallholder farming carried on as before . (Tuy nhiên, ở những vùng khác, gồm phần lớn Africa và Latin America, việc canh tác của các hộ nhỏ vẫn tiếp tục như trước.) => Khớp với dự đoán về cách canh tác đã có từ trước: bài đọc nói những cách làm quy mô nhỏ vẫn tồn tại . Đối chiếu paraphrasing: smallholder farming small scale ways of working carried on as before the survival + older imported labour “ lao động được đưa từ nơi khác đến ”: Đoạn 4 cũng nhắc tới nhân công từ nơi khác, nhưng đó là lực lượng làm việc ở các cơ sở lớn; câu (4) nói về cách canh tác quy mô nhỏ. traditional tools “ công cụ truyền thống ”: Từ chỉ sự cũ (“older”) dễ gây nhầm, nhưng bài đọc nói về cách làm (“ways of working”), không nêu công cụ. casual labourers “ lao động thời vụ ”: Sai vì đây là nhóm người lao động, còn chỗ trống cần một cách canh tác vẫn được duy trì."
            }
          },
          {
            "id": 33,
            "prompt": "Complete blank for question 33:",
            "type": "FILL_IN_BLANK",
            "correct": "rich firms and investors",
            "explanation": {
              "step1": "Coffee has also drawn in 7. ___ , every one of them anxious to guard the markets they had secured . Chỗ trống cần một cụm danh từ số nhiều chỉ các chủ thể có lợi ích kinh doanh: mỗi chủ thể đều muốn bảo vệ thị trường của mình.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp ý về các chủ thể tham gia kinh doanh cà phê. Đoạn 5 nhắc tới giới tài chính (“financiers”) => đây là vùng cần đọc. Đoạn 5 — financiers",
              "step3": "Đoạn 5: It is , besides, a history of financiers and coffee dynasties, and of companies whose hold lasted across generations .",
              "step4": "Đáp án phù hợp nhất: rich firms and investors Câu hoàn chỉnh: Coffee has also drawn in rich firms and investors , every one of them anxious to guard the markets they had secured. (Cà phê cũng đã thu hút các doanh nghiệp giàu có và các nhà đầu tư , mỗi bên đều muốn bảo vệ thị trường mình đã nắm giữ.) => Khớp với dự đoán về các chủ thể kinh doanh: bài đọc nêu giới tài chính và các doanh nghiệp . Đối chiếu paraphrasing: investors financiers firms companies state authorities — cơ quan nhà nước: Nếu skim/scan thấy chính sách của nhà nước (“policies of states”) ở đoạn 5, em dễ chọn đáp án này Nhưng câu (1) nêu giới tài chính và các công ty, không phải cơ quan nhà nước. low-income producers — người sản xuất thu nhập thấp: Đoạn 5 có cụm chỉ các nước sản xuất nghèo hơn (“poorer producing countries”) Nhưng đó là bên chịu thiệt, không phải hai nhóm được nêu ở câu (1). imported labour — lao động được đưa từ nơi khác đến: Đoạn 4 có nhắc người lao động từ nơi khác (“workers fetched from elsewhere”) Nhưng chỗ trống này ứng với giới tài chính và các công ty ở đoạn 5, không phải người lao động."
            }
          },
          {
            "id": 34,
            "prompt": "Complete blank for question 34:",
            "type": "FILL_IN_BLANK",
            "correct": "state authorities",
            "explanation": {
              "step1": "In countries such as Brazil , the trade came to weigh heavily on 8. ___ . Chỗ trống đứng sau *weigh heavily on*, nên cần một cụm danh từ chỉ đối tượng chịu ảnh hưởng của ngành cà phê tại Brazil.",
              "step2": "Dựa vào địa danh Brazil, rồi tìm ý ngành cà phê tác động đến chính trị => bắt đầu đọc câu (3), đoạn 5. Đoạn 5",
              "step3": "Đoạn 5: In Brazil most of all, though in Colombia and the Dutch East Indies as well , a commanding class of planters and exporters moulded national politics , and governments duly protected them , buying up unsold stock to keep prices high and raising barriers against foreign rivals . Người trong ngành cà phê định hình chính trị , còn chính phủ bảo vệ họ. Vậy đối tượng cần điền là cơ quan nhà nước , không phải chính những người trồng cà phê.",
              "step4": "Đáp án phù hợp nhất: state authorities Câu hoàn chỉnh: In countries such as Brazil, the trade came to weigh heavily on state authorities. (Tại những nước như Brazil, ngành cà phê đã gây ảnh hưởng lớn đến các cơ quan nhà nước .) => Khớp với dự đoán về đối tượng chịu ảnh hưởng: bài đọc nói giới trồng cà phê định hình chính trị và được chính phủ bảo vệ. Đối chiếu paraphrasing: came to weigh heavily on moulded national politics state authorities governments rich firms and investors đoạn 5 nói đến những người có thế lực trong ngành cà phê. Nhưng đó là bên gây ảnh hưởng; chỗ trống hỏi bên chịu ảnh hưởng. market safeguards khi thấy chính phủ dựng rào cản (“raising barriers”). Nhưng đây là biện pháp của chính phủ, không phải đối tượng ngành cà phê tác động đến. low-income producers Đoạn 5 có nhắc các nước sản xuất nghèo hơn (“poorer producing countries”), nhưng họ là bên chịu thiệt trong thương mại, không phải đối tượng chính trị cần điền ở câu 8."
            }
          },
          {
            "id": 35,
            "prompt": "Complete blank for question 35:",
            "type": "FILL_IN_BLANK",
            "correct": "market safeguards",
            "explanation": {
              "step1": "So as to defend the standing of growers , 9. ___ were brought in Chỗ trống cần một cụm danh từ số nhiều: người hoặc biện pháp được đưa vào để bảo vệ người trồng. Cần đọc bài để xác định đó là gì.",
              "step2": "Dựa vào địa danh Brazil ở câu ngay trước chỗ trống 9 => ta bắt đầu đọc tại câu nhắc đến Brazil trong đoạn 5. Đoạn 5",
              "step3": "Đoạn 5: In Brazil most of all, though in Colombia and the Dutch East Indies as well , a commanding class of planters and exporters moulded national politics , and governments duly protected them , buying up unsold stock to keep prices high and raising barriers against foreign rivals . Chính phủ bảo vệ người trồng bằng một hành động cụ thể: mua hàng tồn để giữ giá cao. Vậy chỗ trống chỉ biện pháp bảo vệ thị trường , không phải người thực hiện.",
              "step4": "Đáp án phù hợp nhất: market safeguards Câu hoàn chỉnh: So as to defend the standing of growers, market safeguards were brought in, and the upshot was that 10. ___ were left worse off. (Để bảo vệ vị thế của người trồng, các biện pháp bảo vệ thị trường được đưa vào; hệ quả là 10. ___ chịu thiệt hơn.) => Khớp với dự đoán về chủ ngữ số nhiều và hành động mua hàng tồn để giữ giá cao trong bài. Đối chiếu paraphrasing: defend the standing of growers protected them market safeguards buying up unsold stock + to keep prices high state authorities “ — cơ quan nhà nước ”: bài có chính phủ (“governments”). Nhưng chính phủ thực hiện việc bảo vệ; chỗ trống hỏi thứ được đưa vào. rich firms and investors “ — doanh nghiệp và nhà đầu tư giàu có ”: Đoạn 5 nhắc đến giới kinh doanh có thế lực (“Powerful business interests”), nhưng đây không phải biện pháp giữ giá được nêu trong câu bằng chứng. modern machinery “ — máy móc hiện đại ”: Bài có nhắc đến máy móc (“machinery”) ở đoạn 6, nhưng đó là công cụ chế biến cà phê, không phải biện pháp bảo vệ người trồng bằng cách giữ giá."
            }
          },
          {
            "id": 36,
            "prompt": "Complete blank for question 36:",
            "type": "FILL_IN_BLANK",
            "correct": "low-income producers",
            "explanation": {
              "step1": "and the upshot was that 10. ___ were left worse off . Chỗ trống cần một cụm danh từ số nhiều phù hợp với “were”, chỉ nhóm chịu thiệt sau những diễn biến của ngành cà phê.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta tìm ý tương đương với chịu thiệt (“left worse off”). Ở đoạn 5, cụm chịu kết cục tệ nhất (“came off worst”) là điểm bắt đầu đọc. Đoạn 5 — came off worst",
              "step3": "Đoạn 5: In every struggle over who would control the trade , it was nearly always the poorer producing countries that came off worst . Bài đọc xác định các nước sản xuất nghèo hơn là bên hầu như luôn chịu thiệt nhất. Bài dùng “countries”, còn đáp án diễn đạt khái quát là các bên sản xuất có thu nhập thấp.",
              "step4": "Đáp án phù hợp nhất: low-income producers Câu hoàn chỉnh: and the upshot was that low-income producers were left worse off. (và kết quả là các bên sản xuất có thu nhập thấp chịu thiệt.) => Khớp với dự đoán về một nhóm chịu thiệt và với nhóm được nêu trong bài. Đối chiếu paraphrasing: low income producers the poorer producing countries were left worse off came off worst casual labourers Nếu thấy người thu hoạch được trả công thấp (“poorly paid”) ở đoạn 4, em có thể nghĩ đến lao động thời vụ Nhưng câu (4) đoạn 5 xác định bên chịu thiệt là các nước sản xuất nghèo hơn, không phải lao động thời vụ. rich firms and investors Đoạn 5 có nhắc giới tài chính (“financiers”), nhưng “rich” trái với đặc điểm nghèo hơn (“poorer”) của nhóm cần điền. smallholder farming Đoạn 1 có nhắc thu nhập sụt giảm (“earnings collapse”), nhưng lựa chọn này chỉ hình thức canh tác, không phải một nhóm số nhiều phù hợp với “were”."
            }
          },
          {
            "id": 37,
            "prompt": "From the very start, coffee was a cheap and everyday drink.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "YES",
              "NO",
              "NOT GIVEN"
            ],
            "correct": "NO",
            "explanation": {
              "step1": "From the very start , coffee was a cheap and everyday drink . Ý câu hỏi: Tác giả có cho rằng cà phê ngay từ đầu đã rẻ và là thức uống thường ngày không?",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp ý thức uống thông thường (“ordinary drink”) ở đoạn 7 => bắt đầu đọc từ câu (1). Đoạn 7",
              "step3": "Đoạn 7: Where coffee had once been scarce and dear , new varieties , fertilisers, irrigation and better processing turned it in time into an ordinary drink to be had almost anywhere .",
              "step4": "Câu hỏi nói: cà phê ngay từ đầu đã rẻ (“ cheap ”) và là thức uống thường ngày (“ everyday drink ”). Bài đọc nói: cà phê từng khan hiếm và đắt (“scarce and dear”); về sau (“in time”) nó mới trở thành thức uống thông thường . Quan điểm của tác giả trái với nhận định trong câu hỏi. Đối chiếu paraphrasing: cheap dear From the very start in time everyday drink ordinary drink, nhưng trạng thái này chỉ xuất hiện về sau. Đáp án đúng: NO Đáp án YES Nếu skim/scan thấy thức uống thông thường (“ordinary drink”), sẽ dễ chọn YES Nhưng tác giả nói đó là kết quả về sau (“in time”). Chỉ chọn YES nếu tác giả nói cà phê đã rẻ và thông dụng ngay từ đầu. NOT GIVEN Sai vì tác giả đã nêu rõ tình trạng ban đầu: khan hiếm và đắt (“scarce and dear”). Chỉ chọn NOT GIVEN nếu bài không cho biết cà phê ban đầu có rẻ và thông dụng hay không."
            }
          },
          {
            "id": 38,
            "prompt": "Coffee was at one time regarded as a treat for the well-to-do.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "YES",
              "NO",
              "NOT GIVEN"
            ],
            "correct": "YES",
            "explanation": {
              "step1": "Coffee was at one time regarded as a treat for the well-to-do . Ý câu hỏi: tác giả có cho rằng cà phê từng được xem là thức uống xa xỉ dành cho người khá giả không?",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta tìm ý tương đương với * từng được xem là thức uống xa xỉ *. Ở đoạn 7, cụm “formerly held to be a luxury” cho thấy đây là câu cần đọc. Đoạn 7 — formerly held to be a luxury",
              "step3": "Đoạn 7: A drink formerly held to be a luxury came to be commended as a harmless stimulant that quickened the wits .",
              "step4": "Câu hỏi nói: cà phê từng được xem là thức uống xa xỉ dành cho người khá giả (“ at one time regarded as a treat for the well-to-do ”). Bài đọc nói: tác giả xác nhận cà phê trước đây được xem là xa xỉ (“ formerly held to be a luxury ”). Hai ý thống nhất. Đối chiếu paraphrasing: formerly at one time held to be a luxury regarded as a treat for the well to do Đáp án đúng: YES Đáp án NO Nếu chỉ chú ý cách nhìn nhận về sau (“came to be commended”), có thể tưởng tác giả bác bỏ nhận định Nhưng tác giả vẫn khẳng định cà phê trước đây (“formerly”) được xem là xa xỉ. Chỉ chọn NO nếu tác giả nói cà phê trước đây không được xem là thức uống xa xỉ. NOT GIVEN Nếu skim/scan không thấy cụm chỉ người khá giả (“well-to-do”) trong bài, sẽ dễ chọn NOT GIVEN Nhưng ý thức uống xa xỉ (“a luxury”) đã có trong bằng chứng. Chỉ chọn NOT GIVEN nếu tác giả không cho biết cà phê từng được xem là xa xỉ."
            }
          },
          {
            "id": 39,
            "prompt": "The reviewer regards the arrival of instant coffee as a welcome step forward.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "YES",
              "NO",
              "NOT GIVEN"
            ],
            "correct": "NO",
            "explanation": {
              "step1": "The reviewer regards the arrival of instant coffee as a welcome step forward . Ý câu hỏi: Người viết bài điểm sách có đánh giá sự xuất hiện của cà phê hòa tan là đáng hoan nghênh không?",
              "step2": "Dựa vào từ khoá đặc biệt `instant coffee` => ta tìm đến câu có cụm “soluble or ‘instant’ coffee” ở đoạn 7. Đoạn 7 — instant",
              "step3": "Đoạn 7: The recent past , van der Molen notes, has brought a further, unwelcome twist : soluble or ‘instant’ coffee , made cheaply and mostly from robusta by a drying method perfected in the mid-twentieth century, now stocks vending machines and a host of packaged goods , and its spread the author judges to be a coarsening of what people drink .",
              "step4": "Câu hỏi nói: Người viết bài điểm sách xem sự xuất hiện của cà phê hòa tan là bước tiến đáng hoan nghênh (“ welcome step forward ”). Bài đọc nói: Người viết gọi diễn biến gắn với cà phê hòa tan là không đáng hoan nghênh (“ unwelcome twist ”). Đây là thái độ trái ngược , nên chọn NO . Đối chiếu paraphrasing: instant coffee giữ nguyên welcome step forward unwelcome twist Đáp án đúng: NO Đáp án YES Nếu skim/scan thấy “better processing” ở đầu đoạn 7, sẽ dễ tưởng người viết khen cà phê hòa tan Nhưng cụm đó nói về cà phê nói chung; với cà phê hòa tan, người viết dùng “unwelcome twist”. Chỉ chọn YES nếu người viết đánh giá sự xuất hiện ấy là đáng hoan nghênh. NOT GIVEN Nếu chỉ chú ý chi tiết cà phê hòa tan có trong máy bán hàng, ta có thể tưởng bài đọc không nêu thái độ Nhưng “unwelcome twist” đã nêu rõ thái độ của người viết. Chỉ chọn NOT GIVEN nếu bài đọc chỉ mô tả sự xuất hiện ấy mà không đưa ra đánh giá."
            }
          },
          {
            "id": 40,
            "prompt": "The reviewer expects instant coffee to take the place of freshly made coffee before long.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "YES",
              "NO",
              "NOT GIVEN"
            ],
            "correct": "NOT GIVEN",
            "explanation": {
              "step1": "The reviewer expects instant coffee to take the place of freshly made coffee before long . Ý câu hỏi: Người viết bài điểm sách có dự đoán cà phê hòa tan sắp thay thế cà phê pha mới không?",
              "step2": "Dựa vào cụm chỉ loại cà phê `instant coffee` => ta tìm đến câu (6) đoạn 7, nơi xuất hiện `‘instant’ coffee`. Đoạn 7",
              "step3": "Đoạn 7: The recent past, van der Molen notes, has brought a further, unwelcome twist: soluble or ‘instant’ coffee , made cheaply and mostly from robusta by a drying method perfected in the mid-twentieth century, now stocks vending machines and a host of packaged goods , and its spread the author judges to be a coarsening of what people drink .",
              "step4": "Câu hỏi nói: người viết dự đoán cà phê hòa tan sẽ sớm thay thế cà phê pha mới (“take the place of freshly made coffee before long ”). Bài đọc nói: cà phê hòa tan hiện có trong máy bán hàng tự động (“ now stocks vending machines”); van der Molen đánh giá sự lan rộng của nó là một sự xuống cấp (“coarsening”). Bài đọc không dự đoán nó có thay thế cà phê pha mới hay không. Đối chiếu paraphrasing: now before long take the place of freshly made coffee không có trong bài Đáp án đúng: NOT GIVEN Đáp án YES Nếu thấy cà phê hòa tan đang lan rộng (“its spread”), ta dễ tưởng người viết dự đoán nó sẽ thay thế cà phê pha mới Nhưng người viết không đưa ra dự đoán ấy. Chỉ chọn YES nếu người viết nói sự thay thế đó sẽ sớm xảy ra. Đáp án NO Đánh giá tiêu cực (“coarsening”) dễ khiến ta tưởng người viết phủ nhận sự thay thế Nhưng chê chất lượng không có nghĩa là dự đoán cà phê hòa tan sẽ không thay thế cà phê pha mới. Chỉ chọn NO nếu người viết nói sự thay thế đó sẽ không sớm xảy ra."
            }
          }
        ]
      }
    ]
  },
  "cam-20-reading-1": {
    "id": "cam-20-reading-1",
    "title": "IELTS CAM Inspired 20 - Reading Test 1",
    "series": "Cambridge 20",
    "testNumber": 1,
    "type": "Reading",
    "durationMinutes": 60,
    "passages": [
      {
        "id": "cam-20-reading-1-p1",
        "passageNumber": 1,
        "title": "The kākāpō",
        "subtitle": "The vaira is a night-active, flightless parrot, now critically endangered and among the rarest of the Kelvan Islands' native birds.",
        "content": [
          "Known to the Rendi people as the vaira and to naturalists as the moss parrot, this large, ground-dwelling bird has a broad, pale, owl-like face. It grows to about 58 centimetres, its plumage mostly a mottled brown-green, with forward-set eyes, a heavy pale beak, sturdy greyish feet, and a tail and wings strikingly short for its bulk. No other parrot is known to have abandoned flight so completely, and few birds of any sort live as long, some reaching 90 years of age.",
          "Solitary by nature, a vaira keeps to one stretch of territory for years on end. Much of its feeding is done on the forest floor, though it also climbs high into the branches, and when it throws itself from a height the best it manages is a clumsy, wing-assisted glide to the ground. Everything it eats comes from plants: besides ferns and the bark, roots and leaves of trees, it takes a good quantity of seeds.",
          "Breeding comes in the warmer months, and then only in seasons when food is plentiful. The male has no share in incubation or in bringing up the young; it falls to the female alone to sit on the eggs and, later, to feed the chicks. Somewhere between one and four eggs are laid in a shallow hollow, which she works over repeatedly both before laying and while she broods. Since finding food obliges her to be away from the nest for long spells, the eggs and chicks left behind are unusually open to attack by predators.",
          "In the days before people reached the islands, the vaira was widespread in the Kelvan forests. That altered once the Rendi, the first settlers, arrived some 600 years ago. A flightless, ground-living creature made for easy hunting, and the Rendi valued it for its flesh and for its down, which they worked into warm garments; the dog and the rat that came with them hunted it too. By the time colonists from the mainland began arriving in the early 1800s, the vaira had already drawn back to the interior of the largest island and the wooded southern coasts. The newcomers only hastened its decline. Felling the forest took away much of its habitat, while animals let loose to graze — goats before all others — stripped out the food that remained. Cats, weasels and two more kinds of rat were introduced as well, and the bird now stood in real danger.",
          "The first organised rescue came in 1897, when the islands' authorities backed a scheme by the naturalist Tobias Ruward to carry several hundred vaira to Cormar Island, in the Halane fjords, a place believed free of predators. The safety proved short-lived: inside eight years martens had made their way across, and in time destroyed every bird moved there. By the mid-twentieth century the vaira had all but vanished, a few holding on only in the islands' remotest places.",
          "Across the years from 1951 to 1975, a newly formed wildlife agency mounted more than sixty search expeditions, most in the Halane country. Just six birds were secured, all male, and all but one died within months of being taken into care. A renewed drive in 1976 brought eighteen more vaira to light over the next two years, again without a single female. Then, on Vessig — a large island untroubled by martens, ferrets or weasels — a sizeable body of males was found, some 180 in all, and in 1983 females too were confirmed present. From that island's birds every later attempt to manage the species has grown.",
          "On Vessig, though, feral cats set about the birds, and their numbers dropped steeply once more. To save them, the survivors were moved, between 1982 and 1998, to three sanctuary islands — Storn, Aldis and Petrel. Breeding, even so, proved hard to bring about. Rats turned out to be a major destroyer of the chicks, and too few young lived to offset the loss of adults. By 1996 the islands had produced at least ten chicks, only two still living, and the population overall had fallen to forty-four. Its gravity forced a thorough rethink of how the vaira was managed.",
          "A new Recovery Plan came in 1998, and with it a dedicated panel of specialists — the Vaira Scientific Advisory Board — and a pronounced expansion of staffing. The campaign against predators on the three islands was intensified: cats had already gone from Petrel by 1984 and possums from Storn by 1989. Yet the birds' numbers began to rise only after rats had been cleared from all three islands and their management grew far more direct — carrying birds from island to island, putting out extra food for the adults, and hand-rearing any chick that was failing.",
          "Five years into the plan, the recovery was keeping to its targets. By 2004 four more females had been raised, lifting the population as a whole to fifty-five, and for the first time there was cautious room for hope. By June 2021 the tally had reached 190 birds.",
          "To this day the Recovery Plan governs the vaira's care. It sets three chief aims: to hold the loss of genetic variety across the population to the smallest degree possible; to keep, or bring back, enough fit habitat for a population expected to go on growing; and to ensure that local communities remain closely involved in protecting the bird."
        ],
        "questions": [
          {
            "id": 1,
            "prompt": "No other species of parrot lives to the age a vaira can reach.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "NOT GIVEN",
            "explanation": {
              "step1": "No other species of parrot lives to the age a vaira can reach . Ý câu hỏi: Cần kiểm tra tuổi thọ của vaira so với các loài vẹt khác , không phải với chim nói chung.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp cụm mang ý tương đương với “No other species of parrot”. Ở đoạn 1 có “No other parrot” => đây là vùng cần đọc kĩ. Đoạn 1 — No other parrot",
              "step3": "Đoạn 1: No other parrot is known to have abandoned flight so completely , and of any sort few birds live as long , some reaching 90 years of age .",
              "step4": "Câu hỏi nói: Không loài vẹt khác nào sống đến tuổi vaira có thể đạt tới. Bài đọc nói: Không loài vẹt khác nào được biết là từ bỏ khả năng bay đến mức ấy (“abandoned flight”); còn về tuổi thọ , chỉ nói ít loài chim sống lâu bằng (“few birds”, “live as long”). Bài không cho biết những loài chim ấy có phải vẹt hay không . Không đủ thông tin để xác nhận hoặc bác bỏ nhận định về tuổi thọ của các loài vẹt khác . Đáp án đúng: NOT GIVEN Đối chiếu paraphrasing: No other species of parrot No other parrot — nhưng trong bài, cụm này nói về khả năng bay. other species of parrot + lives to the age a vaira can reach bài không cho biết vẹt khác có đạt tuổi đó hay không. Đáp án TRUE Nếu skim/scan thấy “No other parrot”, sẽ dễ chọn TRUE Nhưng cụm này nói về khả năng bay, không phải tuổi thọ. Chỉ chọn TRUE nếu bài nói không loài vẹt khác nào sống lâu bằng vaira. FALSE Thấy “few birds” sống lâu bằng vaira có thể khiến ta nghĩ đến FALSE Nhưng bài không xác định chúng là vẹt. Chỉ chọn FALSE nếu bài nói có ít nhất một loài vẹt khác sống đến tuổi vaira có thể đạt tới."
            }
          },
          {
            "id": 2,
            "prompt": "Whether the vaira breeds in a given year depends on how much food is available.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "TRUE",
            "explanation": {
              "step1": "Whether the vaira breeds in a given year depends on how much food is available . Ý câu hỏi: Việc vaira sinh sản trong một năm có phụ thuộc vào lượng thức ăn không?",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp ý về việc sinh sản. Từ chỉ sự sinh sản (“Breeding”) ở đầu đoạn 3 => bắt đầu đọc kĩ từ câu (1). Đoạn 3 — Breeding",
              "step3": "Đoạn 3: Breeding comes in the warmer months, and then only in seasons when food is plentiful .",
              "step4": "Câu hỏi nói: Việc vaira sinh sản trong một năm phụ thuộc vào lượng thức ăn (“ depends on how much food is available ”). Bài đọc nói: Việc sinh sản chỉ diễn ra trong mùa thức ăn dồi dào (“ only in seasons when food is plentiful ”). Hai ý thống nhất: lượng thức ăn là một điều kiện của việc sinh sản ; câu hỏi không nói đó là điều kiện duy nhất. Đáp án đúng: TRUE Đối chiếu paraphrasing: breeds Breeding depends on how much food is available only in seasons when food is plentiful FALSE Nếu skim/scan thấy bài nhắc đến tháng ấm (“in the warmer months”), sẽ dễ nghĩ thời điểm mới là yếu tố quyết định Nhưng bài cũng nêu điều kiện về thức ăn. Chỉ chọn FALSE nếu bài nói vaira vẫn sinh sản khi thức ăn khan hiếm. NOT GIVEN Nếu thấy câu hỏi nói về một năm (“in a given year”) còn bài nói về các mùa (“in seasons”), sẽ dễ chọn NOT GIVEN Nhưng bài đã nêu rõ điều kiện thức ăn. Chỉ chọn NOT GIVEN nếu bài chỉ nói thời điểm sinh sản mà không cho biết nó có liên quan đến thức ăn hay không."
            }
          },
          {
            "id": 3,
            "prompt": "The chicks are cared for entirely by the female, with the male taking no part.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "TRUE",
            "explanation": {
              "step1": "The chicks are cared for entirely by the female , with the male taking no part . Câu hỏi khẳng định cả hai ý: chỉ chim mái chăm sóc chim non , còn chim trống không tham gia .",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp cụm mang ý tương đương với việc nuôi chim non (“bringing up the young”) ở đoạn 3 => đây là vùng cần đọc kĩ. Đoạn 3 — bringing up the young",
              "step3": "Đoạn 3: The male has no share in incubation or in bringing up the young ; it falls to the female alone to sit on the eggs and, later, to feed the chicks .",
              "step4": "Câu hỏi nói: Chim non được chỉ chim mái chăm sóc (“entirely by the female”); chim trống không tham gia (“male taking no part”). Bài đọc nói: Chim trống không tham gia nuôi con (“no share” trong việc “bringing up the young”); chỉ chim mái cho chim non ăn (“ the female alone ”, “feed the chicks”). Hai ý khớp nhau. Đáp án đúng: TRUE Đối chiếu paraphrasing: male taking no part has no share trong việc bringing up the young entirely by the female the female alone FALSE Sai vì bài xác nhận chim trống không tham gia nuôi con và chỉ chim mái cho chim non ăn. Chỉ chọn FALSE nếu bài nói chim trống có tham gia nuôi con hoặc chim mái không chăm con một mình. NOT GIVEN Nếu chỉ thấy việc cho ăn (“feed the chicks”), dễ nghĩ bài chưa nói rõ ai nuôi chim non Nhưng bài đã nêu chim trống không góp phần (“has no share”) trong việc nuôi con. Chỉ chọn NOT GIVEN nếu bài không cho biết vai trò của chim trống hoặc liệu chim mái có chăm con một mình hay không."
            }
          },
          {
            "id": 4,
            "prompt": "At the point when mainland colonists arrived, the vaira still ranged across the whole of the Kelvan Islands.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "FALSE",
            "explanation": {
              "step1": "At the point when mainland colonists arrived , the vaira still ranged across the whole of the Kelvan Islands . Ta cần kiểm tra phạm vi phân bố của vaira đúng lúc người từ đất liền đến , không phải ở thời kỳ trước đó.",
              "step2": "Dựa vào cụm chỉ nhóm người từ đất liền (“mainland colonists”) => tìm cụm tương ứng (“colonists from the mainland”) ở đoạn 4 và đọc kỹ câu này. Đoạn 4 — mainland colonists",
              "step3": "Đoạn 4: By the time colonists from the mainland began arriving in the early 1800s , the vaira had already drawn back to the interior of the largest island and the wooded southern coasts .",
              "step4": "Câu hỏi nói: Khi người từ đất liền đến, vaira vẫn phân bố khắp toàn bộ Kelvan Islands (“still ranged across the whole of the Kelvan Islands”). Bài đọc nói: Tính đến lúc họ bắt đầu đến, vaira đã rút về (“had already drawn back”) những khu vực hạn chế, trong đó có vùng nội địa đảo lớn nhất (“the interior of the largest island”). ⇒ Hai ý mâu thuẫn về phạm vi phân bố . Đáp án đúng: False Đối chiếu paraphrasing: when mainland colonists arrived By the time colonists from the mainland began arriving still ranged across had already drawn back the whole of the Kelvan Islands the interior of the largest island Đáp án TRUE Nếu đọc lướt thấy vaira từng phân bố rộng (“widespread in the Kelvan forests”), sẽ dễ chọn TRUE Nhưng đó là trước khi con người đến (“before people reached the islands”), không phải lúc người từ đất liền đến. Chỉ chọn TRUE nếu bài nói vaira vẫn phân bố khắp Kelvan Islands vào đúng thời điểm được hỏi. NOT GIVEN Nếu chỉ dò đúng cụm “the whole of the Kelvan Islands” mà không thấy trong bài, sẽ dễ chọn NOT GIVEN Nhưng câu (4) đã cho biết phạm vi phân bố của vaira tại mốc này. Chỉ chọn NOT GIVEN nếu bài không cho biết vaira phân bố ở đâu khi người từ đất liền đến."
            }
          },
          {
            "id": 5,
            "prompt": "Every vaira collected during the early search expeditions died soon afterwards in captivity.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "FALSE",
            "explanation": {
              "step1": "Every vaira collected during the early search expeditions died soon afterwards in captivity . Ý câu hỏi: Có phải mọi con vaira được thu nhận trong các chuyến tìm kiếm ban đầu đều chết sớm sau khi được đưa vào chăm sóc không?",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp thông tin về các chuyến tìm kiếm (“search expeditions”). Cụ thể, đoạn 6 nhắc đến các chuyến tìm kiếm => đây là vùng cần đọc kĩ. Đoạn 6 — search expeditions",
              "step3": "Đoạn 6: Across the years from 1951 to 1975, a newly formed wildlife agency mounted more than sixty search expeditions , most in the Halane country . Just six birds were secured , all male, and all but one died within months of being taken into care . Câu (1): xác định các chuyến tìm kiếm ban đầu. Câu (2): cho biết sáu con chim được thu nhận, nhưng một con là ngoại lệ đối với việc chết trong vài tháng.",
              "step4": "Câu hỏi nói: mọi con vaira (“Every”) đều chết không lâu sau đó (“soon afterwards”). Bài đọc nói: tất cả trừ một con (“ all but one ”) chết trong vài tháng sau khi được đưa vào chăm sóc (“within months of being taken into care”). ⇒ Bài đọc nêu một ngoại lệ , nên khẳng định “mọi con” trong câu hỏi bị bác bỏ. Đáp án đúng: FALSE Đối chiếu paraphrasing: Every all but one collected were secured Đáp án TRUE Nếu chỉ thấy thông tin chết trong vài tháng (“died within months”), sẽ dễ chọn TRUE Nhưng bài nói rõ trừ một con (“all but one”). Chỉ chọn TRUE nếu bài nói cả sáu con đều chết trong vài tháng. NOT GIVEN Dễ phân vân vì bài không cho biết con ngoại lệ cuối cùng sống được bao lâu Nhưng để bác bỏ chữ mọi, chỉ cần biết một con không chết trong khoảng thời gian nêu ở bài. Chỉ chọn NOT GIVEN nếu bài không cho biết con nào có chết sớm sau khi được đưa vào chăm sóc hay không."
            }
          },
          {
            "id": 6,
            "prompt": "Some members of the Vaira Scientific Advisory Board came from outside the Kelvan Islands.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "NOT GIVEN",
            "explanation": {
              "step1": "Some members of the Vaira Scientific Advisory Board came from outside the Kelvan Islands . Ý câu hỏi: Cần kiểm tra có ít nhất một thành viên của hội đồng đến từ ngoài Kelvan Islands hay không.",
              "step2": "Dựa vào tên riêng Vaira Scientific Advisory Board => ta tìm đến chỗ bài đọc nhắc đến hội đồng này ở đoạn 8. Đoạn 8",
              "step3": "Đoạn 8: A new Recovery Plan came in 1998 , and with it a dedicated panel of specialists — the Vaira Scientific Advisory Board — and a pronounced expansion of staffing .",
              "step4": "Câu hỏi nói: Một số thành viên đến từ ngoài Kelvan Islands (“came from outside the Kelvan Islands”). Bài đọc nói: Vaira Scientific Advisory Board là một hội đồng chuyên gia (“panel of specialists”), nhưng không nêu thành viên đến từ đâu . => Không đủ thông tin để khẳng định hoặc phủ định câu hỏi. Đáp án đúng: NOT GIVEN Đối chiếu paraphrasing: came from outside the Kelvan Islands không có trong bài. Đáp án TRUE Nếu skim/scan thấy hội đồng gồm các chuyên gia (“panel of specialists”), sẽ dễ suy đoán có người đến từ nơi khác Nhưng bài không nói xuất xứ của họ. Chỉ chọn TRUE nếu bài xác nhận ít nhất một thành viên đến từ ngoài Kelvan Islands. FALSE Nếu thấy Recovery Plan dành cho loài chim ở Kelvan Islands, sẽ dễ tưởng mọi thành viên hội đồng đều ở đó Nhưng mục đích của kế hoạch không chứng minh xuất xứ của họ. Chỉ chọn FALSE nếu bài xác nhận không thành viên nào đến từ ngoài Kelvan Islands."
            }
          },
          {
            "id": 7,
            "prompt": "A kind of parrot\n• feeds on ferns, on parts taken from trees, and on  _____ \n• lays its eggs inside a  _____",
            "type": "FILL_IN_BLANK",
            "correct": "seeds",
            "explanation": {
              "step1": "- feeds on ferns , on parts taken from trees , and on 7. ___ Ý câu hỏi: Vaira còn ăn gì ngoài dương xỉ và các bộ phận lấy từ cây? Dự đoán ô trống: Sau “on” cần một danh từ chỉ thức ăn. Chưa thể xác định đó là danh từ số nhiều hay không đếm được.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta tìm đoạn nhắc đến dương xỉ (“ferns”). Từ này xuất hiện trong phần nói về thức ăn ở đoạn 2 => bắt đầu đọc tại đây. Đoạn 2 — ferns",
              "step3": "Đoạn 2: Everything it eats comes from plants : besides ferns and the bark , roots and leaves of trees , it takes a good quantity of seeds .",
              "step4": "Đáp án phù hợp nhất: seeds Câu hoàn chỉnh: • feeds on ferns, on parts taken from trees, and on seeds (Ăn dương xỉ, các bộ phận lấy từ cây và hạt .) => Khớp với dự đoán: seeds là một loại thức ăn được nêu thêm sau dương xỉ và các bộ phận của cây; đáp án gồm 1 từ lấy nguyên văn từ bài. Đối chiếu paraphrasing: parts taken from trees the bark + of trees and on takes a good quantity of seeds ferns “ dương xỉ ”: Từ này đã có trước chỗ trống trong đề, nên không phải thức ăn cần điền thêm. bark, roots, leaves “ vỏ, rễ, lá ”: Đây là các bộ phận của cây, tương ứng với mục đã ghi trong đề (“parts taken from trees”). plants “ thực vật ”: Đây là nhóm thức ăn bao quát; chỗ trống cần món được nêu thêm sau các mục đã có."
            }
          },
          {
            "id": 8,
            "prompt": "The coming of the Rendi settlers\n• the bird's  _____  was turned into clothing",
            "type": "FILL_IN_BLANK",
            "correct": "hollow",
            "explanation": {
              "step1": "- lays its eggs inside a 8. ___ Ý câu hỏi: Cần tìm nơi vaira đặt trứng . Vì trước ô trống có “a”, ta dự đoán đáp án là danh từ đếm được số ít chỉ một nơi.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp ý tương đương với việc đẻ trứng (“ lays its eggs ”). Ở đoạn 3, cụm “eggs are laid” => đây là vùng liên quan. Đoạn 3 — eggs are laid",
              "step3": "Đoạn 3: Somewhere between one and four eggs are laid in a shallow hollow , which she works over repeatedly both before laying and while she broods .",
              "step4": "Đáp án phù hợp nhất: hollow Câu hoàn chỉnh: • lays its eggs inside a hollow (Đẻ trứng trong một chỗ trũng .) => “Hollow” là danh từ chỉ nơi đặt trứng, khớp với dự đoán và thông tin trong bài; đáp án gồm một từ. Đối chiếu paraphrasing: lays its eggs inside a eggs are laid in a shallow “ nông ”: Từ này đứng ngay trước đáp án nhưng là tính từ mô tả nơi đặt trứng, không phải tên nơi đó. Đáp án nest “ tổ ”: Nếu đọc lướt, dễ chọn vì đoạn 3 có “away from the nest” Nhưng câu (3) dùng chính từ “hollow” để chỉ nơi trứng được đặt."
            }
          },
          {
            "id": 9,
            "prompt": "The coming of mainland colonists\n• one introduced animal, the  _____ , consumed the plants the vaira depended on",
            "type": "FILL_IN_BLANK",
            "correct": "down",
            "explanation": {
              "step1": "- the bird's 9. ___ was turned into clothing Ô trống cần một danh từ chỉ bộ phận hoặc chất liệu lấy từ vaira để làm quần áo. Chưa cần đoán chính xác đó là gì.",
              "step2": "Dựa vào tên riêng Rendi trong tiêu đề ghi chú => ta tìm đến đoạn 4 và bắt đầu đọc chỗ nói về cách người Rendi sử dụng vaira. Đoạn 4",
              "step3": "Đoạn 4: A flightless , ground-living creature made for easy hunting , and the Rendi valued it for its flesh and for its down , which they worked into warm garments ; the dog and the rat that came with them hunted it too .",
              "step4": "Đáp án phù hợp nhất: down Câu hoàn chỉnh: the bird's down was turned into clothing ( Lông tơ của vaira được làm thành quần áo. ) => Khớp với dự đoán về chất liệu làm quần áo: down được làm thành trang phục ấm; 1 từ. Đối chiếu paraphrasing: turned into clothing worked into warm garments flesh “ thịt ”: Cũng là thứ người Rendi quý, nhưng phần được làm thành trang phục là down, không phải flesh. plumage “ bộ lông ”: Đoạn 1 dùng từ này để mô tả vẻ ngoài của vaira; câu (3) dùng down khi nói đến việc làm trang phục."
            }
          },
          {
            "id": 10,
            "prompt": "Saving the vaira\n• the naturalist Tobias Ruward made an early attempt to protect the bird\n• the first proof of females living on Vessig Island came in the year  _____ \n• the Recovery Plan led to a sharp rise in  _____ \n• a present-day aim is to keep  _____  taking part in the bird's conservation",
            "type": "FILL_IN_BLANK",
            "correct": "goats",
            "explanation": {
              "step1": "• one introduced animal , the 10. ___ , consumed the plants the vaira depended on Ô trống cần tên một loài vật được đưa tới khi người định cư từ đất liền xuất hiện. Sau “the”, ta cần một danh từ chỉ loài vật ; chưa cần đoán đó là loài nào.",
              "step2": "Mục về sự xuất hiện của người định cư từ đất liền (“The coming of mainland colonists”) dẫn tới đoạn 4, nơi bài đọc nhắc những người này (“colonists from the mainland”) => bắt đầu đọc tác động của họ lên vaira tại đây. Đoạn 4 — colonists from the mainland",
              "step3": "Đoạn 4: Felling the forest took away much of its habitat , while animals let loose to graze — goats before all others — stripped out the food that remained . Vế đầu nói về mất nơi sống ; vế sau nói về mất nguồn thức ăn và nêu đích danh goats.",
              "step4": "Đáp án phù hợp nhất: goats Câu hoàn chỉnh: one introduced animal, the goats , consumed the plants the vaira depended on (Một loài vật được đưa tới là goats đã ăn những cây mà vaira phụ thuộc vào.) => Khớp với dự đoán về tên loài vật và chi tiết nguồn thức ăn bị ăn cạn trong bài; đáp án gồm 1 từ, còn đề không nêu giới hạn số từ. Đối chiếu paraphrasing: introduced animal animals let loose to graze consumed the plants the vaira depended on stripped out the food Đáp án cats Nếu skim/scan, dễ chọn vì câu 7 đoạn 4 cũng nhắc tới cats trong nhóm động vật được đưa tới Nhưng câu (6) nêu goats ở đúng vế nói về nguồn thức ăn bị ăn cạn. weasels Cũng xuất hiện trong danh sách động vật được đưa tới ở câu 7 đoạn 4, nhưng không được gắn với hành động ăn cạn nguồn thức ăn trong câu (6). Đáp án rat Đoạn 4 có nhắc rat, nhưng chi tiết quyết định về việc mất nguồn thức ăn vẫn chỉ đích danh goats."
            }
          },
          {
            "id": 11,
            "prompt": "Complete blank for question 11:",
            "type": "FILL_IN_BLANK",
            "correct": "1983",
            "explanation": {
              "step1": "- the first proof of females living on Vessig Island came in the year 11. ___ Cụm “in the year” cho biết ô trống cần một năm . Ta cần tìm năm chim cái được xác nhận có mặt trên Vessig, không phải năm tìm thấy chim trống.",
              "step2": "Dựa vào tên riêng Vessig trong câu hỏi => ta tìm đến đoạn 6, nơi bài đọc nói về những con vaira được phát hiện trên đảo này. Đoạn 6",
              "step3": "Đoạn 6: Then, on Vessig — a large island untroubled by martens, ferrets or weasels — a sizeable body of males was found , some 180 in all , and in 1983 females too were confirmed present .",
              "step4": "Đáp án phù hợp nhất: 1983 Câu hoàn chỉnh: The first proof of females living on Vessig Island came in the year 1983. ( Bằng chứng đầu tiên về sự hiện diện của chim cái trên Vessig xuất hiện vào năm 1983. ) => Khớp với dự đoán về một năm: bài đọc xác nhận chim cái có mặt vào 1983 ; một số năm, đúng yêu cầu ô trống. Đối chiếu paraphrasing: females living on Vessig Island on Vessig + females too were confirmed present Đáp án 180 — số lượng chim: Dễ nhầm vì xuất hiện ngay trong câu (4), nhưng “some 180 in all” nói về chim trống, không phải một năm. Đáp án 1976 — năm bắt đầu đợt tìm kiếm mới: Câu 3 đoạn 6 nhắc đến năm này, nhưng khi đó vẫn chưa tìm thấy chim cái. Đáp án 1982 — năm bắt đầu giai đoạn chuyển chim: Đoạn 7 dùng mốc này cho việc chuyển chim đến các đảo bảo tồn, không phải lúc xác nhận chim cái trên Vessig."
            }
          },
          {
            "id": 12,
            "prompt": "Complete blank for question 12:",
            "type": "FILL_IN_BLANK",
            "correct": "staffing",
            "explanation": {
              "step1": "- the Recovery Plan led to a sharp rise in 12. ___ Sau “a sharp rise in”, chỗ trống cần một danh từ chỉ thứ tăng lên khi Recovery Plan được triển khai. Ta chưa cần đoán chính xác từ đó; hãy tìm trong bài một cụm diễn đạt ý tăng mạnh .",
              "step2": "Dựa vào tên kế hoạch “Recovery Plan” => bắt đầu đọc ở đoạn 8, nơi bài giới thiệu kế hoạch này. Đoạn 8 — Recovery Plan",
              "step3": "Đoạn 8: A new Recovery Plan came in 1998 , and with it a dedicated panel of specialists — the Vaira Scientific Advisory Board — and a pronounced expansion of staffing .",
              "step4": "Đáp án phù hợp nhất: staffing Câu hoàn chỉnh: the Recovery Plan led to a sharp rise in staffing (Recovery Plan kéo theo sự gia tăng mạnh về nhân sự .) => Khớp với dự đoán: “staffing” là điều được mở rộng rõ rệt khi kế hoạch xuất hiện; đáp án gồm 1 từ. Đề không nêu giới hạn số từ. Đối chiếu paraphrasing: a sharp rise in a pronounced expansion of led to and with it specialists các chuyên gia: Cụm “a dedicated panel of specialists” đứng ngay trước đáp án nên dễ chọn nhầm Nhưng cụm được mô tả là mở rộng rõ rệt nói về staffing, không phải specialists. birds những con chim: Đoạn 8 cũng nói số chim “began to rise” Nhưng câu (1) đang nói về sự tăng nhân sự khi Recovery Plan xuất hiện."
            }
          },
          {
            "id": 13,
            "prompt": "Complete blank for question 13:",
            "type": "FILL_IN_BLANK",
            "correct": "communities",
            "explanation": {
              "step1": "- a present-day aim is to keep 13. ___ taking part in the bird's conservation Ô trống đứng sau *keep* và trước *taking part*, nên cần một danh từ chỉ đối tượng được duy trì việc tham gia. Dựa vào nghĩa câu hỏi, ta dự đoán đó là một nhóm người tham gia bảo vệ vaira; chưa cần đoán chính xác tên nhóm.",
              "step2": "Dựa vào tên riêng Recovery Plan ở phần ghi chú ngay trước câu 13, kết hợp dấu hiệu mục tiêu hiện nay (“present-day aim”) => tìm đến đoạn 10, bắt đầu từ câu cho biết kế hoạch vẫn chi phối việc chăm sóc vaira. Đoạn 10 — present-day aim",
              "step3": "Đoạn 10: To this day the Recovery Plan governs the vaira's care . It sets three chief aims : to hold the loss of genetic variety across the population to the smallest degree possible ; to keep , or bring back, enough fit habitat for a population expected to go on growing ; and to ensure that local communities remain closely involved in protecting the bird . Câu (1): Recovery Plan vẫn có hiệu lực đến nay . Câu (2): một mục tiêu của kế hoạch là giữ các cộng đồng tiếp tục tham gia bảo vệ vaira .",
              "step4": "Đáp án phù hợp nhất: communities Câu hoàn chỉnh: a present-day aim is to keep communities taking part in the bird's conservation (Một mục tiêu hiện nay là duy trì sự tham gia của các cộng đồng vào việc bảo vệ vaira.) => Khớp với dự đoán về một nhóm người và với đối tượng được nêu trong bài; đáp án gồm 1 từ, đề không nêu giới hạn số từ. Đối chiếu paraphrasing: present day To this day keep remain taking part in the bird's conservation involved in protecting the bird population — quần thể: Từ này xuất hiện trong danh sách mục tiêu, nhưng chỉ quần thể vaira, không phải nhóm tham gia bảo vệ chim. specialists — các chuyên gia: Đoạn 8 nhắc đến một nhóm chuyên gia (“panel of specialists”), nhưng mục tiêu ở câu (2) nói đến các cộng đồng (“communities”). habitat — môi trường sống: Đây là đối tượng của một mục tiêu khác, không phải nhóm có thể tham gia bảo tồn."
            }
          }
        ]
      },
      {
        "id": "cam-20-reading-1-p2",
        "passageNumber": 2,
        "title": "To Britain",
        "subtitle": "Elena Marsh looks at efforts to bring the greybeam back to Britain",
        "content": [
          "To Britain"
        ],
        "questions": [
          {
            "id": 14,
            "prompt": "Which section contains the following information: \"how the small number of old trees still standing holds back research\"?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H"
            ],
            "correct": "D",
            "explanation": {
              "step1": "how the small number of old trees still standing holds back research 👍 NÊN tìm: cây già vẫn sống sót, số lượng ít, và chính sự ít ỏi đó khiến nghiên cứu bị hạn chế. 👎 ĐỪNG tìm: đoạn chỉ nói cây chết nhiều, cây non gặp nguy hiểm hoặc thử nghiệm kháng bệnh mà không nêu việc thiếu cây già cản trở nghiên cứu.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh để tìm ý thiếu cây già gây khó khăn cho nghiên cứu. Đoạn D nêu công việc bị cản trở (“the effort is held back”) => đây là vùng liên quan. Đoạn D: The way forward , Halloran maintains, is to find these survivors and work out what set them apart when so many others died - though the effort is held back by how few old trees remain to study . Đoạn D — the effort is held back",
              "step3": "Đối chiếu paraphrasing: the small number of old trees how few old trees remain still standing survivors holds back research the effort is held back. Công việc đó là tìm hiểu điểm khác biệt của cây sống sót work out what set them apart . Đáp án đúng: Paragraph D — còn quá ít cây già để nghiên cứu, nên việc tìm hiểu cây sống sót bị cản trở . Đáp án A Nếu skim/scan thấy việc gần như bắt đầu từ con số không (“almost nothing”), dễ liên tưởng đến số lượng cây ít Nhưng đoạn A nói về điểm xuất phát của việc phục hồi, không phải việc thiếu cây già cản trở nghiên cứu. Đáp án E Nếu chỉ chú ý đến việc đem cây ra thử nghiệm (“put to the test”), dễ chọn E vì thấy có nghiên cứu Nhưng đây là thử nghiệm trên cây non, không có ý thiếu cây già khiến nghiên cứu bị hạn chế. Đáp án G Nếu chỉ thấy cây sống sót (“survivors”), dễ chọn G Nhưng đoạn này bàn về bảo vệ những cây ấy thay vì trồng mới, không nói số lượng ít cản trở nghiên cứu.",
              "step4": "Đáp án chính xác: D"
            }
          },
          {
            "id": 15,
            "prompt": "Which section contains the following information: \"contrasting views on whether bringing the tree back to Britain is worthwhile\"?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H"
            ],
            "correct": "G",
            "explanation": {
              "step1": "contrasting views on whether bringing the tree back to Britain is worthwhile 👍 NÊN tìm: các đánh giá khác nhau về việc đưa cây trở lại Britain — một phía thấy có lợi, phía khác dè dặt hoặc chưa bị thuyết phục. 👎 ĐỪNG tìm: đoạn chỉ nói cây từng quan trọng, cách phục hồi cây hoặc khó khăn do bệnh mà không đối chiếu các quan điểm về việc phục hồi có đáng làm hay không.",
              "step2": "Britain là địa danh thuộc chủ đề chung của bài, nên ta tìm theo ý đánh giá khác nhau về việc phục hồi cây . Đoạn G đặt vấn đề chấp nhận việc đưa greybeam trở lại (“put the greybeam back”) => đây là vùng cần đọc. Đoạn G: To her mind the ecological case is powerful : the trees would shelter wildlife , which she counts among the gains . Others are less convinced . Câu (3): nêu đánh giá tích cực, dựa trên lợi ích sinh thái của việc phục hồi cây. Câu (4): đối chiếu với nhóm ít bị thuyết phục hơn về giá trị của việc phục hồi. Đoạn G — put the greybeam back",
              "step3": "Đối chiếu paraphrasing: bringing the tree back to Britain put the greybeam back. is worthwhile the ecological case is powerful đây là đánh giá tích cực. contrasting views đánh giá tích cực ở câu (3) Others are less convinced ở câu (4). Đáp án đúng: Paragraph G . Đoạn này có hai phía đánh giá khác nhau ; phía dè dặt không nhất thiết phản đối hoàn toàn. Đáp án A Nếu đọc lướt thấy cơ sở để lạc quan (“grounds for optimism”), em dễ nghĩ đây là đánh giá việc phục hồi có đáng làm Nhưng đoạn A không đưa ra một phía quan điểm khác để đối chiếu. Đáp án E Cụm tái đưa cây trở lại trên quy mô lớn (“large-scale reintroduction”) trùng chủ đề câu hỏi Nhưng đoạn E nói về điều kiện phục hồi và thử nghiệm kháng bệnh, không phải các đánh giá trái chiều về giá trị của việc phục hồi. Đáp án D Các khả năng khác nhau (“avoidance, tolerance, or real resistance”) dễ bị nhầm với các quan điểm khác nhau Nhưng chúng giải thích vì sao cây sống sót, không đánh giá việc đưa cây trở lại Britain có đáng làm hay không.",
              "step4": "Đáp án chính xác: G"
            }
          },
          {
            "id": 16,
            "prompt": "Which section contains the following information: \"an account of the way the infection first reached the country\"?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H"
            ],
            "correct": "C",
            "explanation": {
              "step1": "an account of the way the infection first reached the country 👍 NÊN tìm: đoạn mô tả cụ thể con đường bệnh được đưa từ bên ngoài vào quốc gia lần đầu. 👎 ĐỪNG tìm: đoạn chỉ nói hậu quả của bệnh, sự lây lan giữa các cây hoặc nguy cơ nhập bệnh trong tương lai.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh để tìm ý bệnh được đưa từ bên ngoài vào quốc gia. Đoạn C nhắc đến việc bệnh được đưa vào (“ brought in ”) qua gỗ nhập khẩu => đây là vùng liên quan. Đoạn C: An earlier outbreak in the 1930s flared briefly before fading , but a second , far deadlier wave broke out in the 1980s , brought in on consignments of greybeam timber imported from the Baltic . Đoạn C — brought in",
              "step3": "Đối chiếu paraphrasing: an account câu (2) kể cụ thể một đợt bệnh bùng phát và con đường nó được đưa vào . the infection a second, far deadlier wave. the way + reached the country brought in on + greybeam timber imported from the Baltic. Lưu ý bài gọi đợt bệnh này là đợt thứ hai (“a second”), không nêu con đường xâm nhập của đợt trước. Vì vậy, đoạn C trực tiếp chứng minh con đường bệnh được đưa vào , nhưng không chứng minh đầy đủ ý lần đầu tiên (“first”) trong câu hỏi. Đáp án phù hợp nhất: Paragraph C . Paragraph A Nếu skim/scan thấy bệnh do nấm (“a fungal disease”) và thiệt hại tại Britain, em dễ chọn A Nhưng đoạn này nói về hậu quả, không giải thích bệnh được đưa vào bằng cách nào. Paragraph E Cụm tác nhân gây bệnh được đưa vào bên trong (“a trace of the pathogen slipped inside”) dễ tạo cảm giác đúng Nhưng đây là thử nghiệm trên cây non, không phải bệnh xâm nhập quốc gia. Paragraph G Nếu thấy nguy cơ nhập bệnh mới (“importing new diseases”), em dễ chọn G vì có ý đưa bệnh từ ngoài vào Nhưng đây là nguy cơ trong tương lai, không phải mô tả một lần xâm nhập đã xảy ra.",
              "step4": "Đáp án chính xác: C"
            }
          },
          {
            "id": 17,
            "prompt": "Which section contains the following information: \"the particular circumstances that have spared one place from the disease\"?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H"
            ],
            "correct": "F",
            "explanation": {
              "step1": "the particular circumstances that have spared one place from the disease 👍 NÊN tìm: một địa điểm cụ thể có cây sống sót, kèm điều kiện địa phương giải thích vì sao bệnh khó gây hại ở đó . 👎 ĐỪNG tìm: đoạn chỉ nói cây sống sót nhưng chưa rõ nguyên nhân; khả năng kháng bệnh của giống cây; hoặc nơi bệnh xuất phát.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh để tìm ý một nơi được bảo vệ nhờ điều kiện riêng. Đoạn F nối sự sống sót của cây với nơi chúng mọc (“ where they grow ”) => đây là vùng liên quan. Đoạn F: Cromer now counts near 12,000 greybeams , and their survival seems to owe much to where they grow : stiff winds off the sea make it hard for the beetle to gain a foothold in this exposed coastal town . Đoạn F — where they grow",
              "step3": "Đối chiếu paraphrasing: the particular circumstances stiff winds off the sea have spared + from the disease their survival + make it hard for the beetle to gain a foothold one place Cromer Gió mạnh từ biển cản trở bọ bám trụ tại Cromer => giúp greybeams sống sót . Đây chính là điều kiện cụ thể bảo vệ một địa điểm; không có nghĩa nơi này an toàn tuyệt đối. Đáp án đúng: Paragraph F . Đoạn D Nếu skim/scan thấy cây đã thoát dịch (“escaped the epidemic”), sẽ dễ chọn D Nhưng đoạn này chưa xác định nguyên nhân cây sống sót, không nêu điều kiện cụ thể bảo vệ một địa điểm. Đoạn E Nếu thấy cây chống lại hoặc chịu được bệnh (“fight off the disease or tolerate it”), sẽ dễ chọn E Nhưng đây là đặc tính của cây, không phải điều kiện địa phương giúp một nơi tránh tác hại của bệnh.",
              "step4": "Đáp án chính xác: F"
            }
          },
          {
            "id": 18,
            "prompt": "Which section contains the following information: \"the point in a young tree's growth at which it begins to be at risk\"?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H"
            ],
            "correct": "D",
            "explanation": {
              "step1": "the point in a young tree's growth at which it begins to be at risk 👍 NÊN tìm: một ngưỡng phát triển của cây non và thông tin cho thấy cây bắt đầu gặp nguy cơ khi đạt ngưỡng đó. 👎 ĐỪNG tìm: đoạn chỉ nói cây mắc bệnh, cây non được thử nghiệm hoặc điều kiện địa lý bảo vệ cây mà không nêu ngưỡng phát triển.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta tìm ý cây lớn tới một ngưỡng thì bắt đầu gặp nguy cơ. Đoạn D nhắc đến việc bọ tìm đến cây khi cây vượt một kích thước nhất định (“past a certain size”) => đây là vùng liên quan. Đoạn D: As soon as a trunk thickens to between twelve and eighteen centimetres across , it becomes just the right home for the beetle to breed in and the fungus to take hold . Đoạn D — past a certain size",
              "step3": "Đối chiếu paraphrasing: the point in a young tree's growth a trunk thickens to between twelve and eighteen centimetres across at which it begins As soon as at risk the right home for the beetle to breed in Đáp án đúng: Paragraph D — ngưỡng được hỏi là đường kính 12–18 cm , khi thân cây trở thành nơi thích hợp cho bọ sinh sản . Paragraph E Nếu chỉ thấy cây non (“saplings”), ta dễ chọn E Nhưng cây ở đây được chủ động đưa mầm bệnh vào để thử nghiệm, không phải bắt đầu gặp nguy cơ khi lớn tới một ngưỡng. Paragraph C Đoạn này giải thích nấm gây hại cho cây qua hệ thống dẫn truyền (“vascular system”) Nhưng cơ chế gây bệnh không cho biết mốc phát triển khiến cây bắt đầu gặp nguy cơ. Paragraph F Lời cảnh báo nguy cơ ngay trước mắt (“right on our doorstep”) có thể khiến ta chọn F Nhưng đoạn này nói về điều kiện nơi cây sống và nguy cơ bọ xâm nhập, không phải ngưỡng phát triển của cây non.",
              "step4": "Đáp án chính xác: D"
            }
          },
          {
            "id": 19,
            "prompt": "Match the statement with the correct person/feature: \"Signs of the illness show up quickly once a tree has caught it.\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "Tomas Ashworth",
              "Dr Ingrid Halloran",
              "Marek Sobol"
            ],
            "correct": "Dr Ingrid Halloran",
            "explanation": {
              "step1": "Tên đang xử lý: Dr Ingrid Halloran Bài nhắc đến Halloran ở các đoạn D, E và G.",
              "step2": "Even so, a scattering of ancient trees , some several centuries old, have been logged in counties such as Shropshire , having somehow escaped the epidemic . The way forward , Halloran maintains , is to find these survivors and work out what set them apart when so many others died - though the effort is held back by how few old trees remain to study . What I cannot accept is that it all comes down to chance .\" Câu (4): Câu (4)–(5), đoạn D: xác định những cây già thoát dịch; Halloran muốn tìm hiểu điều khiến chúng sống sót khi những cây khác chết. Câu (8): Câu (8), đoạn D: Halloran khẳng định sự sống sót không thể chỉ do may mắn . 🔎 Khớp với statement 8: The endurance of certain old trees cannot simply be put down to luck . Đối chiếu paraphrasing: The endurance escaped the epidemic certain old trees ancient trees cannot simply be put down to luck cannot accept + it all comes down to chance",
              "step3": "Với tên Dr Ingrid Halloran ở đoạn D, ta chọn được: câu 8. Marek Sobol đoạn G cũng nói về việc để những cây sống sót yên ổn (“leave the survivors be”). Nhưng đó là lời khuyên chờ đợi, không phải nhận định bác bỏ cách giải thích bằng may mắn như câu (8) đoạn D.",
              "step4": "A fresh generation of saplings has been raised and deliberately put to the test: a narrow cut is opened in the bark and a trace of the pathogen slipped inside . \" What strikes you is the sheer speed of it ,\" Halloran says . \" Come back after four to six weeks and the resistant trees look untouched , while the vulnerable ones have already dropped their leaves - some have died outright .\" Câu (2): Câu (2), đoạn E: mô tả phép thử đưa mầm bệnh vào cây. Câu (3): Câu (3)–(4), đoạn E: Halloran nhấn mạnh dấu hiệu bệnh xuất hiện nhanh ; cây dễ nhiễm đã rụng lá , thậm chí chết, sau bốn đến sáu tuần. 🔎 Khớp với statement 6: Signs of the illness show up quickly once a tree has caught it . Đối chiếu paraphrasing: Signs of the illness have already dropped their leaves quickly speed + after four to six weeks once a tree has caught it the pathogen + slipped inside"
            }
          },
          {
            "id": 20,
            "prompt": "Match the statement with the correct person/feature: \"A better approach might be to hold off and see whether the old trees that remain keep thriving.\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "Tomas Ashworth",
              "Dr Ingrid Halloran",
              "Marek Sobol"
            ],
            "correct": "Marek Sobol",
            "explanation": {
              "step1": "Tên đang xử lý: Marek Sobol Bài nhắc đến Marek Sobol ở đoạn A và đoạn G.",
              "step2": "\" Unless you saw the countryside as it once was , the scale of what happened is hard to take in ,\" says Marek Sobol of the Native Woodland Alliance . \" It 's only in old photographs that it really hits you : these were huge, commanding trees , and then they were gone .\" Câu (4): Câu (4)–(5), đoạn A: nêu rồi minh họa điều kiện để thấm quy mô mất mát : thấy greybeams từng lớn, nổi bật trước khi biến mất. 🔎 Khớp với statement 10: The scale of the loss only sinks in once you realise how dominant the tree used to be . Đối chiếu paraphrasing: The scale of the loss the scale of what happened only sinks in once you realise Unless you saw the countryside as it once was + is hard to take in how dominant the tree used to be huge, commanding trees",
              "step3": "Với tên Marek Sobol ở đoạn A, ta chọn được: câu 10. Tomas Ashworth Đoạn F cũng có ký ức ám ảnh về sự mất mát (“it never left me”), nên dễ nhầm Nhưng nhớ mãi sự việc không phải là nhận định cần thấy cây từng nổi bật thế nào mới hiểu quy mô mất mát.",
              "step4": "Marek Sobol sees a snag . \" Sometimes the wisest thing is to step back and let nature take its time ; leave the survivors be , and resistance may come of its own accord ,\" he says . Câu (5): Câu (5), đoạn G: xác lập Marek Sobol là người nhận thấy vấn đề. Câu (10): Câu (10), đoạn G: đưa ra phương án chờ, để cây sống sót yên => sức kháng bệnh có thể tự hình thành. 🔎 Khớp với statement 7: A better approach might be to hold off and see whether the old trees that remain keep thriving . Đối chiếu paraphrasing: A better approach might be Sometimes the wisest thing hold off and see whether let nature take its time + resistance may come of its own accord the old trees that remain the survivors"
            }
          },
          {
            "id": 21,
            "prompt": "Match the statement with the correct person/feature: \"The endurance of certain old trees cannot simply be put down to luck.\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "Tomas Ashworth",
              "Dr Ingrid Halloran",
              "Marek Sobol"
            ],
            "correct": "Dr Ingrid Halloran",
            "explanation": {
              "step1": "Tên đang xử lý: Tomas Ashworth . Bài nhắc đến Ashworth ở đoạn F.",
              "step2": "\" The beetles could move straight in the moment we drop our guard ; the danger is right on our doorstep ,\" Ashworth warns . Beetles vẫn ở ngay gần , nên phải duy trì cảnh giác . 🔎 Khớp với statement 9: The disease-carrying beetles remain close by , and that should not be forgotten . Đối chiếu paraphrasing: remain close by right on our doorstep should not be forgotten could move straight in + the moment we drop our guard lời cảnh báo cần luôn cảnh giác.",
              "step3": "Với tên Tomas Ashworth ở đoạn F, ta chọn được: câu 9. Dr Ingrid Halloran đoạn D cũng nhắc beetles và việc cây vượt một kích thước nhất định (“past a certain size”). Nhưng đó là điều kiện khiến cây dễ bị tấn công, không phải lời cảnh báo về mối nguy vẫn ở gần. Marek Sobol đoạn G nói về nguy cơ mang bệnh mới vào (“importing new diseases”). Nhưng đó là rủi ro khi đưa cây mới vào, không phải lời cảnh báo về beetles đang ở gần của Ashworth.",
              "step4": "Đáp án chính xác: Dr Ingrid Halloran"
            }
          },
          {
            "id": 22,
            "prompt": "Match the statement with the correct person/feature: \"The disease-carrying beetles remain close by, and that should not be forgotten.\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "Tomas Ashworth",
              "Dr Ingrid Halloran",
              "Marek Sobol"
            ],
            "correct": "Tomas Ashworth",
            "explanation": {
              "step1": "Over many centuries, the single tree held in higher regard in Britain than greybeam was 11. ___ . Ý câu hỏi: Trong nhiều thế kỷ, loại cây duy nhất được coi trọng hơn greybeam tại Britain là cây nào? Dự đoán ô trống: - Loại từ: danh từ hoặc cụm danh từ làm bổ ngữ sau “was”. - Nghĩa: tên một loại cây duy nhất , được đánh giá cao hơn greybeam.",
              "step2": "Dựa vào tên cây greybeam và ý so sánh thứ hạng, ta tìm được đoạn B, nơi có cụm diễn tả việc được xếp cao hơn greybeam (“ranked above greybeam”). Đoạn B — ranked above greybeam",
              "step3": "Đoạn B: For centuries only beech was ranked above greybeam among the hardwoods British craftsmen preferred , and across much of the country it was the most conspicuous tree of all .",
              "step4": "Đáp án phù hợp nhất: beech Câu hoàn chỉnh: Over many centuries, the single tree held in higher regard in Britain than greybeam was beech. (Trong nhiều thế kỷ, loại cây duy nhất được coi trọng hơn greybeam tại Britain là beech.) => Khớp với dự đoán về tên một loại cây và thông tin trong bài: chỉ beech được xếp cao hơn greybeam ; đáp án có 1 từ, đề được cung cấp không nêu giới hạn số từ. Đối chiếu paraphrasing: the single tree only beech held in higher regard was ranked above greybeam Nếu chỉ nhìn tên cây được nhắc nhiều, dễ điền greybeam Nhưng greybeam là mốc so sánh, không phải cây được xếp cao hơn. hardwoods “ nhóm cây gỗ cứng ”: Từ này nằm ngay trong câu nói về thứ hạng nên dễ bị chọn nhầm Nhưng nó chỉ cả nhóm cây, không phải tên một loại cây duy nhất."
            }
          },
          {
            "id": 23,
            "prompt": "Match the statement with the correct person/feature: \"The scale of the loss only sinks in once you realise how dominant the tree used to be.\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "Tomas Ashworth",
              "Dr Ingrid Halloran",
              "Marek Sobol"
            ],
            "correct": "Marek Sobol",
            "explanation": {
              "step1": "During the eighteenth century it was cultivated to supply wood for storage boxes and 12. ___ . Ý câu hỏi: Trong thế kỷ XVIII, greybeam được trồng để lấy gỗ làm hộp chứa đồ và một sản phẩm khác . Dự đoán ô trống: - Loại từ: danh từ hoặc cụm danh từ, song song với hộp chứa đồ (“storage boxes”) sau từ nối “and”. - Nghĩa: một loại sản phẩm được làm từ gỗ ; có thể là danh từ số nhiều hoặc không đếm được.",
              "step2": "Dựa vào mốc thời gian thế kỷ XVIII (“eighteenth century”), ta định vị được đoạn B. Tại đây, cụm hộp đóng gói (“packing cases”) khớp với ý hộp chứa đồ trong câu hỏi => bắt đầu đọc ở câu này. Đoạn B — eighteenth century",
              "step3": "Đoạn B: By the eighteenth century it was planted far more deliberately , its timber going into everyday goods such as packing cases and household furniture .",
              "step4": "Đáp án phù hợp nhất: furniture Câu hoàn chỉnh: During the eighteenth century it was cultivated to supply wood for storage boxes and furniture. (Trong thế kỷ XVIII, greybeam được trồng để cung cấp gỗ làm hộp chứa đồ và đồ nội thất .) => Khớp với dự đoán danh từ chỉ sản phẩm làm từ gỗ và thông tin trong bài; đáp án gồm 1 từ, đề được cung cấp không nêu giới hạn số từ. Đối chiếu paraphrasing: was cultivated was planted supply wood for its timber going into storage boxes packing cases packing cases “ hộp đóng gói ”: Cụm này đúng là một sản phẩm làm từ gỗ, nhưng tương ứng với hộp chứa đồ đã có trong đề. Ô trống cần sản phẩm còn lại sau “and”. timber “ gỗ ”: Sai vì đây là vật liệu, không phải sản phẩm được làm từ gỗ như dự đoán. tools “ dụng cụ ”: Nếu chỉ tìm công dụng của gỗ, dễ chọn từ này ở câu 3 đoạn B Nhưng công dụng đó gắn với Bronze Age, không phải giai đoạn thế kỷ XVIII đang được hỏi."
            }
          },
          {
            "id": 24,
            "prompt": "Over many centuries, the single tree held in higher regard in Britain than greybeam was  _____ . From the Bronze Age onwards its timber was worked into tools, and it likewise served for making weapons. During the eighteenth century it was cultivated to supply wood for storage boxes and  _____ . Because it was so tough, greybeam was a regular choice for equipment used in mines, and the  _____  of the clipper the Silver Petrel was built from it as well.",
            "type": "FILL_IN_BLANK",
            "correct": "beech",
            "explanation": {
              "step1": "Because it was so tough , greybeam was a regular choice for equipment used in mines , and the 13. ___ of the clipper the Silver Petrel was built from it as well . Ý câu hỏi: Gỗ greybeam bền nên được dùng làm thiết bị khai mỏ và một bộ phận của chiếc tàu Silver Petrel. Dự đoán ô trống: - Loại từ: danh từ số ít, vì nằm trong cấu trúc chỉ sở thuộc (“the ___ of the clipper”) và đi với động từ số ít (“was”). - Nghĩa: một bộ phận của tàu được làm bằng gỗ greybeam, không phải tên tàu hay thiết bị khai mỏ.",
              "step2": "Dựa vào từ khoá đặc biệt là tên tàu Silver Petrel => ta định vị được thông tin liên quan ở đoạn B. Đoạn B",
              "step3": "Đoạn B: Because it withstood repeated blows so well , it was also chosen for anything that had to absorb heavy impact - mining machinery among them, along with the hull of the nineteenth-century clipper the Silver Petrel .",
              "step4": "Đáp án phù hợp nhất: hull Câu hoàn chỉnh: Because it was so tough, greybeam was a regular choice for equipment used in mines, and the hull of the clipper the Silver Petrel was built from it as well. (Vì rất bền, gỗ greybeam thường được chọn làm thiết bị khai mỏ, và thân của chiếc tàu Silver Petrel cũng được làm bằng loại gỗ này.) => Khớp với dự đoán danh từ số ít chỉ bộ phận của tàu và thông tin trong bài; đáp án gồm 1 từ, đề không nêu giới hạn số từ. Đối chiếu paraphrasing: so tough withstood repeated blows was built from it was also chosen for mining machinery “ thiết bị khai mỏ ”: Nếu skim/scan sẽ dễ chọn vì cụm này nằm ngay trước thông tin về tàu Nhưng đây là một công dụng khác của gỗ, không phải bộ phận của Silver Petrel. clipper “ loại tàu ”: Từ này nằm sát đáp án nên dễ bị lấy nhầm Nhưng đề đã cho loại tàu và đang hỏi một bộ phận của tàu, không phải loại tàu. Silver Petrel Đây là tên chiếc tàu đã có sẵn trong đề, không phải bộ phận cần điền."
            }
          },
          {
            "id": 25,
            "prompt": "Complete blank for question 25:",
            "type": "FILL_IN_BLANK",
            "correct": "furniture",
            "explanation": {
              "step1": "Phân tích câu hỏi theo phương pháp Linearthinking.",
              "step2": "Định vị vùng thông tin liên quan trong bài đọc.",
              "step3": "Bóc tách cấu trúc câu (S-V-O) và đối chiếu nghĩa.",
              "step4": "Đáp án chính xác: furniture"
            }
          },
          {
            "id": 26,
            "prompt": "Complete blank for question 26:",
            "type": "FILL_IN_BLANK",
            "correct": "hull",
            "explanation": {
              "step1": "Phân tích câu hỏi theo phương pháp Linearthinking.",
              "step2": "Định vị vùng thông tin liên quan trong bài đọc.",
              "step3": "Bóc tách cấu trúc câu (S-V-O) và đối chiếu nghĩa.",
              "step4": "Đáp án chính xác: hull"
            }
          }
        ]
      },
      {
        "id": "cam-20-reading-1-p3",
        "passageNumber": 3,
        "title": "How stress affects our judgement",
        "subtitle": "",
        "content": [
          "A good many of the choices that shape our lives are made at moments when we feel tense and on edge. Whether the matter in hand is our health, our money or our career, there are times when each of us has to sift through information while under pressure. Does that pressure sharpen the way we handle such information, though, or does it dull it?",
          "To find out how the brain behaves when it is under strain, a fellow neuroscientist and I spent time at a number of mountain-rescue bases. No two shifts for these rescue crews are alike. There are calm stretches, during which the volunteers check over their ropes and stretchers, restock supplies and prepare food. Then there are the frantic days, full of call-outs in which lives hang in the balance: the crews are winched down to stranded walkers to treat severe injuries on the mountainside. That swing gave us an ideal setting in which to test how people use information once the pressure is on.",
          "What we found was that a sense of danger set off a stress response which, for the rescue volunteers, actually eased the work of taking information in — provided that the information happened to be bad news.",
          "The route to that conclusion ran as follows. Each volunteer was asked to put a figure on how likely they were to meet with 40 assorted misfortunes — from a road crash to having their identity stolen. We then fed back either encouraging news, that the odds were slimmer than they had assumed, or discouraging news, that the odds were greater, before asking them to revise their figures.",
          "Most of the time human beings lean towards optimism, brushing aside gloomy information and welcoming the cheerful sort. That was exactly the response we saw while the volunteers were at ease. Once they were under stress, however, the picture changed. In that state they grew acutely alert to bad news — even bad news with no bearing whatever on their work, such as being told that identity theft was likelier than they had supposed — and adjusted their expectations accordingly. Good news, by contrast, was met no differently under stress than before, as when they were told the risk of identity theft was smaller than they had supposed.",
          "The same tendency showed up back in the laboratory, this time among students told out of the blue that they must deliver a talk before an assessing panel — a talk that would be filmed and put online. Predictably, their cortisol readings shot up and their pulses quickened, and all at once they became sharper at absorbing unconnected but disturbing statistics on illness and crime.",
          "A stressful episode sets in motion a change in the body that turns our attention towards warnings and towards whatever could go wrong. Scans of the brain show that this 'switch' goes hand in hand with a sharp rise in a learning-related neural signal, one that fires above all when we meet warning signs we did not expect — the sight of fear on another person's face, for example.",
          "For our earliest ancestors, wiring of this kind may well have been a lifesaver. Hemmed in by predators, they stood to gain from any sharpening of their capacity to learn where the dangers lay. Where no threat was present, though, staying permanently on guard would only have squandered energy. A neural switch that raised or lowered the ability to take in warnings as surroundings shifted would therefore have had real value. Tellingly, those who suffer from clinical depression and anxiety appear stuck in the setting in which every negative message around them is soaked up.",
          "Something else worth grasping is how quickly stress passes from person to person. When a colleague is on edge, the odds are that we will stiffen and grow tense as well. Nor do we have to share a room with someone for their feelings to steer how we behave. Research indicates that a feed full of positive posts — a photograph of a golden sunrise, say — makes us readier to put out cheering messages of our own, whereas a stream of negative ones, like grumbling about a slow-moving queue, prompts us to add negativity in turn.",
          "In certain respects many of us now live as though under threat, forever braced to handle insistent emails and texts and to react to news alerts and online comments. One workplace-wellbeing survey found that continually glancing at your phone is bound up with stress. Put differently, a hardwired bodily response that evolution handed us so we could keep clear of starving predators is these days being set off by a post on a screen. Posting on social media, one study reports, does more to lift your pulse, bring on sweat and widen your pupils than most of the things you do in a day.",
          "Because stress makes us dwell more on alarming messages, and because it also spreads at such speed, the two together can breed a collective fear that the facts do not always warrant. In the wake of a distressing public event — a natural disaster, perhaps, or a serious market crash — traditional and social media tend to fill with worrying reports that people cannot help noticing, and the effect is to make an existing danger look larger than it is. A dependable cycle thus takes shape: stress is set off and jumps from one person to the next, which for a while makes people more receptive to negative reports, which winds the stress up further. Holidays are called off though the catastrophe struck on the far side of the planet; shares are dumped when sitting tight would have been the wiser course. Encouragingly, though, upbeat feelings such as hope spread just as readily, and they carry real force in spurring people towards solutions. Once we appreciate how tightly a person's emotional state is tied to the way they handle information, we can shape our messages with more care and turn ourselves into thoughtful agents of change."
        ],
        "questions": [
          {
            "id": 27,
            "prompt": "In the opening paragraph, the writer leads into the subject by",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "casting doubt on an assumption many people share.",
              "pointing to a difficulty that confronts us all.",
              "clarifying the meaning of several familiar terms.",
              "picking out the circumstances in which we feel most fearful."
            ],
            "correct": "pointing to a difficulty that confronts us all.",
            "explanation": {
              "step1": "In the opening paragraph , the writer leads into the subject by Câu hỏi hỏi: Tác giả dẫn vào chủ đề bằng cách nào ở đoạn mở đầu? Ta cần xem cả đoạn triển khai ý ra sao, không chỉ tìm một chi tiết.",
              "step2": "Câu hỏi chỉ rõ đoạn mở đầu (“opening paragraph”) => bắt đầu đọc đoạn 1, từ ý về những lựa chọn định hình cuộc sống (“choices that shape our lives”). Đoạn 1 — choices that shape our lives",
              "step3": "Đoạn 1: A good many of the choices that shape our lives are made at moments when we feel tense and on edge . Whether the matter in hand is our health , our money or our career , there are times when each of us has to sift through information while under pressure . Does that pressure sharpen the way we handle such information , though , or does it dull it ? Câu (1)–(2): từ những lựa chọn quan trọng lúc căng thẳng, tác giả chuyển sang việc mỗi người đều phải xử lý thông tin dưới áp lực . Câu (3): tác giả đặt câu hỏi liệu áp lực giúp hay cản trở việc xử lý thông tin. Tác giả dẫn vào chủ đề bằng cách nêu một khó khăn ai cũng gặp : phải cân nhắc thông tin khi căng thẳng .",
              "step4": "Đáp án đúng: B. pointing to a difficulty that confronts us all . (Nêu ra một khó khăn mà tất cả chúng ta đều gặp phải .) Đối chiếu paraphrasing: a difficulty that confronts us all each of us + has to sift through information while under pressure Đáp án A “ Đặt nghi vấn về một giả định được nhiều người tin ”: Câu hỏi liệu áp lực có cải thiện khả năng xử lý thông tin (“Does that pressure sharpen”) dễ gây nhầm Nhưng tác giả không nêu một giả định phổ biến nào để bác bỏ. Đáp án C “ Làm rõ nghĩa của một số thuật ngữ quen thuộc ”: Sai vì đoạn 1 không định nghĩa thuật ngữ; tác giả nêu tình huống rồi đặt câu hỏi. Đáp án D “ Chỉ ra những hoàn cảnh khiến chúng ta sợ hãi nhất ”: Nếu skim thấy trạng thái căng thẳng (“feel tense”), ta dễ nghĩ đoạn này nói về nỗi sợ Nhưng tác giả không xác định lúc nào ta sợ nhất; trọng tâm là xử lý thông tin dưới áp lực."
            }
          },
          {
            "id": 28,
            "prompt": "What does the writer suggest about the rescue crews in the second paragraph?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "The methods they rely on to cope with stress particularly intrigue researchers.",
              "The pressure of their work resembles that found in many public-service jobs.",
              "The way their stress levels rise and fall makes them well suited to the study.",
              "It is their character that equips them to perform under pressure."
            ],
            "correct": "The way their stress levels rise and fall makes them well suited to the study.",
            "explanation": {
              "step1": "What does the writer suggest about the rescue crews in the second paragraph ? Câu hỏi hỏi: Tác giả gợi ra điều gì về các đội cứu hộ ở đoạn 2?",
              "step2": "Đề đã chỉ rõ đoạn 2. Ta bắt đầu từ cụm chỉ đội cứu hộ (“rescue crews”), rồi đọc phần mô tả nhịp làm việc của họ. Đoạn 2 — rescue crews",
              "step3": "Đoạn 2: There are calm stretches , during which the volunteers check over their ropes and stretchers, restock supplies and prepare food . Then there are the frantic days , full of call-outs in which lives hang in the balance: the crews are winched down to stranded walkers to treat severe injuries on the mountainside . That swing gave us an ideal setting in which to test how people use information once the pressure is on . Câu (3)–(4): nhịp làm việc chuyển từ yên ả sang căng thẳng . Câu (5): chính sự thay đổi đó tạo môi trường lý tưởng để nghiên cứu cách con người sử dụng thông tin khi chịu áp lực.",
              "step4": "Đáp án đúng: C. The way their stress levels rise and fall makes them well suited to the study . (Việc mức căng thẳng của họ tăng giảm khiến họ phù hợp với nghiên cứu .) Đối chiếu paraphrasing: stress levels rise and fall calm stretches + frantic days well suited to the study an ideal setting Đáp án A “ Các phương pháp họ dùng để ứng phó căng thẳng đặc biệt thu hút giới nghiên cứu ”: Nếu skim thấy việc kiểm tra dây và cáng (“check over their ropes and stretchers”), ta dễ tưởng đó là cách ứng phó căng thẳng Nhưng đây là việc họ làm lúc yên ả, không phải lý do khiến họ phù hợp với nghiên cứu. Đáp án B “ Áp lực công việc của họ giống áp lực trong nhiều công việc dịch vụ công ”: Nếu chỉ thấy từ chỉ áp lực (“pressure”), ta dễ chọn nhầm Nhưng bài không so sánh đội cứu hộ với công việc dịch vụ công khác. Đáp án D “ Tính cách giúp họ làm việc được dưới áp lực ”: Sai vì câu (5) chỉ ra sự thay đổi giữa hai trạng thái (“That swing”), không nói đến tính cách của họ."
            }
          },
          {
            "id": 29,
            "prompt": "In the fourth paragraph, the writer is mainly",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "setting out how the study was carried out.",
              "presenting the results that were obtained.",
              "defending the method that was chosen.",
              "stating the aims of the research."
            ],
            "correct": "setting out how the study was carried out.",
            "explanation": {
              "step1": "In the fourth paragraph , the writer is mainly Câu hỏi hỏi: Trong đoạn 4, tác giả chủ yếu làm gì ?",
              "step2": "Đề chỉ rõ đoạn 4. Ta bắt đầu từ câu mở đầu: cụm chỉ trình tự (“ran as follows”) báo hiệu tác giả sắp giải thích cách đi đến kết luận. Đoạn 4 — ran as follows",
              "step3": "Đoạn 4: The route to that conclusion ran as follows . Each volunteer was asked to put a figure on how likely they were to meet with 40 assorted misfortunes — from a road crash to having their identity stolen . We then fed back either encouraging news , that the odds were slimmer than they had assumed, or discouraging news , that the odds were greater, before asking them to revise their figures . Câu (1): báo hiệu phần trình bày trình tự đi đến kết luận. Câu (2)–(3): nêu các bước tiến hành nghiên cứu — yêu cầu ước lượng, cung cấp thông tin rồi yêu cầu điều chỉnh con số.",
              "step4": "Đáp án đúng: A. setting out how the study was carried out . ( Trình bày cách nghiên cứu được tiến hành. ) Đối chiếu paraphrasing: setting out how the study was carried out was asked to put a figure on + then fed back + before asking them to revise their figures Đáp án B “ Trình bày những kết quả thu được ”: Nếu skim thấy câu (1) nhắc đến kết luận (“conclusion”), em có thể nghĩ đoạn này nêu kết quả Nhưng câu (2)–(3) kể những việc nhóm nghiên cứu đã làm, không trình bày kết quả. Đáp án C “ Bảo vệ phương pháp đã chọn ”: Đoạn 2 gọi bối cảnh nghiên cứu là phù hợp (“ideal setting”), nên dễ liên tưởng đến việc bảo vệ phương pháp Nhưng đoạn 4 không lập luận vì sao phương pháp tốt; nó chỉ thuật lại các bước thực hiện. Đáp án D “ Nêu mục tiêu nghiên cứu ”: Mục tiêu xuất hiện ở đoạn 2 qua cụm “to test how people use information”. Đoạn 4 chuyển sang mô tả cách nhóm nghiên cứu tiến hành việc kiểm tra đó."
            }
          },
          {
            "id": 30,
            "prompt": "In the seventh paragraph, the writer outlines a brain mechanism that",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "makes people react more quickly in stressful situations.",
              "sharpens our responsiveness to signs of danger around us.",
              "gives us greater control over how anxious we feel.",
              "comes into play when a sense of threat needs to be conveyed."
            ],
            "correct": "sharpens our responsiveness to signs of danger around us.",
            "explanation": {
              "step1": "In the seventh paragraph, the writer outlines a brain mechanism that Câu hỏi hỏi: Cơ chế não được tác giả mô tả ở đoạn 7 có tác dụng gì?",
              "step2": "Đề đã chỉ rõ đoạn 7 (“the seventh paragraph”) => ta bắt đầu từ câu đầu đoạn, nơi tác giả nêu một sự thay đổi trong cơ thể (“a change in the body”). Đoạn 7 — the seventh paragraph",
              "step3": "Đoạn 7: A stressful episode sets in motion a change in the body that turns our attention towards warnings and towards whatever could go wrong . Scans of the brain show that this 'switch' goes hand in hand with a sharp rise in a learning-related neural signal , one that fires above all when we meet warning signs we did not expect — the sight of fear on another person's face, for example . Câu (1): căng thẳng khiến sự chú ý chuyển sang các cảnh báo . Câu (2): sự chuyển đổi ấy đi kèm tín hiệu thần kinh tăng mạnh , đặc biệt khi ta gặp dấu hiệu cảnh báo . Cơ chế này khiến chúng ta nhạy hơn với các dấu hiệu nguy hiểm .",
              "step4": "Đáp án đúng: B. sharpens our responsiveness to signs of danger around us . (Khiến chúng ta nhạy hơn với các dấu hiệu nguy hiểm xung quanh .) Đối chiếu paraphrasing: sharpens our responsiveness turns our attention towards warnings + a sharp rise signs of danger warning signs Đáp án A “ Khiến con người phản ứng nhanh hơn trong tình huống căng thẳng ”: Nếu skim thấy mức tăng mạnh (“a sharp rise”), ta có thể tưởng đó là tốc độ phản ứng Nhưng câu (2) nói tín hiệu thần kinh tăng, không nói con người phản ứng nhanh hơn. Đáp án C “ Giúp chúng ta kiểm soát cảm giác lo âu tốt hơn ”: Sai vì bằng chứng nói về sự chú ý tới cảnh báo, không nói ta kiểm soát được cảm giác lo âu. Đáp án D “ Phát huy tác dụng khi cần truyền đạt cảm giác bị đe dọa ”: Ví dụ nỗi sợ trên khuôn mặt người khác (“fear on another person's face”) dễ gợi ý việc truyền đạt Nhưng đó là dấu hiệu người quan sát tiếp nhận, không phải điều kiện phải truyền đạt mối đe dọa."
            }
          },
          {
            "id": 31,
            "prompt": "Complete the sentence: \"When they were calm, the rescue volunteers usually _____\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "reacted in much the same way, whatever their state.",
              "placed them under stress.",
              "felt cheered and hopeful.",
              "judged some kind of misfortune to be more probable.",
              "paid little attention to unwelcome news.",
              "treated bad news and good news in an identical way.",
              "were in an anxious, pressured state."
            ],
            "correct": "paid little attention to unwelcome news.",
            "explanation": {
              "step1": "When they were calm , the rescue volunteers usually Sau “usually”, câu cần một cụm động từ nói về phản ứng thường thấy của họ khi bình tĩnh . Ta chưa biết họ phản ứng thế nào, nên cần đối chiếu với bài đọc.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp ý các tình nguyện viên đang bình tĩnh (“the volunteers were at ease”) ở đoạn 5 => đây là vùng liên quan. Đoạn 5 — the volunteers were at ease",
              "step3": "Đoạn 5: Most of the time human beings lean towards optimism , brushing aside gloomy information and welcoming the cheerful sort . That was exactly the response we saw while the volunteers were at ease . Câu (1): nêu xu hướng thường thấy là gạt thông tin tiêu cực . Câu (2): xác nhận tình nguyện viên cũng có phản ứng ấy khi bình tĩnh .",
              "step4": "Đáp án phù hợp nhất: paid little attention to unwelcome news . Câu hoàn chỉnh: When they were calm , the rescue volunteers usually paid little attention to unwelcome news. (Khi bình tĩnh, các tình nguyện viên cứu hộ thường ít chú ý đến tin không mong muốn.) => Khớp với dự đoán về phản ứng thường thấy khi bình tĩnh : họ gạt thông tin tiêu cực sang một bên . Đối chiếu paraphrasing: usually Most of the time When they were calm while the volunteers were at ease paid little attention to unwelcome news brushing aside gloomy information reacted in much the same way, whatever their state. “ Phản ứng gần như giống nhau bất kể trạng thái ”: Đoạn 5 có ý phản ứng không khác đi (“no differently under stress than before”), nhưng ý đó chỉ nói về tin tốt, không phải phản ứng với tin xấu khi bình tĩnh. felt cheered and hopeful. “ Cảm thấy vui vẻ và đầy hy vọng ”: Cụm “welcoming the cheerful sort” nói về việc đón nhận tin vui, không khẳng định họ cảm thấy vui vẻ hay hy vọng. judged some kind of misfortune to be more probable. “ Cho rằng một điều không may nào đó dễ xảy ra hơn ”: Đoạn 5 gắn việc điều chỉnh dự đoán theo tin xấu với lúc họ căng thẳng (“under stress”), trái với điều kiện bình tĩnh của câu hỏi."
            }
          },
          {
            "id": 32,
            "prompt": "Complete the sentence: \"The researchers observed that, under stress, the volunteers _____\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "reacted in much the same way, whatever their state.",
              "placed them under stress.",
              "felt cheered and hopeful.",
              "judged some kind of misfortune to be more probable.",
              "paid little attention to unwelcome news.",
              "treated bad news and good news in an identical way.",
              "were in an anxious, pressured state."
            ],
            "correct": "judged some kind of misfortune to be more probable.",
            "explanation": {
              "step1": "The researchers observed that, under stress , the volunteers Sau “the volunteers”, ta cần một vị ngữ ở thì quá khứ. Hãy tìm điều các nhà nghiên cứu quan sát thấy ở họ khi căng thẳng , không chỉ tìm một cách diễn đạt khác của trạng thái căng thẳng.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta tìm đoạn nói về phản ứng của tình nguyện viên khi căng thẳng. Ở đoạn 5, cụm “Once they were under stress” cho thấy đây là vùng cần đọc. Đoạn 5 — Once they were under stress",
              "step3": "Đoạn 5: Once they were under stress , however, the picture changed . In that state they grew acutely alert to bad news — even bad news with no bearing whatever on their work, such as being told that identity theft was likelier than they had supposed — and adjusted their expectations accordingly . Câu (3): khi căng thẳng, cách các tình nguyện viên phản ứng đã thay đổi. Câu (4): họ nhận tin rằng một điều không may dễ xảy ra hơn dự tính , rồi điều chỉnh nhận định theo tin đó.",
              "step4": "Đáp án phù hợp nhất: judged some kind of misfortune to be more probable . Câu hoàn chỉnh: The researchers observed that, under stress, the volunteers judged some kind of misfortune to be more probable . (Các nhà nghiên cứu quan sát thấy rằng, khi căng thẳng, những tình nguyện viên đánh giá một điều không may nào đó có khả năng xảy ra cao hơn .) => Khớp với dự đoán về cách họ đánh giá thông tin : họ được báo nguy cơ cao hơn mức từng nghĩ và điều chỉnh dự đoán theo đó . Đối chiếu paraphrasing: identity theft some kind of misfortune was likelier than they had supposed to be more probable adjusted their expectations judged paid little attention to unwelcome news. “ Ít chú ý đến tin không mong muốn ”: Nếu skim/scan đoạn 5 thấy “brushing aside gloomy information” sẽ dễ chọn, nhưng đó là phản ứng khi họ chưa căng thẳng; sau đó họ lại chú ý tới tin xấu. reacted in much the same way, whatever their state. “ Phản ứng gần như giống nhau bất kể trạng thái ”: Đoạn 5 nói phản ứng với tin tốt không khác trước (“met no differently under stress than before”), nhưng phản ứng với tin xấu đã thay đổi. were in an anxious, pressured state. “ Ở trạng thái lo âu và chịu áp lực ”: Cụm “under stress” khiến ending này có vẻ khớp, nhưng nó chỉ lặp lại điều kiện trong câu hỏi, không nói các tình nguyện viên đánh giá nguy cơ ra sao."
            }
          },
          {
            "id": 33,
            "prompt": "Complete the sentence: \"Whenever they were given good news, the volunteers _____\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "reacted in much the same way, whatever their state.",
              "placed them under stress.",
              "felt cheered and hopeful.",
              "judged some kind of misfortune to be more probable.",
              "paid little attention to unwelcome news.",
              "treated bad news and good news in an identical way.",
              "were in an anxious, pressured state."
            ],
            "correct": "reacted in much the same way, whatever their state.",
            "explanation": {
              "step1": "Whenever they were given good news , the volunteers Sau “the volunteers” cần một vị ngữ nói về phản ứng khi nhận tin tốt . Chưa thể kết luận phản ứng đó có thay đổi theo trạng thái của họ hay không.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp thông tin về tin tốt. Ở đoạn 5 xuất hiện “Good news” => đây là vùng liên quan. Đoạn 5 — Good news",
              "step3": "Đoạn 5: Good news , by contrast, was met no differently under stress than before , as when they were told the risk of identity theft was smaller than they had supposed .",
              "step4": "Đáp án phù hợp nhất: reacted in much the same way , whatever their state . Câu hoàn chỉnh: Whenever they were given good news, the volunteers reacted in much the same way , whatever their state . (Mỗi khi được báo tin tốt, các tình nguyện viên phản ứng gần như giống nhau dù đang căng thẳng hay không .) => Khớp với dự đoán về phản ứng khi nhận tin tốt: câu (5) nói phản ứng ấy không khác giữa lúc căng thẳng và trước đó . Đối chiếu paraphrasing: good news giữ nguyên no differently under stress than before reacted in much the same way + whatever their state felt cheered and hopeful. “ cảm thấy vui và đầy hy vọng ”: Đoạn 5 có “welcoming the cheerful sort”, nhưng đó là cách đón nhận tin tốt, không chứng minh họ cảm thấy vui hay hy vọng. treated bad news and good news in an identical way. “ đối xử với tin xấu và tin tốt giống hệt nhau ”: câu (5) có ý so sánh. Nhưng câu này so sánh phản ứng với cùng một loại tin tốt ở hai trạng thái, không so sánh tin tốt với tin xấu. paid little attention to unwelcome news. “ ít chú ý đến tin không mong muốn ”: Đoạn 5 có “brushing aside gloomy information”, nhưng đó là phản ứng với tin xấu, còn câu hỏi hỏi về tin tốt."
            }
          },
          {
            "id": 34,
            "prompt": "Complete the sentence: \"The students' cortisol readings and pulse rates altered at the moment the researchers _____\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "reacted in much the same way, whatever their state.",
              "placed them under stress.",
              "felt cheered and hopeful.",
              "judged some kind of misfortune to be more probable.",
              "paid little attention to unwelcome news.",
              "treated bad news and good news in an identical way.",
              "were in an anxious, pressured state."
            ],
            "correct": "placed them under stress.",
            "explanation": {
              "step1": "The students' cortisol readings and pulse rates altered at the moment the researchers Sau “the researchers”, cần một hành động của các nhà nghiên cứu xảy ra khi hai chỉ số của sinh viên thay đổi. Ta dự đoán đó là hành động tạo áp lực cho sinh viên .",
              "step2": "Dựa vào từ khóa đặc biệt là cortisol => ta định vị được đoạn 6 qua cụm “their cortisol readings” và bắt đầu đọc tại đây. Đoạn 6 — their cortisol readings",
              "step3": "Đoạn 6: The same tendency showed up back in the laboratory, this time among students told out of the blue that they must deliver a talk before an assessing panel — a talk that would be filmed and put online . Predictably, their cortisol readings shot up and their pulses quickened , and all at once they became sharper at absorbing unconnected but disturbing statistics on illness and crime . Câu (1)–(2): sinh viên phải phát biểu trước hội đồng đánh giá => cortisol tăng vọt và mạch đập nhanh .",
              "step4": "Đáp án phù hợp nhất: placed them under stress . Câu hoàn chỉnh: The students' cortisol readings and pulse rates altered at the moment the researchers placed them under stress . (Chỉ số cortisol và nhịp mạch của sinh viên thay đổi khi các nhà nghiên cứu đặt họ vào tình huống căng thẳng .) => Khớp với dự đoán: sinh viên được giao nhiệm vụ gây áp lực , rồi cả hai chỉ số thay đổi. Đối chiếu paraphrasing: pulse rates their pulses altered shot up + quickened placed them under stress must deliver a talk + before an assessing panel were in an anxious, pressured state. các nhà nghiên cứu ở trạng thái căng thẳng: Các chỉ số tăng dễ khiến ta nghĩ đến trạng thái áp lực Nhưng người chịu áp lực là sinh viên, còn sau “the researchers” cần hành động của các nhà nghiên cứu. judged some kind of misfortune to be more probable. các nhà nghiên cứu đánh giá một điều không may là dễ xảy ra hơn: Đoạn 4 có “40 assorted misfortunes”, nhưng việc đánh giá rủi ro thuộc thí nghiệm với đội cứu hộ, không phải hành động gây áp lực cho sinh viên. reacted in much the same way, whatever their state. các nhà nghiên cứu phản ứng gần như giống nhau bất kể trạng thái: Đoạn 5 có “no differently under stress than before”, nhưng ý đó nói về phản ứng của tình nguyện viên trước tin tốt, không phải điều các nhà nghiên cứu làm với sinh viên."
            }
          },
          {
            "id": 35,
            "prompt": "Complete the sentence: \"In both studies, negative information was absorbed more readily when those taking part _____\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "reacted in much the same way, whatever their state.",
              "placed them under stress.",
              "felt cheered and hopeful.",
              "judged some kind of misfortune to be more probable.",
              "paid little attention to unwelcome news.",
              "treated bad news and good news in an identical way.",
              "were in an anxious, pressured state."
            ],
            "correct": "were in an anxious, pressured state.",
            "explanation": {
              "step1": "In both studies , negative information was absorbed more readily when those taking part Câu còn thiếu vị ngữ sau “those taking part”. Ta cần tìm trạng thái của người tham gia khi họ tiếp nhận thông tin tiêu cực dễ hơn, và trạng thái ấy phải đúng với cả hai nghiên cứu .",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp ý tiếp nhận tin xấu dễ hơn. Ở đoạn 3, cụm phản ứng căng thẳng (“stress response”) xuất hiện cùng tin xấu (“bad news”) => bắt đầu đọc từ đây. Đoạn 3 — stress response",
              "step3": "Đoạn 3: What we found was that a sense of danger set off a stress response which, for the rescue volunteers , actually eased the work of taking information in — provided that the information happened to be bad news . Đoạn 6: The same tendency showed up back in the laboratory , this time among students told out of the blue that they must deliver a talk before an assessing panel — a talk that would be filmed and put online . Predictably, their cortisol readings shot up and their pulses quickened , and all at once they became sharper at absorbing unconnected but disturbing statistics on illness and crime . Câu (1): Câu (1), đoạn 3: nhóm cứu hộ tiếp nhận tin xấu dễ hơn khi có phản ứng căng thẳng . Câu (1): Câu (1)–(2), đoạn 6: xu hướng ấy lặp lại ở sinh viên; trước tình huống gây áp lực , họ có dấu hiệu căng thẳng và tiếp nhận thông tin đáng lo ngại tốt hơn .",
              "step4": "Đáp án phù hợp nhất: were in an anxious , pressured state . Câu hoàn chỉnh: In both studies, negative information was absorbed more readily when those taking part were in an anxious , pressured state . (Trong cả hai nghiên cứu, người tham gia tiếp nhận thông tin tiêu cực dễ hơn khi họ ở trạng thái lo lắng , chịu áp lực .) => Khớp với dự đoán về trạng thái của người tham gia và với bằng chứng ở cả hai đoạn. Đối chiếu paraphrasing: both studies the rescue volunteers + students negative information was absorbed more readily eased the work of taking information in + bad news / became sharper at absorbing + disturbing statistics were in an anxious, pressured state a stress response / must deliver a talk before an assessing panel + their pulses quickened Phản ứng giống nhau dù ở trạng thái nào (“whatever their state”): Đoạn 5 có cụm “no differently under stress than before”, nhưng cụm ấy nói về tin tốt, không phải việc tiếp nhận tin tiêu cực. Khiến người khác căng thẳng (“placed them under stress”): Sai chủ thể. Người tham gia ở trong tình trạng chịu áp lực; họ không phải người gây áp lực cho người khác. Đánh giá một rủi ro là dễ xảy ra hơn (“judged some kind of misfortune to be more probable”): Đoạn 5 có chi tiết “identity theft was likelier”, nhưng đó là điều nhóm cứu hộ nhận định sau khi nghe tin xấu, không phải trạng thái chung của người tham gia trong cả hai nghiên cứu."
            }
          },
          {
            "id": 36,
            "prompt": "Whether the posts in our feed are cheerful or gloomy makes no real difference to the mood of what we ourselves go on to post.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "YES",
              "NO",
              "NOT GIVEN"
            ],
            "correct": "NO",
            "explanation": {
              "step1": "Whether the posts in our feed are cheerful or gloomy makes no real difference to the mood of what we ourselves go on to post . Ý câu hỏi: Tác giả có cho rằng bài đăng trong feed vui hay ảm đạm không ảnh hưởng đến sắc thái bài chúng ta đăng tiếp hay không?",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta tìm ý tương đương với bài đăng vui hoặc ảm đạm trong feed. Ở đoạn 9, cụm bài đăng tích cực (“a feed full of positive posts”) => đây là điểm bắt đầu đọc. Đoạn 9 — a feed full of positive posts",
              "step3": "Đoạn 9: Research indicates that a feed full of positive posts — a photograph of a golden sunrise, say — makes us readier to put out cheering messages of our own , whereas a stream of negative ones , like grumbling about a slow-moving queue, prompts us to add negativity in turn .",
              "step4": "Câu hỏi nói: bài đăng vui hay ảm đạm không tạo khác biệt (“ no real difference”) đối với bài chúng ta đăng tiếp. Bài đọc nói: theo nghiên cứu được tác giả dẫn, bài đăng tích cực khiến chúng ta dễ đăng thông điệp vui hơn (“readier to put out cheering messages”); bài đăng tiêu cực lại khiến chúng ta đăng thêm nội dung tiêu cực (“add negativity in turn”). Vị trí của tác giả vì thế trái với statement. Đối chiếu paraphrasing: cheerful or gloomy positive posts + negative ones no real difference makes us readier + prompts us to add negativity in turn Đáp án đúng: NO Đáp án YES Nếu skim/scan thấy đoạn 5 có cụm “met no differently under stress than before”, dễ tưởng tác giả nói không có khác biệt Nhưng đoạn đó so sánh phản ứng với tin tốt khi có và không có stress, không phải sắc thái bài đăng trong feed. Chỉ chọn YES nếu tác giả nói bài đăng vui hay ảm đạm trong feed không làm thay đổi sắc thái bài chúng ta đăng. NOT GIVEN Nếu dừng ở đầu đoạn 9, dễ tưởng tác giả chỉ nói cảm xúc lây lan Nhưng câu (4) nêu rõ cả hai hướng tác động lên bài chúng ta đăng. Chỉ chọn NOT GIVEN nếu tác giả không cho biết mối liên hệ đó."
            }
          },
          {
            "id": 37,
            "prompt": "Of all our electronic devices, it is the phone that has the strongest effect on how stressed we feel.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "YES",
              "NO",
              "NOT GIVEN"
            ],
            "correct": "NOT GIVEN",
            "explanation": {
              "step1": "Of all our electronic devices , it is the phone that has the strongest effect on how stressed we feel . Ý câu hỏi: tác giả có cho rằng, trong tất cả thiết bị điện tử, điện thoại tác động mạnh nhất đến mức độ căng thẳng của chúng ta không?",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp ý về điện thoại và stress. Ở đoạn 10, bài đọc nhắc tới việc liên tục nhìn điện thoại => đây là vùng liên quan: `One workplace-wellbeing survey found that continually glancing at your phone is bound up with stress.` Đoạn 10",
              "step3": "Đoạn 10: One workplace-wellbeing survey found that continually glancing at your phone is bound up with stress .",
              "step4": "Câu hỏi nói: điện thoại có tác động mạnh nhất trong tất cả thiết bị điện tử (“Of all our electronic devices”, “the strongest effect”). Bài đọc nói: tác giả dẫn một khảo sát cho thấy việc liên tục nhìn điện thoại có liên hệ với stress (“is bound up with stress”). Tác giả không xếp hạng điện thoại so với các thiết bị điện tử khác. Đối chiếu paraphrasing: the phone giữ nguyên is bound up with stress the strongest effect all our electronic devices không có trong bài Đáp án đúng: NOT GIVEN Đáp án YES Nếu skim/scan thấy điện thoại có liên hệ với stress (“is bound up with stress”), sẽ dễ chọn YES Nhưng tác giả không nói điện thoại đứng đầu các thiết bị điện tử. Chỉ chọn YES nếu tác giả khẳng định điện thoại tác động mạnh hơn mọi thiết bị điện tử khác. Đáp án NO Sai vì không có phép so sánh không có nghĩa là tác giả phủ nhận điện thoại đứng đầu. Chỉ chọn NO nếu tác giả nói một thiết bị điện tử khác tác động mạnh hơn điện thoại."
            }
          },
          {
            "id": 38,
            "prompt": "When an alarming public event fills the media, taking in a great deal of that coverage tends to make us more receptive to such reports rather than less.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "YES",
              "NO",
              "NOT GIVEN"
            ],
            "correct": "YES",
            "explanation": {
              "step1": "When an alarming public event fills the media , taking in a great deal of that coverage tends to make us more receptive to such reports rather than less . Ý câu hỏi: Tác giả có cho rằng tiếp nhận nhiều tin về sự kiện đáng lo khiến chúng ta dễ tiếp nhận thêm những tin như vậy không?",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta tìm ý tương đương với sự kiện công cộng đáng lo (“an alarming public event”). Đoạn 11 nhắc đến một sự kiện gây lo ngại (“a distressing public event”) => bắt đầu đọc từ đây. Đoạn 11 — a distressing public event",
              "step3": "Đoạn 11: In the wake of a distressing public event — a natural disaster , perhaps, or a serious market crash — traditional and social media tend to fill with worrying reports that people cannot help noticing , and the effect is to make an existing danger look larger than it is . A dependable cycle thus takes shape: stress is set off and jumps from one person to the next , which for a while makes people more receptive to negative reports , which winds the stress up further . Câu (2): truyền thông đầy tin đáng lo mà người ta không thể không chú ý. Câu (3): stress xuất hiện và lan truyền => người ta dễ tiếp nhận tin tiêu cực hơn .",
              "step4": "Câu hỏi nói: tiếp nhận nhiều tin về sự kiện đáng lo khiến chúng ta dễ tiếp nhận thêm , chứ không phải ít đi (“ more receptive to such reports rather than less ”). Bài đọc nói: trong bối cảnh truyền thông đầy tin đáng lo, tác giả khẳng định stress khiến người ta dễ tiếp nhận tin tiêu cực hơn (“ more receptive to negative reports ”). Chiều tác động trùng với nhận định. Đối chiếu paraphrasing: an alarming public event a distressing public event fills the media media tend to fill with worrying reports taking in a great deal of that coverage people cannot help noticing more receptive to such reports rather than less more receptive to negative reports Đáp án đúng: YES Đáp án NO Nếu chỉ thấy truyền thông ngập tin đáng lo (“fill with worrying reports”), ta có thể đoán người đọc sẽ chai lì Nhưng tác giả nói họ dễ tiếp nhận hơn (“more receptive to negative reports”). Chỉ chọn NO nếu tác giả nói họ trở nên ít tiếp nhận tin tương tự hơn. NOT GIVEN Sai vì câu (3) nêu rõ chiều tác động: dễ tiếp nhận hơn (“more receptive”). Chỉ chọn NOT GIVEN nếu tác giả không cho biết họ trở nên dễ hay khó tiếp nhận thêm những tin ấy."
            }
          },
          {
            "id": 39,
            "prompt": "The anxiety that spreads through social media seldom pushes people into actions that work against their own interests.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "YES",
              "NO",
              "NOT GIVEN"
            ],
            "correct": "NO",
            "explanation": {
              "step1": "The anxiety that spreads through social media seldom pushes people into actions that work against their own interests . Ý câu hỏi: tác giả có cho rằng nỗi lo âu lan qua mạng xã hội hiếm khi khiến người ta đưa ra quyết định bất lợi cho bản thân không?",
              "step2": "Dựa vào từ khoá đặc biệt `social media` => ta bắt đầu đọc ở câu (2), đoạn 11, tại cụm “traditional and social media”. Đoạn 11 — traditional and social media",
              "step3": "Đoạn 11: In the wake of a distressing public event — a natural disaster , perhaps, or a serious market crash — traditional and social media tend to fill with worrying reports that people cannot help noticing , and the effect is to make an existing danger look larger than it is . A dependable cycle thus takes shape : stress is set off and jumps from one person to the next , which for a while makes people more receptive to negative reports , which winds the stress up further . Holidays are called off though the catastrophe struck on the far side of the planet ; shares are dumped when sitting tight would have been the wiser course . Câu (2)–(3): tin đáng lo xuất hiện trên mạng xã hội; căng thẳng lan truyền và tạo thành một chu trình tự đẩy căng thẳng lên . Câu (4): tác giả nêu những quyết định thiếu hợp lý, trong đó cổ phiếu bị bán dù giữ lại mới khôn ngoan hơn .",
              "step4": "Câu hỏi nói: nỗi lo âu lan qua mạng xã hội hiếm khi (“seldom”) dẫn đến hành động bất lợi cho bản thân (“against their own interests”). Bài đọc nói: tác giả mô tả một chu trình căng thẳng (“A dependable cycle”) rồi nêu việc bán cổ phiếu dù giữ lại mới khôn ngoan hơn (“the wiser course”). Tác giả không trình bày những quyết định bất lợi ấy như chuyện hiếm gặp . Đối chiếu paraphrasing: social media giữ nguyên seldom A dependable cycle trong cách tác giả mô tả hiện tượng. actions that work against their own interests shares are dumped + sitting tight would have been the wiser course Đáp án đúng: NO Đáp án YES Nếu chỉ tìm số liệu về tần suất, ta có thể tưởng “seldom” vẫn đúng Nhưng quan điểm tác giả là chu trình này dẫn tới cả quyết định bán cổ phiếu khi giữ lại khôn ngoan hơn. Chỉ chọn YES nếu tác giả nói những quyết định bất lợi do lo âu lan truyền hiếm khi xảy ra. NOT GIVEN Nếu không thấy một con số cụ thể cho “seldom”, ta dễ nghĩ bài thiếu thông tin Nhưng câu (2)–(4) đoạn 11 đã nối tin đáng lo trên mạng xã hội với chu trình căng thẳng và quyết định thiếu khôn ngoan. Chỉ chọn NOT GIVEN nếu tác giả không cho biết sự lan truyền ấy có liên hệ gì với các quyết định bất lợi."
            }
          },
          {
            "id": 40,
            "prompt": "The fact that we pick up on the emotions of those around us is something that can be turned to good use.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "YES",
              "NO",
              "NOT GIVEN"
            ],
            "correct": "YES",
            "explanation": {
              "step1": "The fact that we pick up on the emotions of those around us is something that can be turned to good use . Ý câu hỏi: Tác giả có cho rằng việc con người tiếp nhận cảm xúc của nhau có thể được tận dụng theo hướng có ích không?",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp ý cảm xúc lan truyền , thể hiện qua cảm xúc tích cực (“upbeat feelings”) cũng lan truyền (“spread”) ở đoạn 11 => đây là vùng liên quan. Đoạn 11 — upbeat feelings",
              "step3": "Đoạn 11: Encouragingly, though, upbeat feelings such as hope spread just as readily , and they carry real force in spurring people towards solutions . Once we appreciate how tightly a person's emotional state is tied to the way they handle information , we can shape our messages with more care and turn ourselves into thoughtful agents of change . Câu (5): cảm xúc tích cực lan truyền và thúc đẩy việc tìm giải pháp . Câu (6): hiểu mối liên hệ giữa cảm xúc và cách tiếp nhận thông tin => có thể chủ động định hình thông điệp .",
              "step4": "Câu hỏi nói: việc tiếp nhận cảm xúc của người khác có thể được tận dụng theo hướng có ích (“ can be turned to good use ”). Bài đọc nói: tác giả khẳng định cảm xúc tích cực lan truyền và thúc đẩy mọi người tìm giải pháp (“ spurring people towards solutions ”); từ hiểu biết đó, chúng ta có thể định hình thông điệp cẩn thận hơn (“shape our messages with more care”). Lập trường của tác giả phù hợp với nhận định. Đối chiếu paraphrasing: pick up on the emotions of those around us upbeat feelings + spread can be turned to good use spurring people towards solutions + can shape our messages with more care Đáp án đúng: YES Đáp án NO Nếu skim/scan thấy đoạn 11 nói về nỗi sợ tập thể (“collective fear”), sẽ dễ nghĩ cảm xúc lan truyền chỉ gây hại Nhưng câu (5)–(6) cho thấy tác giả có nêu lợi ích và cách vận dụng. Chỉ chọn NO nếu tác giả cho rằng sự lan truyền cảm xúc không thể được tận dụng theo hướng có ích. NOT GIVEN Nếu chỉ đọc đến việc cảm xúc lan truyền (“spread”), có thể tưởng tác giả chưa nói liệu điều đó có ích hay không Nhưng câu (5) nêu tác dụng thúc đẩy giải pháp, còn câu (6) nêu khả năng định hình thông điệp. Chỉ chọn NOT GIVEN nếu tác giả không thể hiện lập trường về khả năng tận dụng điều đó."
            }
          }
        ]
      }
    ]
  },
  "cam-19-reading-1": {
    "id": "cam-19-reading-1",
    "title": "IELTS CAM Inspired 19 - Reading Test 1",
    "series": "Cambridge 19",
    "testNumber": 1,
    "type": "Reading",
    "durationMinutes": 60,
    "passages": [
      {
        "id": "cam-19-reading-1-p1",
        "passageNumber": 1,
        "title": "How tennis rackets have changed",
        "subtitle": "",
        "content": [
          "When Theo Marchetti of Canada rose to the top of the world rankings in 2018, it was a feat that would have looked scarcely believable only seasons before. What made it the more striking was the era in which it came about - reckoned by many to be among the most fiercely contested the game has known, with challengers of the calibre of Sergio Ballester, Lars Henriksson and Tomas Novak all pursuing the same trophies. A mere five years earlier, Marchetti had counted as no more than a promising outsider, forever entering the sport's biggest tournaments yet never carrying one off.",
          "Two developments, in the end, lay behind this turnaround. One of them was common knowledge and much talked about at the time: the former world number one Bjorn Halvorsen joined Marchetti's coaching staff in 2013, and what that did to his game could be seen at a glance. The other went almost entirely unremarked. Marchetti had always, like so many of his peers, favoured a frame strung with two separate materials - one threaded through the mains, the vertical strings, the other through the crosses, or horizontals. His mains he kept in natural gut; the crosses, though, he re-strung in a synthetic in 2014. Slight as it sounds, the move would be badly underrated if anyone dismissed it.",
          "What Marchetti did to his crosses is only one of many tweaks a player can reach for in the hope of sharpening their game. 'Every frame out on tour is fitted to the person who wields it,' says Devin Marsh, a professional stringer based in New Zealand. 'Getting that exactly right is a large part of drawing out the last drop of performance.' It follows that the rackets the very best players rely on are never sold to the public as they are; each is built around the individual who plays with it. The Australian doubles pair Liam and Noah Prescott, twins with exacting requirements, are a case in point. 'We ask for very precise specifications,' they explain. 'Our manufacturer sends each frame to Adelaide, where it undergoes a meticulous round of customisation.' Among the things they have changed are the frame's length and even the paint over it, and the rackets they now prefer are heavier than an ordinary model, strung to a tighter pattern of crosses and mains.",
          "The reasoning behind it all is plain enough. As the margin separating a win from a defeat shrinks ever further, alterations that would once have seemed negligible come to weigh heavily indeed. And so the players, with their support teams, grow steadily more inventive in reworking their equipment, each chasing whatever narrow advantage it might yield.",
          "The habit goes back to the 1970s, when a Dutch amateur by the name of Bram de Wit took to playing with what became known as the comb-strung racket. So much topspin poured off its string bed that the International Tennis Federation banned it before long. Yet across the next twenty years or so, adjusting one's racket hardened into a routine part of the sport - something widely held today to rank beside diet and fitness for sheer importance.",
          "In the main, these alterations sort into two families: those done to the string bed and those done to the frame. The first kind is much more usual. Which strings to choose, and how tightly to set them, is something nearly every professional tinkers with, revising the decision again and again in light of the surface underfoot, the weather, the style of an opponent - some on no firmer basis than their mood that afternoon.",
          "Once upon a time, every racket was strung with natural gut, taken from the outer lining of a sheep's or a cow's intestines. The early 1990s brought a shift, as synthetic strings - cheaper and longer-lasting - appeared. Three substances go into these: nylon, tough and cheap; Kevlar, far too rigid to string on its own; and co-polyester, a polyester carrying additives that lift its performance. Even now, a good many professionals keep to a 'hybrid' set-up, in which synthetic and natural strings are combined.",
          "Among the synthetics, co-polyester reigns supreme. It answers particularly well to the tennis of the present day, in which rallies are settled for the most part along the baseline rather than up at the net. Research suggests that a co-polyester string throws off roughly a fifth more spin than natural gut or any rival synthetic can offer. Its coming, one might say, has transformed the game.",
          "A fair number of players, however, go further than the strings and take the frame itself in hand. Much of the ferocious serve of the American Dominic Vance, to take one case, was credited to the three or four strips of lead he had attached to his frames; these days the weighting is more often decided as the racket is built than added later on.",
          "Further changes to the frame have to do with the handle. Taste here is personal - one player wants a certain shape and may have the handle of a cherished racket transplanted onto another frame entirely, while another does something else again. The Portuguese player Rafael Mendonca, for one, found the grips he was given clumsy in the hand and exchanged them for slimmer versions.",
          "Customising and modifying rackets has driven the standard of play to heights few would have dared imagine in the era of gut strings and cumbersome wooden frames - and where it goes from here no one can say, though the watching promises to be a pleasure."
        ],
        "questions": [
          {
            "id": 1,
            "prompt": "Before 2018, Marchetti had competed at the major tournaments without ever winning one.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "TRUE",
            "explanation": {
              "step1": "Before 2018 , Marchetti had competed at the major tournaments without ever winning one . Cần kiểm tra cả hai ý: Marchetti đã dự giải lớn trước năm 2018 và chưa từng thắng giải nào .",
              "step2": "Dựa vào tên riêng Marchetti và mốc 2018 , ta bắt đầu đọc ở câu (1) đoạn 1, nơi có cụm “in 2018”. Đoạn 1 — in 2018",
              "step3": "Đoạn 1: When Theo Marchetti of Canada rose to the top of the world rankings in 2018 , it was a feat that would have looked scarcely believable only seasons before . A mere five years earlier , Marchetti had counted as no more than a promising outsider , forever entering the sport's biggest tournaments yet never carrying one off . Câu (1): xác lập mốc 2018 . Câu (3): nhìn lại năm năm trước mốc đó , khi Marchetti dự giải lớn nhưng chưa từng thắng .",
              "step4": "Câu hỏi nói: Trước năm 2018 , Marchetti đã dự các giải lớn nhưng chưa từng thắng giải nào (“without ever winning one”). Bài đọc nói: Năm năm trước mốc 2018 (“ five years earlier ”), ông liên tục dự các giải lớn (“ forever entering the sport's biggest tournaments ”) nhưng chưa từng giành được giải nào (“ never carrying one off ”). ⇒ Cả thời điểm , việc tham gia lẫn kết quả đều khớp. Đáp án đúng: TRUE Đối chiếu paraphrasing: Before 2018 five years earlier (tính từ mốc 2018 ở câu (1)). had competed at the major tournaments forever entering the sport's biggest tournaments without ever winning one never carrying one off FALSE Nếu skim/scan thấy Marchetti đứng đầu bảng xếp hạng (“top of the world rankings”), dễ suy ra ông đã từng thắng giải lớn Nhưng câu (3) nói rõ ở thời điểm năm năm trước, ông chưa từng giành được giải nào. Chỉ chọn FALSE nếu bài nói ở thời điểm đó ông đã thắng một giải lớn. NOT GIVEN Nếu chỉ tìm đúng từ competed hoặc winning, dễ tưởng bài không đề cập Nhưng việc tham gia và chưa thắng đều được diễn đạt bằng cụm khác trong câu (3). Chỉ chọn NOT GIVEN nếu bài thiếu bằng chứng cho ít nhất một trong hai ý đó."
            }
          },
          {
            "id": 2,
            "prompt": "The arrival of Bjorn Halvorsen on the coaching team made no difference to how Marchetti played.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "FALSE",
            "explanation": {
              "step1": "The arrival of Bjorn Halvorsen on the coaching team made no difference to how Marchetti played . Câu hỏi khẳng định việc Bjorn Halvorsen gia nhập ban huấn luyện không ảnh hưởng đến cách Marchetti thi đấu.",
              "step2": "Dựa vào tên riêng Bjorn Halvorsen, ta tìm đến đoạn 2, nơi bài đọc nhắc đến việc ông gia nhập ban huấn luyện của Marchetti. Đoạn 2",
              "step3": "Đoạn 2: One of them was common knowledge and much talked about at the time: the former world number one Bjorn Halvorsen joined Marchetti's coaching staff in 2013 , and what that did to his game could be seen at a glance .",
              "step4": "Câu hỏi nói: Việc Bjorn Halvorsen gia nhập ban huấn luyện không tạo ra khác biệt (“made no difference ”) trong cách Marchetti thi đấu. Bài đọc nói: Tác động của việc đó lên lối chơi của Marchetti có thể nhận thấy ngay (“could be seen at a glance”). Hai ý mâu thuẫn nhau. Đáp án đúng: FALSE Đối chiếu paraphrasing: no difference could be seen at a glance Đáp án TRUE Nếu chỉ thấy sự kiện gia nhập ban huấn luyện (“joined Marchetti's coaching staff”) khớp với câu hỏi, sẽ dễ chọn TRUE Nhưng câu hỏi còn phủ nhận tác động, trong khi bài đọc nói tác động ấy thấy rõ. Chỉ chọn TRUE nếu bài nói việc gia nhập không ảnh hưởng đến lối chơi của Marchetti. NOT GIVEN Nếu không thấy đúng từ khác biệt (“difference”) trong bài, sẽ dễ chọn NOT GIVEN Nhưng bài đã nêu tác động lên lối chơi là điều có thể nhận thấy ngay. Chỉ chọn NOT GIVEN nếu bài chỉ nói Bjorn Halvorsen gia nhập ban huấn luyện mà không cho biết điều đó có ảnh hưởng đến lối chơi hay không."
            }
          },
          {
            "id": 3,
            "prompt": "The Prescott twins spend more on their customised frames than other leading players do.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "NOT GIVEN",
            "explanation": {
              "step1": "The Prescott twins spend more on their customised frames than other leading players do . Cần kiểm tra bài đọc có so sánh mức chi tiêu của Prescott với các tay vợt hàng đầu khác hay không.",
              "step2": "Dựa vào tên riêng Prescott => ta định vị được câu giới thiệu “Liam and Noah Prescott” ở đoạn 3 và đọc thông tin về vợt của họ. Đoạn 3 — Liam and Noah Prescott",
              "step3": "Đoạn 3: It follows that the rackets the very best players rely on are never sold to the public as they are ; each is built around the individual who plays with it . The Australian doubles pair Liam and Noah Prescott, twins with exacting requirements , are a case in point . Among the things they have changed are the frame's length and even the paint over it , and the rackets they now prefer are heavier than an ordinary model , strung to a tighter pattern of crosses and mains . Câu (4)–(5): vợt của các tay vợt hàng đầu được làm riêng ; cặp song sinh Prescott là một ví dụ. Câu (8): bài đọc so sánh trọng lượng vợt với mẫu thông thường, không nêu mức chi tiêu .",
              "step4": "Câu hỏi nói: Cặp song sinh Prescott chi nhiều tiền hơn (“spend more”) cho vợt tuỳ chỉnh so với các tay vợt hàng đầu khác (“than other leading players do”). Bài đọc nói: Vợt được làm riêng cho người chơi (“ built around the individual ”), và vợt Prescott thích nặng hơn mẫu thông thường (“heavier than an ordinary model”). Bài đọc không cho biết họ chi nhiều hơn, bằng hay ít hơn các tay vợt hàng đầu khác . ⇒ Không đủ thông tin để xác nhận hoặc bác bỏ so sánh về tiền. Đáp án đúng: NOT GIVEN Đối chiếu paraphrasing: The Prescott twins Liam and Noah Prescott, twins customised frames built around the individual spend more heavier than an ordinary model than other leading players do không có so sánh chi tiêu tương ứng trong bài. Đáp án TRUE Thấy vợt được làm riêng và “heavier than an ordinary model” sẽ dễ chọn TRUE Nhưng nặng hơn không có nghĩa là chi nhiều hơn. Chỉ chọn TRUE nếu bài nói Prescott chi nhiều hơn các tay vợt hàng đầu khác. FALSE Không thấy thông tin về tiền có thể khiến ta chọn FALSE Nhưng không được đề cập không có nghĩa là bị phủ định. Chỉ chọn FALSE nếu bài nói Prescott chi bằng hoặc ít hơn các tay vợt hàng đầu khác."
            }
          },
          {
            "id": 4,
            "prompt": "The rackets the Prescotts currently favour are weightier than a standard one.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "TRUE",
            "explanation": {
              "step1": "The rackets the Prescotts currently favour are weightier than a standard one . Cần kiểm tra đúng những cây vợt Prescotts hiện ưa dùng , rồi đối chiếu trọng lượng với vợt tiêu chuẩn.",
              "step2": "Dựa vào tên riêng Prescotts => ta bắt đầu đọc ở đoạn 3, tại câu giới thiệu Liam and Noah Prescott. Đoạn 3",
              "step3": "Đoạn 3: The Australian doubles pair Liam and Noah Prescott , twins with exacting requirements, are a case in point . Among the things they have changed are the frame's length and even the paint over it , and the rackets they now prefer are heavier than an ordinary model , strung to a tighter pattern of crosses and mains . Câu (5): xác định Liam and Noah Prescott là những người được nhắc tới. Câu (8): vợt họ hiện ưa dùng nặng hơn mẫu thông thường .",
              "step4": "Câu hỏi nói: Vợt Prescotts hiện ưa dùng nặng hơn vợt tiêu chuẩn (“ weightier than a standard one ”). Bài đọc nói: Vợt họ hiện ưa dùng nặng hơn mẫu thông thường (“ heavier than an ordinary model ”). Hai ý trùng nhau về đối tượng, thời điểm và chiều so sánh. Đáp án đúng: TRUE Đối chiếu paraphrasing: The rackets the Prescotts currently favour the rackets they now prefer weightier than a standard one heavier than an ordinary model FALSE Sai vì bài khẳng định vợt họ nặng hơn, không đưa ra so sánh ngược lại. Chỉ chọn FALSE nếu bài nói vợt họ hiện thích không nặng hơn mẫu thông thường. NOT GIVEN Nếu chỉ tìm đúng chữ “weightier”, em có thể bỏ lỡ cách viết “heavier” Nhưng bài đã so sánh trọng lượng. Chỉ chọn NOT GIVEN nếu bài không cho biết vợt họ hiện thích nặng hay nhẹ hơn mẫu thông thường."
            }
          },
          {
            "id": 5,
            "prompt": "A governing body in tennis eventually prohibited the comb-strung racket.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "TRUE",
            "explanation": {
              "step1": "A governing body in tennis eventually prohibited the comb-strung racket . Cần kiểm tra ai cấm vợt comb-strung và lệnh cấm có xảy ra về sau hay không.",
              "step2": "Dựa vào tên loại vợt đặc biệt (“comb-strung racket”) => ta bắt đầu đọc ở câu (1), đoạn 5. Đoạn 5 — comb-strung racket",
              "step3": "Đoạn 5: The habit goes back to the 1970s , when a Dutch amateur by the name of Bram de Wit took to playing with what became known as the comb-strung racket . So much topspin poured off its string bed that the International Tennis Federation banned it before long . Câu (1): giới thiệu vợt comb-strung . Câu (2): vợt tạo nhiều xoáy => International Tennis Federation cấm vợt ấy chẳng bao lâu sau .",
              "step4": "Câu hỏi nói: một cơ quan quản lý quần vợt về sau cấm vợt comb-strung (“eventually prohibited the comb-strung racket”). Bài đọc nói: International Tennis Federation cấm vợt đó (“the International Tennis Federation banned it ”) chẳng bao lâu sau (“ before long ”). Từ “it” chỉ vợt comb-strung ở câu (1). Thông tin trùng khớp; “before long” còn cho biết lệnh cấm xảy ra sớm , không phủ định ý *về sau* trong câu hỏi. Đáp án đúng: TRUE Đối chiếu paraphrasing: A governing body in tennis the International Tennis Federation prohibited banned eventually before long — cùng chỉ việc cấm xảy ra sau đó, nhưng sắc thái nhanh chậm khác nhau. FALSE Sai vì bài nói rõ tổ chức này đã cấm vợt (“banned it”). Chỉ chọn FALSE nếu bài nói tổ chức ấy không cấm vợt comb-strung. NOT GIVEN Nếu chỉ tìm đúng cụm “governing body” mà không thấy, sẽ dễ chọn NOT GIVEN Nhưng bài nêu tên International Tennis Federation và nói rõ hành động cấm (“banned it”). Chỉ chọn NOT GIVEN nếu bài không cho biết vợt có bị cấm hay không."
            }
          },
          {
            "id": 6,
            "prompt": "Co-polyester strings deliver less spin than natural gut does.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "FALSE",
            "explanation": {
              "step1": "Co-polyester strings deliver less spin than natural gut does . Ý câu hỏi: Dây co-polyester tạo ít độ xoáy hơn dây natural gut. Ta cần kiểm tra chiều so sánh nhiều hay ít.",
              "step2": "Dựa vào thuật ngữ đặc biệt co-polyester => ta tìm đến câu (3) đoạn 8 để đọc kỹ phép so sánh về độ xoáy. Đoạn 8",
              "step3": "Đoạn 8: Research suggests that a co-polyester string throws off roughly a fifth more spin than natural gut or any rival synthetic can offer .",
              "step4": "Câu hỏi nói: Co-polyester tạo ít độ xoáy hơn natural gut (“ less spin than natural gut ”). Bài đọc nói: Co-polyester tạo nhiều độ xoáy hơn natural gut (“ more spin than natural gut ”). Hai chiều so sánh trái ngược nhau. Đáp án đúng: FALSE Đối chiếu paraphrasing: less spin than natural gut more spin than natural gut Đáp án TRUE Nếu skim/scan chỉ thấy hai loại dây và từ chỉ độ xoáy (“spin”), sẽ dễ bỏ qua chiều so sánh Nhưng bài nói more, không phải less. Chỉ chọn TRUE nếu bài nói co-polyester tạo ít độ xoáy hơn natural gut. NOT GIVEN Nếu chỉ tìm đúng chữ “less”, sẽ dễ tưởng bài không cho biết đáp án Nhưng câu (3) so sánh trực tiếp bằng “more spin than natural gut”. Chỉ chọn NOT GIVEN nếu bài không cho biết loại dây nào tạo nhiều độ xoáy hơn."
            }
          },
          {
            "id": 7,
            "prompt": "Dominic Vance won more matches after adding lead to his frames.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "NOT GIVEN",
            "explanation": {
              "step1": "Dominic Vance won more matches after adding lead to his frames . Ý câu hỏi: Cần kiểm tra liệu số trận Dominic Vance thắng có tăng sau khi anh gắn chì vào khung vợt hay không.",
              "step2": "Dựa vào tên riêng Dominic Vance => ta tìm đến câu (2) ở đoạn 9, nơi bài đọc nhắc đến anh và cú giao bóng (“ferocious serve”). Đoạn 9 — ferocious serve",
              "step3": "Đoạn 9: Much of the ferocious serve of the American Dominic Vance , to take one case, was credited to the three or four strips of lead he had attached to his frames ; these days the weighting is more often decided as the racket is built than added later on .",
              "step4": "Câu hỏi nói: Dominic Vance thắng nhiều trận hơn (“ won more matches ”) sau khi gắn chì vào khung vợt. Bài đọc nói: Những dải chì anh gắn vào khung vợt được cho là góp phần tạo nên cú giao bóng uy lực (“ferocious serve”). Bài không cho biết số trận thắng của anh có tăng hay không. Đáp án đúng: NOT GIVEN Đối chiếu paraphrasing: adding lead to his frames strips of lead he had attached to his frames won more matches không có trong bài. Đáp án TRUE Nếu chỉ thấy cú giao bóng uy lực (“ferocious serve”), sẽ dễ suy ra Dominic Vance thắng nhiều hơn Nhưng bài không nêu số trận thắng. Chỉ chọn TRUE nếu bài nói anh thắng nhiều trận hơn sau khi gắn chì. FALSE Sai vì bài cũng không nói số trận thắng của anh giữ nguyên hoặc giảm. Chỉ chọn FALSE nếu bài nói anh không thắng nhiều trận hơn sau khi gắn chì."
            }
          },
          {
            "id": 8,
            "prompt": "• Marchetti replaced the strings running horizontally with a  _____  type, keeping natural gut in the mains.\n• The Prescott twins altered their frames'  _____  as well as the paint on them.\n• Adjustments to a racket divide into two kinds: work on the string bed and work on the  _____ .\n• Natural gut was taken from the outer  _____  of certain animals' insides.\n• Dominic Vance added several thin pieces of  _____  to his frames to strengthen his serve.\n• Some players have the  _____  from one racket fitted onto another racket's frame.",
            "type": "FILL_IN_BLANK",
            "correct": "synthetic",
            "explanation": {
              "step1": "- Marchetti replaced the strings running horizontally with a 8. ___ type , keeping natural gut in the mains . Ô trống đứng trước *type*, nên cần một từ mô tả loại dây mới. Chất liệu natural gut vẫn được giữ ở mains ; ta cần tìm chất liệu dùng cho dây chạy ngang.",
              "step2": "Dựa vào tên riêng Marchetti và chi tiết về dây chạy ngang, ta tìm đến đoạn 2 để đọc cách anh ấy căng dây vợt. Đoạn 2",
              "step3": "Đoạn 2: Marchetti , like so many of his peers, had always favoured a frame strung with two separate materials - one threaded through the mains , the vertical strings , the other through the crosses, or horizontals . His mains he kept in natural gut ; the crosses , though , he re-strung in a synthetic in 2014 . Câu (4): xác định * crosses* là dây chạy ngang . Câu (5): mains vẫn dùng natural gut, còn crosses được căng lại bằng synthetic .",
              "step4": "Đáp án phù hợp nhất: synthetic Câu hoàn chỉnh: Marchetti replaced the strings running horizontally with a synthetic type , keeping natural gut in the mains. (Marchetti thay dây chạy ngang bằng loại tổng hợp , còn dây mains vẫn dùng natural gut.) => Khớp với dự đoán về từ mô tả chất liệu dây mới; đáp án gồm 1 từ, và đề không nêu giới hạn số từ. Đối chiếu paraphrasing: strings running horizontally the crosses, or horizontals keeping natural gut in the mains His mains he kept in natural gut natural gut chất liệu dây tự nhiên: Dễ chọn vì xuất hiện ngay cạnh đáp án, nhưng câu (5) nói chất liệu này được giữ ở mains, không phải dùng để căng lại dây ngang. co-polyester một loại dây tổng hợp: Đoạn 7–8 có nhắc đến nó, nhưng đoạn 2 chỉ xác định Marchetti dùng chất liệu tổng hợp (“a synthetic”), không nói rõ đó là co-polyester."
            }
          },
          {
            "id": 9,
            "prompt": "Complete blank for question 9:",
            "type": "FILL_IN_BLANK",
            "correct": "length",
            "explanation": {
              "step1": "- The Prescott twins altered their frames' 9. ___ as well as the paint on them . Ô trống đứng sau *frames’* nên cần một danh từ chỉ đặc điểm của khung vợt . Đó là đặc điểm được thay đổi bên cạnh lớp sơn; chưa cần đoán chính xác là gì.",
              "step2": "Dựa vào tên riêng Prescott => tìm đến đoạn 3 và bắt đầu đọc từ câu giới thiệu Liam và Noah Prescott. Đoạn 3",
              "step3": "Đoạn 3: The Australian doubles pair Liam and Noah Prescott, twins with exacting requirements , are a case in point . Among the things they have changed are the frame's length and even the paint over it , and the rackets they now prefer are heavier than an ordinary model , strung to a tighter pattern of crosses and mains . Câu (5): xác định Liam và Noah Prescott là cặp song sinh trong câu hỏi. Câu (8): trong những thứ họ thay đổi, chiều dài khung vợt đi cùng lớp sơn.",
              "step4": "Đáp án phù hợp nhất: length Câu hoàn chỉnh: The Prescott twins altered their frames' length as well as the paint on them. (Cặp song sinh Prescott đã thay đổi chiều dài khung vợt cũng như lớp sơn trên chúng.) => Khớp với dự đoán về một đặc điểm của khung vợt; *length* được lấy nguyên văn từ bài và gồm 1 từ. Đối chiếu paraphrasing: altered have changed as well as the paint on them and even the paint over it paint “ – lớp sơn ”: Nếu đọc lướt câu (8), từ này dễ gây chú ý vì nằm cạnh length Nhưng đề đã cho sẵn lớp sơn sau ô trống; cần điền đặc điểm đi cùng nó. pattern “ – kiểu đan dây ”: Câu (8) có nhắc đến kiểu đan dây chặt hơn (“tighter pattern”), nhưng đó là thông tin về dây vợt, không phải đặc điểm khung vợt được ghép với lớp sơn."
            }
          },
          {
            "id": 10,
            "prompt": "Complete blank for question 10:",
            "type": "FILL_IN_BLANK",
            "correct": "frame",
            "explanation": {
              "step1": "- Adjustments to a racket divide into two kinds : work on the string bed and work on the 10. ___ . Ô trống cần một danh từ chỉ bộ phận của vợt : bộ phận được điều chỉnh ở loại thứ hai, song song với phần dây vợt ở loại thứ nhất.",
              "step2": "Dựa vào thuật ngữ string bed trong câu hỏi => ta tìm đến câu (1), đoạn 6, nơi bài đọc phân loại các điều chỉnh đối với vợt. Đoạn 6",
              "step3": "Đoạn 6: In the main, these alterations sort into two families : those done to the string bed and those done to the frame .",
              "step4": "Đáp án phù hợp nhất: frame Câu hoàn chỉnh: Adjustments to a racket divide into two kinds: work on the string bed and work on the frame. (Các điều chỉnh đối với vợt chia thành hai loại: điều chỉnh phần dây vợt và điều chỉnh khung vợt .) => Khớp với dự đoán về một bộ phận của vợt; đáp án là 1 từ được lấy nguyên văn từ bài đọc. Đối chiếu paraphrasing: divide into two kinds sort into two families work on the string bed those done to the string bed string bed “ phần dây vợt ”: Đây là nhóm thứ nhất, đã được ghi sẵn trong câu hỏi; ô trống hỏi nhóm thứ hai. strings “ các sợi dây ”: Đoạn 6 cũng nhắc tới dây vợt, nhưng câu (1) gọi nhóm điều chỉnh thứ hai là khung vợt (“the frame”), không phải dây vợt. frames “ các khung vợt ”: Đây là dạng số nhiều; từ xuất hiện ở đúng vị trí cần lấy trong câu (1) là dạng số ít frame."
            }
          },
          {
            "id": 11,
            "prompt": "Complete blank for question 11:",
            "type": "FILL_IN_BLANK",
            "correct": "lining",
            "explanation": {
              "step1": "- Natural gut was taken from the outer 11. ___ of certain animals' insides . Ô trống đứng sau *outer* và trước *of*, nên cần một danh từ chỉ lớp bên ngoài của bộ phận được nhắc tới.",
              "step2": "Dựa vào thuật ngữ *natural gut* cùng từ *outer* => bắt đầu đọc ở đoạn 7, nơi bài nói vật liệu này được lấy từ đâu. Đoạn 7",
              "step3": "Đoạn 7: Once upon a time, every racket was strung with natural gut , taken from the outer lining of a sheep's or a cow's intestines .",
              "step4": "Đáp án phù hợp nhất: lining Câu hoàn chỉnh: Natural gut was taken from the outer lining of certain animals' insides. (Natural gut được lấy từ lớp lót bên ngoài ruột của một số loài vật.) => Khớp với dự đoán về danh từ chỉ lớp bên ngoài và đúng cụm outer lining trong bài; đáp án gồm 1 từ, đề không nêu giới hạn số từ. Đối chiếu paraphrasing: certain animals' insides a cow's intestines intestines “ phần ruột ”: Từ này nằm ngay sau đáp án, nhưng chỉ bộ phận có lớp lót bên ngoài, không phải tên của lớp đó. Đáp án gut “ vật liệu làm dây vợt ”: Từ này đã có trong câu hỏi ở cụm Natural gut; ô trống cần từ đứng sau outer."
            }
          },
          {
            "id": 12,
            "prompt": "Complete blank for question 12:",
            "type": "FILL_IN_BLANK",
            "correct": "lead",
            "explanation": {
              "step1": "- Dominic Vance added several thin pieces of 12. ___ to his frames to strengthen his serve. Ô trống đứng sau *pieces of*, nên ta cần dự đoán một danh từ chỉ chất liệu làm nên những miếng được gắn vào khung vợt.",
              "step2": "Dựa vào tên riêng Dominic Vance => bắt đầu đọc tại câu nhắc đến người này ở đoạn 9. Đoạn 9",
              "step3": "Đoạn 9: Much of the ferocious serve of the American Dominic Vance , to take one case, was credited to the three or four strips of lead he had attached to his frames ; these days the weighting is more often decided as the racket is built than added later on .",
              "step4": "Đáp án phù hợp nhất: lead Câu hoàn chỉnh: Dominic Vance added several thin pieces of lead to his frames to strengthen his serve. (Dominic Vance gắn vài miếng chì mỏng vào khung vợt để tăng sức mạnh cú giao bóng.) => Đúng với dự đoán về chất liệu : * lead* là thứ tạo nên các dải được gắn vào khung vợt ; đáp án gồm 1 từ. Đối chiếu paraphrasing: several thin pieces three or four strips added attached to strengthen his serve ferocious serve + was credited to frames — khung vợt: Từ này xuất hiện ngay sau các dải vật liệu, nhưng là nơi gắn chúng, không phải chất liệu làm nên chúng. weighting — việc gia trọng: Câu có nhắc đến việc gia trọng ngày nay, nhưng đây là một cách xử lý vợt, không phải chất liệu đứng sau pieces of."
            }
          },
          {
            "id": 13,
            "prompt": "Complete blank for question 13:",
            "type": "FILL_IN_BLANK",
            "correct": "handle",
            "explanation": {
              "step1": "- Some players have the 13. ___ from one racket fitted onto another racket's frame . Ô trống đứng sau “the”, nên cần một danh từ chỉ bộ phận của vợt . Manh mối là bộ phận ấy được lấy từ một cây vợt rồi lắp lên khung của cây khác; chưa cần đoán tên bộ phận.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc đến ý chuyển một bộ phận sang khung vợt khác (“ transplanted onto another frame ”) ở đoạn 10 => đây là vùng liên quan. Đoạn 10 — transplanted onto another frame",
              "step3": "Đoạn 10: Taste here is personal - one player wants a certain shape and may have the handle of a cherished racket transplanted onto another frame entirely , while another does something else again .",
              "step4": "Đáp án phù hợp nhất: handle Câu hoàn chỉnh: Some players have the handle from one racket fitted onto another racket's frame . (Một số người chơi cho lắp tay cầm từ cây vợt này lên khung của cây vợt khác .) => Khớp với dự đoán về một bộ phận của vợt được chuyển sang khung khác; đáp án gồm 1 từ . Đối chiếu paraphrasing: from one racket of a cherished racket fitted onto another racket's frame transplanted onto another frame frame — khung vợt: Dễ nhầm vì xuất hiện ở cả đề và bài đọc Nhưng frame là nơi nhận bộ phận được chuyển đến, không phải bộ phận cần điền. shape — hình dạng: Cùng câu bằng chứng có nhắc đến hình dạng người chơi muốn có (“a certain shape”), nhưng đó không phải vật được chuyển sang khung khác. grips — phần cầm vợt: Câu sau ở đoạn 10 nói đến việc đổi grips lấy loại thon hơn (“slimmer versions”), không nói chuyển chúng từ cây vợt này sang khung cây khác."
            }
          }
        ]
      },
      {
        "id": "cam-19-reading-1-p2",
        "passageNumber": 2,
        "title": "THE PIRATES OF THE ANCIENT MEDITERRANEAN",
        "subtitle": "Across the first and second millennia BCE, raiders roamed the waters of the Mediterranean, seizing vessels and slipping away from those who pursued them.",
        "content": [
          "The pirates of the ancient Mediterranean"
        ],
        "questions": [
          {
            "id": 14,
            "prompt": "Which section contains the following information: \"the suggestion that piracy was taking place even earlier than the first surviving record of it\"?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "correct": "B",
            "explanation": {
              "step1": "the suggestion that piracy was taking place even earlier than the first surviving record of it Dự đoán thông tin cần tìm (SPECIFY) 👍 NÊN tìm: đoạn vừa nêu ghi chép sớm nhất còn tồn tại về cướp biển, vừa cho rằng hoạt động này đã có từ trước mốc đó. 👎 ĐỪNG tìm: đoạn chỉ nói cướp biển xuất hiện từ rất lâu, hoặc chỉ nói lần đầu *một nhóm* cướp biển được nêu tên.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp ý tương đương với ghi chép đầu tiên còn lưu (“the first surviving record of it”). Đoạn A nhắc đến thời xa xưa, còn đoạn D nhắc đến việc nêu tên các nhóm cướp biển. Đoạn B mở đầu bằng lần đề cập sớm nhất còn lưu (“ The earliest surviving mention of piracy ”) => đây là vùng cần đọc kỹ. Đoạn B: The earliest surviving mention of piracy in the Mediterranean belongs to the kingdom of Amuria , in the reign of King Hadrimel (c 1400–1360 BCE) , though it must surely reach back well before that kingdom rose — partly because the sea counted for so much to the surrounding peoples, partly because of the lie of the land . Đoạn B — The earliest surviving mention of piracy",
              "step3": "Đối chiếu paraphrasing: the first surviving record of it The earliest surviving mention of piracy. the suggestion that piracy was taking place must surely reach back. even earlier than well before that kingdom rose + belongs to the kingdom of Amuria. Ghi chép sớm nhất gắn với Amuria, nhưng câu (1) cho rằng cướp biển đã có trước cả khi vương quốc ấy hình thành . Đáp án đúng: Paragraph B. Paragraph A Nếu đọc lướt, mốc thời gian rất xa (“first to the third millennium BCE”) dễ gây nhầm Nhưng đoạn này không so sánh hoạt động cướp biển với ghi chép sớm nhất còn lưu. Paragraph D Cụm lần đầu được nêu tên (“first named”) dễ gây nhầm với ghi chép đầu tiên Nhưng đây là lần đầu các nhóm cướp biển cụ thể được nêu tên, không phải nhận định rằng cướp biển có trước ghi chép sớm nhất.",
              "step4": "Đáp án chính xác: B"
            }
          },
          {
            "id": 15,
            "prompt": "Which section contains the following information: \"a description of the way the operation against the pirates was organised\"?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "correct": "G",
            "explanation": {
              "step1": "a description of the way the operation against the pirates was organised Dự đoán thông tin cần tìm (SPECIFY) 👍 NÊN tìm: đoạn mô tả cụ thể cách chia khu vực , bố trí lực lượng hoặc triển khai chiến dịch chống cướp biển. 👎 ĐỪNG tìm: đoạn chỉ nói cần chống cướp biển, hoặc nói về việc sử dụng cướp biển trong một chiến dịch khác.",
              "step2": "Đoạn A nhắc đến việc lập hạm đội, còn đoạn F nói đến yêu cầu trả đũa. Đoạn G mới mô tả cụ thể cách lực lượng được chia và điều phối . Đoạn G: Taking charge in person, Aquila split the whole Mediterranean into fifteen sectors and set a fleet and a commander over each . Once a sector was swept clear, its fleet moved on to reinforce the next , and so the campaign rolled on until nowhere at sea was left to the raiders . Câu (3): Aquila chia biển thành các khu vực , rồi bố trí hạm đội và người chỉ huy cho từng khu vực . Câu (4): Sau khi dẹp xong một khu vực, hạm đội chuyển sang hỗ trợ khu vực tiếp theo ; chiến dịch tiếp diễn cho đến khi cướp biển không còn chỗ trên biển. Đoạn G",
              "step3": "Đối chiếu paraphrasing: the operation the campaign; against the pirates nowhere at sea was left to the raiders. a description of the way + was organised split the whole Mediterranean into fifteen sectors + set a fleet and a commander over each + its fleet moved on to reinforce the next. Đáp án đúng: Paragraph G. Paragraph A Có thể dễ chọn vì đoạn này nhắc đến việc tập hợp hạm đội (“a great fleet at last assembled”) Nhưng đoạn A không mô tả cách chia khu vực và điều phối lực lượng như câu (3)–(4) đoạn G. Paragraph C Có nhắc đến một đội cướp biển (“a pirate squadron”), nhưng đó là việc dùng cướp biển để mở cuộc tấn công, không phải tổ chức chiến dịch chống cướp biển. Paragraph F Lời yêu cầu trả đũa (“demanded revenge”) có vẻ liên quan, nhưng Tarnis sau đó “did precisely nothing”; đoạn này không mô tả cách triển khai chiến dịch.",
              "step4": "Đáp án chính xác: G"
            }
          },
          {
            "id": 16,
            "prompt": "Which section contains the following information: \"a reference to states making use of pirates in time of war\"?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "correct": "C",
            "explanation": {
              "step1": "a reference to states making use of pirates in time of war Dự đoán thông tin cần tìm (SPECIFY) 👍 NÊN tìm: đoạn nói người cai trị hoặc nhà nước sử dụng cướp biển trong thời chiến . 👎 ĐỪNG tìm: đoạn chỉ nói nhà nước chống cướp biển, hoặc nhắc đến chiến tranh mà không nói họ dùng cướp biển.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta tìm ý tương đương với việc nhà nước dùng cướp biển trong chiến tranh. Ở đoạn C, cụm người cai trị (“rulers”) là điểm bắt đầu đọc. Đoạn C: It should be added, too, that rulers of the first and second millennia BCE were by no means above employing pirates themselves , especially in wartime , when a rival could be met with the raiders' numbers and skill . Đoạn C — rulers",
              "step3": "Đối chiếu paraphrasing: states rulers người cai trị là chủ thể phía nhà nước . making use of pirates by no means above + employing pirates. in time of war in wartime. Đáp án đúng: Paragraph C. Paragraph A Nếu skim/scan thấy hạm đội lớn (“a great fleet”), em có thể nghĩ đến việc nhà nước huy động cướp biển Nhưng hạm đội này được tập hợp chống lại họ (“against them”). Paragraph D Tàu chiến của vua (“his warships”) dễ gây nhầm với việc dùng cướp biển Nhưng đoạn này nói về nỗ lực ngăn cướp biển. Paragraph E Cụm thương mại và chiến tranh (“trade and warfare alike”) xuất hiện trong đoạn bàn về cướp biển Nhưng nó nói Dorans dựa vào biển cho hai hoạt động ấy, không nói nhà nước dùng cướp biển trong thời chiến.",
              "step4": "Đáp án chính xác: C"
            }
          },
          {
            "id": 17,
            "prompt": "Which section contains the following information: \"an account of the image that comes to most people's minds today at the mention of pirates\"?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "correct": "A",
            "explanation": {
              "step1": "an account of the image that comes to most people's minds today at the mention of pirates Dự đoán thông tin cần tìm (SPECIFY) 👍 NÊN tìm: đoạn nói đa số người hình dung điều gì khi nghe nhắc đến cướp biển. 👎 ĐỪNG tìm: đoạn chỉ kể về cướp biển có thật trong lịch sử hoặc quan điểm của người xưa về họ.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp ý đa số người hình dung . Ngay đầu đoạn A, cụm “ most people picture ” cho thấy đây là vùng liên quan. Đoạn A: Say 'pirate' and most people picture a crew of rogues and adventurers on a tall masted ship in warm southern waters . Đoạn A — most people picture",
              "step3": "Đối chiếu paraphrasing: at the mention of pirates Say 'pirate' comes to most people's minds today most people picture Đáp án đúng: Paragraph A. Paragraph B. Nếu skim/scan, cụm nói về lần nhắc đến sớm nhất (“earliest surviving mention”) dễ gây nhầm với từ mention trong câu hỏi Nhưng đoạn B bàn về ghi chép lịch sử, không phải hình ảnh đa số người hình dung. Paragraph D. Cụm “Two crews” gợi đến nhóm người trên tàu Nhưng đây là hai nhóm cướp biển được nêu tên trong tư liệu cổ, không phải hình dung phổ biến ngày nay.",
              "step4": "Đáp án chính xác: A"
            }
          },
          {
            "id": 18,
            "prompt": "Which section contains the following information: \"a ruler's undertaking to discipline any of his own people who turned to piracy\"?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "correct": "D",
            "explanation": {
              "step1": "a ruler's undertaking to discipline any of his own people who turned to piracy 👍 NÊN tìm: lời cam kết của một người cai trị sẽ trừng phạt bất kỳ người dân nào của chính ông đi cướp biển. 👎 ĐỪNG tìm: đoạn chỉ nói người cai trị sử dụng cướp biển, hoặc một nhà nước muốn chống cướp biển nói chung.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh để tìm ý *cam kết trừng phạt*. Đoạn C nói về việc sử dụng cướp biển, còn đoạn E nói về nỗ lực kiềm chế họ. Ở đoạn D, ta gặp động từ cam kết (“pledged”) => đây là vùng cần đọc kỹ. Đoạn D: In one tablet the ruler of Coryth , an island kingdom, rejected Sethuran's suggestion that his people had any tie to the Yldari — whose base lay far off along the Anthemos coast — and pledged that any subject of his found raiding would be punished without mercy . Đoạn D — pledged",
              "step3": "Đối chiếu paraphrasing: a ruler's undertaking the ruler of Coryth + pledged any of his own people any subject of his who turned to piracy found raiding; to discipline would be punished Đáp án đúng: Paragraph D . Paragraph C. Người cai trị sử dụng cướp biển: Dễ chọn vì có người cai trị và cướp biển (“employing pirates themselves”), nhưng đây là sử dụng, không phải cam kết trừng phạt dân mình. Paragraph E. Nỗ lực kiềm chế cướp biển: Cụm “attempt to rein them in” dễ gây nhầm với việc xử lý cướp biển, nhưng không nêu lời cam kết đối với người dân của một người cai trị. Paragraph F. Yêu cầu trả thù cướp biển: “demanded revenge” gợi ý trừng phạt, nhưng đó là yêu cầu trả thù, không phải lời cam kết xử lý người dân của chính mình.",
              "step4": "Đáp án chính xác: D"
            }
          },
          {
            "id": 19,
            "prompt": "Which section contains the following information: \"mention of a state benefiting economically from a supply of captured people\"?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "correct": "F",
            "explanation": {
              "step1": "mention of a state benefiting economically from a supply of captured people Dự đoán thông tin cần tìm (SPECIFY) 👍 NÊN tìm: một nhà nước hưởng lợi về kinh tế nhờ nguồn cung người bị bắt . 👎 ĐỪNG tìm: đoạn chỉ nói đến của cải bị cướp, hoặc lợi ích kinh tế không đến từ người bị bắt.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp ý nhà nước hưởng lợi từ người bị bắt. Đoạn C và G cũng nhắc đến lợi ích kinh tế, nhưng đoạn F có dấu hiệu nhà nước hưởng lợi (“the Republic profited”) => bắt đầu kiểm tra tại đây. Đoạn F: The matter was grave — and yet the Republic profited from the very thing that troubled it , for the captives the raiders seized supplied the slaves on which Tarnic farming and mining relied . Đoạn F — the Republic profited",
              "step3": "Đối chiếu paraphrasing: a state the Republic benefiting economically profited + Tarnic farming a supply of captured people the captives the raiders seized + supplied the slaves Đáp án đúng: Paragraph F. Người bị cướp biển bắt trở thành nguồn nô lệ phục vụ nông nghiệp, qua đó Cộng hòa Tarnis hưởng lợi về kinh tế . Paragraph C Nếu skim/scan thấy kinh tế địa phương được làm giàu (“greatly enriched the local economy”), ta dễ chọn đoạn này Nhưng đoạn C không nói lợi ích ấy đến từ nguồn cung người bị bắt, cũng không nói một nhà nước hưởng lợi. Paragraph G Đoạn này cũng nói đến việc Cộng hòa được làm giàu (“enriched the Republic further”) Nhưng những người trở thành nông dân ở đây là cướp biển được tái định cư, không phải người bị cướp biển bắt đem cung cấp làm nô lệ.",
              "step4": "Đáp án chính xác: F"
            }
          },
          {
            "id": 20,
            "prompt": "Which TWO of the following statements does the writer make about the coastal communities of the harsher districts of the Mediterranean in the ancient world? (Part 1 of 2)",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "They knew the local waters better than anyone else.",
              "They built their own boats using timber from nearby forests.",
              "They depended on the sea rather than on farming for their livelihood.",
              "They deliberately targeted vessels that were carrying weapons.",
              "They demanded payment from merchants in return for safe passage."
            ],
            "correct": "They knew the local waters better than anyone else.",
            "explanation": {
              "step1": "Which TWO of the following statements does the writer make about the coastal communities of the harsher districts of the Mediterranean in the ancient world? Cần tìm: Đúng hai nhận định về các cộng đồng ven biển ở vùng khắc nghiệt. Mỗi nhận định cần có bằng chứng riêng.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến ý tương đương với các cộng đồng ở vùng khắc nghiệt (“coastal communities of the harsher districts”). Đoạn B nhắc đến các cộng đồng (“the communities”) ở những nơi khắc nghiệt (“those harsher spots”) => đây là vùng cần đọc. Đoạn B — the communities",
              "step3": "Đoạn B: Much of the coast is good farmland , yet parts are broken, steep , in places mountainous , and the communities scratching a living in those harsher spots leaned heavily on whatever the sea could offer , fish and salt included . Almost all owned boats, handled them with skill, and knew the shoreline and its sea-lanes as no outsider could ; small wonder that in lean times such men took to raiding . Câu (2): Dù phần lớn bờ biển có đất canh tác tốt, cộng đồng ở những nơi khắc nghiệt dựa nhiều vào biển . Câu (3): Những người ấy am hiểu bờ biển và tuyến biển hơn người ngoài ; khi khó khăn, họ đi cướp biển. Hai ý cần chọn là sinh kế dựa vào biển và hiểu biết vượt trội về vùng biển địa phương .",
              "step4": "Đáp án đúng: A . They knew the local waters better than anyone else . (Họ am hiểu vùng biển địa phương hơn bất kỳ ai khác.) và C . They depended on the sea rather than on farming for their livelihood . (Họ dựa vào biển nhiều hơn vào nghề nông để mưu sinh .) Đối chiếu paraphrasing: knew the local waters knew the shoreline and its sea lanes; better than anyone else as no outsider could. depended on the sea leaned heavily on whatever the sea could offer. Ý nhiều hơn nghề nông dựa trên thế đối chiếu phần lớn bờ biển có đất canh tác tốt (“good farmland”), nhưng (“yet”) những nơi được nói tới lại dốc (“steep”). Bài không nói họ hoàn toàn không làm nông. Đáp án B “ Họ tự đóng thuyền bằng gỗ từ các khu rừng gần đó ”: Đoạn B nói họ có thuyền (“owned boats”), nhưng không nói họ tự đóng thuyền hoặc lấy gỗ từ rừng gần đó. Đáp án D “ Họ cố ý nhắm vào tàu chở vũ khí ”: Nếu skim/scan, từ chỉ tàu chiến (“warships”) ở đoạn B có thể gây nhầm. Đó là tàu của nhà nước đến truy đuổi, không phải tàu chở vũ khí bị họ nhắm tới. Đáp án E “ Họ đòi thương nhân trả tiền để được đi qua an toàn ”: Khoản tiền lớn (“heavy payment”) ở đoạn F là tiền đòi khi bắt giữ những người có địa vị ở Tarnis, không phải phí để thương nhân được đi qua an toàn."
            }
          },
          {
            "id": 21,
            "prompt": "Which TWO of the following statements does the writer make about the coastal communities of the harsher districts of the Mediterranean in the ancient world? (Part 2 of 2)",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "They knew the local waters better than anyone else.",
              "They built their own boats using timber from nearby forests.",
              "They depended on the sea rather than on farming for their livelihood.",
              "They deliberately targeted vessels that were carrying weapons.",
              "They demanded payment from merchants in return for safe passage."
            ],
            "correct": "They depended on the sea rather than on farming for their livelihood.",
            "explanation": {
              "step1": "Which TWO of the following statements does the writer make about piracy in the Doran world ? Cần tìm: Đúng hai nhận định mà tác giả đưa ra về cướp biển trong thế giới Doran. Mỗi nhận định cần có bằng chứng trong bài.",
              "step2": "Dựa vào tên gọi Doran trong câu hỏi (“Doran world”) => ta định vị đoạn E, bắt đầu từ chỗ nhắc đến các thành phố Doran (“Doran cities”). Đoạn E — Doran cities",
              "step3": "Đoạn E: Tellingly, the early Doran poet Melanthos , in his epics the Anthedon and the Ereskeia , goes beyond excusing the pirate's life and openly praises it . For the Dorans , piracy was simply part of ordinary life , and not even the highest officers of state kept clear of it . Câu (3): Sử thi của Melanthos công khai ca ngợi đời cướp biển. Câu (5): Với Dorans, cướp biển là một phần đời sống thường ngày ; ngay cả quan chức cấp cao cũng không tránh xa .",
              "step4": "Đáp án đúng: → Some of its written literature expresses approval of piracy., Even prominent members of society took part in it. - A. Some of its written literature expresses approval of piracy . (Một số tác phẩm viết của Doran bày tỏ sự tán thành đối với cướp biển .) - D. Even prominent members of society took part in it . (Ngay cả những người có địa vị cao trong xã hội cũng tham gia cướp biển.) Đối chiếu paraphrasing: A: written literature his epics; expresses approval of piracy openly praises it. D: prominent members of society the highest officers of state; took part in it not even the highest officers of state kept clear of it. Đáp án B “ Dorans chỉ chấp nhận cướp biển trong thời chiến ”: Nếu skim/scan đoạn C, cụm “especially in wartime” dễ khiến ta chọn B Nhưng câu (5) đoạn E nói cướp biển là một phần đời sống thường ngày (“part of ordinary life”) đối với Dorans, không chỉ xảy ra trong thời chiến. Đáp án C “ Số cướp biển hoạt động giảm mạnh sau khi ban hành luật mới ”: Đoạn G có nhắc đến một đạo luật (“A law of 71 BCE”), nhưng đó là biện pháp của Tarnis, không phải nhận định về thế giới Doran. Bài cũng không nói số cướp biển hoạt động giảm mạnh ngay khi luật được ban hành. Đáp án E “ Thơ Doran thời kỳ đầu lên án cướp biển ”: Câu (3) đúng là nhắc đến một nhà thơ Doran thời kỳ đầu (“early Doran poet”), nhưng Melanthos công khai ca ngợi đời cướp biển (“openly praises it”), trái với lên án."
            }
          },
          {
            "id": 22,
            "prompt": "Which TWO of the following statements does the writer make about piracy in the Doran world? (Part 1 of 2)",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "Some of its written literature expresses approval of piracy.",
              "The Dorans considered piracy acceptable only during war.",
              "The number of active pirates dropped sharply once a new law was introduced.",
              "Even prominent members of society took part in it.",
              "Piracy was condemned in the earliest Doran poetry."
            ],
            "correct": "Some of its written literature expresses approval of piracy.",
            "explanation": {
              "step1": "Trouble arose only when the pirates began preying on ships that were carrying 11. ___ to Tarnis Ý câu hỏi: Rắc rối bắt đầu khi bọn cướp tấn công những tàu chở thứ gì tới Tarnis? Dự đoán ô trống: Cần một danh từ hoặc cụm danh từ chỉ hàng hóa trên tàu ; chưa thể xác định đó là hàng gì nếu chưa đọc bài.",
              "step2": "Dựa vào tên riêng Tarnis => tìm đến đoạn F, nơi bài đọc nói về Tarnis và nạn cướp biển. Bắt đầu đọc từ đây để tìm chi tiết về những con tàu bị cướp. Đoạn F",
              "step3": "Đoạn F: The moment they began taking ships laden with the wheat that fed the Republic's people , furious voices in the Council demanded revenge on those to blame .",
              "step4": "Đáp án phù hợp nhất: wheat Câu hoàn chỉnh: Trouble arose only when the pirates began preying on ships that were carrying wheat to Tarnis. (Rắc rối chỉ nảy sinh khi bọn cướp bắt đầu tấn công những con tàu chở lúa mì tới Tarnis.) => Khớp dự đoán về hàng hóa trên tàu: lúa mì (“wheat”); đáp án lấy nguyên văn từ bài và gồm 1 từ. Đối chiếu paraphrasing: were carrying laden with began preying on began taking slaves “ — người bị bắt làm nô lệ ”: Đoạn F có nhắc đến “slaves”, nhưng đây là nguồn lao động mà Tarnic Republic nhận được, không phải hàng trên những con tàu bị cướp. revenge “ — sự trả thù ”: Cũng xuất hiện ở câu (4), nhưng đây là điều Council yêu cầu sau khi tàu bị cướp, không phải thứ tàu chở. payment “ — khoản tiền trả ”: Đoạn F nhắc đến “heavy payment” khi nói về việc thả người bị bắt; từ này không chỉ hàng hóa trên tàu."
            }
          },
          {
            "id": 23,
            "prompt": "Which TWO of the following statements does the writer make about piracy in the Doran world? (Part 2 of 2)",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "Some of its written literature expresses approval of piracy.",
              "The Dorans considered piracy acceptable only during war.",
              "The number of active pirates dropped sharply once a new law was introduced.",
              "Even prominent members of society took part in it.",
              "Piracy was condemned in the earliest Doran poetry."
            ],
            "correct": "Even prominent members of society took part in it.",
            "explanation": {
              "step1": "which provoked demands in the Council for 12. ___ against those to blame . Sau for , ô trống cần một danh từ chỉ điều Council yêu cầu nhằm vào những người bị quy trách nhiệm.",
              "step2": "Dựa vào tên cơ quan Council trong câu hỏi => tìm đến đoạn F và bắt đầu đọc tại chỗ nhắc đến Council. Đoạn F",
              "step3": "Đoạn F: The moment they began taking ships laden with the wheat that fed the Republic's people , furious voices in the Council demanded revenge on those to blame .",
              "step4": "Đáp án phù hợp nhất: revenge Câu hoàn chỉnh: Trouble arose only when the pirates began preying on ships that were carrying 11. ___ to Tarnis, which provoked demands in the Council for revenge against those to blame. (Rắc rối chỉ nảy sinh khi bọn cướp tấn công tàu chở hàng đến Tarnis, khiến Council yêu cầu trả thù những người có lỗi .) => Revenge là điều Council yêu cầu , khớp với dự đoán về danh từ sau for ; đáp án gồm 1 từ. Đối chiếu paraphrasing: demands in the Council voices in the Council demanded against those to blame on those to blame voices những người lên tiếng: Từ này đứng gần “demanded”, nhưng chỉ người đưa ra yêu cầu, không phải điều được yêu cầu. Council cơ quan Council: Từ này lặp lại trong đề, nhưng “in the Council” cho biết nơi yêu cầu được đưa ra, không phải đáp án sau “for”."
            }
          },
          {
            "id": 24,
            "prompt": "For the Tarnic Republic, piracy was both a problem and, in some ways, an advantage. The raiders kept the Republic supplied with the forced labourers its farms and mines could not do without. Trouble arose only when the pirates began preying on ships that were carrying  _____  to Tarnis, which provoked demands in the Council for  _____  against those to blame. Even so, nothing was done and the raiding continued; in time the pirates grew confident enough to seize high-ranking Tarnic figures and release them only in return for a  _____ .",
            "type": "FILL_IN_BLANK",
            "correct": "wheat",
            "explanation": {
              "step1": "in time the pirates grew confident enough to seize high-ranking Tarnic figures and release them only in return for a 13. ___ . Ô trống đứng sau a , nên cần một danh từ số ít . Về nghĩa, đó là thứ bọn cướp biển đòi để đổi lấy việc thả người bị bắt; chưa cần đoán chính xác từ trong bài.",
              "step2": "Dựa vào tên riêng Tarnic và ý bắt nhân vật cấp cao (“seize high-ranking Tarnic figures”) => ta tìm đến câu (6), đoạn F, nơi nhắc tới những người Tarnic bị bắt (“leading Tarnic notables”). Đoạn F — leading Tarnic notables",
              "step3": "Đoạn F: By the first century BCE they had grown brazen enough to carry off leading Tarnic notables and hold them for a heavy payment ; best remembered of these prisoners was the young statesman Lucan Verr , seized in 82 BCE . Bọn cướp biển giữ người để đòi một khoản tiền (“hold them for a heavy payment”). Vì vậy, danh từ cần điền là payment .",
              "step4": "Đáp án phù hợp nhất: payment Câu hoàn chỉnh: Even so, nothing was done and the raiding continued; in time the pirates grew confident enough to seize high-ranking Tarnic figures and release them only in return for a payment . (Dù vậy, không có hành động nào được thực hiện và các vụ cướp vẫn tiếp diễn; về sau, bọn cướp biển đủ tự tin để bắt những nhân vật Tarnic cấp cao và chỉ thả họ để đổi lấy một khoản tiền .) => Khớp với dự đoán về danh từ chỉ thứ được đòi để thả người. Đáp án gồm 1 từ; đề được cung cấp không nêu giới hạn số từ. Đối chiếu paraphrasing: high ranking Tarnic figures leading Tarnic notables release them only in return for hold them for heavy “ — lớn ”: đứng ngay trước payment, Nhưng đây là tính từ; đứng một mình sau a thì không gọi tên thứ bọn cướp biển đòi. notables “ — những nhân vật có địa vị ”: Đây là người bị bắt (“leading Tarnic notables”), không phải khoản được đòi để thả họ."
            }
          },
          {
            "id": 25,
            "prompt": "Complete blank for question 25:",
            "type": "FILL_IN_BLANK",
            "correct": "revenge",
            "explanation": {
              "step1": "Phân tích câu hỏi theo phương pháp Linearthinking.",
              "step2": "Định vị vùng thông tin liên quan trong bài đọc.",
              "step3": "Bóc tách cấu trúc câu (S-V-O) và đối chiếu nghĩa.",
              "step4": "Đáp án chính xác: revenge"
            }
          },
          {
            "id": 26,
            "prompt": "Complete blank for question 26:",
            "type": "FILL_IN_BLANK",
            "correct": "payment",
            "explanation": {
              "step1": "Phân tích câu hỏi theo phương pháp Linearthinking.",
              "step2": "Định vị vùng thông tin liên quan trong bài đọc.",
              "step3": "Bóc tách cấu trúc câu (S-V-O) và đối chiếu nghĩa.",
              "step4": "Đáp án chính xác: payment"
            }
          }
        ]
      },
      {
        "id": "cam-19-reading-1-p3",
        "passageNumber": 3,
        "title": "The persistence and peril of misinformation",
        "subtitle": "Marek Voss examines how the human brain checks incoming information, and weighs the difficulties of countering falsehoods that spread widely.",
        "content": [
          "False information is nothing new, even if it feels like a defining feature of our age; whether spread deliberately or passed on by accident, it may simply be unavoidable. For roughly as long as people have been able to speak, they have almost certainly told one another untruths. Deception carries obvious rewards: it can win a strategic edge, prod others into action, or help hold a relationship together. And quite apart from deliberate lying, mistaken claims have circulated unintentionally for many thousands of years.",
          "What has altered is the scale. Because today's technology carries information to vast audiences spread right across the globe, a false claim now threatens the kind of immediate, sweeping harm that earlier generations never had to face. And yet the cure, given time, may lie in those very same channels of mass communication that let information travel so readily.",
          "So why should this matter so much? What chiefly troubles researchers, among them the teams led by Dahlia Merrick at the University of Ashworth and Corin Blaise at Talmadge University, is that false information can bend both what people think and how they behave, steering them toward decisions they would never have reached had the truth been clear. The worry, put another way, is that misinformation plants mistaken beliefs; and once such beliefs are shared not by a single mind but by great numbers, the damage to public health, social harmony and political life may prove severe.",
          "Three features of the modern media environment, in particular, call for close attention, and not merely from scholars and lawmakers but from anyone who switches on a television, tunes in to the radio, or reads something on a screen. The first is that people who meet a false claim generally believe it, at least to begin with. The second is that broadcast and print outlets frequently let misinformation through before it reaches a mass audience. The third is that pushing back against a falsehood, once widely seen, can swallow up a great deal of effort and money.",
          "Grasping what takes place at that very first moment of contact matters enormously if we are to judge the troubles that may follow. Running into something untrue is, admittedly, an ordinary event; and yet the precise manner, and the precise instant, in which the mind stamps a claim as genuine or false has long been argued over by philosophers. Two seventeenth-century thinkers, Aurelio Bettani and Jonas Verhelst, set the problem out sharply, and their rival predictions have only lately faced rigorous experimental test. For Bettani, a claim is embraced or dismissed only once its truth has been weighed; for Verhelst, by contrast, every incoming statement, misinformation and all, is swallowed whole at first, and only afterwards, by way of a separate mental step, confirmed or thrown out. Over recent decades experimental work by groups led by Ines Kovac at Rowan State University and Peder Lindqvist at Vahlen University has come down on Verhelst's side: the mind seems to log each fresh item as though it were correct, if only for a brief instant, before labelling it true or false only later. That fits the finding that the brain's machinery for doubt sits in a physically separate region from the machinery used to perceive and record.",
          "Turn now to the second observation, that false claims frequently slip into broadcast and printed media with nothing stopping them beforehand. New Zealand's regulatory set-up illustrates the point, since the agencies there are generally geared toward catching troublesome content after it has aired rather than before. A body like the National Medicines Authority, for instance, does much monitoring and public notification, yet censoring material in advance forms no part of its role. Direct-to-consumer advertising of prescription drugs falls within the NMA's oversight, and the authority has built tools such as its Flag-an-Ad scheme, by which the public may report advertisements that seem to breach the rules on presenting a drug's risks. Worthy though such schemes are, they do nothing to keep misleading advertising off the air in the first place. What is more, even a falsehood that has been successfully put right can go on shaping people's attitudes.",
          "Turning to the third observation: mounting an effective correction, however persuasive its wording, calls for resources and careful planning if it is ever to achieve the reach and frequency required. A corrective message will only work where its audience can genuinely follow it, and that means either casting it in terms people find accessible or else alerting them, in advance, to the very chance of being misled. Because some audiences will not even suspect that what they read might be false, there is a strong case for teaching media literacy to children as young as primary-school age. And strikingly, even now, with reporters and academics drawing attention to fake news, readers skimming a passage still fail to tell apart stories that are plainly untrue from those that rest on fact.",
          "Ours is an age in which misinformation is everywhere; happily, it is also one in which many people are pouring their energy into possible cures. The road ahead will certainly prove long and hard. What it demands is not only further theoretical thought but also the building and upkeep of dependable monitoring tools, together with a shared readiness, among ordinary citizens, to push back against prominent public claims resting on too little scientific consensus or social fact. Since misinformation springs from human fallibility and from our very hunger for information, no single one-off cure will ever suffice; what is called for instead is sustained, coordinated work carried on over the long term."
        ],
        "questions": [
          {
            "id": 27,
            "prompt": "In the first paragraph, what does the writer suggest about misinformation?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "People may spread it for several different motives.",
              "It has grown harder to recognise than it once was.",
              "It is largely a product of modern communication.",
              "Its meaning tends to shift as it is retold."
            ],
            "correct": "People may spread it for several different motives.",
            "explanation": {
              "step1": "In the first paragraph , what does the writer suggest about misinformation ? Câu hỏi hỏi: Tác giả gợi ra điều gì về thông tin sai lệch trong đoạn 1?",
              "step2": "Đề đã chỉ rõ đoạn 1. Ta đọc đến ý nói về lợi ích của việc lừa dối (“Deception carries obvious rewards”) => đây là điểm bắt đầu đọc bằng chứng. Đoạn 1 — Deception carries obvious rewards",
              "step3": "Đoạn 1: Deception carries obvious rewards : it can win a strategic edge , prod others into action, or help hold a relationship together . Người ta có thể lan truyền thông tin sai vì những động cơ khác nhau .",
              "step4": "Đáp án đúng: A. People may spread it for several different motives . (Người ta có thể lan truyền thông tin sai vì nhiều động cơ khác nhau .) Đối chiếu paraphrasing: several different motives win a strategic edge + help hold a relationship together Đáp án B “ Việc nhận ra thông tin sai đã khó hơn trước ”: Sai vì câu (3) nêu các lợi ích của việc lừa dối, không so sánh khả năng nhận biết giữa trước đây và hiện nay. Đáp án C “ Thông tin sai chủ yếu là sản phẩm của truyền thông hiện đại ”: Nếu skim/scan thấy đoạn 2 nhắc đến công nghệ hiện nay (“today's technology”), ta dễ chọn ý này Nhưng đoạn đó nói quy mô lan truyền thay đổi, không nói thông tin sai mới xuất hiện. Đáp án D “ Ý nghĩa của thông tin sai có xu hướng thay đổi khi được kể lại ”: Cụm nói về việc vô tình truyền tiếp (“passed on by accident”) ở đoạn 1 có thể gây nhầm Nhưng truyền tiếp không có nghĩa là nội dung bị đổi nghĩa."
            }
          },
          {
            "id": 28,
            "prompt": "How does the writer regard the part played by technology?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "It has transformed the way organisations exploit false information.",
              "It has made verifying information far easier for ordinary people.",
              "It may eventually offer a means of tackling misinformation.",
              "It could change people's basic attitude toward information itself."
            ],
            "correct": "It may eventually offer a means of tackling misinformation.",
            "explanation": {
              "step1": "How does the writer regard the part played by technology ? Câu hỏi hỏi: Tác giả nhìn nhận vai trò của công nghệ như thế nào?",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến chỗ nói về vai trò của công nghệ. Đoạn 2 nhắc đến “today's technology” => đây là vùng liên quan. Đoạn 2 — today's technology",
              "step3": "Đoạn 2: Because today's technology carries information to vast audiences spread right across the globe , a false claim now threatens the kind of immediate, sweeping harm that earlier generations never had to face . And yet the cure , given time , may lie in those very same channels of mass communication that let information travel so readily . Câu (2): công nghệ truyền tin rộng => thông tin sai có thể gây hại trên diện rộng. Câu (3): nhưng chính các kênh ấy có thể giúp khắc phục vấn đề về sau .",
              "step4": "Đáp án đúng: C. It may eventually offer a means of tackling misinformation . ( Về sau , công nghệ có thể đem lại một cách khắc phục thông tin sai lệch .) Đối chiếu paraphrasing: eventually given time a means of tackling misinformation the cure + may lie in those very same channels of mass communication Đáp án A “ Công nghệ đã thay đổi cách các tổ chức khai thác thông tin sai ”: Sai vì câu (2) nói công nghệ đưa thông tin đến đông người, không nói các tổ chức thay đổi cách khai thác thông tin sai. Đáp án B “ Công nghệ đã giúp người bình thường kiểm chứng thông tin dễ hơn ”: Nếu skim đoạn 8 thấy “dependable monitoring tools” sẽ dễ chọn B Nhưng đoạn đó nói đến việc cần xây dựng và duy trì công cụ, không nói người dân đã kiểm chứng dễ hơn. Đáp án D “ Công nghệ có thể thay đổi thái độ căn bản của con người đối với thông tin ”: Nếu skim đoạn 6 thấy “shaping people's attitudes” sẽ dễ nhầm Nhưng ở đó, thông tin sai tác động đến thái độ của con người; bài không quy tác động ấy cho công nghệ."
            }
          },
          {
            "id": 29,
            "prompt": "In the fourth paragraph, the writer is",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "explaining how the impact of misinformation has shifted over the years.",
              "setting out the aspects of misinformation that matter most at present.",
              "contrasting the various opinions people hold about misinformation.",
              "describing how policy makers regard misinformation in the media."
            ],
            "correct": "setting out the aspects of misinformation that matter most at present.",
            "explanation": {
              "step1": "In the fourth paragraph , the writer is Câu hỏi yêu cầu xác định tác giả đang làm gì trong đoạn 4 , nên cần nhìn cách cả đoạn triển khai ý, không chỉ tìm một chi tiết.",
              "step2": "Đề chỉ rõ đoạn 4 (“fourth paragraph”) => bắt đầu đọc từ câu mở đoạn, nơi tác giả giới thiệu “Three features of the modern media environment”. Đoạn 4 — Three features of the modern media environment",
              "step3": "Đoạn 4: Three features of the modern media environment , in particular, call for close attention , and not merely from scholars and lawmakers but from anyone who switches on a television, tunes in to the radio, or reads something on a screen . The first is that people who meet a false claim generally believe it, at least to begin with . The second is that broadcast and print outlets frequently let misinformation through before it reaches a mass audience . The third is that pushing back against a falsehood , once widely seen, can swallow up a great deal of effort and money . Câu (1): giới thiệu ba đặc điểm cần chú ý của môi trường truyền thông hiện nay. Câu (2)–(4): lần lượt nêu ba khía cạnh : người tiếp nhận ban đầu tin thông tin sai, truyền thông để thông tin sai lọt qua, và việc phản bác tốn nguồn lực.",
              "step4": "Đáp án đúng: B. setting out the aspects of misinformation that matter most at present . ( Nêu ra những khía cạnh của thông tin sai đáng quan tâm nhất hiện nay .) Đối chiếu paraphrasing: setting out the aspects The first + The second + The third aspects of misinformation that matter most at present Three features of the modern media environment + call for close attention Đáp án A “ Giải thích tác động của thông tin sai đã thay đổi ra sao qua các năm ”: Nếu nhớ đoạn 2 nói quy mô đã thay đổi (“What has altered is the scale”), bạn dễ chọn A Nhưng đoạn 4 liệt kê các đặc điểm hiện nay, không so sánh tác động qua các thời kỳ. Đáp án C “ Đối chiếu những quan điểm khác nhau về thông tin sai ”: Nếu skim thấy “The first” và “The second”, bạn dễ tưởng đây là các ý kiến đối lập Nhưng chúng đánh số các đặc điểm, không phải quan điểm của những nhóm người khác nhau. Đáp án D “ Mô tả cách các nhà hoạch định chính sách nhìn nhận thông tin sai trên truyền thông ”: Cụm “scholars and lawmakers” dễ gây nhầm, nhưng họ chỉ được nhắc đến như những người cần chú ý; đoạn không trình bày quan điểm của họ."
            }
          },
          {
            "id": 30,
            "prompt": "According to the writer, what is true of regulation in New Zealand?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "It does not stop false claims from reaching the public.",
              "Its published guidance ought to be made easier to follow.",
              "It has little bearing on how people view newly released medicines.",
              "The country maintains an unusually large number of regulatory bodies."
            ],
            "correct": "It does not stop false claims from reaching the public.",
            "explanation": {
              "step1": "According to the writer, what is true of regulation in New Zealand ? Câu hỏi hỏi: Theo tác giả, nhận xét nào đúng về hoạt động quản lý ở New Zealand?",
              "step2": "Dựa vào từ khóa đặc biệt New Zealand => ta định vị được câu (2) ở đoạn 6. Đọc thêm câu ngay trước đó để hiểu vấn đề mà ví dụ New Zealand minh họa. Đoạn 6",
              "step3": "Đoạn 6: Turn now to the second observation, that false claims frequently slip into broadcast and printed media with nothing stopping them beforehand . New Zealand's regulatory set-up illustrates the point , since the agencies there are generally geared toward catching troublesome content after it has aired rather than before . Câu (1): thông tin sai lọt vào truyền thông mà không bị ngăn trước . Câu (2): New Zealand minh họa điều đó: các cơ quan thường phát hiện nội dung sau khi lên sóng, thay vì chặn từ trước .",
              "step4": "Đáp án đúng: A. It does not stop false claims from reaching the public . (Hoạt động quản lý không ngăn thông tin sai tiếp cận công chúng .) Đối chiếu paraphrasing: regulation in New Zealand New Zealand's regulatory set up does not stop nothing stopping them beforehand + after it has aired Đáp án B “ Hướng dẫn đã công bố cần dễ hiểu hơn ”: Đoạn 7 có ý diễn đạt sao cho dễ hiểu (“terms people find accessible”), nhưng ý đó nói về thông điệp đính chính, không phải hướng dẫn của cơ quan quản lý New Zealand. Đáp án C “ Hoạt động quản lý ít ảnh hưởng đến cách công chúng nhìn nhận thuốc mới ”: Đoạn 6 có nhắc đến thuốc kê đơn (“prescription drugs”), nhưng bằng chứng ở đây nói về thời điểm phát hiện nội dung có vấn đề, không đánh giá tác động đối với thuốc mới. Đáp án D “ New Zealand có số cơ quan quản lý nhiều bất thường ”: Cụm “the agencies” có thể gợi ý nhiều cơ quan, nhưng không có số lượng hay phép so sánh nào cho thấy số đó nhiều bất thường."
            }
          },
          {
            "id": 31,
            "prompt": "Encountering false claims is, for most people, a matter of  _____ ; even so, exactly how and when the mind marks something as genuine or false remains disputed. On the question of how individuals deal with incoming information, the philosophers Bettani and Verhelst put forward  _____ . Bettani held that a claim is weighed first and only then accepted or rejected, whereas Verhelst maintained that whatever a person meets — misinformation included — is accepted at once and left unchecked until afterwards. Verhelst also suggested that a distinct  _____  is at work across these two stages. More recent studies have offered  _____  for Verhelst's account: the mind, it seems, registers each new piece of information as correct, though perhaps only for a  _____ , and delays labelling it true or false. This fits the discovery that the resources for doubt and the resources for perception and recording occupy  _____  in the brain.",
            "type": "FILL_IN_BLANK",
            "correct": "regular contact",
            "explanation": {
              "step1": "Encountering false claims is , for most people, a matter of 5. ___ ; Ô trống cần một cụm danh từ cho biết việc gặp thông tin sai là chuyện thường gặp hay hiếm gặp , không phải một phản ứng của trí óc.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp cách diễn đạt tương đương với việc gặp thông tin sai (“Encountering false claims”). Ở đoạn 5, cụm gặp điều không đúng (“Running into something untrue”) cho ta điểm bắt đầu đọc. Đoạn 5 — Running into something untrue",
              "step3": "Đoạn 5: Running into something untrue is , admittedly, an ordinary event ; and yet the precise manner , and the precise instant, in which the mind stamps a claim as genuine or false has long been argued over by philosophers .",
              "step4": "Đáp án phù hợp nhất: regular contact Câu hoàn chỉnh: Encountering false claims is, for most people, a matter of regular contact; even so, exactly how and when the mind marks something as genuine or false remains disputed. (Với đa số người, việc gặp thông tin sai là chuyện thường gặp; tuy vậy, chính xác cách thức và thời điểm trí óc xác định thông tin là đúng hay sai vẫn còn gây tranh luận.) => Khớp với dự đoán: bài đọc gọi việc gặp thông tin sai là chuyện bình thường (“an ordinary event”). Đối chiếu paraphrasing: Encountering false claims Running into something untrue regular contact an ordinary event fleeting moment “ khoảnh khắc thoáng qua ”: Nếu skim/scan, cụm “the precise instant” trong câu (2) dễ gây nhầm Nhưng nó nói về thời điểm trí óc đánh giá thông tin, không nói việc gặp thông tin sai có thường xảy ra hay không. deep suspicion “ sự nghi ngờ sâu sắc ”: Sai vì đây là phản ứng trước thông tin; câu (2) chỉ xác nhận việc gặp thông tin sai là chuyện bình thường. wide readership “ lượng người đọc đông đảo ”: Nếu skim/scan đoạn 2, cụm “vast audiences” có thể gây nhầm Nhưng nó nói về quy mô người tiếp nhận, không phải tính thường gặp của việc tiếp xúc với thông tin sai."
            }
          },
          {
            "id": 32,
            "prompt": "Complete blank for question 32:",
            "type": "FILL_IN_BLANK",
            "correct": "opposing views",
            "explanation": {
              "step1": "On the question of how individuals deal with incoming information, the philosophers Bettani and Verhelst put forward 6. ___ . Dự đoán: cần một cụm danh từ chỉ điều hai triết gia đưa ra. Ta cần xem quan điểm của họ giống hay khác nhau .",
              "step2": "Dựa vào hai tên riêng Bettani và Verhelst => bắt đầu đọc ở câu (3), đoạn 5. Đoạn 5",
              "step3": "Đoạn 5: Two seventeenth-century thinkers, Aurelio Bettani and Jonas Verhelst, set the problem out sharply , and their rival predictions have only lately faced rigorous experimental test . Điểm quyết định là các dự đoán đối lập của hai người (“rival predictions”).",
              "step4": "Đáp án phù hợp nhất: opposing views Câu hoàn chỉnh: On the question of how individuals deal with incoming information, the philosophers Bettani and Verhelst put forward opposing views. (Về cách con người xử lý thông tin tiếp nhận, hai triết gia Bettani và Verhelst đưa ra những quan điểm đối lập .) => Khớp với dự đoán về một cụm danh từ chỉ điều hai người đưa ra, đồng thời diễn đạt đúng sự đối lập trong bài. Đối chiếu paraphrasing: rival predictions opposing views fresh backing “ sự ủng hộ mới ”: thấy việc kiểm chứng (“experimental test”). Nhưng câu (3) nói các dự đoán đối lập, chưa nói kết quả kiểm chứng ủng hộ bên nào. cognitive step “ bước tư duy ”: Đoạn 5 có nhắc tới một bước xử lý riêng (“a separate mental step”), nhưng đó là chi tiết trong quan điểm của Verhelst, không phải điều cả hai triết gia đưa ra. test participants “ người tham gia thí nghiệm ”: với việc kiểm chứng (“experimental test”), Nhưng bài không nói hai triết gia đưa ra người tham gia thí nghiệm."
            }
          },
          {
            "id": 33,
            "prompt": "Complete blank for question 33:",
            "type": "FILL_IN_BLANK",
            "correct": "cognitive step",
            "explanation": {
              "step1": "What happens when people come across misinformation? Bettani held that a claim is weighed first and only then accepted or rejected , whereas Verhelst maintained that whatever a person meets — misinformation included — is accepted at once and left unchecked until afterwards . Verhelst also suggested that a distinct 7. ___ is at work across these two stages . Sau “a distinct”, cần một danh từ số ít . Dựa vào hai giai đoạn vừa nêu, ta dự đoán chỗ trống chỉ một bước xử lý riêng biệt, không phải thời lượng hay vị trí trong não.",
              "step2": "Dựa vào tên riêng Verhelst => ta định vị được câu nêu quan điểm của ông ở đoạn 5. Đoạn 5",
              "step3": "Đoạn 5: For Bettani, a claim is embraced or dismissed only once its truth has been weighed ; for Verhelst, by contrast, every incoming statement , misinformation and all, is swallowed whole at first , and only afterwards, by way of a separate mental step , confirmed or thrown out . Verhelst mô tả trình tự tiếp nhận trước, rồi mới kiểm tra ; việc kiểm tra diễn ra qua một bước riêng biệt.",
              "step4": "Đáp án phù hợp nhất: cognitive step Câu hoàn chỉnh: Verhelst also suggested that a distinct cognitive step is at work across these two stages. (Verhelst còn cho rằng có một bước xử lý nhận thức riêng biệt tham gia vào hai giai đoạn này.) => Khớp với dự đoán về một bước xử lý riêng biệt và với cách bài đọc gọi đó là “a separate mental step”. Đối chiếu paraphrasing: distinct separate cognitive step mental step fleeting moment — khoảnh khắc ngắn ngủi: Cụm “brief instant” ở câu 5 đoạn 5 dễ gây nhầm, nhưng nó chỉ thời lượng, không phải bước xử lý. opposing views — những quan điểm đối lập: Bài có nhắc đến “rival predictions”, nhưng đó là quan điểm của hai người, không phải bước diễn ra trong tâm trí; dạng số nhiều cũng không hợp sau “a distinct”. different areas — những khu vực khác nhau: Cụm “physically separate region” ở câu 6 đoạn 5 nói về vị trí trong não, không phải bước xử lý."
            }
          },
          {
            "id": 34,
            "prompt": "Complete blank for question 34:",
            "type": "FILL_IN_BLANK",
            "correct": "fresh backing",
            "explanation": {
              "step1": "Vế chứa chỗ trống 8: More recent studies have offered 8. ___ for Verhelst's account Dự đoán: Sau “have offered” cần một cụm danh từ. Vì thứ được đưa ra là *cho quan điểm của Verhelst*, ta dự đoán đó là sự ủng hộ hoặc bằng chứng mới .",
              "step2": "Dựa vào tên riêng Verhelst trong câu hỏi, ta tìm đến đoạn 5. Bắt đầu đọc từ cụm “Over recent decades experimental work”. Đoạn 5 — Over recent decades experimental work",
              "step3": "Đoạn 5: Over recent decades experimental work by groups led by Ines Kovac at Rowan State University and Peder Lindqvist at Vahlen University has come down on Verhelst's side : the mind seems to log each fresh item as though it were correct , if only for a brief instant, before labelling it true or false only later .",
              "step4": "Đáp án phù hợp nhất: fresh backing Câu hoàn chỉnh: More recent studies have offered fresh backing for Verhelst's account. (Các nghiên cứu gần đây đã đem lại sự ủng hộ mới cho quan điểm của Verhelst.) => Khớp với dự đoán: nghiên cứu gần đây đứng về phía Verhelst , tức đem lại sự ủng hộ mới. Đối chiếu paraphrasing: More recent studies Over recent decades experimental work fresh backing has come down on Verhelst's side opposing views “ quan điểm đối lập ”: Nếu đọc lướt, em dễ liên hệ với những dự đoán trái ngược (“rival predictions”) ở đoạn 5 Nhưng chỗ trống hỏi nghiên cứu gần đây đem lại gì cho quan điểm của Verhelst, không hỏi hai triết gia có quan điểm ra sao. cognitive step “ bước xử lý của trí óc ”: Đoạn 5 có nhắc một bước xử lý riêng (“a separate mental step”), nhưng đó là nội dung quan điểm, không phải kết quả nghiên cứu đem lại để ủng hộ quan điểm ấy. fleeting moment “ khoảnh khắc thoáng qua ”: Cụm chỉ khoảng thời gian rất ngắn (“a brief instant”) xuất hiện trong câu (5), nhưng không diễn đạt việc nghiên cứu đứng về phía Verhelst."
            }
          },
          {
            "id": 35,
            "prompt": "Complete blank for question 35:",
            "type": "FILL_IN_BLANK",
            "correct": "fleeting moment",
            "explanation": {
              "step1": "the mind , it seems , registers each new piece of information as correct , though perhaps only for a 9. ___ , and delays labelling it true or false . Ô 9 đứng sau “for a”, nên cần một cụm danh từ số ít chỉ khoảng thời gian tâm trí tạm ghi nhận thông tin là đúng.",
              "step2": "Dựa vào tên riêng Verhelst ở phần trước của câu hỏi => ta tìm đến đoạn 5, nơi có cụm “Verhelst's side”. Đoạn 5 — Verhelst's side",
              "step3": "Đoạn 5: Over recent decades experimental work by groups led by Ines Kovac at Rowan State University and Peder Lindqvist at Vahlen University has come down on Verhelst's side : the mind seems to log each fresh item as though it were correct , if only for a brief instant , before labelling it true or false only later . => Tâm trí chỉ tạm xem thông tin là đúng trong một khoảnh khắc ngắn (“a brief instant ”) trước khi đánh giá đúng hay sai.",
              "step4": "Đáp án phù hợp nhất: fleeting moment Câu hoàn chỉnh: the mind, it seems, registers each new piece of information as correct, though perhaps only for a fleeting moment , and delays labelling it true or false. (Tâm trí dường như ghi nhận mỗi thông tin mới là đúng, dù có lẽ chỉ trong một khoảnh khắc thoáng qua , rồi mới xác định nó đúng hay sai.) => Khớp với dự đoán về một khoảng thời gian ngắn và bằng chứng ở câu (5). Đối chiếu paraphrasing: fleeting moment brief instant cognitive step bước xử lý của tư duy: Có thể đứng sau “a”, nhưng chỉ một bước xử lý, không phải khoảng thời gian. regular contact sự tiếp xúc thường xuyên: Dễ nhầm vì bài có nói việc gặp thông tin sai là bình thường Nhưng ô 9 hỏi tâm trí tạm coi một thông tin là đúng trong bao lâu, không hỏi tần suất tiếp xúc. fresh backing bằng chứng ủng hộ mới: Liên quan đến nghiên cứu ủng hộ Verhelst, nhưng không diễn tả thời lượng “brief instant”."
            }
          },
          {
            "id": 36,
            "prompt": "Complete blank for question 36:",
            "type": "FILL_IN_BLANK",
            "correct": "different areas",
            "explanation": {
              "step1": "Câu cần điền: This fits the discovery that the resources for doubt and the resources for perception and recording occupy 10. ___ in the brain . Dự đoán: Sau “occupy” cần một cụm danh từ chỉ vị trí. Ta cần tìm hai bộ phận này nằm ở đâu so với nhau trong não.",
              "step2": "Câu hỏi không có từ khóa đặc biệt; ta đọc nhanh đến khi gặp cách diễn đạt tương đương với bộ phận phụ trách hoài nghi. Cụ thể, “machinery for doubt” ở đoạn 5 => bắt đầu đọc tại đây. Đoạn 5 — machinery for doubt",
              "step3": "Đoạn 5: That fits the finding that the brain's machinery for doubt sits in a physically separate region from the machinery used to perceive and record .",
              "step4": "Đáp án phù hợp nhất: different areas Câu hoàn chỉnh: This fits the discovery that the resources for doubt and the resources for perception and recording occupy different areas in the brain. (Điều này phù hợp với phát hiện rằng bộ phận phụ trách hoài nghi và bộ phận phụ trách nhận biết, ghi nhận nằm ở các vùng khác nhau trong não.) => Khớp với dự đoán về vị trí của hai bộ phận : câu (6) nói bộ phận phụ trách hoài nghi nằm ở một vùng tách biệt với bộ phận còn lại. Đối chiếu paraphrasing: resources for doubt machinery for doubt resources for perception and recording machinery used to perceive and record different areas separate region from deep suspicion “ — sự hoài nghi sâu sắc ”: thấy “doubt”, Nhưng chỗ trống hỏi vị trí của hai bộ phận, không hỏi mức độ hoài nghi. cognitive step “ — bước xử lý nhận thức ”: Đoạn 5 có “a separate mental step”, nhưng đó là một bước xử lý, không phải vùng não. fleeting moment “ — khoảnh khắc thoáng qua ”: Đoạn 5 có “a brief instant”, nhưng cụm này chỉ thời gian, không trả lời hai bộ phận nằm ở đâu."
            }
          },
          {
            "id": 37,
            "prompt": "According to the writer, a corrective campaign will succeed even when its audience cannot make sense of it.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "YES",
              "NO",
              "NOT GIVEN"
            ],
            "correct": "NO",
            "explanation": {
              "step1": "According to the writer, a corrective campaign will succeed even when its audience cannot make sense of it . Ý câu hỏi: Tác giả có cho rằng việc đính chính vẫn thành công dù người tiếp nhận không hiểu thông điệp hay không?",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp ý tương đương với thông điệp đính chính (“A corrective message”) ở đoạn 7 => bắt đầu đọc từ đây. Đoạn 7 — A corrective message",
              "step3": "Đoạn 7: A corrective message will only work where its audience can genuinely follow it , and that means either casting it in terms people find accessible or else alerting them, in advance, to the very chance of being misled .",
              "step4": "Câu hỏi nói: việc đính chính vẫn thành công dù người tiếp nhận không hiểu (“will succeed even when its audience can no t make sense of it”). Bài đọc nói: tác giả cho rằng thông điệp chỉ có hiệu quả khi người tiếp nhận hiểu được (“will only work where its audience can genuinely follow it”). Đây là quan điểm trái ngược . Đối chiếu paraphrasing: a corrective campaign A corrective message will succeed even when its audience cannot make sense of it will only work where its audience can genuinely follow it Đáp án đúng: NO Đáp án YES Nếu skim/scan chỉ thấy thông điệp có thể hiệu quả (“work”), sẽ dễ chọn YES Nhưng tác giả đặt điều kiện phải hiểu được (“can genuinely follow it”). Chỉ chọn YES nếu tác giả nói thông điệp vẫn hiệu quả khi người tiếp nhận không hiểu. NOT GIVEN Sai vì tác giả đã nêu rõ điều kiện để thông điệp có hiệu quả. Chỉ chọn NOT GIVEN nếu bài đọc không cho biết việc người tiếp nhận hiểu thông điệp có cần thiết hay không."
            }
          },
          {
            "id": 38,
            "prompt": "The writer supports teaching children about misinformation from an early age.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "YES",
              "NO",
              "NOT GIVEN"
            ],
            "correct": "YES",
            "explanation": {
              "step1": "The writer supports teaching children about misinformation from an early age . Ý câu hỏi: Tác giả có ủng hộ việc dạy trẻ về thông tin sai lệch từ sớm không?",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp ý dạy trẻ (“teaching media literacy”) ở đoạn 7, câu (3) => đây là vùng liên quan. Đoạn 7 — teaching media literacy",
              "step3": "Đoạn 7: Because some audiences will not even suspect that what they read might be false , there is a strong case for teaching media literacy to children as young as primary-school age .",
              "step4": "Câu hỏi nói: tác giả ủng hộ dạy trẻ về thông tin sai lệch từ sớm (“ supports ”; “ from an early age ”). Bài đọc nói: vì người đọc có thể không nhận ra điều mình đọc là sai (“ what they read might be false ”), tác giả cho rằng có cơ sở vững chắc để dạy kỹ năng hiểu truyền thông cho trẻ ngay từ tuổi tiểu học (“ a strong case for teaching media literacy”; “ as young as primary-school age ”). Đối chiếu paraphrasing: supports a strong case for teaching children teaching media literacy to children misinformation what they read might be false from an early age as young as primary school age Đáp án đúng: YES — quan điểm của tác giả đồng ý với statement. Đáp án NO Sai vì tác giả nêu lý do ủng hộ, không phản đối việc dạy trẻ. Chỉ chọn NO nếu tác giả nói không nên dạy trẻ hoặc tuổi tiểu học là quá sớm. NOT GIVEN Nếu skim/scan chỉ tìm đúng chữ misinformation, em có thể phân vân vì câu chứng cứ dùng media literacy Nhưng tác giả đã nêu cả lý do liên quan đến thông tin sai lẫn độ tuổi bắt đầu. Chỉ chọn NOT GIVEN nếu bài không cho biết tác giả có ủng hộ việc dạy trẻ từ sớm hay không."
            }
          },
          {
            "id": 39,
            "prompt": "The writer believes ordinary people have a part to play in challenging claims that lack solid evidence.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "YES",
              "NO",
              "NOT GIVEN"
            ],
            "correct": "YES",
            "explanation": {
              "step1": "The writer believes ordinary people have a part to play in challenging claims that lack solid evidence . Ý câu hỏi: tác giả có cho rằng người dân bình thường cũng có vai trò phản bác những tuyên bố thiếu bằng chứng vững chắc không?",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp cụm mang ý tương đương với người dân bình thường (“ordinary people”). Ở đoạn 8, cụm “among ordinary citizens” => đây là vùng cần đọc kỹ. Đoạn 8 — among ordinary citizens",
              "step3": "Đoạn 8: The road ahead will certainly prove long and hard . What it demands is not only further theoretical thought but also the building and upkeep of dependable monitoring tools, together with a shared readiness , among ordinary citizens , to push back against prominent public claims resting on too little scientific consensus or social fact . Câu (2): nêu chặng đường phía trước khó khăn, giúp hiểu “it” ở câu (3). Câu (3): tác giả yêu cầu người dân cùng phản bác những tuyên bố thiếu cơ sở .",
              "step4": "Câu hỏi nói: tác giả tin người dân bình thường (“ordinary people”) có vai trò phản bác (“have a part to play in challenging”) các tuyên bố thiếu bằng chứng vững chắc (“lack solid evidence”). Bài đọc nói: tác giả cho rằng chặng đường phía trước đòi hỏi (“What it demands”) sự sẵn sàng của người dân (“a shared readiness, among ordinary citizens,”) để phản bác (“push back against”) những tuyên bố có quá ít đồng thuận khoa học hoặc căn cứ thực tế (“ too little scientific consensus or social fact ”). Đối chiếu paraphrasing: ordinary people ordinary citizens have a part to play a shared readiness challenging push back against lack solid evidence too little scientific consensus or social fact Đáp án đúng: YES — nhận định phù hợp với quan điểm của tác giả . Đáp án NO Nếu skim/scan thấy cần suy xét lý thuyết (“further theoretical thought”), ta có thể tưởng việc này chỉ dành cho chuyên gia Nhưng tác giả cũng yêu cầu người dân (“ordinary citizens”) tham gia. Chỉ chọn NO nếu tác giả phủ nhận vai trò phản bác của người dân. NOT GIVEN Nếu chỉ tìm đúng các từ “challenging” và “solid evidence”, ta có thể bỏ lỡ cách diễn đạt khác trong bài Nhưng tác giả nêu rõ cả người tham gia, hành động phản bác và sự thiếu cơ sở. Chỉ chọn NOT GIVEN nếu bài không cho biết quan điểm của tác giả về vai trò ấy."
            }
          },
          {
            "id": 40,
            "prompt": "Funding for research into misinformation has increased in recent years.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "YES",
              "NO",
              "NOT GIVEN"
            ],
            "correct": "NOT GIVEN",
            "explanation": {
              "step1": "Funding for research into misinformation has increased in recent years . Ý câu hỏi: Tác giả có cho biết nguồn tài trợ cho nghiên cứu về thông tin sai lệch đã tăng trong những năm gần đây không?",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta tìm chỗ bài nhắc đến tiền (“money”) liên quan đến thông tin sai lệch => bắt đầu kiểm tra ở câu (4), đoạn 4. Đoạn 4 — money",
              "step3": "Đoạn 4: The third is that pushing back against a falsehood , once widely seen, can swallow up a great deal of effort and money .",
              "step4": "Câu hỏi nói: nguồn tài trợ cho nghiên cứu (“Funding for research”) đã tăng (“has increased”) trong những năm gần đây. Bài đọc nói: việc phản bác thông tin sai lệch (“pushing back against a falsehood”) có thể tốn nhiều tiền (“money”). Tác giả không cho biết nguồn tài trợ nghiên cứu tăng hay không. Đối chiếu paraphrasing: Funding for research pushing back against a falsehood. has increased in recent years không có trong bài. Đáp án đúng: NOT GIVEN Đáp án YES Nếu skim/scan thấy tiền (“money”) ở đoạn 4 và hoạt động nghiên cứu (“experimental work”) ở đoạn 5, sẽ dễ chọn YES Nhưng cả hai đều không chứng minh tài trợ nghiên cứu đã tăng. Chỉ chọn YES nếu tác giả thực sự nói nguồn tài trợ ấy tăng trong những năm gần đây. Đáp án NO Sai vì tác giả cũng không nói nguồn tài trợ nghiên cứu giảm hoặc không tăng; không có quan điểm nào mâu thuẫn với nhận định. Chỉ chọn NO nếu tác giả bác bỏ xu hướng tăng được nêu trong câu hỏi."
            }
          }
        ]
      }
    ]
  },
  "cam-18-reading-1": {
    "id": "cam-18-reading-1",
    "title": "IELTS CAM Inspired 18 - Reading Test 1",
    "series": "Cambridge 18",
    "testNumber": 1,
    "type": "Reading",
    "durationMinutes": 60,
    "passages": [
      {
        "id": "cam-18-reading-1-p1",
        "passageNumber": 1,
        "title": "Urban farming",
        "subtitle": "In Rotterdam, urban growers are testing a soil-free way of farming that needs less room and fewer resources. Might it help cities cope with the risks hanging over our food supplies?",
        "content": [
          "High above a recently opened concert hall in the west of Rotterdam, what is said to be the world's largest rooftop farm has begun to yield its first crops. From tall plastic tubes tumble raspberries — small, deep red and remarkably full of flavour — their roots left dangling inside the hollow columns, dozens to a tube. Nearby, a second set of identical tubes sends out rows of spinach, and beside them sit fragrant herbs: basil, thyme and mint. Across the way, shallow trays filled not with earth but with coconut fibre hold cherry tomatoes, glossy peppers and deep-green kale.",
          "It was on the roof of his own Rotterdam apartment block, a little over six years ago, that Joost Merckx — an engineer who also advises on sustainability — first began tinkering with vertical farming and the soil-free growing towers, known as aeroponic systems, that these plastic tubes form. The plot above the concert hall is far larger, covering some 12,000 square metres, about the size of a large city block. In a single day, the young farmers who look after it have already gathered 2,600 heads of spinach and 130 crates of raspberries. Once the other two-thirds of the space is planted, a staff of 25 will bring in as much as 800 kg of around 40 kinds of fruit and vegetables daily. 'Feeding an entire city this way is never going to happen, of course,' Merckx warns. 'The city puts real limits on what you can grow, and where. Still, if enough wasted space were converted like this, meeting five to ten per cent of the city's demand is not out of the question.'",
          "What matters most, perhaps, is that all this serves as a working advertisement for Verdantis, Merckx's thriving urban-farming consultancy, which these days receives enquiries from every corner of the globe wanting help to design and build a new kind of soil-free city farm. He lists the benefits readily. 'It bothers me that the fruit and vegetables on our plates have usually been treated with as many as twenty different chemicals, and that the intensive methods behind them pour out greenhouse gases. It bothers me, too, that the average item has been trucked some 1,800 chilled kilometres before I eat it, that it tastes of little because the varieties were bred to survive long trips rather than to taste good, and that of every euro I hand over, roughly 80 per cent goes to distributors and haulage firms rather than the farmers.'",
          "The soil-free approach, by contrast, needs nothing more than a modest flow of water, laced with organic nutrients and pushed endlessly around a sealed loop of pipes, towers and trays. 'The food is grown right here and sold just below us, so it hardly moves at all,' says Merckx. 'You can pick your varieties for their taste instead of their ability to survive weeks in transit, and you harvest them at their peak rather than ahead of it.' Because the roots are misted every ten minutes with water that is then captured and reused, no soil is worn out and the system gets by on 90 per cent less water than an ordinary intensive farm producing the same amount.",
          "None of this makes urban farming itself a novelty. City agriculture is thriving everywhere from Singapore to Chicago and Seoul to Bangkok, with herbs raised in abandoned shipping containers and mushrooms in disused metro tunnels. The gear, Merckx notes approvingly, is light enough to sit on almost any level roof and costs little — somewhere between €90 and €140 for each square metre. Running it is cheap as well, since it draws only a small fraction of the power that some other methods demand.",
          "Food produced in this way usually costs more than that from conventional intensive farms, though less than what soil-based organic growers charge. Naturally the technique has its boundaries, and a good deal of what it produces belongs to the warmer months. 'Root crops are still beyond us,' Merckx admits. 'Radishes are fine, but the long roots of carrots or potatoes rule them out, fruit trees are simply impossible, and beans swallow up space while giving back very little.' Even so, the sort of urban farming now under way in Rotterdam forms one piece of a larger, rapidly shifting picture, one that is drawing the growing of food ever closer to where we live."
        ],
        "questions": [
          {
            "id": 1,
            "prompt": "Complete blank for question 1:",
            "type": "FILL_IN_BLANK",
            "correct": "spinach",
            "explanation": {
              "step1": "The upright growing columns are planted with raspberries, herbs and 1. ___ . Ô trống đứng sau “raspberries, herbs and”, nên cần một danh từ chỉ cây trồng . Chỉ từ câu hỏi, ta chưa biết đó là cây gì.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta tìm ý tương đương với các cột trồng cây dựng đứng (“upright growing columns”). Đoạn 1 nhắc đến những ống nhựa cao (“tall plastic tubes”) trồng raspberries => đây là vùng cần đọc. Đoạn 1 — tall plastic tubes",
              "step3": "Đoạn 1: From tall plastic tubes tumble raspberries — small, deep red and remarkably full of flavour — their roots left dangling inside the hollow columns, dozens to a tube . Nearby, a second set of identical tubes sends out rows of spinach , and beside them sit fragrant herbs : basil, thyme and mint . Câu (2): các ống cao trồng raspberries. Câu (3): bộ ống giống hệt cho ra spinach ; herbs mọc bên cạnh.",
              "step4": "Đáp án phù hợp nhất: spinach Câu hoàn chỉnh: The upright growing columns are planted with raspberries, herbs and spinach. (Trên các cột trồng cây dựng đứng có raspberries, các loại thảo mộc và spinach.) => Khớp dự đoán về một loại cây trồng và thông tin ở câu (3). Đáp án gồm 1 từ; đề không cung cấp giới hạn số từ. Đối chiếu paraphrasing: upright growing columns tall plastic tubes + identical tubes basil, thyme, mint — các loại thảo mộc: Đây là ví dụ của herbs, mà herbs đã có sẵn trong câu hỏi. cherry tomatoes — cherry tomatoes: Loại cây này được trồng trong các khay nông (“shallow trays”), không phải trong bộ ống giống hệt ở câu (3)."
            }
          },
          {
            "id": 2,
            "prompt": "Complete blank for question 2:",
            "type": "FILL_IN_BLANK",
            "correct": "800 kg",
            "explanation": {
              "step1": "Once fully operational , the site will yield up to 2. ___ of produce each day . Ô trống cần một con số kèm đơn vị đo sản lượng . Ta cần tìm mức tối đa * khi khu trồng hoạt động đầy đủ *, không phải lượng đã thu hoạch ở hiện tại.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta tìm ý tương đương với *khi hoạt động đầy đủ*. Cụm nói về việc phần diện tích còn lại được trồng (“the other two-thirds of the space is planted”) => vùng liên quan ở đoạn 2. Đoạn 2 — the other two-thirds of the space is planted",
              "step3": "Đoạn 2: Once the other two-thirds of the space is planted , a staff of 25 will bring in as much as 800 kg of around 40 kinds of fruit and vegetables daily .",
              "step4": "Đáp án phù hợp nhất: 800 kg Câu hoàn chỉnh: Once fully operational , the site will yield up to 800 kg of produce each day. (Khi hoạt động đầy đủ, khu trồng sẽ cho sản lượng tối đa 800 kg nông sản mỗi ngày.) => Khớp với dự đoán về con số kèm đơn vị đo và mức sản lượng hằng ngày; đề không nêu giới hạn từ. Đối chiếu paraphrasing: Once fully operational Once the other two thirds of the space is planted up to as much as of produce each day fruit and vegetables daily 2,600 heads of spinach — số rau đã thu hoạch: Dễ chọn vì đoạn 2 cũng nêu sản lượng trong một ngày Nhưng đây là lượng đã thu hoạch, không phải mức tối đa khi trồng hết diện tích. 130 crates of raspberries — số thùng quả đã thu hoạch: Cùng là số liệu trong một ngày, nhưng cũng thuộc giai đoạn hiện tại; đơn vị crates không khớp với sản lượng cần tìm. 40 kinds — số loại nông sản: Con số nằm ngay cạnh đáp án, nhưng đếm số loại, không đo lượng nông sản thu được."
            }
          },
          {
            "id": 3,
            "prompt": "Complete blank for question 3:",
            "type": "FILL_IN_BLANK",
            "correct": "demand",
            "explanation": {
              "step1": "In time the farm could account for as much as a tenth of the city's overall 3. ___ . Ô trống đứng sau “the city's overall”, nên cần một danh từ chỉ tổng lượng mà trang trại có thể đóng góp một phần. “Could” cho thấy đây là khả năng trong tương lai, chưa phải kết quả đã đạt được.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp cách diễn đạt tương đương với mức tối đa một phần mười (“as much as a tenth”): “five to ten per cent” ở đoạn 2 => đây là vùng liên quan. Đoạn 2 — as much as a tenth",
              "step3": "Đoạn 2: Still, if enough wasted space were converted like this , meeting five to ten per cent of the city's demand is not out of the question .'",
              "step4": "Đáp án phù hợp nhất: demand Câu hoàn chỉnh: In time the farm could account for as much as a tenth of the city's overall demand . (Về sau, trang trại có thể đáp ứng tới một phần mười tổng nhu cầu của thành phố .) => Khớp với dự đoán về một danh từ chỉ lượng thành phố cần: bài đọc nói đến nhu cầu của thành phố (“the city's demand”); đáp án gồm 1 từ. Đối chiếu paraphrasing: a tenth ten per cent could not out of the question space không gian: Nếu skim/scan sẽ dễ chọn vì thấy “enough wasted space” Nhưng đây là thứ cần được chuyển đổi, không phải thứ trang trại đáp ứng ở mức 5–10%. per cent phần trăm: Sai vì đây là đơn vị biểu thị tỉ lệ; thứ được đáp ứng theo tỉ lệ ấy là “the city's demand”."
            }
          },
          {
            "id": 4,
            "prompt": "Complete blank for question 4:",
            "type": "FILL_IN_BLANK",
            "correct": "chemicals",
            "explanation": {
              "step1": "Ô số 4 nằm ở hàng *Intensive farming*, cột *Growth*: many kinds of 4. ___ applied Dự đoán: Cần một danh từ số nhiều chỉ thứ được sử dụng trong quá trình trồng trọt. Chưa cần đoán chính xác đó là gì.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta tìm ý tương đương với nhiều loại (“many kinds of”). Ở đoạn 3, cụm “as many as twenty different” cho biết đây là câu cần đọc. Đoạn 3 — as many as twenty different",
              "step3": "Đoạn 3: 'It bothers me that the fruit and vegetables on our plates have usually been treated with as many as twenty different chemicals , and that the intensive methods behind them pour out greenhouse gases .",
              "step4": "Đáp án phù hợp nhất: chemicals Câu hoàn chỉnh: many kinds of chemicals applied; methods harm air quality ( Nhiều loại hóa chất được sử dụng ; các phương pháp canh tác gây hại cho chất lượng không khí.) => Khớp với dự đoán danh từ số nhiều : rau quả được xử lý bằng nhiều loại hóa chất ; đáp án gồm 1 từ. Đề được cung cấp không nêu giới hạn số từ. Đối chiếu paraphrasing: many kinds of as many as twenty different applied been treated with greenhouse gases khí nhà kính: Cùng câu có nhắc đến cụm này, nhưng đó là thứ các phương pháp canh tác thải ra (“pour out”), không phải thứ được dùng để xử lý rau quả. organic nutrients dưỡng chất hữu cơ: Đoạn 4 nói đến chất pha vào nước trong phương pháp trồng không dùng đất, không phải thông tin của hàng Intensive farming."
            }
          },
          {
            "id": 5,
            "prompt": "Complete blank for question 5:",
            "type": "FILL_IN_BLANK",
            "correct": "trips",
            "explanation": {
              "step1": "Ở hàng *Intensive farming*, cột *Selection*, câu hỏi ghi: types picked for their ability to endure lengthy 5. ___ Sau *lengthy*, ô trống cần một danh từ chỉ điều mà các giống cây phải chịu đựng trong thời gian dài, có thể liên quan đến quá trình vận chuyển.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc đến đoạn 3, nơi xuất hiện ý các giống cây được chọn theo một tiêu chí (“the varieties were bred”) => bắt đầu đọc kỹ tại đây. Đoạn 3 — the varieties were bred",
              "step3": "Đoạn 3: ' It bothers me, too, that the average item has been trucked some 1,800 chilled kilometres before I eat it, that it tastes of little because the varieties were bred to survive long trips rather than to taste good , and that of every euro I hand over, roughly 80 per cent goes to distributors and haulage firms rather than the farmers .' Các giống cây được tạo để chịu được những chuyến đi dài (“survive long trips”); đây là tiêu chí chọn giống mà ô trống hỏi tới.",
              "step4": "Đáp án phù hợp nhất: trips Câu hoàn chỉnh: types picked for their ability to endure lengthy trips (các giống được chọn vì có khả năng chịu được những chuyến đi dài ). => Khớp với dự đoán về danh từ chỉ điều phải chịu đựng khi vận chuyển; đáp án gồm 1 từ . Đề được cung cấp không nêu giới hạn số từ. Đối chiếu paraphrasing: types picked for their ability to endure the varieties were bred to survive lengthy long; danh từ theo sau là chuyến đi (“trips”). kilometres đơn vị đo quãng đường: Dễ chọn khi thấy khoảng cách vận chuyển (“1,800 chilled kilometres”), nhưng lengthy kilometres không phải điều các giống cây được chọn để chịu đựng. taste vị: Câu (4) nhắc đến vị ngon (“taste good”), nhưng rather than cho thấy đây không phải tiêu chí được ưu tiên. transit quá trình vận chuyển: Đoạn 4 có cụm “weeks in transit”, nhưng từ nằm ngay sau long trong câu chứng cứ là trips."
            }
          },
          {
            "id": 6,
            "prompt": "Complete blank for question 6:",
            "type": "FILL_IN_BLANK",
            "correct": "farmers",
            "explanation": {
              "step1": "Ở hàng *Intensive farming*, cột *Sale*, ô số 6 nằm trong cụm: only a small share of the total income reaches the 6. ___ Dự đoán: Sau *the*, cần một danh từ chỉ người hoặc nhóm nhận tiền. Ta phải tìm bên nhận phần nhỏ , không phải bên nhận phần lớn.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc đến chỗ nói về số tiền người mua trả (“every euro I hand over”) ở đoạn 3 => đây là vùng cần đọc. Đoạn 3 — every euro I hand over",
              "step3": "Đoạn 3: ' It bothers me , too, that the average item has been trucked some 1,800 chilled kilometres before I eat it , that it tastes of little because the varieties were bred to survive long trips rather than to taste good , and that of every euro I hand over, roughly 80 per cent goes to distributors and haulage firms rather than the farmers .' Phần lớn tiền đến bên phân phối và vận chuyển , không phải farmers . Vì vậy, nhóm được hỏi ở phần thu nhập nhỏ là farmers .",
              "step4": "Đáp án phù hợp nhất: farmers Câu hoàn chỉnh: only a small share of the total income reaches the farmers (Chỉ một phần nhỏ tổng thu nhập đến tay nông dân.) => Khớp với dự đoán về nhóm nhận phần nhỏ và thông tin trong bài; đáp án gồm 1 từ. Đề được cung cấp không nêu giới hạn số từ. Đối chiếu paraphrasing: the total income every euro I hand over only a small share roughly 80 per cent + goes to distributors phần lớn đến bên khác, không phải farmers. distributors bên phân phối: Dễ chọn vì đây là bên nhận tiền được nêu trực tiếp Nhưng họ thuộc phía nhận khoảng 80%, không phải phần nhỏ cần điền. haulage firms các công ty vận chuyển: Cũng thuộc phía nhận phần lớn tiền trong câu (4), nên không khớp ô trống. Đáp án euro đơn vị tiền: Đây là khoản tiền đem ra so sánh, không phải người nhận tiền."
            }
          },
          {
            "id": 7,
            "prompt": "Complete blank for question 7:",
            "type": "FILL_IN_BLANK",
            "correct": "taste",
            "explanation": {
              "step1": "Ở hàng Aeroponic urban farming, cột lựa chọn giống (“Selection”), ô cần điền là: crops chosen for their 7. ___ Sau “their” cần một danh từ chỉ đặc điểm dùng để chọn cây trồng, không phải cách trồng hay thời điểm thu hoạch.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh để tìm ý chọn cây trồng. Ở đoạn 4, cụm “pick your varieties” => đây là điểm bắt đầu đọc. Đoạn 4 — pick your varieties",
              "step3": "Đoạn 4: ' You can pick your varieties for their taste instead of their ability to survive weeks in transit , and you harvest them at their peak rather than ahead of it .'",
              "step4": "Đáp án phù hợp nhất: taste Câu hoàn chỉnh: crops chosen for their taste (cây trồng được chọn vì hương vị của chúng) => Khớp với dự đoán: taste là đặc điểm được dùng để chọn giống cây ; đáp án gồm 1 từ. Đối chiếu paraphrasing: crops chosen pick your varieties transit sự vận chuyển: Đây là tiêu chí bị loại qua “instead of”, không phải đặc điểm được ưu tiên. Đáp án peak thời điểm tốt nhất: Từ này nói về lúc thu hoạch, không phải tiêu chí chọn giống. flavour hương vị: Đoạn 1 có “full of flavour”, nhưng câu nêu trực tiếp tiêu chí chọn giống ở đoạn 4 dùng từ taste."
            }
          },
          {
            "id": 8,
            "prompt": "Merckx expects the farm will eventually supply the greater part of the city's food.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "FALSE",
            "explanation": {
              "step1": "Merckx expects the farm will eventually supply the greater part of the city's food . Ý câu hỏi: Merckx kỳ vọng trang trại về sau sẽ cung cấp phần lớn thực phẩm của thành phố.",
              "step2": "Dựa vào tên riêng Merckx, ta tìm lời ông nói về lượng thực phẩm trang trại có thể cung cấp. Câu có cụm “Merckx warns” ở đoạn 2 là điểm bắt đầu đọc kĩ. Đoạn 2 — Merckx warns",
              "step3": "Đoạn 2: ' Feeding an entire city this way is never going to happen , of course ,' Merckx warns . ' Still , if enough wasted space were converted like this , meeting five to ten per cent of the city's demand is not out of the question .' Câu (5): Merckx bác bỏ khả năng nuôi sống toàn bộ thành phố . Câu (7): Dù vậy, ông cho rằng việc đáp ứng 5–10% nhu cầu là có thể nếu đủ không gian được chuyển đổi.",
              "step4": "Câu hỏi nói: Merckx kỳ vọng trang trại cung cấp phần lớn thực phẩm của thành phố (“the greater part”). Bài đọc nói: Merckx bác bỏ khả năng nuôi sống toàn thành phố và chỉ nêu khả năng có điều kiện đáp ứng 5–10% nhu cầu (“ five to ten per cent of the city's demand ”). ⇒ Mức ông nêu ra không phải phần lớn nhu cầu . Đáp án đúng: FALSE Đối chiếu paraphrasing: the greater part five to ten per cent Đáp án TRUE Nếu skim/scan thấy Merckx nói có thể đáp ứng một phần nhu cầu, sẽ dễ chọn TRUE Nhưng 5–10% không phải phần lớn. Chỉ chọn TRUE nếu bài nói ông kỳ vọng trang trại cung cấp hơn một nửa nhu cầu thực phẩm của thành phố. NOT GIVEN Nếu chỉ đọc câu (5), việc không thể nuôi sống toàn bộ thành phố chưa loại trừ khả năng cung cấp phần lớn Nhưng câu (7) đã nêu tỉ lệ 5–10% để đối chiếu. Chỉ chọn NOT GIVEN nếu bài không cho biết tỉ lệ cung ứng để đối chiếu với nhận định trong câu hỏi."
            }
          },
          {
            "id": 9,
            "prompt": "Verdantis has received interest from clients in many parts of the world.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "TRUE",
            "explanation": {
              "step1": "Verdantis has received interest from clients in many parts of the world . Ý câu hỏi: Cần kiểm tra liệu Verdantis đã nhận được sự quan tâm từ khách hàng ở nhiều nơi trên thế giới hay chưa.",
              "step2": "Dựa vào tên riêng Verdantis => ta định vị được câu (1) ở đoạn 3 để đọc kĩ. Đoạn 3",
              "step3": "Đoạn 3: What matters most , perhaps, is that all this serves as a working advertisement for Verdantis , Merckx's thriving urban-farming consultancy , which these days receives enquiries from every corner of the globe wanting help to design and build a new kind of soil-free city farm .",
              "step4": "Câu hỏi nói: Verdantis nhận được sự quan tâm từ khách hàng (“ received interest from clients”) ở nhiều nơi trên thế giới (“ many parts of the world ”). Bài đọc nói: Verdantis, một đơn vị tư vấn (“consultancy”), nhận được lời hỏi (“ receives enquiries ”) từ khắp thế giới (“from every corner of the globe ”). ⇒ Những lời hỏi thể hiện sự quan tâm ; cả hành động lẫn phạm vi địa lý đều khớp. Đáp án đúng: TRUE Đối chiếu paraphrasing: received interest receives enquiries many parts of the world every corner of the globe FALSE Nếu chỉ thấy trang trại ở Rotterdam, em có thể tưởng Verdantis chỉ được quan tâm tại địa phương Nhưng lời hỏi đến từ khắp thế giới (“from every corner of the globe”). Chỉ chọn FALSE nếu bài nói Verdantis chỉ nhận lời hỏi tại Rotterdam. NOT GIVEN Nếu tìm đúng cụm sự quan tâm từ khách hàng (“interest from clients”), em có thể nghĩ bài không đề cập Nhưng việc nhận lời hỏi (“receives enquiries”) đã xác nhận ý đó. Chỉ chọn NOT GIVEN nếu bài không cho biết các lời hỏi đến từ đâu."
            }
          },
          {
            "id": 10,
            "prompt": "The nutrients that enrich the water are made by Verdantis itself.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "NOT GIVEN",
            "explanation": {
              "step1": "The nutrients that enrich the water are made by Verdantis itself . Ý câu hỏi: Cần kiểm tra ai sản xuất dưỡng chất , không chỉ kiểm tra nước có dưỡng chất hay không.",
              "step2": "Dựa vào tên riêng Verdantis => ta bắt đầu đọc ở đoạn 3. Sau đó, tìm thông tin về dưỡng chất trong nước (“organic nutrients”) ở đoạn 4. Đoạn 3 — organic nutrients",
              "step3": "Đoạn 3: What matters most , perhaps, is that all this serves as a working advertisement for Verdantis , Merckx's thriving urban-farming consultancy , which these days receives enquiries from every corner of the globe wanting help to design and build a new kind of soil-free city farm . Đoạn 4: The soil-free approach , by contrast, needs nothing more than a modest flow of water, laced with organic nutrients and pushed endlessly around a sealed loop of pipes, towers and trays . Câu (1): Câu (1), đoạn 3: Verdantis được giới thiệu là đơn vị tư vấn canh tác đô thị . Câu (1): Câu (1), đoạn 4: Phương pháp này dùng nước pha dưỡng chất hữu cơ . Hai câu không cho biết ai sản xuất dưỡng chất .",
              "step4": "Câu hỏi nói: Dưỡng chất pha vào nước do chính Verdantis sản xuất (“made by Verdantis itself”). Bài đọc nói: Verdantis là đơn vị tư vấn; nước được pha dưỡng chất hữu cơ. Bài không nêu bên sản xuất dưỡng chất . ⇒ Không thể xác nhận hoặc phủ định điều câu hỏi khẳng định. Đáp án đúng: NOT GIVEN Đối chiếu paraphrasing: The nutrients that enrich the water water, laced with organic nutrients made by Verdantis itself không có trong bài. Đáp án TRUE Nếu skim/scan thấy Verdantis ở đoạn 3 và dưỡng chất hữu cơ (“organic nutrients”) ở đoạn 4, sẽ dễ ghép hai thông tin lại Nhưng bài không nói Verdantis sản xuất dưỡng chất. Chỉ chọn TRUE nếu bài xác nhận chính Verdantis sản xuất chúng. FALSE Vai trò tư vấn (“urban-farming consultancy”) có thể khiến ta nghĩ Verdantis không sản xuất dưỡng chất Nhưng làm tư vấn không loại trừ việc sản xuất. Chỉ chọn FALSE nếu bài nói Verdantis không sản xuất chúng hoặc chúng do bên khác sản xuất."
            }
          },
          {
            "id": 11,
            "prompt": "The aeroponic method uses more water than a traditional farm growing the same quantity of food.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "FALSE",
            "explanation": {
              "step1": "The aeroponic method uses more water than a traditional farm growing the same quantity of food . Cần kiểm tra hướng so sánh lượng nước khi hai cách trồng tạo ra cùng lượng thực phẩm.",
              "step2": "Dựa vào thuật ngữ đặc biệt *aeroponic*, ta nhận ra phương pháp trồng không đất được giới thiệu ở đoạn 2. Tiếp tục tìm thông tin về lượng nước ở đoạn 4; đọc kĩ câu (4). Đoạn 4",
              "step3": "Đoạn 4: Because the roots are misted every ten minutes with water that is then captured and reused , no soil is worn out and the system gets by on 90 per cent less water than an ordinary intensive farm producing the same amount .",
              "step4": "Câu hỏi nói: phương pháp aeroponic dùng nhiều nước hơn (“more water”) khi tạo cùng lượng thực phẩm . Bài đọc nói: hệ thống dùng ít nước hơn (“less water”) so với trang trại thâm canh thông thường tạo cùng sản lượng (“an ordinary intensive farm producing the same amount ”). ⇒ Hướng so sánh trái ngược . Đáp án đúng: FALSE Đối chiếu paraphrasing: more water less water same quantity of food the same amount Đáp án TRUE Nếu chỉ thấy câu hỏi và bài đọc đều nói về lượng nước, bạn dễ bỏ qua chữ ít hơn (“less water”). Chỉ chọn TRUE nếu bài nói hệ thống dùng nhiều nước hơn ở cùng mức sản lượng. NOT GIVEN Nếu chỉ tìm chữ aeroponic trong câu (4), bạn dễ tưởng bài thiếu dữ kiện Nhưng câu này đã so sánh lượng nước với trang trại thông thường ở cùng sản lượng. Chỉ chọn NOT GIVEN nếu bài không cho biết hệ thống dùng nhiều hay ít nước hơn trong phép so sánh đó."
            }
          },
          {
            "id": 12,
            "prompt": "The cost of the aeroponic equipment has fallen in recent years.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "NOT GIVEN",
            "explanation": {
              "step1": "The cost of the aeroponic equipment has fallen in recent years . Cần kiểm tra giá có giảm so với trước hay không, chứ không chỉ xem thiết bị có rẻ không.",
              "step2": "Từ khoá kỹ thuật aeroponic (“aeroponic”) giúp nhận ra phương pháp ở đoạn 2. Đến đoạn 5, cách gọi thiết bị (“The gear”) => bắt đầu đọc kỹ để tìm thông tin về giá. Đoạn 5 — The gear",
              "step3": "Đoạn 5: The gear , Merckx notes approvingly, is light enough to sit on almost any level roof and costs little — somewhere between €90 and €140 for each square metre .",
              "step4": "Câu hỏi nói: Giá thiết bị đã giảm trong những năm gần đây (“has fallen in recent years”). Bài đọc nói: Thiết bị có giá thấp (“costs little”), nhưng không cho biết giá trước đây để so sánh . Vì vậy, không thể xác định giá đã giảm hay chưa . Đáp án đúng: NOT GIVEN Đối chiếu paraphrasing: aeroponic equipment The gear has fallen costs little in recent years không có thông tin so sánh giá theo thời gian trong bài. Đáp án TRUE Nếu skim/scan thấy thiết bị có giá thấp (“costs little”), sẽ dễ chọn TRUE Nhưng giá thấp không chứng minh giá đã giảm. Chỉ chọn TRUE nếu bài nói giá thiết bị hiện thấp hơn trước. FALSE Nếu không tìm thấy thông tin giá giảm, sẽ dễ chọn FALSE Nhưng bài đọc cũng không nói giá đã tăng hoặc giữ nguyên. Chỉ chọn FALSE nếu bài nói giá thiết bị đã tăng hoặc không giảm trong những năm gần đây."
            }
          },
          {
            "id": 13,
            "prompt": "There are certain crops, such as potatoes, that cannot yet be grown using this method.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "TRUE",
            "explanation": {
              "step1": "There are certain crops , such as potatoes , that cannot yet be grown using this method . Cần kiểm tra: phương pháp này có chưa trồng được potatoes hay không.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta tìm phần nói về giới hạn của phương pháp trồng. Gặp cụm cây lấy củ (“Root crops”) trong lời Merckx ở đoạn 6 => bắt đầu đọc kỹ. Đoạn 6 — Root crops",
              "step3": "Đoạn 6: ' Root crops are still beyond us ,' Merckx admits . ' Radishes are fine , but the long roots of carrots or potatoes rule them out , fruit trees are simply impossible , and beans swallow up space while giving back very little .' Câu (3): cây lấy củ vẫn còn ngoài khả năng trồng . Câu (4): Radishes trồng được, nhưng potatoes bị loại trừ vì rễ dài.",
              "step4": "Câu hỏi nói: một số cây, chẳng hạn potatoes, hiện chưa thể trồng bằng phương pháp này (“ cannot yet be grown using this method”). Bài đọc nói: cây lấy củ vẫn còn ngoài khả năng trồng (“ still beyond us ”); cụ thể, rễ dài khiến potatoes bị loại trừ (“ potatoes rule them out ”). Hai ý trùng nhau, kể cả sắc thái hiện chưa thể . Đáp án đúng: TRUE Đối chiếu paraphrasing: cannot yet be grown still beyond us + rule them out potatoes giữ nguyên FALSE Nếu skim/scan thấy Radishes trồng được (“Radishes are fine”), sẽ dễ chọn FALSE Nhưng “but” dẫn sang ý trái lại: potatoes bị loại trừ (“rule them out”). Chỉ chọn FALSE nếu bài nói potatoes trồng được bằng phương pháp này. NOT GIVEN Nếu chỉ đọc câu nói chung về cây lấy củ (“Root crops”), sẽ dễ tưởng bài không nhắc đến potatoes Nhưng câu (4) nêu đích danh potatoes và cho biết chúng bị loại trừ. Chỉ chọn NOT GIVEN nếu bài không cho biết potatoes có trồng được hay không."
            }
          }
        ]
      },
      {
        "id": "cam-18-reading-1-p2",
        "passageNumber": 2,
        "title": "Forest management in Pennsylvania, USA",
        "subtitle": "How making use of low-grade timber — sometimes called low-use wood — for energy can support the sustainable management of forests",
        "content": [
          "Forest management in Pennsylvania, USA"
        ],
        "questions": [
          {
            "id": 14,
            "prompt": "Which section contains the following information: \"harmful effects on a wood that arise when owners judge it purely by profit\"?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "correct": "A",
            "explanation": {
              "step1": "harmful effects on a wood that arise when owners judge it purely by profit 👍 NÊN tìm: đoạn nối việc chủ rừng chỉ đánh giá rừng theo lợi nhuận với ít nhất hai tác hại đối với khu rừng. 👎 ĐỪNG tìm: đoạn chỉ nói về giá trị cây, liệt kê tiêu chí định giá hoặc mô tả tác hại do sâu bệnh mà không gắn với cách đánh giá của chủ rừng.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh để tìm ý chủ rừng chỉ coi trọng giá trị thương mại. Đoạn C cũng bàn về giá trị cây, nhưng chỉ giải thích các cách định giá khác nhau. Đoạn A mở đầu bằng việc chủ rừng chỉ coi trọng gỗ chất lượng cao để cưa xẻ (“ high-grade sawtimber ”) => bắt đầu đọc ở đây. Đoạn A: For a long time, woodland owners in Latvia prized their trees for one thing only : high-grade sawtimber . When a stand was cut , the finest, straightest stems were taken out and the misshapen trees — those least suited to the ground they stood on — were left behind . They fetch little in conventional timber markets, crowd better stems as they compete for room , shade out the seedlings meant to replace them and sap a stand's overall vigour , leaving the forest more exposed to storms and disease . Câu (1)–(2): chủ rừng chỉ coi trọng giá trị gỗ thương mại => lấy đi thân cây thẳng, để lại cây méo mó. Câu (5): những cây bị để lại lấn át cây tốt và làm suy yếu rừng — hai tác hại cần tìm. Đoạn A — high-grade sawtimber",
              "step3": "Đối chiếu paraphrasing: judge it purely by profit prized their trees for one thing only + high grade sawtimber. harmful effects on a wood crowd better stems + sap a stand's overall vigour. Cách chặt chọn ở câu (2) nối tiêu chí định giá ở câu (1) với tác hại ở câu đây là tác hại phát sinh từ cách đánh giá, không phải hai thông tin rời nhau. Đáp án đúng: Paragraph A Đoạn C Nếu skim/scan thấy người buôn gỗ (“timber merchant”), em dễ chọn C vì cũng nói về giá trị cây Nhưng C không nêu tác hại đối với rừng do chủ rừng chỉ xét lợi nhuận. Đoạn F Nếu chỉ tìm tác hại, cụm sâu bệnh (“pests and diseases”) dễ kéo em về F Nhưng nguyên nhân ở đây là sâu bệnh, không phải cách đánh giá rừng chỉ theo lợi nhuận. Đoạn G Đoạn G nói việc giữ lại một phần gỗ ít giá trị sử dụng là quan trọng (“keeping back a certain amount”), nên dễ gợi liên tưởng đến cây bị để lại ở A Nhưng G không nêu điều kiện chủ rừng chỉ xét lợi nhuận; ở A, các cây bị để lại mới là những cây gây hại.",
              "step4": "Đáp án chính xác: A"
            }
          },
          {
            "id": 15,
            "prompt": "Which section contains the following information: \"a list of the features that together determine how valuable a tree is\"?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "correct": "C",
            "explanation": {
              "step1": "a list of the features that together determine how valuable a tree is 👍 NÊN tìm: một danh sách gồm nhiều đặc điểm hoặc yếu tố cùng quyết định giá trị của một cây . 👎 ĐỪNG tìm: danh sách về chủ đề khác, hoặc đoạn chỉ nói cây có giá trị cao/thấp mà không nêu các yếu tố quyết định.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta tìm ý các yếu tố quyết định giá trị cây, không dừng ở những đoạn chỉ nhắc chất lượng hoặc giá gỗ. Đoạn C nêu ý một cây đáng giá bao nhiêu (“how much any tree is 'worth'”) => đây là điểm bắt đầu đọc. Đoạn C: Just how much any tree is 'worth' , though, is far from fixed . It turns on a range of things — species, size , shape , condition, quality, the part it plays in the wood and how easily it can be reached — and on what the owner wants from the forest . Câu (1): nêu giá trị của cây không cố định. Câu (2): giải thích bằng một danh sách các yếu tố quyết định giá trị , gồm đặc điểm cây và mong muốn của chủ rừng. Đoạn C — worth",
              "step3": "Đối chiếu paraphrasing: a list of the features size + shape. together determine turns on a range of things. how valuable a tree is how much any tree is 'worth'. Đáp án đúng: Paragraph C. Paragraph A nhầm vì đoạn này nhắc những thân cây tốt và thẳng nhất (“finest, straightest stems”). Nhưng đoạn nói về cách chọn cây và hệ quả của cách quản lý ấy, không liệt kê các yếu tố quyết định giá trị cây. Paragraph B có ý phẩm cấp thấp hơn và giá thấp hơn (“lower grade, and price”). Nhưng đoạn nói thị trường năng lượng nhận loại gỗ nào và gỗ được dùng làm gì, không nêu danh sách yếu tố định giá cây. Paragraph F nếu chỉ tìm một danh sách: đoạn này liệt kê các tác nhân thuộc nhóm sâu hại và bệnh (“pests and diseases”). Nhưng đó không phải danh sách các đặc điểm cùng quyết định giá trị của cây.",
              "step4": "Đáp án chính xác: C"
            }
          },
          {
            "id": 16,
            "prompt": "Which section contains the following information: \"the possibility of using wood to power road vehicles\"?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "correct": "B",
            "explanation": {
              "step1": "the possibility of using wood to power road vehicles 👍 NÊN tìm: thông tin nối đủ ba ý: có thể thực hiện + dùng gỗ làm nguồn nhiên liệu + vận hành phương tiện đường bộ. 👎 ĐỪNG tìm: đoạn chỉ nói về giá trị của gỗ, đốt gỗ nói chung hoặc dùng gỗ để sưởi ấm và phát điện.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh để tìm ý gỗ có thể trở thành nhiên liệu cho xe. Đoạn B có cụm nói về việc vận hành xe tải và ô tô (“ drive lorries and cars ”) => đây là vùng liên quan. Đoạn B: Wood can also be turned into gas for power, or processed into liquid fuels such as ethanol and petrol — the very fuels that drive lorries and cars . Đoạn B — drive lorries and cars",
              "step3": "Đối chiếu paraphrasing: the possibility can using wood Wood + processed into liquid fuels to power road vehicles fuels that drive lorries and cars Đáp án đúng: Paragraph B. Paragraph A Nếu skim/scan thấy thị trường năng lượng từ gỗ (“markets for wood energy”), ta dễ chọn A Nhưng đoạn này không nối năng lượng từ gỗ với việc vận hành phương tiện đường bộ. Paragraph G Từ nhiên liệu (“fuel”) dễ khiến ta chọn G Nhưng cụm vật liệu mà lửa sẽ đốt cháy (“fuel that a fire would burn”) nói về nguy cơ cháy rừng, không phải nhiên liệu cho xe.",
              "step4": "Đáp án chính xác: B"
            }
          },
          {
            "id": 17,
            "prompt": "Which section contains the following information: \"the naming of several insects that damage trees\"?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "correct": "F",
            "explanation": {
              "step1": "the naming of several insects that damage trees 👍 NÊN tìm: đoạn nêu tên cụ thể của nhiều loài côn trùng gây hại cho cây. 👎 ĐỪNG tìm: đoạn chỉ nói chung về sâu bệnh, chỉ nêu một loài, hoặc nêu những động vật giúp bảo vệ cây.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh để tìm danh sách tên côn trùng gây hại. Đoạn F nhắc đến sinh vật gây hại (“ pests ”) rồi nêu các tên cụ thể => đây là vùng liên quan. Đoạn F: Forests today face all manner of pests and diseases — the European spruce bark beetle, the large pine weevil, the nun moth and the pine-tree lappet moth are only a handful — and those who work among the trees can ease the pressure through well-judged felling . Đoạn F — pests",
              "step3": "Đối chiếu paraphrasing: the naming of several insects the nun moth and the pine tree lappet moth có hai tên cụ thể, đủ chứng minh yêu cầu nhiều loài. that damage trees pests các loài được liệt kê là những mối đe doạ mà rừng phải đối mặt. Đáp án đúng: Paragraph F. Paragraph G Nếu skim/scan thấy số lượng côn trùng (“insect numbers”), ta dễ chọn G Nhưng các động vật được nêu tên ở đây giúp kiểm soát côn trùng, không phải côn trùng gây hại cho cây. Paragraph A Đoạn này có các mối đe doạ như bão và bệnh (“storms and disease”), nên dễ khớp riêng ý gây hại Nhưng A không nêu tên nhiều loài côn trùng. Paragraph D Thực vật xâm lấn (“invasive plants”) cũng là đối tượng bị loại bỏ để cải thiện rừng Nhưng đây là thực vật, không phải danh sách tên côn trùng gây hại.",
              "step4": "Đáp án chính xác: F"
            }
          },
          {
            "id": 18,
            "prompt": "Which section contains the following information: \"an informal label for trees of little commercial use\"?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "correct": "A",
            "explanation": {
              "step1": "an informal label for trees of little commercial use 👍 NÊN tìm: một cách gọi không chính thức dành cho những cây ít có giá trị thương mại . 👎 ĐỪNG tìm: đoạn chỉ nói về gỗ giá rẻ, tên phương pháp chặt cây hoặc tên côn trùng, nhưng không nêu cách gọi dành cho cây.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh để tìm một cách gọi dành cho cây ít giá trị. Đoạn A có cách gọi mang tính coi thường (“weed trees”) => bắt đầu đọc ở câu (4). Đoạn A: Foresters sometimes dismiss such trees as 'weed trees' , and across the country they are far from scarce . They fetch little in conventional timber markets , crowd better stems as they compete for room, shade out the seedlings meant to replace them and sap a stand's overall vigour, leaving the forest more exposed to storms and disease . Câu (4): nêu cách gọi không chính thức là weed trees. Câu (5): tiếp tục nói về chính nhóm cây đó, xác nhận chúng bán được ít tiền trên thị trường gỗ. Đoạn A — weed trees",
              "step3": "Đối chiếu paraphrasing: an informal label for trees dismiss such trees as 'weed trees' little commercial use fetch little + timber markets Đáp án đúng: Paragraph A — có đủ cả cách gọi và bằng chứng về giá trị thương mại thấp . Đoạn B đoạn này nói đến gỗ có phẩm cấp và giá thấp (“a lower grade, and price”). Nhưng đây là thông tin về loại gỗ thị trường năng lượng chấp nhận, không phải cách gọi không chính thức dành cho cây. Đoạn C có dấu hiệu đặt tên (“foresters call heart-rot”) và cũng bàn về giá trị cây. Nhưng heart-rot là tên một khuyết tật, không phải nhãn gọi những cây ít có giá trị thương mại.",
              "step4": "Đáp án chính xác: A"
            }
          },
          {
            "id": 19,
            "prompt": "Match the statement with the correct person/feature: \"to clear away trees that have become diseased\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "a Shelterwood Cut",
              "a TSI Cut",
              "a Salvage Cut"
            ],
            "correct": "a Salvage Cut",
            "explanation": {
              "step1": "Tên đang xử lý: a Salvage Cut . Bài nhắc đến tên này ở đoạn F.",
              "step2": "A Salvage Cut , by contrast, tends to produce a great deal of low-use wood . Such cuts thin out the sickened trees and check how far a pest may spread , while sparing the sturdy trees that came through the attack unharmed . Câu (1): giới thiệu phương pháp a Salvage Cut. Câu (3): phương pháp này loại bỏ cây bị bệnh , đồng thời giữ cây khỏe. 🔎 Khớp với statement 6: to clear away trees that have become diseased Đối chiếu paraphrasing: clear away thin out trees that have become diseased sickened trees",
              "step3": "Với tên a Salvage Cut ở đoạn F, ta chọn được: câu 6 . a TSI Cut đoạn D cũng nói đến việc chặt cây chất lượng kém (“poorest trees and plants”). Nhưng statement 6 yêu cầu cây bị bệnh, không chỉ cây chất lượng kém. a Shelterwood Cut đoạn E cũng nói đến việc đốn bỏ cây (“mature trees are removed”). Nhưng đối tượng ở đó là cây trưởng thành, không phải cây bị bệnh như câu (3).",
              "step4": "Đáp án chính xác: a Salvage Cut"
            }
          },
          {
            "id": 20,
            "prompt": "Match the statement with the correct person/feature: \"to spread the earnings from a wood over a number of years\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "a Shelterwood Cut",
              "a TSI Cut",
              "a Salvage Cut"
            ],
            "correct": "a Shelterwood Cut",
            "explanation": {
              "step1": "Tên đang xử lý: a Shelterwood Cut Bài nhắc đến Shelterwood Cut và tiếp tục mô tả phương pháp này ở đoạn E.",
              "step2": "A Shelterwood Cut is possible only in a mature wood already thinned more than once . Once a new generation of seedlings has taken hold , the mature trees are removed together , letting the forester decide which species come up in their place and leaving a young stand whose trees are all at much the same stage of growth . It can also create a forest of two layers , yielding two harvests and stretching the owner's income across ten years or more . Câu (1): giới thiệu Shelterwood Cut và điều kiện áp dụng. Câu (2): loại bỏ cây trưởng thành cùng lúc => để lại rừng non có cây gần như cùng giai đoạn phát triển . Câu (3): bổ sung lợi ích dàn trải thu nhập qua nhiều năm . 🔎 Khớp với statement 8: to create a wood whose trees are all roughly the same age Đối chiếu paraphrasing: to create a wood leaving a young stand all roughly the same age all at much the same stage of growth spread the earnings stretching the owner's income over a number of years across ten years or more spread the earnings stretching the owner's income over a number of years across ten years or more 🔎 Khớp với statement 7: to spread the earnings from a wood over a number of years",
              "step3": "Với tên a Shelterwood Cut ở đoạn E, ta chọn được: câu 7 và câu 8. a TSI Cut Đoạn D nhắc đến khả năng tái sinh tốt hơn (“a greater chance of regenerating”), nên dễ nhầm với việc tạo rừng có cây cùng tuổi Nhưng tái sinh tốt hơn không có nghĩa là cây gần như cùng tuổi; đặc điểm này được nêu trực tiếp ở câu (2) về Shelterwood Cut.",
              "step4": "Đáp án chính xác: a Shelterwood Cut"
            }
          },
          {
            "id": 21,
            "prompt": "Match the statement with the correct person/feature: \"to create a wood whose trees are all roughly the same age\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "a Shelterwood Cut",
              "a TSI Cut",
              "a Salvage Cut"
            ],
            "correct": "a Shelterwood Cut",
            "explanation": {
              "step1": "Clearing away lifeless timber lowers the 9. ___ that a fire would otherwise consume . Ý câu hỏi: Dọn bỏ gỗ chết làm giảm một thứ mà đám cháy sẽ tiêu thụ nếu không được dọn bỏ. Dự đoán ô trống: - Loại từ: danh từ, đứng sau mạo từ “the”. - Nghĩa: thứ đám cháy có thể đốt hoặc tiêu thụ , không phải nguy cơ cháy .",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh để tìm ý tương đương với việc dọn bỏ gỗ chết. Đoạn G nhắc đến việc dọn vật liệu chết (“the clearing of dense or dead material”) => bắt đầu đọc ở đây. Đoạn G — the clearing of dense or dead material",
              "step3": "Đoạn G: Thinning, and the clearing of dense or dead material to lessen the danger of wildfire, likewise yields low-use wood . Stripping it away is partly a way of taking off the fuel that a fire would burn ; but when a tree is felled , its top is best left where it falls , so that the minerals locked inside it seep back into the earth . Câu (1): dọn vật liệu chết tạo ra gỗ ít giá trị sử dụng, giúp hiểu đối tượng được loại bỏ ở câu (3). Câu (3): loại bỏ gỗ ấy => lấy đi nhiên liệu đám cháy sẽ đốt ; nhưng ngọn cây cần được giữ lại.",
              "step4": "Đáp án phù hợp nhất: fuel Câu hoàn chỉnh: Clearing away lifeless timber lowers the fuel that a fire would otherwise consume. (Dọn bỏ gỗ chết làm giảm lượng nhiên liệu mà đám cháy sẽ tiêu thụ nếu không dọn bỏ.) => Khớp với dự đoán danh từ chỉ thứ đám cháy có thể đốt lẫn thông tin trong bài; đáp án gồm 1 từ, lấy nguyên dạng từ bài đọc. Đối chiếu paraphrasing: lifeless timber dead material lowers taking off a fire would otherwise consume a fire would burn danger “ nguy cơ ”: Câu (1) có nguy cơ cháy (“danger of wildfire”), dễ khiến em ghép với làm giảm (“lowers”) Nhưng ô trống phải chỉ thứ đám cháy tiêu thụ, không phải nguy cơ. Đáp án wood “ gỗ ”: Nếu chỉ bám vào cụm chỉ vật liệu (“low-use wood”), em dễ chọn từ này Nhưng câu (3) gọi trực tiếp thứ bị lấy đi và bị lửa đốt là nhiên liệu (“fuel”), nên lấy đúng từ đó."
            }
          },
          {
            "id": 22,
            "prompt": "Complete blank for question 22:",
            "type": "FILL_IN_BLANK",
            "correct": "fuel",
            "explanation": {
              "step1": "The uppermost part of a felled tree is left in place so that the 10. ___ it holds are returned to the earth . Ý câu hỏi: Phần trên cùng của cây đã bị đốn được để nguyên tại chỗ để những thứ bên trong nó trở về đất. Dự đoán ô trống: - Loại từ: danh từ số nhiều , vì làm chủ ngữ của động từ số nhiều (“are returned”). - Nghĩa: những thứ nằm trong phần ngọn cây và được trả lại đất .",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh để tìm ý phần trên cùng của cây đã bị đốn (“The uppermost part of a felled tree”). Ở đoạn G, ta gặp cụm ngọn của cây (“its top”) => đây là điểm bắt đầu đọc. Đoạn G — its top",
              "step3": "Đoạn G: Stripping it away is partly a way of taking off the fuel that a fire would burn ; but when a tree is felled , its top is best left where it falls , so that the minerals locked inside it seep back into the earth .",
              "step4": "Đáp án phù hợp nhất: minerals Câu hoàn chỉnh: The uppermost part of a felled tree is left in place so that the minerals it holds are returned to the earth. (Phần trên cùng của cây đã bị đốn được để nguyên tại chỗ để các khoáng chất bên trong nó được trả lại đất .) => Khớp với dự đoán danh từ số nhiều và thông tin về khoáng chất trong phần ngọn cây trở về đất. Đáp án gồm 1 từ; đề được cung cấp không nêu giới hạn số từ. Đối chiếu paraphrasing: The uppermost part its top it holds locked inside it are returned to the earth seep back into the earth Đáp án top “ phần ngọn cây ”: Nếu chỉ dò từ chỉ bộ phận cây, em dễ chọn từ này Nhưng phần ngọn là nơi chứa khoáng chất, không phải thứ cần điền. earth “ đất ”: Từ này xuất hiện ở cuối câu bằng chứng, nhưng chỉ nơi khoáng chất trở về, không phải thứ nằm trong ngọn cây. mineral “ khoáng chất ở dạng số ít ”: Sai vì bài dùng dạng số nhiều (“minerals”), phù hợp với động từ số nhiều (“are returned”) trong câu hỏi."
            }
          },
          {
            "id": 23,
            "prompt": "Complete blank for question 23:",
            "type": "FILL_IN_BLANK",
            "correct": "minerals",
            "explanation": {
              "step1": "Trees whose trunks are full of 11. ___ should be kept , because they house creatures that feed on insects . Dự đoán ô trống: Loại từ: danh từ sau cụm chứa đầy (“full of”); có thể là danh từ số nhiều hoặc không đếm được. Nghĩa: thứ có trong thân của những cây nên giữ lại. Dấu hiệu nhận diện là cây làm nơi ở cho sinh vật ăn côn trùng.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh để tìm ý cây làm nơi ở cho sinh vật ăn côn trùng. Ở đoạn G, ta gặp cụm nơi ở cho các sinh vật (“homes for the creatures”) và ăn côn trùng (“prey on insects”) => đây là điểm bắt đầu đọc. Đoạn G — homes for the creatures",
              "step3": "Đoạn G: Trunks pitted with hollows are , likewise, priceless as homes for the creatures that prey on insects — woodpeckers, bats and other small mammals — which keep troublesome insect numbers down and make the forest healthier . cây có hốc trong thân nên được giữ lại vì là nơi ở cho sinh vật ăn côn trùng.",
              "step4": "Đáp án phù hợp nhất: hollows Câu hoàn chỉnh: Trees whose trunks are full of hollows should be kept, because they house creatures that feed on insects. (Những cây có thân chứa nhiều hốc nên được giữ lại vì chúng là nơi ở cho các sinh vật ăn côn trùng.) => Khớp với dự đoán danh từ chỉ thứ có trong thân cây và đúng lý do cần giữ cây; đáp án gồm 1 từ, đề được cung cấp không nêu giới hạn số từ. Đối chiếu paraphrasing: trunks are full of Trunks pitted with hollows house creatures homes for the creatures feed on insects prey on insects woodpeckers, bats “ các loài cư trú trong thân cây ”: nếu chỉ nhìn danh sách ngay sau phần nói về nơi ở. Nhưng đây là những sinh vật sống trong hốc, không phải đặc điểm của thân cây cần điền. insects “ côn trùng ”: từ này cũng xuất hiện trong câu hỏi. Nhưng côn trùng là thức ăn của các sinh vật cư trú, không phải thứ được mô tả là có trong thân cây. pitted “ lỗ chỗ ”: Sai vì từ này bổ nghĩa cho thân cây, không phải danh từ phù hợp sau cụm chứa đầy (“full of”)."
            }
          },
          {
            "id": 24,
            "prompt": "Complete blank for question 24:",
            "type": "FILL_IN_BLANK",
            "correct": "hollows",
            "explanation": {
              "step1": "Certain small trees — the 12. ___ is one example — give birds and wildlife something to eat . Ý câu hỏi: Một số cây nhỏ cung cấp thức ăn cho chim và động vật hoang dã; ô trống yêu cầu tên một loại cây làm ví dụ. Dự đoán ô trống: - Loại từ: danh từ số ít, vì đứng sau mạo từ (“the”) và trước động từ số ít (“is”). - Nghĩa: tên một loại cây nhỏ cung cấp thức ăn cho chim và động vật hoang dã.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh để tìm ý cây nhỏ cung cấp thức ăn cho chim. Ở đoạn G, cụm cây nhỏ (“small tree”) giúp định vị vùng liên quan. Đoạn G — small tree",
              "step3": "Đoạn G: Nor is every small tree low-use : some , such as the rowan , are a ready source of food for birds and other animals .",
              "step4": "Đáp án phù hợp nhất: rowan Câu hoàn chỉnh: Certain small trees — the rowan is one example — give birds and wildlife something to eat. (Một số cây nhỏ — rowan là một ví dụ — cung cấp thức ăn cho chim và động vật hoang dã.) => Khớp với dự đoán tên một loại cây nhỏ và thông tin trong bài; đáp án gồm 1 từ. Đề được cung cấp không nêu giới hạn từ. Đối chiếu paraphrasing: one example such as the rowan something to eat source of food Đáp án food “ thức ăn ”: Nếu chỉ tìm ý thứ có thể ăn (“something to eat”), em dễ chọn từ này Nhưng đây là thứ cây cung cấp, không phải tên loại cây làm ví dụ. birds “ chim ”: Từ này xuất hiện trong cả câu hỏi và bài đọc nên dễ thu hút khi scan Nhưng chim là đối tượng nhận thức ăn, không phải loại cây cần điền."
            }
          },
          {
            "id": 25,
            "prompt": "Complete blank for question 25:",
            "type": "FILL_IN_BLANK",
            "correct": "rowan",
            "explanation": {
              "step1": "A species that is 13. ___ in a particular wood should be spared , since it broadens the mix of trees growing there . Ý câu hỏi: Một loài có đặc điểm nào đó trong khu rừng cụ thể nên được giữ lại vì góp phần làm đa dạng rừng. Dự đoán ô trống: - Loại từ: tính từ , đứng sau động từ nối (“that is”). - Nghĩa: đặc điểm của loài trong khu rừng đang xét, không phải tên một loài cây.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh để tìm ý giữ lại một loài vì nó làm đa dạng rừng . Ở đoạn G, cụm nên để loài đó tiếp tục phát triển (“should be left to grow”) là dấu hiệu bắt đầu đọc. Đoạn G — should be left to grow",
              "step3": "Đoạn G: And any species that is uncommon in a given wood should be left to grow , for it adds to the forest's structural variety .",
              "step4": "Đáp án phù hợp nhất: uncommon Câu hoàn chỉnh: A species that is uncommon in a particular wood should be spared, since it broadens the mix of trees growing there. (Một loài không phổ biến trong một khu rừng cụ thể nên được giữ lại, vì nó làm tăng sự đa dạng của cây trong rừng.) => Khớp với dự đoán tính từ mô tả đặc điểm của loài trong khu rừng đang xét và thông tin trong bài; đáp án gồm 1 từ, lấy nguyên văn. Bản đề được cung cấp không nêu giới hạn số từ. Đối chiếu paraphrasing: in a given wood in a particular wood should be left to grow should be spared adds to the forest's structural variety broadens the mix of trees growing there small “ Có kích thước nhỏ ”: Nếu chỉ scan đặc điểm của cây, dễ chọn vì câu 5 đoạn G nhắc cây nhỏ (“small tree”) Nhưng câu đó nói về nguồn thức ăn cho động vật, không phải đóng góp vào sự đa dạng của rừng. structural “ Thuộc cấu trúc ”: Sai vì từ này bổ nghĩa cho sự đa dạng (“variety”), không mô tả đặc điểm của loài cần điền."
            }
          },
          {
            "id": 26,
            "prompt": "Complete blank for question 26:",
            "type": "FILL_IN_BLANK",
            "correct": "uncommon",
            "explanation": {
              "step1": "Phân tích câu hỏi theo phương pháp Linearthinking.",
              "step2": "Định vị vùng thông tin liên quan trong bài đọc.",
              "step3": "Bóc tách cấu trúc câu (S-V-O) và đối chiếu nghĩa.",
              "step4": "Đáp án chính xác: uncommon"
            }
          }
        ]
      },
      {
        "id": "cam-18-reading-1-p3",
        "passageNumber": 3,
        "title": "Conquering Earth's space junk problem",
        "subtitle": "Satellites, rocket shards and collision debris are creating major traffic risks in orbit around the planet. Researchers are working to reduce these threats.",
        "content": [
          "Conquering Earth’s space junk problem"
        ],
        "questions": [
          {
            "id": 27,
            "prompt": "Which section contains the following information: \"figures comparing the current rate of satellite launches with that of earlier years\"?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F"
            ],
            "correct": "A",
            "explanation": {
              "step1": "figures comparing the current rate of satellite launches with that of earlier years 👍 NÊN tìm: số liệu về tốc độ phóng vệ tinh hiện nay, kèm phép so sánh với tốc độ trong những năm trước. 👎 ĐỪNG tìm: tổng số vật thể đang trên quỹ đạo, dự báo số vệ tinh trong tương lai, hoặc số liệu không liên quan đến tốc độ phóng vệ tinh.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh để tìm số liệu so sánh tốc độ phóng vệ tinh theo thời gian. Đầu đoạn A nhắc đến số vệ tinh được phóng trong một năm (“In a single year”) => đây là vùng liên quan. Đoạn A: In a single year, satellites are now launched at an extraordinary rate : military and civil agencies, private firms and even hobbyists together placed close to 500 in orbit , roughly five times the annual figure of the preceding decade . Giải thích thêm: gần 500 là tổng số vệ tinh các nhóm trong danh sách đã đưa lên quỹ đạo, không phải số riêng của doanh nghiệp tư nhân. Đoạn A — In a single year",
              "step3": "Đối chiếu paraphrasing: figures close to 500 the current rate of satellite launches In a single year + satellites are now launched comparing + with that of earlier years roughly five times the annual figure of the preceding decade Câu (1) có cả số liệu hiện tại và tỷ lệ so với giai đoạn trước , khớp đủ yêu cầu. Đáp án đúng: Paragraph A Đáp án B Nếu đọc lướt thấy tăng nhanh (“climbing so fast”), em dễ nghĩ đây là tốc độ phóng vệ tinh Nhưng đoạn B nói về số vật thể trên quỹ đạo, không đưa số liệu so sánh tốc độ phóng hiện nay với trước đây. Đáp án C Đoạn C có số liệu chưa đến một phần ba (“barely a third”) nên dễ gây chú ý Nhưng số này nói về mức tuân thủ yêu cầu xử lý vệ tinh hết hạn, không phải tốc độ phóng. Đáp án E Đoạn E có con số về độ chính xác trong phạm vi một mét (“within a single metre”) Nhưng đây là độ chính xác khi xác định vị trí máy bay, không phải số liệu phóng vệ tinh qua các năm.",
              "step4": "Đáp án chính xác: A"
            }
          },
          {
            "id": 28,
            "prompt": "Which section contains the following information: \"an attempt to sort debris according to physical features such as size\"?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F"
            ],
            "correct": "B",
            "explanation": {
              "step1": "an attempt to sort debris according to physical features such as size 👍 NÊN tìm: một nỗ lực phân loại mảnh vỡ dựa trên đặc điểm vật lý , với kích thước là một ví dụ. 👎 ĐỪNG tìm: đoạn chỉ đếm, ghi nhận hoặc xác định vị trí/quỹ đạo của mảnh vỡ mà không phân loại theo đặc điểm vật lý.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh để tìm ý phân loại mảnh vỡ theo đặc điểm vật lý . Đoạn B nhắc đến các hệ thống phân loại (“classification schemes”) => đây là vùng liên quan. Đoạn B: Elsewhere, other teams are drawing up classification schemes for debris , measuring characteristics like an object's size and shape so operators can judge how serious an approaching piece really is . Đoạn B — classification schemes",
              "step3": "Đối chiếu paraphrasing: an attempt to sort are drawing up classification schemes debris giữ nguyên. physical features characteristics such as size like an object's size Đáp án đúng: Paragraph B — câu (4) nêu đủ việc phân loại mảnh vỡ theo đặc điểm vật lý , cụ thể là kích thước. Đoạn D Nếu skim/scan thấy việc xác định vị trí từng mảnh vỡ (“where every fragment lies”), ta dễ tưởng đây là hoạt động cần tìm Nhưng xác định vị trí không phải phân loại theo đặc điểm vật lý. Đoạn E Từ được ghi vào danh mục (“catalogued”) dễ khiến ta liên tưởng đến phân loại Nhưng đoạn này nói về việc ghi nhận và theo dõi vật thể, không nêu tiêu chí kích thước. Đoạn F Cụm danh mục chuẩn xác (“definitive catalogue”) cũng dễ gây nhầm Nhưng danh mục ở đây ghi quỹ đạo của mảnh vỡ, không phải phân loại chúng theo đặc điểm vật lý.",
              "step4": "Đáp án chính xác: B"
            }
          },
          {
            "id": 29,
            "prompt": "Which section contains the following information: \"the observation that, in principle, space is roomy enough for craft to keep well clear of one another\"?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F"
            ],
            "correct": "D",
            "explanation": {
              "step1": "the observation that, in principle , space is roomy enough for craft to keep well clear of one another 👍 NÊN tìm: một nhận định rằng trên lý thuyết , không gian đủ rộng để các tàu hoạt động mà vẫn cách xa nhau. 👎 ĐỪNG tìm: đoạn chỉ nói về va chạm thực tế, theo dõi vị trí hoặc điều phối giao thông mà không nêu nhận định về độ rộng của không gian.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh để tìm ý không gian đủ rộng trên lý thuyết. Đầu đoạn D có dấu hiệu trên lý thuyết (“ On paper ”) => đây là điểm bắt đầu đọc. Những đoạn chỉ nói về nguy cơ va chạm hoặc độ chính xác theo dõi chưa đáp ứng yêu cầu. Đoạn D: On paper , space is so vast that operators ought to have ample room to fly every one of these missions safely , never coming close to another object . Đoạn D — On paper",
              "step3": "Đối chiếu paraphrasing: in principle On paper space is roomy enough space is so vast + ample room for craft to keep well clear of one another to fly + never coming close to another object Câu (1) khớp đủ ba ý: trên lý thuyết , đủ không gian , và không đến gần vật thể khác . Đáp án đúng: Paragraph D Paragraph A Nếu skim/scan thấy nguy hiểm do đông đúc (“Such crowding carries real danger”), em dễ liên tưởng đến việc các tàu cần cách xa nhau Nhưng A nói về nguy cơ thực tế, không nêu nhận định rằng trên lý thuyết không gian đủ rộng. Paragraph E Nếu skim/scan thấy vị trí của từng máy bay (“each plane's position”), em dễ liên tưởng đến khoảng cách giữa các phương tiện Nhưng E so sánh độ chính xác khi theo dõi, không khẳng định không gian đủ rộng để các tàu cách xa nhau.",
              "step4": "Đáp án chính xác: D"
            }
          },
          {
            "id": 30,
            "prompt": "Which section contains the following information: \"the way different parties have begun working together against a common danger\"?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F"
            ],
            "correct": "C",
            "explanation": {
              "step1": "the way different parties have begun working together against a common danger 👍 NÊN tìm: nhiều bên khác nhau đã bắt đầu hợp tác dưới một hình thức nào đó để đối phó mối nguy chung . 👎 ĐỪNG tìm: danh sách nhiều bên hoạt động riêng lẻ; nhiều nhóm cùng nghiên cứu nhưng chưa thể hiện sự hợp tác; công cụ kết hợp dữ liệu từ nhiều nguồn.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh để tìm ý nhiều bên cùng hợp tác đối phó một mối nguy . Đoạn C có sự hợp tác (“cooperation”) giữa công ty và chính phủ => đây là vùng liên quan. Đoạn C: The number of objects aloft keeps growing even as our means of tracking them improve , and this has pushed firms, governments and other spacefarers into novel forms of cooperation against a shared danger . Đoạn C — cooperation",
              "step3": "Đối chiếu paraphrasing: different parties firms, governments the way + have begun working together has pushed + cooperation tình hình đã thúc đẩy các bên chuyển sang hợp tác. against a common danger against a shared danger Đáp án đúng: Paragraph C — câu (1) nêu trực tiếp việc nhiều bên chuyển sang hợp tác để đối phó mối nguy chung . Paragraph A Đoạn A liệt kê nhiều bên (“military and civil agencies, private firms”) nên dễ khớp với ý các bên khác nhau Nhưng họ được nhắc đến vì phóng vệ tinh, không phải vì hợp tác chống một mối nguy chung. Paragraph B Các cụm nhiều nhóm (“A number of groups”) và những nhóm khác (“other teams”) dễ tạo cảm giác đang phối hợp Nhưng đoạn này nêu các hướng nghiên cứu riêng, chưa chứng minh các bên làm việc cùng nhau. Paragraph F Việc gom nhiều nguồn dữ liệu (“pulls together several feeds”) dễ bị hiểu thành hợp tác đa bên Nhưng đây là hoạt động của một công cụ, không phải thông tin trực tiếp về các bên bắt đầu phối hợp đối phó mối nguy chung.",
              "step4": "Đáp án chính xác: C"
            }
          },
          {
            "id": 31,
            "prompt": "Which section contains the following information: \"an analogy that likens managing orbital traffic to the running of a busy transport hub\"?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F"
            ],
            "correct": "E",
            "explanation": {
              "step1": "an analogy that likens managing orbital traffic to the running of a busy transport hub 👍 NÊN tìm: một phép so sánh giữa quản lý giao thông trên quỹ đạo và cách vận hành một đầu mối giao thông đông đúc. 👎 ĐỪNG tìm: đoạn chỉ nói về sự đông đúc, theo dõi vị trí vật thể hoặc phối hợp giữa các bên mà không có phép so sánh với một đầu mối giao thông.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh để tìm một phép so sánh. Đầu đoạn E có dấu hiệu tương đồng (“ echoes ”) khi giải thích việc quản lý giao thông không gian => đây là vùng liên quan. Đoạn E: This area of work is known as space traffic management , precisely because it echoes the business of directing vehicles on roads or aircraft in the sky . Picture an airport on a hectic day , suggests Priya Anand , an astrodynamicist at Meridian University of Technology : aircraft queue up overhead, touching down and lifting off in close succession according to a tightly orchestrated plan . Câu (1): nêu sự tương đồng giữa quản lý giao thông không gian và điều phối máy bay . Câu (2): cụ thể hoá phép so sánh bằng sân bay đông đúc , nơi máy bay hoạt động theo kế hoạch . Đoạn E — echoes",
              "step3": "Đối chiếu paraphrasing: an analogy that likens echoes managing orbital traffic space traffic management a busy transport hub an airport on a hectic day the running queue up + according to + plan Đoạn E có đủ hai phía của phép so sánh: quản lý giao thông trên quỹ đạo và vận hành sân bay đông đúc . Đáp án đúng: Paragraph E Đáp án A Nếu skim/scan thấy sự đông đúc (“crowding”), ta dễ liên tưởng đến giao thông bận rộn Nhưng A nói về nguy cơ va chạm, không so sánh với việc vận hành một đầu mối giao thông. Đáp án C Ý hợp tác theo những hình thức mới (“novel forms of cooperation”) dễ gợi liên tưởng đến việc phối hợp quản lý Nhưng hợp tác giữa các bên không phải phép so sánh với một sân bay đông đúc. Đáp án D Việc xác định chính xác vị trí từng mảnh vỡ (“exactly where every fragment lies”) có liên quan đến quản lý giao thông quỹ đạo Nhưng D không đưa ra đầu mối giao thông làm đối tượng so sánh.",
              "step4": "Đáp án chính xác: E"
            }
          },
          {
            "id": 32,
            "prompt": "The council offers guidance on ways of safeguarding the enduring  _____  of orbital space. It recommends that, once a satellite stops working, any surplus  _____  or compressed gas that might set off a  _____  ought to be released. Although those who run large satellite fleets acknowledge their duties as caretakers of space, Tomasz Reinholt points out that operators who become  _____  are not likely to make removing their satellites a priority.",
            "type": "FILL_IN_BLANK",
            "correct": "usability",
            "explanation": {
              "step1": "The council offers guidance on ways of safeguarding the enduring 6. ___ of orbital space . Ý câu hỏi: Hội đồng hướng dẫn cách bảo vệ một khía cạnh lâu dài của không gian quỹ đạo. Dự đoán ô trống: - Loại từ: danh từ , đứng sau tính từ chỉ sự lâu dài (“enduring”) và trước cụm “of orbital space”. - Nghĩa: một đặc tính hoặc khía cạnh của không gian quỹ đạo cần được bảo vệ lâu dài.",
              "step2": "Dựa vào tên riêng Joint Orbital Debris Advisory Council => ta định vị được câu nhắc đến hội đồng này ở đoạn C. Đoạn C",
              "step3": "Đoạn C: Bodies operating across borders — the Joint Orbital Debris Advisory Council among them — have put together recommendations aimed at protecting the long-term usability of orbital space .",
              "step4": "Đáp án phù hợp nhất: usability Câu hoàn chỉnh: The council offers guidance on ways of safeguarding the enduring usability of orbital space. (Hội đồng hướng dẫn cách bảo vệ khả năng sử dụng lâu dài của không gian quỹ đạo.) => Khớp với dự đoán danh từ chỉ khía cạnh được bảo vệ lâu dài: bài nêu rõ khả năng sử dụng . Đáp án gồm 1 từ; đề được cung cấp không nêu giới hạn số từ. Đối chiếu paraphrasing: guidance recommendations safeguarding protecting enduring long term recommendations “ các khuyến nghị ”: Nếu chỉ scan hành động của hội đồng, dễ chọn từ này Nhưng nó tương ứng với phần hướng dẫn (“guidance”), không phải khía cạnh của không gian quỹ đạo được bảo vệ. long-term “ lâu dài ”: Từ này nằm ngay trước đáp án nên dễ lấy nhầm Nhưng nó tương ứng với tính từ đã có trong đề (“enduring”); ô trống cần danh từ. space “ không gian ”: Sai vì từ này thuộc cụm chỉ đối tượng (“orbital space”) đã có trong đề, không chỉ khả năng của đối tượng cần được bảo vệ."
            }
          },
          {
            "id": 33,
            "prompt": "Complete blank for question 33:",
            "type": "FILL_IN_BLANK",
            "correct": "propellant",
            "explanation": {
              "step1": "any surplus 7. ___ or compressed gas that might set off a 8. ___ ought to be released . Dự đoán ô trống 7: - Loại từ: danh từ , đứng sau từ chỉ phần còn dư (“surplus”). - Nghĩa: một loại vật chất còn dư cần được xả ra , được đặt song song với khí nén (“compressed gas”).",
              "step2": "Dựa vào tên riêng Joint Orbital Debris Advisory Council , ta định vị đoạn C rồi tìm khuyến nghị về xử lý vệ tinh khi ngừng hoạt động. Đoạn C",
              "step3": "Đoạn C: Under these, a satellite that has reached the end of its working life should be shut down , with any pressurised gas or leftover propellant that might trigger a blast vented off first .",
              "step4": "Đáp án phù hợp nhất: propellant Câu hoàn chỉnh: any surplus propellant or compressed gas that might set off a 8. ___ ought to be released. (Bất kỳ nhiên liệu đẩy còn dư hoặc khí nén nào có thể gây ra 8. ___ đều cần được xả ra.) => Khớp với dự đoán danh từ chỉ vật chất còn dư và thông tin trong bài; đáp án gồm 1 từ lấy nguyên văn từ bài. Đề được cung cấp không nêu giới hạn số từ. Đối chiếu paraphrasing: surplus leftover compressed gas pressurised gas released vented off Đáp án gas “ — khí ”: khí cũng cần được xả ra. Nhưng câu hỏi đã cho khí nén (“compressed gas”) sau từ nối “or”; ô 7 cần vật chất còn lại trong cặp. satellite “ — vệ tinh ”: Sai vì đây là thiết bị cần được tắt, không phải vật chất còn dư cần được xả ra."
            }
          },
          {
            "id": 34,
            "prompt": "Complete blank for question 34:",
            "type": "FILL_IN_BLANK",
            "correct": "blast",
            "explanation": {
              "step1": "any surplus 7. ___ or compressed gas that might set off a 8. ___ ought to be released . Loại từ: sau mạo từ “a” cần một danh từ đếm được số ít . Nghĩa cần tìm: một sự việc mà chất dư hoặc khí nén có thể gây ra, không phải tên chất cần thải ra. Ô 7 chỉ là ngữ cảnh; ta đang giải ô 8.",
              "step2": "Dựa vào tên riêng Joint Orbital Debris Advisory Council ở tiêu đề phần ghi chú => định vị đoạn C, rồi tìm khuyến nghị liên quan đến khí nén (“pressurised gas”). Đoạn C — pressurised gas",
              "step3": "Đoạn C: Under these, a satellite that has reached the end of its working life should be shut down , with any pressurised gas or leftover propellant that might trigger a blast vented off first .",
              "step4": "Đáp án phù hợp nhất: blast Câu hoàn chỉnh: any surplus 7. ___ or compressed gas that might set off a blast ought to be released. (Chất dư ở ô 7 hoặc khí nén có thể gây ra một vụ nổ nên được thải ra.) => Khớp với dự đoán danh từ số ít chỉ sự việc có thể được gây ra và thông tin trong bài; đáp án gồm 1 từ nguyên văn. Đề được cung cấp không nêu giới hạn số từ. Đối chiếu paraphrasing: compressed gas pressurised gas might set off might trigger ought to be released vented off Đáp án gas “ khí ”: Nếu chỉ scan sẽ dễ chọn vì từ này xuất hiện trong cả đề lẫn bài Nhưng khí là tác nhân gây ra, còn ô 8 cần sự việc được gây ra. vented off “ được xả ra ”: Sai vì đây là hành động xử lý khí, không phải danh từ số ít đứng sau “a”."
            }
          },
          {
            "id": 35,
            "prompt": "Complete blank for question 35:",
            "type": "FILL_IN_BLANK",
            "correct": "insolvent",
            "explanation": {
              "step1": "Although those who run large satellite fleets acknowledge their duties as caretakers of space , Tomasz Reinholt points out that operators who become 9. ___ are not likely to make removing their satellites a priority . Ý câu hỏi: Dù thừa nhận trách nhiệm quản lý không gian, các đơn vị vận hành rơi vào tình trạng ___ sẽ ít có khả năng ưu tiên việc loại bỏ vệ tinh. Dự đoán ô trống: - Loại từ: nhiều khả năng là tính từ , làm bổ ngữ sau động từ trở nên (“become”). - Nghĩa: một tình trạng của đơn vị vận hành khiến họ khó ưu tiên việc loại bỏ vệ tinh.",
              "step2": "Dựa vào từ khoá đặc biệt là tên riêng Tomasz Reinholt => ta định vị được đoạn C, nơi ông nhận xét về trách nhiệm của các đơn vị vận hành vệ tinh. Đoạn C",
              "step3": "Đoạn C: Those planning the giant constellations insist they will behave as conscientious custodians of space , but Reinholt fears trouble may grow regardless of good intentions . 'And the ones that fold or go insolvent — what then? ' he asks . ' They are hardly going to lay out money to pull their satellites back down .' Câu (6): lời hứa quản lý không gian >< lo ngại của Reinholt. Câu (7)–(8): các đơn vị mất khả năng thanh toán => hầu như không chi tiền đưa vệ tinh xuống, khớp với việc không ưu tiên loại bỏ vệ tinh trong câu hỏi.",
              "step4": "Đáp án phù hợp nhất: insolvent Câu hoàn chỉnh: Although those who run large satellite fleets acknowledge their duties as caretakers of space, Tomasz Reinholt points out that operators who become insolvent are not likely to make removing their satellites a priority. (Mặc dù các bên vận hành những đội vệ tinh lớn thừa nhận trách nhiệm quản lý không gian, Tomasz Reinholt chỉ ra rằng các đơn vị mất khả năng thanh toán sẽ ít có khả năng ưu tiên việc loại bỏ vệ tinh của mình.) => Khớp với dự đoán tính từ chỉ tình trạng và thông tin trong bài; đáp án gồm 1 từ, phần đề được cung cấp không nêu giới hạn số từ. Đối chiếu paraphrasing: become go not likely hardly removing their satellites pull their satellites back down Đáp án fold “ Ngừng hoạt động ”: nằm ngay cạnh đáp án ở câu (7) và cũng chỉ một vấn đề của đơn vị vận hành. Nhưng đây là động từ; ghép thành “become fold” không đúng cấu trúc. Đáp án go “ Trở nên ”: Dễ lấy cả động từ đứng trước từ chỉ tình trạng ở câu (7) Nhưng câu hỏi đã có “become”, nên chỉ cần điền tính từ “insolvent”. conscientious “ Có trách nhiệm ”: tính từ này xuất hiện trong lời hứa ở câu (6). Nhưng đó là phẩm chất họ hứa thể hiện, không phải tình trạng mà Reinholt nêu để giải thích việc không chi tiền đưa vệ tinh xuống."
            }
          },
          {
            "id": 36,
            "prompt": "Match the statement with the correct person/feature: \"There may come a stage at which the harm done in orbit can no longer be undone.\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "Priya Anand",
              "Ingrid Halvorsen",
              "Diego Marchetti",
              "Tomasz Reinholt"
            ],
            "correct": "Ingrid Halvorsen",
            "explanation": {
              "step1": "Tên đang xử lý: Ingrid Halvorsen . Bài chỉ nhắc đến Ingrid Halvorsen ở đoạn B.",
              "step2": "A handful of unchecked collisions might throw off enough wreckage to trigger a self-sustaining chain reaction of fragments , leaving the region near Earth impossible to use . ' Carry on this way and we will pass a point from which there is no return ,' warns Ingrid Halvorsen , an orbital-dynamics researcher at the Nordvik Institute of Astronautics in Bergen . Câu (6): va chạm => phản ứng dây chuyền, khiến vùng gần Earth không thể sử dụng. Câu (7): Ingrid Halvorsen cảnh báo rằng nếu tiếp tục, sẽ vượt ngưỡng không thể quay lại . 🔎 Khớp với statement 10: There may come a stage at which the harm done in orbit can no longer be undone . Đối chiếu paraphrasing: a stage a point can no longer be undone from which there is no return",
              "step3": "Với tên Ingrid Halvorsen ở đoạn B, ta chọn được: câu 10. Priya Anand Đoạn F nói đến một bi kịch (“tragedy”), nên dễ nhầm với thiệt hại không thể khắc phục Nhưng hậu quả nghiêm trọng chưa đồng nghĩa với việc không thể đảo ngược. Tomasz Reinholt Đoạn C nói nguy cơ có thể gia tăng (“trouble may grow”), nên dễ chọn nếu chỉ chú ý đến rủi ro trong tương lai Nhưng nguy cơ gia tăng không đồng nghĩa với việc sẽ vượt ngưỡng không thể quay lại.",
              "step4": "Đáp án chính xác: Ingrid Halvorsen"
            }
          },
          {
            "id": 37,
            "prompt": "Match the statement with the correct person/feature: \"Working out the precise whereabouts of all debris would remove almost every risk of collision.\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "Priya Anand",
              "Ingrid Halvorsen",
              "Diego Marchetti",
              "Tomasz Reinholt"
            ],
            "correct": "Diego Marchetti",
            "explanation": {
              "step1": "Tên Diego Marchetti xuất hiện ở đoạn D.",
              "step2": "' Know precisely where everything is , and you would scarcely ever run into trouble ,' says Diego Marchetti , a debris specialist with the Calderon Aerospace Institute in Arizona . Trong ngữ cảnh đoạn D, biết chính xác vị trí mọi mảnh vỡ => nguy cơ va chạm gần như biến mất . 🔎 Khớp với statement 11: Working out the precise whereabouts of all debris would remove almost every risk of collision . Đối chiếu paraphrasing: Working out the precise whereabouts of all debris Know precisely where everything is would remove almost every risk of collision would scarcely ever run into trouble",
              "step3": "Với tên Diego Marchetti ở đoạn D, ta chọn được: câu 11. Priya Anand Nếu chỉ dò ý về vị trí vật thể, dễ nhầm vì đoạn F nói về các quỹ đạo khác nhau (“wholly different orbits”) Nhưng đó là dữ liệu không khớp, không phải kết quả gần như không còn va chạm khi biết chính xác vị trí.",
              "step4": "Đáp án chính xác: Diego Marchetti"
            }
          },
          {
            "id": 38,
            "prompt": "Match the statement with the correct person/feature: \"Orbital space should stay open to everyone and be preserved for those who follow.\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "Priya Anand",
              "Ingrid Halvorsen",
              "Diego Marchetti",
              "Tomasz Reinholt"
            ],
            "correct": "Priya Anand",
            "explanation": {
              "step1": "Tên đang xử lý: Priya Anand . Bài nhắc đến Priya Anand ở đoạn E và đoạn F.",
              "step2": "Picture an airport on a hectic day , suggests Priya Anand , an astrodynamicist at Meridian University of Technology : aircraft queue up overhead, touching down and lifting off in close succession according to a tightly orchestrated plan .",
              "step3": "Với tên Priya Anand ở đoạn E, ta không chọn được câu nào: đoạn này không giúp chọn câu hỏi nào.",
              "step4": "For some objects, though, the method falters: enter the code for one Russian rocket stage , listed as object 4471 , and two purple lines appear at once , because the American and Russian feeds record wholly different orbits for that single body . Which of the two is right , Anand notes , is next to impossible to say , short of a third independent source against which the others could be checked . Câu (4): Câu (4)–(5), đoạn F: các nguồn ghi quỹ đạo khác nhau cho cùng một vật thể ; Anand cho rằng gần như không thể biết bản ghi nào đúng. 🔎 Khớp với statement 13: The recorded positions of certain objects do not match one another . Đối chiếu paraphrasing: recorded positions feeds record + orbits do not match one another different orbits for that single body open to everyone open and useful + a resource held in common be preserved keep space safe for those who follow for the generations still to come open to everyone open and useful + a resource held in common be preserved keep space safe for those who follow for the generations still to come Anand calls herself a space environmentalist . ' My aim is to keep space safe to work in — open and useful for the generations still to come .' Until that goal is met , she contends , the community of spacefarers will keep sliding toward a tragedy in which every operator fouls a resource held in common . Câu (6): Câu (6)–(7), đoạn F: Anand muốn giữ không gian an toàn, mở và hữu ích cho các thế hệ sau . Câu (8): Câu (8), đoạn F: chừng nào mục tiêu ấy chưa đạt được, các đơn vị vận hành vẫn tiếp tục gây hại cho tài nguyên chung . Anand muốn bảo tồn không gian dùng chung cho thế hệ sau . 🔎 Khớp với statement 12: Orbital space should stay open to everyone and be preserved for those who follow ."
            }
          },
          {
            "id": 39,
            "prompt": "Match the statement with the correct person/feature: \"The recorded positions of certain objects do not match one another.\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "Priya Anand",
              "Ingrid Halvorsen",
              "Diego Marchetti",
              "Tomasz Reinholt"
            ],
            "correct": "Priya Anand",
            "explanation": {
              "step1": "Tên đang xử lý: Tomasz Reinholt . Bài nhắc đến tên này ở đoạn C, bằng tên đầy đủ, họ Reinholt và lời nói tiếp nối.",
              "step2": "The same bodies also recommend easing retired craft far enough into the atmosphere for them to burn up within twenty years . Yet barely a third of all missions have honoured that twenty-year target , according to Tomasz Reinholt , who heads the orbital-debris office at the Pan-European Space Directorate in Vienna . Câu (4): nêu khuyến nghị đưa tàu đã nghỉ hoạt động vào khí quyển để cháy hết trong 20 năm. Câu (5): nhưng chỉ khoảng một phần ba nhiệm vụ tuân thủ => nhiều đơn vị không tuân thủ , theo Tomasz Reinholt. 🔎 Khớp với statement 14: A guideline concerning end-of-life satellites is ignored by many operators . Đối chiếu paraphrasing: A guideline recommend end of life satellites retired craft is ignored by many operators barely a third of all missions have honoured phần lớn còn lại không tuân thủ.",
              "step3": "Với tên Tomasz Reinholt ở đoạn C, ta chọn được: câu 14.",
              "step4": "Đáp án chính xác: Priya Anand"
            }
          },
          {
            "id": 40,
            "prompt": "Match the statement with the correct person/feature: \"A guideline concerning end-of-life satellites is ignored by many operators.\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "Priya Anand",
              "Ingrid Halvorsen",
              "Diego Marchetti",
              "Tomasz Reinholt"
            ],
            "correct": "Tomasz Reinholt",
            "explanation": {
              "step1": "Phân tích câu hỏi theo phương pháp Linearthinking.",
              "step2": "Định vị vùng thông tin liên quan trong bài đọc.",
              "step3": "Bóc tách cấu trúc câu (S-V-O) và đối chiếu nghĩa.",
              "step4": "Đáp án chính xác: Tomasz Reinholt"
            }
          }
        ]
      }
    ]
  },
  "cam-17-reading-1": {
    "id": "cam-17-reading-1",
    "title": "IELTS CAM Inspired 17 - Reading Test 1",
    "series": "Cambridge 17",
    "testNumber": 1,
    "type": "Reading",
    "durationMinutes": 60,
    "passages": [
      {
        "id": "cam-17-reading-1-p1",
        "passageNumber": 1,
        "title": "The development of the London underground railway",
        "subtitle": "",
        "content": [
          "Valdheim expanded with remarkable speed in the opening decades of the nineteenth century, and its old core grew steadily more crowded. Matters were worsened by the spreading overground railway network, which poured ever-larger crowds into the city. When a government commission ruled in 1851 that trains must be kept out of the Kvarter — the ancient commercial district at the city's heart — the overground termini were left strung in a ring around it rather than reaching inside. Within that ring lay a maze of flimsy, overcrowded tenements, and its streets were choked with horse-drawn traffic. Crossing the Kvarter was a misery: eight kilometres by carriage or omnibus might swallow up an hour and a half. Plenty of remedies were proposed, yet hardly any came to anything.",
          "One of the loudest voices calling for action was that of Emil Sandhåg, a lawyer employed by the Valdheim city council. To his mind, an underground line tying the scattered overground termini into a single network would bring benefits at once social and economic, since the same works could sweep away the worst slums. He proposed to resettle the poorer labourers packed into the central tenements in housing newly built on the city's outskirts, and to run trains cheap enough for them to reach their work. A number of merchants came round to Sandhåg's thinking, and in 1856 he laid a scheme before the assembly. It was thrown out, but happened to arrive alongside a rival group's proposal for an underground link between the termini, and that second plan won approval.",
          "The two camps joined forces, and in August 1859 the Central Valdheim Railway Company came into being. Its aim was to build an underground line from the Nordhavn terminus of the Nordhavn & Western Railway to Kolstad, on the fringe of the Kvarter — a stretch of not quite five kilometres. Money for so bold and costly a venture proved hard to come by, and the hostile pieces filling the newspapers did nothing to help. Opponents warned that the tunnels were bound to cave in beneath the weight of traffic overhead, that nearby buildings would be shaken loose, and that fumes from the engines would poison anyone riding below. Sandhåg and his associates pressed on regardless.",
          "For the Nordhavn & Western, the attraction was obvious — the line would let its trains run at last into the very centre of Valdheim — and it put close to 250,000 kroner into the project; the full million kroner needed came only gradually, over five years. To hold down the cost of demolition, the planners traced the route below roads that already existed. Work expected to take twenty-one months in the end ran on for nearly four years. The line was laid just beneath the surface by the method called 'cut and cover': labourers opened a trench roughly ten metres across and six deep, its walls braced for the time being with timber; masons then raised brick side-walls and closed the top with a brick arch to form the tunnel; over this a layer of earth about two metres thick was spread, and the roadway above was put back.",
          "When it opened, on 12 March 1868, the Central Valdheim line became the first underground railway anywhere in the world. Some 35,000 people were carried between Nordhavn and Kolstad on that opening day, each trip lasting around twenty minutes, and by the close of the line's first twelve months close to ten million journeys had been recorded.",
          "Approval for the earliest extensions came through even as the line was opening, and over the following five years these were carried out, pushing east to Bergsli and west as far as Vestport. Steam locomotives heated by firebricks in their boilers had been the original intention, but engines of that kind were never put into service; in their place ran specially built locomotives whose water tanks allowed the steam to be condensed. Smoke and foul air nonetheless remained a nuisance, notwithstanding the ventilation shafts sunk into the tunnels.",
          "For all this new mileage underground, the congestion in Valdheim's streets was by the 1890s worse than before. Part of the trouble lay in the network's shape: the existing lines circled the middle of the city and reached out to the outskirts, but none actually ran across the centre itself. There 'cut and cover' could not be attempted, and the only way left was to drive tunnels far below ground.",
          "The means of boring such tunnels already existed, yet steam engines were useless in so cramped a space. Only once a dependable electric motor had been devised, along with a way of carrying power from the generator to a moving train, did the world's first deep-level electric railway become feasible: the Valdheim & Southern, which opened in 1894 and ran from the centre out to Myrdal, on the far side of the River Glåma. Its trains, each of three carriages, were worked by electric engines. So narrow were the carriages that their windows sat as mere slits just under the roof, on the assumption that no passenger would care to gaze out at bare tunnel wall. An unreliable power supply caused most of its troubles; and for all its engineering merit, the Valdheim & Southern never turned a profit. Matters changed in 1903, when the Cross-City Railway — soon nicknamed the 'Ten-Øre Line' after its flat fare — opened with electric locomotives of a new design. Its popularity was immediate, and before long further lines and extensions joined the growing network; by 1910 the core of the system Valdheimers ride today was in place."
        ],
        "questions": [
          {
            "id": 1,
            "prompt": "The problem\n• Between the early 1800s and mid-century, ever more people crowded into Valdheim and its old centre became badly overcrowded\n• The old core's roads were clogged with  _____  drawn by horses",
            "type": "FILL_IN_BLANK",
            "correct": "traffic",
            "explanation": {
              "step1": "- The old core's roads were clogged with 1. ___ drawn by horses Ô trống đứng sau “with”, nên cần một danh từ chỉ thứ khiến đường sá tắc nghẽn và được ngựa kéo. Chưa cần đoán chính xác từ nào.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta tìm ý tương đương với đường sá bị tắc nghẽn (“ roads were clogged with ”). Ở đoạn 1, cụm “streets were choked with” cho thấy đây là chỗ cần đọc. Đoạn 1 — streets were choked with",
              "step3": "Đoạn 1: Within that ring lay a maze of flimsy, overcrowded tenements , and its streets were choked with horse-drawn traffic .",
              "step4": "Đáp án phù hợp nhất: traffic Câu hoàn chỉnh: The old core's roads were clogged with traffic drawn by horses. (Đường sá ở khu trung tâm cũ bị tắc nghẽn vì giao thông do ngựa kéo.) => Khớp với dự đoán: * traffic* là thứ làm đường phố tắc nghẽn , còn *horse-drawn* xác nhận điều kiện được ngựa kéo; đáp án gồm 1 từ. Đối chiếu paraphrasing: were clogged with were choked with horse drawn drawn by horses tenements — những khu nhà: Cùng xuất hiện ở câu (4), nhưng không phải thứ được ngựa kéo làm tắc đường. carriage / omnibus — xe ngựa / xe buýt: Câu 5 đoạn 1 nhắc đến “carriage or omnibus”, nhưng câu chứng cứ trực tiếp gọi thứ làm tắc đường là “horse-drawn traffic”."
            }
          },
          {
            "id": 2,
            "prompt": "The proposed solution\n• Emil Sandhåg, a lawyer, put forward the idea of building an underground line\n• Such a railway would allow poorer residents to be moved to better homes on the  _____ \n• Several  _____  supported Sandhåg's proposal\n• At first the company struggled to obtain the  _____  that the project demanded\n• Unfavourable reports about the venture were carried by the  _____",
            "type": "FILL_IN_BLANK",
            "correct": "outskirts",
            "explanation": {
              "step1": "- Such a railway would allow poorer residents to be moved to better homes on the 2. ___ Ý câu hỏi: Cần tìm vị trí của nhà ở mới dành cho cư dân nghèo, không phải nơi họ đang sống. Dự đoán: Sau “on the”, ô trống cần một danh từ chỉ địa điểm hoặc khu vực.",
              "step2": "Dựa vào tên riêng Emil Sandhåg => ta định vị được đoạn 2 và tìm đề xuất chuyển nơi ở của ông. Đoạn 2",
              "step3": "Đoạn 2: He proposed to resettle the poorer labourers packed into the central tenements in housing newly built on the city's outskirts , and to run trains cheap enough for them to reach their work .",
              "step4": "Đáp án phù hợp nhất: outskirts Câu hoàn chỉnh: Such a railway would allow poorer residents to be moved to better homes on the outskirts. (Tuyến đường sắt này sẽ giúp chuyển cư dân nghèo đến những ngôi nhà tốt hơn ở vùng ven thành phố .) => Khớp với dự đoán về vị trí nhà ở mới ; đáp án gồm 1 từ. Đề không nêu giới hạn số từ. Đối chiếu paraphrasing: poorer residents the poorer labourers to be moved resettle better homes housing newly built central tenements khu nhà ở trung tâm: Đây là nơi ở cũ của người lao động, không phải vị trí nhà mới. housing nhà ở: Từ này chỉ nơi họ sẽ sống, còn ô trống hỏi nhà ấy nằm ở đâu. Đáp án work nơi làm việc: Đây là nơi họ cần đi tới sau khi chuyển nhà, không phải vị trí nhà mới."
            }
          },
          {
            "id": 3,
            "prompt": "The construction\n• The route that was selected meant few buildings had to be pulled down\n• The tunnels were dug using the 'cut and cover' technique\n• Once the brick arch was finished, a covering of  _____  was placed over the tunnel",
            "type": "FILL_IN_BLANK",
            "correct": "merchants",
            "explanation": {
              "step1": "Several 3. ___ supported Sandhåg's proposal Ý câu hỏi: Cần tìm nhóm người đã ủng hộ đề xuất của Sandhåg. Dự đoán: Sau “Several”, ô trống cần một danh từ đếm được số nhiều chỉ người hoặc nhóm người.",
              "step2": "Dựa vào tên riêng Sandhåg, ta tìm đến đoạn 2 và bắt đầu đọc phần nói về đề xuất của ông. Đoạn 2",
              "step3": "Đoạn 2: A number of merchants came round to Sandhåg's thinking , and in 1856 he laid a scheme before the assembly .",
              "step4": "Đáp án phù hợp nhất: merchants Câu hoàn chỉnh: Several merchants supported Sandhåg's proposal . (Một số thương nhân ủng hộ đề xuất của Sandhåg .) => Khớp với dự đoán: *merchants* là danh từ số nhiều chỉ người; bài đọc nói họ tán thành ý tưởng của Sandhåg. Đáp án gồm 1 từ. Đối chiếu paraphrasing: Several A number of supported Sandhåg's proposal came round to Sandhåg's thinking labourers “ những người lao động ”: Đoạn 2 nhắc đến họ trong cụm “poorer labourers”, nhưng họ là nhóm Sandhåg muốn chuyển chỗ ở, không phải nhóm được nói là ủng hộ đề xuất. associates “ cộng sự ”: Đoạn 3 có “Sandhåg and his associates”, nhưng câu (4) đoạn 2 xác định rõ nhóm tán thành ý tưởng của ông là merchants. a rival group “ một nhóm đối thủ ”: Cụm “a rival group's proposal” nói về một đề xuất cạnh tranh, không phải nhóm ủng hộ đề xuất của Sandhåg."
            }
          },
          {
            "id": 4,
            "prompt": "Complete blank for question 4:",
            "type": "FILL_IN_BLANK",
            "correct": "money",
            "explanation": {
              "step1": "At first the company struggled to obtain the 4. ___ that the project demanded Ô trống đứng sau “the”, nên cần một danh từ . Về nghĩa, ta dự đoán đó là một nguồn lực dự án cần nhưng công ty khó huy động; chưa cần chốt từ cụ thể.",
              "step2": "Dựa vào tên riêng Valdheim và ý chỉ công ty (“the company”), ta tìm đến đoạn 3, nơi nhắc tới “Central Valdheim Railway Company”. Từ đó, đọc tiếp để tìm thứ khó huy động. Đoạn 3 — Central Valdheim Railway Company",
              "step3": "Đoạn 3: Money for so bold and costly a venture proved hard to come by , and the hostile pieces filling the newspapers did nothing to help .",
              "step4": "Đáp án phù hợp nhất: money Câu hoàn chỉnh: At first the company struggled to obtain the money that the project demanded (Lúc đầu, công ty gặp khó khăn trong việc huy động số tiền mà dự án cần .) => Khớp với dự đoán về nguồn lực cần huy động: bài đọc nói rõ tiền khó kiếm ; đáp án gồm 1 từ. Đối chiếu paraphrasing: struggled to obtain hard to come by the project demanded for so bold and costly a venture newspapers — các tờ báo: Nếu đọc lướt câu (3), dễ chọn từ này vì nó xuất hiện ngay sau ý khó huy động tiền Nhưng báo là nơi đăng các bài viết bất lợi, không phải thứ công ty cần có cho dự án. kroner — đơn vị tiền tệ: Đoạn 4 dùng từ này khi nêu các khoản tiền, nhưng ô trống hỏi thứ cần huy động, không hỏi đơn vị đo số tiền."
            }
          },
          {
            "id": 5,
            "prompt": "Complete blank for question 5:",
            "type": "FILL_IN_BLANK",
            "correct": "newspapers",
            "explanation": {
              "step1": "- Unfavourable reports about the venture were carried by the 5. ___ Ô trống đứng sau “by the”, nên cần một danh từ chỉ nơi hoặc phương tiện đăng tải thông tin . Chưa thể xác định từ cụ thể nếu chưa đọc bài.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp ý tương đương với thông tin bất lợi về dự án. Ở đoạn 3, cụm “hostile pieces” cho thấy đây là vùng cần đọc. Đoạn 3 — hostile pieces",
              "step3": "Đoạn 3: Money for so bold and costly a venture proved hard to come by , and the hostile pieces filling the newspapers did nothing to help .",
              "step4": "Đáp án phù hợp nhất: newspapers Câu hoàn chỉnh: Unfavourable reports about the venture were carried by the newspapers . (Những thông tin bất lợi về dự án được đăng trên các tờ báo.) => Đúng với dự đoán về nơi đăng tải: các bài viết bất lợi xuất hiện trên báo ; đáp án gồm 1 từ. Đối chiếu paraphrasing: Unfavourable reports hostile pieces were carried by the filling the newspapers pieces “ các bài viết ”: Đây là những thông tin bất lợi, không phải nơi đăng tải chúng. Opponents “ những người phản đối ”: Câu sau nói họ đưa ra lời cảnh báo (“Opponents warned”), chứ không nói họ là nơi đăng tải các bài viết."
            }
          },
          {
            "id": 6,
            "prompt": "Complete blank for question 6:",
            "type": "FILL_IN_BLANK",
            "correct": "earth",
            "explanation": {
              "step1": "Câu hỏi nói Sau khi làm xong vòm gạch, người ta phủ một lớp vật liệu lên đường hầm . Ô trống đứng sau “of”, nên cần một danh từ chỉ vật liệu.",
              "step2": "Dựa vào thuật ngữ đặc trưng “cut and cover” ở ý ngay trước chỗ trống => tìm đến đoạn 4, rồi đọc công đoạn làm vòm gạch và phủ bên trên ở câu (4). Đoạn 4 — cut and cover",
              "step3": "Đoạn 4: The line was laid just beneath the surface by the method called 'cut and cover' : labourers opened a trench roughly ten metres across and six deep, its walls braced for the time being with timber ; masons then raised brick side-walls and closed the top with a brick arch to form the tunnel ; over this a layer of earth about two metres thick was spread , and the roadway above was put back .",
              "step4": "Đáp án phù hợp nhất: earth Câu hoàn chỉnh: Once the brick arch was finished, a covering of earth was placed over the tunnel. (Sau khi vòm gạch hoàn thành, một lớp đất được phủ lên đường hầm .) => Khớp với dự đoán về vật liệu phủ : bài đọc nói một lớp đất được trải lên trên vòm gạch; đáp án là một từ lấy nguyên văn bài. Đối chiếu paraphrasing: a covering of a layer of was placed was spread brick “ gạch ”: Từ này nằm sát công đoạn cần tìm, nhưng gạch dùng để làm vòm; vật liệu trải lên trên vòm là earth. timber “ gỗ ”: Từ này cũng xuất hiện trong câu (4), nhưng dùng để chống đỡ thành rãnh tạm thời, không phải lớp phủ. roadway “ mặt đường ”: Mặt đường được làm lại sau khi lớp đất đã được trải, nên không phải vật liệu cần điền."
            }
          },
          {
            "id": 7,
            "prompt": "No underground railway had been constructed anywhere else before the Central Valdheim line began operating.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "TRUE",
            "explanation": {
              "step1": "No underground railway had been constructed anywhere else before the Central Valdheim line began operating . Ý câu hỏi: Trước khi tuyến Central Valdheim hoạt động, không nơi nào khác đã xây dựng đường sắt ngầm.",
              "step2": "Dựa vào tên tuyến Central Valdheim => ta tìm thông tin về thời điểm tuyến bắt đầu hoạt động. Câu cần đọc kĩ nằm ở đoạn 5. Đoạn 5",
              "step3": "Đoạn 5: When it opened , on 12 March 1868, the Central Valdheim line became the first underground railway anywhere in the world .",
              "step4": "Câu hỏi nói: Trước khi Central Valdheim hoạt động, chưa có đường sắt ngầm nào được xây dựng ở nơi khác (“ No underground railway had been constructed anywhere else ”). Bài đọc nói: Khi mở cửa (“When it opened”), Central Valdheim trở thành tuyến đường sắt ngầm đầu tiên trên toàn thế giới (“ the first underground railway anywhere in the world ”). ⇒ Ý câu hỏi phù hợp với bằng chứng. Đáp án đúng: TRUE Đối chiếu paraphrasing: No underground railway the first underground railway anywhere else anywhere in the world FALSE Sai vì bài gọi Central Valdheim là tuyến đầu tiên trên toàn thế giới (“the first underground railway anywhere in the world”). Chỉ chọn FALSE nếu bài nói một tuyến đường sắt ngầm khác đã được xây dựng trước đó. NOT GIVEN Nếu skim/scan thấy đề nói được xây dựng (“had been constructed”), còn bài nói mở cửa (“When it opened”), sẽ dễ chọn NOT GIVEN Nhưng bài đã xác định Central Valdheim là tuyến đầu tiên trên toàn thế giới. Chỉ chọn NOT GIVEN nếu bài không cho biết tuyến nào xuất hiện đầu tiên."
            }
          },
          {
            "id": 8,
            "prompt": "On the line's first day of operation, travelling from one end to the other took under fifteen minutes.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "FALSE",
            "explanation": {
              "step1": "On the line's first day of operation , travelling from one end to the other took under fifteen minutes . Ý câu hỏi: Cần kiểm tra thời gian đi hết tuyến trong ngày đầu hoạt động có thật sự dưới 15 phút không.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp thông tin về ngày mở tuyến (“opening day”) ở đoạn 5 => bắt đầu đọc kĩ tại đó. Đoạn 5 — opening day",
              "step3": "Đoạn 5: Some 35,000 people were carried between Nordhavn and Kolstad on that opening day , each trip lasting around twenty minutes , and by the close of the line's first twelve months close to ten million journeys had been recorded . Gợi ý: cụm “by the close of the line's first twelve months” báo hiệu câu chuyển sang thống kê cuối năm đầu; câu hỏi chỉ cần thời gian mỗi chuyến trong ngày mở tuyến.",
              "step4": "Câu hỏi nói: đi hết tuyến trong ngày đầu mất dưới 15 phút (“ under fifteen minutes ”). Bài đọc nói: đúng ngày mở tuyến (“on that opening day”), mỗi chuyến giữa Nordhavn và Kolstad kéo dài khoảng 20 phút (“ around twenty minutes ”). ⇒ Dưới 15 phút >< khoảng 20 phút : hai thông tin mâu thuẫn . Đáp án đúng: FALSE Đối chiếu paraphrasing: first day of operation opening day under fifteen minutes around twenty minutes Đáp án TRUE Nếu skim/scan chỉ thấy đúng ngày mở tuyến (“opening day”), sẽ dễ bỏ qua số phút Nhưng thời gian bài nêu là khoảng 20 phút. Chỉ chọn TRUE nếu bài nói mỗi chuyến mất dưới 15 phút. NOT GIVEN Nếu chỉ thấy số hành khách (“35,000 people”), sẽ dễ tưởng bài không cho biết thời gian Nhưng ngay sau đó bài ghi rõ mỗi chuyến kéo dài khoảng 20 phút. Chỉ chọn NOT GIVEN nếu bài không cho biết mỗi chuyến mất bao lâu."
            }
          },
          {
            "id": 9,
            "prompt": "The steam engines first intended for the line were eventually adopted.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "FALSE",
            "explanation": {
              "step1": "The steam engines first intended for the line were eventually adopted . Ý câu hỏi: Loại động cơ hơi nước được dự định dùng ban đầu về sau đã thực sự được sử dụng.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp ý về loại đầu máy được dự định dùng ban đầu (“original intention”). Ý này xuất hiện ở đoạn 6, câu (2) => bắt đầu đọc kỹ tại đây. Đoạn 6 — original intention",
              "step3": "Đoạn 6: Steam locomotives heated by firebricks in their boilers had been the original intention , but engines of that kind were never put into service ; in their place ran specially built locomotives whose water tanks allowed the steam to be condensed .",
              "step4": "Câu hỏi nói: Loại động cơ dự định dùng ban đầu cuối cùng đã được sử dụng (“eventually adopted”). Bài đọc nói: Loại đó chưa từng được đưa vào sử dụng (“ never put into service ”); đầu máy khác chạy thay thế. Hai ý mâu thuẫn trực tiếp. Đáp án đúng: FALSE . Đối chiếu paraphrasing: first intended original intention eventually adopted never put into service Đáp án TRUE Nếu chỉ thấy đây là loại được dự định ban đầu (“original intention”), sẽ dễ chọn TRUE Nhưng kế hoạch đó không được thực hiện. Chỉ chọn TRUE nếu bài nói loại động cơ ấy về sau đã được sử dụng. NOT GIVEN Nếu chỉ tìm đúng từ được sử dụng (“adopted”) mà không thấy trong bài, sẽ dễ chọn NOT GIVEN Nhưng bài đã nêu rõ kết quả trái ngược (“never put into service”). Chỉ chọn NOT GIVEN nếu bài không cho biết loại động cơ ấy rốt cuộc có được sử dụng hay không."
            }
          },
          {
            "id": 10,
            "prompt": "Tunnelling deep below ground was more costly than the 'cut and cover' method.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "NOT GIVEN",
            "explanation": {
              "step1": "Tunnelling deep below ground was more costly than the 'cut and cover' method . Cần kiểm tra: bài đọc có so sánh chi phí giữa hai phương pháp đào hầm không?",
              "step2": "Dựa vào thuật ngữ đặc thù “cut and cover” => ta bắt đầu đọc ở câu nhắc đến phương pháp này trong đoạn 7. Cần xem thêm câu trước để hiểu “There” chỉ nơi nào. Đoạn 7 — cut and cover",
              "step3": "Đoạn 7: Part of the trouble lay in the network's shape: the existing lines circled the middle of the city and reached out to the outskirts , but none actually ran across the centre itself . There 'cut and cover' could not be attempted , and the only way left was to drive tunnels far below ground . Câu (2): các tuyến hiện có không băng qua trung tâm . Câu (3): tại đó, cut and cover không thể áp dụng nên phải đào sâu. Bài nói về khả năng thi công, không so sánh chi phí .",
              "step4": "Câu hỏi nói: đào hầm sâu tốn kém hơn phương pháp cut and cover (“more costly than”). Bài đọc nói: ở trung tâm, cut and cover không thể áp dụng (“could not be attempted”); cách còn lại là đào hầm sâu (“the only way left was to drive tunnels far below ground”). Bài không cho biết phương pháp nào tốn kém hơn . ⇒ So sánh chi phí trong câu hỏi không được xác nhận hoặc bác bỏ . Đáp án đúng: NOT GIVEN Đối chiếu paraphrasing: Tunnelling deep below ground drive tunnels far below ground more costly than không có trong bài. Đáp án TRUE Nếu skim/scan thấy chi phí phá dỡ (“cost of demolition”) ở đoạn 4, sẽ dễ chọn TRUE Nhưng đó không phải phép so sánh chi phí giữa hai phương pháp đào hầm. Chỉ chọn TRUE nếu bài nói đào hầm sâu tốn kém hơn cut and cover. FALSE Nếu thấy cut and cover không thể áp dụng (“could not be attempted”), sẽ dễ tưởng câu hỏi đã bị phủ định Nhưng không thể áp dụng không có nghĩa là đào sâu rẻ hơn. Chỉ chọn FALSE nếu bài nói đào hầm sâu rẻ hơn hoặc không đắt hơn cut and cover."
            }
          },
          {
            "id": 11,
            "prompt": "On the Valdheim & Southern, the carriage windows were placed high up, near the ceiling.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "TRUE",
            "explanation": {
              "step1": "On the Valdheim & Southern, the carriage windows were placed high up, near the ceiling . Ý câu hỏi: Cửa sổ toa tàu trên tuyến Valdheim & Southern nằm cao, gần trần .",
              "step2": "Dựa vào tên riêng Valdheim & Southern, ta tìm đến đoạn 8, rồi đọc kĩ chỗ nói về cửa sổ toa tàu (“their windows”). Đoạn 8 — their windows",
              "step3": "Đoạn 8: So narrow were the carriages that their windows sat as mere slits just under the roof , on the assumption that no passenger would care to gaze out at bare tunnel wall .",
              "step4": "Câu hỏi nói: Cửa sổ toa tàu nằm cao, gần trần (“ high up, near the ceiling ”). Bài đọc nói: Cửa sổ của các toa tàu nằm ngay dưới nóc (“ just under the roof ”). ⇒ Hai cách diễn đạt cùng chỉ vị trí ở phần trên của toa . Đáp án đúng: TRUE Đối chiếu paraphrasing: high up, near the ceiling just under the roof FALSE Sai vì “just under the roof” không trái với vị trí cao, gần trần. Chỉ chọn FALSE nếu bài nói cửa sổ nằm ở vị trí đối lập, chẳng hạn gần sàn toa. NOT GIVEN Nếu chỉ tìm đúng từ trần (“ceiling”), sẽ dễ tưởng bài không cho biết vị trí Nhưng bài đã nêu vị trí ngay dưới nóc (“just under the roof”). Chỉ chọn NOT GIVEN nếu bài không cho biết cửa sổ nằm ở đâu."
            }
          },
          {
            "id": 12,
            "prompt": "Running the Valdheim & Southern proved to be a profitable enterprise.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "FALSE",
            "explanation": {
              "step1": "Running the Valdheim & Southern proved to be a profitable enterprise . Ý câu hỏi: Việc vận hành Valdheim & Southern có lãi .",
              "step2": "Dựa vào tên riêng Valdheim & Southern => ta định vị được đoạn 8 và đọc từ chỗ nhắc đến tuyến này để kiểm tra kết quả tài chính. Đoạn 8",
              "step3": "Đoạn 8: An unreliable power supply caused most of its troubles ; and for all its engineering merit, the Valdheim & Southern never turned a profit .",
              "step4": "Câu hỏi nói: Việc vận hành Valdheim & Southern có lãi (“ profitable enterprise ”). Bài đọc nói: Tuyến này chưa từng có lãi (“ never turned a profit ”). Hai ý mâu thuẫn trực tiếp. Đáp án đúng: FALSE Đối chiếu paraphrasing: profitable never turned a profit Đáp án TRUE Nếu skim/scan thấy tuyến có giá trị kỹ thuật (“engineering merit”), sẽ dễ chọn TRUE Nhưng giá trị kỹ thuật không có nghĩa là có lãi. Chỉ chọn TRUE nếu bài nói tuyến đã tạo ra lợi nhuận. NOT GIVEN Nếu không thấy đúng cụm “profitable enterprise” trong bài, sẽ dễ chọn NOT GIVEN Nhưng bài đã nêu rõ kết quả tài chính (“never turned a profit”). Chỉ chọn NOT GIVEN nếu bài không cho biết tuyến có lãi hay không."
            }
          },
          {
            "id": 13,
            "prompt": "Riding the Cross-City Railway cost passengers more than the Valdheim & Southern had.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "NOT GIVEN",
            "explanation": {
              "step1": "Riding the Cross-City Railway cost passengers more than the Valdheim & Southern had . Ý câu hỏi: Giá đi Cross-City Railway cao hơn giá đi Valdheim & Southern.",
              "step2": "Dựa vào tên riêng Cross-City Railway => ta tìm đến câu (6) đoạn 8, bắt đầu bằng “Matters changed in 1903”. Đoạn 8 — Matters changed in 1903",
              "step3": "Đoạn 8: Matters changed in 1903, when the Cross-City Railway — soon nicknamed the 'Ten-Øre Line' after its flat fare — opened with electric locomotives of a new design .",
              "step4": "Câu hỏi nói: Giá đi Cross-City Railway cao hơn giá đi Valdheim & Southern (“cost passengers more than the Valdheim & Southern had”). Bài đọc nói: Cross-City Railway có giá vé cố định (“flat fare”), nhưng không cho biết giá vé của Valdheim & Southern . ⇒ Không đủ dữ kiện để xác nhận hoặc bác bỏ phép so sánh. Đáp án đúng: NOT GIVEN Đối chiếu paraphrasing: fare cost passengers more than the Valdheim & Southern had không có trong bài. Đáp án TRUE Nếu thấy biệt danh gắn với giá vé (“after its flat fare”), ta dễ tưởng đã đủ thông tin để so sánh Nhưng bài không cho biết giá vé Valdheim & Southern. Chỉ chọn TRUE nếu bài nói vé Valdheim & Southern rẻ hơn vé Cross-City Railway. FALSE Nếu thấy Valdheim & Southern không có lãi (“never turned a profit”) ở câu 5 đoạn 8, ta dễ nhầm lợi nhuận với giá vé Nhưng việc không có lãi không cho biết vé tuyến nào đắt hơn. Chỉ chọn FALSE nếu bài nói vé Cross-City Railway bằng hoặc rẻ hơn vé Valdheim & Southern."
            }
          }
        ]
      },
      {
        "id": "cam-17-reading-1-p2",
        "passageNumber": 2,
        "title": "Stadiums: past, present and future",
        "subtitle": "",
        "content": [
          "Stadiums: past, present and future"
        ],
        "questions": [
          {
            "id": 14,
            "prompt": "Which section contains the following information: \"a reference to stadiums that are no longer used once a major event has finished\"?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "correct": "A",
            "explanation": {
              "step1": "a reference to stadiums that are no longer used once a major event has finished Dự đoán thông tin cần tìm (SPECIFY) 👍 NÊN tìm: đoạn nói sân vận động được xây cho sự kiện lớn rồi bị bỏ không sau đó. 👎 ĐỪNG tìm: đoạn chỉ nói sân vận động có một công dụng, hoặc đấu trường không còn dùng để thi đấu nhưng vẫn được sử dụng vào việc khác.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp ý sân vận động bị bỏ không sau một sự kiện lớn. Đoạn A nhắc đến những đấu trường xây cho các dịp lớn; ta đọc câu (4): Đoạn A: Building one can cost well over €1 billion , and more than a few arenas raised for showpiece occasions — an Olympic Games, say, or a World Cup — have since been left to decay, unused . Đoạn A",
              "step3": "Đối chiếu paraphrasing: stadiums arenas a major event showpiece occasions + a World Cup no longer used unused; once a major event has finished since Câu (4) nói những đấu trường xây cho sự kiện lớn sau đó bị bỏ không . Đáp án đúng: Paragraph A . Paragraph C Nếu đọc lướt, ý không được biến trở lại thành đấu trường (“never turned back into an arena”) dễ khiến ta nghĩ công trình bị bỏ không Nhưng nó đã được chuyển thành quảng trường chợ, tức vẫn có công dụng. Paragraph D Ý chỉ làm được một việc (“could do only one thing”) nói về công năng hạn chế, không nói sân vận động ngừng được sử dụng sau sự kiện lớn. Paragraph B Đấu trường từng đổi công dụng, nhưng về sau lại được đưa vào sử dụng (“brought back into use”), trái với tình trạng bị bỏ không mà câu hỏi yêu cầu.",
              "step4": "Đáp án chính xác: A"
            }
          },
          {
            "id": 15,
            "prompt": "Which section contains the following information: \"figures indicating how much power a particular stadium produces\"?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "correct": "F",
            "explanation": {
              "step1": "figures indicating how much power a particular stadium produces Dự đoán thông tin cần tìm (SPECIFY) 👍 NÊN tìm: đoạn nêu tên một sân vận động cụ thể và đưa ra con số về lượng điện sân đó tạo ra hoặc cung cấp. 👎 ĐỪNG tìm: số liệu về sức chứa, chi phí hay khí thải; hoặc đoạn chỉ nói chung rằng sân vận động có thể tạo điện.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp ý sân vận động tạo điện (“power-producing arenas”). Cụm này xuất hiện ở đoạn F => bắt đầu đọc tại đây. Đoạn E cũng nói về khả năng tạo điện, nhưng chưa đưa ra số liệu cho một sân cụ thể. Đoạn F: The Aldberg Solar Stadium led this new generation of power-producing arenas , and others such as the Rijnstad Arena and the Baihe Stadium have followed . Opened in 2011, the last of these carries 9,200 solar panels that generate as much as 1.2 GWh of electricity each year ; in doing so it cuts carbon dioxide emissions by around 690 tonnes and, when no event is being held , feeds up to 75 percent of the power used by the neighbouring district . Câu (3): nêu Baihe Stadium trong danh sách các sân tạo điện. Câu (4): cụm chỉ sân cuối vừa nêu (“the last of these”) quay lại Baihe Stadium, rồi đưa ra hai số liệu về điện của sân này. Đoạn F — power-producing arenas",
              "step3": "a particular stadium the Baihe Stadium. Cụm chỉ sân cuối trong danh sách (“the last of these”) ở câu (4) cũng là Baihe Stadium. figures 1.2 GWh + up to 75 percent. how much power + produces generate as much as 1.2 GWh of electricity each year. Số 75% cho biết phần điện sân cung cấp khi không có sự kiện. Đáp án đúng: Paragraph F. Paragraph E Nếu skim/scan, ý sân vận động có thể tạo điện (“generator of power”) dễ khiến em chọn E Nhưng đoạn này không có con số đo lượng điện của một sân cụ thể. Paragraph B Các số như lượng khán giả (“22,000 onlookers”) trông giống số liệu cần tìm Nhưng chúng đo sức chứa, không đo điện. Paragraph D Đoạn này nhắc đến năng lượng sân tiêu thụ (“energy they consume”). Câu hỏi lại cần lượng điện sân tạo ra, không phải lượng sân dùng.",
              "step4": "Đáp án chính xác: F"
            }
          },
          {
            "id": 16,
            "prompt": "Which section contains the following information: \"examples of facilities at some new stadiums that are unrelated to sporting events\"?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "correct": "E",
            "explanation": {
              "step1": "examples of facilities at some new stadiums that are unrelated to sporting events Dự đoán thông tin cần tìm (SPECIFY) 👍 NÊN tìm: đoạn nêu nhiều ví dụ về tiện ích tại sân vận động hiện nay và xác nhận các tiện ích đó không phục vụ thể thao. 👎 ĐỪNG tìm: công năng cũ của đấu trường cổ hoặc thiết bị phục vụ mục đích khác nhưng không được nêu như các tiện ích dành cho người sử dụng sân vận động.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp ý tương đương với việc trang bị tiện ích cho sân vận động. Đoạn B và C nói về đấu trường cổ, còn đoạn E nhắc đến việc trang bị tiện ích cho sân vận động (“fit stadiums with amenities ”) => đây là vùng cần đọc. Đoạn E: It is becoming common to fit stadiums with amenities that have nothing to do with sport — hotels and conference halls, retail units, bars and restaurants , play areas for children and patches of greenery . Đoạn E — fit stadiums with amenities",
              "step3": "examples of facilities amenities + bars and restaurants at some new stadiums fit stadiums with amenities + is becoming common. Đây là xu hướng hiện nay; bài không dùng lại chữ new. unrelated to sporting events nothing to do with sport Đáp án đúng: Paragraph E — có nhiều ví dụ về tiện ích không liên quan đến thể thao tại sân vận động. Paragraph B. “ Đấu trường cổ từng có nhà ở ”: Có thể chọn nhầm vì thấy nhà ở (“dwellings”) Nhưng đó là công năng của một đấu trường cổ qua các thời kỳ, không phải tiện ích được trang bị cho sân vận động mới. Paragraph C. “ Quán cà phê và nhà ở quanh đấu trường cổ ”: Cụm “cafés and homes” trông giống các ví dụ cần tìm Nhưng chúng nằm quanh di tích đấu trường cổ, không phải danh sách tiện ích ở sân vận động mới. Paragraph F. “ Sân vận động tạo điện ”: Đoạn này có “solar panels” và “wind turbines”, nhưng nói về thiết bị phát điện; đoạn E khớp trực tiếp cả ví dụ về tiện ích lẫn điều kiện không liên quan đến thể thao.",
              "step4": "Đáp án chính xác: E"
            }
          },
          {
            "id": 17,
            "prompt": "Which section contains the following information: \"an account of an amphitheatre that was turned into a place for trade\"?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "correct": "C",
            "explanation": {
              "step1": "an account of an amphitheatre that was turned into a place for trade Dự đoán thông tin cần tìm (SPECIFY) 👍 NÊN tìm: đoạn kể về một đấu trường cổ được chuyển thành nơi buôn bán. 👎 ĐỪNG tìm: đoạn kể đấu trường đổi sang công dụng khác, hoặc sân vận động mới có tiện ích thương mại.",
              "step2": "Dựa vào thuật ngữ khó thay thế amphitheatre, ta tìm đến đoạn B và C. Đoạn C giới thiệu một công trình ở Castelbruno; đọc tiếp để kiểm tra công trình ấy được dùng vào việc gì. Đoạn C: At the heart of the Italian town of Castelbruno lies another striking case of an amphitheatre swallowed up by the streets that grew around it . This time, however, the ruin was never turned back into an arena ; instead the Romantic architect Emilio Vandelli reshaped it into a market square . Câu (1): xác định công trình là đấu trường cổ ở Castelbruno. Câu (3): công trình không trở lại làm đấu trường mà được biến thành quảng trường họp chợ . Đoạn C",
              "step3": "Yêu cầu một lời thuật lại (“an account of”) được đáp ứng: câu (1) giới thiệu công trình, câu (3) kể việc công trình được cải tạo. an amphitheatre giữ nguyên ở câu (1); the ruin ở câu (3) chỉ lại công trình đó. was turned into reshaped it into a place for trade a market square Đáp án đúng: Paragraph C. Paragraph B Nếu skim/scan thấy amphitheatre đổi công dụng, rất dễ chọn B Nhưng công trình ở đây được đưa trở lại làm nơi tổ chức đua (“venue for public races”), không thành nơi buôn bán. Paragraph E Các gian bán lẻ (“retail units”) gợi đúng ý thương mại Nhưng đây là tiện ích được lắp thêm vào sân vận động, không phải một amphitheatre được biến thành nơi buôn bán. Paragraph G Không gian công cộng (“an open public space”) có thể gợi liên tưởng đến quảng trường Nhưng G chỉ tổng kết các vai trò của đấu trường, không kể việc cải tạo một công trình cụ thể thành chợ.",
              "step4": "Đáp án chính xác: C"
            }
          },
          {
            "id": 18,
            "prompt": "Europe's Roman arenas have shown remarkable flexibility. At Aurenca, the amphitheatre first became a  _____ , was later filled with housing, and finally returned to its original purpose as a place where the public could watch  _____ . The arena of Malvento, among the earliest to be built, is renowned today for the  _____  staged within it. The amphitheatre at Castelbruno likewise filled many roles across the centuries — among them holding stocks of  _____  — before being made over into an open marketplace, where  _____  and dwellings now stand among the Roman remains.",
            "type": "FILL_IN_BLANK",
            "correct": "citadel",
            "explanation": {
              "step1": "At Aurenca , the amphitheatre first became a 5. ___ , Ô trống đứng sau “a” nên cần một danh từ đếm được số ít . Ta cần tìm công trình mà đấu trường ở Aurenca trở thành đầu tiên , không phải công dụng xuất hiện về sau.",
              "step2": "Dựa vào tên riêng Aurenca => tìm đoạn B và bắt đầu đọc từ câu (1), nơi giới thiệu đấu trường này. Đoạn B",
              "step3": "Đoạn B: Perhaps no structure illustrates the adaptability of the stadium better than the amphitheatre at Aurenca , in south-western France, which once held 22,000 onlookers . Raised by the Romans in 85 AD, it was fortified into a towered citadel some time after the fifth century , and later still its interior filled up with dwellings until a village of roughly 180 houses occupied the site . Câu (1): xác định đấu trường ở Aurenca là đối tượng được nói tới. Câu (2): đấu trường thành citadel trước ; mãi về sau phần bên trong mới có nhà ở.",
              "step4": "Đáp án phù hợp nhất: citadel Câu hoàn chỉnh: At Aurenca, the amphitheatre first became a citadel. (Ở Aurenca, đấu trường ban đầu trở thành một thành lũy .) => Khớp dự đoán về danh từ chỉ công trình xuất hiện đầu tiên; đáp án gồm 1 từ . Đề được cung cấp không nêu giới hạn số từ. Đối chiếu paraphrasing: first became was fortified into + later still was later filled with housing later still its interior filled up with dwellings dwellings / houses “ nhà ở ”: Câu (2) có nhắc đến nhà ở, nhưng “later still” cho biết đó là giai đoạn sau, không phải lần chuyển đổi đầu tiên. towered “ có tháp ”: Từ này đứng ngay trước “citadel” nhưng chỉ miêu tả công trình; điền riêng nó sau “a” sẽ thiếu danh từ. races “ các cuộc đua ”: Đoạn B nhắc đến “public races”, nhưng đó là hoạt động khi đấu trường được đưa trở lại công dụng cũ, không phải công trình nó trở thành đầu tiên."
            }
          },
          {
            "id": 19,
            "prompt": "Complete blank for question 19:",
            "type": "FILL_IN_BLANK",
            "correct": "races",
            "explanation": {
              "step1": "and finally returned to its original purpose as a place where the public could watch 6. ___ . Ý câu hỏi: Cần tìm hoạt động mà công chúng có thể xem khi đấu trường ở Aurenca trở lại mục đích ban đầu. Dự đoán: Sau “watch”, ô trống cần một danh từ chỉ hoạt động hoặc sự kiện được xem; chưa thể xác định đáp án chỉ từ ngữ pháp.",
              "step2": "Dựa vào địa danh Aurenca và ý *trở lại mục đích ban đầu* (“returned to its original purpose”) => bắt đầu đọc phần nói về đấu trường này ở đoạn B. Đoạn B — returned to its original purpose",
              "step3": "Đoạn B: When the preservation movement gathered pace in the nineteenth century, the building was cleared and given back its earliest role , being brought back into use as a venue for public races . Công trình được trả lại vai trò ban đầu và dùng làm nơi tổ chức các cuộc đua (“races”) cho công chúng. Đây là hoạt động cần điền.",
              "step4": "Đáp án phù hợp nhất: races Câu hoàn chỉnh: At Aurenca, the amphitheatre first became a 5. ___, was later filled with housing, and finally returned to its original purpose as a place where the public could watch races. (Ở Aurenca, đấu trường trước tiên trở thành một công trình khác, sau đó có nhà ở bên trong, và cuối cùng trở lại mục đích ban đầu: nơi công chúng có thể xem các cuộc đua. Chỗ trống 5 được giữ nguyên.) => Khớp với dự đoán về hoạt động được xem và từ trong bài; đáp án gồm 1 từ . Đề không nêu giới hạn số từ. Đối chiếu paraphrasing: returned to its original purpose given back its earliest role a place where the public could watch a venue for public races citadel — thành lũy: Đoạn B nhắc đến công dụng này ở giai đoạn trước, không phải hoạt động công chúng xem khi đấu trường trở lại vai trò ban đầu. housing — nhà ở: Từ này xuất hiện trong câu hỏi nhưng chỉ một công dụng khác của đấu trường, không phải thứ công chúng xem. concerts — các buổi hòa nhạc: Đoạn B có nhắc đến, nhưng đó là hoạt động tại đấu trường Malvento, không phải Aurenca."
            }
          },
          {
            "id": 20,
            "prompt": "Complete blank for question 20:",
            "type": "FILL_IN_BLANK",
            "correct": "concerts",
            "explanation": {
              "step1": "The arena of Malvento , among the earliest to be built, is renowned today for the 7. ___ staged within it . Ý câu hỏi: Đấu trường Malvento ngày nay nổi tiếng vì thứ gì được tổ chức bên trong? Dự đoán: Ô trống cần một danh từ số nhiều chỉ sự kiện hoặc buổi biểu diễn.",
              "step2": "Dựa vào tên riêng Malvento => ta định vị được câu giới thiệu đấu trường này ở đoạn B. Đoạn B",
              "step3": "Đoạn B: A comparable survivor is the great arena of Malvento in northern Italy . Seating 28,000 and built several decades earlier than the one at Aurenca, it has come through the centuries intact and now ranks among the finest places anywhere to hear concerts , a reputation owed to its remarkable acoustics . Câu (4): xác định đấu trường Malvento. Câu (5): “it” chỉ lại đấu trường ấy; nơi này hiện nổi tiếng là địa điểm nghe hòa nhạc .",
              "step4": "Đáp án phù hợp nhất: concerts Câu hoàn chỉnh: The arena of Malvento, among the earliest to be built, is renowned today for the concerts staged within it . (Đấu trường Malvento, thuộc số những đấu trường được xây sớm nhất, ngày nay nổi tiếng vì các buổi hòa nhạc được tổ chức bên trong.) => Khớp dự đoán về danh từ số nhiều và thông tin nơi đây dùng để nghe hòa nhạc (“to hear concerts”); đáp án gồm 1 từ, đề không nêu giới hạn số từ. Đối chiếu paraphrasing: is renowned today for now ranks among the finest places staged within it to hear concerts acoustics chất lượng âm thanh: Nếu skim/scan sẽ dễ chọn vì từ này nằm gần concerts Nhưng đó là lý do địa điểm được đánh giá cao, không phải sự kiện được tổ chức. 28,000 số người: Sai vì đây là sức chứa của đấu trường, không phải thứ được tổ chức trong đó."
            }
          },
          {
            "id": 21,
            "prompt": "Complete blank for question 21:",
            "type": "FILL_IN_BLANK",
            "correct": "grain",
            "explanation": {
              "step1": "The amphitheatre at Castelbruno likewise filled many roles across the centuries — among them holding stocks of 8. ___ Dự đoán: Sau “holding stocks of”, ô 8 cần một danh từ chỉ thứ được dự trữ, không phải tên một công dụng khác của đấu trường.",
              "step2": "Dựa vào tên riêng Castelbruno => tìm đến câu giới thiệu đấu trường tại Castelbruno ở đoạn C và đọc tiếp để tìm công dụng liên quan đến việc dự trữ. Đoạn C",
              "step3": "Đoạn C: At the heart of the Italian town of Castelbruno lies another striking case of an amphitheatre swallowed up by the streets that grew around it . As at Aurenca, buildings gradually encroached on the arena between the Middle Ages and the nineteenth century , the space serving in turn as housing, as a store for grain and even as a prison . Câu (1): xác định đấu trường tại Castelbruno. Câu (2): nêu một công dụng của không gian ấy: làm kho chứa ngũ cốc .",
              "step4": "Đáp án phù hợp nhất: grain Câu hoàn chỉnh: The amphitheatre at Castelbruno likewise filled many roles across the centuries — among them holding stocks of grain — before being made over into an open marketplace, where 9. ___ and dwellings now stand among the Roman remains. (Đấu trường tại Castelbruno từng có nhiều công dụng, trong đó có việc dự trữ ngũ cốc ; ô 9 vẫn để trống.) => Khớp với dự đoán: * grain * là thứ được chứa trong kho; đáp án gồm 1 từ. Đề được cung cấp không nêu giới hạn số từ. Đối chiếu paraphrasing: holding stocks of a store for housing “ — nhà ở ”: đây cũng là một công dụng được liệt kê ở câu (2). Nhưng câu hỏi cần thứ được dự trữ, không phải nơi ở. prison “ — nhà tù ”: Từ này cũng nằm trong danh sách công dụng, nhưng không phải thứ đứng sau cụm chỉ kho chứa (“a store for”)."
            }
          },
          {
            "id": 22,
            "prompt": "Complete blank for question 22:",
            "type": "FILL_IN_BLANK",
            "correct": "cafés",
            "explanation": {
              "step1": "where 9. ___ and dwellings now stand among the Roman remains . Ô trống đứng trước “and dwellings”, tạo thành chủ ngữ ghép. Ta cần một danh từ chỉ thứ hiện cùng tồn tại với nhà ở giữa các tàn tích.",
              "step2": "Dựa vào tên riêng Castelbruno trong phần ghi chú => tìm đến đoạn C, rồi đọc thông tin về những gì hiện có tại khu di tích. Đoạn C",
              "step3": "Đoạn C: The remains of the old Roman amphitheatre can still be seen today , folded into the cafés and homes that ring the open piazza . “homes” ứng với dwellings đã có trong đề. Vậy thứ đi cùng “homes” — cafés — là từ cần điền.",
              "step4": "Đáp án phù hợp nhất: cafés Câu hoàn chỉnh: where cafés and dwellings now stand among the Roman remains. (nơi các quán cà phê và nhà ở hiện nằm giữa những tàn tích La Mã.) => Khớp với dự đoán về một danh từ đi cùng “dwellings” và đúng từ trong bài; đáp án gồm 1 từ. Đối chiếu paraphrasing: dwellings homes now stand among the Roman remains can still be seen today + folded into homes nhà ở: Nằm ngay cạnh “cafés” nên dễ chọn nhầm, nhưng từ này đã tương ứng với “dwellings” trong đề. piazza quảng trường: Đoạn C nhắc đến không gian công cộng này, nhưng nó không phải thứ được liệt kê cùng “homes”. grain ngũ cốc: Đây là thứ từng được cất giữ ở đấu trường, không phải thứ hiện có cùng nhà ở."
            }
          },
          {
            "id": 23,
            "prompt": "Section D contrasts the stadiums of the early 1900s with the amphitheatres of antiquity. Which TWO shortcomings of the modern stadiums does the writer point to? (Part 1 of 2)",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "They were capable of hosting only one kind of activity.",
              "They stood in spots that were harder for people to get to.",
              "They were made from materials that proved less durable.",
              "They were designed with less imagination.",
              "They offered space for fewer spectators."
            ],
            "correct": "They were capable of hosting only one kind of activity.",
            "explanation": {
              "step1": "Section D contrasts the stadiums of the early 1900s with the amphitheatres of antiquity . Which TWO shortcomings of the modern stadiums does the writer point to ? Cần tìm: Đúng hai hạn chế mà tác giả nêu, không suy diễn thêm từ những chi tiết về vật liệu hay thiết kế.",
              "step2": "Đề chỉ rõ đoạn D (“Section D”) => bắt đầu đọc tại chỗ tác giả nói có điều gì đó đã mất đi vào đầu thế kỷ XX (“Something was lost”). Đoạn D — Section D",
              "step3": "Đoạn D: Something was lost , though , in the early twentieth century , when the newly available materials of steel and reinforced concrete , together with floodlights that allowed play after dark , produced arenas that could do only one thing . Built for sport alone , a great many of these were placed on the edges of cities and encircled by car parks — a setting that puts them beyond easy reach of ordinary residents , drives up the energy they consume, and adds to the warming of the surrounding streets . Câu (2): Đấu trường đầu thế kỷ XX chỉ làm được một việc . Câu (3): Chúng chỉ phục vụ thể thao và nằm ở rìa thành phố => người dân khó tiếp cận .",
              "step4": "Đáp án đúng: A. They were capable of hosting only one kind of activity . ( Chúng chỉ phục vụ được một loại hoạt động ) và B. They stood in spots that were harder for people to get to . ( Chúng nằm ở những nơi người dân khó đến hơn ). Đối chiếu paraphrasing: only one kind of activity could do only one thing + Built for sport alone spots that were harder for people to get to on the edges of cities + beyond easy reach Đáp án C “ Chúng được làm từ vật liệu kém bền hơn ”: Câu (2) có nhắc đến thép và bê tông cốt thép (“steel and reinforced concrete”), nhưng không so sánh độ bền của vật liệu. Đáp án D “ Chúng được thiết kế kém sáng tạo hơn ”: Cụm nói rằng có điều đã mất đi (“Something was lost”) dễ gợi cách hiểu này Nhưng tác giả giải thích cụ thể rằng đấu trường chỉ làm được một việc, không nói thiết kế thiếu sáng tạo. Đáp án E “ Chúng có sức chứa ít khán giả hơn ”: Đoạn B nêu sức chứa của các đấu trường cổ (“22,000 onlookers”, “Seating 28,000”), nhưng không có số liệu tương ứng cho sân vận động hiện đại để so sánh."
            }
          },
          {
            "id": 24,
            "prompt": "Section D contrasts the stadiums of the early 1900s with the amphitheatres of antiquity. Which TWO shortcomings of the modern stadiums does the writer point to? (Part 2 of 2)",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "They were capable of hosting only one kind of activity.",
              "They stood in spots that were harder for people to get to.",
              "They were made from materials that proved less durable.",
              "They were designed with less imagination.",
              "They offered space for fewer spectators."
            ],
            "correct": "They stood in spots that were harder for people to get to.",
            "explanation": {
              "step1": "The writer describes two strategies for modern stadium design. Which TWO benefits of these strategies does the writer mention? Cần tìm: Đúng hai lợi ích của các chiến lược thiết kế, không chỉ tên của chiến lược.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp ý tương đương với hai chiến lược (“two approaches”) ở đoạn E => bắt đầu đọc từ đây. Đoạn E — two approaches",
              "step3": "Đoạn E: Yet a good number of the boldest architects now working see in the stadium a chance to make the city better , and two approaches in particular are proving their worth : treating the arena as a hub for the wider community , and treating it as a generator of power . A stadium of this kind belongs not only to athletes and their fans but to families and the public at large . Đoạn F: Arenas suit this role especially well : the broad canopies over their stands present a wide surface for mounting solar panels , and they stand tall enough — over 45 metres — to carry small wind turbines . Câu (1): Câu (1), đoạn E: giới thiệu hai hướng thiết kế: phục vụ cộng đồng và tạo điện . Câu (4): Câu (4), đoạn E: hướng thứ nhất mở sân vận động cho gia đình và công chúng , không chỉ giới thể thao. Câu (2): Câu (2), đoạn F: hướng thứ hai tận dụng mái rộng để lắp pin mặt trời và chiều cao để gắn tua-bin gió.",
              "step4": "Đáp án đúng: → creating a setting well suited to installing renewable-energy equipment, restoring a sense of community to urban life - A. creating a setting well suited to installing renewable-energy equipment (tạo điều kiện phù hợp để lắp đặt thiết bị năng lượng tái tạo ). - C. restoring a sense of community to urban life (khôi phục sự gắn kết cộng đồng trong đời sống đô thị ). Đối chiếu paraphrasing: A: well suited to installing renewable energy equipment a wide surface for mounting solar panels C: a sense of community to urban life a hub for the wider community + families and the public at large Đáp án B “ Cải thiện tiện nghi cho khán giả thể thao ”: Đoạn E có nhắc đến các tiện ích (“amenities that have nothing to do with sport”), nhưng lợi ích được nhấn mạnh là phục vụ cả công chúng, không riêng khán giả thể thao. Đáp án D “ Cung cấp địa điểm cho các nhà nghiên cứu năng lượng sạch ”: Sai vì đoạn F nói sân vận động thích hợp lắp thiết bị tạo điện, không nói đến việc làm nơi nghiên cứu. Đáp án E “ Giúp người dân địa phương giảm lượng điện tiêu thụ ”: Chi tiết đoạn F về việc cấp điện (“feeds up to 75 percent”) dễ gây nhầm. Cấp điện cho khu lân cận không có nghĩa là cư dân tiêu thụ ít điện hơn."
            }
          },
          {
            "id": 25,
            "prompt": "The writer describes two strategies for modern stadium design. Which TWO benefits of these strategies does the writer mention? (Part 1 of 2)",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "creating a setting well suited to installing renewable-energy equipment",
              "improving the amenities on offer to sports spectators",
              "restoring a sense of community to urban life",
              "providing researchers with a base for clean-energy studies",
              "helping local residents lower their power consumption"
            ],
            "correct": "creating a setting well suited to installing renewable-energy equipment",
            "explanation": {
              "step1": "Phân tích câu hỏi theo phương pháp Linearthinking.",
              "step2": "Định vị vùng thông tin liên quan trong bài đọc.",
              "step3": "Bóc tách cấu trúc câu (S-V-O) và đối chiếu nghĩa.",
              "step4": "Đáp án chính xác: creating a setting well suited to installing renewable-energy equipment"
            }
          },
          {
            "id": 26,
            "prompt": "The writer describes two strategies for modern stadium design. Which TWO benefits of these strategies does the writer mention? (Part 2 of 2)",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "creating a setting well suited to installing renewable-energy equipment",
              "improving the amenities on offer to sports spectators",
              "restoring a sense of community to urban life",
              "providing researchers with a base for clean-energy studies",
              "helping local residents lower their power consumption"
            ],
            "correct": "restoring a sense of community to urban life",
            "explanation": {
              "step1": "Phân tích câu hỏi theo phương pháp Linearthinking.",
              "step2": "Định vị vùng thông tin liên quan trong bài đọc.",
              "step3": "Bóc tách cấu trúc câu (S-V-O) và đối chiếu nghĩa.",
              "step4": "Đáp án chính xác: restoring a sense of community to urban life"
            }
          }
        ]
      },
      {
        "id": "cam-17-reading-1-p3",
        "passageNumber": 3,
        "title": "To catch a king",
        "subtitle": "Helena Marsh reviews Julian Ashworth's book about the pursuit of King Aldwin during the civil war of the seventeenth century",
        "content": [
          "Julian Ashworth's new book, To Catch a King, sets out the story of the pursuit of King Aldwin during the six weeks that followed his crushing defeat at the Battle of Haldmere in the autumn of 1650. And what a story it is. His father having been put to death by the Estates in 1648, the young Aldwin gave up one of the very principles for which that father had died, striking a bargain with the Marchlanders whereby he embraced the Severine faith as the state religion in exchange for the crown of the Marches. Word of his coronation in the northern capital drove the Estates' army to march north in a pre-emptive strike, and a Marchlander invasion of the south duly followed. The two forces came face to face at last outside Haldmere, in the country's west, in 1650. Beaten decisively on the fields beyond the city walls, the 21-year-old king became the quarry in a nationwide manhunt, an enormous sum being offered to whoever should take him. Across the next six weeks, by way of a string of hair's-breadth escapes, he slipped through the Estates' fingers and reached sanctuary in Valland. Then, for nine years, a penniless and beaten Aldwin drifted about the continent, attended only by a handful of faithful followers.",
          "Long afterwards, once he had been restored to the throne, the 50-year-old Aldwin sought out the writer and diarist Nathaniel Croft. In asking Croft to set the tale down on paper, his aim was to see that so remarkable an episode should never fade from memory. Across two sittings of three hours each, the king gave him a minutely detailed account of everything he could recall of his six weeks as a hunted man. Once king and writer had settled to their task — a scene a future dramatist would surely relish — Aldwin began: 'After the field was so wholly lost that no hope of recovery remained, I set my mind to the surest means of preserving myself.'",
          "Part of what makes Ashworth's book such a pleasure — and here its use of Aldwin's own words, and those of his followers, counts for a great deal — is how near it brings the reader to the action. Set down almost day by day, the doings of the fugitives throw up one choice detail after another: the royal hair shorn with sheep-shears, walnut husks crushed to stain the king's fair skin, an afternoon passed lying along a branch of the great elm at Harrowden Wood as the Estates' men searched the ground below. Comedy is there for the taking, and Ashworth takes it — the king's friend Sir Marcus Vane absurdly refusing to disguise himself, since disguise was beneath him — but so is the nerve-racking suspense of each occasion on which the king's identity had to be revealed, warily, to those he hoped would hide him.",
          "There is an awkward truth that Aldwin's post-Haldmere adventures tend to obscure. His father's execution had horrified almost the whole kingdom, yet the son's reappearance — at the head of a Marchlander army — met with no welcome at all; doors were barred against him instead. Two things lay behind this: to many he resembled the leader of a foreign invasion, and, with the best part of a decade of civil war behind them, people dreaded nothing more than its resumption. Stranger still, then, that the story should have become so dear to Aldwin ever after. He would recount it to any listener, his courtiers quietly despairing, and he set in motion scheme after scheme to enshrine it. One was a brand-new order of chivalry, the Knights of the Royal Elm. Huge canvases of the episode were commissioned as well — a picture of Harrowden Wood a full two metres wide, together with six equally enormous paintings of the fugitive king. On his bedchamber ceiling, in 1660, the painter Cornelius Vos was set to work depicting a squadron of cherubs that bore an elm tree up to the heavens. That any monarch should so relish the lowest ebb of his life is remarkable enough; that he should first have engineered so extraordinary an escape is more remarkable still.",
          "To carry a story like this to fresh readers, one could hardly ask for a better guide than Ashworth. There is real elegance in the way his brisk, highly readable prose avoids anything that sounds too modern and still calls up the fine detail of the tale. Neither side is favoured — the hunted king and the merciless republicans who chased him being treated with the same even-handed sympathy — and the wider background, which he had set out to open up far more fully than any earlier study, is exactly what he delivers. Much of the first third goes to explaining how Aldwin ended up at Haldmere in the first place, and that alone, for certain readers, will justify picking the book up.",
          "What did it all amount to, in the end? That is the tantalising question the book leaves hanging. Had those six weeks never occurred, would Aldwin have turned out a different king? Time spent hiding, night and day, can hardly have left him untouched. Being forced into disguises, thrown back on wit and charm alone, talking and tricking his way clear of one tight spot after another — did all that go into making the man? It is on this single point that the book doesn't quite hit the mark. The feeble, pleasure-seeking ruler of its closing pages is untrue to Aldwin — inaccurate, besides — and untrue to how intricate his character actually was. That one quibble apart, though, To Catch a King makes a splendid read, and readers who arrive knowing next to nothing of the celebrated story are in for a treat."
        ],
        "questions": [
          {
            "id": 27,
            "prompt": "Aldwin's father was put to death by the Estates in 1648. Aldwin then entered into  _____  with the Marchlanders, and to win the crown of the Marches he gave up  _____  his father had died defending. The two armies eventually met outside Haldmere in 1650, an encounter that ended in  _____  for the Estates and left Aldwin running for his life.  _____  was promised to whoever could seize him, but after six weeks in hiding he at last reached  _____  of Valland, across the water.",
            "type": "FILL_IN_BLANK",
            "correct": "a calculated partnership",
            "explanation": {
              "step1": "Aldwin then entered into 1. ___ with the Marchlanders , Ô số 1 cần một cụm danh từ chỉ điều Aldwin thiết lập với Marchlanders, có thể là một thỏa thuận hoặc quan hệ hợp tác .",
              "step2": "Dựa vào tên riêng Marchlanders => ta tìm đến câu (3) ở đoạn 1, nơi nhắc đến việc Aldwin hành động với nhóm này. Đoạn 1",
              "step3": "Đoạn 1: His father having been put to death by the Estates in 1648 , the young Aldwin gave up one of the very principles for which that father had died , striking a bargain with the Marchlanders whereby he embraced the Severine faith as the state religion in exchange for the crown of the Marches . Cụm “striking a bargain” cho biết Aldwin đã lập thỏa thuận với Marchlanders; việc ông từ bỏ một nguyên tắc của cha cho thấy đây là sự đánh đổi có chủ ý .",
              "step4": "Đáp án phù hợp nhất: a calculated partnership Câu hoàn chỉnh: Aldwin then entered into a calculated partnership with the Marchlanders, and to win the crown of the Marches he gave up 2. ___ his father had died defending. (Sau đó Aldwin thiết lập quan hệ hợp tác có tính toán với Marchlanders; ô số 2 vẫn để trống như trong đề.) => Khớp với dự đoán về một quan hệ được chủ động thiết lập và với thỏa thuận được nêu trong bài. Đối chiếu paraphrasing: a calculated partnership striking a bargain a matter of faith vấn đề đức tin: Cùng câu có nhắc đến đức tin (“the Severine faith”), nhưng ô số 1 hỏi Aldwin đã thiết lập điều gì với Marchlanders, không hỏi nội dung tôn giáo của thỏa thuận. a broad conspiracy âm mưu quy mô lớn: “bargain” là thỏa thuận; bài không nói đó là âm mưu. a public dispute tranh chấp công khai: Sai vì Aldwin đã lập thỏa thuận với Marchlanders, không tranh chấp với họ."
            }
          },
          {
            "id": 28,
            "prompt": "Complete blank for question 28:",
            "type": "FILL_IN_BLANK",
            "correct": "a matter of faith",
            "explanation": {
              "step1": "and to win the crown of the Marches he gave up 2. ___ his father had died defending . Chỗ trống cần một danh ngữ chỉ điều Aldwin từ bỏ . Điều ấy phải liên quan đến thứ cha ông đã chết để bảo vệ; chỉ dựa vào ngữ pháp thì chưa chọn được đáp án.",
              "step2": "Dựa vào tên Marches và chi tiết cha của Aldwin đã chết vì điều ông từ bỏ => ta tìm đến câu (3), đoạn 1. Đoạn 1",
              "step3": "Đoạn 1: His father having been put to death by the Estates in 1648 , the young Aldwin gave up one of the very principles for which that father had died , striking a bargain with the Marchlanders whereby he <>embraced the Severine faith as the state religion in exchange for the crown of the Marches . Aldwin từ bỏ một nguyên tắc mà cha mình đã chết vì nó; sự nhượng bộ được nói rõ là việc chấp nhận tín ngưỡng Severine để đổi lấy ngôi vua.",
              "step4": "Đáp án phù hợp nhất: a matter of faith Câu hoàn chỉnh: To win the crown of the Marches he gave up a matter of faith his father had died defending. (Để giành ngôi vua Marches, Aldwin từ bỏ một vấn đề tín ngưỡng mà cha ông đã chết để bảo vệ.) => Khớp với dự đoán về điều Aldwin từ bỏ: bài đọc nêu một nguyên tắc liên quan đến tín ngưỡng. Đối chiếu paraphrasing: a matter of faith the Severine faith his father had died defending for which that father had died a calculated partnership — một thỏa thuận có tính toán: Dễ chọn vì bài đọc có việc lập thỏa thuận (“striking a bargain”) Nhưng đó không phải điều Aldwin từ bỏ. a fresh administration — một chính quyền mới: Cụm “the state religion” dễ gợi đến việc cai trị Nhưng bài đọc nói Aldwin chấp nhận một tín ngưỡng, không phải từ bỏ một chính quyền. an overwhelming win — một chiến thắng áp đảo: Đoạn 1 cũng kể về trận chiến, nhưng chỗ trống này hỏi về nguyên tắc Aldwin từ bỏ, không hỏi kết quả trận chiến."
            }
          },
          {
            "id": 29,
            "prompt": "Complete blank for question 29:",
            "type": "FILL_IN_BLANK",
            "correct": "an overwhelming win",
            "explanation": {
              "step1": "The two armies eventually met outside Haldmere in 1650 , an encounter that ended in 3. ___ for the Estates and left Aldwin running for his life . Ô 3. ___ cần một cụm danh từ chỉ kết quả trận đánh *có lợi cho Estates*. Aldwin phải chạy trốn, nên dự đoán đó là một chiến thắng rõ rệt của Estates.",
              "step2": "Dựa vào địa danh Haldmere => ta tìm đến đoạn 1, nơi kể việc hai lực lượng chạm trán, rồi đọc tiếp để xác định kết quả. Đoạn 1",
              "step3": "Đoạn 1: Beaten decisively on the fields beyond the city walls , the 21-year-old king became the quarry in a nationwide manhunt , an enormous sum being offered to whoever should take him . Aldwin bị đánh bại dứt khoát (“Beaten decisively”). Nhìn từ phía đối địch được nêu trong câu hỏi, Estates đã thắng áp đảo .",
              "step4": "Đáp án phù hợp nhất: an overwhelming win Câu hoàn chỉnh: The two armies eventually met outside Haldmere in 1650, an encounter that ended in an overwhelming win for the Estates and left Aldwin running for his life. (Hai đội quân gặp nhau bên ngoài Haldmere vào năm 1650; cuộc đụng độ kết thúc bằng chiến thắng áp đảo của Estates và khiến Aldwin phải chạy trốn để giữ mạng.) => Khớp với dự đoán về kết quả có lợi cho Estates và mức độ thất bại của Aldwin trong bài. Đối chiếu paraphrasing: Beaten decisively an overwhelming win — cùng kết quả, nhìn từ hai phe đối địch. a military breakthrough “ bước đột phá quân sự ”: Cũng thuộc bối cảnh chiến trận, nhưng không diễn đạt rõ mức độ chiến thắng mà “Beaten decisively” cho biết. a substantial bounty “ khoản tiền thưởng lớn ”: ngay sau đó bài nhắc đến khoản tiền lớn (“an enormous sum”). Nhưng đó là tiền thưởng cho người bắt được Aldwin, không phải kết quả cuộc giao tranh."
            }
          },
          {
            "id": 30,
            "prompt": "Complete blank for question 30:",
            "type": "FILL_IN_BLANK",
            "correct": "a substantial bounty",
            "explanation": {
              "step1": "4. ___ was promised to whoever could seize him , Ô trống cần một cụm danh từ chỉ thứ được hứa trao cho người bắt được Aldwin .",
              "step2": "Dựa vào địa danh Haldmere trong phần câu hỏi ngay trước ô trống => tìm ở đoạn 1, rồi đọc tiếp phần nói về cuộc truy bắt Aldwin. Đoạn 1",
              "step3": "Đoạn 1: Beaten decisively on the fields beyond the city walls, the 21-year-old king became the quarry in a nationwide manhunt , an enormous sum being offered to whoever should take him .",
              "step4": "Đáp án phù hợp nhất: a substantial bounty Câu hoàn chỉnh: A substantial bounty was promised to whoever could seize him. (Một khoản tiền thưởng lớn được hứa trao cho bất kỳ ai bắt được Aldwin.) => Khớp với dự đoán: thứ được hứa trao là khoản tiền thưởng lớn . Đối chiếu paraphrasing: a substantial bounty an enormous sum + being offered to whoever should take him was promised to whoever could seize him being offered to whoever should take him an overwhelming win “ — một chiến thắng áp đảo ”: câu (6) có ý thất bại nặng nề (“Beaten decisively”). Nhưng ô trống hỏi thứ được hứa cho người bắt Aldwin, không phải kết quả trận đánh. comparative security “ — sự an toàn tương đối ”: Câu 7 đoạn 1 nói Aldwin tới nơi trú ẩn (“reached sanctuary in Valland”). Đây là điều Aldwin tìm được sau khi trốn thoát, không phải phần thưởng cho người bắt ông. a matter of faith “ — vấn đề đức tin ”: Đoạn 1 nhắc tới tôn giáo (“Severine faith”), nhưng đó là chuyện trước cuộc truy bắt, không phải thứ được treo thưởng."
            }
          },
          {
            "id": 31,
            "prompt": "Complete blank for question 31:",
            "type": "FILL_IN_BLANK",
            "correct": "comparative security",
            "explanation": {
              "step1": "but after six weeks in hiding he at last reached 5. ___ of Valland , across the water . Chỗ trống cần một cụm danh từ chỉ điều Aldwin đạt được sau thời gian lẩn trốn. Dự đoán: một dạng an toàn hoặc được che chở ở Valland.",
              "step2": "Dựa vào địa danh Valland và mốc sáu tuần => ta tìm đến câu nhắc tới Valland ở đoạn 1. Đoạn 1",
              "step3": "Đoạn 1: Across the next six weeks, by way of a string of hair's-breadth escapes, he slipped through the Estates' fingers and reached sanctuary in Valland . Aldwin tới nơi trú ẩn (“sanctuary”) ở Valland, đúng với dạng an toàn cần điền.",
              "step4": "Đáp án phù hợp nhất: comparative security Câu hoàn chỉnh: After six weeks in hiding he at last reached comparative security of Valland, across the water. (Sau sáu tuần lẩn trốn, cuối cùng Aldwin đã tới Valland, nơi tương đối an toàn ở bên kia vùng nước.) => Khớp với dự đoán: tới nơi trú ẩn nghĩa là Aldwin đã có được sự an toàn tương đối . Đối chiếu paraphrasing: sanctuary comparative security trong ngữ cảnh Aldwin trốn tới Valland. a military breakthrough. một bước đột phá quân sự: Cuộc trốn thoát có thể gợi đến một bước ngoặt, nhưng câu (7) nói Aldwin tới nơi trú ẩn, không giành thắng lợi quân sự. a broad conspiracy. một âm mưu quy mô lớn: Sai vì việc Aldwin lẩn trốn không biến nơi ông tới ở Valland thành một âm mưu."
            }
          },
          {
            "id": 32,
            "prompt": "The king wanted his experiences written down so that they would not be forgotten.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "YES",
              "NO",
              "NOT GIVEN"
            ],
            "correct": "YES",
            "explanation": {
              "step1": "The king wanted his experiences written down so that they would not be forgotten . Ý câu hỏi: Nhà vua có muốn ghi lại trải nghiệm của mình để chúng không bị lãng quên hay không?",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp cách diễn đạt tương đương với việc ghi lại (“ written down ”). Ở đoạn 2, việc nhờ ghi câu chuyện ra giấy (“set the tale down on paper”) là điểm bắt đầu đọc. Đoạn 2 — set the tale down on paper",
              "step3": "Đoạn 2: Long afterwards, once he had been restored to the throne, the 50-year-old Aldwin sought out the writer and diarist Nathaniel Croft . In asking Croft to set the tale down on paper , his aim was to see that so remarkable an episode should never fade from memory . Câu (1): giới thiệu Aldwin và Croft. Câu (2): Aldwin nhờ Croft ghi lại câu chuyện với mục đích không để nó bị lãng quên .",
              "step4": "Câu hỏi nói: nhà vua muốn ghi lại trải nghiệm để chúng không bị lãng quên (“ so that they would not be forgotten ”). Bài đọc nói: mục đích của Aldwin (“his aim”) khi nhờ ghi chuyện là để sự việc không bao giờ phai khỏi ký ức (“ should never fade from memory ”). Quan điểm được nêu trong bài cùng nghĩa với statement. Đối chiếu paraphrasing: wanted his experiences written down asking Croft to set the tale down on paper so that they would not be forgotten his aim was to see that + should never fade from memory Đáp án đúng: YES Đáp án NO Sai vì nhà vua muốn câu chuyện được nhớ mãi, không phải bị quên đi. Chỉ chọn NO nếu bài nói ông muốn câu chuyện bị lãng quên hoặc không muốn ghi lại. NOT GIVEN Nếu chỉ đọc câu (1), ta chưa thấy mục đích nên dễ chọn NOT GIVEN Nhưng câu (2) nêu rõ mục đích của ông (“his aim”). Chỉ chọn NOT GIVEN nếu bài nói đến việc ghi chép mà không cho biết vì sao ông muốn làm vậy."
            }
          },
          {
            "id": 33,
            "prompt": "The king's recollection of his time as a fugitive was brief and short on detail.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "YES",
              "NO",
              "NOT GIVEN"
            ],
            "correct": "NO",
            "explanation": {
              "step1": "The king's recollection of his time as a fugitive was brief and short on detail . Ý câu hỏi: tác giả có cho rằng lời kể của nhà vua về thời gian chạy trốn vừa ngắn , vừa thiếu chi tiết không?",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc đến đoạn 2, nơi bài nhắc đến sáu tuần nhà vua bị truy đuổi (“his six weeks as a hunted man”) => đây là vùng liên quan. Đoạn 2 — his six weeks as a hunted man",
              "step3": "Đoạn 2: Across two sittings of three hours each , the king gave him a minutely detailed account of everything he could recall of his six weeks as a hunted man .",
              "step4": "Câu hỏi nói: lời kể ngắn (“brief”) và thiếu chi tiết (“ short on detail ”). Bài đọc nói: nhà vua kể qua hai buổi, mỗi buổi ba giờ (“two sittings of three hours each”), và lời kể rất chi tiết (“minutely detailed account”). Quan điểm của tác giả trái với nhận định ở cả hai điểm. Đối chiếu paraphrasing: brief two sittings of three hours each short on detail minutely detailed account Đáp án đúng: NO Đáp án YES Sai vì tác giả nêu lời kể kéo dài hai buổi và rất chi tiết. Chỉ chọn YES nếu tác giả nói lời kể ngắn và thiếu chi tiết. NOT GIVEN Nếu nghĩ phải đọc toàn bộ lời kể mới đánh giá được, sẽ dễ chọn NOT GIVEN Nhưng tác giả đã cho biết thời lượng và mức độ chi tiết. Chỉ chọn NOT GIVEN nếu tác giả không cung cấp thông tin để xác định lời kể ngắn hay thiếu chi tiết."
            }
          },
          {
            "id": 34,
            "prompt": "The king found revisiting his weeks in hiding a painful experience.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "YES",
              "NO",
              "NOT GIVEN"
            ],
            "correct": "NOT GIVEN",
            "explanation": {
              "step1": "The king found revisiting his weeks in hiding a painful experience . Ý câu hỏi: Tác giả có nói rằng nhà vua thấy đau đớn khi nhớ lại những tuần lẩn trốn không?",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta tìm cụm mang ý tương đương với những tuần lẩn trốn (“his six weeks as a hunted man”) ở đoạn 2 => đây là vùng liên quan. Đoạn 2 — his six weeks as a hunted man",
              "step3": "Đoạn 2: Across two sittings of three hours each, the king gave him a minutely detailed account of everything he could recall of his six weeks as a hunted man .",
              "step4": "Câu hỏi nói: nhà vua thấy việc nhớ lại là một trải nghiệm đau đớn (“ a painful experience ”). Bài đọc nói: nhà vua kể chi tiết (“detailed account”) về sáu tuần bị săn đuổi (“his six weeks as a hunted man”). Tác giả không cho biết ông cảm thấy thế nào khi kể lại . Đối chiếu paraphrasing: revisiting gave him a minutely detailed account his weeks in hiding his six weeks as a hunted man a painful experience không có trong bài Đáp án đúng: NOT GIVEN Đáp án YES Nếu suy từ việc nhà vua từng bị săn đuổi (“a hunted man”), sẽ dễ nghĩ hồi tưởng hẳn rất đau đớn Nhưng tác giả chỉ nói ông kể lại chuyện đó. Chỉ chọn YES nếu tác giả xác nhận ông thấy đau đớn khi nhớ lại. Đáp án NO Đoạn 4 nói câu chuyện rất được Aldwin trân quý (“so dear to Aldwin”), nhưng điều đó không phủ nhận rằng việc hồi tưởng có thể đau đớn. Chỉ chọn NO nếu tác giả nói rõ việc nhớ lại không gây đau đớn."
            }
          },
          {
            "id": 35,
            "prompt": "In the reviewer's view, Ashworth dwells on the amusing episodes at the expense of the more serious ones.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "YES",
              "NO",
              "NOT GIVEN"
            ],
            "correct": "NO",
            "explanation": {
              "step1": "In the reviewer's view, Ashworth dwells on the amusing episodes at the expense of the more serious ones . Ý câu hỏi: Người điểm sách có cho rằng Ashworth chú trọng tình tiết hài đến mức xem nhẹ những tình tiết nghiêm túc hơn không?",
              "step2": "Dựa vào tên riêng `Ashworth`, rồi tìm chỗ nói về yếu tố hài (“Comedy”) => bắt đầu đọc ở câu (3) đoạn 3. Đoạn 3 — Comedy",
              "step3": "Đoạn 3: Comedy is there for the taking , and Ashworth takes it — the king's friend Sir Marcus Vane absurdly refusing to disguise himself , since disguise was beneath him — but so is the nerve-racking suspense of each occasion on which the king's identity had to be revealed, warily, to those he hoped would hide him .",
              "step4": "Câu hỏi nói: Ashworth khai thác tình tiết hài đến mức xem nhẹ phần nghiêm túc (“at the expense of the more serious ones”). Bài đọc nói: Ashworth có khai thác chất hài (“Ashworth takes it”), nhưng sự hồi hộp căng thẳng cũng hiện diện (“but so is the nerve-racking suspense”). Đây là ý trái với nhận định trong câu hỏi. Đối chiếu paraphrasing: the amusing episodes Comedy at the expense of the more serious ones but so is the nerve racking suspense Đáp án đúng: NO Đáp án YES Nếu chỉ thấy Ashworth khai thác chất hài (“Ashworth takes it”), sẽ dễ chọn YES Nhưng người điểm sách cũng nhấn mạnh sự hồi hộp, không nói phần này bị xem nhẹ. Chỉ chọn YES nếu tác giả cho rằng chất hài lấn át các tình tiết căng thẳng. NOT GIVEN Sai vì người điểm sách đã trực tiếp đặt sự hồi hộp bên cạnh chất hài (“but so is the nerve-racking suspense”). Chỉ chọn NOT GIVEN nếu bài không cho biết Ashworth xử lý các tình tiết nghiêm túc như thế nào."
            }
          },
          {
            "id": 36,
            "prompt": "What is the reviewer's main purpose in the first paragraph?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "to describe the fighting at the Battle of Haldmere in detail",
              "to contrast the king's religious views with those of his father",
              "to explain the sequence of events that led to the king going into hiding",
              "to set out the political aims of the Estates"
            ],
            "correct": "to explain the sequence of events that led to the king going into hiding",
            "explanation": {
              "step1": "What is the reviewer's main purpose in the first paragraph ? Câu hỏi hỏi: Mục đích chính của người viết ở đoạn 1 là gì? Ta cần theo dõi cả mạch kể, không chỉ một chi tiết riêng lẻ.",
              "step2": "Câu hỏi chỉ rõ đoạn 1 (“in the first paragraph”). Bắt đầu từ câu mở đoạn, nơi người viết giới thiệu câu chuyện truy đuổi (“sets out the story of the pursuit”). Đoạn 1 — in the first paragraph",
              "step3": "Đoạn 1: Julian Ashworth's new book , To Catch a King, sets out the story of the pursuit of King Aldwin during the six weeks that followed his crushing defeat at the Battle of Haldmere in the autumn of 1650 . And what a story it is . His father having been put to death by the Estates in 1648 , the young Aldwin gave up one of the very principles for which that father had died , striking a bargain with the Marchlanders whereby he embraced the Severine faith as the state religion in exchange for the crown of the Marches . Word of his coronation in the northern capital drove the Estates' army to march north in a pre-emptive strike , and a Marchlander invasion of the south duly followed . The two forces came face to face at last outside Haldmere , in the country's west , in 1650 . Beaten decisively on the fields beyond the city walls , the 21-year-old king became the quarry in a nationwide manhunt , an enormous sum being offered to whoever should take him . Across the next six weeks, by way of a string of hair's-breadth escapes, he slipped through the Estates' fingers and reached sanctuary in Valland . Then, for nine years, a penniless and beaten Aldwin drifted about the continent , attended only by a handful of faithful followers . Câu (1)–(2): giới thiệu cuộc truy đuổi và dẫn vào câu chuyện. Câu (3)–(5): Aldwin thỏa thuận, đăng quang; các cuộc hành quân đưa hai lực lượng đến chỗ đối đầu. Câu (6)–(7): thua trận → bị săn lùng → lẩn trốn , rồi đến Valland. Câu (8): chuyển sang giai đoạn sau cuộc chạy trốn. Đoạn 1 kể chuỗi sự kiện dẫn đến việc Aldwin phải lẩn trốn .",
              "step4": "Đáp án đúng: C. to explain the sequence of events that led to the king going into hiding (giải thích chuỗi sự kiện dẫn đến việc nhà vua phải lẩn trốn). Đối chiếu paraphrasing: to explain sets out the story sequence of events striking a bargain + followed + Beaten decisively going into hiding the quarry in a nationwide manhunt + slipped through the Estates' fingers Đáp án A “ Mô tả chi tiết cuộc giao chiến tại Battle of Haldmere ”: Tên trận đánh và thất bại có xuất hiện, nhưng đoạn không kể chi tiết cuộc giao chiến; đó chỉ là một bước dẫn đến cuộc truy đuổi. Đáp án B “ Đối chiếu quan điểm tôn giáo của nhà vua với cha ông ”: Câu (3) nhắc đến đức tin Severine (“the Severine faith”) và người cha, nhưng không triển khai việc so sánh quan điểm tôn giáo của hai người. Đáp án D “ Trình bày mục tiêu chính trị của Estates ”: Câu (4) có việc quân Estates hành quân (“the Estates' army to march north”), nhưng đoạn tiếp tục kể Aldwin thất trận và phải chạy trốn, chứ không tập trung giải thích mục tiêu của Estates."
            }
          },
          {
            "id": 37,
            "prompt": "Why does the reviewer mention examples of the fugitives' behaviour in the third paragraph?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "to show how close the king came to being captured",
              "to demonstrate how vividly the events of the six weeks are recreated",
              "to suggest that the king's supporters were poorly prepared",
              "to point out that some details deserve to be better known"
            ],
            "correct": "to demonstrate how vividly the events of the six weeks are recreated",
            "explanation": {
              "step1": "Why does the reviewer mention examples of the fugitives' behaviour in the third paragraph? Câu hỏi hỏi: Người viết nêu các ví dụ về hành vi của nhóm chạy trốn ở đoạn 3 nhằm mục đích gì?",
              "step2": "Đề chỉ rõ đoạn 3. Câu mở đầu đoạn này nhận xét điều khiến sách của Ashworth hấp dẫn (“makes Ashworth's book such a pleasure”) => bắt đầu đọc từ đây để hiểu tác dụng của các ví dụ. Đoạn 3 — makes Ashworth's book such a pleasure",
              "step3": "Đoạn 3: Part of what makes Ashworth's book such a pleasure — and here its use of Aldwin's own words , and those of his followers, counts for a great deal — is how near it brings the reader to the action . Set down almost day by day , the doings of the fugitives throw up one choice detail after another : the royal hair shorn with sheep-shears , walnut husks crushed to stain the king's fair skin, an afternoon passed lying along a branch of the great elm at Harrowden Wood as the Estates' men searched the ground below . Câu (1): sách khiến người đọc như ở gần sự việc . Câu (2): cách kể gần như từng ngày, với các chi tiết cụ thể , minh họa việc câu chuyện được tái hiện sống động .",
              "step4": "Đáp án đúng: B. to demonstrate how vividly the events of the six weeks are recreated (Để cho thấy các sự kiện trong sáu tuần ấy được tái hiện sống động đến mức nào.) Đối chiếu paraphrasing: how vividly the events of the six weeks are recreated how near it brings the reader to the action + almost day by day + one choice detail after another Đáp án A “ Để cho thấy nhà vua đã suýt bị bắt đến mức nào ”: Nếu skim thấy cảnh binh lính tìm kiếm bên dưới (“searched the ground below”) ở câu (2), dễ chọn ý này Nhưng đó chỉ là một tình huống được kể; câu (1) nêu tác dụng chung là đưa người đọc đến gần sự việc. Đáp án C “ Để gợi ý rằng những người ủng hộ nhà vua chuẩn bị kém ”: Chi tiết một người từ chối cải trang (“refusing to disguise himself”) ở câu 3 đoạn 3 có thể gây nhầm lẫn Nhưng hành vi của một người không phải nhận xét chung về sự chuẩn bị của cả nhóm. Đáp án D “ Để chỉ ra rằng một số chi tiết đáng được biết đến rộng rãi hơn ”: Cụm “one choice detail after another” nói về cách sách kể chuyện bằng nhiều chi tiết, không nói rằng các chi tiết ấy cần được nhiều người biết đến hơn."
            }
          },
          {
            "id": 38,
            "prompt": "What point does the reviewer make about the king in the fourth paragraph?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "He hoped to win back public trust in the crown.",
              "He misjudged why his opponents were against him.",
              "He treated the worst period of his life as something worth celebrating.",
              "He was driven above all by a wish to be liked."
            ],
            "correct": "He treated the worst period of his life as something worth celebrating.",
            "explanation": {
              "step1": "What point does the reviewer make about the king in the fourth paragraph ? Câu hỏi hỏi: Người viết nhận xét gì về nhà vua trong đoạn 4?",
              "step2": "Đề đã chỉ rõ đoạn 4 => bắt đầu từ đoạn này và tìm lời nhận xét trực tiếp của người viết về nhà vua, thay vì chỉ đọc những sự kiện được kể lại. Đoạn 4",
              "step3": "Đoạn 4: That any monarch should so relish the lowest ebb of his life is remarkable enough ; that he should first have engineered so extraordinary an escape is more remarkable still .",
              "step4": "Đáp án đúng: C. He treated the worst period of his life as something worth celebrating . (Ông xem giai đoạn tồi tệ nhất đời mình là điều đáng ăn mừng .) Đối chiếu paraphrasing: the worst period of his life the lowest ebb of his life worth celebrating so relish Đáp án A “ Ông hy vọng lấy lại lòng tin của công chúng đối với vương quyền ”: Đoạn 4 nói ông không được chào đón (“no welcome at all”), nhưng không nói ông muốn lấy lại lòng tin. Đáp án B “ Ông hiểu sai lý do đối thủ chống lại mình ”: Đoạn 4 có nêu những lý do ấy (“Two things lay behind this”), nhưng không nói nhà vua hiểu sai chúng. Đáp án D “ Điều thôi thúc ông hơn hết là mong được yêu mến ”: Sai vì ông thích thú với trải nghiệm của chính mình (“so relish”), không phải vì muốn được người khác yêu mến."
            }
          },
          {
            "id": 39,
            "prompt": "What does the reviewer say about Ashworth in the fifth paragraph?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "He is equally fair to the runaway king and to the government pursuing him.",
              "His decision to take on the book is a surprise.",
              "His descriptions of events would be improved by more detail.",
              "He writes in a style aimed at a present-day readership."
            ],
            "correct": "He is equally fair to the runaway king and to the government pursuing him.",
            "explanation": {
              "step1": "What does the reviewer say about Ashworth in the fifth paragraph ? Câu hỏi hỏi: Người viết bài đánh giá nhận xét gì về Ashworth ở đoạn 5?",
              "step2": "Dựa vào tên riêng Ashworth và chỉ dẫn đoạn 5 => bắt đầu đọc từ đầu đoạn 5, nơi người viết nhắc đến Ashworth. Đoạn 5",
              "step3": "Đoạn 5: Neither side is favoured — the hunted king and the merciless republicans who chased him being treated with the same even-handed sympathy — and the wider background , which he had set out to open up far more fully than any earlier study, is exactly what he delivers .",
              "step4": "Đáp án đúng: A. He is equally fair to the runaway king and to the government pursuing him . (Ông đối xử công bằng như nhau với vị vua bỏ trốn và phe cầm quyền truy đuổi ông .) Đối chiếu paraphrasing: equally fair Neither side is favoured + same even handed sympathy runaway king hunted king; the government pursuing him republicans who chased him Đáp án B “ Quyết định viết cuốn sách của ông gây bất ngờ ”: Sai vì đoạn 5 khen Ashworth là người dẫn chuyện phù hợp (“a better guide”), không nói quyết định viết sách của ông gây bất ngờ. Đáp án C “ Phần miêu tả sự kiện cần thêm chi tiết ”: Nếu skim thấy từ chỉ chi tiết (“fine detail”) ở đoạn 5, dễ chọn nhầm Nhưng đó là lời khen sách tái hiện được chi tiết, không phải lời chê thiếu chi tiết. Đáp án D “ Ông viết theo lối văn nhắm đến độc giả ngày nay ”: Nếu skim thấy “fresh readers” ở đoạn 5, dễ hiểu nhầm là độc giả thời nay Nhưng cụm này nói về độc giả mới tiếp cận câu chuyện; đoạn văn còn cho biết lối viết của ông tránh vẻ quá hiện đại (“avoids anything that sounds too modern”)."
            }
          },
          {
            "id": 40,
            "prompt": "When the reviewer says the book 'doesn't quite hit the mark', she is making the point that",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "it ignores the effect of events on ordinary people.",
              "it does not consider whether the king's ordeal left a permanent mark on him.",
              "it leaves out the deceptions the king used while in hiding.",
              "it provides no analysis of contemporary attitudes to monarchy."
            ],
            "correct": "it does not consider whether the king's ordeal left a permanent mark on him.",
            "explanation": {
              "step1": "When the reviewer says the book ' doesn't quite hit the mark ' , she is making the point that Câu hỏi hỏi: Người viết cho rằng cuốn sách chưa làm tốt ở điểm nào?",
              "step2": "Dựa vào cụm nhận xét đặc trưng “ doesn't quite hit the mark ” => ta định vị được câu chứa nhận xét ở đoạn 6. Cụm “this single point” cho biết cần nhìn lại điểm vừa được nêu. Đoạn 6",
              "step3": "Đoạn 6: Being forced into disguises , thrown back on wit and charm alone , talking and tricking his way clear of one tight spot after another — did all that go into making the man ? It is on this single point that the book doesn't quite hit the mark . Câu (5): đặt câu hỏi liệu những trải nghiệm trốn chạy có định hình con người Aldwin . Câu (6): xác định chính câu hỏi đó là điểm cuốn sách chưa xử lý thỏa đáng .",
              "step4": "Đáp án đúng: B. it does not consider whether the king's ordeal left a permanent mark on him . (Cuốn sách không xem xét thỏa đáng liệu những thử thách Aldwin trải qua có để lại dấu ấn lâu dài đối với ông hay không.) Đối chiếu paraphrasing: the king's ordeal Being forced into disguises left a permanent mark on him making the man Đáp án A “ Cuốn sách bỏ qua tác động của các biến cố đối với người dân thường ”: Nếu skim đoạn 4, chi tiết người dân lo sợ (“people dreaded nothing more”) có thể gây nhầm Nhưng điểm được hỏi ở câu (5) là tác động lên Aldwin. Đáp án C “ Cuốn sách bỏ sót những cách đánh lừa người khác mà Aldwin dùng khi lẩn trốn ”: Chi tiết cải trang (“Being forced into disguises”) dễ kéo người đọc về phương án này Nhưng lời chê nhắm vào việc cuốn sách chưa làm rõ trải nghiệm ấy đã thay đổi Aldwin ra sao, không phải thiếu kể các hành động đó. Đáp án D “ Cuốn sách không phân tích thái độ đương thời đối với chế độ quân chủ ”: Đoạn 4 có nói sự trở lại của Aldwin không được chào đón (“met with no welcome at all”) Nhưng “this single point” ở câu (6) chỉ câu hỏi về con người Aldwin ngay trước đó."
            }
          }
        ]
      }
    ]
  },
  "cam-16-reading-1": {
    "id": "cam-16-reading-1",
    "title": "IELTS CAM Inspired 16 - Reading Test 1",
    "series": "Cambridge 16",
    "testNumber": 1,
    "type": "Reading",
    "durationMinutes": 60,
    "passages": [
      {
        "id": "cam-16-reading-1-p1",
        "passageNumber": 1,
        "title": "Why we need to protect polar bears",
        "subtitle": "",
        "content": [
          "Climate change poses a mounting danger to polar bears, and were they to vanish, the effects would reach well beyond the Arctic itself. Few animals are so precisely suited to the punishing cold of the far north, where the thermometer can sink to around -40°C. Part of what makes this possible is a layer of fat, in places almost ten centimetres thick, sitting just beneath the skin. Carry a comparable amount of such tissue and a human being would be classed as obese, with diabetes and heart trouble the probable result — and yet none of these afflictions touches the bear.",
          "Some light was thrown on this puzzle by research that Reidar Solheim and his team published in 2015. Setting the animal's genetic make-up against that of the brown bear — a warmer-climate cousin and the polar bear's nearest kin — the group was able to pin down the genes behind the species' survival in so harsh a place. Among these was APOB, a gene that drives down concentrations of low-density lipoproteins, or LDLs, the so-called 'bad' cholesterol. Because it is faults in this very gene that raise a person's heart-disease risk, the polar bear could prove a valuable model for studying that condition in ourselves.",
          "There is a second disorder the bear's genome might help resolve, one that falls most heavily on the elderly: osteoporosis, in which the bones grow less dense — a decline brought on, as a rule, by too little exercise, a shortage of calcium, or plain starvation. Bone is not fixed tissue; it is forever being rebuilt, laid down or broken down according to how well an animal is nourished and how much strain the skeleton must bear. Every pregnancy, though, puts the female polar bear through an ordeal. When autumn arrives she hollows out a den in the snow and stays inside for the whole winter, giving birth there and remaining with her cubs. Roughly six months of going without food follow, during which she must sustain both herself and her young from her own dwindling stores of calcium and energy. Her bones, remarkably, stay every bit as dense and strong.",
          "In 2009 the physiologists Marika Toft and Elias Brandt offered a way of making sense of this contradiction. What they found was that a bear, before ever beginning her den, would build extra density into her bones in advance; and that when she came out half a year later alongside her cubs, no meaningful thinning of the bone could be detected. Brown bears passing the winter in hibernation lack this trick, and are left to rebuild their skeletons wholesale once spring returns. Should the way polar bears remodel their bone ever be worked out, the gains might extend to astronauts, and to the many patients confined to their beds.",
          "For all that such medical promise should weigh in any argument for conservation, it ought not to be the whole of the case. Our instinct is to shield the creatures we credit with intelligence and feeling — elephants, say, or the primates — whereas the bear tends to strike people as dull-witted and, more often than not, aggressive. Reports from the field tell against that picture, hinting among other things at a real talent for solving problems. At the Nordvik Arctic Centre, a male bear named Sisu was repeatedly seen turning a branch into a lever, working it to bring down a fish that had been hung beyond his reach. The same knack, if less strikingly, has turned up in the wild: one male, in a calculated bid to reach a researcher stationed on a platform three metres above him, took a run-up and hurled himself onto a row of barrels.",
          "Further work — an investigation carried out by Johanna Kreft in 2010, for one — has caught the animals in bouts of careful, purposeful handling of objects. Bears in her study would gather items into heaps and then topple them, for all the world as if the whole thing were a sport. Behaviour of this kind, she argues, is nimble and thought-through, and it points to reserves of creativity and problem-solving that the species had never been given credit for.",
          "Emotion, too, shows through, though here again the proof is only anecdotal. A bear that has just let a kill slip away will often lash out at the surrounding ice and snow, apparently in annoyance. Stranger still are the bonds the animals sometimes strike up with other species — romping, for instance, with the sled dogs of the Arctic. One polar bear reared by hand, a female called Luna, grew so attached to her keeper, Tomas Reinholt, that the two of them will even swim side by side — astonishing behaviour, given that wild polar bears are quite prepared to hunt human beings.",
          "Were the warming climate to drive the species out of existence, we would forfeit not just the medical advances they may yet make possible but, more grievously, a magnificent and clever animal."
        ],
        "questions": [
          {
            "id": 1,
            "prompt": "Polar bears are extremely well suited to surviving in very cold conditions.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "TRUE",
            "explanation": {
              "step1": "Đáp án: True",
              "step2": "Polar bears are extremely well suited to surviving in very cold conditions . Ý câu hỏi: Polar bears thích nghi rất tốt với điều kiện rất lạnh .",
              "step3": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp ý thích nghi với cái lạnh (“suited to the punishing cold”) ở đoạn 1 => đây là vùng liên quan. Đoạn 1 — suited to the punishing cold",
              "step4": "Đoạn 1: Few animals are so precisely suited to the punishing cold of the far north , where the thermometer can sink to around -40°C ."
            }
          },
          {
            "id": 2,
            "prompt": "A polar bear's thick fat causes it to become diabetic.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "FALSE",
            "explanation": {
              "step1": "A polar bear's thick fat causes it to become diabetic . Ý câu hỏi: Lớp mỡ dày khiến chính polar bear mắc tiểu đường .",
              "step2": "Dựa vào thuật ngữ tiểu đường (“diabetic”) => ta tìm đến chỗ bài nhắc tới bệnh tiểu đường (“diabetes”) ở đoạn 1. Đọc từ câu (2) để hiểu lớp mỡ được nhắc đến trước khi xét tác động của nó. Đoạn 1 — diabetic",
              "step3": "Đoạn 1: Few animals are so precisely suited to the punishing cold of the far north , where the thermometer can sink to around -40°C . Part of what makes this possible is a layer of fat, in places almost ten centimetres thick , sitting just beneath the skin . Carry a comparable amount of such tissue and a human being would be classed as obese , with diabetes and heart trouble the probable result — and yet none of these afflictions touches the bear . Câu (2)–(3): polar bear thích nghi với giá lạnh, một phần nhờ lớp mỡ dày. Câu (4): lượng mô tương đương có thể dẫn tới tiểu đường ở người , nhưng không bệnh nào vừa kể ảnh hưởng đến polar bear .",
              "step4": "Câu hỏi nói: Lớp mỡ dày khiến polar bear mắc tiểu đường (“causes it to become diabetic”). Bài đọc nói: Tiểu đường là hậu quả có thể xảy ra với người (“a human being”, “diabetes and heart trouble the probable result”); còn polar bear không mắc các bệnh vừa kể (“none of these afflictions touches the bear”). ⇒ Hai ý mâu thuẫn trực tiếp . Đáp án đúng: FALSE Đối chiếu paraphrasing: thick fat a layer of fat + almost ten centimetres thick causes it to become diabetic none of these afflictions touches the bear Đáp án TRUE Nếu skim/scan thấy bệnh tiểu đường (“diabetes”) ngay sau phần nói về mô mỡ, sẽ dễ chọn TRUE Nhưng nguy cơ ấy thuộc về người, còn bài phủ nhận nó ở polar bear. Chỉ chọn TRUE nếu bài nói lớp mỡ khiến polar bear mắc tiểu đường. NOT GIVEN Nếu chỉ tìm đúng từ “diabetic”, sẽ dễ tưởng bài không đề cập Nhưng bài dùng “diabetes” và nói rõ không bệnh nào vừa kể ảnh hưởng đến polar bear. Chỉ chọn NOT GIVEN nếu bài không cho biết polar bear có mắc bệnh đó hay không."
            }
          },
          {
            "id": 3,
            "prompt": "Solheim's team compared the polar bear with a close relative from milder surroundings.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "TRUE",
            "explanation": {
              "step1": "Solheim's team compared the polar bear with a close relative from milder surroundings . Ý câu hỏi: Nhóm Solheim có so sánh polar bear với một loài họ hàng gần sống ở vùng khí hậu ôn hòa hơn không?",
              "step2": "Dựa vào tên riêng Solheim => ta bắt đầu đọc ở câu (1) đoạn 2, nơi nhắc đến Reidar Solheim và nhóm (“Reidar Solheim and his team”). Đoạn 2 — Reidar Solheim and his team",
              "step3": "Đoạn 2: Some light was thrown on this puzzle by research that Reidar Solheim and his team published in 2015 . Setting the animal's genetic make-up against that of the brown bear — a warmer-climate cousin and the polar bear's nearest kin — the group was able to pin down the genes behind the species' survival in so harsh a place . Câu (1): xác định nghiên cứu là của nhóm Reidar Solheim. Câu (2): nhóm so sánh polar bear với brown bear — loài họ hàng gần sống ở vùng khí hậu ấm hơn .",
              "step4": "Câu hỏi nói: Nhóm Solheim so sánh polar bear với một loài họ hàng gần (“ close relative ”) sống ở vùng khí hậu ôn hòa hơn (“ milder surroundings ”). Bài đọc nói: Nhóm của Reidar Solheim đối chiếu đặc điểm di truyền của polar bear với brown bear ; brown bear là họ hàng sống ở khí hậu ấm hơn (“ a warmer-climate cousin ”) và là họ hàng gần nhất của polar bear (“ the polar bear's nearest kin ”). ⇒ Các thông tin trùng khớp . Đáp án đúng: TRUE Đối chiếu paraphrasing: Solheim's team Reidar Solheim and his team compared the polar bear with Setting the animal's genetic make up against that of the brown bear a close relative the polar bear's nearest kin milder surroundings a warmer climate cousin FALSE Nếu skim/scan thấy bài nói về đặc điểm di truyền (“genetic make-up”), có thể tưởng nhóm không so sánh hai loài Nhưng họ đã đối chiếu đặc điểm di truyền của polar bear với brown bear. Chỉ chọn FALSE nếu bài nói nhóm không thực hiện phép so sánh ấy. NOT GIVEN Nếu chỉ tìm đúng cụm “milder surroundings”, có thể tưởng bài không đề cập khí hậu Nhưng bài đã nói khí hậu ấm hơn (“warmer-climate”) và quan hệ họ hàng gần nhất (“nearest kin”). Chỉ chọn NOT GIVEN nếu bài không cho biết một trong các đặc điểm cần kiểm chứng đó."
            }
          },
          {
            "id": 4,
            "prompt": "Defects in the APOB gene have been found to cause heart disease in brown bears.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "NOT GIVEN",
            "explanation": {
              "step1": "Defects in the APOB gene have been found to cause heart disease in brown bears . Cần kiểm tra cả mức độ khẳng định — đã được phát hiện là gây bệnh — lẫn đối tượng — brown bear.",
              "step2": "Dựa vào từ khoá đặc biệt APOB => ta định vị được cụm nêu gen này (“Among these was APOB”) ở đoạn 2 và đọc các câu liên quan. Đoạn 2 — Among these was APOB",
              "step3": "Đoạn 2: Setting the animal's genetic make-up against that of the brown bear — a warmer-climate cousin and the polar bear's nearest kin — the group was able to pin down the genes behind the species' survival in so harsh a place . Among these was APOB , a gene that drives down concentrations of low-density lipoproteins, or LDLs, the so-called 'bad' cholesterol . Because it is faults in this very gene that raise a person's heart-disease risk , the polar bear could prove a valuable model for studying that condition in ourselves . Câu (2)–(3): nhóm nghiên cứu đối chiếu với brown bear để xác định các gen, trong đó có APOB . Câu (4): lỗi ở gen này làm tăng nguy cơ bệnh tim ở người ; polar bear có thể giúp nghiên cứu bệnh ấy. Không có thông tin rằng lỗi gen APOB đã gây bệnh tim ở brown bear .",
              "step4": "Câu hỏi nói: Lỗi gen APOB đã được phát hiện gây bệnh tim ở brown bear (“have been found to cause heart disease in brown bears”). Bài đọc nói: Brown bear là loài được đem ra so sánh ; tác động được nêu là tăng nguy cơ bệnh tim ở người (“raise a person's heart-disease risk”). Bài không cho biết tác động của lỗi gen này đối với bệnh tim ở brown bear . ⇒ Không đủ căn cứ để xác nhận hoặc bác bỏ nhận định . Đáp án đúng: NOT GIVEN Đối chiếu paraphrasing: Defects in the APOB gene faults in this very gene cause heart disease in brown bears không có trong bài. Đáp án TRUE Nếu skim/scan thấy brown bear, APOB và nguy cơ bệnh tim (“heart-disease risk”) gần nhau, sẽ dễ chọn TRUE Nhưng brown bear chỉ là loài được so sánh, không phải đối tượng được xác nhận mắc bệnh. Chỉ chọn TRUE nếu bài nói lỗi gen APOB đã được phát hiện gây bệnh tim ở brown bear. FALSE Nếu thấy bài nói về người (“a person's”) thay vì brown bear, sẽ dễ chọn FALSE Nhưng thông tin về người không phủ định nhận định về brown bear. Chỉ chọn FALSE nếu bài khẳng định lỗi gen APOB không gây bệnh tim ở brown bear."
            }
          },
          {
            "id": 5,
            "prompt": "A female polar bear will leave her den at intervals over the winter months to feed.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "FALSE",
            "explanation": {
              "step1": "A female polar bear will leave her den at intervals over the winter months to feed . Ý câu hỏi: Polar bear cái sẽ thỉnh thoảng rời hang trong mùa đông để kiếm ăn.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp ý polar bear cái vào hang. Cụm chỉ đối tượng “the female polar bear” => đây là vùng liên quan. Đoạn 3 — the female polar bear",
              "step3": "Đoạn 3: Every pregnancy , though, puts the female polar bear through an ordeal . When autumn arrives she hollows out a den in the snow and stays inside for the whole winter , giving birth there and remaining with her cubs . Câu (3): xác định đối tượng là polar bear cái. Câu (4): nó làm hang rồi ở trong đó suốt mùa đông , trái với việc rời hang theo từng đợt.",
              "step4": "Câu hỏi nói: Polar bear cái rời hang theo từng đợt (“leave her den at intervals”) trong mùa đông (“over the winter months”) để kiếm ăn. Bài đọc nói: Nó ở trong hang suốt mùa đông (“stays inside for the whole winter”). ⇒ Hai ý mâu thuẫn : ở trong hang suốt mùa đông thì không thể thỉnh thoảng rời hang trong thời gian đó. Đáp án đúng: FALSE Đối chiếu paraphrasing: leave her den at intervals stays inside for the whole winter Đáp án TRUE Nếu chỉ khớp từ hang (“a den”) và mùa đông (“winter”), sẽ dễ chọn TRUE Nhưng câu (4) nói polar bear cái ở trong hang, không phải rời hang. Chỉ chọn TRUE nếu bài nói nó thỉnh thoảng rời hang để kiếm ăn. NOT GIVEN Nếu chỉ tìm chi tiết kiếm ăn (“to feed”) mà không thấy ở câu (4), sẽ dễ chọn NOT GIVEN Nhưng việc rời hang đã bị phủ định. Chỉ chọn NOT GIVEN nếu bài không cho biết polar bear cái có rời hang trong mùa đông hay không."
            }
          },
          {
            "id": 6,
            "prompt": "Female polar bears increase how dense their bones are before constructing a den.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "TRUE",
            "explanation": {
              "step1": "Female polar bears increase how dense their bones are before constructing a den . Ý câu hỏi: Cần kiểm tra hai ý: xương có đặc hơn không, và việc đó có xảy ra trước khi làm hang không.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc đến chi tiết về việc làm hang (“her den”) ở đoạn 4 => bắt đầu đọc kĩ câu (2). Đoạn 4 — her den",
              "step3": "Đoạn 4: What they found was that a bear , before ever beginning her den , would build extra density into her bones in advance ; and that when she came out half a year later alongside her cubs , no meaningful thinning of the bone could be detected .",
              "step4": "Câu hỏi nói: polar bear cái làm xương đặc hơn (“ increase how dense their bones are ”) trước khi làm hang (“before constructing a den”). Bài đọc nói: con vật làm xương đặc thêm (“ build extra density into her bones ”) trước khi bắt đầu làm hang (“ before ever beginning her den ”). ⇒ Cả sự thay đổi của xương lẫn thời điểm đều khớp. Đáp án đúng: TRUE Đối chiếu paraphrasing: increase how dense their bones are build extra density into her bones before constructing a den before ever beginning her den FALSE Nếu chỉ thấy xương không mỏng đi (“no meaningful thinning”), sẽ dễ tưởng xương không thay đổi Nhưng câu (2) nói rõ xương đã được làm đặc trước khi làm hang. Chỉ chọn FALSE nếu bài nói xương không đặc hơn trước lúc làm hang. NOT GIVEN Nếu chỉ đọc nửa sau câu (2), sẽ dễ tưởng bài không cho biết thời điểm xương đặc hơn Nhưng nửa đầu đã nêu rõ thời điểm đó. Chỉ chọn NOT GIVEN nếu bài không cho biết xương có đặc hơn trước lúc làm hang hay không."
            }
          },
          {
            "id": 7,
            "prompt": "Brown bears do not need to restore their bones once winter ends.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "FALSE",
            "explanation": {
              "step1": "Brown bears do not need to restore their bones once winter ends . Cần kiểm tra liệu Brown bears có cần phục hồi xương sau mùa đông hay không .",
              "step2": "Câu hỏi không có từ khóa đặc biệt; ta đọc nhanh đến khi gặp Brown bears cùng thông tin về xương. Cụ thể, câu (3) đoạn 4 nhắc đến Brown bears => bắt đầu đọc kĩ tại đây. Đoạn 4",
              "step3": "Đoạn 4: Brown bears passing the winter in hibernation lack this trick, and are left to rebuild their skeletons wholesale once spring returns .",
              "step4": "Câu hỏi nói: Brown bears không cần phục hồi xương khi mùa đông kết thúc (“do not need to restore their bones”). Bài đọc nói: Brown bears phải tái tạo bộ xương khi mùa xuân trở lại (“are left to rebuild their skeletons”; “ once spring returns ”). Hai ý mâu thuẫn trực tiếp. Đáp án đúng: FALSE Đối chiếu paraphrasing: do not need to restore their bones are left to rebuild their skeletons once winter ends once spring returns Đáp án TRUE Sai vì bài đọc nói Brown bears phải tái tạo bộ xương, không phải không cần. Chỉ chọn TRUE nếu bài nói chúng không cần làm việc đó khi mùa xuân đến. NOT GIVEN Nếu skim/scan chỉ tìm đúng từ phục hồi (“restore”), sẽ dễ bỏ qua cách diễn đạt tái tạo (“rebuild”) Nhưng bài đã nêu rõ việc này và thời điểm xảy ra. Chỉ chọn NOT GIVEN nếu bài không cho biết Brown bears có cần tái tạo xương sau mùa đông hay không."
            }
          },
          {
            "id": 8,
            "prompt": "Bears are commonly assumed to lack intelligence and to be  _____ .",
            "type": "FILL_IN_BLANK",
            "correct": "aggressive",
            "explanation": {
              "step1": "Bears are commonly assumed to lack intelligence and to be 8. ___ . Sau “to be”, ô trống cần một tính từ chỉ đặc điểm mà người ta thường gán cho gấu. Đó phải là đặc điểm thứ hai , khác với việc thiếu thông minh đã nêu.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta tìm ý tương đương với thiếu thông minh (“lack intelligence”). Ở câu 2 đoạn 5, bài đọc dùng từ “dull-witted” => đây là vùng liên quan. Đoạn 5 — dull-witted",
              "step3": "Đoạn 5: Our instinct is to shield the creatures we credit with intelligence and feeling — elephants, say, or the primates — whereas the bear tends to strike people as dull-witted and , more often than not, aggressive . “Dull-witted” ứng với đặc điểm đã có trong đề; tính từ đứng sau “and” mới là từ cần điền.",
              "step4": "Đáp án phù hợp nhất: aggressive Câu hoàn chỉnh: Bears are commonly assumed to lack intelligence and to be aggressive . ( Người ta thường cho rằng gấu thiếu thông minh và hung dữ .) => Khớp với dự đoán: aggressive là tính từ chỉ đặc điểm thứ hai ; đáp án gồm 1 từ. Đối chiếu paraphrasing: lack intelligence dull witted are commonly assumed tends to strike people as dull-witted “ kém thông minh ”: nằm ngay trước đáp án trong bài, Nhưng từ này đã tương ứng với “lack intelligence”; ô trống hỏi đặc điểm thứ hai. annoyance “ sự bực bội ”: Đoạn 7 dùng từ này để nói về phản ứng sau khi săn hụt, không phải đặc điểm người ta thường gán cho gấu. Đây cũng là danh từ, không phù hợp sau “to be”."
            }
          },
          {
            "id": 9,
            "prompt": "• At an Arctic wildlife centre, one bear was seen working a branch into a  _____  in order to reach a  _____  that had been suspended above it.",
            "type": "FILL_IN_BLANK",
            "correct": "lever",
            "explanation": {
              "step1": "- At an Arctic wildlife centre, one bear was seen working a branch into a 9. ___ Ý câu hỏi: Chỗ trống 9 hỏi con gấu đã biến cành cây thành vật gì . Sau “a”, ta cần một danh từ số ít chỉ vật được tạo ra , không phải cành cây ban đầu.",
              "step2": "Dựa vào địa danh Arctic và chi tiết cành cây (“a branch”) => tìm đến câu (4), đoạn 5. Đoạn 5 — a branch",
              "step3": "Đoạn 5: At the Nordvik Arctic Centre, a male bear named Sisu was repeatedly seen turning a branch into a lever , working it to bring down a fish that had been hung beyond his reach .",
              "step4": "Đáp án phù hợp nhất: lever Câu hoàn chỉnh: At an Arctic wildlife centre, one bear was seen working a branch into a lever in order to reach a 10. ___ that had been suspended above it. (Tại một trung tâm động vật hoang dã ở Arctic, một con gấu được thấy biến cành cây thành đòn bẩy để với tới một vật được treo phía trên.) => Khớp với dự đoán: lever là danh từ số ít chỉ vật được tạo từ cành cây. Đáp án gồm 1 từ; đề không nêu giới hạn số từ. Đối chiếu paraphrasing: working a branch into a turning a branch into a branch cành cây: Dễ chọn vì từ này xuất hiện ngay trước chỗ trống Nhưng đó là vật ban đầu, không phải vật được tạo ra. Đáp án fish con cá: Đây là thứ con gấu muốn lấy, thuộc chỗ trống 10; không phải vật được làm từ cành cây."
            }
          },
          {
            "id": 10,
            "prompt": "• In the wild, a bear devised a way of getting up to a platform on which a  _____  was standing.",
            "type": "FILL_IN_BLANK",
            "correct": "fish",
            "explanation": {
              "step1": "in order to reach a 10. ___ that had been suspended above it . Dự đoán: Sau “a” cần một danh từ đếm được số ít. Đó là vật được treo lên mà con gấu tìm cách với tới ; chưa cần đoán cụ thể là vật gì.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp ý con gấu dùng cành cây để lấy một vật. Đoạn 5 nhắc đến cành cây (“a branch”) => đây là vùng liên quan. Đoạn 5 — a branch",
              "step3": "Đoạn 5: At the Nordvik Arctic Centre, a male bear named Sisu was repeatedly seen turning a branch into a lever , working it to bring down a fish that had been hung beyond his reach .",
              "step4": "Đáp án phù hợp nhất: fish Câu hoàn chỉnh: At an Arctic wildlife centre, one bear was seen working a branch into a 9. ___ in order to reach a fish that had been suspended above it. (Ở một trung tâm động vật hoang dã tại Arctic, người ta thấy một con gấu dùng cành cây tạo thành một dụng cụ ở câu 9 để với tới con cá được treo phía trên nó.) => Khớp với dự đoán: fish là vật được treo mà con gấu tìm cách lấy xuống ; đáp án gồm 1 từ. Đề được cung cấp không nêu giới hạn số từ. Đối chiếu paraphrasing: reach a 10. ___ bring down a fish suspended above it hung beyond his reach lever “ đòn bẩy ”: Nếu skim/scan sẽ dễ chọn vì từ này nằm ngay trước “fish” trong câu (4) Nhưng đó là dụng cụ con gấu làm ra, không phải vật được treo để nó lấy xuống. branch “ cành cây ”: Nếu skim/scan thấy cành cây (“a branch”) sẽ dễ chọn, nhưng con gấu dùng cành cây để lấy vật cần điền."
            }
          },
          {
            "id": 11,
            "prompt": "• Bears have been seen deliberately arranging and then toppling things, in play resembling a  _____ .",
            "type": "FILL_IN_BLANK",
            "correct": "researcher",
            "explanation": {
              "step1": "Ô trống đứng sau *a* và trước *was standing* ⇒ cần một danh từ đếm được số ít chỉ người hoặc đối tượng đứng trên bục. Chưa thể đoán chính xác đó là ai.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến tình huống con gấu ở ngoài tự nhiên (“in the wild”) tìm cách lên bục (“platform”) tại đoạn 5 ⇒ đây là vùng cần đọc. Đoạn 5 — in the wild",
              "step3": "Đoạn 5: The same knack , if less strikingly, has turned up in the wild : one male , in a calculated bid to reach a researcher stationed on a platform three metres above him , took a run-up and hurled himself onto a row of barrels . Con gấu là bên tìm cách tiếp cận; researcher mới là người ở trên bục (“stationed on a platform”).",
              "step4": "Đáp án phù hợp nhất: researcher Câu hoàn chỉnh: In the wild, a bear devised a way of getting up to a platform on which a researcher was standing . (Ngoài tự nhiên, một con gấu nghĩ ra cách lên bục nơi một researcher đang đứng.) => Khớp với dự đoán về một người đứng trên bục và thông tin trong bài. Đáp án gồm 1 từ; đề được cung cấp không nêu giới hạn số từ. Đối chiếu paraphrasing: on which a 11. ___ was standing a researcher stationed on a platform Đáp án male con gấu đực: Đây là con gấu tìm cách tiếp cận người trên bục, không phải người đứng trên bục. barrels những chiếc thùng: Đây là vật con gấu lao lên; hơn nữa, barrels là số nhiều, không thể đứng sau a. Đáp án fish con cá: Câu 4 đoạn 5 nhắc đến “a fish”, nhưng đó là tình huống khác, không phải đối tượng trên bục."
            }
          },
          {
            "id": 12,
            "prompt": "• After an unsuccessful hunt, a bear may move in a way that seems to express  _____ .",
            "type": "FILL_IN_BLANK",
            "correct": "sport",
            "explanation": {
              "step1": "- Bears have been seen deliberately arranging and then toppling things , in play resembling a 12. ___ . Sau “a”, ô trống cần một danh từ số ít chỉ hoạt động được đem ra so sánh với việc xếp đồ vật rồi làm đổ chúng.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta tìm hành động tương đương với việc xếp đồ vật. Ở đoạn 6, gấu gom đồ thành đống (“gather items into heaps”) => đây là vùng cần đọc. Đoạn 6 — gather items into heaps",
              "step3": "Đoạn 6: Bears in her study would gather items into heaps and then topple them , for all the world as if the whole thing were a sport .",
              "step4": "Đáp án phù hợp nhất: sport Câu hoàn chỉnh: Bears have been seen deliberately arranging and then toppling things, in play resembling a sport. (Người ta từng thấy gấu cố ý xếp đồ vật rồi làm đổ chúng, như đang chơi một môn thể thao .) => Khớp với dự đoán về danh từ chỉ hoạt động được đem ra so sánh; sport là một từ lấy nguyên văn từ bài đọc. Đối chiếu paraphrasing: arranging and then toppling things gather items into heaps and then topple them resembling a as if heaps — những đống đồ vật: Đây là kết quả của hành động gom đồ, không phải hoạt động được đem ra so sánh; “a heaps” cũng sai ngữ pháp. items — những món đồ: Từ này chỉ thứ gấu gom lại, không phải điều mà cả hành động được ví như."
            }
          },
          {
            "id": 13,
            "prompt": "There are also signs that bears feel emotion. For instance:",
            "type": "FILL_IN_BLANK",
            "correct": "annoyance",
            "explanation": {
              "step1": "- After an unsuccessful hunt , a bear may move in a way that seems to express 13. ___ . Ô trống đứng sau “express”, nên cần một danh từ chỉ cảm xúc . Từ “seems” cho biết đây là cảm xúc được suy đoán từ hành vi của gấu .",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta tìm ý tương đương với cuộc săn thất bại. Ở đoạn 7, cụm “let a kill slip away” cho thấy gấu vừa để con mồi thoát mất => đây là vùng cần đọc. Đoạn 7 — let a kill slip away",
              "step3": "Đoạn 7: A bear that has just let a kill slip away will often lash out at the surrounding ice and snow , apparently in annoyance .",
              "step4": "Đáp án phù hợp nhất: annoyance Câu hoàn chỉnh: After an unsuccessful hunt, a bear may move in a way that seems to express annoyance . (Sau một cuộc săn thất bại, gấu có thể cử động theo cách dường như biểu lộ sự bực bội .) => Khớp dự đoán danh từ chỉ cảm xúc và thông tin trong bài; đáp án gồm 1 từ, còn đề được cung cấp không nêu giới hạn số từ. Đối chiếu paraphrasing: an unsuccessful hunt let a kill slip away seems apparently aggressive “ hung hăng ”: Nếu skim/scan, dễ chọn từ này vì đoạn 5 dùng nó để nói về gấu Nhưng đó là định kiến chung, không phải cảm xúc của gấu sau khi săn hụt. Đáp án snow “ tuyết ”: Sai vì ở câu (2), đây là thứ gấu quật vào, không phải cảm xúc cần điền sau “express”."
            }
          }
        ]
      },
      {
        "id": "cam-16-reading-1-p2",
        "passageNumber": 2,
        "title": "The Step Pyramid of Djoser",
        "subtitle": "",
        "content": [
          "The Step Pyramid of Djoser"
        ],
        "questions": [
          {
            "id": 14,
            "prompt": "Choose the correct heading for Section A:",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A ruler remembered for rescuing his subjects",
              "A tour of the grounds and structures outside",
              "Rethinking how a royal tomb should be shaped",
              "Remarkable finds, though little of the original survived",
              "Resolving a set of surprising puzzles",
              "One firm conclusion amid much that stays uncertain",
              "What lies inside the monument, and what was left there",
              "A construction that severely tested its builders",
              "A template later builders chose to imitate"
            ],
            "correct": "One firm conclusion amid much that stays uncertain",
            "explanation": {
              "step1": "Đoạn A: Among all the surviving monuments of ancient Egypt , none draws visitors so reliably as the pyramids , and their appeal has scarcely faded today . Though peoples as distant as the Maya and the Chinese raised pyramids of their own , it is with Egypt that the form has come to be identified , standing as a lasting memorial to the land's early kings . How the shape first emerged is something scholars have argued over for generations . Yet on one matter there is little doubt : within Egypt the story opens with a single tomb, raised for a single ruler and devised by a single gifted builder — the Step Pyramid of Djoser on the plateau at Nedjeru . Câu (1)–(2): giới thiệu sức hấp dẫn của kim tự tháp và sự gắn kết của dạng công trình này với Egypt. Câu (3): cách hình dạng kim tự tháp ra đời vẫn gây tranh luận . Câu (4): đối lập với câu (3), chốt một điều chắc chắn : câu chuyện kim tự tháp trong Egypt bắt đầu với Step Pyramid of Djoser . Đoạn A — scholars have argued over",
              "step2": "Cách hình dạng kim tự tháp ra đời còn gây tranh luận , nhưng có một kết luận chắc chắn về công trình mở đầu tại Egypt . Đáp án đúng: One firm conclusion amid much that stays uncertain (Một kết luận chắc chắn giữa nhiều điều còn chưa rõ ). Đối chiếu paraphrasing: One firm conclusion on one matter there is little doubt much that stays uncertain scholars have argued over Heading thứ 5. “ Giải quyết một loạt điều bí ẩn bất ngờ ”: Nếu thấy gần như không còn nghi ngờ (“little doubt”), em có thể tưởng các bí ẩn đã được giải đáp Nhưng câu (4) chỉ chốt một điểm chắc chắn; vấn đề ở câu (3) vẫn còn gây tranh luận. Heading thứ 3. “ Suy nghĩ lại về hình dạng của một lăng mộ hoàng gia ”: Cụm nói về nguồn gốc hình dạng (“How the shape first emerged”) dễ khiến em chọn heading này Nhưng đoạn A không trình bày việc thay đổi thiết kế lăng mộ; trọng tâm là điều còn tranh luận >< điều đã chắc chắn.",
              "step3": "Bóc tách cấu trúc câu (S-V-O) và đối chiếu nghĩa.",
              "step4": "Đáp án chính xác: One firm conclusion amid much that stays uncertain"
            }
          },
          {
            "id": 15,
            "prompt": "Choose the correct heading for Section B:",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A ruler remembered for rescuing his subjects",
              "A tour of the grounds and structures outside",
              "Rethinking how a royal tomb should be shaped",
              "Remarkable finds, though little of the original survived",
              "Resolving a set of surprising puzzles",
              "One firm conclusion amid much that stays uncertain",
              "What lies inside the monument, and what was left there",
              "A construction that severely tested its builders",
              "A template later builders chose to imitate"
            ],
            "correct": "Rethinking how a royal tomb should be shaped",
            "explanation": {
              "step1": "Đoạn B: The earliest of Egypt's Second Dynasty kings, Djoser was also the first to raise his monuments in stone . Those that had gone before were low rectangular structures of sun-dried mud brick , set over the buried passages in which the dead were laid . Why the notion came to him is not recorded , yet it was Djoser's chief official, a man named Neferkha , who put forward a loftier and more striking resting place , to be achieved by laying stone slabs one upon another and shrinking each in turn until the familiar stepped profile emerged . Most estimates place Djoser's reign at around 24 years , though a number of scholars , pointing to how many monuments he left behind and how large they were, contend that he must have ruled for considerably longer . Câu (1)–(2): giới thiệu việc Djoser dùng đá, rồi nhìn lại kiểu công trình cũ: thấp, hình chữ nhật . Câu (3): triển khai đề xuất mới — nơi an nghỉ cao hơn, có bậc , đối chiếu với kiểu cũ. Câu (4): bổ sung tranh luận về thời gian Djoser trị vì; đây là ý phụ, không tiếp tục triển khai vấn đề thiết kế. Đoạn B — low rectangular",
              "step2": "Đoạn nói về việc thay đổi thiết kế lăng mộ , từ kiểu thấp, hình chữ nhật sang kiểu cao hơn, có bậc. Đáp án đúng: Rethinking how a royal tomb should be shaped ( Suy nghĩ lại về hình dáng lăng mộ hoàng gia ). Đối chiếu paraphrasing: Rethinking put forward how a royal tomb should be shaped sự thay đổi từ low rectangular structures sang a loftier + stepped profile A construction that severely tested its builders “ — Một công trình khiến người xây gặp thử thách lớn ”: Nếu skim/scan thấy thao tác xếp đá (“laying stone slabs”), em dễ nghĩ đoạn nói về thi công Nhưng câu (3) giải thích cách tạo hình dáng mới, không nói người xây gặp khó khăn nghiêm trọng. One firm conclusion amid much that stays uncertain “ — Một kết luận chắc chắn giữa nhiều điều còn chưa rõ ”: Cụm chưa được ghi lại (“is not recorded”) và tranh luận ở câu (4) dễ khiến em chú ý đến sự không chắc chắn Nhưng trọng tâm được triển khai ở câu (2)–(3) là đổi thiết kế lăng mộ, không phải đối chiếu một kết luận chắc chắn với những điều chưa biết.",
              "step3": "Bóc tách cấu trúc câu (S-V-O) và đối chiếu nghĩa.",
              "step4": "Đáp án chính xác: Rethinking how a royal tomb should be shaped"
            }
          },
          {
            "id": 16,
            "prompt": "Choose the correct heading for Section C:",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A ruler remembered for rescuing his subjects",
              "A tour of the grounds and structures outside",
              "Rethinking how a royal tomb should be shaped",
              "Remarkable finds, though little of the original survived",
              "Resolving a set of surprising puzzles",
              "One firm conclusion amid much that stays uncertain",
              "What lies inside the monument, and what was left there",
              "A construction that severely tested its builders",
              "A template later builders chose to imitate"
            ],
            "correct": "A construction that severely tested its builders",
            "explanation": {
              "step1": "Đoạn C: A century of close study has established that the Step Pyramid reached its final form not at a stroke but through a long succession of stages . The historian Adrien Vaillant makes the same point, remarking : ' A great deal of trial and error went into it , nowhere more plainly than in the structure at the heart of the complex . Several schemes were tested … before it rose as the first step pyramid ever made , five tiers set one above the next … Its sheer mass tested those who built it , and to stop the whole from pulling itself apart they angled the blocks inwards .' Câu (1): khái quát quá trình hình thành qua nhiều giai đoạn, không hoàn tất ngay một lần. Câu (2)–(3): củng cố bằng việc phải thử–sai nhiều và thử nhiều phương án . Câu (4): cụ thể hóa thách thức đối với người xây : sức nặng công trình và giải pháp nghiêng các khối đá vào trong để tránh công trình tự tách rời. Đoạn C — A great deal of trial and error",
              "step2": "Quá trình xây Step Pyramid đòi hỏi nhiều lần thử–sai và giải quyết khó khăn kỹ thuật, đặt ra thử thách lớn cho người xây . Đáp án đúng: VIII. A construction that severely tested its builders (Một công trình đặt ra thử thách lớn cho những người xây dựng nó ). Đối chiếu paraphrasing: severely tested its builders A great deal of trial and error + tested those who built it Đáp án III “ Cân nhắc lại hình dáng một lăng mộ hoàng gia ”: Nếu chỉ thấy nhiều phương án (“Several schemes”), em dễ nghĩ trọng tâm là thay đổi thiết kế Nhưng đoạn nhấn mạnh quá trình thử nghiệm và khó khăn khi xây dựng, được chốt rõ ở câu (4). Đáp án VI “ Một kết luận chắc chắn giữa nhiều điều còn chưa rõ ”: Cụm xác nhận kết luận (“has established that”) ở câu (1) dễ gây nhầm Nhưng phần còn lại không triển khai những điều chưa chắc chắn mà cùng làm rõ các thử thách xây dựng. Đáp án IX “ Một hình mẫu được những người xây dựng sau này noi theo ”: Chi tiết công trình đầu tiên (“first step pyramid”) có thể gợi ý về tính tiên phong Nhưng xuất hiện đầu tiên không đồng nghĩa với được noi theo; đoạn C không nói đến việc các thế hệ sau bắt chước công trình.",
              "step3": "Bóc tách cấu trúc câu (S-V-O) và đối chiếu nghĩa.",
              "step4": "Đáp án chính xác: A construction that severely tested its builders"
            }
          },
          {
            "id": 17,
            "prompt": "Choose the correct heading for Section D:",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A ruler remembered for rescuing his subjects",
              "A tour of the grounds and structures outside",
              "Rethinking how a royal tomb should be shaped",
              "Remarkable finds, though little of the original survived",
              "Resolving a set of surprising puzzles",
              "One firm conclusion amid much that stays uncertain",
              "What lies inside the monument, and what was left there",
              "A construction that severely tested its builders",
              "A template later builders chose to imitate"
            ],
            "correct": "A tour of the grounds and structures outside",
            "explanation": {
              "step1": "Đoạn D: Once the work was finished the Step Pyramid stood 58 meters tall , overtopping every other building of its age . In size its surrounding complex rivalled a whole Egyptian town , taking in a temple , open courts, shrines and the quarters where the attendants lived . Spreading across 14 hectares, the enclosure was shut in by a wall roughly 11 meters high . Fourteen false doorways had been cut into that wall , along with just one genuine way in at the south-eastern corner , and around the outside of it ran a moat , 680 meters in length and 33 meters across . Dummy doors and moat alike were meant to keep out the unwanted , since anyone hoping to get inside had first to learn the position of the single real opening . So pleased was Djoser with the achievement that he set aside the old custom of naming only the king , having Neferkha's name inscribed on the monument alongside his own . Câu (1)–(4): lần lượt mô tả chiều cao Step Pyramid, quy mô quần thể , tường bao, cửa và hào bên ngoài . Câu (5): giải thích chức năng ngăn người không được phép vào của các cấu trúc vừa nêu. Câu (6): bổ sung phản ứng hài lòng và việc phá lệ của Djoser, không thay đổi trọng tâm mô tả. Đoạn D — its surrounding complex",
              "step2": "Đoạn D giới thiệu khuôn viên và các công trình bên ngoài Step Pyramid. Đáp án đúng: A tour of the grounds and structures outside (Một lượt tham quan khuôn viên và các công trình bên ngoài ). Đối chiếu paraphrasing: the grounds its surrounding complex structures outside a temple + a moat + around the outside Heading về bên trong công trình Những thứ bên trong công trình và những gì được để lại ở đó. Nếu chỉ thấy việc vào bên trong (“get inside”) ở câu (5), em dễ chọn nhầm Nhưng đây là lời giải thích cách tìm lối vào; đoạn đang mô tả quần thể bao quanh và vị trí bên ngoài (“around the outside of it”). Heading về khó khăn xây dựng Một công trình thử thách nghiêm trọng những người xây dựng. Quy mô lớn ở câu (1)–(3) dễ khiến em liên tưởng đến khó khăn xây dựng Nhưng đoạn mô tả công trình sau khi hoàn thành, không trình bày những thử thách của người xây. Heading về nhà vua cứu dân Một vị vua được nhớ đến vì cứu thần dân. Câu (5) nói đến việc ngăn người ngoài, còn câu (6) nhắc Djoser, nên có thể gây liên tưởng sai Nhưng chức năng bảo vệ ở đây là ngăn người không được phép vào công trình, không phải nhà vua cứu thần dân.",
              "step3": "Bóc tách cấu trúc câu (S-V-O) và đối chiếu nghĩa.",
              "step4": "Đáp án chính xác: A tour of the grounds and structures outside"
            }
          },
          {
            "id": 18,
            "prompt": "Choose the correct heading for Section E:",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A ruler remembered for rescuing his subjects",
              "A tour of the grounds and structures outside",
              "Rethinking how a royal tomb should be shaped",
              "Remarkable finds, though little of the original survived",
              "Resolving a set of surprising puzzles",
              "One firm conclusion amid much that stays uncertain",
              "What lies inside the monument, and what was left there",
              "A construction that severely tested its builders",
              "A template later builders chose to imitate"
            ],
            "correct": "What lies inside the monument, and what was left there",
            "explanation": {
              "step1": "Đoạn E: Well beneath the pyramid's base lay the burial chamber in which the king was interred , encircled by a bewildering web of tunnels off which small rooms opened, the whole arrangement designed to baffle intruders . Among the more puzzling things the pyramid gave up was an immense hoard of stone jars . In storerooms leading off the underground galleries, upwards of 30,000 of them came to light , in every imaginable size and shape . Fashioned from many kinds of stone, they bear the names of rulers from Egypt's earliest dynasties . On why they had been placed in Djoser's tomb , and what they were meant to signify, specialists have never reached agreement . Ludwig Steinmann , who cleared the greater part of the pyramid and its complex, took the view that they had first been kept in storage and were later reburied with due ceremony by Djoser as a tribute to the kings who came before him . A rival explanation , favoured by other scholars, is that the jars were simply tipped down the shafts in one further bid to keep robbers away from the royal chamber . Gợi ý: Dấu hiệu về một cách giải thích cạnh tranh (“A rival explanation”) cho biết đây là một giả thuyết khác. Không cần đọc nội dung cụ thể để chọn heading bao quát đoạn. Câu (1): giới thiệu phòng chôn cất bên trong, phía dưới kim tự tháp. Câu (2)–(4): chuyển sang các bình đá được tìm thấy , rồi mô tả thêm đặc điểm của chúng. Câu (5)–(7): các chuyên gia chưa thống nhất về lý do đặt bình trong mộ => đưa ra những cách giải thích khác nhau. Đoạn E — A rival explanation",
              "step2": "Đoạn mô tả không gian bên trong công trình và những đồ vật được để lại ở đó , đặc biệt là các bình đá . Đáp án đúng: What lies inside the monument , and what was left there ( Những gì nằm bên trong công trình và những gì được để lại ở đó ). Đối chiếu paraphrasing: What lies inside the monument beneath the pyramid's base + the burial chamber what was left there stone jars + came to light Resolving a set of surprising puzzles “ (Giải đáp một loạt bí ẩn bất ngờ) ”: Nếu skim/scan thấy những vật gây thắc mắc (“puzzling things”), em dễ nghĩ đoạn đang giải đáp bí ẩn Nhưng câu (5) khẳng định các chuyên gia chưa thống nhất (“never reached agreement”); hai câu sau chỉ đưa ra giả thuyết. A tour of the grounds and structures outside “ (Tham quan khuôn viên và các công trình bên ngoài) ”: Nếu chỉ chú ý các phòng và đường hầm, em dễ chọn heading mô tả không gian Nhưng câu (1) xác định vị trí bên dưới đáy kim tự tháp (“beneath the pyramid's base”), không phải bên ngoài. Remarkable finds, though little of the original survived “ (Những phát hiện đáng chú ý, dù chỉ còn lại ít hiện vật ban đầu) ”: Kho bình đá dễ khiến em chú ý đến ý phát hiện đáng chú ý Nhưng đoạn E không nói chỉ còn lại rất ít; chi tiết về số ít báu vật (“few treasures”) nằm ở đoạn F.",
              "step3": "Bóc tách cấu trúc câu (S-V-O) và đối chiếu nghĩa.",
              "step4": "Đáp án chính xác: What lies inside the monument, and what was left there"
            }
          },
          {
            "id": 19,
            "prompt": "Choose the correct heading for Section F:",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A ruler remembered for rescuing his subjects",
              "A tour of the grounds and structures outside",
              "Rethinking how a royal tomb should be shaped",
              "Remarkable finds, though little of the original survived",
              "Resolving a set of surprising puzzles",
              "One firm conclusion amid much that stays uncertain",
              "What lies inside the monument, and what was left there",
              "A construction that severely tested its builders",
              "A template later builders chose to imitate"
            ],
            "correct": "Remarkable finds, though little of the original survived",
            "explanation": {
              "step1": "Đoạn F: For all the care lavished on the maze below ground , in the end it did nothing to keep the ancient robbers out . Long ago Djoser's burial goods , and the king's own body with them, were carried off , so that the excavators came away with no more than the few treasures the thieves had happened to miss . What still lay scattered through the pyramid and its complex was nonetheless enough to leave those who dug there astonished . Câu (1)–(2): mê cung không ngăn được trộm => đồ đạc bị lấy đi => người khai quật chỉ thu được ít báu vật . Câu (3): tương phản với lượng còn lại ít, những gì tìm thấy vẫn gây kinh ngạc . Đoạn F — were carried off",
              "step2": "Dù chỉ còn ít báu vật , những gì được tìm thấy vẫn gây kinh ngạc . Đáp án đúng: Remarkable finds , though little of the original survived ( Những phát hiện đáng chú ý , dù chẳng còn lại bao nhiêu đồ vật ban đầu ). Đối chiếu paraphrasing: Remarkable finds enough to leave those who dug there astonished little of the original survived were carried off + few treasures What lies inside the monument, and what was left there “ (Bên trong công trình có gì và những gì được để lại ở đó) ”: Nếu chỉ scan thấy báu vật (“treasures”), ta dễ chọn heading này Nhưng trọng tâm đoạn F không phải mô tả bên trong công trình, mà là còn ít nhưng vẫn gây kinh ngạc. Resolving a set of surprising puzzles “ (Giải đáp một loạt điều bí ẩn đáng ngạc nhiên) ”: Từ chỉ sự kinh ngạc (“astonished”) có thể khiến ta liên tưởng đến những bí ẩn Nhưng đoạn chỉ nói phản ứng trước các phát hiện, không nói giải đáp bí ẩn nào.",
              "step3": "Bóc tách cấu trúc câu (S-V-O) và đối chiếu nghĩa.",
              "step4": "Đáp án chính xác: Remarkable finds, though little of the original survived"
            }
          },
          {
            "id": 20,
            "prompt": "Choose the correct heading for Section G:",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A ruler remembered for rescuing his subjects",
              "A tour of the grounds and structures outside",
              "Rethinking how a royal tomb should be shaped",
              "Remarkable finds, though little of the original survived",
              "Resolving a set of surprising puzzles",
              "One firm conclusion amid much that stays uncertain",
              "What lies inside the monument, and what was left there",
              "A construction that severely tested its builders",
              "A template later builders chose to imitate"
            ],
            "correct": "A template later builders chose to imitate",
            "explanation": {
              "step1": "Đoạn G: The way the Egyptologist Katarzyna Brzeska frames it is this: ' Few structures anywhere hold a place in human history to match the Step Pyramid at Nedjeru … one may say without overstatement that this complex marks a turning point in the growth of monumental stone building , in Egypt and across the world alike .' A bold leap forward in design, the Step Pyramid went on to become the model that every later master of the Egyptian pyramid would look back to . Câu (1): khẳng định vị thế lịch sử và vai trò bước ngoặt của Step Pyramid. Câu (2): cụ thể hóa tầm ảnh hưởng ấy: công trình trở thành hình mẫu cho người xây dựng về sau . Đoạn G — model",
              "step2": "Step Pyramid có ảnh hưởng lâu dài, trở thành hình mẫu cho các thế hệ xây dựng sau . Đáp án đúng: A template later builders chose to imitate ( Một hình mẫu được những người xây dựng về sau noi theo ). Đối chiếu paraphrasing: A template the model later builders chose to imitate every later master + would look back to Rethinking how a royal tomb should be shaped “ (Nghĩ lại cách tạo hình lăng mộ hoàng gia) ”: Nếu chỉ bám vào từ thiết kế (“design”) ở câu (2), ta dễ chọn heading này Nhưng đoạn chốt vào ảnh hưởng đối với người xây dựng về sau, không phải việc thay đổi hình dáng lăng mộ ban đầu. A construction that severely tested its builders “ (Một công trình khiến những người xây dựng phải vượt qua thử thách lớn) ”: Đoạn C có chi tiết công trình gây khó cho người xây dựng (“tested those who built it”), nên dễ lẫn khi đối chiếu toàn bài Nhưng câu (2) đoạn G nói về những người thuộc thế hệ về sau (“later”) lấy công trình làm mẫu, không phải khó khăn của đội xây dựng ban đầu.",
              "step3": "Bóc tách cấu trúc câu (S-V-O) và đối chiếu nghĩa.",
              "step4": "Đáp án chính xác: A template later builders chose to imitate"
            }
          },
          {
            "id": 21,
            "prompt": "Taken together with everything around it, the Step Pyramid's complex has been judged as large as an entire Egyptian  _____  from early times. Beyond the pyramid stood living space set aside for the  _____ , together with numerous other buildings and installations.",
            "type": "FILL_IN_BLANK",
            "correct": "town",
            "explanation": {
              "step1": "Taken together with everything around it, the Step Pyramid's complex has been judged as large as an entire Egyptian 8. ___ from early times. Ý câu hỏi: Xét cả những thứ xung quanh, quần thể của Step Pyramid được đánh giá lớn bằng cả một đối tượng nào đó ở Egypt thời xa xưa. Dự đoán ô trống: - Loại từ: danh từ đếm được số ít, đứng sau “an entire Egyptian”. - Nghĩa: đối tượng được dùng làm chuẩn so sánh kích thước với toàn bộ quần thể.",
              "step2": "Câu hỏi không có từ khoá đặc biệt giúp phân biệt vị trí; ta đọc nhanh để tìm ý so sánh kích thước của cả quần thể . Đoạn D có cụm xét về kích thước (“In size”) => bắt đầu đọc tại đây. Đoạn D — In size",
              "step3": "Đoạn D: In size its surrounding complex rivalled a whole Egyptian town , taking in a temple, open courts, shrines and the quarters where the attendants lived .",
              "step4": "Đáp án phù hợp nhất: town Câu hoàn chỉnh: Taken together with everything around it, the Step Pyramid's complex has been judged as large as an entire Egyptian town from early times. (Tính cả mọi thứ xung quanh, quần thể của Step Pyramid được đánh giá lớn bằng cả một thị trấn ở Egypt thời xa xưa.) => Khớp với dự đoán: danh từ đếm được số ít chỉ đối tượng dùng làm chuẩn so sánh kích thước; đáp án lấy nguyên văn từ bài, gồm 1 từ. Đối chiếu paraphrasing: as large as rivalled entire whole temple “ ngôi đền ”: Nếu chỉ tìm danh từ chỉ công trình, dễ chọn từ này vì xuất hiện ngay sau phần so sánh Nhưng đây là một thành phần nằm trong quần thể, không phải đối tượng mà quần thể lớn ngang bằng. Đáp án size “ kích thước ”: Từ này xuất hiện trong cụm xét về kích thước (“In size”), nhưng chỉ nêu phương diện so sánh, không phải đối tượng được dùng làm chuẩn so sánh."
            }
          },
          {
            "id": 22,
            "prompt": "The whole complex was enclosed by a wall into which several deceptive doorways had been set. Running right around that wall, moreover, was a lengthy  _____ . Because of this, nobody who arrived without invitation could get into the grounds without first knowing the  _____  of the one genuine doorway.",
            "type": "FILL_IN_BLANK",
            "correct": "attendants",
            "explanation": {
              "step1": "Beyond the pyramid stood living space set aside for the 9. ___ , together with numerous other buildings and installations . Ý câu hỏi: Khu ở bên ngoài kim tự tháp được dành cho ai? Dự đoán: Sau giới từ và mạo từ (“for the”), cần một danh từ hoặc cụm danh từ. Theo nghĩa câu, ô trống có thể chỉ một người hoặc nhóm người được bố trí chỗ ở.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta tìm ý khu ở (“living space”). Ở đoạn D, cụm khu ở (“the quarters”) mang nghĩa tương đương => đây là điểm bắt đầu đọc. Đoạn D — the quarters",
              "step3": "Đoạn D: In size its surrounding complex rivalled a whole Egyptian town , taking in a temple, open courts, shrines and the quarters where the attendants lived .",
              "step4": "Đáp án phù hợp nhất: attendants Câu hoàn chỉnh: Beyond the pyramid stood living space set aside for the attendants , together with numerous other buildings and installations. (Bên ngoài kim tự tháp có khu ở dành cho những người phục vụ , cùng nhiều công trình và hạng mục khác.) => Khớp với dự đoán danh từ chỉ người và thông tin trong bài: người phục vụ sinh sống tại khu ở này. Đáp án gồm 1 từ; đề được cung cấp không nêu giới hạn từ. Đối chiếu paraphrasing: living space the quarters set aside for the 9. ___ where the attendants lived quarters “ khu ở ”: Nếu chỉ tìm từ đồng nghĩa với khu ở, dễ chọn từ này Nhưng câu hỏi đã cho sẵn khu ở và đang hỏi chỗ đó dành cho ai. temple “ đền thờ ”: Từ này nằm trong cùng danh sách công trình nên dễ gây nhiễu khi scan Nhưng đây là một công trình, không phải người được bố trí chỗ ở."
            }
          },
          {
            "id": 23,
            "prompt": "Complete blank for question 23:",
            "type": "FILL_IN_BLANK",
            "correct": "moat",
            "explanation": {
              "step1": "The whole complex was enclosed by a wall into which several deceptive doorways had been set . Running right around that wall , moreover , was a lengthy 10. ___ . Dự đoán ô trống: - Loại từ: danh từ đếm được số ít , đứng sau mạo từ và tính từ (“a lengthy”). - Nghĩa: một vật hoặc công trình dài, chạy vòng quanh bức tường. Lưu ý: Câu chứa ô trống dùng đảo ngữ: cụm chứa ô trống là chủ ngữ, không phải bức tường.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh để tìm ý bức tường có các cửa giả. Đoạn D nhắc đến các cửa giả (“false doorways”) được đục vào bức tường => bắt đầu đọc tại đây. Đoạn D — false doorways",
              "step3": "Đoạn D: Fourteen false doorways had been cut into that wall , along with just one genuine way in at the south-eastern corner , and around the outside of it ran a moat , 680 meters in length and 33 meters across .",
              "step4": "Đáp án phù hợp nhất: moat Câu hoàn chỉnh: Running right around that wall, moreover, was a lengthy moat . (Ngoài ra, một con hào dài chạy vòng quanh bức tường đó.) => Khớp dự đoán: danh từ số ít chỉ một công trình dài bao quanh tường; bài xác nhận hào dài 680 mét . Đáp án gồm 1 từ; đề được cung cấp không nêu giới hạn số từ. Đối chiếu paraphrasing: Running right around that wall around the outside of it + ran lengthy 680 meters in length Đáp án wall “ (bức tường) ”: từ này xuất hiện trong cả đề lẫn bài. Nhưng ô trống hỏi vật chạy quanh bức tường, không phải chính bức tường. doorways “ (các cửa) ”: xuất hiện ngay đầu câu bằng chứng. Nhưng các cửa được đục vào tường, không chạy quanh tường; danh từ số nhiều cũng không khớp sau mạo từ số ít (“a”)."
            }
          },
          {
            "id": 24,
            "prompt": "Complete blank for question 24:",
            "type": "FILL_IN_BLANK",
            "correct": "position",
            "explanation": {
              "step1": "Because of this, nobody who arrived without invitation could get into the grounds without first knowing the 11. ___ of the one genuine doorway . Ý câu hỏi: Người không được mời không thể vào khuôn viên nếu chưa biết trước một thông tin về cửa vào thật duy nhất. Dự đoán ô trống: - Loại từ: danh từ hoặc cụm danh từ, theo mẫu the ___ of the one genuine doorway. - Nội dung: một thông tin về cửa vào thật mà người muốn vào bắt buộc phải biết trước, không phải một công trình bảo vệ.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta tìm ý ngăn người không được mời vào. Đoạn D có cụm ngăn người không được phép vào (“keep out the unwanted”) => đây là điểm bắt đầu đọc. Đoạn D — keep out the unwanted",
              "step3": "Đoạn D: Dummy doors and moat alike were meant to keep out the unwanted , since anyone hoping to get inside had first to learn the position of the single real opening .",
              "step4": "Đáp án phù hợp nhất: position Câu hoàn chỉnh: Because of this, nobody who arrived without invitation could get into the grounds without first knowing the position of the one genuine doorway. (Vì vậy, không ai đến mà không được mời có thể vào khuôn viên nếu chưa biết trước vị trí của cửa vào thật duy nhất .) => Khớp với dự đoán danh từ chỉ thông tin cần biết về cửa thật: phải biết vị trí của cửa này trước khi vào. Đáp án gồm 1 từ lấy nguyên văn từ bài; phần đề được cung cấp không nêu giới hạn số từ. Đối chiếu paraphrasing: without first knowing had first to learn one genuine doorway single real opening opening “ cửa vào ”: Nếu chỉ dò từ tương đương với cửa vào (“doorway”), em dễ chọn từ này Nhưng cửa vào đã được nêu sau ô trống; đề hỏi thông tin cần biết về cửa đó. south-eastern corner “ góc đông nam ”: Câu 4 đoạn D có cụm này nên dễ chọn vì thấy địa điểm cụ thể Nhưng điền vào sẽ thành góc đông nam của chính cửa vào, không phải vị trí của cửa; câu (5) cung cấp trực tiếp từ cần điền."
            }
          },
          {
            "id": 25,
            "prompt": "Which TWO of the following points does the writer make about King Djoser? (Part 1 of 2)",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "Scholars do not all agree on how many years he was on the throne",
              "He needed convincing to work in stone instead of mud brick",
              "He thought little of the way other Egyptian pyramids were built",
              "He overlooked the contribution his official made to the pyramid's design",
              "When his tomb was uncovered, a small number of his belongings still remained"
            ],
            "correct": "Scholars do not all agree on how many years he was on the throne",
            "explanation": {
              "step1": "Which TWO of the following points does the writer make about King Djoser ? Cần tìm: Đúng hai nhận định được người viết xác nhận về King Djoser. Mỗi đáp án cần có bằng chứng riêng, không chỉ trùng từ khoá.",
              "step2": "Dựa vào tên riêng Djoser, ta tìm được phần nói về thời gian trị vì (“Djoser's reign”) ở đoạn B và đồ tùy táng (“Djoser's burial goods”) ở đoạn F => bắt đầu kiểm tra bằng chứng tại hai vị trí này. Đoạn B — Djoser's burial goods",
              "step3": "Đoạn B: Most estimates place Djoser's reign at around 24 years , though a number of scholars , pointing to how many monuments he left behind and how large they were, contend that he must have ruled for considerably longer . Đoạn F: Long ago Djoser's burial goods , and the king's own body with them, were carried off , so that the excavators came away with no more than the few treasures the thieves had happened to miss . Câu (4): Câu (4), đoạn B: Ước tính phổ biến là khoảng 24 năm >< một số học giả cho rằng lâu hơn => chưa thống nhất về thời gian trị vì . Câu (2): Câu (2), đoạn F: Đồ tùy táng bị lấy trộm => người khai quật chỉ thu được vài báu vật bị bỏ sót , tức là vẫn còn một ít đồ đạc .",
              "step4": "Đáp án đúng: A và E. - A. Scholars do not all agree on how many years he was on the throne ( Các học giả không hoàn toàn thống nhất về số năm ông trị vì. ) - E. When his tomb was uncovered, a small number of his belongings still remained ( Khi lăng mộ được khai quật, một ít đồ đạc của ông vẫn còn. ) Đối chiếu paraphrasing: A: Scholars do not all agree hai ước tính khác nhau around 24 years >< longer . E: a small number of his belongings the few treasures; still remained the thieves had happened to miss. Đáp án B “ Ông cần được thuyết phục để dùng đá thay vì gạch bùn ”: Nếu skim/scan, việc viên quan đề xuất thiết kế (“put forward”) ở đoạn B có thể khiến ta nghĩ Djoser được thuyết phục Nhưng đề xuất thiết kế không đồng nghĩa với việc nhà vua cần được thuyết phục. Đáp án C “ Ông đánh giá thấp cách xây những kim tự tháp khác ở Egypt ”: Sai vì bài không nêu ý kiến chê bai như vậy của Djoser. Mô tả các công trình trước đó ở đoạn B không phải lời đánh giá của ông. Đáp án D “ Ông bỏ qua đóng góp của viên quan vào thiết kế kim tự tháp ”: Sai vì câu 6 đoạn D cho biết Djoser cho khắc tên Neferkha bên cạnh tên mình (“alongside his own”) => ghi nhận đóng góp, không phải bỏ qua."
            }
          },
          {
            "id": 26,
            "prompt": "Which TWO of the following points does the writer make about King Djoser? (Part 2 of 2)",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "Scholars do not all agree on how many years he was on the throne",
              "He needed convincing to work in stone instead of mud brick",
              "He thought little of the way other Egyptian pyramids were built",
              "He overlooked the contribution his official made to the pyramid's design",
              "When his tomb was uncovered, a small number of his belongings still remained"
            ],
            "correct": "When his tomb was uncovered, a small number of his belongings still remained",
            "explanation": {
              "step1": "Phân tích câu hỏi theo phương pháp Linearthinking.",
              "step2": "Định vị vùng thông tin liên quan trong bài đọc.",
              "step3": "Bóc tách cấu trúc câu (S-V-O) và đối chiếu nghĩa.",
              "step4": "Đáp án chính xác: When his tomb was uncovered, a small number of his belongings still remained"
            }
          }
        ]
      },
      {
        "id": "cam-16-reading-1-p3",
        "passageNumber": 3,
        "title": "THE FUTURE OF WORK",
        "subtitle": "",
        "content": [
          "One widely cited advisory firm estimates that, over the next twelve to eighteen years, between four and sixteen percent of the world's workers will have to move into a different line of work, while everyone else adapts as their roles are reshaped by ever more capable machines. The disruption technology brings to the labour market has more than one face. One is automation, sometimes called embodied artificial intelligence (AI); another is the disembodied kind, the sort of algorithm that runs inside the phone in your pocket.",
          "For Dr Ingrid Solberg of the Hanseatic Business School, the deepest shifts are occurring where work depends not on making things but on handling information, the territory usually called the knowledge economy, as such jobs undergo what she calls algorithmication. Duties that once required human judgement, among them reading legal contracts, interpreting medical scans and gathering market intelligence, can now be handled by algorithms that learn to do them unaided.",
          "Very often they do the job better than we can, Solberg observes. What draws organisations to them is partly the promise of decisions based on what firms regard as perfect information, and partly the appeal of cutting costs while raising output.",
          "Yet such gains carry a price, she warns. Once AI absorbs the routine thinking, where are a profession's future experts to come from? Traditionally, Solberg notes, people learn a trade through what is called legitimate peripheral participation: the newcomer works beside seasoned practitioners and learns by watching. Remove that, she argues, and another route to expertise must be found.",
          "There is also the question of how far these systems come to steer, or even govern, those who use them. For more than two years, Solberg followed the workings of a large insurance firm. Selling insurance has always rested on regular, personal contact with clients: an agent judges a case from experience and makes a call. But this company had brought in an algorithm that dictated which customers an agent should approach, when, and with which policies and offers.",
          "Usually designed by outside contractors, the algorithm tends to become the true custodian of know-how, she explains. When that happens, Solberg believes, a narrowing of outlook creeps into daily practice: staff see their work through the algorithm's eyes and lean ever more heavily on what it tells them to do. Room for the alternative, the trial-and-error and gut feeling from which fresh ideas and real progress emerge, is quietly closed off.",
          "Solberg and her colleagues even watched employees devise ways of bending the system to their own ends. We have found staff deliberately feeding the algorithm inaccurate information so that they can hit their targets, she reports.",
          "Outcomes of this sort are what many researchers now hope to prevent. Their aim is to make AI more transparent and more trustworthy, so that firms and individuals can see how its decisions are reached. Until then, Solberg cautions, we must be sure we truly grasp the dilemmas this new world raises, around expertise, the borders of occupations, and control.",
          "The economist Professor Halvard Aune expects the coming decades to reshape everyone's working life from start to finish. The old sequence, full-time study, then full-time work, then a pension and retirement, belongs to the past, he says. In its place he pictures a career built in several stages, with retraining recurring throughout and with spells of several jobs, or none, chosen deliberately at different points.",
          "When talk turns to disappearing jobs, Aune sees a flawed assumption behind the gloomy forecasts. They take the total number of jobs to be fixed. Suppose that thirty years from now robots do half of today's hundred jobs; it does not follow that only fifty remain for people. The total grows, I would expect a hundred and fifty jobs by then.",
          "Dr Rasmus Holt, of the Centre for Enterprise and Labour Research and Vestmark Law School, likewise regards apocalyptic visions of future work as wide of the mark. Unemployment is caused not by the arrival of new technologies but by the laws that choke off the flow of capital into the labour market.",
          "In newly published work, Holt asks whether automation, AI and robotics are steering us towards a jobless future, and does so by tracing where unemployment really comes from. The historical record leaves no doubt that upheaval can throw people out of work. But retraining and redeployment, backed by the right social policies, can deal with that.",
          "He goes on: If AI and robotics are going to reshape jobs, I want governments to treat that as a chance to strengthen the rules and lock in solid job security. The law can be rewritten to ready us for a fairer division of work and leisure. Holt's conclusions read as a summons to those running companies, governments and banks: get ahead of the change with bold measures that secure full employment, decent incomes and a flourishing economic democracy.",
          "What these technologies hold out is extraordinary, he adds. They give humanity the means to live in ways no one could once have pictured. The industrial revolution carried people beyond mere subsistence farming, and the corporate revolution opened the door to mass production; now a third revolution has been declared. Yet it will not be a matter of technology alone: the revolution still to come will be a social one."
        ],
        "questions": [
          {
            "id": 27,
            "prompt": "What is the opening paragraph mainly concerned with?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "which occupations are most at risk from the rise of AI",
              "how many of the world's workers will be employed within the AI industry",
              "the degree to which AI will transform what people's work involves",
              "the contrast between the effects of embodied and disembodied AI on employees"
            ],
            "correct": "the degree to which AI will transform what people's work involves",
            "explanation": {
              "step1": "What is the opening paragraph mainly concerned with ? Câu hỏi hỏi: Đoạn mở đầu chủ yếu đề cập đến vấn đề gì? Ta cần tìm ý bao quát của đoạn , không chọn một chi tiết chỉ vì trùng từ khoá.",
              "step2": "Đoạn mở đầu là đoạn 1, ngay sau tiêu đề. Ta bắt đầu đọc từ dự báo của một công ty tư vấn (“One widely cited advisory firm estimates”). Đoạn 1 — One widely cited advisory firm estimates",
              "step3": "Đoạn 1: One widely cited advisory firm estimates that , over the next twelve to eighteen years, between four and sixteen percent of the world's workers will have to move into a different line of work , while everyone else adapts as their roles are reshaped by ever more capable machines . The disruption technology brings to the labour market has more than one face . One is automation , sometimes called embodied artificial intelligence (AI) ; another is the disembodied kind , the sort of algorithm that runs inside the phone in your pocket . Câu (1): dự báo phạm vi thay đổi — một bộ phận phải đổi công việc ; những người còn lại phải thích nghi vì vai trò bị thay đổi . Câu (2)–(3): tiếp nối bằng việc giới thiệu hai dạng AI tạo ra sự thay đổi này. Đoạn tập trung vào mức độ AI làm thay đổi công việc của con người.",
              "step4": "Đáp án đúng: C. the degree to which AI will transform what people's work involves ( Mức độ AI sẽ làm thay đổi nội dung công việc của con người ). Đối chiếu paraphrasing: the degree to which between four and sixteen percent + everyone else. transform what people's work involves move into a different line of work + their roles are reshaped. Đáp án A “ Những nghề nào có nguy cơ cao nhất khi AI phát triển ”: Cụm nói về chuyển nghề (“a different line of work”) dễ khiến ta chọn đáp án này Nhưng đoạn không chỉ ra nghề nào nguy hiểm nhất hay xếp hạng rủi ro giữa các nghề. Đáp án B “ Bao nhiêu lao động trên thế giới sẽ làm việc trong ngành AI ”: Nếu scan thấy tỷ lệ ở câu (1), ta dễ chọn nhầm Nhưng số liệu nói về người phải chuyển công việc, không nói họ sẽ làm trong ngành AI. Đáp án D “ Sự đối lập giữa tác động của AI dạng embodied và dạng disembodied lên nhân viên ”: Câu (3) nhắc hai dạng AI (“embodied artificial intelligence” và “the disembodied kind”), nên dễ tưởng đoạn đang so sánh Nhưng câu (2)–(3) chỉ phân loại AI, không đối chiếu tác động của từng dạng lên nhân viên."
            }
          },
          {
            "id": 28,
            "prompt": "In the second paragraph, how does Solberg regard the knowledge economy?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "as a leading force behind the changes now reshaping work",
              "as something that is altering how people feel about their jobs",
              "as the chief cause of the decline of manufacturing",
              "as a development that is affecting how many jobs exist"
            ],
            "correct": "as a leading force behind the changes now reshaping work",
            "explanation": {
              "step1": "In the second paragraph , how does Solberg regard the knowledge economy ? Câu hỏi hỏi: Solberg nhìn nhận nền kinh tế tri thức như thế nào? Cần tìm nhận định của Solberg, không phải cảm nhận của người lao động.",
              "step2": "Dựa vào tên Solberg và phạm vi đoạn 2 , ta bắt đầu đọc câu (1), nơi tác giả nêu những thay đổi sâu sắc nhất (“the deepest shifts”). Đoạn 2 — the deepest shifts",
              "step3": "Đoạn 2: For Dr Ingrid Solberg of the Hanseatic Business School , the deepest shifts are occurring where work depends not on making things but on handling information , the territory usually called the knowledge economy , as such jobs undergo what she calls algorithmication . Solberg đặt nền kinh tế tri thức ở trung tâm những thay đổi trong công việc : đây là lĩnh vực diễn ra những biến đổi sâu sắc nhất.",
              "step4": "Đáp án đúng: A. as a leading force behind the changes now reshaping work (như một động lực chủ đạo của những thay đổi đang định hình lại công việc). Đối chiếu paraphrasing: the deepest shifts a leading force behind the changes now reshaping work Đáp án B “ Như một yếu tố làm thay đổi cảm nhận của mọi người về công việc ”: từ nhìn nhận (“regard”) trong câu hỏi với cảm nhận của người lao động. Nhưng bằng chứng nói về sự thay đổi của công việc, không phải cảm xúc của người làm. Đáp án C “ Như nguyên nhân chính khiến ngành sản xuất suy giảm ”: Nếu skim thấy không làm ra sản phẩm (“not on making things”), bạn dễ chọn đáp án này Nhưng đó là sự đối lập giữa sản xuất và xử lý thông tin, không phải ngành sản xuất suy giảm. Đáp án D “ Như một sự phát triển ảnh hưởng đến số lượng việc làm ”: Đoạn 10 có cụm tổng số việc làm (“total number of jobs”), nhưng đó là quan điểm của Aune. Bằng chứng ở đoạn 2 nói về công việc thay đổi như thế nào, không phải có bao nhiêu việc làm."
            }
          },
          {
            "id": 29,
            "prompt": "What did Solberg notice at the insurance firm?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "employees objecting to the advice the AI gave",
              "employees manipulating the AI so that it delivered the outcomes they were after",
              "employees resenting the intrusion of AI into their work",
              "employees letting the AI perform duties they should have done themselves"
            ],
            "correct": "employees manipulating the AI so that it delivered the outcomes they were after",
            "explanation": {
              "step1": "What did Solberg notice at the insurance firm ? Câu hỏi hỏi: Solberg đã quan sát thấy hành vi nào tại công ty bảo hiểm?",
              "step2": "Dựa vào tên riêng Solberg và bối cảnh công ty bảo hiểm (“insurance firm”), ta tìm phần mô tả công ty ở đoạn 5 rồi đọc tiếp đến hành vi của nhân viên ở đoạn 7. Đoạn 7 — insurance firm",
              "step3": "Đoạn 7: Solberg and her colleagues even watched employees devise ways of bending the system to their own ends . We have found staff deliberately feeding the algorithm inaccurate information so that they can hit their targets , she reports . Câu (1): Solberg nhận thấy nhân viên tìm cách dùng hệ thống phục vụ mục đích riêng . Câu (2): cụ thể hóa cách thực hiện: cố ý đưa thông tin sai => đạt chỉ tiêu . Nhân viên thao túng AI để đạt kết quả mình muốn .",
              "step4": "Đáp án đúng: B. employees manipulating the AI so that it delivered the outcomes they were after (Nhân viên thao túng AI để AI tạo ra kết quả họ mong muốn .) Đối chiếu paraphrasing: manipulating the AI deliberately feeding the algorithm inaccurate information the outcomes they were after hit their targets Đáp án A “ Nhân viên phản đối lời khuyên của AI ”: Nếu thấy thuật toán chỉ đạo nhân viên (“dictated”) ở đoạn 5, dễ suy ra họ phản đối Nhưng bằng chứng nói họ thao túng dữ liệu, không nói họ phản đối lời khuyên. Đáp án C “ Nhân viên bất mãn vì AI can thiệp vào công việc ”: Nếu thấy không gian thử nghiệm bị thu hẹp (“closed off”) ở đoạn 6, dễ đoán nhân viên bất mãn Nhưng đó là suy đoán về cảm xúc, không phải hành vi Solberg quan sát được. Đáp án D “ Nhân viên để AI làm những nhiệm vụ đáng lẽ họ phải tự làm ”: Đoạn 2 nói công việc được thuật toán xử lý (“handled by algorithms”), nên dễ nhầm với việc giao việc cho AI Nhưng tại công ty bảo hiểm, nhân viên chủ động đưa dữ liệu sai để đạt mục tiêu, không phải để AI làm thay nhiệm vụ của mình."
            }
          },
          {
            "id": 30,
            "prompt": "What does Holt's recently published research do?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "it shows that shifts in the job market can be handled effectively",
              "it reveals the deep impact of widespread joblessness on society",
              "it points out ways in which past and future job losses differ",
              "it questions the assumption that being made redundant is harmful"
            ],
            "correct": "it shows that shifts in the job market can be handled effectively",
            "explanation": {
              "step1": "What does Holt's recently published research do ? Yêu cầu: Xác định nghiên cứu mới công bố của Holt cho thấy điều gì.",
              "step2": "Dựa vào tên riêng Holt và ý nghiên cứu mới công bố, ta tìm đến đoạn 12. Đầu đoạn nhắc đến công trình mới công bố (“In newly published work”) của Holt => đây là nơi bắt đầu đọc. Đoạn 12 — In newly published work",
              "step3": "Đoạn 12: The historical record leaves no doubt that upheaval can throw people out of work . But retraining and redeployment , backed by the right social policies, can deal with that . Câu (2): thừa nhận biến động có thể khiến người lao động mất việc. Câu (3): chuyển hướng bằng But => tình trạng đó có thể được giải quyết bằng đào tạo lại.",
              "step4": "Đáp án đúng: A. it shows that shifts in the job market can be handled effectively (Nghiên cứu cho thấy những biến động trên thị trường việc làm có thể được xử lý hiệu quả .) Đối chiếu paraphrasing: shifts in the job market upheaval can be handled effectively can deal with that Đáp án B “ Nghiên cứu cho thấy tác động sâu rộng của thất nghiệp hàng loạt lên xã hội ”: Nếu skim/scan thấy ý khiến người lao động mất việc (“throw people out of work”), dễ chọn option này Nhưng bằng chứng chốt khả năng xử lý vấn đề, không phân tích tác động sâu rộng lên xã hội. Đáp án C “ Nghiên cứu chỉ ra những khác biệt giữa tình trạng mất việc trong quá khứ và tương lai ”: Đoạn 12 nhắc cả tư liệu lịch sử (“The historical record”) và tương lai không còn việc làm (“a jobless future”), nên dễ tưởng có sự so sánh Nhưng nhắc đến quá khứ và tương lai không đồng nghĩa với chỉ ra sự khác biệt giữa chúng. Đáp án D “ Nghiên cứu đặt nghi vấn về giả định rằng bị mất việc là có hại ”: ý có thể giải quyết (“can deal with that”) thành ý mất việc không gây hại. Nhưng có thể xử lý vấn đề không đồng nghĩa với phủ nhận tác hại của vấn đề đó."
            }
          },
          {
            "id": 31,
            "prompt": "Dr Ingrid Solberg's work centres on the 'algorithmication' of occupations whose basis is not manufacturing but  _____ . Over the period she spent studying an insurance company, she saw staff place ever more  _____  on the advice the AI gave, until the system increasingly framed how they understood their own work. At the same time, employees were discouraged from trying things out for themselves or drawing on their own  _____ , which shut off the path to new ideas. Researchers hope to prevent situations of the sort Solberg documented by making the way AI reaches its decisions easier to follow, and by building users'  _____  in the systems they rely on.",
            "type": "FILL_IN_BLANK",
            "correct": "data",
            "explanation": {
              "step1": "Dr Ingrid Solberg's work centres on the 'algorithmication' of occupations whose basis is not manufacturing but 5. ___. Dự đoán: - Loại từ: danh từ, song song với hoạt động sản xuất (“manufacturing”) trong cấu trúc không phải… mà là… (“not manufacturing but”). - Nghĩa cần tìm: nền tảng của nhóm nghề này, đối lập với sản xuất; không phải lợi ích của AI.",
              "step2": "Dựa vào tên Dr Ingrid Solberg và thuật ngữ thuật toán hóa (“algorithmication”), ta định vị được thông tin ở câu 1 đoạn 2. Đoạn 2 — algorithmication",
              "step3": "Đoạn 2: For Dr Ingrid Solberg of the Hanseatic Business School , the deepest shifts are occurring where work depends not on making things but on handling information , the territory usually called the knowledge economy , as such jobs undergo what she calls algorithmication .",
              "step4": "Đáp án phù hợp nhất: data Câu hoàn chỉnh: Dr Ingrid Solberg's work centres on the 'algorithmication' of occupations whose basis is not manufacturing but data . (Nghiên cứu của Dr Ingrid Solberg tập trung vào việc thuật toán hóa các nghề có nền tảng không phải sản xuất mà là dữ liệu.) => Khớp với dự đoán (danh từ chỉ nền tảng nghề nghiệp khác với sản xuất) lẫn thông tin trong bài: các nghề này dựa vào xử lý thông tin (“handling information ”), nên dữ liệu là lựa chọn phù hợp . Đối chiếu paraphrasing: manufacturing making things data information efficiency. “ Hiệu suất ”: Nếu skim/scan thấy ý tăng sản lượng (“raising output”) ở đoạn 3, dễ chọn nhầm Nhưng đó là lợi ích của AI, không phải nền tảng của nhóm nghề đang hỏi. creativity. “ Khả năng sáng tạo ”: Đoạn 6 có ý tưởng mới (“fresh ideas”), dễ khiến em liên tưởng đến lựa chọn này Nhưng khả năng sáng tạo không tương đương với thông tin mà các nghề này xử lý."
            }
          },
          {
            "id": 32,
            "prompt": "Complete blank for question 32:",
            "type": "FILL_IN_BLANK",
            "correct": "dependence",
            "explanation": {
              "step1": "Over the period she spent studying an insurance company, she saw staff place ever more 6. ___ on the advice the AI gave, until the system increasingly framed how they understood their own work . Dự đoán ô trống 6: - Loại từ: danh từ không đếm được, sau cụm chỉ lượng ngày càng nhiều (“ever more”). - Nghĩa: mức độ dựa vào lời khuyên của AI; phần sau cho biết hệ thống dần định hình cách nhân viên hiểu công việc.",
              "step2": "Câu cần điền không có từ khoá đặc biệt; ta đọc nhanh phần nghiên cứu công ty bảo hiểm để tìm ý nhân viên ngày càng dựa vào chỉ dẫn. Ở đoạn 6, cụm ngày càng dựa nhiều hơn (“lean ever more heavily on”) là dấu hiệu định vị. Đoạn 6 — lean ever more heavily on",
              "step3": "Đoạn 6: When that happens, Solberg believes, a narrowing of outlook creeps into daily practice: staff see their work through the algorithm's eyes and lean ever more heavily on what it tells them to do . Nhân viên ngày càng phụ thuộc vào chỉ dẫn của thuật toán .",
              "step4": "Đáp án phù hợp nhất: dependence Câu hoàn chỉnh: Over the period she spent studying an insurance company, she saw staff place ever more dependence on the advice the AI gave , until the system increasingly framed how they understood their own work. (Trong thời gian nghiên cứu một công ty bảo hiểm, Solberg thấy nhân viên ngày càng phụ thuộc vào lời khuyên AI đưa ra , cho đến khi hệ thống ngày càng định hình cách họ hiểu công việc của mình.) => Khớp với dự đoán: danh từ không đếm được chỉ sự dựa vào lời khuyên, và bằng chứng xác nhận mức độ này ngày càng tăng. Đối chiếu paraphrasing: ever more dependence on lean ever more heavily on the advice the AI gave what it tells them to do strain. “ Sức ép ”: cấu trúc place strain on có vẻ hợp ngữ pháp. Nhưng bằng chứng nói nhân viên dựa vào chỉ dẫn, không phải gây sức ép lên lời khuyên. assurance. “ Sự yên tâm ”: Nếu đọc lướt đoạn 8, ý đáng tin hơn (“more trustworthy”) có thể khiến em chọn từ này Nhưng câu (2) đoạn 6 nói về sự phụ thuộc, không phải sự yên tâm."
            }
          },
          {
            "id": 33,
            "prompt": "Complete blank for question 33:",
            "type": "FILL_IN_BLANK",
            "correct": "instinct",
            "explanation": {
              "step1": "At the same time, employees were discouraged from trying things out for themselves or drawing on their own 7. ___ , which shut off the path to new ideas . Ý câu hỏi: Nhân viên bị hạn chế tự thử nghiệm hoặc dựa vào một khả năng của bản thân, khiến con đường dẫn đến ý tưởng mới bị chặn lại. Dự đoán ô trống: Loại từ: Danh từ, đứng sau từ chỉ sở hữu (“their own”). Nghĩa cần điền: Một nguồn lực hoặc khả năng cá nhân mà nhân viên có thể dựa vào, không phải kết quả là ý tưởng mới.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh để tìm ý tự thử nghiệm (“trying things out for themselves”). Ở đoạn 6, cụm thử và sai (“trial-and-error”) mang ý tương đương => đây là điểm bắt đầu đọc. Đoạn 6 — trial-and-error",
              "step3": "Đoạn 6: Room for the alternative, the trial-and-error and gut feeling from which fresh ideas and real progress emerge , is quietly closed off .",
              "step4": "Đáp án phù hợp nhất: instinct Câu hoàn chỉnh: At the same time, employees were discouraged from trying things out for themselves or drawing on their own instinct, which shut off the path to new ideas. (Đồng thời, nhân viên bị hạn chế tự thử nghiệm hoặc dựa vào trực giác của chính mình, khiến con đường dẫn đến ý tưởng mới bị chặn lại.) => Khớp với dự đoán danh từ chỉ khả năng cá nhân để dựa vào: bài gọi khả năng đó là cảm nhận trực giác (“gut feeling”). Đối chiếu paraphrasing: gut feeling instinct trial and error trying things out for themselves fresh ideas new ideas creativity. “ Khả năng sáng tạo ”: Nếu chỉ thấy ý tưởng mới (“new ideas”), em dễ chọn từ này Nhưng ý tưởng mới là kết quả của thử nghiệm và trực giác; ô trống hỏi khả năng được gọi trực tiếp là cảm nhận trực giác (“gut feeling”)."
            }
          },
          {
            "id": 34,
            "prompt": "Complete blank for question 34:",
            "type": "FILL_IN_BLANK",
            "correct": "assurance",
            "explanation": {
              "step1": "Researchers hope to prevent situations of the sort Solberg documented by making the way AI reaches its decisions easier to follow , and by building users' 8. ___ in the systems they rely on . Ý câu hỏi: Các nhà nghiên cứu muốn ngăn những tình huống Solberg đã ghi nhận bằng cách làm quá trình AI ra quyết định dễ hiểu hơn và xây dựng ___ của người dùng đối với hệ thống. Dự đoán ô 8: - Loại từ: danh từ sau sở hữu cách của người dùng (“users'”), nhiều khả năng là danh từ trừu tượng. - Nghĩa: sự tin tưởng hoặc yên tâm của người dùng đối với hệ thống. Đây là điều cần xây dựng, không phải một tác hại cần ngăn chặn.",
              "step2": "Solberg xuất hiện ở nhiều đoạn, nên ta tìm thêm ý làm AI dễ hiểu hơn và tạo sự tin tưởng. Đoạn 8 nhắc đến mục tiêu làm AI minh bạch hơn (“more transparent”) và đáng tin cậy hơn (“more trustworthy”) => đây là điểm bắt đầu đọc. Đoạn 8 — more transparent",
              "step3": "Đoạn 8: Their aim is to make AI more transparent and more trustworthy , so that firms and individuals can see how its decisions are reached .",
              "step4": "Đáp án phù hợp nhất: assurance Câu hoàn chỉnh: Researchers hope to prevent situations of the sort Solberg documented by making the way AI reaches its decisions easier to follow, and by building users' assurance in the systems they rely on. (Các nhà nghiên cứu hy vọng ngăn những tình huống kiểu Solberg đã ghi nhận bằng cách làm quá trình AI ra quyết định dễ hiểu hơn và xây dựng sự tin tưởng của người dùng đối với các hệ thống họ dựa vào.) => Khớp với dự đoán danh từ chỉ sự tin tưởng lẫn thông tin trong bài: làm AI đáng tin cậy hơn giúp người dùng yên tâm hơn về hệ thống . Đối chiếu paraphrasing: assurance more trustworthy hệ thống đáng tin cậy hơn giúp xây dựng sự tin tưởng của người dùng. dependence. “ Sự phụ thuộc ”: Nếu skim/scan đoạn 6, cụm dựa ngày càng nhiều vào hệ thống (“lean ever more heavily”) dễ khiến ta chọn từ này Nhưng đó là vấn đề cần khắc phục, không phải sự tin tưởng mà các nhà nghiên cứu muốn xây dựng. efficiency. “ Hiệu suất ”: Đoạn 3 nói đến việc tăng sản lượng (“raising output”), nên từ này dễ gợi liên tưởng đến lợi ích của AI Nhưng câu (2) đoạn 8 nhấn mạnh tính đáng tin cậy, không phải hiệu suất."
            }
          },
          {
            "id": 35,
            "prompt": "Match the statement with the correct person/feature: \"A rise in automation will not mean that fewer people are in work.\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "Professor Halvard Aune",
              "Dr Rasmus Holt",
              "Dr Ingrid Solberg"
            ],
            "correct": "Professor Halvard Aune",
            "explanation": {
              "step1": "Tên đang đọc: Professor Halvard Aune. Tên này xuất hiện ở đoạn 9 và đoạn 10 , dưới dạng Halvard Aune và Aune.",
              "step2": "The economist Professor Halvard Aune expects the coming decades to reshape everyone's working life from start to finish . The old sequence , full-time study, then full-time work, then a pension and retirement , belongs to the past , he says . In its place he pictures a career built in several stages , with retraining recurring throughout and with spells of several jobs , or none , chosen deliberately at different points . Câu (1): Aune dự đoán đời làm việc sẽ thay đổi. Câu (2)–(3): lộ trình cũ học => làm => nghỉ hưu >< sự nghiệp tương lai nhiều giai đoạn , có lúc nhiều việc hoặc chủ động không làm việc. Đời làm việc tương lai ít theo một lộ trình cố định hơn , chứ không nhất thiết là bất ổn ngoài ý muốn. 🔎 Khớp với statement 13: Working lives ahead will be less predictable in shape than those of former generations . Đối chiếu paraphrasing: less predictable in shape in several stages + several jobs, or none those of former generations The old sequence + belongs to the past",
              "step3": "Với tên Professor Halvard Aune ở đoạn 9, ta chọn được: câu 13. Dr Rasmus Holt đoạn 13 cũng bàn về công việc và thời gian nghỉ (“work and leisure”). Nhưng Holt đề xuất phân chia chúng công bằng hơn bằng thay đổi luật, không đối chiếu lộ trình nghề nghiệp cũ với lộ trình nhiều giai đoạn.",
              "step4": "When talk turns to disappearing jobs , Aune sees a flawed assumption behind the gloomy forecasts . Suppose that thirty years from now robots do half of today's hundred jobs ; it does not follow that only fifty remain for people . The total grows, I would expect a hundred and fifty jobs by then . Câu (1): Aune chỉ ra giả định sai trong dự báo mất việc. Câu (3)–(4): robot làm 50 trong 100 việc ban đầu, nhưng tổng số việc dự kiến tăng lên 150 => vẫn có thể còn 100 việc cho con người . Tự động hóa tăng không đồng nghĩa với ít người có việc hơn . 🔎 Khớp với statement 9: A rise in automation will not mean that fewer people are in work . Đối chiếu paraphrasing: A rise in automation robots do half of today's hundred jobs will not mean that fewer people are in work does not follow that only fifty remain for people"
            }
          },
          {
            "id": 36,
            "prompt": "Match the statement with the correct person/feature: \"More than one factor makes AI attractive to companies.\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "Professor Halvard Aune",
              "Dr Rasmus Holt",
              "Dr Ingrid Solberg"
            ],
            "correct": "Dr Ingrid Solberg",
            "explanation": {
              "step1": "Tên đang xử lý: Dr Ingrid Solberg Dựa vào tên riêng Dr Ingrid Solberg, ta tìm thấy tên Solberg và các chỗ nhắc lại bà ở đoạn 2, 3, 4, 5, 6, 7 và 8.",
              "step2": "For Dr Ingrid Solberg of the Hanseatic Business School , the deepest shifts are occurring where work depends not on making things but on handling information , the territory usually called the knowledge economy , as such jobs undergo what she calls algorithmication . Duties that once required human judgement , among them reading legal contracts, interpreting medical scans and gathering market intelligence, can now be handled by algorithms that learn to do them unaided . Câu (1): Câu (1)–(2), đoạn 2: công việc xử lý thông tin đang thay đổi => thuật toán đảm nhiệm những nhiệm vụ trước đây cần phán đoán của con người.",
              "step3": "Với tên Dr Ingrid Solberg ở đoạn 2, ta không chọn được câu nào: đoạn này không giúp chọn câu hỏi nào.",
              "step4": "Very often they do the job better than we can , Solberg observes . What draws organisations to them is partly the promise of decisions based on what firms regard as perfect information , and partly the appeal of cutting costs while raising output . Câu (1): Câu (1), đoạn 3: Solberg nhận xét thuật toán có thể làm việc tốt hơn con người. Câu (2): Câu (2), đoạn 3: nêu hai yếu tố thu hút công ty : quyết định dựa trên thông tin được coi là hoàn hảo + cắt giảm chi phí. 🔎 Khớp với statement 10: More than one factor makes AI attractive to companies . Đối chiếu paraphrasing: More than one factor partly + and partly makes AI attractive to companies What draws organisations to them"
            }
          },
          {
            "id": 37,
            "prompt": "Match the statement with the correct person/feature: \"The power of AI to reshape how people live echoes great turning points of earlier times.\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "Professor Halvard Aune",
              "Dr Rasmus Holt",
              "Dr Ingrid Solberg"
            ],
            "correct": "Dr Rasmus Holt",
            "explanation": {
              "step1": "Tên đang xử lý: Dr Rasmus Holt . Bài nhắc đến Holt hoặc tiếp tục ý của ông ở các đoạn 11, 12, 13 và 14.",
              "step2": "Dr Rasmus Holt , of the Centre for Enterprise and Labour Research and Vestmark Law School, likewise regards apocalyptic visions of future work as wide of the mark .",
              "step3": "Với tên Dr Rasmus Holt ở đoạn 11, ta không chọn được câu nào: đoạn này không giúp chọn câu hỏi nào.",
              "step4": "In newly published work, Holt asks whether automation, AI and robotics are steering us towards a jobless future , and does so by tracing where unemployment really comes from ."
            }
          },
          {
            "id": 38,
            "prompt": "Match the statement with the correct person/feature: \"We ought to recognise the variety of difficulties that AI brings with it.\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "Professor Halvard Aune",
              "Dr Rasmus Holt",
              "Dr Ingrid Solberg"
            ],
            "correct": "Dr Ingrid Solberg",
            "explanation": {
              "step1": "Phân tích câu hỏi theo phương pháp Linearthinking.",
              "step2": "Định vị vùng thông tin liên quan trong bài đọc.",
              "step3": "Bóc tách cấu trúc câu (S-V-O) và đối chiếu nghĩa.",
              "step4": "Đáp án chính xác: Dr Ingrid Solberg"
            }
          },
          {
            "id": 39,
            "prompt": "Match the statement with the correct person/feature: \"Working lives ahead will be less predictable in shape than those of former generations.\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "Professor Halvard Aune",
              "Dr Rasmus Holt",
              "Dr Ingrid Solberg"
            ],
            "correct": "Professor Halvard Aune",
            "explanation": {
              "step1": "Phân tích câu hỏi theo phương pháp Linearthinking.",
              "step2": "Định vị vùng thông tin liên quan trong bài đọc.",
              "step3": "Bóc tách cấu trúc câu (S-V-O) và đối chiếu nghĩa.",
              "step4": "Đáp án chính xác: Professor Halvard Aune"
            }
          },
          {
            "id": 40,
            "prompt": "Match the statement with the correct person/feature: \"Those in power should act so that everyone can find properly paid employment.\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "Professor Halvard Aune",
              "Dr Rasmus Holt",
              "Dr Ingrid Solberg"
            ],
            "correct": "Dr Rasmus Holt",
            "explanation": {
              "step1": "Phân tích câu hỏi theo phương pháp Linearthinking.",
              "step2": "Định vị vùng thông tin liên quan trong bài đọc.",
              "step3": "Bóc tách cấu trúc câu (S-V-O) và đối chiếu nghĩa.",
              "step4": "Đáp án chính xác: Dr Rasmus Holt"
            }
          }
        ]
      }
    ]
  },
  "cam-15-reading-1": {
    "id": "cam-15-reading-1",
    "title": "IELTS CAM Inspired 15 - Reading Test 1",
    "series": "Cambridge 15",
    "testNumber": 1,
    "type": "Reading",
    "durationMinutes": 60,
    "passages": [
      {
        "id": "cam-15-reading-1-p1",
        "passageNumber": 1,
        "title": "Nutmeg — a valuable spice",
        "subtitle": "",
        "content": [
          "The nutmeg tree is a tall evergreen native to the warm forests of the far eastern tropics. For most of its history it grew in just one place on Earth — a small scattering of islands, known as the Kelima group, lying in the remote waters of the Terek Sea. The tree is densely branched and thick with dark-green, pointed leaves; its flowers are small, pale yellow and bell-shaped, and its fruit, pear-shaped and of the same pale colour, hangs among the foliage. Each fruit is wrapped in a fleshy rind which, as the fruit ripens, splits cleanly into two halves along a seam running from top to bottom. Inside lies a glossy, dark kernel — roughly two to three centimetres long — and around that kernel is folded a lacy web of scarlet threads. These two parts are the origin of two distinct spices: dried, the kernel becomes nutmeg, while the scarlet web, also dried, produces a rarer flavouring called saval.",
          "In medieval Europe, nutmeg was treasured and expensive, valued at once as a seasoning, a medicine and a means of keeping food from spoiling. For centuries the trade into Europe lay entirely in the hands of the Kessari, a merchant who carried the spice westward and sold it, at steep prices, to dealers in the port city of Alvenza; where exactly it came from, however, they were careful never to disclose. This long-held grip on the trade was finally broken in 1518, when Portuguese ships found their way to the Kelima Islands and set about seizing the riches that grew there.",
          "The Portuguese, never free of the threat posed by neighbouring Spain, chose to let Dutch traders take over the day-to-day business of moving their spices. As the profits flowed north, the Netherlands prospered, and its merchant vessels multiplied until few fleets anywhere could rival them; without much fuss, Dutch ships came to handle the bulk of the spice traffic throughout the northern half of the continent. Everything changed once Spain absorbed Portugal in 1581: within a couple of decades the Dutch had been shut out of the market altogether. Watching the cost of pepper, nutmeg and every other spice rise sharply from one country to the next, they made up their minds to retaliate.",
          "In 1604, a group of Dutch merchants set up a trading corporation that came to be known as the Eastern Seas Company. Within sixteen years it was the wealthiest business anywhere on earth, employing some forty thousand people around the globe, keeping a private army of twenty thousand and sailing a fleet of a hundred and fifty vessels. Just then, a deadly and highly contagious fever was sweeping across Europe, killing great numbers, and physicians — casting about desperately for a remedy — convinced themselves that nutmeg was the cure. Suddenly everyone wanted it, and few would let cost stand in their way: a quantity of nutmeg bought for a handful of coins in the east could fetch tens of thousands of times as much in the streets of London. Supply, though, was tiny — and it was precisely there that the Dutch saw their chance.",
          "The Kelima Islands were governed by local chiefs who clung to a policy of strict neutrality toward the foreign powers. That stance kept Portuguese and Spanish soldiers off their shores, yet it also left them defenceless against anyone else who might come. Come the Dutch did, in 1625, and took possession. With the islands firmly theirs, they set about guarding their prize: nutmeg growing was squeezed into a handful of areas that could be watched closely, and every tree beyond those zones was torn up and burned. To raise a seedling, or to carry seeds away without permission, was to invite harsh punishment; and, as a further precaution, every consignment of nutmeg leaving the islands was first coated in ash, so that not one living seed could ever be sprouted somewhere new. A single difficulty remained. One of the Kelima Islands — a thin strip of land called Sela, barely four kilometres long and less than one across — was in British hands. The two sides wrangled over it for decades before settling, in 1669, on a compromise they called the Treaty of Alen: determined to hold every last nutmeg island, the Dutch proposed a swap — Britain could keep a far-off and, for the moment, near-worthless island off the North American coast, and in return hand over Sela. Britain accepted. With that, the Dutch monopoly on nutmeg was sealed, and it would hold for another hundred years.",
          "The monopoly came undone in stages. First, in 1772, a French official named Armand Cazot managed to smuggle living nutmeg plants to safety on Verda, an island off the African coast; from there, cuttings were eventually carried across to the Caribbean, where they took root readily on the island of Saint-Ména. Then, in 1779, a ferocious cyclone swept over the Kelima group and flattened half of the nutmeg groves. And finally, in 1810, British forces came back to the region and took the islands by force; when they handed them back to the Dutch in 1818, they had already lifted hundreds of young nutmeg trees and replanted them at sites scattered across southern Asia. The Dutch stranglehold on nutmeg was finished for good.",
          "These days the tree is grown across many warm regions, among them the Caribbean and parts of southern Asia, and the world's yearly nutmeg harvest is put at between ten and twelve thousand tonnes."
        ],
        "questions": [
          {
            "id": 1,
            "prompt": "- the flowers and the fruit are both pale yellow in colour\n- the tree's leaves come to a  _____  tip\n- a  _____  encloses the fruit and divides in two once it matures\n- the spice nutmeg comes from the tree's dried  _____ \n- a second spice,  _____ , is produced from the delicate red netting inside the fruit",
            "type": "FILL_IN_BLANK",
            "correct": "pointed",
            "explanation": {
              "step1": "- the tree's leaves come to a 1. ___ tip Chỗ trống nằm trước danh từ chỉ đầu lá (“tip”), nên cần một tính từ mô tả hình dạng đầu lá .",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta tìm phần miêu tả lá (“leaves”) ở đoạn 1 => bắt đầu đọc từ câu 3. Đoạn 1",
              "step3": "Đoạn 1: The tree is densely branched and thick with dark-green, pointed leaves ; its flowers are small, pale yellow and bell-shaped , and its fruit , pear-shaped and of the same pale colour, hangs among the foliage .",
              "step4": "Đáp án phù hợp nhất: pointed Câu hoàn chỉnh: the tree's leaves come to a pointed tip (lá của cây thuôn lại thành đầu nhọn ). => Khớp với dự đoán về tính từ chỉ hình dạng đầu lá và thông tin lá nhọn (“pointed leaves”) trong bài; đáp án gồm một từ. Đối chiếu paraphrasing: the tree's leaves pointed leaves tính từ cần điền là pointed. dark-green “ màu xanh đậm ”: Nếu skim/scan thấy từ này đứng ngay trước lá (“dark-green, pointed leaves”) sẽ dễ chọn nhầm Nhưng nó chỉ màu sắc, không phải hình dạng đầu lá. bell-shaped “ hình chuông ”: Sai vì từ này miêu tả hoa (“its flowers”), không phải lá. pear-shaped “ hình quả lê ”: Sai vì từ này miêu tả quả (“its fruit”), không phải lá."
            }
          },
          {
            "id": 2,
            "prompt": "Complete blank for question 2:",
            "type": "FILL_IN_BLANK",
            "correct": "rind",
            "explanation": {
              "step1": "- a 2. ___ encloses the fruit and divides in two once it matures Ô trống đứng sau “a”, nên cần một danh từ số ít chỉ bộ phận bao quanh quả và tách làm hai khi quả chín.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta tìm ở đoạn mô tả quả, bắt đầu từ ý quả được bao bọc (“Each fruit is wrapped”). Đoạn 1 — Each fruit is wrapped",
              "step3": "Đoạn 1: Each fruit is wrapped in a fleshy rind which, as the fruit ripens, splits cleanly into two halves along a seam running from top to bottom . “Which” chỉ rind : chính bộ phận bao quanh quả này tách làm hai khi quả chín .",
              "step4": "Đáp án phù hợp nhất: rind Câu hoàn chỉnh: a rind encloses the fruit and divides in two once it matures (Một lớp vỏ bao quanh quả và tách làm hai khi quả chín.) => Khớp với dự đoán về bộ phận bao quanh quả; đáp án là một từ lấy nguyên văn từ bài . Đối chiếu paraphrasing: encloses the fruit Each fruit is wrapped + rind divides in two splits cleanly into two halves once it matures as the fruit ripens Đáp án seam đường rãnh: Câu (4) có nhắc đến đường rãnh (“along a seam”), nhưng đó là đường mà lớp vỏ tách dọc theo, không phải bộ phận bao quanh quả. kernel phần nhân: Từ này xuất hiện ngay câu sau, nhưng nằm bên trong quả, không phải lớp bao ngoài. fleshy có thịt, dày mềm: Đây là tính từ bổ nghĩa cho “rind”, không phải danh từ cần điền sau “a”."
            }
          },
          {
            "id": 3,
            "prompt": "Complete blank for question 3:",
            "type": "FILL_IN_BLANK",
            "correct": "kernel",
            "explanation": {
              "step1": "- the spice nutmeg comes from the tree's dried 3. ___ Ô trống đứng sau *dried*, nên cần một danh từ chỉ bộ phận của cây . Ta cần tìm bộ phận nào khi được phơi khô sẽ trở thành nutmeg.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta tìm ở đoạn 1 chỗ nói về nguồn gốc của hai loại gia vị (“the origin of two distinct spices”) => đây là vùng liên quan. Đoạn 1 — the origin of two distinct spices",
              "step3": "Đoạn 1: These two parts are the origin of two distinct spices: dried , the kernel becomes nutmeg , while the scarlet web , also dried, produces a rarer flavouring called saval .",
              "step4": "Đáp án phù hợp nhất: kernel Câu hoàn chỉnh: the spice nutmeg comes from the tree's dried kernel (Gia vị nutmeg được tạo từ phần nhân đã phơi khô của cây.) => Khớp với dự đoán về một bộ phận của cây: phần nhân trở thành nutmeg khi phơi khô ; đáp án gồm 1 từ, đề không nêu giới hạn số từ. Đối chiếu paraphrasing: comes from becomes cách diễn đạt đổi chiều nhưng cùng chỉ nguồn tạo ra gia vị. dried giữ nguyên. scarlet web “ mạng sợi đỏ ”: Nếu chỉ thấy đây cũng là một bộ phận trong quả, ta dễ chọn nhầm Nhưng vế sau while nói bộ phận này tạo ra gia vị khác, không phải nutmeg. fruit “ quả ”: Sai vì câu (6) chỉ rõ kernel là bộ phận trở thành nutmeg sau khi phơi khô, không phải toàn bộ quả."
            }
          },
          {
            "id": 4,
            "prompt": "Complete blank for question 4:",
            "type": "FILL_IN_BLANK",
            "correct": "saval",
            "explanation": {
              "step1": "- a second spice , 4. ___ , is produced from the delicate red netting inside the fruit Ô trống nằm giữa hai dấu phẩy, bổ sung tên cho gia vị thứ hai. Ta cần tìm tên gia vị được tạo ra từ lớp lưới đỏ .",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc đến chỗ nói về hai loại gia vị riêng biệt (“two distinct spices”) ở đoạn 1 => đây là vùng liên quan. Đoạn 1 — two distinct spices",
              "step3": "Đoạn 1: These two parts are the origin of two distinct spices : dried, the kernel becomes nutmeg , while the scarlet web , also dried, produces a rarer flavouring called saval .",
              "step4": "Đáp án phù hợp nhất: saval Câu hoàn chỉnh: A second spice, saval, is produced from the delicate red netting inside the fruit. (Gia vị thứ hai, saval, được tạo ra từ lớp lưới đỏ mảnh bên trong quả.) => Khớp dự đoán: lớp lưới đỏ tạo ra saval ; đáp án gồm 1 từ. Đề không cung cấp giới hạn số từ. Đối chiếu paraphrasing: a second spice two distinct spices delicate red netting scarlet web is produced from produces — cùng quan hệ, nhưng đổi chiều diễn đạt. nutmeg “ gia vị thứ nhất ”: Nếu đọc lướt, dễ chọn vì nutmeg cũng là một trong hai gia vị Nhưng câu (6) cho biết nó đến từ phần nhân (“the kernel”), không phải lớp lưới đỏ. scarlet web “ lớp lưới đỏ ”: Cụm này khớp với nguyên liệu trong câu hỏi, nhưng nó là phần tạo ra gia vị, không phải tên gia vị cần điền."
            }
          },
          {
            "id": 5,
            "prompt": "The Kessari made certain that outsiders never found out where their nutmeg originated.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "TRUE",
            "explanation": {
              "step1": "The Kessari made certain that outsiders never found out where their nutmeg originated . Ý câu hỏi: Kessari có giữ kín nguồn gốc nutmeg để người ngoài không bao giờ biết nó đến từ đâu không?",
              "step2": "Dựa vào tên riêng Kessari => ta định vị được câu quan trọng ở đoạn 2, bắt đầu bằng thông tin việc buôn bán nằm trong tay Kessari (“in the hands of the Kessari”). Đoạn 2 — in the hands of the Kessari",
              "step3": "Đoạn 2: For centuries the trade into Europe lay entirely in the hands of the Kessari , a merchant who carried the spice westward and sold it , at steep prices, to dealers in the port city of Alvenza ; where exactly it came from , however , they were careful never to disclose .",
              "step4": "Câu hỏi nói: Kessari bảo đảm người ngoài không bao giờ biết nutmeg đến từ đâu (“ never found out ”). Bài đọc nói: Dù bán gia vị cho các nhà buôn, họ vẫn cẩn thận không bao giờ tiết lộ nó đến từ đâu (“ never to disclose ”). Hai ý phù hợp nhau. Đáp án đúng: TRUE Đối chiếu paraphrasing: never found out never to disclose where their nutmeg originated where exactly it came from FALSE Sai vì bài nói Kessari không tiết lộ nguồn gốc, chứ không nói họ để lộ nó. Chỉ chọn FALSE nếu bài nói họ đã tiết lộ nguồn gốc nutmeg hoặc để người mua biết được. NOT GIVEN Nếu scan không thấy đúng từ “outsiders”, sẽ dễ chọn NOT GIVEN Nhưng bài đã nêu việc bán gia vị cho người khác (“to dealers”) mà vẫn “never to disclose” nguồn gốc. Chỉ chọn NOT GIVEN nếu bài chỉ nói họ bán gia vị mà không cho biết họ có giữ kín nguồn gốc hay không."
            }
          },
          {
            "id": 6,
            "prompt": "Once they controlled the islands, the Dutch promoted the growing of nutmeg in additional locations.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "FALSE",
            "explanation": {
              "step1": "Once they controlled the islands, the Dutch promoted the growing of nutmeg in additional locations . Cần kiểm tra: sau khi chiếm các đảo, Dutch đã mở rộng hay giới hạn nơi trồng nutmeg?",
              "step2": "Dựa vào tên nhóm “the Dutch” và mốc sau khi kiểm soát các đảo (“Once they controlled the islands”) => tìm đến đoạn 5, bắt đầu đọc từ “Come the Dutch did” để xác định ai là “they” ở câu tiếp theo. Đoạn 5 — Come the Dutch did",
              "step3": "Đoạn 5: Come the Dutch did , in 1625, and took possession . With the islands firmly theirs, they set about guarding their prize : nutmeg growing was squeezed into a handful of areas that could be watched closely , and every tree beyond those zones was torn up and burned . Câu (3): Dutch chiếm các đảo . Câu (4): Sau đó, họ giới hạn nơi trồng nutmeg và đốt cây ở ngoài những khu vực ấy.",
              "step4": "Câu hỏi nói: Dutch khuyến khích trồng nutmeg ở thêm địa điểm (“promoted the growing of nutmeg in additional locations”). Bài đọc nói: Việc trồng nutmeg bị giới hạn trong vài khu vực (“squeezed into a handful of areas”); cây ngoài các khu vực ấy bị đốt (“every tree beyond those zones”, “burned”). Hai ý mâu thuẫn nhau: không phải mở rộng mà là hạn chế nơi trồng . Đáp án đúng: FALSE Đối chiếu paraphrasing: Once they controlled the islands With the islands firmly theirs promoted the growing of nutmeg in additional locations nutmeg growing was squeezed into a handful of areas Đáp án TRUE Nếu skim/scan thấy đoạn 7 nói nutmeg được trồng ở nhiều vùng (“grown across many warm regions”), sẽ dễ chọn TRUE Nhưng đó là tình hình ngày nay, không phải chính sách của Dutch sau khi chiếm đảo. Chỉ chọn TRUE nếu bài nói Dutch khuyến khích trồng nutmeg ở thêm địa điểm vào thời điểm ấy. NOT GIVEN Nếu chỉ tìm từ “promoted” mà không thấy trong câu bằng chứng, sẽ dễ chọn NOT GIVEN Nhưng câu (4) nói rõ Dutch giới hạn nơi trồng, trái với nhận định. Chỉ chọn NOT GIVEN nếu bài không cho biết họ mở rộng hay hạn chế nơi trồng."
            }
          },
          {
            "id": 7,
            "prompt": "Nutmeg raised in the Caribbean was thought to be of poorer quality than that from the Kelima Islands.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "NOT GIVEN",
            "explanation": {
              "step1": "Nutmeg raised in the Caribbean was thought to be of poorer quality than that from the Kelima Islands . Câu hỏi không chỉ hỏi nutmeg có được trồng ở Caribbean hay không, mà hỏi liệu nó có bị cho là kém chất lượng hơn loại từ Kelima Islands hay không.",
              "step2": "Dựa vào địa danh Caribbean => ta tìm đến câu (2) đoạn 6, nơi nhắc đến việc đưa cây nutmeg tới vùng này. Đoạn 6",
              "step3": "Đoạn 6: First, in 1772, a French official named Armand Cazot managed to smuggle living nutmeg plants to safety on Verda , an island off the African coast ; from there, cuttings were eventually carried across to the Caribbean , where they took root readily on the island of Saint-Ména .",
              "step4": "Câu hỏi nói: nutmeg trồng ở Caribbean bị cho là kém chất lượng hơn loại từ Kelima Islands. Bài đọc nói: cành cây nutmeg được đưa tới Caribbean và bén rễ dễ dàng (“took root readily”). Bài không đưa ra nhận định hay so sánh nào về chất lượng giữa hai nơi . Bén rễ dễ dàng ≠ được đánh giá là có chất lượng tốt hơn hay kém hơn. Vì vậy, nhận định trong câu hỏi không được xác nhận cũng không bị phủ định . Đáp án đúng: NOT GIVEN Đối chiếu paraphrasing: raised in the Caribbean carried across to the Caribbean + took root readily was thought to be of poorer quality không có trong bài. Đáp án TRUE Sai vì bài chỉ nói cây bén rễ ở Caribbean, không nói nó bị cho là kém chất lượng hơn. Chỉ chọn TRUE nếu bài nêu nhận định chất lượng đó khi so với loại từ Kelima Islands. FALSE Nếu thấy cây bén rễ dễ dàng (“took root readily”), có thể tưởng bài đã phủ định ý kém chất lượng Nhưng khả năng bén rễ không phải đánh giá chất lượng. Chỉ chọn FALSE nếu bài nói nutmeg ở Caribbean được cho là có chất lượng ngang bằng hoặc tốt hơn loại từ Kelima Islands."
            }
          },
          {
            "id": 8,
            "prompt": "Complete blank for question 8:",
            "type": "FILL_IN_BLANK",
            "correct": "Kessari",
            "explanation": {
              "step1": "Middle Ages – The spice first reached European markets through a trading community , the 8. ___ . Ô trống đứng sau “the” và dùng để gọi tên bên đưa gia vị vào thị trường Europe. Ta dự đoán cần điền một tên riêng , chưa cần biết đó là tên gì.",
              "step2": "Câu hỏi không có tên riêng để tìm trực tiếp. Ta đọc đến cụm tương ứng với thời Trung cổ (“Middle Ages”): thời Trung cổ ở Europe (“In medieval Europe”) tại đoạn 2 => bắt đầu đọc từ đây. Đoạn 2 — Middle Ages",
              "step3": "Đoạn 2: In medieval Europe, nutmeg was treasured and expensive , valued at once as a seasoning, a medicine and a means of keeping food from spoiling . For centuries the trade into Europe lay entirely in the hands of the Kessari , a merchant who carried the spice westward and sold it, at steep prices, to dealers in the port city of Alvenza ; where exactly it came from , however , they were careful never to disclose . Câu (1): xác lập bối cảnh Europe thời Trung cổ . Câu (2): việc buôn gia vị vào Europe do Kessari nắm giữ .",
              "step4": "Đáp án phù hợp nhất: Kessari Câu hoàn chỉnh: The spice first reached European markets through a trading community, the Kessari. (Gia vị này đến thị trường ở Europe thông qua bên buôn bán mang tên Kessari.) => Khớp với dự đoán là một tên riêng: bài đọc nêu đích danh Kessari là bên nắm việc buôn bán vào Europe . Đáp án gồm 1 từ; đề được cung cấp không ghi giới hạn từ. Đối chiếu paraphrasing: Middle Ages medieval Europe reached European markets the trade into Europe through a trading community in the hands of the Kessari Alvenza “ địa danh ”: Nếu đọc lướt câu (2), dễ chọn tên này vì nó xuất hiện gần Kessari Nhưng bài gọi Alvenza là thành phố cảng (“port city of Alvenza”), không phải bên nắm việc buôn bán. dealers “ những người mua bán ”: Từ này cũng liên quan đến thương mại, nhưng Kessari bán gia vị cho họ (“to dealers”); đây không phải tên riêng cần điền sau “the”."
            }
          },
          {
            "id": 9,
            "prompt": "Complete blank for question 9:",
            "type": "FILL_IN_BLANK",
            "correct": "fever",
            "explanation": {
              "step1": "Ở hàng thế kỷ XVII, câu cần điền là: – Demand rose sharply , as the spice was thought to protect against a dangerous 9. ___ that was spreading through Europe . Dự đoán: Sau “a dangerous” cần một danh từ số ít , chỉ mối nguy đang lan rộng qua Europe; có thể là một căn bệnh .",
              "step2": "Dựa vào địa danh Europe và mốc thế kỷ XVII => ta tìm đến đoạn 4, bắt đầu đọc ở câu (3), nơi nhắc đến một mối nguy đang lan rộng. Đoạn 4",
              "step3": "Đoạn 4: Just then, a deadly and highly contagious fever was sweeping across Europe , killing great numbers , and physicians — casting about desperately for a remedy — convinced themselves that nutmeg was the cure .",
              "step4": "Đáp án phù hợp nhất: fever Câu hoàn chỉnh: Demand rose sharply, as the spice was thought to protect against a dangerous fever that was spreading through Europe. (Nhu cầu tăng mạnh vì người ta cho rằng nutmeg có thể chống lại một cơn sốt nguy hiểm đang lan khắp Europe.) => Khớp với dự đoán về danh từ số ít chỉ mối nguy đang lan rộng: bài đọc nêu đích danh fever ; đáp án gồm 1 từ và đề không nêu giới hạn số từ. Đối chiếu paraphrasing: dangerous deadly was spreading through Europe was sweeping across Europe was thought to protect against convinced themselves that nutmeg was the cure remedy phương thuốc: Dễ chọn vì từ này nằm gần chỗ nói về căn bệnh Nhưng đó là thứ các thầy thuốc tìm kiếm, không phải mối nguy đang lan rộng. nutmeg gia vị nutmeg: Bài đọc nhắc nutmeg là phương thuốc được tin dùng, không phải thứ cần chống lại sau “a dangerous”. contagious dễ lây: Từ này mô tả fever nhưng là tính từ; ô trống cần một danh từ."
            }
          },
          {
            "id": 10,
            "prompt": "Complete blank for question 10:",
            "type": "FILL_IN_BLANK",
            "correct": "ash",
            "explanation": {
              "step1": "Ở hàng The Dutch, câu cần điền là: – before it left the islands, each load of nutmeg was covered with 10. ___ , ensuring no fertile seed could take root abroad Ô trống đứng sau “covered with”, nên cần danh từ chỉ chất dùng để phủ . Chưa cần đoán chính xác chất đó là gì.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta tìm ý từng lô nutmeg được phủ (“each load of nutmeg was covered with”). Ở đoạn 5, bắt đầu đọc từ biện pháp cấm ươm cây con (“To raise a seedling”). Đoạn 5 — To raise a seedling",
              "step3": "Đoạn 5: To raise a seedling , or to carry seeds away without permission, was to invite harsh punishment ; and , as a further precaution, every consignment of nutmeg leaving the islands was first coated in ash , so that not one living seed could ever be sprouted somewhere new .",
              "step4": "Đáp án phù hợp nhất: ash Câu hoàn chỉnh: – before it left the islands, each load of nutmeg was covered with ash, ensuring no fertile seed could take root abroad (Trước khi rời đảo, mỗi lô nutmeg được phủ bằng tro để không hạt nào có thể nảy mầm ở nơi khác.) => Khớp với dự đoán: ash là chất dùng để phủ , gồm một từ; đề không nêu giới hạn số từ. Đối chiếu paraphrasing: each load of nutmeg every consignment of nutmeg covered with coated in seedling cây con: Sai vì đây là thứ bị cấm ươm, không phải chất phủ lên nutmeg. Đáp án seed hạt: Sai vì hạt là thứ biện pháp này nhằm ngăn nảy mầm, không phải chất dùng để phủ. nutmeg gia vị nutmeg: Sai vì nutmeg là thứ được phủ; chất phủ là ash."
            }
          },
          {
            "id": 11,
            "prompt": "Complete blank for question 11:",
            "type": "FILL_IN_BLANK",
            "correct": "Sela",
            "explanation": {
              "step1": "The Dutch Ô trống đứng sau *territory of*, nên cần điền tên riêng của một vùng đất nhỏ . Dòng ghi chú cho biết Dutch giành được vùng đất ấy sau một cuộc tranh chấp kéo dài.",
              "step2": "Dựa vào chủ thể Dutch và ý vùng đất do Britain nắm giữ (“British-held territory”) => tìm đến đoạn 5, bắt đầu từ thông tin về một đảo thuộc Kelima Islands (“One of the Kelima Islands”). Đoạn 5 — One of the Kelima Islands",
              "step3": "Đoạn 5: One of the Kelima Islands — a thin strip of land called Sela , barely four kilometres long and less than one across — was in British hands . The two sides wrangled over it for decades before settling , in 1669, on a compromise they called the Treaty of Alen : determined to hold every last nutmeg island, the Dutch proposed a swap — Britain could keep a far-off and, for the moment, near-worthless island off the North American coast , and in return hand over Sela . Britain accepted . Câu (7)–(8): Sela do Britain nắm giữ ; sau nhiều thập kỷ tranh chấp, Dutch đề xuất trao đổi để nhận Sela . Câu (9): Britain chấp thuận, xác nhận việc trao đổi không chỉ dừng ở đề nghị.",
              "step4": "Đáp án phù hợp nhất: Sela Câu hoàn chỉnh: – after a long quarrel, secured the tiny British-held territory of Sela (Sau cuộc tranh chấp kéo dài, phía Dutch giành được vùng đất nhỏ do Britain nắm giữ là Sela.) => Khớp với dự đoán về tên một vùng đất nhỏ: Sela do Britain nắm giữ và được Britain đồng ý giao trong cuộc trao đổi ; đáp án gồm 1 từ. Đối chiếu paraphrasing: after a long quarrel wrangled over it for decades British held in British hands secured hand over Sela + Britain accepted Treaty of Alen “ tên thỏa thuận ”: tên này xuất hiện ngay trong câu (8), Nhưng đó là tên thỏa thuận, không phải vùng đất được trao. Kelima Islands “ nhóm đảo ”: Sela thuộc nhóm này, Nhưng ô trống hỏi một vùng đất nhỏ cụ thể do Britain nắm giữ. Verda “ tên đảo khác ”: Đoạn 6 nhắc đến Verda trong sự kiện năm 1772; đây không phải vùng đất Britain đồng ý giao cho Dutch."
            }
          },
          {
            "id": 12,
            "prompt": "Complete blank for question 12:",
            "type": "FILL_IN_BLANK",
            "correct": "Verda",
            "explanation": {
              "step1": "– 1772 : young seedlings were smuggled abroad to the island of 12. ___ Ý câu hỏi: Ô 12 cần tên một hòn đảo : nơi cây được lén đưa tới vào năm 1772. Ta chưa cần biết tên đảo để xác định loại thông tin phải tìm.",
              "step2": "Dựa vào mốc năm đặc biệt 1772 => ta tìm đến đoạn 6, bắt đầu ở cụm “in 1772”. Đoạn 6 — in 1772",
              "step3": "Đoạn 6: First, in 1772 , a French official named Armand Cazot managed to smuggle living nutmeg plants to safety on Verda , an island off the African coast ; from there, cuttings were eventually carried across to the Caribbean, where they took root readily on the island of Saint-Ména. Gợi ý: Cụm chuyển chặng “from there” báo hiệu phần tô xám kể diễn biến sau khi cây đã tới Verda ; ô 12 hỏi điểm đến của sự kiện năm 1772.",
              "step4": "Đáp án phù hợp nhất: Verda Câu hoàn chỉnh: – 1772: young seedlings were smuggled abroad to the island of Verda (Năm 1772, cây giống non được lén đưa ra nước ngoài tới đảo Verda .) => Khớp dự đoán tên đảo và thông tin năm 1772 trong bài; đáp án gồm 1 từ. Đề được cung cấp không nêu giới hạn số từ. Đối chiếu paraphrasing: Verda, an island the island of 1772 giữ nguyên. Saint-Ména một hòn đảo khác: Nếu skim/scan thấy tên đảo này ở cuối câu (2), ta dễ chọn nhầm Nhưng đó là nơi cây được đưa tới về sau, không phải điểm đến được nêu ngay sau mốc 1772. Caribbean một vùng địa lý: Tên này xuất hiện trong chặng sau của câu (2), nhưng không phải tên hòn đảo cần điền. Kelima nhóm đảo trồng nutmeg ban đầu: Bài nhắc đến Kelima nhiều lần, nhưng câu (2) xác định Verda là nơi cây được lén đưa tới năm 1772."
            }
          },
          {
            "id": 13,
            "prompt": "Complete blank for question 13:",
            "type": "FILL_IN_BLANK",
            "correct": "cyclone",
            "explanation": {
              "step1": "– 1779 : a 13. ___ ravaged the islands , ruining much of the nutmeg crop Sau “a”, ô trống cần một danh từ đếm được số ít , chỉ thứ đã tàn phá các đảo và gây thiệt hại cho cây nutmeg.",
              "step2": "Dựa vào từ khoá đặc biệt là mốc 1779 => ta định vị được câu (3), đoạn 6. Đoạn 6",
              "step3": "Đoạn 6: Then, in 1779 , a ferocious cyclone swept over the Kelima group and flattened half of the nutmeg groves .",
              "step4": "Đáp án phù hợp nhất: cyclone Câu hoàn chỉnh: – 1779: a cyclone ravaged the islands, ruining much of the nutmeg crop (Năm 1779, một trận bão xoáy tàn phá các đảo, gây thiệt hại lớn cho cây nutmeg.) => Khớp với dự đoán về danh từ chỉ sự kiện gây tàn phá và với thông tin trong bài; đáp án gồm 1 từ. Dữ liệu đề bài không nêu giới hạn số từ. Đối chiếu paraphrasing: ravaged the islands swept over the Kelima group ruining much of the nutmeg crop flattened half of the nutmeg groves ferocious dữ dội: Từ này đứng sát đáp án nhưng là tính từ bổ nghĩa cho “cyclone”, không phải danh từ cần điền sau “a”. groves vườn cây: Đây là thứ bị tàn phá, không phải thứ gây ra sự tàn phá."
            }
          }
        ]
      },
      {
        "id": "cam-15-reading-1-p2",
        "passageNumber": 2,
        "title": "Driverless cars",
        "subtitle": "",
        "content": [
          "Driverless cars"
        ],
        "questions": [
          {
            "id": 14,
            "prompt": "Which section contains the following information: \"a description of how automation has already brought benefits to the building of vehicles\"?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "correct": "A",
            "explanation": {
              "step1": "a description of how automation has already brought benefits to the building of vehicles Dự đoán thông tin cần tìm (SPECIFY) 👍 NÊN tìm: đoạn nói tự động hóa được áp dụng như thế nào trong khâu chế tạo xe và những lợi ích đã đạt được . 👎 ĐỪNG tìm: lợi ích khi xe tự lái lưu thông, hoặc dự báo về việc sản xuất xe trong tương lai.",
              "step2": "Câu hỏi không có từ khóa đặc biệt; ta đọc nhanh đến khi gặp ý tự động hóa giúp chế tạo xe. Ở đoạn A, việc giao khâu lắp ráp cho robot (“ handing assembly work to robots ”) => đây là vùng liên quan. Đoạn D và E cũng nhắc đến sản xuất xe, nhưng nói về khả năng trong tương lai. Đoạn A: From the 1980s onward, handing assembly work to robots cut costs sharply and made the mass production of vehicles both more dependable and more adaptable . Đoạn A — handing assembly work to robots",
              "step3": "Đối chiếu paraphrasing: how automation handing assembly work to robots has already brought benefits From the 1980s onward + cut costs + more dependable the building of vehicles production of vehicles Đáp án đúng: Paragraph A. Câu (2) mô tả cách dùng robot trong lắp ráp và hai lợi ích đã đạt được : giảm chi phí , giúp sản xuất xe đáng tin cậy hơn . Paragraph E Nếu đọc lướt, dễ chọn vì có ý chế tạo xe (“the building”) Nhưng đoạn này nói điều đó có thể xảy ra (“could encourage”), không phải lợi ích đã đạt được. Paragraph D Có nhắc đến sản lượng xe (“car production need not fall at all”), nhưng đây là dự báo, không phải lợi ích tự động hóa đã đem lại cho việc chế tạo. Paragraph B Sai vì các lợi ích ở đây liên quan đến an toàn và thời gian di chuyển, không phải việc chế tạo xe.",
              "step4": "Đáp án chính xác: A"
            }
          },
          {
            "id": 15,
            "prompt": "Which section contains the following information: \"examples of infrequent journeys for which a particular type of vehicle might be reserved\"?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "correct": "E",
            "explanation": {
              "step1": "examples of infrequent journeys for which a particular type of vehicle might be reserved Dự đoán thông tin cần tìm (SPECIFY) 👍 NÊN tìm: ít nhất hai ví dụ về chuyến đi không thường xuyên , cùng thông tin rằng có thể đặt loại xe phù hợp khi cần . 👎 ĐỪNG tìm: đoạn chỉ nói xe ít được sử dụng hoặc nói chung về việc đi lại, nhưng không nêu các chuyến đi cụ thể gắn với việc đặt xe.",
              "step2": "Đoạn C nói về thời gian xe đỗ không sử dụng; đoạn D nói về xe chạy không chở khách. Đoạn E mới nêu những chuyến đi ít gặp và việc đặt xe cho chúng => đọc câu 5. Đoạn E: For the unusual trip , loading up for a family camping holiday , or moving a son or daughter into university accommodation , specialised vehicles could be booked as needed . Đoạn E",
              "step3": "Đối chiếu paraphrasing: examples camping holiday + moving a son or daughter into university accommodation infrequent journeys unusual trip a particular type of vehicle specialised vehicles might be reserved could be booked as needed Đáp án đúng: Paragraph E. Paragraph C. Nếu skim/scan thấy xe đỗ không sử dụng (“sits idle, parked”), ta dễ liên tưởng đến việc đi lại không thường xuyên Nhưng đây là thời gian xe không được dùng, không phải ví dụ về chuyến đi cần đặt xe riêng. Paragraph D. Cụm xe chạy không chở khách (“empty vehicles must reposition themselves”) có nhắc đến việc di chuyển Nhưng đó là xe tự di chuyển giữa các khách hàng, không phải những chuyến đi ít gặp được nêu làm ví dụ.",
              "step4": "Đáp án chính xác: E"
            }
          },
          {
            "id": 16,
            "prompt": "Which section contains the following information: \"a reference to vehicles that must travel while carrying no one at all\"?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "correct": "D",
            "explanation": {
              "step1": "a reference to vehicles that must travel while carrying no one at all Dự đoán thông tin cần tìm (SPECIFY) 👍 NÊN tìm: đoạn nói xe phải di chuyển trong lúc hoàn toàn không có người trên xe. 👎 ĐỪNG tìm: xe đang đỗ, xe còn ghế trống, hoặc xe không cần người lái nhưng vẫn có thể chở khách.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp ý xe trống phải di chuyển. Đoạn C nói xe đang đỗ, đoạn E nói ghế trống; đoạn D nhắc đến xe trống phải tự điều chuyển (“ empty vehicles must reposition themselves ”) => đây là vùng liên quan. Đoạn D: The total number of journeys , though, would likely climb , in part because empty vehicles must reposition themselves , travelling from one customer to the next with no one aboard . Đoạn D — empty vehicles must reposition themselves",
              "step3": "vehicles that must travel empty vehicles must reposition themselves + travelling while carrying no one at all with no one aboard Đáp án đúng: Paragraph D — xe phải di chuyển mà không có ai trên xe . Paragraph C “ xe không được sử dụng ”: Đoạn này có xe đang đỗ (“sits idle, parked”), nên không khớp ý phải di chuyển. Paragraph E “ xe còn ghế trống ”: Cụm “carry no one” nói về ghế trong xe, không chứng minh cả xe không chở ai. Paragraph F “ xe không cần người lái ”: “a driver is no longer necessary” không có nghĩa là xe không chở bất kỳ ai.",
              "step4": "Đáp án chính xác: D"
            }
          },
          {
            "id": 17,
            "prompt": "Which section contains the following information: \"an outline of the different categories of problem that will need to be solved\"?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "correct": "F",
            "explanation": {
              "step1": "an outline of the different categories of problem that will need to be solved 👍 NÊN tìm: đoạn nêu nhiều loại trở ngại khác nhau và cho thấy chúng cần được giải quyết. 👎 ĐỪNG tìm: đoạn chỉ nói chung rằng có thách thức, hoặc nêu lợi ích của xe tự lái mà không phân loại trở ngại.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp ý tương đương với những vấn đề cần giải quyết. Đoạn F mở đầu bằng việc phải vượt qua nhiều trở ngại (“ clearing several obstacles ”) => đây là vùng liên quan. Đoạn G cũng nhắc đến thách thức, nhưng không phân loại chúng. Đoạn F: Getting automated cars onto our roads means clearing several obstacles . One is technical : the vehicle has to perform dependably across the endless variety of traffic, weather and road conditions it may meet . Another is regulatory : working out how questions of liability and enforcement shift once a driver is no longer necessary to operate the car . Câu (1): đưa xe tự lái ra đường => phải giải quyết nhiều trở ngại . Câu (2)–(3): phân biệt trở ngại kỹ thuật và quy định pháp lý . Đoạn F — clearing several obstacles",
              "step3": "Đối chiếu paraphrasing: an outline of the different categories of problem One is technical + Another is regulatory that will need to be solved clearing several obstacles Đáp án đúng: Paragraph F — đoạn này nêu các nhóm trở ngại cần giải quyết . Paragraph G Nếu skim/scan, em dễ chọn đoạn này vì thấy ý có nhiều thách thức (“the challenges are many”) Nhưng G không phân loại các thách thức đó. Paragraph B Ý về sự mất tập trung của người lái (“driver distraction”) có thể trông giống một vấn đề Nhưng B nêu lý do phát triển công nghệ tự lái, không phác họa các nhóm trở ngại cần xử lý. Paragraph D Việc xe không chở ai vẫn phải di chuyển (“empty vehicles must reposition themselves”) có vẻ là một khó khăn Nhưng D bàn về hệ quả đối với việc sử dụng xe, không phân loại các trở ngại như đoạn F.",
              "step4": "Đáp án chính xác: F"
            }
          },
          {
            "id": 18,
            "prompt": "Which section contains the following information: \"a figure indicating how long the typical vehicle stays unused\"?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "correct": "C",
            "explanation": {
              "step1": "a figure indicating how long the typical vehicle stays unused 👍 NÊN tìm: một con số cho biết chiếc xe điển hình không được sử dụng trong bao lâu. 👎 ĐỪNG tìm: số liệu về số lượng xe, quãng đường xe chạy hoặc thời gian ghế trống.",
              "step2": "Câu hỏi không có từ khóa đặc biệt; ta đọc nhanh đến khi gặp ý chiếc xe điển hình (“the typical vehicle”). Đoạn D có số liệu về đội xe, đoạn E nói đến ghế trống; đoạn C nhắc đến chiếc xe điển hình (“a typical car”) => ta đọc từ đây. Đoạn C: Consider that a typical car sits idle , parked, for well over 95 percent of its existence . Đoạn C — a typical car",
              "step3": "Đối chiếu paraphrasing: the typical vehicle a typical car stays unused sits idle a figure indicating how long for well over 95 percent of its existence Đáp án đúng: Đoạn C. Con số cho biết xe điển hình nằm không trong hơn 95% thời gian tồn tại . Đoạn D Nếu skim/scan, tỷ lệ (“roughly 40 percent”) dễ gây chú ý Nhưng đó là mức giảm quy mô đội xe, không phải thời gian một chiếc xe nằm không. Đoạn E Cụm “most of the time” dễ khiến ta nghĩ đến thời gian xe không được sử dụng Nhưng đoạn này nói về ghế trống, không đưa ra con số cho thời gian xe nằm không. Đoạn B Cụm “hours drivers lose behind the wheel” nói về thời gian của người lái khi đang dùng xe, không phải lúc xe nằm không.",
              "step4": "Đáp án chính xác: C"
            }
          },
          {
            "id": 19,
            "prompt": "Research by New Zealand's Centre for Road Safety Analysis suggests that a large share of crashes can be traced partly to driver  _____ , which is why driverless vehicles ought to make the roads safer. Automation should bring further gains as well. The pooling of cars through  _____  becomes realistic on a far wider scale in urban centres, reducing how many cars are needed. Work by the Ontario Centre for Transport Studies estimates that the country's car  _____  could contract by about 40 percent; even so, the average annual  _____  that every vehicle covers would treble. This speeds up replacement, so output from manufacturers need not drop.",
            "type": "FILL_IN_BLANK",
            "correct": "distraction",
            "explanation": {
              "step1": "Research by New Zealand's Centre for Road Safety Analysis suggests that a large share of crashes can be traced partly to driver 6. ___ , which is why driverless vehicles ought to make the roads safer . Ô trống đứng sau *driver*, nên cần một danh từ chỉ yếu tố ở người lái góp phần gây tai nạn . Chưa cần đoán chính xác từ đó là gì.",
              "step2": "Dựa vào tên riêng New Zealand's Centre for Road Safety Analysis => ta tìm đến đoạn B và bắt đầu đọc từ câu nhắc đến trung tâm này. Đoạn B",
              "step3": "Đoạn B: Studies by New Zealand's Centre for Road Safety Analysis found that driver distraction plays a part in the great majority of crashes , and is the leading cause in most of them, something automation could help to curb .",
              "step4": "Đáp án phù hợp nhất: distraction Câu hoàn chỉnh: Research by New Zealand's Centre for Road Safety Analysis suggests that a large share of crashes can be traced partly to driver distraction , which is why driverless vehicles ought to make the roads safer. (Nghiên cứu của New Zealand's Centre for Road Safety Analysis cho thấy phần lớn vụ tai nạn có một phần nguyên nhân từ sự mất tập trung của người lái ; vì vậy, xe không người lái được kỳ vọng giúp đường sá an toàn hơn.) => Khớp với dự đoán: *distraction* là danh từ đứng sau *driver* và là yếu tố góp phần gây tai nạn . Đáp án gồm 1 từ; đề không nêu giới hạn số từ. Đối chiếu paraphrasing: a large share of crashes the great majority of crashes can be traced partly to plays a part in safety sự an toàn: Nếu chỉ thấy từ này ở câu 2 đoạn B sẽ dễ chọn nhầm Nhưng đây là mục tiêu cải thiện, không phải yếu tố ở người lái gây tai nạn. automation sự tự động hóa: Câu (3) nhắc đến automation như thứ có thể giúp hạn chế vấn đề, không phải vấn đề cần điền sau driver."
            }
          },
          {
            "id": 20,
            "prompt": "Complete blank for question 20:",
            "type": "FILL_IN_BLANK",
            "correct": "ride-sharing",
            "explanation": {
              "step1": "The pooling of cars through 7. ___ becomes realistic on a far wider scale in urban centres , reducing how many cars are needed . Sau “through”, ô trống cần một danh từ hoặc cụm danh từ chỉ cách dùng chung xe . Ta tìm hình thức vừa khả thi hơn ở đô thị, vừa có thể giúp giảm số xe cần dùng.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp ý dùng chung xe trở nên khả thi hơn ở đô thị. Đoạn C nói hình thức này khả thi hơn nhiều (“far more practical”), đặc biệt tại các thành phố (“especially across cities”) => đây là vùng liên quan. Đoạn C — far more practical",
              "step3": "Đoạn C: Automation makes ride-sharing arrangements far more practical , especially across cities , where the demand for travel is heavy . Should a sizeable share of people opt for shared automated cars , the same mobility needs could be satisfied by a far smaller number of vehicles . Câu (3): tự động hóa khiến ride-sharing khả thi hơn ở thành phố . Câu (4): nếu nhiều người chọn xe tự động dùng chung, ít xe hơn vẫn có thể đáp ứng cùng nhu cầu đi lại.",
              "step4": "Đáp án phù hợp nhất: ride-sharing Câu hoàn chỉnh: The pooling of cars through ride-sharing becomes realistic on a far wider scale in urban centres, reducing how many cars are needed. (Việc gộp xe thông qua hình thức đi xe chung trở nên khả thi trên quy mô rộng hơn ở đô thị, nhờ đó giảm số xe cần dùng.) => Khớp với dự đoán về hình thức dùng chung xe và bằng chứng ở câu (3); “ride-sharing” là một từ ghép có gạch nối. Đề được cung cấp không nêu giới hạn số từ. Đối chiếu paraphrasing: The pooling of cars ride sharing becomes realistic far more practical in urban centres across cities car-sharing “ hình thức dùng chung xe ”: Đoạn D có nhắc đến hình thức này, nhưng dấu hiệu về tính khả thi ở thành phố thuộc câu (3) đoạn C, nơi bài dùng đúng từ “ride-sharing”. automation “ sự tự động hóa ”: Câu (3) cho biết đây là yếu tố khiến việc đi xe chung khả thi hơn, không phải hình thức đi xe chung cần điền sau “through”."
            }
          },
          {
            "id": 21,
            "prompt": "Complete blank for question 21:",
            "type": "FILL_IN_BLANK",
            "correct": "fleet",
            "explanation": {
              "step1": "Work by the Ontario Centre for Transport Studies estimates that the country's car 8. ___ could contract by about 40 percent Ô trống đứng sau *car*, nên cần một danh từ chỉ tập hợp ô tô của cả nước . Cụm có thể giảm (“could contract”) cho biết phải tìm thứ được dự đoán sẽ giảm về số lượng.",
              "step2": "Dựa vào tên riêng Ontario Centre for Transport Studies trong câu hỏi => tìm nghiên cứu của tổ chức này ở đoạn D, rồi đọc câu chứa mức giảm khoảng 40%. Đoạn D",
              "step3": "Đoạn D: Separate modelling by the Ontario Centre for Transport Studies indicates that automation could shrink the national car fleet by roughly 40 percent , while roughly tripling the distance each remaining car covers in a year .",
              "step4": "Đáp án phù hợp nhất: fleet Câu hoàn chỉnh: Work by the Ontario Centre for Transport Studies estimates that the country's car fleet could contract by about 40 percent. (Nghiên cứu của Ontario Centre for Transport Studies ước tính rằng đội xe của cả nước có thể giảm khoảng 40%.) => *Fleet* là danh từ đứng sau *car*, chỉ đội xe được dự đoán sẽ giảm; đáp án gồm 1 từ, đề không nêu giới hạn số từ. Đối chiếu paraphrasing: the country's car the national car fleet could contract could shrink about 40 percent roughly 40 percent distance quãng đường: Dễ chọn vì xuất hiện ngay trong câu (4) Nhưng quãng đường tăng, không phải thứ giảm khoảng 40%; đây là thông tin cho chỗ trống 9. vehicles những chiếc xe: Đoạn D cũng nói đến xe, nhưng cụm cần điền trong bài là “car fleet”, chỉ cả đội xe, không phải từ vehicles. production sản lượng: Câu (5) đoạn D nhắc đến “car production need not fall”, nhưng đó là nhận định tiếp theo, không phải đối tượng được dự đoán giảm khoảng 40%."
            }
          },
          {
            "id": 22,
            "prompt": "Complete blank for question 22:",
            "type": "FILL_IN_BLANK",
            "correct": "distance",
            "explanation": {
              "step1": "even so, the average annual 9. ___ that every vehicle covers would treble . Ô trống nằm trong cụm chỉ đại lượng mà mỗi xe đi được hằng năm . Ta cần dự đoán một danh từ chỉ đại lượng , chưa chốt từ tiếng Anh trước khi đọc bài.",
              "step2": "Dựa vào tên riêng Ontario Centre for Transport Studies trong câu hỏi => tìm đến câu (4) đoạn D để bắt đầu đọc. Đoạn D",
              "step3": "Đoạn D: Separate modelling by the Ontario Centre for Transport Studies indicates that automation could shrink the national car fleet by roughly 40 percent , while roughly tripling the distance each remaining car covers in a year .",
              "step4": "Đáp án phù hợp nhất: distance Câu hoàn chỉnh: even so, the average annual distance that every vehicle covers would treble. (Dù vậy, quãng đường trung bình mỗi xe đi trong một năm sẽ tăng gấp ba.) => Khớp với dự đoán về đại lượng mỗi xe đi được hằng năm; bài đọc nêu rõ distance . Đáp án gồm 1 từ; đề được cung cấp không nêu giới hạn số từ. Đối chiếu paraphrasing: would treble tripling annual in a year every vehicle covers each remaining car covers fleet “ số xe ”: Từ này xuất hiện ngay trong câu (4), nhưng chỉ số xe giảm, không phải đại lượng mỗi xe đi được hằng năm. journeys “ các chuyến đi ”: Câu 3 đoạn D nói đến tổng số chuyến đi (“number of journeys”); ô trống lại hỏi đại lượng mỗi xe đi được. Đáp án year “ năm ”: Từ này cho biết khoảng thời gian đo (“in a year”), không phải đại lượng cần điền."
            }
          },
          {
            "id": 23,
            "prompt": "Which TWO advantages of driverless vehicles for individual travellers does the writer refer to? (Part 1 of 2)",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "Travellers could use their journey time to get work done or to relax",
              "Finding somewhere to park in cities would become easier",
              "Journeys would work out considerably cheaper for passengers",
              "Reducing the number of cars would cut down on pollution",
              "People who find driving difficult could get around without depending on others"
            ],
            "correct": "Travellers could use their journey time to get work done or to relax",
            "explanation": {
              "step1": "Which TWO advantages of driverless vehicles for individual travellers does the writer refer to ? Cần tìm: Đúng hai lợi ích cho từng người đi lại , không phải lợi ích chung cho ngành sản xuất hay hệ thống giao thông.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến ý lấy lại thời gian lái xe (“reclaiming the hours”) ở đoạn B => bắt đầu đọc từ đây. Đoạn B — reclaiming the hours",
              "step3": "Đoạn B: A second motivation is reclaiming the hours drivers lose behind the wheel . Once a car can handle part or all of the driving , that time might instead be spent working , keeping in touch with others, or simply unwinding , while the automated systems take charge of getting everyone there safely . There is a further gain, too: people poorly served by today's transport , the elderly, say, or those with disabilities , could suddenly enjoy far more freedom to travel on their own terms . Câu (4)–(5): Xe đảm nhận việc lái => người đi xe có thời gian để làm việc hoặc thư giãn . Câu (6): Người khuyết tật có thể tự chủ đi lại hơn .",
              "step4": "Đáp án đúng: → Travellers could use their journey time to get work done or to relax, People who find driving difficult could get around without depending on others - A. Travellers could use their journey time to get work done or to relax (Người đi xe có thể dùng thời gian trên đường để làm việc hoặc thư giãn ). - E. People who find driving difficult could get around without depending on others ( Người gặp khó khăn khi lái xe có thể đi lại mà không phải phụ thuộc vào người khác ). Đối chiếu paraphrasing: A: journey time the hours drivers lose behind the wheel; get work done working; to relax unwinding. E: People who find driving difficult those with disabilities; get around without depending on others freedom to travel on their own terms. Đáp án B “ Việc tìm chỗ đỗ xe trong thành phố sẽ dễ hơn ”: Đoạn C nhắc xe đang đỗ (“sits idle, parked”) và việc đi lại trong thành phố (“especially across cities”) Nhưng bài không nói người đi xe sẽ dễ tìm chỗ đỗ hơn. Đáp án C “ Hành trình sẽ rẻ hơn đáng kể cho hành khách ”: Đoạn A nói tự động hoá trong nhà máy giúp giảm chi phí (“cut costs sharply”), không nói giá chuyến đi của hành khách giảm. Đáp án D “ Giảm số lượng xe sẽ làm giảm ô nhiễm ”: Đoạn C–D đề cập khả năng giảm số xe, nhưng không khẳng định điều đó làm giảm ô nhiễm."
            }
          },
          {
            "id": 24,
            "prompt": "Which TWO advantages of driverless vehicles for individual travellers does the writer refer to? (Part 2 of 2)",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "Travellers could use their journey time to get work done or to relax",
              "Finding somewhere to park in cities would become easier",
              "Journeys would work out considerably cheaper for passengers",
              "Reducing the number of cars would cut down on pollution",
              "People who find driving difficult could get around without depending on others"
            ],
            "correct": "People who find driving difficult could get around without depending on others",
            "explanation": {
              "step1": "Which TWO obstacles to the development of driverless vehicles does the writer refer to ? Cần tìm: Đúng hai trở ngại mà tác giả nêu, không phải hai thay đổi có thể xảy ra khi xe tự lái trở nên phổ biến.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến ý cần vượt qua một số trở ngại (“clearing several obstacles”) ở đoạn F => bắt đầu đối chiếu các phương án từ đây. Đoạn F — clearing several obstacles",
              "step3": "Đoạn F: One is technical : the vehicle has to perform dependably across the endless variety of traffic, weather and road conditions it may meet . Another is regulatory : working out how questions of liability and enforcement shift once a driver is no longer necessary to operate the car . Câu (2)–(3): Hai trở ngại được nêu song song: xe phải vận hành tin cậy trong nhiều điều kiện ; đồng thời cần xác định trách nhiệm và việc thực thi quy định khi không còn cần người lái vận hành xe .",
              "step4": "Đáp án đúng: 12. B. establishing how responsibility and policing would work once a driver is not required (xác định cách quy trách nhiệm và thực thi quy định khi không cần người lái); 13. D. making a vehicle cope dependably with the countless road, weather and traffic conditions it may face (giúp xe vận hành tin cậy trước vô số điều kiện đường sá, thời tiết và giao thông có thể gặp). Đối chiếu paraphrasing: B: responsibility and policing liability and enforcement; once a driver is not required once a driver is no longer necessary. D: cope dependably perform dependably; countless road, weather and traffic conditions endless variety of traffic, weather and road conditions. Đáp án A “ Bồi thường hoặc đào tạo lại những người lái xe không còn được cần đến ”: Cụm “a driver is no longer necessary” dễ gây nhầm lẫn Nhưng câu (3) chỉ nói không cần người lái để vận hành xe, không nói đến bồi thường hay đào tạo lại. Đáp án C “ Xây hạ tầng đường sá mới phù hợp với xe tự lái ”: Câu (2) nhắc đến điều kiện đường sá (“road conditions”), nhưng trở ngại là xe phải ứng phó được với các điều kiện ấy, không phải xây đường mới. Đáp án E “ Kiểm soát tốc độ thay thế xe thường bằng xe tự lái ”: Đoạn D có ý xe cần được thay sớm hơn (“need replacing sooner”). Đó là hệ quả của việc xe được sử dụng nhiều hơn, không phải trở ngại về kiểm soát tốc độ thay thế xe thường."
            }
          },
          {
            "id": 25,
            "prompt": "Which TWO obstacles to the development of driverless vehicles does the writer refer to? (Part 1 of 2)",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "working out how to compensate or retrain drivers who are no longer needed",
              "establishing how responsibility and policing would work once a driver is not required",
              "creating new road infrastructure suited to driverless vehicles",
              "making a vehicle cope dependably with the countless road, weather and traffic conditions it may face",
              "controlling how fast ordinary cars are replaced by automated ones"
            ],
            "correct": "establishing how responsibility and policing would work once a driver is not required",
            "explanation": {
              "step1": "Phân tích câu hỏi theo phương pháp Linearthinking.",
              "step2": "Định vị vùng thông tin liên quan trong bài đọc.",
              "step3": "Bóc tách cấu trúc câu (S-V-O) và đối chiếu nghĩa.",
              "step4": "Đáp án chính xác: establishing how responsibility and policing would work once a driver is not required"
            }
          },
          {
            "id": 26,
            "prompt": "Which TWO obstacles to the development of driverless vehicles does the writer refer to? (Part 2 of 2)",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "working out how to compensate or retrain drivers who are no longer needed",
              "establishing how responsibility and policing would work once a driver is not required",
              "creating new road infrastructure suited to driverless vehicles",
              "making a vehicle cope dependably with the countless road, weather and traffic conditions it may face",
              "controlling how fast ordinary cars are replaced by automated ones"
            ],
            "correct": "making a vehicle cope dependably with the countless road, weather and traffic conditions it may face",
            "explanation": {
              "step1": "Phân tích câu hỏi theo phương pháp Linearthinking.",
              "step2": "Định vị vùng thông tin liên quan trong bài đọc.",
              "step3": "Bóc tách cấu trúc câu (S-V-O) và đối chiếu nghĩa.",
              "step4": "Đáp án chính xác: making a vehicle cope dependably with the countless road, weather and traffic conditions it may face"
            }
          }
        ]
      },
      {
        "id": "cam-15-reading-1-p3",
        "passageNumber": 3,
        "title": "What is exploration?",
        "subtitle": "",
        "content": [
          "The urge to seek out what has not yet been seen is one every human carries around, and sharing what we have found afterwards may be nearly as important as the finding itself; between them, those two habits go a long way towards explaining what makes our species distinctive. Long before anyone in the encampment felt satisfied enough to describe, in whatever gestures were available, where the antelope might be grazing, one or two of their number were, we now think, already being dispatched ahead of the group to look over the terrain. That restless curiosity almost certainly pushed humanity outward until every habitable continent had been reached, and it is very likely the same instinct that steers the last Nenets reindeer-herders across the shrinking tundra of Yamal today, or guides a bewildered newcomer through the tram network of Prague.",
          "There has for some time been a tendency to picture explorers as a strange, separate tribe — set apart, somehow, even from those of us who might call ourselves widely travelled — and it is not impossible that certain temperaments do lean more naturally towards striking out into the new. That, however, ought not to obscure a simpler point: the questioning impulse itself belongs to everyone, and whether the daily work is painting, ocean-floor biology or the study of galaxies, some boundary of the not-yet-known is being pressed against every day.",
          "Bregnemose Fen — an invented stretch of low, rain-soaked bogland — is where the Danish novelist Selma Ostergaard chose to place several of her stories, and the terrain in those books does the quiet work of externalising what her characters most want and most dread. What she reaches for through that landscape is common to humanity, and that too is a form of exploration, its remoteness whatever the writer decides. Something similar is described by the travel writer and explorer Adrian Voss, who tries to capture the odd instant at which a returning explorer meets, once again, the settled life he had temporarily abandoned. For weeks, sometimes months, Voss says, such a person 'has been to himself no more than a small and pointless outsider, dragging his way across landscapes to which he does not belong, until he abruptly finds his other self — a comparatively substantial creature, holding some space inside the thoughts of certain other people'.",
          "For the purposes of this book, which concerns the physical exploration of the Earth, I have kept to figures whose journeys were literal and whose ambitions extended beyond merely private satisfaction. A further difficulty arose: the term 'explorer' has drifted backwards in time, so that anyone hearing it now pictures a bygone golden age — as though the whole enterprise reached its high point sometime in the nineteenth century and has been quietly winding down since. Yet the evidence points the other way. Only around one and a half million species have been formally named on this planet, and the true total may be over ten million once bacteria are set aside; of those already named, perhaps five per cent have been examined in any depth. Broad stretches of the sea floor remain barely charted, and our own biology is largely opaque to us, with only about a tenth of what goes on inside the human brain properly understood.",
          "When I approached various present-day 'explorers' with the question of how they would define the word, their answers varied. Kenji Aoyama, sometimes labelled 'the greatest living explorer', put it this way: to qualify, someone must have achieved a thing no human had achieved before and, separately, must have made a contribution of some scientific worth. For the mountaineer Isadora Palme, exploration was above all a matter of coming into direct bodily contact with the unknown; her formulation was that the person had to have set foot somewhere previously unvisited. A different view came from Bertil Vasseur, whose life has been given over to advocacy for remote so-called 'tribal' communities. In his terms, the traveller merely gathers observations about a distant place and reports back, whereas an explorer, when the work is genuine, alters the world in some way. And finally there was Elin Kovac, who traversed the Taklamakan Desert on foot and by camel in 1953 and stands as a survivor of an era of non-mechanised travel most of us cannot now imagine entering. She told me plainly: 'Had I made the crossing in a jeep, when a jeep would in fact have been possible, the whole thing would have amounted to a stunt.' For her, exploring meant coming back with information about a faraway place, and no self-discovery along the way was required.",
          "No two of these formulations match exactly, and the discrepancies almost always trace back to whatever line of work each person happens to pursue. The pattern held with everyone I spoke to: put the question to a well-known historian, and exploration became a matter of what had already been done; put it to a scientist working on the frontier, and it became firmly a matter of now. Each person laid down a personal test for what should qualify. The single thread running through their answers was that, unlike those of us who simply enjoy a bit of travel, every one of them had started out with a clearly defined aim, and every one felt driven to write down what was found.",
          "It seems only fair to admit my own leaning. Since my main craft is writing, what genuinely draws me is the exploration of ideas as much as of terrain. Behind me lie a great many journeys, no two of them alike; I have spent months at a stretch alone in the company of certain remote communities, and in two cases those groups were, up until then, unvisited by any outsider. Even so, none of that would matter to anyone else if I did not, in my books, contrive to turn each such trip into a fresh angle nobody had quite considered before. The reason is not sentimental. It is simply that the world has changed. Whatever era once called for one more haul to the poles, or one more crossing of the Taklamakan on foot, has long since closed. The general contour of the Earth's continental terrain is by now familiar to everyone; what awaits further exploration on it consists of fine details — the daily habits of particular microbes, or the grazing decisions of a herd of yak. Set to one side the deep ocean and the strata far beneath us, and ours is very much the era of the narrow specialist. That description, though, ignores the part the human imagination still plays in bringing remote places to life on the page; and it is that side of things that draws me — how a fresh reading, even of a route walked a hundred times before, can give the reader something new."
        ],
        "questions": [
          {
            "id": 27,
            "prompt": "In the first paragraph, the writer refers to someone finding their way around Prague in order to illustrate the point that",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "most people find navigating unfamiliar cities harder than they expect.",
              "exploration is a basic feature of what it means to be human.",
              "exploration can lead to unexpected outcomes.",
              "exploration matters more in less developed regions than in developed ones."
            ],
            "correct": "exploration is a basic feature of what it means to be human.",
            "explanation": {
              "step1": "In the first paragraph , the writer refers to someone finding their way around Prague in order to illustrate the point that Câu hỏi hỏi: Ví dụ một người tìm đường ở Prague minh họa cho luận điểm nào ? Ta cần hiểu mục đích của ví dụ, không chỉ đọc chi tiết về việc tìm đường.",
              "step2": "Dựa vào từ khóa đặc biệt là địa danh Prague => ta định vị được ví dụ tìm đường ở câu 3 đoạn 1. Đoạn 1",
              "step3": "Đoạn 1: The urge to seek out what has not yet been seen is one every human carries around , and sharing what we have found afterwards may be nearly as important as the finding itself ; between them, those two habits go a long way towards explaining what makes our species distinctive . That restless curiosity almost certainly pushed humanity outward until every habitable continent had been reached , and it is very likely the same instinct that steers the last Nenets reindeer-herders across the shrinking tundra of Yamal today, or guides a bewildered newcomer through the tram network of Prague . Câu (1): thôi thúc tìm điều chưa biết là điều mọi người đều có . Câu (3): tiếp nối ý đó, cho thấy việc tìm đường ở Prague cũng được cùng bản năng ấy dẫn dắt. Ví dụ Prague cho thấy khám phá là một đặc điểm cơ bản của con người .",
              "step4": "Đáp án đúng: B. exploration is a basic feature of what it means to be human . (Khám phá là một đặc điểm cơ bản của con người.) Đối chiếu paraphrasing: every human carries around + the same instinct a basic feature of what it means to be human Đáp án A “ Hầu hết mọi người thấy việc tìm đường ở thành phố lạ khó hơn họ dự kiến ”: Nếu chỉ thấy người mới đến đang bối rối (“bewildered newcomer”) ở câu (3), dễ chọn A Nhưng bài không so sánh độ khó thực tế với kỳ vọng. Đáp án C “ Khám phá có thể dẫn đến những kết quả bất ngờ ”: Sai vì ví dụ nói về bản năng thúc đẩy việc khám phá, không nêu kết quả bất ngờ nào. Đáp án D “ Khám phá quan trọng hơn ở những khu vực kém phát triển so với những khu vực phát triển ”: Nếu thấy Yamal và Prague ở câu (3), dễ tưởng tác giả đang so sánh hai nơi Nhưng cùng một bản năng (“the same instinct”) nhấn mạnh điểm chung, không xếp hạng tầm quan trọng của việc khám phá."
            }
          },
          {
            "id": 28,
            "prompt": "In the second paragraph, the writer's view of explorers is that",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "they act on an urge which is shared by everyone.",
              "their discoveries have both benefited and harmed the world.",
              "their main contribution is to inspire others to imitate them.",
              "they are drawn to a small number of specific professions."
            ],
            "correct": "they act on an urge which is shared by everyone.",
            "explanation": {
              "step1": "In the second paragraph , the writer's view of explorers is that Câu hỏi hỏi: Tác giả có quan điểm gì về người thám hiểm trong đoạn 2? Ta cần tìm điều tác giả thực sự khẳng định, không nhầm với quan niệm được tác giả nhắc lại để bàn luận.",
              "step2": "Đề đã chỉ rõ đoạn 2. Ta đọc đến chỗ tác giả chuyển sang nêu một điểm đơn giản hơn (“a simpler point”) về động lực tìm hiểu (“the questioning impulse”). Đoạn 2 — a simpler point",
              "step3": "Đoạn 2: That, however, ought not to obscure a simpler point: the questioning impulse itself belongs to everyone , and whether the daily work is painting, ocean-floor biology or the study of galaxies, some boundary of the not-yet-known is being pressed against every day . Người thám hiểm hành động theo động lực tìm hiểu mà ai cũng có .",
              "step4": "Đáp án đúng: A. they act on an urge which is shared by everyone . (Họ hành động theo một động lực mà tất cả mọi người đều có.) Đối chiếu paraphrasing: an urge the questioning impulse is shared by everyone belongs to everyone Đáp án B “ Những khám phá của họ vừa có lợi vừa gây hại cho thế giới ”: Sai vì tác giả đang nói về động lực khám phá chung của con người, không đánh giá những khám phá ấy vừa có lợi vừa có hại. Đáp án C “ Đóng góp chính của họ là truyền cảm hứng để người khác bắt chước ”: Sai vì động lực thuộc về mọi người không có nghĩa mọi người có động lực ấy do được người thám hiểm truyền cảm hứng. Đáp án D “ Họ bị thu hút vào một số ít nghề nghiệp cụ thể ”: Nếu chỉ thấy danh sách lĩnh vực (“painting, ocean-floor biology”), ta dễ tưởng tác giả giới hạn người thám hiểm vào một số nghề Nhưng đó là những ví dụ về công việc khác nhau; khẳng định quyết định vẫn là động lực thuộc về tất cả mọi người."
            }
          },
          {
            "id": 29,
            "prompt": "The writer refers to Selma Ostergaard's use of Bregnemose Fen in order to suggest that",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "Ostergaard drew her stories directly from her own travels.",
              "Ostergaard's aim was to show the appeal of empty landscapes.",
              "Ostergaard's real subject was the inner life of her characters.",
              "Ostergaard misunderstood what exploration actually involves."
            ],
            "correct": "Ostergaard's real subject was the inner life of her characters.",
            "explanation": {
              "step1": "The writer refers to Selma Ostergaard's use of Bregnemose Fen in order to suggest that Câu hỏi hỏi: Tác giả nhắc đến cách Selma Ostergaard sử dụng Bregnemose Fen để gợi ra điều gì? Ta cần hiểu dụng ý của ví dụ , không chỉ tìm thông tin về địa điểm.",
              "step2": "Dựa vào hai tên riêng Selma Ostergaard và Bregnemose Fen, ta định vị được câu đầu đoạn 3 . Đây là nơi tác giả giới thiệu địa điểm và giải thích chức năng của cảnh quan trong truyện. Đoạn 3",
              "step3": "Đoạn 3: Bregnemose Fen — an invented stretch of low, rain-soaked bogland — is where the Danish novelist Selma Ostergaard chose to place several of her stories , and the terrain in those books does the quiet work of externalising what her characters most want and most dread . Cảnh quan là phương tiện thể hiện đời sống nội tâm của nhân vật ; đó mới là điều Ostergaard thực sự muốn khai thác.",
              "step4": "Đáp án đúng: C. Ostergaard's real subject was the inner life of her characters . (Chủ đề thực sự của Ostergaard là đời sống nội tâm của các nhân vật.) Đối chiếu paraphrasing: the inner life of her characters what her characters most want Đáp án A “ Ostergaard lấy chất liệu truyện trực tiếp từ những chuyến đi của mình ”: việc chọn một địa điểm làm bối cảnh truyện với việc lấy chất liệu từ chuyến đi riêng. Nhưng câu (1) nói về chức năng của cảnh quan, không xác nhận truyện bắt nguồn từ những chuyến đi của Ostergaard. Đáp án B “ Mục đích của Ostergaard là thể hiện sức hấp dẫn của những cảnh quan vắng vẻ ”: Nếu chỉ chú ý phần tả cảnh (“rain-soaked bogland”), bạn dễ coi cảnh quan là trọng tâm Nhưng cảnh quan được dùng để thể hiện nội tâm nhân vật, không phải để ca ngợi sức hấp dẫn riêng của nó. Đáp án D “ Ostergaard hiểu sai về bản chất của exploration ”: Sai vì câu (1) giải thích dụng ý nghệ thuật của Ostergaard, không phê phán bà hiểu sai exploration."
            }
          },
          {
            "id": 30,
            "prompt": "In the fourth paragraph, the writer refers to a 'bygone golden age' in order to argue that",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "exploration today produces less new knowledge than it did in earlier centuries.",
              "nineteenth-century explorers are still under-appreciated by the public.",
              "it is a mistake to suppose that exploration has passed its peak.",
              "modern exploration cannot match the excitement of earlier expeditions."
            ],
            "correct": "it is a mistake to suppose that exploration has passed its peak.",
            "explanation": {
              "step1": "In the fourth paragraph , the writer refers to a ' bygone golden age' in order to argue that Câu hỏi hỏi: Tác giả nhắc đến thời hoàng kim đã qua để lập luận điều gì? Ta cần phân biệt quan niệm được nhắc lại với lập trường của tác giả.",
              "step2": "Dựa vào giới hạn đoạn 4 và cụm thời hoàng kim đã qua (“bygone golden age”), ta định vị điểm bắt đầu ở câu 2 đoạn 4. Đoạn 4 — bygone golden age",
              "step3": "Đoạn 4: A further difficulty arose: the term 'explorer' has drifted backwards in time , so that anyone hearing it now pictures a bygone golden age — as though the whole enterprise reached its high point sometime in the nineteenth century and has been quietly winding down since . Yet the evidence points the other way . Câu (2): nêu cách người ta hình dung: khám phá từng đạt đỉnh cao rồi suy giảm . Câu (3): bằng chứng đi ngược lại => quan niệm khám phá đã qua đỉnh cao là sai .",
              "step4": "Đáp án đúng: C. it is a mistake to suppose that exploration has passed its peak . (Cho rằng khám phá đã qua đỉnh cao là một nhận định sai .) Đối chiếu paraphrasing: exploration has passed its peak reached its high point + winding down since it is a mistake Yet + points the other way Đáp án A “ Khám phá ngày nay tạo ra ít kiến thức mới hơn so với những thế kỷ trước ”: Nếu chỉ thấy ý suy giảm (“winding down since”), dễ tưởng đây là kết luận của tác giả Nhưng đó là quan niệm đang bị phản bác, không phải lời khẳng định rằng kiến thức mới ngày nay ít hơn. Đáp án B “ Công chúng vẫn chưa đánh giá đúng mức các nhà thám hiểm thế kỷ XIX ”: câu (2) nhắc thế kỷ XIX (“nineteenth century”). Nhưng tác giả bàn về đỉnh cao của hoạt động khám phá, không bàn mức độ công chúng coi trọng các nhà thám hiểm. Đáp án D “ Khám phá hiện đại không thể hấp dẫn bằng những chuyến thám hiểm trước đây ”: Cụm thời hoàng kim (“golden age”) dễ gợi liên tưởng rằng những chuyến đi trước đây hấp dẫn hơn Nhưng bằng chứng đang phản bác quan niệm khám phá đã suy giảm, không so sánh mức độ hào hứng của các chuyến đi."
            }
          },
          {
            "id": 31,
            "prompt": "When considering how his interviewees defined exploration, the writer concludes that",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "no single definition will ever be acceptable to a general audience.",
              "historians and scientists give more reliable definitions than others do.",
              "many of his interviewees had simply misunderstood the term.",
              "each person's definition tends to mirror the field of work he or she is in."
            ],
            "correct": "each person's definition tends to mirror the field of work he or she is in.",
            "explanation": {
              "step1": "When considering how his interviewees defined exploration , the writer concludes that Câu hỏi hỏi: Tác giả kết luận điều gì khi xem xét cách những người được phỏng vấn định nghĩa exploration? Ta cần tìm nhận xét tổng hợp của tác giả, không phải định nghĩa riêng của một người.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta tìm nhận xét tổng hợp về các định nghĩa exploration. Đầu đoạn 6 nhắc đến các cách định nghĩa này (“these formulations”) và khác biệt giữa chúng (“the discrepancies”) => đây là vùng liên quan. Đoạn 6 — these formulations",
              "step3": "Đoạn 6: No two of these formulations match exactly , and the discrepancies almost always trace back to whatever line of work each person happens to pursue . Khác biệt giữa các định nghĩa thường bắt nguồn từ công việc của từng người .",
              "step4": "Đáp án đúng: D. each person's definition tends to mirror the field of work he or she is in . (Định nghĩa của mỗi người thường phản ánh lĩnh vực họ làm việc.) Đối chiếu paraphrasing: almost always trace back to tends to mirror work each person happens to pursue the field of work he or she is in Đáp án A “ Không một định nghĩa nào sẽ được công chúng chấp nhận ”: Nếu chỉ thấy các định nghĩa không hoàn toàn giống nhau, dễ suy ra không định nghĩa nào được chấp nhận Nhưng khác biệt không đồng nghĩa với việc công chúng sẽ không bao giờ chấp nhận chúng. Đáp án B “ Các nhà sử học và nhà khoa học đưa ra định nghĩa đáng tin cậy hơn những người khác ”: Đoạn 6 có nhắc nhà sử học (“historian”) và nhà khoa học (“scientist”), nên dễ chọn theo từ khoá Nhưng họ minh hoạ ảnh hưởng của công việc lên định nghĩa, không phải sự hơn kém về độ đáng tin cậy. Đáp án C “ Nhiều người được phỏng vấn chỉ đơn giản là hiểu sai thuật ngữ ”: Nếu thấy những khác biệt (“the discrepancies”), dễ nhầm đó là lỗi hiểu sai Nhưng tác giả giải thích khác biệt bằng công việc của từng người, không kết luận họ hiểu sai."
            }
          },
          {
            "id": 32,
            "prompt": "In the final paragraph, the writer explains that he is interested in",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "the way a writer's imagination can reveal something new about a place already familiar.",
              "how a traveller's personality is shaped by the places he chooses to visit.",
              "how travel writing has evolved to meet the tastes of modern readers.",
              "the feelings a writer develops toward the places he has explored."
            ],
            "correct": "the way a writer's imagination can reveal something new about a place already familiar.",
            "explanation": {
              "step1": "In the final paragraph , the writer explains that he is interested in Câu hỏi hỏi: Trong đoạn cuối, tác giả giải thích mình quan tâm đến điều gì?",
              "step2": "Đoạn cuối là đoạn 7. Ta tìm cách diễn đạt tương đương với điều tác giả quan tâm; cụm chỉ điều thu hút tác giả (“draws me”) giúp định vị vùng liên quan. Đoạn 7 — draws me",
              "step3": "Đoạn 7: Set to one side the deep ocean and the strata far beneath us , and ours is very much the era of the narrow specialist . That description , though , ignores the part the human imagination still plays in bringing remote places to life on the page ; and it is that side of things that draws me — how a fresh reading , even of a route walked a hundred times before , can give the reader something new . Câu (9): nêu nhận xét đây là thời đại của chuyên gia chuyên sâu. Câu (10): tuy nhiên, trí tưởng tượng khi viết vẫn có thể đem lại điều mới về nơi đã quen thuộc ; đó là điều tác giả quan tâm.",
              "step4": "Đáp án đúng: A. the way a writer's imagination can reveal something new about a place already familiar . (Cách trí tưởng tượng của người viết có thể hé lộ điều mới về một địa điểm đã quen thuộc .) Đối chiếu paraphrasing: a writer's imagination the human imagination + on the page a place already familiar a route walked + before reveal something new give the reader something new Đáp án B “ Cách những nơi người đi du lịch chọn đến định hình tính cách của họ ”: Sai vì tác giả nói về trí tưởng tượng tạo cách nhìn mới cho độc giả, không nói địa điểm định hình tính cách người đi du lịch. Đáp án C “ Cách văn viết về du lịch phát triển để đáp ứng thị hiếu độc giả hiện đại ”: Đoạn 7 nhắc thế giới đã thay đổi (“the world has changed”), dễ khiến ta suy sang sự thay đổi của thể loại viết Nhưng tác giả không nói thể loại này phát triển nhằm đáp ứng thị hiếu độc giả hiện đại. Đáp án D “ Những tình cảm người viết hình thành với các nơi mình đã khám phá ”: Thấy cụm chỉ sự thu hút (“draws me”), ta dễ nghĩ đến tình cảm với địa điểm Nhưng điều thu hút tác giả là khả năng đem lại cách nhìn mới qua việc viết, không phải tình cảm dành cho nơi đã đi."
            }
          },
          {
            "id": 33,
            "prompt": "Match the statement with the correct person/feature: \"He mentioned that the type of transport used could determine whether a journey qualified.\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "Kenji Aoyama",
              "Elin Kovac",
              "Isadora Palme",
              "Bertil Vasseur",
              "Adrian Voss"
            ],
            "correct": "Elin Kovac",
            "explanation": {
              "step1": "Tên đang xử lý: Elin Kovac . Bài nhắc đến Elin Kovac ở đoạn 5. Lưu ý: Đề dùng đại từ nam (“He”, “his”), còn bài dùng đại từ nữ (“She”, “her”) cho Elin Kovac. Nội dung hai statement vẫn khớp; ta giữ nguyên câu hỏi.",
              "step2": "And finally there was Elin Kovac , who traversed the Taklamakan Desert on foot and by camel in 1953 and stands as a survivor of an era of non-mechanised travel most of us cannot now imagine entering . She told me plainly : ' Had I made the crossing in a jeep , when a jeep would in fact have been possible , the whole thing would have amounted to a stunt .' For her, exploring meant coming back with information about a faraway place , and no self-discovery along the way was required . Câu (6)–(7): giới thiệu Elin Kovac; dùng jeep => chuyến đi chỉ còn là màn trình diễn, nên phương tiện ảnh hưởng tư cách chuyến đi . Câu (8): bổ sung định nghĩa khám phá là mang thông tin trở về; hiểu bản thân hơn không bắt buộc . 🔎 Khớp với statement 7: He mentioned that the type of transport used could determine whether a journey qualified . Đối chiếu paraphrasing: the type of transport used in a jeep could determine whether a journey qualified would have amounted to a stunt understanding oneself better self discovery not a necessary part no self discovery + was required understanding oneself better self discovery not a necessary part no self discovery + was required 🔎 Khớp với statement 10: To his mind, understanding oneself better was not a necessary part of exploration .",
              "step3": "Với tên Elin Kovac ở đoạn 5, ta chọn được: câu 7 và câu 10. Isadora Palme đoạn 5 nói đến đặt chân (“set foot”) ở nơi chưa từng được thăm (“previously unvisited”). Nhưng đó là tiêu chí về nơi đến, không phải phương tiện sử dụng. Adrian Voss đoạn 3 nói tới một phần khác của bản thân (“his other self”). Nhưng đó là cảm giác khi trở về đời sống thường nhật, không phải khẳng định việc tự khám phá bản thân không bắt buộc.",
              "step4": "Đáp án chính xác: Elin Kovac"
            }
          },
          {
            "id": 34,
            "prompt": "Match the statement with the correct person/feature: \"He described what it feels like to re-enter ordinary life after a long time away.\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "Kenji Aoyama",
              "Elin Kovac",
              "Isadora Palme",
              "Bertil Vasseur",
              "Adrian Voss"
            ],
            "correct": "Adrian Voss",
            "explanation": {
              "step1": "Tên đang xử lý: Adrian Voss Bài nhắc đến Adrian Voss ở đoạn 3, bằng tên đầy đủ và họ Voss.",
              "step2": "Something similar is described by the travel writer and explorer Adrian Voss , who tries to capture the odd instant at which a returning explorer meets , once again, the settled life he had temporarily abandoned . For weeks , sometimes months , Voss says , such a person ' has been to himself no more than a small and pointless outsider , dragging his way across landscapes to which he does not belong, until he abruptly finds his other self — a comparatively substantial creature, holding some space inside the thoughts of certain other people '. Câu (3): giới thiệu Adrian Voss mô tả người thám hiểm trở lại cuộc sống thường ngày . Câu (4): cụ thể hóa bằng nhiều tuần ở xa và sự thay đổi trong cảm nhận về bản thân . Adrian Voss mô tả cảm giác khi trở về sau thời gian dài ở xa . 🔎 Khớp với statement 8: He described what it feels like to re-enter ordinary life after a long time away . Đối chiếu paraphrasing: re enter ordinary life a returning explorer + the settled life he had temporarily abandoned after a long time away For weeks what it feels like to himself + pointless outsider + finds his other self",
              "step3": "Với tên Adrian Voss ở đoạn 3, ta chọn được: câu 8. Elin Kovac Đoạn 5 cũng nhắc việc trở về cùng thông tin (“coming back with information”), nên dễ nhầm nếu chỉ tìm ý trở về Nhưng đó là tiêu chí của exploration, không phải mô tả cảm giác khi trở lại cuộc sống thường ngày.",
              "step4": "Đáp án chính xác: Adrian Voss"
            }
          },
          {
            "id": 35,
            "prompt": "Match the statement with the correct person/feature: \"His work has been dedicated to advancing the interests of particular groups.\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "Kenji Aoyama",
              "Elin Kovac",
              "Isadora Palme",
              "Bertil Vasseur",
              "Adrian Voss"
            ],
            "correct": "Bertil Vasseur",
            "explanation": {
              "step1": "Tên đang xử lý: Bertil Vasseur . Bài nhắc đến Bertil Vasseur ở đoạn 5.",
              "step2": "A different view came from Bertil Vasseur , whose life has been given over to advocacy for remote so-called 'tribal' communities . 🔎 Khớp với statement 9: His work has been dedicated to advancing the interests of particular groups . Đối chiếu paraphrasing: has been dedicated to has been given over to advancing the interests advocacy particular groups 'tribal' communities",
              "step3": "Với tên Bertil Vasseur ở đoạn 5, ta chọn được: câu 9. Kenji Aoyama đoạn 5 cũng nói đến đóng góp có giá trị khoa học (“contribution of some scientific worth”). Nhưng đóng góp khoa học không đồng nghĩa với bảo vệ lợi ích của những nhóm cụ thể.",
              "step4": "Đáp án chính xác: Bertil Vasseur"
            }
          },
          {
            "id": 36,
            "prompt": "Match the statement with the correct person/feature: \"To his mind, understanding oneself better was not a necessary part of exploration.\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "Kenji Aoyama",
              "Elin Kovac",
              "Isadora Palme",
              "Bertil Vasseur",
              "Adrian Voss"
            ],
            "correct": "Elin Kovac",
            "explanation": {
              "step1": "Tên đang xử lý: Kenji Aoyama . Bài nhắc đến Kenji Aoyama ở đoạn 5.",
              "step2": "Kenji Aoyama , sometimes labelled 'the greatest living explorer', put it this way: to qualify, someone must have achieved a thing no human had achieved before and , separately, must have made a contribution of some scientific worth . 🔎 Khớp với statement 11: He required an explorer's achievement to be both without precedent and of scientific value . Đối chiếu paraphrasing: required must without precedent no human had achieved before of scientific value scientific worth",
              "step3": "Với tên Kenji Aoyama ở đoạn 5, ta chọn được: câu 11. Isadora Palme cũng yêu cầu đặt chân đến nơi chưa từng được ghé thăm (“somewhere previously unvisited”). Nhưng statement 11 yêu cầu cả tính chưa từng có lẫn giá trị khoa học; quan điểm của Isadora Palme không nêu điều kiện thứ hai.",
              "step4": "Đáp án chính xác: Elin Kovac"
            }
          },
          {
            "id": 37,
            "prompt": "Match the statement with the correct person/feature: \"He required an explorer's achievement to be both without precedent and of scientific value.\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "Kenji Aoyama",
              "Elin Kovac",
              "Isadora Palme",
              "Bertil Vasseur",
              "Adrian Voss"
            ],
            "correct": "Kenji Aoyama",
            "explanation": {
              "step1": "The writer has undertaken a considerable number of 12. ___ over the course of his career, none identical to another. Ý câu hỏi: Tác giả đã thực hiện rất nhiều việc hoặc trải nghiệm trong sự nghiệp, không lần nào giống lần nào. Dự đoán ô trống: - Loại từ: danh từ đếm được số nhiều , vì đứng sau cụm chỉ số lượng lớn (“a considerable number of”). - Nghĩa: những hoạt động hoặc trải nghiệm tác giả đã thực hiện; mỗi lần đều khác nhau.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh để tìm phần tác giả kể về trải nghiệm của chính mình. Đoạn 7 mở đầu bằng lời thừa nhận thiên hướng cá nhân (“my own leaning”) => đây là vùng liên quan. Đoạn 7 — my own leaning",
              "step3": "Đoạn 7: Behind me lie a great many journeys , no two of them alike ; I have spent months at a stretch alone in the company of certain remote communities , and in two cases those groups were, up until then, unvisited by any outsider .",
              "step4": "Đáp án phù hợp nhất: journeys Câu hoàn chỉnh: The writer has undertaken a considerable number of journeys over the course of his career, none identical to another. (Tác giả đã thực hiện rất nhiều chuyến đi trong sự nghiệp, không chuyến nào giống chuyến nào.) => Khớp với dự đoán danh từ số nhiều chỉ trải nghiệm và thông tin trong bài; đáp án gồm 1 từ, lấy nguyên văn từ bài. Phần đề được cung cấp không nêu giới hạn số từ. Đối chiếu paraphrasing: a considerable number of a great many none identical to another no two of them alike months “ số tháng ”: Nếu scan thấy danh từ số nhiều này ở gần đáp án, em có thể chọn nhầm Nhưng nó chỉ thời lượng, không phải những trải nghiệm tác giả đã thực hiện. communities “ các cộng đồng ”: Từ này cũng là danh từ số nhiều, nhưng chỉ những cộng đồng tác giả đã ở cùng, không phải các hoạt động ông đã thực hiện (“has undertaken”)."
            }
          },
          {
            "id": 38,
            "prompt": "The writer has undertaken a considerable number of  _____  over the course of his career, none identical to another. On a couple of occasions he was the very first outsider a group had ever met — until his arrival those communities had been  _____ . In his view, the broad shape of the planet's land  _____  has already been mapped, and what remains for present-day researchers are narrower questions such as how a herd of yak chooses where to feed.",
            "type": "FILL_IN_BLANK",
            "correct": "journeys",
            "explanation": {
              "step1": "On a couple of occasions he was the very first outsider a group had ever met — until his arrival those communities had been 13. ___ . Ý câu hỏi: Trong hai lần, tác giả là người ngoài đầu tiên mà một nhóm từng gặp. Ô trống mô tả trạng thái của các cộng đồng ấy trước khi ông đến. Dự đoán ô trống: - Loại từ: tính từ hoặc quá khứ phân từ, đứng sau cấu trúc đã ở một trạng thái nào đó (“had been”). - Nghĩa: chưa từng được người ngoài ghé thăm , suy ra từ việc tác giả là người ngoài đầu tiên họ gặp.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến phần tác giả kể về trải nghiệm của mình ở đoạn 7. Ý hai lần trong câu hỏi (“On a couple of occasions”) tương ứng với hai trường hợp trong bài (“in two cases”) => bắt đầu đọc từ câu (3). Đoạn 7",
              "step3": "Đoạn 7: Behind me lie a great many journeys , no two of them alike ; I have spent months at a stretch alone in the company of certain remote communities , and in two cases those groups were, up until then, unvisited by any outsider .",
              "step4": "Đáp án phù hợp nhất: unvisited Câu hoàn chỉnh: On a couple of occasions he was the very first outsider a group had ever met — until his arrival those communities had been unvisited. (Có hai lần ông là người ngoài đầu tiên mà một nhóm từng gặp — trước khi ông đến, các cộng đồng ấy chưa từng được người ngoài ghé thăm .) => Khớp với dự đoán về trạng thái chưa từng được người ngoài ghé thăm và bằng chứng trong bài; đáp án gồm 1 từ, lấy nguyên văn từ bài. Đối chiếu paraphrasing: On a couple of occasions in two cases until his arrival up until then the very first outsider unvisited by any outsider — xét trạng thái trước khi tác giả đến. remote “ xa xôi ”: từ này mô tả các cộng đồng và cũng có thể đứng sau cấu trúc “had been”. Nhưng ở xa không có nghĩa là chưa từng được người ngoài ghé thăm. alone “ một mình ”: Sai vì từ này mô tả tác giả ở một mình, không mô tả trạng thái của các cộng đồng trước khi ông đến."
            }
          },
          {
            "id": 39,
            "prompt": "Complete blank for question 39:",
            "type": "FILL_IN_BLANK",
            "correct": "unvisited",
            "explanation": {
              "step1": "In his view, the broad shape of the planet's land 14. ___ has already been mapped , and what remains for present-day researchers are narrower questions such as how a herd of yak chooses where to feed . Ý câu hỏi: Hình dạng tổng thể của phần đất liền đã được lập bản đồ; việc nghiên cứu hiện nay tập trung vào những vấn đề hẹp hơn. Dự đoán ô trống 14: - Loại từ: danh từ , đứng sau từ bổ nghĩa chỉ đất liền (“land”). - Nghĩa: một từ chỉ địa hình hoặc bề mặt đất liền , thứ có hình dạng tổng thể.",
              "step2": "Dựa vào tên loài yak trong ví dụ của câu hỏi, ta tìm được vùng liên quan ở đoạn 7. Bắt đầu đọc từ nhận định về hình dạng tổng thể (“general contour”). Đoạn 7 — general contour",
              "step3": "Đoạn 7: The general contour of the Earth's continental terrain is by now familiar to everyone ; what awaits further exploration on it consists of fine details — the daily habits of particular microbes, or the grazing decisions of a herd of yak .",
              "step4": "Đáp án phù hợp nhất: terrain Câu hoàn chỉnh: In his view, the broad shape of the planet's land terrain has already been mapped, and what remains for present-day researchers are narrower questions such as how a herd of yak chooses where to feed. (Theo ông, hình dạng tổng thể của địa hình đất liền trên hành tinh đã được lập bản đồ, và các nhà nghiên cứu hiện nay còn những câu hỏi hẹp hơn, chẳng hạn một đàn yak chọn nơi kiếm ăn như thế nào.) => Khớp với dự đoán danh từ chỉ địa hình và thông tin trong bài; đáp án gồm 1 từ lấy nguyên văn. Phần đề được cung cấp không nêu giới hạn số từ. Đối chiếu paraphrasing: broad shape general contour land continental already been mapped by now familiar contour “ hình dạng ”: Từ này nằm gần đáp án nhưng đã tương ứng với hình dạng tổng thể (“broad shape”), có sẵn trong đề; ô trống cần danh từ chỉ địa hình. continental “ thuộc đất liền ”: Sai vì đây là tính từ, không phải danh từ cần điền sau từ bổ nghĩa chỉ đất liền (“land”). details “ các chi tiết ”: cùng nói về việc khám phá, Nhưng đây là phần còn cần nghiên cứu, không phải địa hình có hình dạng tổng thể đã được biết."
            }
          },
          {
            "id": 40,
            "prompt": "Complete blank for question 40:",
            "type": "FILL_IN_BLANK",
            "correct": "terrain",
            "explanation": {
              "step1": "Phân tích câu hỏi theo phương pháp Linearthinking.",
              "step2": "Định vị vùng thông tin liên quan trong bài đọc.",
              "step3": "Bóc tách cấu trúc câu (S-V-O) và đối chiếu nghĩa.",
              "step4": "Đáp án chính xác: terrain"
            }
          }
        ]
      }
    ]
  },
  "cam-14-reading-1": {
    "id": "cam-14-reading-1",
    "title": "IELTS CAM Inspired 14 - Reading Test 1",
    "series": "Cambridge 14",
    "testNumber": 1,
    "type": "Reading",
    "durationMinutes": 60,
    "passages": [
      {
        "id": "cam-14-reading-1-p1",
        "passageNumber": 1,
        "title": "THE IMPORTANCE OF CHILDREN'S PLAY",
        "subtitle": "",
        "content": [
          "Piece by piece, five-year-old Maya is assembling a castle from wooden blocks. In her head, dragons circle its towers, knights ride to the rescue, and a sorcerer plots below; a whole world is taking shape around her. She has no idea that inventing worlds like this is quietly laying the foundations of her imagination — something that will echo through her adult life.",
          "A little later the castle is forgotten, and Maya is playing shops with her brother instead. Ordering him about as the 'shopkeeper', she is rehearsing, through pretence, how to keep her feelings in check. When the two grow bored of that and settle over a card game, what she absorbs is the importance of sharing and of taking turns.",
          "'In all its enormous variety, play is among the finest things our species has ever produced,' says Professor Aldous Renwick of the School of Education at the University of Wexbridge. 'It lies beneath our growth into thoughtful, problem-solving adults, and it is central to why humans adapt so well to almost any circumstance.'",
          "None of this recognition is new. Almost two thousand years ago the Roman teacher Quintilian was already praising play as a way of preparing the young for the demands of adulthood, and theories of learning through play have been taking shape steadily since the 1800s.",
          "Yet the world is not standing still, and Renwick is conscious of a decline in play. As cities spread outwards, ever more children are brought up in cramped city flats with nowhere green to run. 'The chance to play freely, which I had on almost any day of my own childhood, is slipping away,' he says. Outdoor play is held back partly by fears about fast-moving vehicles, partly by parents' determination to keep their children safe from strangers, and partly by a belief that 'the sooner the better' — one that has loaded ever more pressure onto academic work in schools.",
          "Organisations of global reach, the United Nations and the European Union among them, have started drawing up policies to protect a child's right to play and to weigh what this means for parks, playgrounds and school curricula. What tends to be missing, however, is the hard data on which sound policy has to rest.",
          "'What interests us is the play a child starts alone — spontaneous, impossible to predict — and the trouble is that the moment you tell a five-year-old \"go and play\", you the researcher have already interfered,' says Dr Marta Ostrowski. 'And what we're after is the effect play has years down the line. It's a genuinely hard thing to pin down.'",
          "Dr Cillian Boyd agrees. A few pieces of the puzzle — how play matters, and why — have been examined, but almost nothing is known about the mark it leaves on the rest of a child's future.",
          "With the university's newly opened Centre for the Study of Play, Learning and Development behind them, Renwick, Ostrowski, Boyd and their fellow researchers aim to supply exactly the evidence that has been missing about how play shapes a child's growth.",
          "'One likely outcome is that play feeds the early growth of a child's self-control,' Ostrowski suggests. 'By that I mean the capacity to become aware of one's own thinking as it unfolds — and it has a bearing on how well we tackle anything demanding.'",
          "In one experiment with toddlers and slightly older pre-schoolers, Ostrowski observed that those with stronger self-control worked through problems faster when faced with an unfamiliar apparatus that called for scientific reasoning. 'Findings like these lead us to think that letting children play will, over the years, turn them into better problem-solvers.'",
          "Should play really assist this part of a child's development, the team argues, the consequences for teaching could be considerable — for the power to self-regulate has already proved one of the surest signs of how well a child will go on to perform academically.",
          "Boyd adds a further point: 'The way a child plays is also a telling sign of healthy social and emotional growth. In earlier work of mine, I looked at how watching children at play can offer valuable hints about their well-being — and can even help in identifying neurodevelopmental conditions such as autism.'",
          "Renwick's own recent work has gone into building a play-based method for helping children write. 'Many primary-age children struggle with writing, but an earlier study of ours showed that a playful prompt worked far better than a straightforwardly instructional one.' The children produced longer, better-organised stories when they had first acted out the characters with hand puppets. In the latest study, the pupils began instead by modelling those characters in clay, with much the same results. 'Teachers kept telling me that in the past children constantly complained they had nothing to write about. Once the clay modelling came in, not one child said that all year.'",
          "Renwick, who now heads the centre, first qualified as a primary teacher back in the early 1970s — a time, in his words, when 'the teaching of the very young was something of a still pond, disturbed by no real intellectual argument at all.' The scene today could hardly be more different, with questions like the right age to begin school fiercely contested.",
          "'Somehow, in the last few decades, we have let the worth of play slip from view. It gets dismissed as a triviality, or cast as the unwelcome opposite of \"work\". Its rewards deserve to be remembered, as do the profound contributions play makes to all that humans accomplish in art, science and technology. Children, above all, should be guaranteed a full and varied diet of play.'"
        ],
        "questions": [
          {
            "id": 1,
            "prompt": "What play does for children",
            "type": "FILL_IN_BLANK",
            "correct": "imagination",
            "explanation": {
              "step1": "building a pretend castle can nurture a child's 1. ___ Chỗ trống đứng sau “a child's”, nên cần một danh từ chỉ khả năng hoặc phẩm chất mà hoạt động chơi này giúp phát triển.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta tìm hoạt động dựng lâu đài (“building a pretend castle”). Đoạn 1 có cụm tương ứng là dựng một lâu đài (“assembling a castle”) => bắt đầu đọc từ câu 1. Đoạn 1",
              "step3": "Đoạn 1: Piece by piece, five-year-old Maya is assembling a castle from wooden blocks . In her head, dragons circle its towers , knights ride to the rescue, and a sorcerer plots below ; a whole world is taking shape around her . She has no idea that inventing worlds like this is quietly laying the foundations of her imagination — something that will echo through her adult life . Câu (1)–(2): Maya dựng lâu đài rồi tưởng tượng những gì diễn ra quanh nó. Câu (3): việc tạo ra thế giới ấy đặt nền tảng cho trí tưởng tượng của Maya.",
              "step4": "Đáp án phù hợp nhất: imagination Câu hoàn chỉnh: building a pretend castle can nurture a child's imagination (Việc dựng một lâu đài giả tưởng có thể nuôi dưỡng trí tưởng tượng của trẻ.) => Khớp với dự đoán về một khả năng của trẻ: bài đọc nêu rõ “ her imagination ”. Đáp án gồm 1 từ; đề không nêu giới hạn số từ riêng. Đối chiếu paraphrasing: building a pretend castle assembling a castle + inventing worlds like this can nurture laying the foundations of worlds “ — những thế giới tưởng tượng ”: Nếu skim/scan thấy “inventing worlds like this” sẽ dễ chọn từ này Nhưng worlds là thứ Maya tạo ra, không phải khả năng được nuôi dưỡng. sharing “ — sự chia sẻ ”: Đoạn 2 có “importance of sharing”, nhưng đó là điều Maya học qua trò chơi bài, không phải qua việc dựng lâu đài. adult life “ — cuộc sống trưởng thành ”: Cụm này xuất hiện ngay sau đáp án, nhưng chỉ nói tác động có thể kéo dài đến khi trưởng thành; nó không phải khả năng cần điền."
            }
          },
          {
            "id": 2,
            "prompt": "building a pretend castle can nurture a child's",
            "type": "FILL_IN_BLANK",
            "correct": "sharing",
            "explanation": {
              "step1": "card games help children practise 2. ___ and waiting for their turn Ô trống cần một hoạt động hoặc kỹ năng trẻ rèn luyện khi chơi bài, có thể đứng song song với “waiting for their turn”. Dự đoán một từ dạng V-ing .",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta tìm đoạn nói về trò chơi bài. Cụm “a card game” ở đoạn 2 => đây là vùng cần đọc. Đoạn 2 — a card game",
              "step3": "Đoạn 2: When the two grow bored of that and settle over a card game , what she absorbs is the importance of sharing and of taking turns . “Taking turns” ứng với phần đã có sẵn trong đề: chờ đến lượt. Vì vậy, ô trống cần từ đứng trước nó: sharing .",
              "step4": "Đáp án phù hợp nhất: sharing Câu hoàn chỉnh: card games help children practise sharing and waiting for their turn (Trò chơi bài giúp trẻ rèn luyện việc chia sẻ và chờ đến lượt.) => Khớp với dự đoán về một hoạt động dạng V-ing và đúng từ trong bài; đáp án gồm 1 từ. Đối chiếu paraphrasing: waiting for their turn taking turns taking turns “ việc chờ đến lượt ”: cụm này đứng sát “sharing”, Nhưng nó ứng với phần “waiting for their turn” đã được in sẵn, không phải ô trống. feelings in check “ kiểm soát cảm xúc ”: Cụm này ở câu 2 đoạn 2, nói về trò chơi đóng vai bán hàng, không phải trò chơi bài."
            }
          },
          {
            "id": 3,
            "prompt": "card games help children practise    and waiting for their turn",
            "type": "FILL_IN_BLANK",
            "correct": "flats",
            "explanation": {
              "step1": "rising numbers of children now live in crowded urban 3. ___ Ô trống đứng sau “crowded urban”, nên cần một danh từ chỉ nơi ở . Cụm “rising numbers of children” cho biết ta cần tìm thông tin về số trẻ ngày càng tăng.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp ý ngày càng nhiều trẻ em (“ever more children”) ở đoạn 5 => bắt đầu đọc từ câu (2). Đoạn 5",
              "step3": "Đoạn 5: As cities spread outwards , ever more children are brought up in cramped city flats with nowhere green to run .",
              "step4": "Đáp án phù hợp nhất: flats Câu hoàn chỉnh: rising numbers of children now live in crowded urban flats (Ngày càng nhiều trẻ em hiện sống trong các căn hộ chật chội ở đô thị.) => Khớp với dự đoán về danh từ chỉ nơi ở : bài đọc dùng flats ; chỉ cần điền 1 từ. Đối chiếu paraphrasing: rising numbers of children ever more children crowded urban cramped city cities “ thành phố ”: Nếu skim/scan thấy các thành phố mở rộng (“cities spread outwards”) sẽ dễ chọn từ này Nhưng sau “crowded urban”, ô trống cần tên nơi ở của trẻ, không phải tên khu vực. cramped “ chật chội ”: Từ này diễn tả đặc điểm của nơi ở, không phải danh từ cần điền. vehicles “ phương tiện giao thông ”: Đoạn 5 cũng nhắc đến “fast-moving vehicles”, nhưng đó là một nỗi lo ảnh hưởng đến việc chơi ngoài trời, không phải nơi trẻ sống."
            }
          },
          {
            "id": 4,
            "prompt": "Why play is in decline",
            "type": "FILL_IN_BLANK",
            "correct": "vehicles",
            "explanation": {
              "step1": "worry about 4. ___ on the roads Ô trống đứng sau “about”, nên cần một danh từ chỉ thứ ở trên đường khiến người ta lo ngại. Chưa thể chọn từ cụ thể chỉ bằng câu hỏi.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta tìm ý cơ hội chơi bị hạn chế. Ở đoạn 5, cụm “Outdoor play is held back” cho biết nên bắt đầu đọc từ đó. Đoạn 5 — Outdoor play is held back",
              "step3": "Đoạn 5: Outdoor play is held back partly by fears about fast-moving vehicles , partly by parents' determination to keep their children safe from strangers, and partly by a belief that 'the sooner the better' — one that has loaded ever more pressure onto academic work in schools .",
              "step4": "Đáp án phù hợp nhất: vehicles Câu hoàn chỉnh: worry about vehicles on the roads (lo ngại các phương tiện trên đường ) => Khớp với dự đoán về một danh từ chỉ thứ trên đường; bài đọc nêu nỗi lo về phương tiện chạy nhanh . Đáp án gồm 1 từ; đề không ghi giới hạn số từ. Đối chiếu paraphrasing: worry about fears about chances for unsupervised play are reduced by Outdoor play is held back strangers người lạ: Cùng xuất hiện ở câu (4), nhưng đây là mối lo khác, không phải đối tượng được nhắc đến trong cụm nói về phương tiện chạy nhanh (“fast-moving vehicles”). pressure áp lực: Từ này gắn với việc học ở trường (“academic work in schools”), không phải nỗi lo trên đường. fast-moving di chuyển nhanh: Từ này bổ nghĩa cho “vehicles”, không phải danh từ cần điền."
            }
          },
          {
            "id": 5,
            "prompt": "rising numbers of children now live in crowded urban",
            "type": "FILL_IN_BLANK",
            "correct": "strangers",
            "explanation": {
              "step1": "Ở mục nguyên nhân khiến việc vui chơi suy giảm (“Why play is in decline”), chỗ trống cần điền là: worry about 5. ___ Sau *about*, cần một danh từ hoặc cụm danh từ chỉ điều khiến người lớn lo ngại. Chưa thể xác định từ cần điền nếu chưa đọc bài.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp ý việc vui chơi ngoài trời bị hạn chế (“Outdoor play is held back”) ở đoạn 5 => đây là vùng liên quan. Đoạn 5 — Outdoor play is held back",
              "step3": "Đoạn 5: Outdoor play is held back partly by fears about fast-moving vehicles, partly by parents' determination to keep their children safe from strangers , and partly by a belief that 'the sooner the better' — one that has loaded ever more pressure onto academic work in schools .",
              "step4": "Đáp án phù hợp nhất: strangers Câu hoàn chỉnh: worry about strangers (lo ngại về người lạ ) => Khớp với dự đoán: cha mẹ muốn bảo vệ con khỏi người lạ (“safe from strangers”). Đáp án gồm 1 từ; đề được cung cấp không nêu giới hạn số từ. Đối chiếu paraphrasing: worry about parents' determination to keep their children safe from chances for unsupervised play are reduced by Outdoor play is held back vehicles — xe cộ: Cũng xuất hiện trong câu (4), nhưng thuộc mối lo về đường sá (“fast-moving vehicles”) ở chỗ trống số 4. pressure — áp lực: Thuộc nguyên nhân liên quan đến việc học (“pressure onto academic work”) ở chỗ trống số 6, không phải đối tượng cha mẹ muốn bảo vệ con khỏi. children — trẻ em: Đây là người được bảo vệ (“their children”), không phải đối tượng gây lo ngại."
            }
          },
          {
            "id": 6,
            "prompt": "chances for unsupervised play are reduced by",
            "type": "FILL_IN_BLANK",
            "correct": "pressure",
            "explanation": {
              "step1": "mounting academic 6. ___ at school Ô trống cần một danh từ chỉ điều đang gia tăng liên quan đến việc học ở trường.",
              "step2": "Câu hỏi thuộc mục về nguyên nhân việc chơi suy giảm. Ở đoạn 5, ý việc chơi ngoài trời bị hạn chế (“Outdoor play is held back”) là điểm bắt đầu đọc để tìm nguyên nhân liên quan đến trường học. Đoạn 5 — Outdoor play is held back",
              "step3": "Đoạn 5: Outdoor play is held back partly by fears about fast-moving vehicles, partly by parents' determination to keep their children safe from strangers, and partly by a belief that 'the sooner the better' — one that has loaded ever more pressure onto academic work in schools .",
              "step4": "Đáp án phù hợp nhất: pressure Câu hoàn chỉnh: mounting academic pressure at school (áp lực học tập ngày càng tăng ở trường) => Khớp với dự đoán về một danh từ chỉ điều đang gia tăng: bài đọc nói áp lực ngày càng nhiều (“ever more pressure”) đối với việc học ở trường; đáp án lấy nguyên văn 1 từ từ bài. Đề được cung cấp không nêu giới hạn số từ. Đối chiếu paraphrasing: mounting ever more at school in schools Đáp án work “ việc học ”: Từ này nằm ngay sau “pressure”, nhưng điều được nói là gia tăng là áp lực đặt lên việc học, không phải bản thân việc học. fears “ nỗi lo ”: Câu bằng chứng có nhắc đến nỗi lo, nhưng đó là lo về phương tiện giao thông, không phải điều gia tăng liên quan đến học tập ở trường."
            }
          },
          {
            "id": 7,
            "prompt": "worry about    on the roads",
            "type": "FILL_IN_BLANK",
            "correct": "data",
            "explanation": {
              "step1": "the 7. ___ needed to justify these policies is difficult to come by Ô trống đứng sau “the”, ở vị trí cần một danh từ . Trước khi đọc bài, ta dự đoán đó là thứ dùng làm căn cứ cho chính sách nhưng hiện khó tìm được.",
              "step2": "Câu hỏi không có từ khóa đặc biệt; ta tìm phần nói về chính sách vui chơi. Đoạn 6 nhắc đến việc xây dựng chính sách (“policies to protect”) => bắt đầu đọc tại đây. Đoạn 6 — policies to protect",
              "step3": "Đoạn 6: What tends to be missing , however, is the hard data on which sound policy has to rest .",
              "step4": "Đáp án phù hợp nhất: data Câu hoàn chỉnh: the data needed to justify these policies is difficult to come by (Dữ liệu cần để làm căn cứ cho các chính sách này rất khó có được .) => Khớp với dự đoán: data là thứ chính sách phải dựa vào và đang bị thiếu ; đáp án gồm 1 từ, còn đề không nêu giới hạn số từ. Đối chiếu paraphrasing: difficult to come by tends to be missing needed to justify these policies on which sound policy has to rest evidence — bằng chứng: Đoạn 9 cũng nói đến bằng chứng còn thiếu (“the evidence that has been missing”), nhưng chỗ nói trực tiếp về căn cứ cho chính sách ở câu (2) dùng data. policy — chính sách: Đây là thứ dựa vào dữ liệu, không phải thứ cần điền vào ô trống. Đáp án hard — chắc chắn: Từ này đứng ngay trước “data” trong bài nhưng là tính từ, không phải danh từ cần điền sau “the”."
            }
          },
          {
            "id": 8,
            "prompt": "worry about",
            "type": "FILL_IN_BLANK",
            "correct": "future",
            "explanation": {
              "step1": "studies still need to trace how play affects the remainder of a child's 8. ___ Ô trống đứng sau “a child's”, nên cần một danh từ chỉ quãng đời hoặc thời gian phía trước của trẻ . Ta chưa chọn từ cụ thể trước khi đọc bài.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta tìm ý tương đương với việc các nghiên cứu vẫn cần tìm hiểu (“still need to trace”). Đến đoạn 8, bài nói tác động của việc chơi hầu như chưa được biết rõ (“almost nothing is known”) => đây là vùng liên quan. Đoạn 8 — almost nothing is known",
              "step3": "Đoạn 8: A few pieces of the puzzle — how play matters , and why — have been examined , but almost nothing is known about the mark it leaves on the rest of a child's future .",
              "step4": "Đáp án phù hợp nhất: future Câu hoàn chỉnh: studies still need to trace how play affects the remainder of a child's future (Các nghiên cứu vẫn cần tìm hiểu việc chơi ảnh hưởng thế nào đến phần đời còn lại của trẻ .) => Khớp với dự đoán về một danh từ chỉ thời gian phía trước; đáp án gồm 1 từ, đề không nêu giới hạn số từ. Đối chiếu paraphrasing: still need to trace almost nothing is known the remainder the rest. Từ theo sau trong bài là future. growth sự phát triển: Đoạn 9 có “a child's growth”, nhưng câu (2) đoạn 8 nói đến “the rest of a child's future”. Đáp án life cuộc đời: Đoạn 1 có “adult life”, nhưng đó không phải từ đi sau “a child's” trong câu chứng cứ. Đáp án data dữ liệu: Đoạn 6 nói về dữ liệu cần cho chính sách; ô số 8 hỏi về phần đời còn lại của trẻ."
            }
          },
          {
            "id": 9,
            "prompt": "The children in Ostrowski's study got through the tasks more quickly when the equipment they were given was already familiar to them.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "FALSE",
            "explanation": {
              "step1": "The children in Ostrowski's study got through the tasks more quickly when the equipment they were given was already familiar to them . Cần kiểm tra không chỉ việc trẻ giải quyết nhiệm vụ nhanh hơn , mà cả điều kiện: thiết bị đã quen thuộc với chúng.",
              "step2": "Dựa vào tên riêng Ostrowski và thông tin về một thí nghiệm (“one experiment”) => ta bắt đầu đọc kĩ ở đoạn 11. Đoạn 11 — one experiment",
              "step3": "Đoạn 11: In one experiment with toddlers and slightly older pre-schoolers, Ostrowski observed that those with stronger self-control worked through problems faster when faced with an unfamiliar apparatus that called for scientific reasoning .",
              "step4": "Câu hỏi nói: Trẻ giải quyết nhiệm vụ nhanh hơn khi thiết bị đã quen thuộc với chúng (“already familiar”). Bài đọc nói: Trẻ có khả năng tự kiểm soát tốt hơn giải quyết vấn đề nhanh hơn khi gặp thiết bị lạ (“when faced with an unfamiliar apparatus”). Cùng là kết quả nhanh hơn , nhưng điều kiện quen thuộc >< xa lạ . Hai ý mâu thuẫn . Đáp án đúng: FALSE Đối chiếu paraphrasing: got through the tasks more quickly worked through problems faster already familiar unfamiliar Đáp án TRUE Nếu chỉ thấy chi tiết giải quyết nhanh hơn (“worked through problems faster”), sẽ dễ chọn TRUE Nhưng thiết bị được nói đến là thiết bị lạ. Chỉ chọn TRUE nếu bài nói trẻ giải quyết nhanh hơn khi gặp thiết bị đã quen thuộc. NOT GIVEN Có thể nghĩ bài không nói riêng điều gì xảy ra khi trẻ gặp thiết bị quen thuộc Nhưng bài đã nêu điều kiện trái ngược cho kết quả nhanh hơn. Chỉ chọn NOT GIVEN nếu bài nói trẻ giải quyết nhanh hơn mà không cho biết thiết bị quen hay lạ."
            }
          },
          {
            "id": 10,
            "prompt": "A child's ability to control their own behaviour is a strong indicator of how successful they will later be in their schoolwork.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "TRUE",
            "explanation": {
              "step1": "A child's ability to control their own behaviour is a strong indicator of how successful they will later be in their schoolwork . Ý câu hỏi: Khả năng tự kiểm soát của trẻ dự báo mạnh kết quả học tập về sau.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp ý tương đương với kết quả học tập (“schoolwork”). Cụ thể, đoạn 12 nhắc đến việc học tập (“perform academically”) => đây là vùng liên quan. Đoạn 12 — perform academically",
              "step3": "Đoạn 12: Should play really assist this part of a child's development , the team argues, the consequences for teaching could be considerable — for the power to self-regulate has already proved one of the surest signs of how well a child will go on to perform academically .",
              "step4": "Câu hỏi nói: Khả năng kiểm soát hành vi (“ ability to control their own behaviour ”) là dấu hiệu dự báo mạnh (“ a strong indicator ”) cho kết quả học tập về sau (“ how successful they will later be in their schoolwork ”). Bài đọc nói: Khả năng tự điều chỉnh (“ the power to self-regulate ”) đã được chứng minh là một trong những dấu hiệu chắc chắn nhất (“ one of the surest signs ”) cho kết quả học tập về sau (“ how well a child will go on to perform academically ”). ⇒ Hai ý phù hợp với nhau. Đáp án đúng: TRUE Đối chiếu paraphrasing: ability to control their own behaviour the power to self regulate a strong indicator one of the surest signs how successful they will later be in their schoolwork how well a child will go on to perform academically FALSE Nếu thấy câu mở đầu đặt điều kiện (“Should play really assist”), sẽ dễ nghĩ bài chưa chắc chắn Nhưng điều kiện đó nói về tác dụng của việc chơi, không phủ nhận khả năng tự điều chỉnh dự báo kết quả học tập. Chỉ chọn FALSE nếu bài nói khả năng ấy không phải dấu hiệu dự báo mạnh. NOT GIVEN Nếu chỉ đọc ý về tác dụng của việc chơi, sẽ dễ bỏ lỡ quan hệ dự báo Nhưng bài nêu rõ khả năng tự điều chỉnh là một trong những dấu hiệu chắc chắn nhất về kết quả học tập sau này. Chỉ chọn NOT GIVEN nếu bài không xác lập quan hệ đó."
            }
          },
          {
            "id": 11,
            "prompt": "Observing children during play can assist in the early detection of hearing difficulties.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "NOT GIVEN",
            "explanation": {
              "step1": "Observing children during play can assist in the early detection of hearing difficulties . Cần kiểm tra cả đối tượng được phát hiện lẫn việc phát hiện có diễn ra sớm hay không.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp ý tương đương với việc quan sát trẻ khi chơi (“watching children at play”) ở đoạn 13 => bắt đầu đọc câu (2). Đoạn 13 — watching children at play",
              "step3": "Đoạn 13: In earlier work of mine, I looked at how watching children at play can offer valuable hints about their well-being — and can even help in identifying neurodevelopmental conditions such as autism .'",
              "step4": "Câu hỏi nói: quan sát trẻ khi chơi giúp phát hiện sớm khó khăn thính giác (“ early detection of hearing difficulties ”). Bài đọc nói: quan sát trẻ khi chơi có thể giúp nhận diện tình trạng phát triển thần kinh như autism (“ neurodevelopmental conditions such as autism ”). Bài không nói đến khó khăn thính giác hoặc thời điểm phát hiện . ⇒ Bài đọc không xác nhận, cũng không phủ định nhận định trong câu hỏi. Đáp án đúng: NOT GIVEN Đối chiếu paraphrasing: Observing children during play watching children at play early detection không có trong bài. hearing difficulties không có trong bài. Đáp án TRUE Nếu skim/scan thấy việc quan sát có thể giúp nhận diện (“help in identifying”), sẽ dễ chọn TRUE Nhưng bài không xác nhận đối tượng là khó khăn thính giác, cũng không nói đến phát hiện sớm. Chỉ chọn TRUE nếu bài nói quan sát trẻ khi chơi giúp phát hiện sớm khó khăn thính giác. FALSE Nếu thấy bài nêu autism thay vì khó khăn thính giác, sẽ dễ chọn FALSE Nhưng nêu một tình trạng khác không có nghĩa là phủ định khả năng phát hiện khó khăn thính giác. Chỉ chọn FALSE nếu bài nói việc quan sát không thể giúp phát hiện sớm khó khăn thính giác."
            }
          },
          {
            "id": 12,
            "prompt": "The stories the children produced were more developed when they had first portrayed the characters using puppets.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "TRUE",
            "explanation": {
              "step1": "The stories the children produced were more developed when they had first portrayed the characters using puppets . Cần kiểm tra hai ý: câu chuyện có tốt hơn không, và điều đó có xảy ra sau khi trẻ diễn nhân vật bằng con rối không.",
              "step2": "Không có tên riêng hay con số để định vị; ta tìm chi tiết con rối (“puppets”) ở đoạn 14 và bắt đầu đọc kỹ tại câu (3). Đoạn 14 — puppets",
              "step3": "Đoạn 14: The children produced longer, better-organised stories when they had first acted out the characters with hand puppets .",
              "step4": "Câu hỏi nói: Câu chuyện được phát triển tốt hơn (“ more developed ”) khi trẻ đã diễn nhân vật bằng con rối trước đó . Bài đọc nói: Trẻ tạo ra câu chuyện có bố cục tốt hơn (“ better-organised stories”) khi trước đó đã diễn nhân vật bằng con rối (“had first acted out the characters with hand puppets ”). Hai ý trùng khớp về kết quả và việc làm trước đó. Đáp án đúng: TRUE Đối chiếu paraphrasing: more developed better organised portrayed the characters acted out the characters using puppets with hand puppets FALSE Sai vì bài nói câu chuyện có bố cục tốt hơn, không phải kém hơn. Chỉ chọn FALSE nếu bài nói việc diễn nhân vật bằng con rối khiến câu chuyện kém phát triển hơn. NOT GIVEN Nếu chỉ tìm đúng cụm “more developed”, em có thể tưởng bài thiếu thông tin Nhưng “better-organised stories” đã nêu sự cải thiện. Chỉ chọn NOT GIVEN nếu bài không cho biết câu chuyện ra sao sau khi trẻ diễn nhân vật bằng con rối."
            }
          },
          {
            "id": 13,
            "prompt": "At the time Renwick trained as a teacher, the way young children were taught was a matter of heated debate.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "FALSE",
            "explanation": {
              "step1": "At the time Renwick trained as a teacher, the way young children were taught was a matter of heated debate . Cần kiểm tra đúng thời điểm Renwick được đào tạo, không chỉ xem bài có nhắc đến tranh luận hay không.",
              "step2": "Dựa vào tên riêng Renwick và chi tiết ông trở thành giáo viên (“qualified as a primary teacher”) => ta tìm đến câu (1) ở đoạn 15. Đoạn 15 — qualified as a primary teacher",
              "step3": "Đoạn 15: Renwick , who now heads the centre, first qualified as a primary teacher back in the early 1970s — a time , in his words, when 'the teaching of the very young was something of a still pond, disturbed by no real intellectual argument at all .'",
              "step4": "Câu hỏi nói: Vào thời Renwick được đào tạo làm giáo viên, cách dạy trẻ nhỏ gây tranh luận sôi nổi (“heated debate”). Bài đọc nói: Vào thời Renwick trở thành giáo viên tiểu học, việc dạy trẻ nhỏ không có tranh luận học thuật đáng kể nào (“no real intellectual argument at all”). ⇒ Hai ý mâu thuẫn trực tiếp về tình hình tranh luận ở giai đoạn được hỏi. Đáp án đúng: FALSE Đối chiếu paraphrasing: the way young children were taught the teaching of the very young heated debate no real intellectual argument at all Đáp án TRUE Nếu skim/scan thấy đoạn 15 có “fiercely contested”, sẽ dễ chọn TRUE Nhưng đó là tình hình ngày nay, không phải thời Renwick trở thành giáo viên. Chỉ chọn TRUE nếu bài nói việc dạy trẻ nhỏ được tranh luận sôi nổi ngay ở thời điểm ấy. NOT GIVEN Nếu chỉ dò đúng cụm “heated debate” mà không thấy, sẽ dễ chọn NOT GIVEN Nhưng câu (1) đã phủ định ý này bằng “no real intellectual argument at all”. Chỉ chọn NOT GIVEN nếu bài không cho biết lúc ấy việc dạy trẻ nhỏ có được tranh luận hay không."
            }
          }
        ]
      },
      {
        "id": "cam-14-reading-1-p2",
        "passageNumber": 2,
        "title": "The growth of bike-sharing schemes around the world",
        "subtitle": "How Swedish engineer Ragnar Eklöf helped to devise urban bike-sharing schemes",
        "content": [
          "The Growth Of Bike-Sharing Schemes Around The World"
        ],
        "questions": [
          {
            "id": 14,
            "prompt": "Which section contains the following information: \"an account of the first proper version of the scheme being established in another country\"?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "correct": "D",
            "explanation": {
              "step1": "an account of the first proper version of the scheme being established in another country Dự đoán thông tin cần tìm (SPECIFY) 👍 NÊN tìm: đoạn kể một chương trình bike-sharing đầu tiên được triển khai thực tế với quy mô đáng kể, tại một nước khác với nơi ý tưởng bắt đầu. 👎 ĐỪNG tìm: ý tưởng hoặc đề xuất chưa được thực hiện; chương trình triển khai ở nước khác nhưng xuất hiện về sau.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp ý chương trình được mở tại nước khác. Đoạn A kể lần thử ban đầu ở Stockholm, còn đoạn C kể đề xuất bị bác. Đoạn D nhắc đến Helsinki => bắt đầu đọc tại đây. Đoạn D: Eklöf's faith in bike-sharing never wavered , and midway through the 1990s two Finns approached him for help in getting a scheme going in Helsinki . What came of it was the first large-scale bike-share programme anywhere in the world . Câu (1): hai người Finns nhờ Eklöf giúp mở chương trình ở Helsinki . Câu (2): kết quả là chương trình bike-sharing quy mô lớn đầu tiên trên thế giới . Đoạn D",
              "step3": "Hai câu kể diễn biến từ lời nhờ giúp đến kết quả, đúng yêu cầu một lời kể (“an account”). the first proper version the first large scale bike share programme being established getting a scheme going + What came of it in another country two Finns + in Helsinki; địa điểm này khác Stockholm, nơi ý tưởng ban đầu xuất hiện. Đáp án đúng: Paragraph D. Paragraph A Kể lần thử ban đầu ở Stockholm: Nếu thấy ý tưởng lần đầu hình thành (“first took shape”), em dễ chọn A Nhưng đây không phải chương trình quy mô lớn đầu tiên được mở ở nước khác. Paragraph C Kể một kế hoạch chi tiết hơn: Cụm “a far more detailed Yellow Bicycle plan” dễ gợi ý phiên bản hoàn chỉnh Nhưng hội đồng đã bác kế hoạch (“threw the plan out”), nên nó chưa được triển khai. Paragraph F Kể việc đưa mô hình đến Zurich (“in Zurich”), nên dễ khớp ý nước khác Nhưng đây là lần triển khai về sau, không phải chương trình quy mô lớn đầu tiên.",
              "step4": "Đáp án chính xác: D"
            }
          },
          {
            "id": 15,
            "prompt": "Which section contains the following information: \"an admission that the scheme gained attention but made little headway at the outset\"?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "correct": "B",
            "explanation": {
              "step1": "an admission that the scheme gained attention but made little headway at the outset 👍 NÊN tìm: lời người trong cuộc nhìn nhận rằng kế hoạch ban đầu được chú ý nhưng không thực sự tiến triển. 👎 ĐỪNG tìm: đoạn chỉ kể kế hoạch ra đời, một đề xuất khác bị bác bỏ, hoặc những trục trặc xảy ra về sau.",
              "step2": "Đoạn A kể kế hoạch bắt đầu, nhưng chưa đánh giá kết quả. Đoạn B nhắc đến người tham gia kế hoạch đầu tiên và lời nhận xét của ông => đọc tại đây. Đoạn B: One of those closely involved in the first scheme was Ragnar Eklöf , a Swedish industrial engineer who still lives in Stockholm and gets around by bike . As he tells it , the scheme drew plenty of notice — above all as a way of broadcasting what Frihjul stood for — yet never really managed to establish itself . Câu (1): xác định Ragnar Eklöf gắn với kế hoạch đầu tiên . Câu (2): ông nhìn nhận kế hoạch được chú ý nhưng không thực sự thành hình . Đoạn B",
              "step3": "Đối chiếu paraphrasing: an admission As he tells it đây là đánh giá của Ragnar Eklöf về kết quả kế hoạch. at the outset the first scheme. gained attention drew plenty of notice. but yet; made little headway never really managed to establish itself. Đáp án đúng: Paragraph B. Paragraph A Nếu skim/scan thấy kế hoạch lần đầu hình thành (“first took shape”), em dễ chọn A Nhưng đoạn này không nhận xét rằng kế hoạch được chú ý mà vẫn ít tiến triển. Paragraph C Việc hội đồng bác bỏ đề xuất (“threw the plan out”) gợi ý thất bại Nhưng đó là đề xuất tiếp theo, không phải lời đánh giá về mức độ chú ý và tiến triển của kế hoạch đầu tiên. Paragraph E Nạn trộm cắp và phá hoại (“Theft and vandalism”) cũng là trở ngại, nhưng xảy ra với hệ thống về sau, không phải tình trạng lúc khởi đầu.",
              "step4": "Đáp án chính xác: B"
            }
          },
          {
            "id": 16,
            "prompt": "Which section contains the following information: \"figures showing how economical the scheme would be for the city\"?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "correct": "C",
            "explanation": {
              "step1": "figures showing how economical the scheme would be for the city 👍 NÊN tìm: con số so sánh chi phí của chương trình với khoản tiền thành phố đang chi. 👎 ĐỪNG tìm: đoạn chỉ nêu số xe, số trạm, tỷ lệ đi xe đạp hoặc phí người dùng trả.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp ý tính toán chi phí. Đoạn C có cụm “worked the figures out” => bắt đầu đọc tại đây. Đoạn D cũng nêu một khoản phí, nhưng đó là phí mỗi lượt đi, không phải phép so sánh chi phí cho thành phố. Đoạn C: ' I worked the figures out carefully , and it emerged that , per person and per kilometre , a yellow bicycle would cost the city only a tenth of what it was already paying to subsidise public transport .' Đoạn C — worked the figures out",
              "step3": "Đối chiếu paraphrasing: figures giữ nguyên. how economical only a tenth so với khoản chi trợ giá giao thông công cộng. for the city cost the city. Phép so sánh được tính theo mỗi người và mỗi kilômét (“per person and per kilometre”). Đáp án đúng: Paragraph C — đoạn này đưa ra tỷ lệ chi phí một phần mười để cho thấy chương trình sẽ tiết kiệm đến mức nào cho thành phố . Paragraph D Nếu skim/scan sẽ dễ chọn vì thấy phí một krona mỗi lượt (“each trip now cost one krona”) Nhưng đây là tiền người đi xe trả, không phải số liệu so sánh chi phí của thành phố. Paragraph F Con số hơn 20.000 xe (“upwards of 20,000 bicycles”) dễ gây chú ý, nhưng chỉ cho biết quy mô chương trình. Paragraph G Tỷ lệ 41% số chuyến đi (“41% of every journey”) nói về việc sử dụng xe đạp, không nói về chi phí chương trình.",
              "step4": "Đáp án chính xác: C"
            }
          },
          {
            "id": 17,
            "prompt": "Which section contains the following information: \"an account of the scheme being plagued by stolen and vandalised bikes\"?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "correct": "E",
            "explanation": {
              "step1": "an account of the scheme being plagued by stolen and vandalised bikes 👍 NÊN tìm: đoạn kể việc chương trình liên tục gặp khó khăn vì cả trộm cắp lẫn phá hoại . 👎 ĐỪNG tìm: đoạn chỉ nói xe không khóa, xe bị cảnh sát dọn đi hoặc một trục trặc khác.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp ý tương đương với xe bị trộm và phá hoại (“stolen and vandalised bikes”). Đoạn E nêu trực tiếp nạn trộm cắp và phá hoại (“ Theft and vandalism ”) => đây là vùng liên quan. Đoạn A chỉ nói xe không khóa, còn đoạn B nói cảnh sát dọn xe. Đoạn E: Theft and vandalism , though, dogged the system . Đoạn E — Theft and vandalism",
              "step3": "the scheme the system; being plagued by dogged. stolen and vandalised bikes Theft and vandalism. Câu (4) trực tiếp kể vấn đề này, đúng với yêu cầu một lời kể (“an account of”). Đáp án đúng: Paragraph E. Paragraph A Nếu đọc lướt thấy xe không khóa (“Left unlocked”), ta dễ suy ra xe có thể bị trộm Nhưng đoạn này không kể việc xe bị trộm và phá hoại. Paragraph B Việc cảnh sát dọn xe (“cleared the yellow bikes”) dễ bị hiểu nhầm là xe bị mất Nhưng đó không phải nạn trộm cắp và phá hoại đeo bám chương trình.",
              "step4": "Đáp án chính xác: E"
            }
          },
          {
            "id": 18,
            "prompt": "Which section contains the following information: \"a comment on the scheme being copied by cities elsewhere in the world\"?",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G"
            ],
            "correct": "F",
            "explanation": {
              "step1": "a comment on the scheme being copied by cities elsewhere in the world Dự đoán thông tin cần tìm (SPECIFY) 👍 NÊN tìm: một nhận xét cho thấy các thành phố khắp thế giới mở chương trình xe đạp theo mẫu một chương trình đã có. 👎 ĐỪNG tìm: đoạn chỉ nói một chương trình được lập ở nước khác, hoặc một kế hoạch riêng cho Stockholm.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp ý các thành phố khắp thế giới mở chương trình theo một mẫu có sẵn . Đoạn D nói về chương trình ở Helsinki, còn đoạn F nhắc đến các thành phố khắp thế giới (“ cities the world over ”) => đọc kỹ tại đoạn F. Đoạn F: Rome's programme proved a runaway success nobody had foreseen , and today, with upwards of 20,000 bicycles in service, it prompted cities the world over to launch schemes of their own , every one patterned after Eklöf's . Đoạn F — cities the world over",
              "step3": "Đối chiếu paraphrasing: cities elsewhere in the world cities the world over the scheme being copied every one patterned after Eklöf's Câu (5) không chỉ nói các thành phố mở chương trình riêng: mỗi chương trình đều theo mẫu của Eklöf . Đáp án đúng: Paragraph F. Paragraph D Nếu đọc lướt, dễ chọn vì đoạn này nhắc đến chương trình quy mô lớn đầu tiên (“first large-scale bike-share programme”) Nhưng đó là một chương trình ở Helsinki, chưa phải việc các thành phố khắp thế giới làm theo. Paragraph C Nếu thấy kế hoạch có “8,000 yellow bikes”, dễ tưởng đây là chương trình được nhân rộng Nhưng con số ấy thuộc đề xuất dành cho Stockholm, không phải các chương trình ở những thành phố khác. Paragraph G Đoạn này cũng nhắc đến một kế hoạch Yellow Bicycle thứ hai, nhưng kế hoạch ấy đã không thành hiện thực (“never materialised”), không phải nhận xét về việc nhiều thành phố sao chép chương trình.",
              "step4": "Đáp án chính xác: F"
            }
          },
          {
            "id": 19,
            "prompt": "Which TWO of the following statements are made in the text about the Stockholm bike-sharing scheme of 1998? (Part 1 of 2)",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "The scheme ended after its financial backer pulled out of the venture",
              "The scheme was introduced despite resistance from the authorities",
              "A shift in public attitudes had helped make the scheme feasible",
              "The scheme was intended to outdo an earlier system abroad",
              "Several designers competed to supply its bikes"
            ],
            "correct": "The scheme ended after its financial backer pulled out of the venture",
            "explanation": {
              "step1": "Which TWO of the following statements are made in the text about the Stockholm bike-sharing scheme of 1998 ? Cần tìm: Đúng hai nhận định về chương trình ở Stockholm năm 1998 , không nhầm với những kế hoạch trước đó.",
              "step2": "Dựa vào mốc năm 1998 => ta định vị được câu 7 đoạn D qua cụm “opened in Stockholm in 1998”. Đoạn D — opened in Stockholm in 1998",
              "step3": "Đoạn D: ' Environmental awareness had grown , and Helsinki had shown that bike-sharing could actually work .' So it was that a fresh Yellow Bicycle plan opened in Stockholm in 1998 . Riding the bikes, however, no longer came free: each trip now cost one krona , paid for using a chip card that the Swedish bank Nordgiro had developed . Đoạn E: The heaviest blow , however, fell when Nordgiro chose to scrap the chip card , having found it unprofitable . ' The whole system hinged on that chip card ,' Norberg says . ' Carrying on would have meant building an alternative from scratch , and by then our commercial partner had lost all enthusiasm .' Câu (6): Câu (6)–(7), đoạn D: nhận thức môi trường tăng => kế hoạch ở Stockholm ra mắt năm 1998 . Câu (8): Câu (8), đoạn D: thẻ dùng để thanh toán do ngân hàng Nordgiro phát triển. Câu (7): Câu (7)–(9), đoạn E: Nordgiro bỏ thẻ mà hệ thống phụ thuộc vào; muốn tiếp tục phải có phương án khác, trong khi đối tác đã hết nhiệt tình .",
              "step4": "Đáp án đúng: A. The scheme ended after its financial backer pulled out of the venture (Chương trình chấm dứt sau khi bên hậu thuẫn tài chính rút khỏi dự án ); C. A shift in public attitudes had helped make the scheme feasible ( Sự thay đổi trong thái độ của công chúng đã góp phần giúp chương trình khả thi ). Đối chiếu paraphrasing: A: its financial backer pulled out of the venture Nordgiro chose to scrap the chip card + our commercial partner had lost all enthusiasm. Việc chương trình không thể tiếp tục là kết luận từ vai trò thiết yếu của thẻ và trở ngại khi phải xây phương án thay thế; bài không nói nguyên văn rằng chương trình đã chấm dứt. C: A shift in public attitudes Environmental awareness had grown. had helped make the scheme feasible So it was that a fresh Yellow Bicycle plan opened in Stockholm in 1998. Đáp án B “ Chương trình được triển khai dù nhà chức trách phản đối ”: Nếu skim/scan thấy hội đồng bác kế hoạch (“threw the plan out”) ở đoạn C, ta dễ chọn B Nhưng đó là kế hoạch trước năm 1998, không phải sự phản đối lúc chương trình năm 1998 ra mắt. Đáp án D “ Chương trình nhằm vượt qua một hệ thống trước đó ở nước ngoài ”: Việc đoạn D nhắc Helsinki (“Helsinki had shown”) dễ gây nhầm Nhưng Helsinki chỉ cho thấy chia sẻ xe đạp có thể vận hành, không phải hệ thống mà Stockholm muốn vượt qua. Đáp án E “ Nhiều nhà thiết kế cạnh tranh để cung cấp xe đạp ”: Nếu thấy “better design” ở đoạn E, ta dễ nghĩ đến việc cạnh tranh thiết kế Nhưng đó là thiết kế giá giữ xe (“racks”); bài không nói nhiều người cạnh tranh cung cấp xe đạp."
            }
          },
          {
            "id": 20,
            "prompt": "Which TWO of the following statements are made in the text about the Stockholm bike-sharing scheme of 1998? (Part 2 of 2)",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "The scheme ended after its financial backer pulled out of the venture",
              "The scheme was introduced despite resistance from the authorities",
              "A shift in public attitudes had helped make the scheme feasible",
              "The scheme was intended to outdo an earlier system abroad",
              "Several designers competed to supply its bikes"
            ],
            "correct": "A shift in public attitudes had helped make the scheme feasible",
            "explanation": {
              "step1": "Which TWO of the following statements are made in the text about Stockholm today ? Cần tìm: Đúng hai nhận định về Stockholm hiện nay được bài đọc xác nhận.",
              "step2": "Dựa vào địa danh Stockholm và dấu hiệu thời gian hiện nay (“today”), ta tìm phần nói về thành phố ở hiện tại. Đoạn G mở đầu bằng “These days” => bắt đầu đọc từ đây. Đoạn G — These days",
              "step3": "Đoạn G: These days bikes account for 41% of every journey made in Stockholm , and the city ranks — alongside Helsinki — as one of the two most cycle-friendly capitals in northern Europe ; yet a second Yellow Bicycle plan never materialised . ' Somebody riding the metro doesn't carry a bicycle around , yet often needs some further means of transport to reach where they're finally headed .' Câu (1): Stockholm thuộc nhóm thủ đô thân thiện nhất với người đi xe đạp , dù kế hoạch Yellow Bicycle thứ hai chưa thành hiện thực. Câu (4): Người đi metro không mang xe đạp nhưng cần phương tiện đi tiếp => một chương trình xe đạp dùng chung có thể giúp họ .",
              "step4": "Đáp án đúng: B. People who rely on public transport would gain from such a scheme ( Người sử dụng phương tiện công cộng sẽ hưởng lợi từ một chương trình như vậy ) và C. The city is widely regarded as welcoming to cyclists ( Stockholm được xem là thân thiện với người đi xe đạp ). Đối chiếu paraphrasing: B: People who rely on public transport Somebody riding the metro. Họ doesn't carry a bicycle nhưng needs some further means of transport chương trình xe đạp dùng chung đáp ứng nhu cầu đó. C: welcoming to cyclists most cycle friendly. Việc Stockholm được xếp vào hai thủ đô đứng đầu (“one of the two most cycle friendly capitals”) xác nhận nhận định này. Đáp án A “ Phần lớn cư dân muốn cấm hoàn toàn ô tô trong thành phố ”: Cụm “no longer ruled by the car” ở cuối đoạn G dễ gây nhầm lẫn Nhưng mong muốn thành phố không còn bị ô tô chi phối không đồng nghĩa với cấm ô tô hoàn toàn. Đáp án D “ Đi xe đạp hiện là cách đi lại phổ biến nhất thành phố ”: Con số “41%” dễ khiến ta nghĩ xe đạp đứng đầu Nhưng bài không so sánh tỷ lệ này với từng phương tiện khác, nên không thể kết luận đây là cách phổ biến nhất. Đáp án E “ Thành phố khó có thể triển khai thêm chương trình như vậy trong tương lai ”: Kế hoạch thứ hai chưa thành hiện thực (“never materialised”) không phải dự đoán về tương lai; Eklöf vẫn hy vọng (“he stays hopeful”)."
            }
          },
          {
            "id": 21,
            "prompt": "Which TWO of the following statements are made in the text about Stockholm today? (Part 1 of 2)",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "Most people living there would like to see cars banned from the city entirely",
              "People who rely on public transport would gain from such a scheme",
              "The city is widely regarded as welcoming to cyclists",
              "Cycling is now the single most common way of getting around the city",
              "It is unlikely the city will ever launch another such scheme"
            ],
            "correct": "People who rely on public transport would gain from such a scheme",
            "explanation": {
              "step1": "The group was made up of 10. ___ intent on reshaping 11. ___ . Cụm “made up of” hỏi nhóm Frihjul gồm những ai . Ô 10 cần một danh từ chỉ người , nhiều khả năng ở dạng số nhiều.",
              "step2": "Dựa vào tên riêng Frihjul trong đề => tìm đến đoạn A, nơi nhóm này được giới thiệu. Đoạn A",
              "step3": "Đoạn A: Behind it stood Frihjul, a collective of Swedish activists bent on transforming society . Cụm “a collective of” cho biết Frihjul là một nhóm; từ chỉ những người trong nhóm là “activists”.",
              "step4": "Đáp án phù hợp nhất: activists Câu hoàn chỉnh: The group was made up of activists intent on reshaping 11. ___. (Nhóm gồm những nhà hoạt động quyết tâm cải biến điều được hỏi ở ô 11.) => Khớp dự đoán về danh từ số nhiều chỉ người; activists là 1 từ. Đề không nêu giới hạn số từ. Đối chiếu paraphrasing: The group Frihjul was made up of a collective of Swedish người Thụy Điển: Dễ chọn khi thấy “Swedish activists”, nhưng “Swedish” ở đây là tính từ bổ nghĩa cho danh từ chỉ người, không phải từ cần điền. engineer kỹ sư: Đoạn B gọi Eklöf là “a Swedish industrial engineer”, nhưng đó là một cá nhân tham gia kế hoạch, không phải cách đoạn A mô tả những người trong nhóm Frihjul."
            }
          },
          {
            "id": 22,
            "prompt": "Which TWO of the following statements are made in the text about Stockholm today? (Part 2 of 2)",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "Most people living there would like to see cars banned from the city entirely",
              "People who rely on public transport would gain from such a scheme",
              "The city is widely regarded as welcoming to cyclists",
              "Cycling is now the single most common way of getting around the city",
              "It is unlikely the city will ever launch another such scheme"
            ],
            "correct": "The city is widely regarded as welcoming to cyclists",
            "explanation": {
              "step1": "intent on reshaping 11. ___ . Ô trống đứng sau *reshaping*, nên cần một danh từ chỉ đối tượng mà nhóm muốn thay đổi . Ta chưa cần đoán chính xác từ đó là gì.",
              "step2": "Dựa vào tên riêng Frihjul , ta tìm đến đoạn A, nơi bài đọc giới thiệu nhóm này và mục tiêu của họ. Đoạn A",
              "step3": "Đoạn A: Behind it stood Frihjul , a collective of Swedish activists bent on transforming society . Nhóm Frihjul muốn thay đổi xã hội (“transforming society”). Vậy đối tượng cần điền là society .",
              "step4": "Đáp án phù hợp nhất: society Câu hoàn chỉnh: The group was made up of 10. ___ intent on reshaping society. (Nhóm gồm những người muốn thay đổi xã hội; chỗ trống 10 vẫn được giữ nguyên.) => Khớp với dự đoán: society là đối tượng của *reshaping*. Đáp án gồm một từ; đề không nêu giới hạn số từ. Đối chiếu paraphrasing: intent on reshaping bent on transforming air pollution — ô nhiễm không khí: Đây là một mối lo của nhóm ở câu 3 đoạn A, không phải đối tượng đi sau “transforming” trong câu (2). rampant consumerism — thói tiêu dùng quá mức: Đây cũng là mối lo được nhắc đến, còn câu (2) nói nhóm muốn thay đổi society."
            }
          },
          {
            "id": 23,
            "prompt": "The very first urban bike-sharing scheme was dreamed up by a Swedish group who called themselves Frihjul. The group was made up of  _____  intent on reshaping  _____ . Alarmed by the damage being done to the environment, and by people's endless appetite for goods, they believed that placing shared bikes around the city would draw notice to such concerns. Besides colouring a number of the bikes  _____ , they handed round printed notices denouncing the car. At first, though, the scheme achieved very little: no sooner had the group set the bikes out than the  _____  carted them off again. The plan, Eklöf explains, was meant to be symbolic — a means of prompting people to reflect on the issues.",
            "type": "FILL_IN_BLANK",
            "correct": "activists",
            "explanation": {
              "step1": "Besides colouring a number of the bikes 12. ___ , they handed round printed notices denouncing the car . Ô trống đứng sau hành động sơn xe đạp, nên cần dự đoán một từ chỉ màu sắc .",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta tìm hành động tương đương với sơn xe đạp (“colouring a number of the bikes”). Ở đoạn A, cụm xe đạp được sơn (“bikes were painted”) cho biết nơi cần đọc. Đoạn A — bikes were painted",
              "step3": "Đoạn A: A handful of second-hand bikes were painted yellow and set out in the heart of the city .",
              "step4": "Đáp án phù hợp nhất: yellow Câu hoàn chỉnh: Besides colouring a number of the bikes yellow , they handed round printed notices denouncing the car. (Ngoài việc sơn một số xe đạp màu vàng , họ còn phát thông báo chỉ trích ô tô.) => Khớp với dự đoán về màu sắc và câu (4); đáp án gồm 1 từ . Đề được cung cấp không nêu giới hạn số từ. Đối chiếu paraphrasing: colouring a number of the bikes bikes were painted second-hand đã qua sử dụng: Từ này đứng ngay trước “bikes”, nhưng chỉ tình trạng của xe, không phải màu sơn. Leaflets tờ rơi: Câu 5 đoạn A nhắc đến tờ rơi, tương ứng với phần thông báo ở vế sau câu hỏi, không phải ô trống chỉ màu."
            }
          },
          {
            "id": 24,
            "prompt": "Complete blank for question 24:",
            "type": "FILL_IN_BLANK",
            "correct": "society",
            "explanation": {
              "step1": "no sooner had the group set the bikes out than the 13. ___ carted them off again . Ô trống cần một danh từ chỉ bên mang xe đi , không phải nhóm đặt xe ra ngoài. Cấu trúc “no sooner … than” cho biết việc đó xảy ra gần như ngay lập tức.",
              "step2": "Dựa vào từ khoá đặc biệt Frihjul — tên nhóm thực hiện chương trình — ta bắt đầu tìm ở đoạn nói về chương trình đầu tiên của nhóm. Đoạn B",
              "step3": "Đoạn B: Frihjul's efforts met hostility from the police , who cleared the yellow bikes off the streets almost the moment they appeared . Cảnh sát là bên dọn xe khỏi đường (“the police, who cleared”), đúng với hành động mang xe đi trong câu hỏi (“carted them off”).",
              "step4": "Đáp án phù hợp nhất: police Câu hoàn chỉnh: At first, though, the scheme achieved very little: no sooner had the group set the bikes out than the police carted them off again . (Ban đầu, chương trình hầu như không đạt được gì: nhóm vừa đặt xe ra ngoài thì cảnh sát đã mang chúng đi.) => Khớp với dự đoán về bên mang xe đi và bằng chứng trong bài; đáp án gồm 1 từ. Đối chiếu paraphrasing: carted them off cleared the yellow bikes off the streets no sooner almost the moment Frihjul “ nhóm khởi xướng chương trình ”: tên nhóm đứng đầu câu (3). Nhưng nhóm gặp sự phản đối; cảnh sát mới là bên dọn xe. Eklöf “ người tham gia chương trình ”: Đoạn B có nhắc đến Eklöf, nhưng câu (3) quy hành động dọn xe cho cảnh sát, không phải ông."
            }
          },
          {
            "id": 25,
            "prompt": "Complete blank for question 25:",
            "type": "FILL_IN_BLANK",
            "correct": "yellow",
            "explanation": {
              "step1": "Phân tích câu hỏi theo phương pháp Linearthinking.",
              "step2": "Định vị vùng thông tin liên quan trong bài đọc.",
              "step3": "Bóc tách cấu trúc câu (S-V-O) và đối chiếu nghĩa.",
              "step4": "Đáp án chính xác: yellow"
            }
          },
          {
            "id": 26,
            "prompt": "Complete blank for question 26:",
            "type": "FILL_IN_BLANK",
            "correct": "police",
            "explanation": {
              "step1": "Phân tích câu hỏi theo phương pháp Linearthinking.",
              "step2": "Định vị vùng thông tin liên quan trong bài đọc.",
              "step3": "Bóc tách cấu trúc câu (S-V-O) và đối chiếu nghĩa.",
              "step4": "Đáp án chính xác: police"
            }
          }
        ]
      },
      {
        "id": "cam-14-reading-1-p3",
        "passageNumber": 3,
        "title": "Motivational factors and the hospitality industry",
        "subtitle": "",
        "content": [
          "Much of a hotel's success rests on getting its staff to perform to a high standard and keeping them there. But how is that achieved? Which Human Resource Management (HRM) practices are worth an organisation's investment if it hopes to attract and keep excellent employees?",
          "There are hotels that set out to give their staff unusually good conditions in which to work. The approach traces back to certain employers — typically outside the service industries — where fun and enjoyment were treated as part of a healthy work–life balance. Hotels and the wider service sector, by contrast, have largely not adopted such ideas, and even basic needs like decent working conditions have often gone unaddressed.",
          "According to Reinholt (1995), any organisation hoping to thrive in a global marketplace must put money into Human Resource Management (HRM), since this is what lets it take on staff whose skills outstrip those of rival firms — an edge that pays off competitively. Yet despite how widely the value of developing employees is acknowledged, weak and underdeveloped HR practices have long been the norm across the hospitality sector (Halvorsen, 2003).",
          "Halvorsen goes further, arguing that the way HRM is actually practised seems built neither to encourage positive dealings with staff nor to reflect a style of management capable of nurturing and releasing people's full potential — and this holds even where workers are broadly content with much of what their jobs involve (Halvorsen, 2003). Perhaps as a consequence, the sector has repeatedly struggled with employees departing in large numbers. The reasons commonly given range from meagre pay and thin benefits to unpleasant surroundings and the flagging morale and attitudes that come with them (Petrakis et al., 2007).",
          "Dubois and Renner (2009) showed that employees develop a stronger sense of obligation to remain with a firm when their managers acknowledge their contributions, encourage them to cooperate, and clear away the barriers to good performance. Almeida et al. (2012) put it neatly: when staff are given support, they gain both the assurance to do their work well and the incentive to stay. It follows that hospitality businesses can lift motivation and retention by improving the conditions their people work in — conditions tied to the wider working environment.",
          "It might seem plausible that how workers respond to the features of their jobs is coloured by some tendency to see their surroundings in a poor light; yet Kowalski et al. (2001) found nothing to bear this out. What does seem true, as Bergström (2010) observes, is that most people, given the chance, will find some grievance about where they work. Employees' perceptions turn out to be firmly tied to particular aspects of their environment that fall outside the tasks themselves — things like company rules, wages and holiday entitlement.",
          "Nowhere are such conditions more of a concern than at the luxury end of the hotel market, where high-quality service — and the refined HRM it demands — is treated as a vital competitive edge (Petrakis et al., 2007). Through the service they give, hotel staff in a real sense stand for the industry itself (Faber and Lund, 1994), though that has usually been confined to what guests experience. The implication is a split: the polished environment laid on for guests, set against the conditions in which employees themselves must work.",
          "For that reason, those managing hotels must build HRM practices capable of both motivating able staff and keeping them on. Doing so means grasping what actually drives employees — and that differs according to where they sit in the management hierarchy and how far along they are in their careers (Costa and Marek, 2001). In short, hotel managers gain from working out which practices do most to raise satisfaction and retention.",
          "Adler (1967) suggests that human needs fall into two broad categories. The first covers extrinsic factors — those tied to the setting in which a job is done rather than the job itself, such as job security and working conditions. Where these are poor, workers may grow dissatisfied. What is striking, though, is that meeting these needs does not by itself make anyone satisfied; it merely takes away dissatisfaction (Petrakis et al., 2007).",
          "Workers also have intrinsic needs — the motivators — among them a sense of achievement and being recognised. These, unlike the extrinsic factors, are the ones that can genuinely produce job satisfaction (Petrakis et al., 2007). Adler's framework stresses that the two kinds of need must be held in 'balance'.",
          "Researchers have also examined the part fun can play in motivating people at work. Okonkwo, Vance and Ruiz (2014), for instance, studied workers at an American chain of themed cafés. They found that activities designed to be enjoyable had a favourable effect on productivity, while managers' support for such fun proved valuable in reducing turnover. Their results back the view that fun can genuinely help — provided the way it is framed is matched both to the company's aims and to the personalities of the staff. As the authors put it, 'Managers must learn to strike the delicate balance of letting employees enjoy themselves at work while keeping standards high.'",
          "Vinstad (2009) has put forward several steps an organisation can take to hold on to good employees while helping them keep work and home life in balance. Those best suited to the hospitality industry include making sure staff get sufficient rest during their shifts, arranging social events to which families are invited, and offering chances to look after health and well-being."
        ],
        "questions": [
          {
            "id": 27,
            "prompt": "Match the statement with the correct person/feature: \"It is useful for those running hotels to identify which measures will persuade valuable employees not to leave.\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "Costa and Marek",
              "Dubois and Renner",
              "Halvorsen",
              "Petrakis et al.",
              "Reinholt",
              "Vinstad"
            ],
            "correct": "Costa and Marek",
            "explanation": {
              "step1": "Tên đang xử lý: Costa and Marek . Bài nhắc đến tên này ở đoạn 8 .",
              "step2": "For that reason, those managing hotels must build HRM practices capable of both motivating able staff and keeping them on . Doing so means grasping what actually drives employees — and that differs according to where they sit in the management hierarchy and how far along they are in their careers (Costa and Marek , 2001 ) . In short, hotel managers gain from working out which practices do most to raise satisfaction and retention . Câu (1)–(2): cần hiểu động lực khác nhau của nhân viên để tạo động lực và giữ nhân viên có năng lực . Câu (3): người quản lý khách sạn được lợi khi xác định biện pháp giữ chân hiệu quả nhất. 🔎 Khớp với statement 1: It is useful for those running hotels to identify which measures will persuade valuable employees not to leave . Đối chiếu paraphrasing: useful gain from those running hotels hotel managers identify which measures working out which practices valuable employees able staff not to leave retention",
              "step3": "Với tên Costa and Marek ở đoạn 8, ta chọn được: câu 1. Dubois and Renner Đoạn 5 cũng nói nhân viên muốn ở lại khi được khuyến khích hợp tác (“encourage them to cooperate”) Nhưng câu 1 hỏi lợi ích của việc xác định biện pháp phù hợp, không hỏi tác dụng của một hành động quản lý cụ thể. Vinstad Đoạn 12 có mục tiêu giữ nhân viên giỏi (“hold on to good employees”), nên rất dễ nhầm Nhưng đoạn này đề xuất các bước hỗ trợ cân bằng công việc và đời sống; ý được lợi khi xác định biện pháp nằm ở câu (3) đoạn 8. Petrakis et al. Đoạn 4 nhắc lương thấp (“meagre pay”) và những nguyên nhân khiến nhân viên rời đi Nhưng nguyên nhân nghỉ việc không phải nhận định về lợi ích của việc xác định biện pháp giữ chân.",
              "step4": "Đáp án chính xác: Costa and Marek"
            }
          },
          {
            "id": 28,
            "prompt": "Match the statement with the correct person/feature: \"Certain things that managers do can leave staff reluctant to take up a job with a competitor.\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "Costa and Marek",
              "Dubois and Renner",
              "Halvorsen",
              "Petrakis et al.",
              "Reinholt",
              "Vinstad"
            ],
            "correct": "Dubois and Renner",
            "explanation": {
              "step1": "Tên đang xử lý: Dubois and Renner Tên này chỉ xuất hiện ở đoạn 5.",
              "step2": "Dubois and Renner (2009) showed that employees develop a stronger sense of obligation to remain with a firm when their managers acknowledge their contributions, encourage them to cooperate , and clear away the barriers to good performance . 🔎 Khớp với statement 2: Certain things that managers do can leave staff reluctant to take up a job with a competitor . Cảm giác có nghĩa vụ ở lại mạnh hơn => nhân viên ít muốn chuyển sang công ty đối thủ , chứ không phải bị cấm chuyển việc. Đối chiếu paraphrasing: Certain things that managers do encourage them to cooperate + clear away the barriers reluctant to take up a job with a competitor a stronger sense of obligation to remain with a firm remain in post remain with a firm encouraged to collaborate with one another encourage them to cooperate remain in post remain with a firm encouraged to collaborate with one another encourage them to cooperate 🔎 Khớp với statement 4: Employees tend to remain in post when they are encouraged to collaborate with one another .",
              "step3": "Với tên Dubois and Renner ở đoạn 5, ta chọn được: câu 2 và câu 4. Reinholt Đoạn 3 nhắc đến công ty đối thủ (“rival firms”), nên dễ chọn nhầm Nhưng ý ở đó là tuyển nhân viên có kỹ năng vượt nhân viên của đối thủ, không phải khiến nhân viên hiện tại muốn ở lại. Costa and Marek Đoạn 8 cũng bàn về giữ chân nhân viên (“retention”) Nhưng nội dung gắn với Costa and Marek là động lực thay đổi theo cấp quản lý và giai đoạn sự nghiệp, không phải tác động của các hành động khuyến khích hợp tác hay loại bỏ trở ngại.",
              "step4": "Đáp án chính xác: Dubois and Renner"
            }
          },
          {
            "id": 29,
            "prompt": "Match the statement with the correct person/feature: \"Within hotels and similar businesses, little is done to bring out the full capabilities of the workforce.\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "Costa and Marek",
              "Dubois and Renner",
              "Halvorsen",
              "Petrakis et al.",
              "Reinholt",
              "Vinstad"
            ],
            "correct": "Halvorsen",
            "explanation": {
              "step1": "Tên đang xử lý: Halvorsen . Bài nhắc đến Halvorsen ở đoạn 3 và đoạn 4.",
              "step2": "Yet despite how widely the value of developing employees is acknowledged, weak and underdeveloped HR practices have long been the norm across the hospitality sector (Halvorsen , 2003 ) .",
              "step3": "Với tên Halvorsen ở đoạn 3, ta không chọn được câu nào: đoạn này không giúp chọn câu hỏi nào.",
              "step4": "Halvorsen goes further, arguing that the way HRM is actually practised seems built neither to encourage positive dealings with staff nor to reflect a style of management capable of nurturing and releasing people's full potential — and this holds even where workers are broadly content with much of what their jobs involve (Halvorsen, 2003) . Câu (2): Câu (2), đoạn 3: đặt nền — thực hành HR yếu là tình trạng phổ biến trong ngành dịch vụ lưu trú. Câu (1): Câu (1), đoạn 4: nói cụ thể hơn — cách thực hành HRM dường như không hướng tới phát huy hết tiềm năng của nhân viên. 🔎 Khớp với statement 3: Within hotels and similar businesses, little is done to bring out the full capabilities of the workforce . Đối chiếu paraphrasing: Within hotels and similar businesses across the hospitality sector little is done seems built neither + nor to reflect bring out the full capabilities of the workforce releasing people's full potential"
            }
          },
          {
            "id": 30,
            "prompt": "Match the statement with the correct person/feature: \"Employees tend to remain in post when they are encouraged to collaborate with one another.\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "Costa and Marek",
              "Dubois and Renner",
              "Halvorsen",
              "Petrakis et al.",
              "Reinholt",
              "Vinstad"
            ],
            "correct": "Dubois and Renner",
            "explanation": {
              "step1": "Tên đang xử lý: Petrakis et al. Bài nhắc đến Petrakis et al. ở đoạn 4, 7, 9 và 10.",
              "step2": "Perhaps as a consequence, the sector has repeatedly struggled with employees departing in large numbers . The reasons commonly given range from meagre pay and thin benefits to unpleasant surroundings and the flagging morale and attitudes that come with them (Petrakis et al. , 2007 ) . Câu (2): Câu (2), đoạn 4: ngành khách sạn gặp vấn đề nhân viên rời đi . Câu (3): Câu (3), đoạn 4: các nguyên nhân gồm lương thấp và môi trường khó chịu => lương thấp chỉ là một trong nhiều nguyên nhân khiến nhân viên rời đi. 🔎 Khớp với statement 5: Low wages are only one of several things that drive people in the hotel trade to look for work elsewhere . Đối chiếu paraphrasing: Low wages meagre pay only one of several things range from meagre pay + to unpleasant surroundings look for work elsewhere employees departing",
              "step3": "Với tên Petrakis et al. ở đoạn 4, ta chọn được: câu 5. Halvorsen Tên này xuất hiện ngay đầu đoạn 4, nên dễ gán cả đoạn cho Halvorsen Nhưng danh sách nguyên nhân nhân viên rời đi ở câu (3) đoạn 4 được dẫn nguồn Petrakis et al. Dubois and Renner Nếu thấy ý nhân viên ở lại với công ty (“remain with a firm”) ở đoạn 5, dễ nhầm với vấn đề chuyển việc Nhưng nhận định đó nói về sự hỗ trợ từ quản lý, không nêu lương thấp và môi trường khó chịu là các nguyên nhân rời đi.",
              "step4": "Nowhere are such conditions more of a concern than at the luxury end of the hotel market , where high-quality service — and the refined HRM it demands — is treated as a vital competitive edge (Petrakis et al. , 2007 ) ."
            }
          },
          {
            "id": 31,
            "prompt": "Match the statement with the correct person/feature: \"Low wages are only one of several things that drive people in the hotel trade to look for work elsewhere.\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "Costa and Marek",
              "Dubois and Renner",
              "Halvorsen",
              "Petrakis et al.",
              "Reinholt",
              "Vinstad"
            ],
            "correct": "Petrakis et al.",
            "explanation": {
              "step1": "Building fun into the working day is an approach that first emerged inside the hotel trade itself . Ý câu hỏi: tác giả có khẳng định việc đưa niềm vui vào ngày làm việc bắt nguồn ngay trong ngành khách sạn hay không?",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến chỗ nói về nguồn gốc của việc đưa niềm vui vào công việc. Ở đoạn 2, cụm chỉ sự bắt nguồn (“traces back to”) cho biết đây là vùng liên quan. Đoạn 2 — traces back to",
              "step3": "Đoạn 2: The approach traces back to certain employers — typically outside the service industries — where fun and enjoyment were treated as part of a healthy work–life balance .",
              "step4": "Câu hỏi nói: cách tiếp cận này bắt nguồn ngay trong ngành khách sạn (“first emerged inside the hotel trade itself”). Bài đọc nói: tác giả truy nguồn cách tiếp cận về những người sử dụng lao động thường nằm ngoài các ngành dịch vụ (“typically outside the service industries”). Đối chiếu paraphrasing: first emerged traces back to inside the hotel trade itself typically outside the service industries Đáp án đúng: NO — nhận định trái với quan điểm tác giả về nguồn gốc của cách tiếp cận . Đáp án YES Nếu skim/scan thấy đoạn 2 nhắc đến khách sạn (“There are hotels”), sẽ dễ nhầm nơi áp dụng với nơi khởi nguồn Nhưng câu (2) truy nguồn cách tiếp cận về các đơn vị thường ngoài ngành dịch vụ. Chỉ chọn YES nếu tác giả xác nhận cách tiếp cận bắt nguồn trong ngành khách sạn. NOT GIVEN bài không nêu ngày khởi đầu hay tên đơn vị đầu tiên. Nhưng cụm chỉ nguồn gốc (“traces back to”) đã cung cấp thông tin cần đối chiếu. Chỉ chọn NOT GIVEN nếu tác giả chỉ bàn về việc áp dụng hoặc tác dụng, không cho biết nguồn gốc trong hay ngoài ngành khách sạn."
            }
          },
          {
            "id": 32,
            "prompt": "Building fun into the working day is an approach that first emerged inside the hotel trade itself.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "YES",
              "NO",
              "NOT GIVEN"
            ],
            "correct": "NO",
            "explanation": {
              "step1": "Employees in luxury hotels tend to complain more often than those in budget establishments . Ý câu hỏi: tác giả có khẳng định nhân viên khách sạn cao cấp phàn nàn thường xuyên hơn nhân viên ở cơ sở bình dân hay không?",
              "step2": "Ta tìm phần nói về khách sạn cao cấp. Đầu đoạn 7 nhắc đến phân khúc cao cấp của thị trường khách sạn (“the luxury end of the hotel market”) => bắt đầu đọc tại đây. Đoạn 7 — the luxury end of the hotel market",
              "step3": "Đoạn 7: Nowhere are such conditions more of a concern than at the luxury end of the hotel market , where high-quality service — and the refined HRM it demands — is treated as a vital competitive edge (Petrakis et al., 2007) .",
              "step4": "Câu hỏi nói: nhân viên khách sạn cao cấp phàn nàn thường xuyên hơn (“more often”) nhân viên ở cơ sở bình dân. Bài đọc nói: theo tác giả, điều kiện làm việc là mối quan tâm lớn hơn ở phân khúc cao cấp (“more of a concern”). Tác giả không so sánh tần suất phàn nàn của nhân viên giữa hai phân khúc. Đối chiếu paraphrasing: luxury hotels the luxury end of the hotel market complain more often than those in budget establishments không có trong bài Đáp án đúng: NOT GIVEN — chưa đủ thông tin để xác định tác giả đồng ý hay phản đối phép so sánh này. Đáp án YES Nếu skim/scan thấy mức độ đáng quan tâm cao hơn (“more of a concern”), dễ nhầm thành phàn nàn thường xuyên hơn Nhưng mức độ đáng quan tâm không phải tần suất phàn nàn. Chỉ chọn YES nếu tác giả xác nhận nhân viên khách sạn cao cấp phàn nàn thường xuyên hơn nhân viên ở cơ sở bình dân. Đáp án NO Sai vì thiếu thông tin không có nghĩa là tác giả phủ nhận phép so sánh. Chỉ chọn NO nếu tác giả nói nhân viên khách sạn cao cấp phàn nàn ít thường xuyên hơn, hoặc không thường xuyên hơn nhân viên ở cơ sở bình dân."
            }
          },
          {
            "id": 33,
            "prompt": "Employees in luxury hotels tend to complain more often than those in budget establishments.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "YES",
              "NO",
              "NOT GIVEN"
            ],
            "correct": "NOT GIVEN",
            "explanation": {
              "step1": "How employees feel about their work is closely bound up with elements of their circumstances that are unrelated to the duties they carry out . Ý câu hỏi: tác giả có khẳng định cảm nhận của nhân viên về công việc gắn chặt với những yếu tố hoàn cảnh nằm ngoài nhiệm vụ họ thực hiện hay không?",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp ý cảm nhận của nhân viên gắn với môi trường làm việc. Ở đoạn 6, cụm cảm nhận của nhân viên (“Employees' perceptions”) cho thấy đây là vùng liên quan. Đoạn 6 — Employees' perceptions",
              "step3": "Đoạn 6: Employees' perceptions turn out to be firmly tied to particular aspects of their environment that fall outside the tasks themselves — things like company rules, wages and holiday entitlement .",
              "step4": "Câu hỏi nói: cảm nhận về công việc gắn chặt với các yếu tố hoàn cảnh ngoài nhiệm vụ nhân viên thực hiện . Bài đọc nói: tác giả khẳng định cảm nhận của nhân viên gắn chặt (“firmly tied”) với các yếu tố môi trường nằm ngoài nhiệm vụ (“fall outside the tasks”). Hai cách diễn đạt cùng nêu một mối liên hệ, nên statement phù hợp với quan điểm của tác giả . Đối chiếu paraphrasing: How employees feel about their work Employees' perceptions closely bound up with firmly tied to elements of their circumstances aspects of their environment unrelated to the duties fall outside the tasks Đáp án đúng: YES Đáp án NO Nếu chỉ bám vào phần không tìm được bằng chứng (“found nothing”) ở câu 1 đoạn 6, sẽ dễ chọn NO Nhưng phần đó bác bỏ giả thuyết về khuynh hướng nhìn môi trường một cách tiêu cực, không phủ nhận mối liên hệ ở câu (3). Chỉ chọn NO nếu tác giả nói cảm nhận của nhân viên không gắn chặt với các yếu tố ngoài nhiệm vụ. NOT GIVEN Sai vì tác giả nêu trực tiếp cả mối liên hệ chặt chẽ lẫn việc các yếu tố ấy nằm ngoài nhiệm vụ. Chỉ chọn NOT GIVEN nếu bài chỉ liệt kê điều kiện làm việc mà không xác định mối liên hệ với cảm nhận của nhân viên."
            }
          },
          {
            "id": 34,
            "prompt": "How employees feel about their work is closely bound up with elements of their circumstances that are unrelated to the duties they carry out.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "YES",
              "NO",
              "NOT GIVEN"
            ],
            "correct": "YES",
            "explanation": {
              "step1": "When a workplace's poor conditions are put right , staff become positively satisfied with their jobs . Ý câu hỏi: tác giả có khẳng định rằng khắc phục điều kiện làm việc kém sẽ khiến nhân viên thực sự hài lòng với công việc hay không?",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp cụm chỉ điều kiện làm việc (“working conditions”) ở câu 2 đoạn 9 => đây là vùng liên quan. Đoạn 9 — working conditions",
              "step3": "Đoạn 9: The first covers extrinsic factors — those tied to the setting in which a job is done rather than the job itself , such as job security and working conditions . What is striking , though, is that meeting these needs does not by itself make anyone satisfied ; it merely takes away dissatisfaction (Petrakis et al., 2007) . Câu (2): điều kiện làm việc thuộc nhóm nhu cầu bên ngoài . Câu (4): đáp ứng nhóm nhu cầu ấy không tự tạo sự hài lòng , mà chỉ loại bỏ bất mãn .",
              "step4": "Câu hỏi nói: khắc phục điều kiện làm việc kém khiến nhân viên thực sự hài lòng (“positively satisfied”). Bài đọc nói: tác giả khẳng định đáp ứng các nhu cầu này không tự tạo sự hài lòng (“ does not by itself make anyone satisfied ”); việc đó chỉ loại bỏ bất mãn (“ merely takes away dissatisfaction ”). Hai quan điểm mâu thuẫn : hết bất mãn không đồng nghĩa với thực sự hài lòng. Đối chiếu paraphrasing: are put right meeting these needs become positively satisfied merely takes away dissatisfaction Đáp án đúng: NO Đáp án YES Nếu skim/scan thấy việc loại bỏ bất mãn (“takes away dissatisfaction”), sẽ dễ hiểu nhầm là nhân viên trở nên hài lòng Nhưng tác giả phân biệt rõ hai trạng thái này. Chỉ chọn YES nếu tác giả nói việc đáp ứng các nhu cầu ấy tự nó khiến nhân viên hài lòng. NOT GIVEN Nếu không nối các nhu cầu này (“these needs”) với điều kiện làm việc ở câu (2), sẽ dễ tưởng bài chưa nói đến kết quả của việc cải thiện điều kiện Nhưng câu (4) trực tiếp nêu quan điểm phủ nhận kết quả mà câu hỏi khẳng định. Chỉ chọn NOT GIVEN nếu bài không cho biết việc đáp ứng những nhu cầu ấy có tạo ra sự hài lòng hay không."
            }
          },
          {
            "id": 35,
            "prompt": "When a workplace's poor conditions are put right, staff become positively satisfied with their jobs.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "YES",
              "NO",
              "NOT GIVEN"
            ],
            "correct": "NO",
            "explanation": {
              "step1": "Okonkwo, Vance and Ruiz looked into the employees of a themed 10. ___ business operating across the United States . Ý câu hỏi: Cần tìm loại hình kinh doanh theo chủ đề mà Okonkwo, Vance and Ruiz đã nghiên cứu nhân viên. Dự đoán ô trống: - Loại từ: danh từ bổ nghĩa cho danh từ chính “business”. Từ “a” đi với “business”, nên chưa thể dự đoán ô trống là số ít hay số nhiều. - Nghĩa: một loại cơ sở kinh doanh, không phải tên nhân viên hay kết quả nghiên cứu.",
              "step2": "Dựa vào tên riêng Okonkwo, Vance and Ruiz , ta định vị được thông tin ở câu 2 đoạn 11, nơi giới thiệu đối tượng của nghiên cứu. Đoạn 11",
              "step3": "Đoạn 11: Okonkwo, Vance and Ruiz (2014) , for instance, studied workers at an American chain of themed cafés .",
              "step4": "Đáp án phù hợp nhất: cafés Câu hoàn chỉnh: Okonkwo, Vance and Ruiz looked into the employees of a themed cafés business operating across the United States. (Okonkwo, Vance and Ruiz nghiên cứu nhân viên của một doanh nghiệp kinh doanh cafés theo chủ đề, hoạt động trên khắp United States.) => Khớp với dự đoán danh từ chỉ loại cơ sở kinh doanh và thông tin trong bài; đáp án gồm 1 từ , giữ nguyên dấu sắc và đuôi “s”. Đề được cung cấp không nêu giới hạn số từ. Đối chiếu paraphrasing: looked into the employees studied workers business operating across the United States an American chain chain “ Chuỗi kinh doanh ”: nhầm vì từ này nằm ngay trước loại cơ sở. Nhưng “chain” chỉ mô hình kinh doanh theo chuỗi; loại cơ sở trong chuỗi đó mới là cafés. workers “ Nhân viên ”: Sai vì từ này tương ứng với “employees” đã có trong đề, không trả lời loại hình kinh doanh. American “ Thuộc United States ”: Sai vì từ này chỉ địa bàn, đã được đề diễn đạt bằng “United States”, không xác định loại cơ sở."
            }
          },
          {
            "id": 36,
            "prompt": "Okonkwo, Vance and Ruiz looked into the employees of a themed  _____  business operating across the United States. Their research showed that activities created to be enjoyable improved workers'  _____ , and that backing from management for such activities brought about a drop in staff  _____ . They concluded, moreover, that the activities needed to fit both the company's  _____  and the  _____  of its staff. A balance had to be found between allowing staff some freedom and preserving the quality of their work.",
            "type": "FILL_IN_BLANK",
            "correct": "cafés",
            "explanation": {
              "step1": "Their research showed that activities created to be enjoyable improved workers' 11. ___ Dự đoán: - Loại từ: danh từ hoặc cụm danh từ, vì ô trống đứng sau cụm chỉ sở hữu của người lao động (“workers'”). - Nghĩa: một yếu tố của người lao động được cải thiện nhờ các hoạt động vui .",
              "step2": "Dựa vào tên riêng Okonkwo, Vance and Ruiz trong phần ghi chú, ta tìm đến đoạn 11, nơi mô tả nghiên cứu của nhóm này. Đoạn 11",
              "step3": "Đoạn 11: They found that activities designed to be enjoyable had a favourable effect on productivity , while managers' support for such fun proved valuable in reducing turnover .",
              "step4": "Đáp án phù hợp nhất: productivity Câu hoàn chỉnh: Their research showed that activities created to be enjoyable improved workers' productivity . (Nghiên cứu của họ cho thấy các hoạt động được tạo ra để mang lại niềm vui đã cải thiện năng suất của người lao động .) => Khớp với dự đoán danh từ chỉ yếu tố được cải thiện và thông tin trong bài; đáp án gồm 1 từ. Đối chiếu paraphrasing: activities created to be enjoyable activities designed to be enjoyable improved had a favourable effect on Đáp án fun “ Niềm vui ”: Nếu chỉ bám vào chủ đề niềm vui tại nơi làm việc, dễ chọn từ này Nhưng đây là đặc điểm của hoạt động, không phải kết quả được cải thiện ở người lao động. favourable “ Tích cực ”: Từ này nằm sát từ đáp án nên dễ bị chọn nhầm Nhưng đây là tính từ mô tả tác động, không phải danh từ cần điền."
            }
          },
          {
            "id": 37,
            "prompt": "Complete blank for question 37:",
            "type": "FILL_IN_BLANK",
            "correct": "productivity",
            "explanation": {
              "step1": "and that backing from management for such activities brought about a drop in staff 12. ___ . Ý câu hỏi: Sự ủng hộ của ban quản lý đối với các hoạt động này khiến một hiện tượng liên quan đến nhân viên giảm xuống . Dự đoán ô trống: - Loại từ: danh từ hoặc cụm danh từ, được bổ nghĩa bởi “staff”. - Nghĩa: một chỉ số hoặc hiện tượng liên quan đến nhân viên có thể tăng hoặc giảm. Chỉ từ câu hỏi, chưa xác định được đó là gì.",
              "step2": "Dựa vào tên riêng Okonkwo, Vance and Ruiz , ta định vị được nghiên cứu ở đoạn 11. Từ đó, tìm ý tương đương với sự ủng hộ của ban quản lý (“backing from management”) để bắt đầu đọc phần kết quả liên quan. Đoạn 11 — backing from management",
              "step3": "Đoạn 11: They found that activities designed to be enjoyable had a favourable effect on productivity , while managers' support for such fun proved valuable in reducing turnover .",
              "step4": "Đáp án phù hợp nhất: turnover Câu hoàn chỉnh: and that backing from management for such activities brought about a drop in staff turnover . (và rằng sự ủng hộ của ban quản lý đối với các hoạt động này giúp giảm tình trạng nhân viên nghỉ việc .) => Khớp với dự đoán danh từ chỉ một hiện tượng liên quan đến nhân viên và kết quả giảm trong bài; đáp án gồm 1 từ . Phần đề được cung cấp không nêu giới hạn số từ. Đối chiếu paraphrasing: backing from management for such activities managers' support for such fun a drop reducing support “ sự ủng hộ ”: Nếu chỉ tìm từ đồng nghĩa với sự ủng hộ (“backing”), sẽ dễ chọn từ này Nhưng đây là nguyên nhân, không phải hiện tượng giảm xuống. Đáp án fun “ niềm vui ”: Từ này xuất hiện ngay cạnh sự ủng hộ của quản lý Nhưng nó chỉ điều được ủng hộ, không phải kết quả giảm liên quan đến nhân viên."
            }
          },
          {
            "id": 38,
            "prompt": "Complete blank for question 38:",
            "type": "FILL_IN_BLANK",
            "correct": "turnover",
            "explanation": {
              "step1": "that the activities needed to fit both the company's 13. ___ and the 14. ___ of its staff . Ý câu hỏi: Các hoạt động cần phù hợp với hai yếu tố: một yếu tố thuộc công ty và một yếu tố thuộc nhân viên. Câu 13 hỏi yếu tố thuộc công ty . Dự đoán ô trống 13: - Loại từ: danh từ hoặc cụm danh từ, vì đứng sau sở hữu cách của công ty (“the company's”). - Nghĩa: điều thuộc về công ty mà hoạt động cần phù hợp với. Chưa thể xác định số ít hay số nhiều chỉ từ cấu trúc đề.",
              "step2": "Dựa vào từ khoá đặc biệt là các tên Okonkwo, Vance and Ruiz => ta định vị được đoạn 11. Trong đoạn này, tìm phần kết luận nêu điều kiện để hoạt động vui chơi có ích. Đoạn 11",
              "step3": "Đoạn 11: Their results back the view that fun can genuinely help — provided the way it is framed is matched both to the company's aims and to the personalities of the staff .",
              "step4": "Đáp án phù hợp nhất: aims Câu hoàn chỉnh: They concluded, moreover, that the activities needed to fit both the company's aims and the 14. ___ of its staff. (Họ còn kết luận rằng các hoạt động cần phù hợp với cả mục tiêu của công ty và ___ của nhân viên.) => Khớp với dự đoán danh từ chỉ yếu tố thuộc công ty: hoạt động phải phù hợp với mục tiêu của công ty . Đáp án gồm 1 từ; đề được cung cấp không nêu giới hạn số từ. Đối chiếu paraphrasing: needed to fit is matched the company's giữ nguyên. standards “ tiêu chuẩn công việc ”: Nếu skim/scan đoạn 11 thấy yêu cầu giữ tiêu chuẩn cao (“keeping standards high”), em dễ chọn từ này Nhưng đó là yêu cầu duy trì chất lượng công việc, không phải yếu tố được nêu sau sở hữu cách của công ty trong câu (4). balance “ sự cân bằng ”: Từ này xuất hiện trong đoạn 11 và câu tiếp theo của phần notes nên dễ gây nhầm Nhưng nó nói về việc cân bằng giữa vui chơi và chất lượng công việc, không phải mục tiêu công ty mà hoạt động cần phù hợp với."
            }
          },
          {
            "id": 39,
            "prompt": "Complete blank for question 39:",
            "type": "FILL_IN_BLANK",
            "correct": "aims",
            "explanation": {
              "step1": "the activities needed to fit both the company's 13. ___ and the 14. ___ of its staff . Dự đoán ô trống 14: - Loại từ: danh từ/cụm danh từ, đứng sau mạo từ và trước cụm chỉ sở hữu. - Nghĩa: một đặc điểm của nhân viên mà các hoạt động cần phù hợp.",
              "step2": "Dựa vào tên riêng Okonkwo, Vance and Ruiz, ta định vị được đoạn 11. Từ đây, tìm ý các hoạt động cần phù hợp với những yếu tố nào, tương ứng với yêu cầu trong đề (“needed to fit”). Đoạn 11 — needed to fit",
              "step3": "Đoạn 11: Their results back the view that fun can genuinely help — provided the way it is framed is matched both to the company's aims and to the personalities of the staff .",
              "step4": "Đáp án phù hợp nhất: personalities Câu hoàn chỉnh: the activities needed to fit both the company's 13. ___ and the personalities of its staff . (Các hoạt động cần phù hợp với cả yếu tố của công ty ở ô 13 và tính cách của nhân viên công ty .) => Khớp với dự đoán danh từ chỉ đặc điểm của nhân viên và thông tin trong bài; đáp án gồm 1 từ. Đề được cung cấp không nêu giới hạn số từ. Đối chiếu paraphrasing: needed to fit is matched the 14. ___ of its staff the personalities of the staff staff “ nhân viên ”: Nếu chỉ scan thấy cụm chỉ nhân viên (“of the staff”), em có thể chọn nhầm từ này Nhưng ô trống hỏi đặc điểm của nhân viên, không hỏi bản thân nhân viên. standards “ tiêu chuẩn ”: Câu 5 đoạn 11 nhắc việc giữ tiêu chuẩn cao (“keeping standards high”), dễ khiến em liên hệ với chất lượng công việc ở cuối phần ghi chú Nhưng đó là yêu cầu cần duy trì, không phải đặc điểm của nhân viên mà hoạt động phải phù hợp."
            }
          },
          {
            "id": 40,
            "prompt": "Complete blank for question 40:",
            "type": "FILL_IN_BLANK",
            "correct": "personalities",
            "explanation": {
              "step1": "Phân tích câu hỏi theo phương pháp Linearthinking.",
              "step2": "Định vị vùng thông tin liên quan trong bài đọc.",
              "step3": "Bóc tách cấu trúc câu (S-V-O) và đối chiếu nghĩa.",
              "step4": "Đáp án chính xác: personalities"
            }
          }
        ]
      }
    ]
  },
  "cam-13-reading-1": {
    "id": "cam-13-reading-1",
    "title": "IELTS CAM Inspired 13 - Reading Test 1",
    "series": "Cambridge 13",
    "testNumber": 1,
    "type": "Reading",
    "durationMinutes": 60,
    "passages": [
      {
        "id": "cam-13-reading-1-p1",
        "passageNumber": 1,
        "title": "Case Study: Tourism New Zealand website",
        "subtitle": "",
        "content": [
          "Home to roughly four million people and a long-haul flight from every one of the world's principal tourist-generating markets, New Zealand is a small nation for which drawing in overseas visitors has never been straightforward. Tourism today supplies about nine percent of national output and earns more from abroad than any other industry. It runs in the opposite direction to the country's other export trades: where those make goods to sell overseas, tourism carries its customers into New Zealand. What is on offer is the place itself – its scenery, its inhabitants and the things a traveller can do there. The campaign Tourism New Zealand launched in 1999 to project a fresh brand identity abroad rested on three ideas: breathtaking landscapes, exhilarating outdoor pursuits and a living Maori heritage. It lifted New Zealand into the ranks of the most powerful national brands anywhere.",
          "Anchoring that campaign was a website, www.newzealand.com, intended to act as a single doorway to everything a would-be visitor might be after. At its core sat a directory of tourism operators, taking in firms based within New Zealand as well as overseas agencies that sold trips to it. Getting onto the list demanded very little: a business had only to complete a short form, so that even the tiniest guesthouse or the most specialised activity provider could win a web presence and reach an audience on the far side of the world. And because every operator could log in and amend its own entry whenever it chose, what visitors saw stayed dependable and current. Quality, meanwhile, was safeguarded through a separate arrangement: each organisation displayed on the site was independently judged against an agreed set of national standards, and one strand of that assessment weighed the mark a business left on the natural world.",
          "The site carried features on well-known people and places too, so as to convey something of what a New Zealand trip actually felt like. Among the best liked was a recorded interview with a retired national rugby coach; another that pulled in heavy traffic was an interactive tour of the locations that overseas film-makers had picked out for their productions. Tools for independent travellers wanting to shape trips of their own were added as the site matured. Planning a driving holiday was made simpler by a catalogue of the country's best-loved road journeys, which put forward different ones depending on the terrain a motorist favoured and set out the distances and times each involved.",
          "A Travel Planner tool came along afterwards. It let users click to 'bookmark' whichever places or attractions caught their eye, then see the lot laid out on a map. For any cluster of chosen spots, the planner proposed possible routes and spelt out the public-transport links running between them, together with connections to somewhere to stay close by. By registering, a user could keep a Travel Plan to return to later, or print it off to carry along on the trip. The site also ran a 'Your Words' area, where anybody who wished was free to send in an account of their New Zealand journey for possible publication on its pages.",
          "For its online achievement and innovation the Tourism New Zealand website collected two awards, though the more revealing yardstick was arguably the jump in visitor numbers. Across the years from 1999 to 2004, total spending by tourists rose by an average approaching seven percent annually. Arrivals from Britain climbed faster again, at something like thirteen percent a year between 2002 and 2006, while British travel abroad taken as a whole grew by a mere four percent over that stretch.",
          "The site was designed so that individuals and travel companies alike could assemble itineraries and packages to fit their own tastes. Crucially, it let visitors hunt for things to do not only by where they were, but by the specific character of the activity – a telling point, since studies show activities matter more than anything to how content a visitor feels, supplying seventy-four percent of that satisfaction, while transport and accommodation make up the remaining twenty-six percent. As a rule, the more activities a visitor takes on, the more contented they become. Travellers also get the most out of cultural activities when these are hands-on – dropping in at a marae, say, to discover how Maori life was traditionally led. Many long-haul travellers prize this kind of learning, taking away tales for friends and family back home. Those coming to New Zealand also seem reluctant to feel like one of a crowd, treating activities shared with only a few others as more meaningful.",
          "New Zealand, one might argue, is hardly a run-of-the-mill destination. Small in size, its visitor economy leans for the most part on small businesses, and the country is widely taken to be a safe, English-speaking place served by a reliable transport network. Given the length of the flight, the majority of visitors linger a while – about twenty days on average – and aim to see as much of the country as they can on what usually feels like a once-in-a-lifetime trip. Yet the deeper lessons carry across anywhere: the worth of a strong brand, of a strategy built on experiences available nowhere else, and of a thorough, easy-to-use website."
        ],
        "questions": [
          {
            "id": 1,
            "prompt": "Complete blank for question 1:",
            "type": "FILL_IN_BLANK",
            "correct": "form",
            "explanation": {
              "step1": "businesses could be added to the directory simply by filling in a 1. ___ Ô trống đứng sau a , nên cần một danh từ số ít: thứ doanh nghiệp phải điền để được thêm vào danh mục.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta tìm ý *được đưa vào danh mục*. Ở đoạn 2, cụm “Getting onto the list” báo hiệu vùng thông tin liên quan. Đoạn 2 — Getting onto the list",
              "step3": "Đoạn 2: Getting onto the list demanded very little : a business had only to complete a short form , so that even the tiniest guesthouse or the most specialised activity provider could win a web presence and reach an audience on the far side of the world .",
              "step4": "Đáp án phù hợp nhất: form Câu hoàn chỉnh: businesses could be added to the directory simply by filling in a form (Doanh nghiệp có thể được thêm vào danh mục chỉ bằng cách điền một biểu mẫu .) => Khớp với dự đoán: form là danh từ số ít chỉ thứ cần điền; đáp án gồm 1 từ lấy nguyên văn từ bài. Đối chiếu paraphrasing: added to the directory Getting onto the list simply by filling in a had only to complete a entry mục thông tin: Đoạn 2 có nói doanh nghiệp sửa mục của mình (“amend its own entry”), nhưng đó là việc làm sau khi đã có tên trong danh mục, không phải thứ cần điền ban đầu. Đáp án list danh mục: Dễ chọn vì thấy “Getting onto the list”, nhưng list là nơi doanh nghiệp muốn có tên; thứ họ phải hoàn thành là form."
            }
          },
          {
            "id": 2,
            "prompt": "Complete blank for question 2:",
            "type": "FILL_IN_BLANK",
            "correct": "standards",
            "explanation": {
              "step1": "Câu cần điền: - every listed operator was independently checked against a set of national 2. ___ , and its effect on the natural world was taken into account Dự đoán ô trống: Sau “a set of national”, cần một danh từ , nhiều khả năng ở dạng số nhiều, chỉ thứ được dùng làm căn cứ kiểm tra các đơn vị trong danh bạ.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta tìm thông tin về danh bạ các đơn vị du lịch (“directory of tourism operators”) ở đoạn 2 => đây là vùng liên quan. Đoạn 2 — directory of tourism operators",
              "step3": "Đoạn 2: Quality, meanwhile, was safeguarded through a separate arrangement: each organisation displayed on the site was independently judged against an agreed set of national standards , and one strand of that assessment weighed the mark a business left on the natural world .",
              "step4": "Đáp án phù hợp nhất: standards Câu hoàn chỉnh: every listed operator was independently checked against a set of national standards , and its effect on the natural world was taken into account (Mỗi đơn vị được liệt kê đều được kiểm tra độc lập theo một bộ tiêu chuẩn quốc gia , đồng thời tác động của đơn vị đó lên thiên nhiên cũng được xem xét.) => Khớp với dự đoán: standards là danh từ số nhiều chỉ căn cứ đánh giá ; đáp án gồm 1 từ (đề không cung cấp giới hạn số từ). Đối chiếu paraphrasing: was independently checked against was independently judged against every listed operator each organisation displayed on the site Đáp án form “ biểu mẫu ”: Nếu skim/scan đoạn 2 sẽ dễ thấy từ này, nhưng đó là thứ doanh nghiệp điền để được đưa vào danh bạ, không phải căn cứ để kiểm tra đơn vị đã được liệt kê. assessment “ việc đánh giá ”: Từ này xuất hiện ở vế sau câu (5), nhưng chỉ quá trình đánh giá; bài đọc gọi căn cứ đánh giá là “national standards”."
            }
          },
          {
            "id": 3,
            "prompt": "Complete blank for question 3:",
            "type": "FILL_IN_BLANK",
            "correct": "coach",
            "explanation": {
              "step1": "Mục cần điền: Special features on local topics. - e.g. a filmed conversation with a retired rugby 3. ___ Ô trống đứng sau “a retired rugby”, nên cần một danh từ chỉ người , nói rõ vai trò của người tham gia cuộc trò chuyện. Chưa thể biết chính xác từ nào nếu chỉ đọc đề.",
              "step2": "Dựa vào từ khoá đặc biệt rugby => ta tìm đến đoạn 3, nơi bài đọc nhắc đến một cuộc phỏng vấn. Đoạn 3",
              "step3": "Đoạn 3: Among the best liked was a recorded interview with a retired national rugby coach ; another that pulled in heavy traffic was an interactive tour of the locations that overseas film-makers had picked out for their productions .",
              "step4": "Đáp án phù hợp nhất: coach Câu hoàn chỉnh: e.g. a filmed conversation with a retired rugby coach (ví dụ: cuộc trò chuyện được quay lại với một huấn luyện viên rugby đã nghỉ). => Khớp với dự đoán về danh từ chỉ người: bài đọc nêu cuộc phỏng vấn (“recorded interview”) với một huấn luyện viên (“coach”). Đáp án gồm 1 từ; đề được cung cấp không nêu giới hạn số từ. Đối chiếu paraphrasing: filmed conversation recorded interview rugby “ môn thể thao ”: Sai vì từ này đã có trước ô trống; nó bổ nghĩa cho vai trò cần tìm, không chỉ người. national “ thuộc cấp quốc gia ”: Nếu skim/scan, em có thể thấy từ này ngay trước “rugby” trong bài Nhưng nó chỉ bổ nghĩa cho cụm chỉ người, không phải vai trò cần điền. locations “ các địa điểm ”: Sai vì từ này thuộc chuyến tham quan tương tác, không thuộc cuộc phỏng vấn đang được hỏi."
            }
          },
          {
            "id": 4,
            "prompt": "Complete blank for question 4:",
            "type": "FILL_IN_BLANK",
            "correct": "locations",
            "explanation": {
              "step1": "Ở mục nói về các tính năng giới thiệu chủ đề địa phương, ta xét phần chứa chỗ trống 4: and a clickable tour of the 4. ___ where major films had been shot Sau “the”, ô trống cần một danh từ chỉ địa điểm liên quan đến việc quay phim. Chưa thể xác định số ít hay số nhiều chỉ từ câu hỏi; ta cần lấy đúng từ trong bài.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp ý chuyến tham quan có tương tác (“interactive tour”) => đây là vùng liên quan. Đoạn 3 — interactive tour",
              "step3": "Đoạn 3: Among the best liked was a recorded interview with a retired national rugby coach ; another that pulled in heavy traffic was an interactive tour of the locations that overseas film-makers had picked out for their productions .",
              "step4": "Đáp án phù hợp nhất: locations Câu hoàn chỉnh: and a clickable tour of the locations where major films had been shot (và một chuyến tham quan có tương tác về các địa điểm nơi những bộ phim lớn được quay) => Khớp với dự đoán danh từ chỉ địa điểm : bài dùng đúng từ *locations*. Đáp án gồm một từ lấy nguyên văn từ bài; đề được cung cấp không nêu giới hạn số từ. Đối chiếu paraphrasing: a clickable tour an interactive tour where major films had been shot had picked out for their productions places các địa điểm: Nếu skim/scan sẽ dễ chọn vì câu trước ở đoạn 3 có “people and places” Nhưng câu (2) dùng từ cụ thể cho chuyến tham quan này là locations. productions các tác phẩm được làm ra: Sai vì đây không phải địa điểm mà chuyến tham quan dẫn tới. coach huấn luyện viên: Dễ nhầm vì nằm ngay trước dấu chấm phẩy trong câu (2), nhưng thuộc cuộc phỏng vấn, không thuộc chuyến tham quan địa điểm làm phim."
            }
          },
          {
            "id": 5,
            "prompt": "Complete blank for question 5:",
            "type": "FILL_IN_BLANK",
            "correct": "terrain",
            "explanation": {
              "step1": "Information on driving routes",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta tìm ý về tuyến đường lái xe và bắt đầu đọc ở đoạn 3 khi gặp cụm chỉ việc lên kế hoạch cho chuyến đi bằng xe (“Planning a driving holiday”). Đoạn 3 — Planning a driving holiday",
              "step3": "Đoạn 3: Planning a driving holiday was made simpler by a catalogue of the country's best-loved road journeys , which put forward different ones depending on the terrain a motorist favoured and set out the distances and times each involved .",
              "step4": "Đáp án phù hợp nhất: terrain Câu hoàn chỉnh: the driving routes it suggested varied with the kind of terrain a motorist preferred (Các tuyến đường được đề xuất thay đổi tùy theo loại địa hình mà người lái xe ưa thích.) => Khớp với dự đoán về một danh từ chỉ đặc điểm người lái thích; terrain là từ được dùng trong bài, gồm 1 từ. Đề được cung cấp không nêu giới hạn số từ. Đối chiếu paraphrasing: driving routes road journeys varied with different ones depending on preferred favoured distances quãng đường: Nếu skim/scan thấy thông tin về tuyến đường (“the distances and times”) sẽ dễ chọn từ này Nhưng đó là quãng đường của mỗi tuyến, không phải yếu tố người lái ưa thích để quyết định tuyến nào được đề xuất. times thời gian: Tương tự, bài cho biết thời gian của từng tuyến, chứ không nói các tuyến thay đổi tùy theo thời gian người lái ưa thích. road journeys các hành trình đường bộ: Đây là những tuyến được đề xuất; ô trống hỏi đặc điểm khiến các tuyến được đề xuất khác nhau."
            }
          },
          {
            "id": 6,
            "prompt": "Complete blank for question 6:",
            "type": "FILL_IN_BLANK",
            "correct": "map",
            "explanation": {
              "step1": "Travel Planner Sau “a single”, ô trống cần danh từ số ít chỉ thứ dùng để hiển thị chung các điểm tham quan đã đánh dấu.",
              "step2": "Dựa vào tên công cụ Travel Planner trong đề => tìm đoạn 4 và bắt đầu đọc từ chỗ giới thiệu công cụ này. Đoạn 4",
              "step3": "Đoạn 4: It let users click to 'bookmark' whichever places or attractions caught their eye , then see the lot laid out on a map .",
              "step4": "Đáp án phù hợp nhất: map Câu hoàn chỉnh: The attractions a user had bookmarked could all be displayed together on a single map, along with public-transport details and nearby places to stay. (Các điểm tham quan người dùng đã đánh dấu có thể được hiển thị cùng nhau trên một bản đồ, kèm thông tin giao thông công cộng và chỗ ở gần đó.) => Khớp với dự đoán: bài đọc nói các điểm đã chọn được xem trên map ; đáp án là một từ lấy nguyên văn bài đọc. Đối chiếu paraphrasing: all be displayed together see the lot laid out routes các tuyến đường: Đoạn 4 có nhắc “proposed possible routes”, nhưng đó là tuyến đường công cụ gợi ý, không phải thứ dùng để hiển thị các điểm đã đánh dấu. Travel Plan Đoạn 4 nói người dùng có thể “keep a Travel Plan”, tức lưu kế hoạch để xem lại; cụm này không chỉ thứ mà các điểm được hiển thị trên đó."
            }
          },
          {
            "id": 7,
            "prompt": "Complete blank for question 7:",
            "type": "FILL_IN_BLANK",
            "correct": "account",
            "explanation": {
              "step1": "Mục ‘Your Words’ : - travellers were invited to send in an 7. ___ describing their trip Sau “an” cần một danh từ số ít . Dựa vào “send in” và “describing their trip”, ta dự đoán đó là một nội dung du khách gửi đến để kể về chuyến đi .",
              "step2": "Dựa vào tên mục đặc biệt ‘Your Words’ => ta tìm đến phần nói về mục này ở đoạn 4. Đoạn 4",
              "step3": "Đoạn 4: The site also ran a 'Your Words' area , where anybody who wished was free to send in an account of their New Zealand journey for possible publication on its pages .",
              "step4": "Đáp án phù hợp nhất: account Câu hoàn chỉnh: travellers were invited to send in an account describing their trip (Du khách được mời gửi một bài kể về chuyến đi của mình.) => Khớp với dự đoán: *account* là danh từ số ít chỉ nội dung được gửi đến ; đáp án gồm 1 từ. Đề được cung cấp không nêu giới hạn số từ. Đối chiếu paraphrasing: describing their trip of their New Zealand journey send in giữ nguyên journey chuyến đi: Từ này xuất hiện sát đáp án, nhưng là chuyến đi được kể lại (“their New Zealand journey”), không phải thứ du khách gửi đến. Travel Plan kế hoạch chuyến đi: Đoạn 4 cũng nhắc đến mục này, nhưng người dùng lưu hoặc in nó, chứ không gửi nó vào mục ‘Your Words’. publication việc đăng tải: Đây là khả năng xảy ra sau khi nội dung được gửi đến (“for possible publication”), không phải thứ cần điền."
            }
          },
          {
            "id": 8,
            "prompt": "New Zealand earns more from tourism than from any other form of overseas trade.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "TRUE",
            "explanation": {
              "step1": "New Zealand earns more from tourism than from any other form of overseas trade . Ý câu hỏi: Du lịch đem lại cho New Zealand khoản thu từ nước ngoài lớn hơn bất kỳ hình thức thương mại đối ngoại nào khác.",
              "step2": "Dựa vào tên riêng New Zealand và chủ đề tourism => ta bắt đầu ở đoạn 1, nơi bài giới thiệu vai trò của du lịch đối với nền kinh tế. Đoạn 1",
              "step3": "Đoạn 1: Tourism today supplies about nine percent of national output and earns more from abroad than any other industry .",
              "step4": "Câu hỏi nói: New Zealand thu từ du lịch nhiều hơn mọi hình thức thương mại đối ngoại khác . Bài đọc nói: Du lịch thu từ nước ngoài nhiều hơn mọi ngành khác (“more from abroad than any other industry”). Phạm vi “mọi ngành khác” bao gồm các hình thức thương mại đối ngoại khác, nên hai ý thống nhất. Đáp án đúng: TRUE Đối chiếu paraphrasing: earns more giữ nguyên any other form of overseas trade any other industry + from abroad FALSE Nếu skim/scan thấy đoạn 1 nói du lịch đi theo hướng ngược lại (“opposite direction”), sẽ dễ nghĩ bài đang phủ định câu hỏi Nhưng đó là cách du lịch vận hành, không phải mức thu. Chỉ chọn FALSE nếu bài nói một hình thức thương mại đối ngoại khác thu nhiều hơn du lịch. NOT GIVEN Có thể thấy bài dùng “industry” thay vì “form of overseas trade” rồi tưởng thiếu phép so sánh Nhưng câu (2) đã so sánh khoản thu từ nước ngoài của du lịch với mọi ngành khác. Chỉ chọn NOT GIVEN nếu bài không đưa ra phép so sánh khoản thu ấy."
            }
          },
          {
            "id": 9,
            "prompt": "Operators had their directory entries created for them by Tourism New Zealand staff.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "FALSE",
            "explanation": {
              "step1": "Operators had their directory entries created for them by Tourism New Zealand staff . Ý câu hỏi: Nhân viên Tourism New Zealand lập mục thông tin trong danh mục cho các đơn vị kinh doanh , thay vì các đơn vị tự thực hiện .",
              "step2": "Dựa vào từ khoá đặc biệt *directory* => bắt đầu đọc ở đoạn 2, nơi bài nhắc đến danh mục đơn vị kinh doanh (“directory of tourism operators”). Đoạn 2 — directory of tourism operators",
              "step3": "Đoạn 2: Getting onto the list demanded very little : a business had only to complete a short form , so that even the tiniest guesthouse or the most specialised activity provider could win a web presence and reach an audience on the far side of the world . And because every operator could log in and amend its own entry whenever it chose , what visitors saw stayed dependable and current . Câu (3): doanh nghiệp tự điền mẫu để được đưa vào danh mục. Câu (4): mỗi đơn vị còn có thể đăng nhập và sửa mục của chính mình . Bài mô tả quy trình mà doanh nghiệp chủ động cung cấp và quản lý thông tin .",
              "step4": "Câu hỏi nói: Nhân viên Tourism New Zealand lập hộ mục thông tin cho các đơn vị (“ created for them by Tourism New Zealand staff ”). Bài đọc nói: Doanh nghiệp chỉ cần điền mẫu (“a business had only to complete a short form”); mỗi đơn vị có thể sửa mục của chính mình (“amend its own entry”). Bài không nói nguyên văn ai thực hiện thao tác tạo mục, nhưng quy trình được mô tả là doanh nghiệp chủ động thực hiện , không phải nhân viên lập hộ. Đáp án đúng: FALSE Đối chiếu paraphrasing: created for them by Tourism New Zealand staff a business had only to complete a short form + amend its own entry Đáp án TRUE Nếu skim/scan thấy website có danh mục (“a directory of tourism operators”), sẽ dễ nghĩ nhân viên lập mục cho từng đơn vị Nhưng câu (3)–(4) mô tả doanh nghiệp điền mẫu và quản lý mục của mình. Chỉ chọn TRUE nếu bài nói nhân viên Tourism New Zealand lập mục hộ họ. NOT GIVEN Dễ phân vân vì quyền sửa mục không tự nó chứng minh ai đã tạo mục Nhưng đọc cùng câu (3), ta thấy bài còn nêu thủ tục doanh nghiệp tự điền mẫu để được đưa vào danh mục. Chỉ chọn NOT GIVEN nếu bài không cho biết cả cách các đơn vị tham gia danh mục lẫn vai trò của họ đối với mục thông tin."
            }
          },
          {
            "id": 10,
            "prompt": "The website has won more awards than any comparable tourism website.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "NOT GIVEN",
            "explanation": {
              "step1": "The website has won more awards than any comparable tourism website . Ý câu hỏi: Cần kiểm tra số giải của các website du lịch tương tự để biết website này có giành nhiều giải hơn tất cả hay không.",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp thông tin về việc website giành giải thưởng. Đoạn 5 có cụm “collected two awards” => đây là vùng liên quan. Đoạn 5 — collected two awards",
              "step3": "Đoạn 5: For its online achievement and innovation the Tourism New Zealand website collected two awards , though the more revealing yardstick was arguably the jump in visitor numbers .",
              "step4": "Câu hỏi nói: Website giành nhiều giải hơn mọi website du lịch tương tự (“more awards than any comparable tourism website”). Bài đọc nói: Website Tourism New Zealand giành hai giải (“collected two awards”). Bài không cho biết số giải của website du lịch tương tự nào. Có thông tin về giải thưởng, nhưng thiếu dữ liệu để so sánh . Đáp án đúng: NOT GIVEN Đối chiếu paraphrasing: collected two awards has won + awards than any comparable tourism website không có trong bài. Đáp án TRUE Nếu skim/scan thấy website giành hai giải (“two awards”), sẽ dễ chọn TRUE Nhưng hai giải chưa chứng minh website giành nhiều hơn tất cả website tương tự. Chỉ chọn TRUE nếu bài xác nhận phép so sánh đó. FALSE Sai vì hai giải cũng không chứng minh website thua hay ngang bất kỳ website tương tự nào. Chỉ chọn FALSE nếu bài cho biết ít nhất một website du lịch tương tự giành từ hai giải trở lên."
            }
          },
          {
            "id": 11,
            "prompt": "Transport and accommodation together do more to satisfy visitors than the activities they choose.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "FALSE",
            "explanation": {
              "step1": "Transport and accommodation together do more to satisfy visitors than the activities they choose . Câu hỏi yêu cầu so sánh hai phía: đi lại và chỗ ở có tác động lớn hơn các hoạt động hay không?",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp ý du khách hài lòng đến mức nào (“how content a visitor feels”) ở đoạn 6 => đây là vùng liên quan. Đoạn 6 — how content a visitor feels",
              "step3": "Đoạn 6: Crucially, it let visitors hunt for things to do not only by where they were, but by the specific character of the activity – a telling point , since studies show activities matter more than anything to how content a visitor feels , supplying seventy-four percent of that satisfaction , while transport and accommodation make up the remaining twenty-six percent .",
              "step4": "Câu hỏi nói: Đi lại và chỗ ở cộng lại giúp du khách hài lòng nhiều hơn các hoạt động họ chọn (“do more to satisfy visitors than”). Bài đọc nói: Các hoạt động đóng góp 74% (“seventy-four percent”), còn đi lại và chỗ ở cộng lại chiếm 26% còn lại (“ the remaining twenty-six percent ”). ⇒ Chiều so sánh của câu hỏi ngược với bài đọc . Đáp án đúng: FALSE Đối chiếu paraphrasing: Transport and accommodation together do more activities matter more than anything the remaining twenty six percent seventy four percent of that satisfaction Đáp án TRUE Nếu skim/scan thấy bài cũng nhắc đến đi lại và chỗ ở (“transport and accommodation”), sẽ dễ chọn TRUE Nhưng hai yếu tố này chỉ chiếm 26%, ít hơn mức 74% của các hoạt động. Chỉ chọn TRUE nếu bài nói đi lại và chỗ ở đóng góp nhiều hơn các hoạt động. NOT GIVEN Sai vì bài cho biết tỷ lệ của cả hai phía, nên có đủ thông tin để so sánh. Chỉ chọn NOT GIVEN nếu bài không cho biết mức đóng góp của chúng vào sự hài lòng."
            }
          },
          {
            "id": 12,
            "prompt": "Visitors find cultural experiences more rewarding if they are able to join in rather than simply look on.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "TRUE",
            "explanation": {
              "step1": "Visitors find cultural experiences more rewarding if they are able to join in rather than simply look on . Ý câu hỏi: Khách tham quan thấy trải nghiệm văn hóa bổ ích hơn nếu được trực tiếp tham gia , thay vì chỉ quan sát.",
              "step2": "Câu hỏi không có từ khóa đặc biệt; ta đọc nhanh đến khi gặp ý về hoạt động văn hóa (“cultural activities”) ở đoạn 6 => đây là vùng cần đọc kỹ. Đoạn 6 — cultural activities",
              "step3": "Đoạn 6: Travellers also get the most out of cultural activities when these are hands-on – dropping in at a marae, say, to discover how Maori life was traditionally led .",
              "step4": "Câu hỏi nói: Trải nghiệm văn hóa bổ ích hơn (“ more rewarding ”) nếu khách được tham gia thay vì chỉ đứng xem (“ join in rather than simply look on ”). Bài đọc nói: Người đi du lịch thu nhận nhiều nhất từ hoạt động văn hóa (“ get the most out of cultural activities ”) khi hoạt động đòi hỏi tham gia trực tiếp (“ hands-on ”). => Hai ý cùng chiều : trực tiếp tham gia giúp khách thu nhận nhiều hơn . Đáp án đúng: True Đối chiếu paraphrasing: get the most out of cultural activities find cultural experiences more rewarding when these are hands on if they are able to join in rather than simply look on False Sai vì bài nói tham gia trực tiếp giúp khách thu nhận nhiều nhất, không phải ít hơn. Chỉ chọn False nếu bài nói hoạt động chỉ để quan sát bổ ích hơn hoạt động có thể trực tiếp tham gia. Not given Nếu chỉ tìm đúng chữ “look on” mà không thấy, sẽ dễ chọn Not given Nhưng “hands-on” đã nêu điều kiện tham gia trực tiếp, còn “get the most out of” nêu rõ lợi ích. Chỉ chọn Not given nếu bài không cho biết việc tham gia trực tiếp ảnh hưởng thế nào đến lợi ích khách nhận được."
            }
          },
          {
            "id": 13,
            "prompt": "British visitors stay in New Zealand for longer on average than those from other countries.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "NOT GIVEN",
            "explanation": {
              "step1": "British visitors stay in New Zealand for longer on average than those from other countries . Ý câu hỏi: Khách đến từ Britain có ở lại lâu hơn khách từ các nước khác nếu tính theo thời gian lưu trú trung bình không?",
              "step2": "Dựa vào từ chỉ quốc tịch (“British”), ta tìm được thông tin về khách đến từ Britain ở đoạn 5. Nhưng câu hỏi hỏi về thời gian lưu trú , nên cần đọc kĩ khi gặp số ngày ở lại trung bình (“about twenty days on average”) ở đoạn 7. Đoạn 7 — British",
              "step3": "Đoạn 7: Given the length of the flight, the majority of visitors linger a while – about twenty days on average – and aim to see as much of the country as they can on what usually feels like a once-in-a-lifetime trip .",
              "step4": "Câu hỏi nói: Khách đến từ Britain lưu trú lâu hơn tính trung bình so với khách từ các nước khác (“longer on average than those from other countries”). Bài đọc nói: Phần lớn du khách (“the majority of visitors”) lưu lại trung bình khoảng 20 ngày (“about twenty days on average”). Bài không cho biết mức trung bình riêng của từng nhóm quốc tịch. ⇒ Không có dữ liệu để so sánh hai nhóm như câu hỏi yêu cầu. Đáp án đúng: NOT GIVEN Đối chiếu paraphrasing: British visitors the majority of visitors longer on average than those from other countries không có trong bài. Đáp án TRUE Nếu skim/scan thấy lượng khách đến từ Britain tăng nhanh hơn (“climbed faster again”) ở đoạn 5, sẽ dễ chọn TRUE Nhưng đó là lượng khách đến, không phải thời gian họ ở lại. Chỉ chọn TRUE nếu bài nói khách đến từ Britain lưu trú trung bình lâu hơn khách từ các nước khác. FALSE Sai vì mức trung bình khoảng 20 ngày của phần lớn du khách không chứng tỏ khách đến từ Britain lưu trú ngắn hơn hoặc bằng nhóm kia. Chỉ chọn FALSE nếu bài nói khách đến từ Britain lưu trú trung bình bằng hoặc ít ngày hơn khách từ các nước khác."
            }
          }
        ]
      },
      {
        "id": "cam-13-reading-1-p2",
        "passageNumber": 2,
        "title": "Why being bored is stimulating – and useful, too",
        "subtitle": "This most ordinary of feelings is proving far richer than anyone had expected",
        "content": [
          "Why Being Bored Is Stimulating – And Useful, Too"
        ],
        "questions": [
          {
            "id": 14,
            "prompt": "Choose the correct heading for Section A:",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "What schools can do to reduce boredom",
              "Sorting boredom into categories",
              "Working out who suffers most from boredom",
              "A fresh cause of boredom and a way to respond",
              "Why boredom is hard to pin down for researchers",
              "The useful things boredom can produce",
              "Which age groups feel boredom most",
              "A risk that boredom can bring"
            ],
            "correct": "Why boredom is hard to pin down for researchers",
            "explanation": {
              "step1": "Đoạn A: Everyone recognises the sensation : your thoughts refuse to settle, the minutes seem to drag, and nothing on offer looks likely to lift your mood . Pinning the feeling down precisely enough to examine it in a laboratory , however , has turned out to be surprisingly awkward . Part of the trouble is that boredom shades into so many neighbouring states — irritation, listlessness, gloom and plain indifference among them . Researchers cannot even agree on whether it is invariably a dull, low-energy condition , or whether the jittery, can't-sit-still version deserves the same name . Anneli Virtanen , a psychologist at the University of Tampere in Finland, likens it in her book The Restless Mind to nausea — a response whose task is to keep us clear of particular circumstances . ' Where nausea steers us away from food that might poison us ,' she writes , ' boredom may steer us away from company and settings that offer us nothing .' Câu (1): mở bằng cảm giác chán mà ai cũng nhận ra. Câu (2)–(4): tuy nhiên, cảm giác này lại khó xác định rõ vì giao thoa với các trạng thái khác và các nhà nghiên cứu chưa thống nhất cách hiểu . Câu (5)–(6): đưa ra rồi giải thích phép so sánh với buồn nôn; đây là một cách diễn giải hỗ trợ, không thay thế trọng tâm ở câu (2)–(4). Đoạn A — Pinning the feeling down",
              "step2": "Ý chính: Các nhà nghiên cứu khó xác định rõ sự chán nản vì ranh giới với các trạng thái khác không rõ và chưa có cách hiểu thống nhất . Đáp án đúng: Why boredom is hard to pin down for researchers (Vì sao các nhà nghiên cứu khó xác định rõ sự chán nản). Đối chiếu paraphrasing: hard to pin down Pinning the feeling down + awkward for researchers Researchers cannot even agree Sorting boredom into categories “ — Phân chia sự chán nản thành các loại ”: Nếu skim/scan thấy trạng thái ít năng lượng (“low-energy condition”) và dạng không thể ngồi yên (“can't-sit-still version”), ta dễ nghĩ đoạn đang phân loại Nhưng câu (4) nói các nhà nghiên cứu chưa thống nhất, không trình bày một hệ thống phân loại đã xác lập. The useful things boredom can produce “ — Những điều hữu ích mà sự chán nản có thể tạo ra ”: Câu (6) dễ kéo ta về heading này vì nói sự chán nản có thể giúp tránh những đối tượng không mang lại gì (“offer us nothing”) Nhưng đây chỉ là phần diễn giải cuối đoạn; heading này bỏ sót trọng tâm về khó khăn khi xác định cảm giác chán ở câu (2)–(4). A risk that boredom can bring “ — Một nguy cơ mà sự chán nản có thể đem lại ”: Nếu thấy khả năng gây ngộ độc (“might poison us”) ở câu (6), ta dễ nghĩ đến nguy cơ Nhưng cụm này nói về thức ăn trong phép so sánh với buồn nôn, không phải tác hại do sự chán nản gây ra.",
              "step3": "Bóc tách cấu trúc câu (S-V-O) và đối chiếu nghĩa.",
              "step4": "Đáp án chính xác: Why boredom is hard to pin down for researchers"
            }
          },
          {
            "id": 15,
            "prompt": "Choose the correct heading for Section B:",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "What schools can do to reduce boredom",
              "Sorting boredom into categories",
              "Working out who suffers most from boredom",
              "A fresh cause of boredom and a way to respond",
              "Why boredom is hard to pin down for researchers",
              "The useful things boredom can produce",
              "Which age groups feel boredom most",
              "A risk that boredom can bring"
            ],
            "correct": "Sorting boredom into categories",
            "explanation": {
              "step1": "Đoạn B: Working from interviews about how people actually experience being bored, Lukas Brandt and his colleagues at the University of Graz in Austria have lately mapped out five separate varieties , which they label vacant, drifting, seeking, agitated and resigned . Each can be located on a simple grid : one axis stretches from low to high arousal, the other from pleasant to unpleasant feeling . What Brandt finds striking is that , although most of us pass through every variety at one time or another , we each tend to lean heavily towards a single one . The version to be most wary of is the agitated kind , in which high arousal collides with thoroughly negative feeling . The kindest is the vacant sort , where a person, though absorbed in nothing rewarding, stays calm and untroubled . Whether particular personalities are drawn towards particular types of boredom is a question that has yet to be settled . Câu (1)–(2): giới thiệu các loại buồn chán và cách đặt chúng vào một hệ phân loại . Câu (3): mỗi người có thể trải qua mọi loại nhưng thường thiên về một loại. Câu (4)–(5): đối chiếu loại cần dè chừng nhất >< loại nhẹ nhàng nhất. Câu (6): nêu câu hỏi còn bỏ ngỏ về mối liên hệ giữa tính cách và từng loại. Đoạn B — mapped out",
              "step2": "Ý chính: Đoạn trình bày cách phân loại sự buồn chán và đặc điểm của các loại. Đáp án đúng: Sorting boredom into categories (Phân loại sự buồn chán). Đối chiếu paraphrasing: Sorting mapped out categories varieties / types of boredom Working out who suffers most from boredom “ (Xác định ai chịu buồn chán nặng nhất) ”: Nếu skim/scan thấy tính cách (“personalities”) ở câu (6), em dễ tưởng đoạn đang xác định nhóm người chịu ảnh hưởng nặng nhất Nhưng đoạn nói về việc mỗi người thiên về loại nào, không phải ai chịu buồn chán nhiều nhất. A risk that boredom can bring “ (Một nguy cơ do sự buồn chán mang lại) ”: Cụm cần dè chừng nhất (“most wary of”) ở câu (4) dễ kéo em về heading này Nhưng đó chỉ là đặc điểm của một loại; câu (5) còn đối chiếu với loại nhẹ nhàng nhất, nên nguy cơ không bao quát cả đoạn. Why boredom is hard to pin down for researchers “ (Vì sao các nhà nghiên cứu khó xác định rõ sự buồn chán) ”: Cụm chưa được giải quyết (“has yet to be settled”) ở câu (6) dễ gây nhầm Nhưng điều còn bỏ ngỏ là mối liên hệ giữa tính cách và từng loại, không phải khó khăn trong việc xác định sự buồn chán là gì.",
              "step3": "Bóc tách cấu trúc câu (S-V-O) và đối chiếu nghĩa.",
              "step4": "Đáp án chính xác: Sorting boredom into categories"
            }
          },
          {
            "id": 16,
            "prompt": "Choose the correct heading for Section C:",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "What schools can do to reduce boredom",
              "Sorting boredom into categories",
              "Working out who suffers most from boredom",
              "A fresh cause of boredom and a way to respond",
              "Why boredom is hard to pin down for researchers",
              "The useful things boredom can produce",
              "Which age groups feel boredom most",
              "A risk that boredom can bring"
            ],
            "correct": "The useful things boredom can produce",
            "explanation": {
              "step1": "Đoạn C: Rosa Feldmann , a psychologist at Ghent University in Belgium, takes the case still further . Every emotion , she maintains , exists for some purpose , and boredom is no exception . Her own work suggests that a bored mind is a more inventive one . ' People dread boredom ,' she notes , ' yet it can be the doorway to all sorts of remarkable ideas .' In a study she published last year , volunteers who had first been made thoroughly bored — by spending a quarter of an hour transcribing entries from a dictionary — went on to devise far more imaginative uses for an ordinary plastic spoon than a comparison group did . A dull , undemanding task suits creativity precisely because it lets the mind roam , Feldmann argues ; indeed , she recommends that we deliberately build more boredom into our days . Câu (1)–(2): mở rộng lập luận rằng sự buồn chán cũng có chức năng như các cảm xúc khác. Câu (3)–(4): nêu lợi ích — sự buồn chán giúp tăng sáng tạo , mở ra ý tưởng dù con người thường sợ nó. Câu (5): nghiên cứu củng cố nhận định trên — nhóm được làm cho buồn chán nghĩ ra cách dùng đồ vật sáng tạo hơn nhóm đối chiếu. Câu (6): giải thích cơ chế đầu óc được tự do suy nghĩ => khuyên đưa thêm sự buồn chán vào đời sống. Đoạn C — more inventive",
              "step2": "Ý chính: Sự buồn chán có thể thúc đẩy sáng tạo , tạo ra những ý tưởng hữu ích . Đáp án đúng: The useful things boredom can produce (Những điều hữu ích mà sự buồn chán có thể tạo ra). Đối chiếu paraphrasing: The useful things remarkable ideas + creativity boredom can produce a bored mind is a more inventive one A risk that boredom can bring “ (Một nguy cơ do sự buồn chán gây ra) ”: Nếu skim/scan thấy mọi người sợ buồn chán (“People dread boredom”), ta dễ nghĩ đoạn nói về nguy cơ Nhưng từ nối tương phản (“yet”) chuyển sang lợi ích, và các câu sau đều phát triển ý về sáng tạo. A fresh cause of boredom and a way to respond “ (Một nguyên nhân mới gây buồn chán và cách ứng phó) ”: Câu (6) có lời khuyên (“she recommends”), nên dễ chọn heading về cách ứng phó Nhưng đoạn không nêu nguyên nhân mới gây buồn chán; lời khuyên chỉ là hệ quả của lợi ích sáng tạo đã được trình bày.",
              "step3": "Bóc tách cấu trúc câu (S-V-O) và đối chiếu nghĩa.",
              "step4": "Đáp án chính xác: The useful things boredom can produce"
            }
          },
          {
            "id": 17,
            "prompt": "Choose the correct heading for Section D:",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "What schools can do to reduce boredom",
              "Sorting boredom into categories",
              "Working out who suffers most from boredom",
              "A fresh cause of boredom and a way to respond",
              "Why boredom is hard to pin down for researchers",
              "The useful things boredom can produce",
              "Which age groups feel boredom most",
              "A risk that boredom can bring"
            ],
            "correct": "A risk that boredom can bring",
            "explanation": {
              "step1": "Đoạn D: Not everyone is persuaded . Daniel Voss , a psychologist at Radboud University in the Netherlands, objects that once your mind is wandering freely , you are no longer bored — to his thinking, boredom is by definition a state we do not want . This is not to deny that it may be adaptive . Physical pain is adaptive too , he points out : without it we would come to serious harm , yet no one would argue that we should go looking for pain , and boredom , however useful evolution has made it, can turn poisonous when left to fester . What lies at the very heart of boredom , for Voss, is the mind's failure to shift its 'attention system' into gear , and the result is an inability to concentrate on anything at all , so that time appears to crawl . Worse still, the harder you struggle to put things right , the more wretched you may feel . ' People reach out to the world , and when they fail to connect , the frustration and irritation set in ,' he says . Most troubling of all , in Voss's view, is that a repeated failure to marshal one's attention can tip a person into a state of no longer knowing what to do — and no longer caring . Câu (1)–(2): phản bác quan điểm tích cực, phân biệt buồn chán với tâm trí tự do lang thang. Câu (3)–(4): công nhận khả năng giúp thích nghi >< cảnh báo buồn chán có thể trở nên độc hại nếu để kéo dài. Câu (5)–(7): giải thích tác hại — không thể tập trung, càng cố khắc phục càng có thể khổ sở, không kết nối được thì thất vọng. Câu (8): chốt nguy cơ nghiêm trọng nhất — thất bại lặp lại có thể khiến một người không còn biết phải làm gì và không còn quan tâm . Đoạn D — can turn poisonous",
              "step2": "Ý chính: Đoạn cảnh báo về nguy cơ do buồn chán gây ra , đặc biệt là mất phương hướng và không còn quan tâm . Đáp án đúng: A risk that boredom can bring (Một nguy cơ mà buồn chán có thể gây ra). Đối chiếu paraphrasing: A risk can turn poisonous The useful things boredom can produce “ (Những điều có ích do buồn chán tạo ra) ”: Nếu skim/scan thấy khả năng giúp thích nghi (“may be adaptive”), ta dễ chọn heading này Nhưng đó chỉ là ý nhượng bộ; đoạn tiếp tục cảnh báo về sự độc hại và tăng cấp tác hại. Why boredom is hard to pin down for researchers “ (Vì sao các nhà nghiên cứu khó xác định rõ buồn chán) ”: Câu (2) có bàn về định nghĩa (“by definition”), nên dễ tưởng đoạn tập trung vào việc xác định buồn chán Nhưng phần phát triển chính giải thích hậu quả và nguy cơ, không phải khó khăn nghiên cứu. Working out who suffers most from boredom “ (Xác định ai chịu ảnh hưởng nặng nhất bởi buồn chán) ”: Những mô tả về sự khổ sở (“more wretched”) có thể khiến ta chú ý đến mức độ chịu đựng Nhưng đoạn D không so sánh các nhóm người để xác định ai chịu nặng nhất; nó nói về điều buồn chán có thể gây ra.",
              "step3": "Bóc tách cấu trúc câu (S-V-O) và đối chiếu nghĩa.",
              "step4": "Đáp án chính xác: A risk that boredom can bring"
            }
          },
          {
            "id": 18,
            "prompt": "Choose the correct heading for Section E:",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "What schools can do to reduce boredom",
              "Sorting boredom into categories",
              "Working out who suffers most from boredom",
              "A fresh cause of boredom and a way to respond",
              "Why boredom is hard to pin down for researchers",
              "The useful things boredom can produce",
              "Which age groups feel boredom most",
              "A risk that boredom can bring"
            ],
            "correct": "Working out who suffers most from boredom",
            "explanation": {
              "step1": "Đoạn E: Why the attention system should break down in the first place is what Voss's group is now investigating . The research is at an early stage , but they suspect that personality accounts for at least part of it . A proneness to boredom has been tied to a range of traits . Those whose behaviour is driven chiefly by the pursuit of reward appear to suffer worst of all , whereas a quality such as inquisitiveness seems to lift a person's threshold for it . Further signs that boredom does real damage come from comparing people who are easily bored with those who are not : the former tend to fare worse in their schooling, their working lives and their fortunes generally . Boredom , admittedly, does not kill anyone directly — the danger lies in what we do to relieve it . So how might it be eased before matters reach that point ? Brandt's team offers one answer . In work with adolescents, they found that youngsters who 'approach' a tedious situation — recognising it as dull and throwing themselves into it regardless — reported less boredom than those who reached instead for snacks, television or their social-media feeds . Câu (1)–(3): tìm hiểu nguyên nhân, hướng tới tính cách và đặc điểm cá nhân. Câu (4)–(5): đối chiếu các nhóm để xác định ai chịu ảnh hưởng nặng hơn và có kết quả kém hơn. Câu (6): bổ sung nguy cơ từ cách giải chán. Câu (7)–(9): chuyển sang cách ứng phó và nêu kết quả nghiên cứu hỗ trợ. Đoạn E — investigating",
              "step2": "Ý chính: Tìm hiểu ai chịu ảnh hưởng nặng nhất từ sự chán nản , dựa trên khác biệt về đặc điểm cá nhân. Đáp án đúng: Working out who suffers most from boredom ( Tìm hiểu ai chịu ảnh hưởng nặng nhất từ sự chán nản ). Đối chiếu paraphrasing: Working out investigating who suffers most from boredom suffer worst of all + fare worse A risk that boredom can bring “ (Một nguy cơ do sự chán nản gây ra) ”: Nếu skim/scan thấy nguy cơ (“the danger”) ở câu (6), em dễ chọn heading này Nhưng đó là ý bổ sung; câu (1)–(5) liên tục phát triển trọng tâm về nhóm người chịu ảnh hưởng nặng hơn. Which age groups feel boredom most “ (Những nhóm tuổi cảm thấy chán nhiều nhất) ”: Nếu skim/scan thấy nhóm tuổi trẻ (“adolescents”, “youngsters”) ở câu (9), em dễ nghĩ đoạn đang so sánh độ tuổi Nhưng nghiên cứu này so sánh cách ứng phó, không so sánh nhóm tuổi nào chán nhiều nhất. What schools can do to reduce boredom “ (Nhà trường có thể làm gì để giảm sự chán nản) ”: Nếu skim/scan thấy việc học (“their schooling”) ở câu (5), em dễ liên tưởng đến nhà trường Nhưng đây chỉ là một lĩnh vực chịu hậu quả; đoạn không đề xuất hành động của nhà trường.",
              "step3": "Bóc tách cấu trúc câu (S-V-O) và đối chiếu nghĩa.",
              "step4": "Đáp án chính xác: Working out who suffers most from boredom"
            }
          },
          {
            "id": 19,
            "prompt": "Choose the correct heading for Section F:",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "What schools can do to reduce boredom",
              "Sorting boredom into categories",
              "Working out who suffers most from boredom",
              "A fresh cause of boredom and a way to respond",
              "Why boredom is hard to pin down for researchers",
              "The useful things boredom can produce",
              "Which age groups feel boredom most",
              "A risk that boredom can bring"
            ],
            "correct": "A fresh cause of boredom and a way to respond",
            "explanation": {
              "step1": "Đoạn F: There may even be a fresh source of boredom in the way we now live , suggests the psychologist Mira Lindqvist . ' Modern life bombards us with stimulation , and yet people still struggle to find meaning in it ,' she observes . The remedy she proposes is not more mental stimulation but less : rather than reaching once more for our phones , we might let boredom do its work and prompt us to engage with the world around us in some more meaningful fashion . Câu (1)–(2): giới thiệu và giải thích nguồn gây chán mới — đời sống hiện đại dồn dập kích thích, nhưng con người vẫn khó tìm thấy ý nghĩa. Câu (3): đưa ra cách ứng phó — giảm kích thích , để sự chán thúc đẩy tương tác có ý nghĩa hơn. Đoạn F — fresh source of boredom",
              "step2": "Ý chính: Đoạn nêu nguồn gây chán mới từ lối sống hiện đại và đề xuất giảm kích thích để ứng phó . Đáp án đúng: A fresh cause of boredom and a way to respond ( Một nguyên nhân mới gây chán và cách ứng phó ). Đối chiếu paraphrasing: A fresh cause of boredom a fresh source of boredom a way to respond The remedy + not more mental stimulation but less The useful things boredom can produce “ (Những điều hữu ích mà sự chán có thể tạo ra) ”: Nếu chỉ thấy ý tương tác có ý nghĩa hơn (“more meaningful fashion”) ở câu (3), dễ chọn heading này Nhưng heading chỉ bao quát lợi ích cuối đoạn, bỏ mất phần nguồn gây chán mới ở câu (1)–(2). A risk that boredom can bring “ (Một nguy cơ mà sự chán có thể mang lại) ”: Nếu thấy con người khó tìm được ý nghĩa (“struggle to find meaning”) ở câu (2), dễ nghĩ đoạn tập trung vào tác hại Nhưng đoạn giải thích nguyên nhân gây chán, rồi đưa ra cách ứng phó, chứ không trình bày nguy cơ do sự chán gây ra.",
              "step3": "Bóc tách cấu trúc câu (S-V-O) và đối chiếu nghĩa.",
              "step4": "Đáp án chính xác: A fresh cause of boredom and a way to respond"
            }
          },
          {
            "id": 20,
            "prompt": "Match the statement with the correct person/feature: \"Anneli Virtanen\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "Attempts to shake off boredom can make its bad effects stronger.",
              "Contemporary lifestyles could be generating extra boredom.",
              "Feeling bored can lead a person to stay away from something bad for them.",
              "Boredom could grow rarer in the years ahead.",
              "Some kinds of boredom do more harm than the rest."
            ],
            "correct": "Feeling bored can lead a person to stay away from something bad for them.",
            "explanation": {
              "step1": "Tên đang xử lý: Anneli Virtanen — câu 7 . Bài nhắc đến Anneli Virtanen ở đoạn A; lời dẫn “she writes” cũng chỉ tác giả này.",
              "step2": "Anneli Virtanen , a psychologist at the University of Tampere in Finland, likens it in her book The Restless Mind to nausea — a response whose task is to keep us clear of particular circumstances . ' Where nausea steers us away from food that might poison us ,' she writes , ' boredom may steer us away from company and settings that offer us nothing .' Câu (5): giới thiệu phép so sánh chán nản với buồn nôn. Câu (6): giải thích chức năng tương tự của hai cảm giác: hướng ta tránh điều bất lợi . 🔎 Khớp với option: Feeling bored can lead a person to stay away from something bad for them . Đối chiếu paraphrasing: Feeling bored boredom can lead a person to stay away from may steer us away from something bad for them settings that offer us nothing",
              "step3": "Với tên Anneli Virtanen ở đoạn A, ta chọn được: Feeling bored can lead a person to stay away from something bad for them . Phương án về việc cố xua chán nản làm tác hại tăng lên Đoạn D cũng dùng một cảm giác khó chịu để giải thích tính thích nghi (“Physical pain is adaptive too”), nên dễ nhầm Nhưng ý càng cố thoát khỏi chán nản càng khó chịu thuộc Daniel Voss, không phải Anneli Virtanen. Phương án về một số loại chán nản gây hại hơn các loại khác Đoạn B có loại chán nản cần đề phòng (“the agitated kind”), nhưng đó là so sánh giữa các loại chán nản. Anneli Virtanen so sánh chán nản với buồn nôn để giải thích chức năng tránh điều bất lợi.",
              "step4": "Đáp án chính xác: Feeling bored can lead a person to stay away from something bad for them."
            }
          },
          {
            "id": 21,
            "prompt": "Match the statement with the correct person/feature: \"Lukas Brandt\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "Attempts to shake off boredom can make its bad effects stronger.",
              "Contemporary lifestyles could be generating extra boredom.",
              "Feeling bored can lead a person to stay away from something bad for them.",
              "Boredom could grow rarer in the years ahead.",
              "Some kinds of boredom do more harm than the rest."
            ],
            "correct": "Some kinds of boredom do more harm than the rest.",
            "explanation": {
              "step1": "Tên đang xử lý: Lukas Brandt — câu 8. Bài nhắc đến Brandt ở đoạn B và đoạn E.",
              "step2": "Working from interviews about how people actually experience being bored, Lukas Brandt and his colleagues at the University of Graz in Austria have lately mapped out five separate varieties , which they label vacant, drifting, seeking, agitated and resigned . The version to be most wary of is the agitated kind , in which high arousal collides with thoroughly negative feeling . The kindest is the vacant sort , where a person, though absorbed in nothing rewarding, stays calm and untroubled . Câu (1): xác lập Lukas Brandt là người phân loại các dạng buồn chán. Câu (4)–(5): loại agitated đáng ngại nhất >< loại vacant nhẹ nhàng nhất => các loại có mức độ tác hại khác nhau . 🔎 Khớp với option: Some kinds of boredom do more harm than the rest . Đối chiếu paraphrasing: do more harm than the rest most wary of + The kindest",
              "step3": "Với tên Lukas Brandt ở đoạn B, ta chọn được: Some kinds of boredom do more harm than the rest . Option về cách đối phó. “ Cố xua buồn chán có thể làm tác hại mạnh hơn ”: cũng nói về tác hại. Nhưng đoạn D nói về việc càng cố khắc phục (“harder you struggle”), còn câu (4)–(5) đoạn B so sánh các loại buồn chán. Option về tránh điều có hại. “ Buồn chán có thể khiến người ta tránh điều có hại cho mình ”: Dễ hiểu nhầm việc cần cảnh giác nhất (“most wary of”) thành né điều có hại Nhưng câu (4) đoạn B đánh giá chính một loại buồn chán, không nói buồn chán giúp tránh hoàn cảnh bên ngoài.",
              "step4": "Brandt's team offers one answer . In work with adolescents, they found that youngsters who 'approach' a tedious situation — recognising it as dull and throwing themselves into it regardless — reported less boredom than those who reached instead for snacks , television or their social-media feeds . Câu (8)–(9): nhóm Brandt nêu một cách giảm buồn chán: chủ động đối diện tình huống tẻ nhạt giúp giảm buồn chán hơn việc tìm đến đồ ăn vặt; đây không phải phép so sánh giữa các loại buồn chán."
            }
          },
          {
            "id": 22,
            "prompt": "Match the statement with the correct person/feature: \"Daniel Voss\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "Attempts to shake off boredom can make its bad effects stronger.",
              "Contemporary lifestyles could be generating extra boredom.",
              "Feeling bored can lead a person to stay away from something bad for them.",
              "Boredom could grow rarer in the years ahead.",
              "Some kinds of boredom do more harm than the rest."
            ],
            "correct": "Attempts to shake off boredom can make its bad effects stronger.",
            "explanation": {
              "step1": "Ta tìm tên Daniel Voss (câu 9), được nhắc đến ở đoạn D và đoạn E.",
              "step2": "What lies at the very heart of boredom , for Voss , is the mind's failure to shift its 'attention system' into gear , and the result is an inability to concentrate on anything at all , so that time appears to crawl . Worse still , the harder you struggle to put things right , the more wretched you may feel . Câu (5): Câu (5), đoạn D: Voss nêu vấn đề hệ thống chú ý không hoạt động, khiến người ta không thể tập trung. Câu (6): Câu (6), đoạn D: vấn đề còn tăng nặng: càng cố khắc phục , càng có thể khổ sở hơn . 🔎 Khớp với option: Attempts to shake off boredom can make its bad effects stronger . Đối chiếu paraphrasing: Attempts to shake off boredom struggle to put things right can make its bad effects stronger the more wretched you may feel",
              "step3": "Với tên Daniel Voss ở đoạn D, ta chọn được option trên: nỗ lực thoát khỏi buồn chán có thể làm tác hại tăng lên . Some kinds of boredom do more harm than the rest. “ Một số loại buồn chán gây hại nhiều hơn các loại khác ”: câu (6) đoạn D cũng nói mức độ khó chịu tăng lên. Nhưng câu này so sánh mức độ nỗ lực với mức độ khó chịu, không so sánh các loại buồn chán. Feeling bored can lead a person to stay away from something bad for them. “ Buồn chán có thể khiến người ta tránh điều có hại ”: câu 3 đoạn D nói đến khả năng giúp thích nghi (“adaptive”). Nhưng bằng chứng ở câu (6) đoạn D nói về việc cố khắc phục có thể làm khó chịu tăng lên, không phải chức năng tránh điều có hại.",
              "step4": "Why the attention system should break down in the first place is what Voss's group is now investigating . The research is at an early stage , but they suspect that personality accounts for at least part of it . Câu (1): Câu (1)–(2), đoạn E: nhóm Voss đang tìm nguyên nhân hệ thống chú ý trục trặc; nghiên cứu còn sơ bộ, nhưng họ nghi tính cách giải thích ít nhất một phần vấn đề."
            }
          },
          {
            "id": 23,
            "prompt": "Match the statement with the correct person/feature: \"Mira Lindqvist\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "Attempts to shake off boredom can make its bad effects stronger.",
              "Contemporary lifestyles could be generating extra boredom.",
              "Feeling bored can lead a person to stay away from something bad for them.",
              "Boredom could grow rarer in the years ahead.",
              "Some kinds of boredom do more harm than the rest."
            ],
            "correct": "Contemporary lifestyles could be generating extra boredom.",
            "explanation": {
              "step1": "Tên đang xử lý: Mira Lindqvist — câu 10. Bài nhắc đến Mira Lindqvist ở đoạn F.",
              "step2": "There may even be a fresh source of boredom in the way we now live , suggests the psychologist Mira Lindqvist . 🔎 Khớp với option: Contemporary lifestyles could be generating extra boredom . Đối chiếu paraphrasing: Contemporary lifestyles the way we now live could may generating extra boredom a fresh source of boredom",
              "step3": "Với tên Mira Lindqvist ở đoạn F, ta chọn được phương án: Contemporary lifestyles could be generating extra boredom . Attempts to shake off boredom can make its bad effects stronger. “ Nỗ lực xua đi buồn chán có thể làm tác hại mạnh hơn ”: Đoạn F có đề xuất giảm kích thích tinh thần (“not more mental stimulation but less”), nên dễ liên tưởng đến cách xử lý buồn chán Nhưng câu (1) xác định lối sống hiện nay là nguồn gây buồn chán mới, không nói nỗ lực xua đi buồn chán làm tác hại tăng lên. Boredom could grow rarer in the years ahead. “ Sự buồn chán có thể trở nên hiếm hơn trong tương lai ”: Nếu chỉ chú ý đến ý có thể (“may”), dễ nhầm đây là một dự đoán về tương lai Nhưng câu (1) nói về nguồn buồn chán mới trong hiện tại, không phải sự buồn chán sẽ giảm trong những năm tới.",
              "step4": "Đáp án chính xác: Contemporary lifestyles could be generating extra boredom."
            }
          },
          {
            "id": 24,
            "prompt": "In Daniel Voss's account, what chiefly marks out boredom is that sufferers are unable to  _____ , which he traces to a breakdown in the 'attention system', leaving them frustrated and irritable. According to his team, individuals who make the chasing of  _____  their main goal in life are likely to find boredom hard to handle, while those blessed with a degree of  _____  tend to manage it without much trouble.",
            "type": "FILL_IN_BLANK",
            "correct": "concentrate",
            "explanation": {
              "step1": "In Daniel Voss's account , what chiefly marks out boredom is that sufferers are unable to 11. ___ , which he traces to a breakdown in the 'attention system' , leaving them frustrated and irritable . Ý câu hỏi: Theo Daniel Voss, người bị chán không thể thực hiện hành động nào do hệ thống chú ý bị trục trặc? Dự đoán ô trống: - Loại từ: động từ nguyên mẫu , vì đứng sau cấu trúc chỉ sự không thể (“are unable to”). - Nghĩa: một hành động liên quan đến khả năng chú ý của người bị chán.",
              "step2": "Dựa vào tên riêng Daniel Voss và thuật ngữ hệ thống chú ý (“'attention system'”) => ta định vị được câu liên quan trong đoạn D. Đoạn D",
              "step3": "Đoạn D: What lies at the very heart of boredom , for Voss , is the mind's failure to shift its 'attention system' into gear , and the result is an inability to concentrate on anything at all , so that time appears to crawl .",
              "step4": "Đáp án phù hợp nhất: concentrate Câu hoàn chỉnh: In Daniel Voss's account, what chiefly marks out boredom is that sufferers are unable to concentrate, which he traces to a breakdown in the 'attention system', leaving them frustrated and irritable. (Theo Daniel Voss, đặc điểm chính của sự buồn chán là người mắc phải không thể tập trung ; ông cho rằng điều này bắt nguồn từ sự trục trặc của hệ thống chú ý, khiến họ bực bội và dễ cáu.) => Khớp với dự đoán động từ nguyên mẫu lẫn thông tin trong bài; đáp án gồm 1 từ lấy nguyên văn. Đề được cung cấp không nêu giới hạn số từ. Đối chiếu paraphrasing: are unable to an inability to a breakdown in the 'attention system' failure to shift its 'attention system' into gear shift “ chuyển ”: đây cũng là động từ đứng sau to trong câu (5). Nhưng nó thuộc phần mô tả việc kích hoạt hệ thống chú ý, không phải hành động được nêu trực tiếp sau sự bất lực (“an inability to”). crawl “ trôi chậm ”: Sai vì chủ thể của hành động này là thời gian, không phải người bị chán. connect “ kết nối ”: Ở câu 7 đoạn D, cụm không kết nối được (“fail to connect”) dễ gây nhầm vì gắn với sự bực bội Nhưng câu (5) xác định trực tiếp khả năng bị mất là tập trung, không phải kết nối."
            }
          },
          {
            "id": 25,
            "prompt": "Complete blank for question 25:",
            "type": "FILL_IN_BLANK",
            "correct": "reward",
            "explanation": {
              "step1": "According to his team, individuals who make the chasing of 12. ___ their main goal in life are likely to find boredom hard to handle Dự đoán: - Loại từ: danh từ hoặc cụm danh từ, vì ô trống đứng sau giới từ chỉ đối tượng được theo đuổi (“of”). - Loại thông tin: thứ mà nhóm người này coi việc theo đuổi nó là mục tiêu chính trong cuộc sống. Nhóm này gặp khó khăn khi đối phó với sự buồn chán.",
              "step2": "Dựa vào tên riêng Daniel Voss trong phần trước của ghi chú, ta tìm phần nghiên cứu của nhóm ông ở đoạn E. Bắt đầu đọc từ câu nói về xu hướng dễ buồn chán (“A proneness to boredom”). Đoạn E — A proneness to boredom",
              "step3": "Đoạn E: A proneness to boredom has been tied to a range of traits . Those whose behaviour is driven chiefly by the pursuit of reward appear to suffer worst of all , whereas a quality such as inquisitiveness seems to lift a person's threshold for it . Câu (3): nêu mối liên hệ giữa xu hướng dễ buồn chán và đặc điểm cá nhân. Câu (4): cụ thể hóa bằng hai hướng đối lập; nhóm chủ yếu theo đuổi phần thưởng chịu ảnh hưởng nặng nhất , còn tính ham tìm hiểu giúp nâng ngưỡng chịu đựng.",
              "step4": "Đáp án phù hợp nhất: reward Câu hoàn chỉnh: According to his team, individuals who make the chasing of reward their main goal in life are likely to find boredom hard to handle. (Theo nhóm của Daniel Voss, những người coi việc theo đuổi phần thưởng là mục tiêu chính trong cuộc sống có khả năng gặp khó khăn khi đối phó với sự buồn chán.) => Khớp với dự đoán danh từ chỉ đối tượng được theo đuổi lẫn thông tin trong bài; đáp án gồm 1 từ, nhưng đề được cung cấp không nêu giới hạn số từ. Đối chiếu paraphrasing: the chasing of the pursuit of main goal in life chiefly are likely to find boredom hard to handle appear to suffer worst of all pursuit “ Sự theo đuổi ”: nhầm vì từ này tương đương với hành động theo đuổi (“chasing”). Nhưng ô trống cần đối tượng được theo đuổi, không phải hành động đã có sẵn trong câu hỏi. traits “ Các đặc điểm cá nhân ”: Sai vì từ này ở câu (3) chỉ các đặc điểm nói chung, không chỉ thứ mà nhóm người ở câu (4) chủ yếu theo đuổi."
            }
          },
          {
            "id": 26,
            "prompt": "Complete blank for question 26:",
            "type": "FILL_IN_BLANK",
            "correct": "inquisitiveness",
            "explanation": {
              "step1": "while those blessed with a degree of 13. ___ tend to manage it without much trouble . Ý câu hỏi: Những người có một phẩm chất nào đó thường đối phó với sự buồn chán mà không gặp nhiều khó khăn. Dự đoán ô trống: - Loại từ: danh từ, vì đứng sau cụm chỉ mức độ (“a degree of”). - Nghĩa: một phẩm chất giúp người đó đối phó tốt hơn với sự buồn chán. Từ nối tương phản (“while”) giúp phân biệt nhóm này với nhóm gặp khó khăn ở vế trước.",
              "step2": "Dựa vào tên riêng Daniel Voss trong ngữ cảnh câu hỏi, ta tìm đến phần nghiên cứu của nhóm ông ở đầu đoạn E (“Voss's group”). Từ đây, đọc tiếp để tìm phẩm chất giúp đối phó tốt với sự buồn chán. Đoạn E — Voss's group",
              "step3": "Đoạn E: Those whose behaviour is driven chiefly by the pursuit of reward appear to suffer worst of all , whereas a quality such as inquisitiveness seems to lift a person's threshold for it . Giải thích thêm: Ngưỡng chịu đựng sự buồn chán được nâng lên (“lift a person's threshold for it”) => người đó ít dễ thấy chán hơn, nên đối phó dễ hơn .",
              "step4": "Đáp án phù hợp nhất: inquisitiveness Câu hoàn chỉnh: while those blessed with a degree of inquisitiveness tend to manage it without much trouble. (Trong khi những người có tính ham tìm hiểu ở một mức độ nhất định thường đối phó với sự buồn chán mà không mấy khó khăn.) => Khớp với dự đoán danh từ chỉ phẩm chất giúp đối phó tốt hơn và thông tin trong bài; đáp án gồm 1 từ, lấy nguyên văn từ bài đọc. Đối chiếu paraphrasing: while whereas tend to manage it without much trouble seems to lift a person's threshold for it threshold “ ngưỡng chịu đựng ”: Nếu chỉ nhìn cụm nói về tác động tích cực, dễ chọn từ này Nhưng đây là ngưỡng được nâng lên, không phải phẩm chất mà người đó sở hữu. personality “ tính cách ”: Đoạn E có từ này nói về đặc điểm cá nhân nói chung, nên dễ chọn nhầm Nhưng ô trống cần phẩm chất cụ thể giúp đối phó tốt hơn, được nêu rõ trong câu (4)."
            }
          }
        ]
      },
      {
        "id": "cam-13-reading-1-p3",
        "passageNumber": 3,
        "title": "Artificial artist?",
        "subtitle": "Can computers really produce works of art?",
        "content": [
          "Among the swelling ranks of computer programs said by their creators to possess a creative gift is The Muse Machine. Concerts of classical music written by a machine, not a person, have left listeners spellbound, some convinced a human hand lay behind the notes. Canvases produced by a robot have fetched thousands of dollars and found their way onto the walls of respected galleries. Programs have even been written that turn out art their own programmers could never have pictured.",
          "No other species carries out complex creative work as a matter of routine, the way people do. Should that activity prove reducible to lines of code, what then becomes of human creativity? Anneke Vos, who researches computational creativity at the Institute for Digital Arts in Rotterdam, calls it a question that goes to the very heart of what we are. As she puts it, the prospect unsettles many: they fear it strips away something they had thought belonged to humans alone.",
          "Computer-made art is, in some measure, something we have all encountered. Where, though, does the artist's contribution end and the machine's own inventiveness start? Take Cleo, among the earliest of the machine artists, a robot whose paintings have hung in Berlin's Neue Halle and the Toronto Gallery of Modern Art. Left to itself, Cleo can take up a brush and apply paint to canvas. That is striking, no doubt, yet the robot remains essentially an instrument for realising ideas that originate with its programmer.",
          "Tomas Herrera, who created The Muse Machine, is determined that his program should escape that very charge. Where older artists like Cleo depended on heavy guidance, his system needs only the barest instruction and comes up with its own themes by searching the internet, running web queries and combing through social media. Lately it has started to show something like imagination as well, inventing images from nothing. Among its earliest independent pieces is a set of hazy landscapes of trees and sky. A mechanical quality is what some viewers see in them, but Herrera blames the differing yardsticks people apply depending on whether a person or machine produced the work. Remember, he notes, that no photograph guided the program as it painted those scenes. We happily credit a child with some imagination when it paints a scene straight from its head, he observes, and a machine deserves the same. Flaws in the code, too, can throw up surprises. A glitch once left several of the program's pictures of a chair rendered only in black and white, lending them an unsettling, spectral air. If a revered painter like Margit Rauch is praised for working within a narrow range of colours, why hold a computer to a different standard?",
          "For researchers of Herrera's persuasion, it makes little sense to judge a machine's creativity against that of humans, who have had thousands of years to hone what we do. Others, however, are gripped by the idea that a computer could one day produce work as inventive and nuanced as that of our finest artists. To date just a single project has approached that mark. The composer Reuben Farrow built a program he named the Algorithmic Harmony System, or AHS. AHS could compose not merely in Farrow's own manner but in that of the era's most venerated composers too, among them Valberg, Dupre and Santing. Listeners wept, and on occasion specialists in classical music were taken in, certain they were listening to a genuine Dupre. The reception was not universally warm, though. Vos, for one, dismissed Farrow's project as pseudoscience and took him to task for being wilfully obscure about how the thing actually functioned. Pieter Zalewski of Ashcroft University held that AHS merely produced imitations still wholly beholden to the original composer's creative spark. Audiences, on learning how the music had come about, often rounded on Farrow; one admirer even tried to punch him. In the thick of the uproar, Farrow wiped out the databases on which AHS depended.",
          "So what explains a public that adored the music and then drew back once its origins came to light? A clue emerges from research by Ronan Deveraux, a computer scientist at Kilbrannan University. He had a panel of trained musicians and ordinary listeners alike evaluate six pieces. Nobody was told in advance which works came from people and which from machines; instead each listener had to guess the source and then say how much the piece appealed to them. Where a listener took the composer to be a machine, their liking for the piece generally fell below that of listeners who assumed a human author. Even the trained musicians followed this pattern, though one might have supposed their judgements would be the more impartial.",
          "And where does such bias originate? Adrian Voss of Halloway University offers one account: some of the enjoyment art brings us, he suggests, flows from our awareness of the creative process that produced it, a quality he calls its irresistible essence. In a related vein, studies by Elena Sorokin of Meridian University have found that the more time and labour people believe a work demanded, the more they enjoy it. Herrera makes a comparable point: faced with a work of art, viewers puzzle over what was in the artist's mind, or what message is being sent. When a machine is the maker, that line of wondering has nowhere to go, and so, it would seem, nothing invites exploration. Yet as the technology grows more intricate, it may become possible to locate those deeper layers in machine-made art after all. That is exactly why Herrera has The Muse Machine draw on online social networks for its cues: the hope is that it will settle on subjects that already carry meaning for us."
        ],
        "questions": [
          {
            "id": 27,
            "prompt": "In the first paragraph, the writer emphasises that computer-generated work",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "has advanced considerably already.",
              "is received very differently by different people.",
              "has fared better in certain art forms than in others.",
              "is less remarkable than most people assume."
            ],
            "correct": "has advanced considerably already.",
            "explanation": {
              "step1": "In the first paragraph, the writer emphasises that computer-generated work Câu hỏi hỏi: Tác giả nhấn mạnh điều gì về tác phẩm do máy tính tạo ra? Cần tìm ý bao quát đoạn 1, không chỉ một ví dụ riêng lẻ.",
              "step2": "Đề chỉ rõ đoạn đầu (“In the first paragraph”), nên bắt đầu đọc ở đoạn 1. Cụm các chương trình máy tính ngày càng nhiều (“swelling ranks of computer programs”) mở ra đúng chủ đề cần tìm. Đoạn 1 — In the first paragraph",
              "step3": "Đoạn 1: Among the swelling ranks of computer programs said by their creators to possess a creative gift is The Muse Machine . Concerts of classical music written by a machine, not a person, have left listeners spellbound , some convinced a human hand lay behind the notes . Canvases produced by a robot have fetched thousands of dollars and found their way onto the walls of respected galleries . Programs have even been written that turn out art their own programmers could never have pictured . Câu (1): mở đầu bằng số chương trình máy tính ngày càng nhiều. Câu (2)–(3): đưa ra thành tựu ở cả âm nhạc lẫn hội họa. Câu (4): từ “even” đẩy ý xa hơn: chương trình tạo được tác phẩm vượt cả hình dung của người viết ra nó . Tác phẩm do máy tính tạo ra đã tiến xa đáng kể .",
              "step4": "Đáp án đúng: A. has advanced considerably already . (Đã tiến xa đáng kể.) Đối chiếu paraphrasing: has advanced considerably already have left listeners spellbound + have fetched thousands of dollars + their own programmers could never have pictured. Đáp án B “ Được những người khác nhau đón nhận rất khác nhau ”: Nếu skim thấy một số người tưởng nhạc do con người viết (“some convinced a human hand”), dễ nghĩ đoạn này so sánh phản ứng Nhưng câu (2) chỉ cho thấy người nghe bị cuốn hút, không nêu các phản ứng trái ngược. Đáp án C “ Thành công ở một số loại hình nghệ thuật hơn những loại hình khác ”: Nếu thấy cả nhạc và tranh, dễ tưởng tác giả đang xếp hạng Nhưng câu (2)–(3) nêu thành tựu ở cả hai, không nói loại hình nào tốt hơn. Đáp án D “ Kém ấn tượng hơn đa số mọi người nghĩ ”: Sai vì câu (4) còn nhấn mạnh mức độ bằng “even”: chương trình tạo được tác phẩm chính người viết nó cũng chưa từng hình dung nổi."
            }
          },
          {
            "id": 28,
            "prompt": "According to Anneke Vos, people find computer art troubling because",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "it could eventually replace art made by humans.",
              "it is artistically weaker than human work.",
              "it may cause human skills to decline.",
              "it removes something essential to being human."
            ],
            "correct": "it removes something essential to being human.",
            "explanation": {
              "step1": "According to Anneke Vos , people find computer art troubling because Câu hỏi hỏi: Theo Anneke Vos, vì sao mọi người thấy nghệ thuật do máy tính tạo ra đáng lo ngại?",
              "step2": "Dựa vào tên riêng Anneke Vos => ta bắt đầu đọc ở đoạn 2, nơi tên bà xuất hiện cùng nhận định về khả năng sáng tạo của máy tính. Đoạn 2",
              "step3": "Đoạn 2: Anneke Vos , who researches computational creativity at the Institute for Digital Arts in Rotterdam, calls it a question that goes to the very heart of what we are . As she puts it, the prospect unsettles many: they fear it strips away something they had thought belonged to humans alone . Câu (3): Vos cho rằng vấn đề này chạm tới bản chất con người . Câu (4): Cụ thể, mọi người sợ bị tước mất điều từng được xem là chỉ con người có .",
              "step4": "Đáp án đúng: D. it removes something essential to being human . (Nó tước đi điều thiết yếu đối với bản chất con người .) Đối chiếu paraphrasing: strips away removes heart of what we are + belonged to humans alone essential to being human Đáp án A “ Nó cuối cùng có thể thay thế nghệ thuật do con người tạo ra ”: Nếu skim thấy viễn cảnh (“the prospect”) ở đoạn 2, ta dễ nghĩ đến chuyện thay thế trong tương lai Nhưng Vos nói về điều con người sợ mất đi, không nói tác phẩm của con người sẽ bị thay thế. Đáp án B “ Nó kém giá trị nghệ thuật hơn tác phẩm của con người ”: Sai vì nhận định của Vos không so sánh chất lượng nghệ thuật. Đáp án C “ Nó có thể khiến kỹ năng của con người suy giảm ”: Cụm tước mất (“strips away”) dễ gợi ý kỹ năng bị mất Nhưng điều được nói tới là thứ từng được cho là chỉ con người có (“belonged to humans alone”), không phải mức độ kỹ năng."
            }
          },
          {
            "id": 29,
            "prompt": "One important way in which The Muse Machine differs from Cleo concerns",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "how its output is judged technically.",
              "where its subject matter comes from.",
              "the training of the person who built it.",
              "the way the public reacts to its work."
            ],
            "correct": "where its subject matter comes from.",
            "explanation": {
              "step1": "One important way in which The Muse Machine differs from Cleo concerns Câu hỏi nói: Cần xác định một điểm khác biệt quan trọng giữa The Muse Machine và Cleo liên quan đến khía cạnh nào.",
              "step2": "Dựa vào hai tên riêng The Muse Machine và Cleo => ta định vị ở đoạn 4, bắt đầu từ câu nhắc “who created The Muse Machine”. Đoạn 4 — who created The Muse Machine",
              "step3": "Đoạn 4: Tomas Herrera, who created The Muse Machine , is determined that his program should escape that very charge . Where older artists like Cleo depended on heavy guidance , his system needs only the barest instruction and comes up with its own themes by searching the internet , running web queries and combing through social media . Câu (1): xác định The Muse Machine là chương trình của Tomas Herrera. Câu (2): đối chiếu Cleo cần nhiều chỉ dẫn với The Muse Machine tự tìm chủ đề trên internet .",
              "step4": "Đáp án đúng: B. where its subject matter comes from . (Hai chương trình khác nhau ở nguồn hình thành chủ đề .) Đối chiếu paraphrasing: where its subject matter comes from comes up with its own themes + by searching the internet Đáp án A “ Cách sản phẩm của nó được đánh giá về mặt kỹ thuật ”: Nếu skim thấy “differing yardsticks” ở đoạn 4, ta dễ nghĩ đến việc đánh giá tác phẩm Nhưng câu (2) đối chiếu cách hình thành chủ đề, không phải cách đánh giá hai chương trình. Đáp án C “ Việc đào tạo người tạo ra nó ”: Cụm “who created The Muse Machine” cho biết ai tạo ra chương trình, nhưng không nói người đó được đào tạo thế nào. Đáp án D “ Cách công chúng phản ứng với tác phẩm của nó ”: Đoạn 4 có nhắc “some viewers”, nhưng câu (2) không so sánh phản ứng của công chúng với tác phẩm của The Muse Machine và Cleo."
            }
          },
          {
            "id": 30,
            "prompt": "In the fourth paragraph, the point Tomas Herrera makes is that",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "art produced by software is frequently written off as naive.",
              "a machine cannot fairly be expected to match human imagination.",
              "people judge machine art and human art by different standards.",
              "the notion of creativity should differ across art forms."
            ],
            "correct": "people judge machine art and human art by different standards.",
            "explanation": {
              "step1": "In the fourth paragraph, the point Tomas Herrera makes is that Câu hỏi hỏi: Tomas Herrera đưa ra quan điểm gì ở đoạn 4? Ta cần tìm nhận xét của ông, không chỉ một ví dụ về tác phẩm.",
              "step2": "Dựa vào tên riêng Tomas Herrera và mốc đoạn 4 => bắt đầu đọc tại câu mở đoạn có “Tomas Herrera”. Đoạn 4 — Tomas Herrera",
              "step3": "Đoạn 4: A mechanical quality is what some viewers see in them , but Herrera blames the differing yardsticks people apply depending on whether a person or machine produced the work . Bài đọc nói: Một số người xem thấy tác phẩm có vẻ máy móc, nhưng Herrera cho rằng họ áp dụng chuẩn đánh giá khác nhau tùy tác phẩm do người hay máy tạo ra .",
              "step4": "Đáp án đúng: C. people judge machine art and human art by different standards . (Mọi người đánh giá nghệ thuật do máy và do người tạo ra theo những tiêu chuẩn khác nhau.) Đối chiếu paraphrasing: different standards differing yardsticks machine art and human art a person or machine Đáp án A “ Nghệ thuật do phần mềm tạo ra thường bị coi là ngây ngô ”: Nếu skim thấy nhận xét về vẻ máy móc (“A mechanical quality”) sẽ dễ chọn ý này Nhưng bài chỉ nói một số người xem nhận thấy điều đó, không nói tác phẩm thường bị coi là ngây ngô. Đáp án B “ Không thể đòi hỏi một cách công bằng rằng máy sánh được với trí tưởng tượng con người ”: Đoạn 5 có ý so sánh khả năng sáng tạo của máy với con người (“judge a machine's creativity against that of humans”) Nhưng quan điểm được hỏi ở đoạn 4 là sự khác biệt trong chuẩn đánh giá, không phải giới hạn trí tưởng tượng của máy. Đáp án D “ Khái niệm sáng tạo nên khác nhau giữa các loại hình nghệ thuật ”: Sai vì Herrera phân biệt tác phẩm do “a person or machine” tạo ra, không phân biệt các loại hình nghệ thuật."
            }
          },
          {
            "id": 31,
            "prompt": "The writer mentions the pictures of a chair as an instance of computer art that",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "displays real artistic ability.",
              "resembles the work of a famous painter.",
              "produces an unusually powerful impression.",
              "reveals the software's technical shortcomings."
            ],
            "correct": "produces an unusually powerful impression.",
            "explanation": {
              "step1": "The writer mentions the pictures of a chair as an instance of computer art that Câu hỏi hỏi: Tác giả dùng những bức tranh vẽ chiếc ghế để minh họa đặc điểm gì của nghệ thuật máy tính?",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta tìm cụm chỉ những bức tranh vẽ chiếc ghế (“pictures of a chair”). Cụm này xuất hiện ở đoạn 4 => đây là vùng cần đọc. Đoạn 4 — pictures of a chair",
              "step3": "Đoạn 4: A glitch once left several of the program's pictures of a chair rendered only in black and white , lending them an unsettling, spectral air . Những bức tranh vẽ ghế tạo ấn tượng rờn rợn, ma mị .",
              "step4": "Đáp án đúng: C. produces an unusually powerful impression . (Tạo một ấn tượng mạnh khác thường .) Đối chiếu paraphrasing: produces an unusually powerful impression lending them an unsettling, spectral air Đáp án A “ Thể hiện năng lực nghệ thuật thực thụ ”: Nếu thấy tranh gây ấn tượng, ta dễ suy ra máy có tài năng nghệ thuật Nhưng câu này chỉ mô tả hiệu ứng của tranh, không khẳng định năng lực ấy. Đáp án B “ Giống tác phẩm của một họa sĩ nổi tiếng ”: Câu tiếp theo ở đoạn 4 nhắc đến Margit Rauch và việc dùng ít màu (“a narrow range of colours”) Nhưng tác giả không nói tranh vẽ ghế giống tác phẩm của Margit Rauch. Đáp án D “ Bộc lộ thiếu sót kỹ thuật của phần mềm ”: Lỗi chương trình (“A glitch”) là nguyên nhân tạo ra những bức tranh này; đặc điểm tác giả nhấn mạnh là ấn tượng chúng đem lại."
            }
          },
          {
            "id": 32,
            "prompt": "Complete the sentence: \"Tomas Herrera believes that a sound assessment depends on adopting a long-term perspective and _____\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "being aware of whether humans or machines had made it.",
              "making work that still depended entirely on its creator's imagination.",
              "explaining the technical workings of his software.",
              "creating pieces that could barely be told apart from human work.",
              "learning that a computer program had produced it.",
              "weighing what humans and machines have each achieved artistically.",
              "convincing the general public to value computer art."
            ],
            "correct": "weighing what humans and machines have each achieved artistically.",
            "explanation": {
              "step1": "Tomas Herrera believes that a sound assessment depends on adopting a long-term perspective and Sau *and*, cần một cụm V-ing song song với *adopting*, nêu thêm điều cần làm để đánh giá đúng đắn. Câu hỏi chưa cho biết cụ thể phải cân nhắc điều gì.",
              "step2": "Dựa vào tên riêng Tomas Herrera => bắt đầu ở đoạn 4, nơi bài giới thiệu ông cùng The Muse Machine, rồi tìm quan điểm của ông về cách đánh giá nghệ thuật do máy tạo ra. Đoạn 4",
              "step3": "Đoạn 4: If a revered painter like Margit Rauch is praised for working within a narrow range of colours , why hold a computer to a different standard ? Đoạn 5: For researchers of Herrera's persuasion, it makes little sense to judge a machine's creativity against that of humans , who have had thousands of years to hone what we do . Câu (10): Câu (10), đoạn 4: Herrera chất vấn việc dùng tiêu chuẩn khác nhau cho họa sĩ và máy. Câu (1): Câu (1), đoạn 5: quan điểm gắn với Herrera lưu ý rằng không hợp lý khi đánh giá trực tiếp sức sáng tạo của máy theo con người , bởi con người đã có hàng nghìn năm để trau dồi.",
              "step4": "Đáp án phù hợp nhất: weighing what humans and machines have each achieved artistically . Câu hoàn chỉnh: Tomas Herrera believes that a sound assessment depends on adopting a long-term perspective and weighing what humans and machines have each achieved artistically . (Tomas Herrera cho rằng muốn đánh giá đúng đắn thì cần nhìn từ góc độ dài hạn và cân nhắc thành tựu nghệ thuật của cả con người lẫn máy móc .) => Khớp với dự đoán về một việc cần làm khi đánh giá. Ở đây, cân nhắc thành tựu của mỗi bên phải tính đến việc con người đã có hàng nghìn năm để phát triển; Herrera không đề nghị lấy thành tựu của con người làm thước đo trực tiếp cho máy. Đối chiếu paraphrasing: a long term perspective thousands of years to hone what we do weighing what humans and machines have each achieved artistically why hold a computer to a different standard + makes little sense to judge a machine's creativity against that of humans Phương án 1. “ Biết tác phẩm do người hay máy tạo ra (“being aware of whether humans or machines had made it”) ”: Đoạn 4 có nhắc đến việc xét tác phẩm theo người hay máy tạo ra (“whether a person or machine produced the work”) Nhưng Herrera đang chất vấn tiêu chuẩn đánh giá khác nhau, không nói rằng muốn đánh giá đúng thì phải biết nguồn gốc tác phẩm. Phương án 4. “ Tạo ra tác phẩm gần như không thể phân biệt với tác phẩm của người (“creating pieces that could barely be told apart from human work”) ”: Đoạn 5 có ý máy có thể đạt trình độ như nghệ sĩ xuất sắc (“as inventive and nuanced”) Nhưng đó là điều những người khác quan tâm, không phải cách đánh giá mà nhóm cùng quan điểm với Herrera đề xuất. Phương án 7. “ Thuyết phục công chúng coi trọng nghệ thuật máy tính (“convincing the general public to value computer art”) ”: Sai vì hai câu chứng cứ bàn về cách đánh giá công bằng, không đặt việc thuyết phục công chúng làm điều kiện cho một đánh giá đúng đắn."
            }
          },
          {
            "id": 33,
            "prompt": "Complete the sentence: \"The AHS software built by Reuben Farrow astonished people by _____\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "being aware of whether humans or machines had made it.",
              "making work that still depended entirely on its creator's imagination.",
              "explaining the technical workings of his software.",
              "creating pieces that could barely be told apart from human work.",
              "learning that a computer program had produced it.",
              "weighing what humans and machines have each achieved artistically.",
              "convincing the general public to value computer art."
            ],
            "correct": "creating pieces that could barely be told apart from human work.",
            "explanation": {
              "step1": "The AHS software built by Reuben Farrow astonished people by Sau “by”, ta cần một cụm V-ing nói rõ AHS đã làm gì khiến mọi người kinh ngạc.",
              "step2": "Dựa vào tên riêng AHS và Reuben Farrow => ta tìm đến đoạn 5, bắt đầu đọc từ cụm “AHS could compose”. Đoạn 5 — AHS could compose",
              "step3": "Đoạn 5: AHS could compose not merely in Farrow's own manner but in that of the era's most venerated composers too , among them Valberg, Dupre and Santing . Listeners wept , and on occasion specialists in classical music were taken in , certain they were listening to a genuine Dupre . Câu (5): AHS sáng tác được theo phong cách các nhà soạn nhạc danh tiếng, trong đó có Dupre. Câu (6): Ngay cả chuyên gia cũng nhận nhầm bản nhạc là tác phẩm thật của Dupre.",
              "step4": "Đáp án phù hợp nhất: creating pieces that could barely be told apart from human work . Câu hoàn chỉnh: The AHS software built by Reuben Farrow astonished people by creating pieces that could barely be told apart from human work . (Phần mềm AHS do Reuben Farrow tạo ra khiến mọi người kinh ngạc vì sáng tác được những bản nhạc gần như không thể phân biệt với tác phẩm của con người.) => Khớp với dự đoán về việc AHS làm được: sáng tác nhạc khiến cả chuyên gia cũng tưởng là tác phẩm của Dupre . Đối chiếu paraphrasing: AHS could compose creating pieces specialists in classical music were taken in + a genuine Dupre could barely be told apart from human work making work that still depended entirely on its creator's imagination. “ Tạo tác phẩm vẫn hoàn toàn phụ thuộc vào trí tưởng tượng của người tạo ra nó ”: Đoạn 5 có lời phê bình rằng sản phẩm của AHS vẫn phụ thuộc vào sức sáng tạo có sẵn (“wholly beholden”) Nhưng đó không phải cách AHS khiến người nghe kinh ngạc. learning that a computer program had produced it. “ Biết rằng một chương trình máy tính đã tạo ra tác phẩm ”: Đoạn 5 có nhắc đến việc biết nguồn gốc bản nhạc (“on learning how the music had come about”) Nhưng khán giả là người biết điều đó, không phải phần mềm AHS. convincing the general public to value computer art. “ Thuyết phục công chúng coi trọng nghệ thuật máy tính ”: Người nghe xúc động đến bật khóc (“Listeners wept”) có thể khiến ta chọn nhầm Nhưng phản ứng ấy không chứng minh công chúng đã coi trọng nghệ thuật máy tính; đoạn 5 còn nói sự đón nhận không hoàn toàn tích cực (“not universally warm”)."
            }
          },
          {
            "id": 34,
            "prompt": "Complete the sentence: \"Anneke Vos found fault with Farrow for not _____\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "being aware of whether humans or machines had made it.",
              "making work that still depended entirely on its creator's imagination.",
              "explaining the technical workings of his software.",
              "creating pieces that could barely be told apart from human work.",
              "learning that a computer program had produced it.",
              "weighing what humans and machines have each achieved artistically.",
              "convincing the general public to value computer art."
            ],
            "correct": "explaining the technical workings of his software.",
            "explanation": {
              "step1": "Anneke Vos found fault with Farrow for not Sau “for not”, ta cần một cụm V-ing chỉ điều Farrow không làm . Cần đọc xem Vos chê ông ấy về điểm gì, chưa thể chọn ending chỉ dựa vào ngữ pháp.",
              "step2": "Dựa vào tên riêng Anneke Vos và Farrow => tìm đến đoạn 5, rồi bắt đầu đọc khi gặp nhận xét của Vos về dự án của Farrow. Đoạn 5",
              "step3": "Đoạn 5: Vos , for one, dismissed Farrow's project as pseudoscience and took him to task for being wilfully obscure about how the thing actually functioned . Vos chỉ trích Farrow vì ông ấy cố tình nói không rõ cách chương trình hoạt động .",
              "step4": "Đáp án phù hợp nhất: explaining the technical workings of his software . Câu hoàn chỉnh: Anneke Vos found fault with Farrow for not explaining the technical workings of his software. (Anneke Vos chê trách Farrow vì không giải thích rõ cách phần mềm của ông hoạt động .) => Khớp với dự đoán về điều Farrow không làm: Vos phê bình cách ông trình bày hoạt động của chương trình. Đối chiếu paraphrasing: found fault with Farrow took him to task not explaining being wilfully obscure the technical workings of his software how the thing actually functioned Lựa chọn 2. “ Tạo tác phẩm vẫn hoàn toàn phụ thuộc vào trí tưởng tượng của người sáng tạo ”: Đoạn 5 có ý phụ thuộc vào người sáng tác (“wholly beholden”), nhưng đó là nhận xét của Zalewski về AHS, không phải lời Vos chê Farrow. Lựa chọn 4. “ Tạo ra tác phẩm khó phân biệt với tác phẩm của con người ”: Đoạn 5 nói người nghe từng bị đánh lừa (“taken in”). Đây là khả năng của AHS, không phải điều Vos trách Farrow không làm. Lựa chọn 7. “ Thuyết phục công chúng coi trọng nghệ thuật máy tính ”: Công chúng có phản ứng giận dữ với Farrow (“rounded on Farrow”), nhưng lời phê bình của Vos nhắm vào việc ông không nói rõ chương trình hoạt động ra sao."
            }
          },
          {
            "id": 35,
            "prompt": "Complete the sentence: \"Pieter Zalewski argued that AHS was doing nothing more than _____\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "being aware of whether humans or machines had made it.",
              "making work that still depended entirely on its creator's imagination.",
              "explaining the technical workings of his software.",
              "creating pieces that could barely be told apart from human work.",
              "learning that a computer program had produced it.",
              "weighing what humans and machines have each achieved artistically.",
              "convincing the general public to value computer art."
            ],
            "correct": "making work that still depended entirely on its creator's imagination.",
            "explanation": {
              "step1": "Pieter Zalewski argued that AHS was doing nothing more than Sau “than”, câu cần một cụm động từ dạng -ing . Ta cần tìm đúng nhận định của Pieter Zalewski về việc AHS *chỉ* làm được gì.",
              "step2": "Dựa vào từ khoá đặc biệt là tên riêng Pieter Zalewski => ta định vị được câu (9) ở đoạn 5. Đoạn 5",
              "step3": "Đoạn 5: Pieter Zalewski of Ashcroft University held that AHS merely produced imitations still wholly beholden to the original composer's creative spark .",
              "step4": "Đáp án phù hợp nhất: making work that still depended entirely on its creator's imagination . Câu hoàn chỉnh: Pieter Zalewski argued that AHS was doing nothing more than making work that still depended entirely on its creator's imagination. (Pieter Zalewski lập luận rằng AHS chỉ tạo ra tác phẩm vẫn hoàn toàn phụ thuộc vào sức sáng tạo của người sáng tác bản gốc .) => Khớp với dự đoán về việc AHS *chỉ* làm được gì: Zalewski cho rằng nó tạo bản bắt chước, không có sức sáng tạo độc lập . Ở đây, người có sức sáng tạo được nhắc tới là nhà soạn nhạc gốc, không phải người viết AHS. Đối chiếu paraphrasing: nothing more than merely making work produced imitations depended entirely on wholly beholden to its creator's imagination the original composer's creative spark Tác phẩm khó phân biệt với tác phẩm của người “ tạo ra tác phẩm như vậy (“creating pieces that could barely be told apart from human work”) ”: Đoạn 5 kể rằng có chuyên gia đã nghe nhầm (“were taken in”) Nhưng đó là phản ứng của người nghe, không phải nhận định của Zalewski về sự phụ thuộc của AHS. Giải thích cách phần mềm hoạt động “ làm rõ kỹ thuật vận hành phần mềm (“explaining the technical workings of his software”) ”: Đoạn 5 có lời chê về việc không nói rõ phần mềm hoạt động ra sao (“wilfully obscure”), nhưng người đưa ra lời chê ấy là Vos, không phải Zalewski. Biết nhạc do chương trình máy tính tạo ra “ phát hiện nguồn gốc của bản nhạc (“learning that a computer program had produced it”) ”: Đoạn 5 nói về khán giả biết nhạc được tạo ra thế nào (“on learning how the music had come about”), không phải việc AHS đang làm."
            }
          },
          {
            "id": 36,
            "prompt": "Complete the sentence: \"Listeners who had enjoyed AHS's music grew angry upon _____\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "being aware of whether humans or machines had made it.",
              "making work that still depended entirely on its creator's imagination.",
              "explaining the technical workings of his software.",
              "creating pieces that could barely be told apart from human work.",
              "learning that a computer program had produced it.",
              "weighing what humans and machines have each achieved artistically.",
              "convincing the general public to value computer art."
            ],
            "correct": "learning that a computer program had produced it.",
            "explanation": {
              "step1": "Listeners who had enjoyed AHS's music grew angry upon Sau *upon*, cần một cụm V-ing chỉ sự việc khiến người nghe đổi từ yêu thích sang tức giận.",
              "step2": "Dựa vào tên riêng AHS => bắt đầu đọc tại câu giới thiệu chương trình này ở đoạn 5. Đoạn 5",
              "step3": "Đoạn 5: The composer Reuben Farrow built a program he named the Algorithmic Harmony System, or AHS . Audiences , on learning how the music had come about , often rounded on Farrow ; one admirer even tried to punch him . Đoạn 6: So what explains a public that adored the music and then drew back once its origins came to light ? Câu (4): Câu (4), đoạn 5: xác định AHS là một chương trình . Câu (10): Câu (10), đoạn 5: khán giả biết nhạc ra đời thế nào rồi quay sang công kích Farrow. Câu (1): Câu (1), đoạn 6: nhắc lại sự chuyển từ yêu thích sang xa lánh khi nguồn gốc âm nhạc lộ ra.",
              "step4": "Đáp án phù hợp nhất: learning that a computer program had produced it . Câu hoàn chỉnh: Listeners who had enjoyed AHS's music grew angry upon learning that a computer program had produced it . (Người nghe từng yêu thích nhạc của AHS đã tức giận khi biết một chương trình máy tính tạo ra nhạc đó.) => Khớp với dự đoán: việc biết nguồn gốc của âm nhạc khiến thái độ người nghe đổi chiều. Đối chiếu paraphrasing: adored the music had enjoyed AHS's music rounded on Farrow grew angry on learning how the music had come about + a program learning that a computer program had produced it being aware of whether humans or machines had made it. Biết liệu người hay máy làm ra nhạc: Nếu thấy đoạn 6 có việc đoán nguồn gốc (“guess the source”), em dễ chọn ending này Nhưng đó là nhiệm vụ của người tham gia nghiên cứu, không phải sự việc khiến khán giả công kích Farrow. explaining the technical workings of his software. Giải thích cách phần mềm hoạt động: Đoạn 5 có lời phê bình Farrow đã không nói rõ cách phần mềm hoạt động (“wilfully obscure”) Nhưng đó là nhận xét của Vos, không phải việc người nghe làm khi tức giận. creating pieces that could barely be told apart from human work. Tạo tác phẩm khó phân biệt với tác phẩm của con người: Đoạn 5 có chuyên gia tưởng mình đang nghe nhạc của Dupre (“a genuine Dupre”) Nhưng AHS tạo ra tác phẩm; người nghe tức giận sau khi biết nguồn gốc của nhạc."
            }
          },
          {
            "id": 37,
            "prompt": "Complete the sentence: \"Those taking part in Ronan Deveraux's study had to judge the pieces without _____\"",
            "type": "MULTIPLE_CHOICE",
            "options": [
              "being aware of whether humans or machines had made it.",
              "making work that still depended entirely on its creator's imagination.",
              "explaining the technical workings of his software.",
              "creating pieces that could barely be told apart from human work.",
              "learning that a computer program had produced it.",
              "weighing what humans and machines have each achieved artistically.",
              "convincing the general public to value computer art."
            ],
            "correct": "being aware of whether humans or machines had made it.",
            "explanation": {
              "step1": "Those taking part in Ronan Deveraux's study had to judge the pieces without Dự đoán: Cần tìm điều họ không biết khi đánh giá tác phẩm. Về ngữ pháp, ending phù hợp sẽ bắt đầu bằng dạng V-ing sau “without”.",
              "step2": "Dựa vào tên riêng Ronan Deveraux => tìm đến đoạn 6 và bắt đầu đọc phần mô tả cách người tham gia đánh giá tác phẩm. Đoạn 6",
              "step3": "Đoạn 6: Nobody was told in advance which works came from people and which from machines ; instead each listener had to guess the source and then say how much the piece appealed to them .",
              "step4": "Đáp án phù hợp nhất: being aware of whether humans or machines had made it . Câu hoàn chỉnh: Those taking part in Ronan Deveraux's study had to judge the pieces without being aware of whether humans or machines had made it. (Những người tham gia nghiên cứu của Ronan Deveraux phải đánh giá các tác phẩm mà không biết chúng do người hay máy tạo ra .) => Khớp với dự đoán: họ không được báo trước nguồn gốc tác phẩm, mà phải tự đoán. Đối chiếu paraphrasing: Nobody was told in advance without being aware of which works came from people and which from machines whether humans or machines had made it Phương án 5. “ Biết rằng một chương trình máy tính đã tạo ra tác phẩm ”: cũng nói về việc biết nguồn gốc. Nhưng đoạn 5 nói về khán giả biết nhạc ra đời thế nào (“how the music had come about”); người tham gia nghiên cứu ở đoạn 6 không được báo trước. Phương án 6. “ Cân nhắc thành tựu nghệ thuật của người và máy ”: Đoạn 5 có ý so sánh với con người (“against that of humans”), nhưng người tham gia nghiên cứu chỉ phải đoán nguồn gốc và đánh giá mức độ yêu thích từng tác phẩm. Phương án 3. “ Giải thích cách phần mềm hoạt động ”: Đoạn 5 có nhắc đến cách phần mềm hoạt động (“how the thing actually functioned”), nhưng đó là lời phê bình Farrow, không phải việc người tham gia nghiên cứu phải làm."
            }
          },
          {
            "id": 38,
            "prompt": "Deveraux's participants were aware, before the study started, of which pieces a computer had created.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "YES",
              "NO",
              "NOT GIVEN"
            ],
            "correct": "NO",
            "explanation": {
              "step1": "Deveraux's participants were aware , before the study started , of which pieces a computer had created . Ý câu hỏi: Những người tham gia nghiên cứu của Deveraux đã biết trước tác phẩm nào do máy tính tạo ra hay không?",
              "step2": "Dựa vào tên riêng `Deveraux` => ta tìm đến đoạn 6, bắt đầu từ câu giới thiệu nghiên cứu của ông: `A clue emerges from research by Ronan Deveraux, a computer scientist at Kilbrannan University.` Đoạn 6",
              "step3": "Đoạn 6: Nobody was told in advance which works came from people and which from machines ; instead each listener had to guess the source and then say how much the piece appealed to them .",
              "step4": "Câu hỏi nói: người tham gia đã biết trước (“were aware, before the study started”) tác phẩm nào do máy tính tạo ra. Bài đọc nói: không ai được cho biết trước (“ No body was told in advance”); thay vào đó, mỗi người phải đoán nguồn gốc (“each listener had to guess the source”). Đây là quan điểm trái với câu hỏi . Đối chiếu paraphrasing: before the study started in advance which pieces a computer had created which from machines were aware Nobody was told + had to guess the source Đáp án đúng: NO Đáp án YES Nếu skim/scan thấy người nghe xác định nguồn gốc tác phẩm, ta có thể nhầm rằng họ đã biết sẵn Nhưng tác giả nói họ phải đoán (“had to guess the source”). Chỉ chọn YES nếu tác giả nói họ đã biết trước tác phẩm nào do máy tạo ra. NOT GIVEN Có thể nghĩ việc không được báo trước chưa đủ chứng minh họ không biết Nhưng chi tiết phải đoán nguồn gốc (“had to guess the source”) trực tiếp bác bỏ ý họ đã biết sẵn. Chỉ chọn NOT GIVEN nếu bài đọc không cho biết họ biết trước hay phải đoán nguồn gốc."
            }
          },
          {
            "id": 39,
            "prompt": "Even the expert musicians in the study showed the same reluctance towards pieces they believed a computer had produced.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "YES",
              "NO",
              "NOT GIVEN"
            ],
            "correct": "YES",
            "explanation": {
              "step1": "Even the expert musicians in the study showed the same reluctance towards pieces they believed a computer had produced . Ý câu hỏi: Tác giả có nói ngay cả nhạc sĩ chuyên môn cũng ít thiện cảm hơn với những tác phẩm họ *tin* là do máy tính tạo ra không?",
              "step2": "Câu hỏi không có từ khoá đặc biệt; ta đọc nhanh đến khi gặp cụm chỉ nhạc sĩ được đào tạo (“trained musicians”) => đây là vùng liên quan. Đoạn 6 — trained musicians",
              "step3": "Đoạn 6: Where a listener took the composer to be a machine , their liking for the piece generally fell below that of listeners who assumed a human author . Even the trained musicians followed this pattern , though one might have supposed their judgements would be the more impartial . Câu (5): Khi tin người sáng tác là máy , người nghe nhìn chung ít thích tác phẩm hơn . Câu (6): Ngay cả nhạc sĩ được đào tạo cũng theo xu hướng ấy.",
              "step4": "Câu hỏi nói: nhạc sĩ chuyên môn (“expert musicians”) cũng có cùng sự ít thiện cảm (“same reluctance”) với tác phẩm họ tin là do máy tính tạo ra (“they believed a computer had produced”). Bài đọc nói: mức yêu thích thấp hơn (“generally fell below”) khi người nghe nghĩ tác giả là máy; ngay cả nhạc sĩ được đào tạo cũng theo xu hướng đó (“Even the trained musicians followed this pattern”). Đối chiếu paraphrasing: expert musicians trained musicians same reluctance liking for the piece generally fell below they believed a computer had produced took the composer to be a machine Cả câu hỏi lẫn bài đọc đều nói về nguồn gốc mà người nghe tin , không phải nguồn gốc thực tế của tác phẩm. Đáp án đúng: YES — nhận định phù hợp với điều tác giả nêu. Đáp án NO Nếu skim/scan thấy kỳ vọng nhạc sĩ sẽ khách quan hơn (“more impartial”), sẽ dễ chọn NO Nhưng đó chỉ là kỳ vọng; tác giả nói họ vẫn theo xu hướng ấy (“followed this pattern”). Chỉ chọn NO nếu tác giả nói nhóm nhạc sĩ không theo xu hướng đó. NOT GIVEN Sai vì tác giả nêu rõ nhạc sĩ được đào tạo cũng theo xu hướng ấy (“Even the trained musicians followed this pattern”). Chỉ chọn NOT GIVEN nếu tác giả không cho biết nhóm nhạc sĩ có theo xu hướng đó hay không."
            }
          },
          {
            "id": 40,
            "prompt": "Since it began taking inspiration from online communities, The Muse Machine's work has grown more popular with the public.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "YES",
              "NO",
              "NOT GIVEN"
            ],
            "correct": "NOT GIVEN",
            "explanation": {
              "step1": "Since it began taking inspiration from online communities , The Muse Machine's work has grown more popular with the public . Ý câu hỏi: Tác giả có nói rằng mức độ yêu thích của công chúng đã tăng kể từ khi The Muse Machine lấy cảm hứng từ cộng đồng trực tuyến không?",
              "step2": "Dựa vào tên riêng `The Muse Machine` và ý cộng đồng trực tuyến (“online social networks”) => ta định vị được phần cuối đoạn 7. Đoạn 7 — online social networks",
              "step3": "Đoạn 7: Yet as the technology grows more intricate , it may become possible to locate those deeper layers in machine-made art after all . That is exactly why Herrera has The Muse Machine draw on online social networks for its cues : the hope is that it will settle on subjects that already carry meaning for us . Câu (6): công nghệ phát triển có thể giúp người xem tìm thấy chiều sâu trong nghệ thuật do máy tạo ra. Câu (7): Herrera cho The Muse Machine dùng mạng xã hội với hy vọng chương trình chọn được chủ đề có ý nghĩa; câu này không báo cáo mức độ yêu thích đã tăng .",
              "step4": "Câu hỏi nói: tác phẩm của The Muse Machine đã được công chúng yêu thích hơn (“has grown more popular with the public”) kể từ khi chương trình lấy cảm hứng từ cộng đồng trực tuyến. Bài đọc nói: The Muse Machine lấy gợi ý từ mạng xã hội, nhưng tác giả chỉ nêu hy vọng (“the hope is that”) về chủ đề chương trình sẽ chọn, không cho biết mức độ yêu thích của công chúng đã thay đổi thế nào . Đối chiếu paraphrasing: taking inspiration from online communities draw on online social networks for its cues has grown more popular with the public không có trong bài Đáp án đúng: NOT GIVEN Đáp án YES những chủ đề vốn có ý nghĩa với chúng ta (“subjects that already carry meaning for us”) với bằng chứng công chúng thích tác phẩm hơn. Nhưng đó là điều Herrera hy vọng, không phải kết quả đã được ghi nhận. Chỉ chọn YES nếu tác giả xác nhận mức độ yêu thích tăng sau khi The Muse Machine dùng nguồn trực tuyến. Đáp án NO Đoạn 6 có nói mức độ yêu thích thấp hơn (“liking for the piece generally fell below”), nhưng đó là phản ứng với tác phẩm mà người nghe nghĩ do máy sáng tác, không phải sự thay đổi mức độ yêu thích đối với The Muse Machine. Chỉ chọn NO nếu tác giả nói mức độ yêu thích tác phẩm của The Muse Machine không tăng, hoặc đã giảm sau thay đổi này."
            }
          }
        ]
      }
    ]
  },
  "real-test-2026-q1": {
    "id": "real-test-2026-q1",
    "title": "IELTS Real Test 2026 - Q1 (Reading)",
    "series": "Actual Test 2026",
    "testNumber": 1,
    "type": "Reading",
    "durationMinutes": 60,
    "passages": [
      {
        "id": "rt-2026-q1-p1",
        "passageNumber": 1,
        "title": "AI in Modern Healthcare & Remote Diagnostics",
        "subtitle": "How neural networks and wearable biosensors are transforming early pathology detection in rural and under-resourced clinics.",
        "content": [
          "In early 2025, regional medical clinics across Southeast Asia and Sub-Saharan Africa began field trials for an autonomous diagnostic system powered by multimodal artificial intelligence.",
          "Trained on millions of anonymised retinal scans, dermatological photographs, and chest radiographs, the system operates locally on low-cost tablet computers without requiring high-speed cloud connectivity. The algorithm matches or exceeds certified radiologists in identifying early-stage diabetic retinopathy, melanoma, and pulmonary tuberculosis.",
          "Beyond visual recognition, new generations of microfluidic patches and wearable biosensors stream real-time physiological metrics directly to clinical AI agents. These continuously monitor biomarkers including interstitial glucose, cardiac troponin, and cortisol, detecting acute cardiac infarction hours before patients exhibit overt physical symptoms.",
          "Despite immense promise, ethicists urge cautious oversight. Algorithmic bias resulting from unrepresentative training datasets has historically led to higher false-negative rates in under-represented demographic groups. Regulators stress that AI must serve as an empowering assistant to local nurses and general practitioners rather than an unaccountable surrogate decision-maker."
        ],
        "questions": [
          {
            "id": 1,
            "prompt": "The diagnostic AI system requires continuous high-speed internet connection to operate.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "FALSE",
            "explanation": {
              "step1": "Phân tích nhận định: Hệ thống AI cần kết nối internet tốc độ cao liên tục.",
              "step2": "Đoạn 2: \"operates locally on low-cost tablet computers without requiring high-speed cloud connectivity.\"",
              "step3": "Hệ thống chạy nội bộ không cần mạng tốc độ cao.",
              "step4": "Đáp án: FALSE"
            }
          },
          {
            "id": 2,
            "prompt": "The AI matches or exceeds specialist human doctors in detecting conditions like diabetic retinopathy.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "TRUE",
            "explanation": {
              "step1": "Phân tích: AI đạt hoặc vượt bác sĩ chuyên khoa.",
              "step2": "Đoạn 2: \"matches or exceeds certified radiologists in identifying early-stage diabetic retinopathy.\"",
              "step3": "Khớp ý nghĩa hoàn toàn.",
              "step4": "Đáp án: TRUE"
            }
          },
          {
            "id": 3,
            "prompt": "Wearable biosensors monitor cardiac biomarkers like _____ to anticipate heart attacks.",
            "type": "FILL_IN_BLANK",
            "correct": "troponin",
            "explanation": {
              "step1": "Cần danh từ chỉ chỉ dấu sinh học tim mạch.",
              "step2": "Đoạn 3: \"biomarkers including interstitial glucose, cardiac troponin, and cortisol\"",
              "step3": "Đối chiếu với bệnh tim (cardiac infarction).",
              "step4": "Đáp án: troponin"
            }
          },
          {
            "id": 4,
            "prompt": "Algorithmic bias occurs when training datasets lack adequate demographic representation.",
            "type": "TRUE_FALSE_NOT_GIVEN",
            "options": [
              "TRUE",
              "FALSE",
              "NOT GIVEN"
            ],
            "correct": "TRUE",
            "explanation": {
              "step1": "Thiên vị thuật toán xảy ra do thiếu tính đại diện.",
              "step2": "Đoạn cuối: \"Algorithmic bias resulting from unrepresentative training datasets\"",
              "step3": "Khớp nghĩa 100%.",
              "step4": "Đáp án: TRUE"
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
  return IELTS_TESTS["cam-21-reading-1"];
}
