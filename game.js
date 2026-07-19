// Game Data for "THE CAPITAL JOURNEY"
const CHAPTER_DATA = [
  {
    id: 1,
    title: "Chương 1: Nguồn gốc của giá trị thặng dư",
    bg: "img/background/Background CHAPTER 1.png",
    story: [
      {
        speaker: "Minh",
        text: "Sau một tháng vận hành xưởng may đầu tiên, mình vừa tổng kết tình hình tài chính của MINHWEAR.",
        avatar: "img/character/Minh (Nhân vật chính).png"
      },
      {
        speaker: "Lan",
        text: "Chi phí sản xuất tháng qua là 180 triệu đồng, doanh thu đạt 230 triệu đồng, mang về 50 triệu đồng lợi nhuận anh ạ.",
        avatar: "img/character/Lan - Quản lý sản xuất.png"
      },
      {
        speaker: "Minh",
        text: "Nhìn vào con số này, mình rất vui vì nghĩ rằng doanh nghiệp đang kinh doanh hiệu quả.",
        avatar: "img/character/Minh (Nhân vật chính).png"
      },
      {
        speaker: "Ông Hoàng",
        text: "Chúc mừng con. Nhưng ta hỏi nhỏ: Con bán sản phẩm đúng giá thị trường, mua nguyên liệu cũng đúng giá thị trường. Vậy theo con, 50 triệu lợi nhuận này thực sự đến từ đâu?",
        avatar: "img/character/Nhân vật ông Hoàng – Cố vấn đầu tư.png"
      }
    ],
    drivingQuestion: {
      text: "Nếu mọi giao dịch đều diễn ra ngang giá, lợi nhuận được tạo ra bằng cách nào?",
      choices: [
        { text: "Do bán đắt hơn giá trị thực của sản phẩm", feedback: "Sai. Trong lưu thông, nếu bán đắt hơn thì người khác cũng bán đắt hơn cho ta, tổng giá trị không đổi. Mua rẻ bán đắt chỉ dịch chuyển tài sản chứ không tự tạo ra giá trị mới.", isCorrect: false },
        { text: "Do mua nguyên liệu rẻ hơn giá thị trường", feedback: "Sai. Cho dù mua rẻ hơn trong ngắn hạn, nếu mọi giao dịch trên toàn xã hội quy về ngang giá trung bình thì việc mua rẻ không phải nguồn gốc bền vững tạo ra giá trị mới.", isCorrect: false },
        { text: "Do quá trình sản xuất tạo ra giá trị mới", feedback: "Chính xác! Giá trị thặng dư được sinh ra trong sản xuất khi công nhân dùng sức lao động tạo ra lượng giá trị lớn hơn tiền lương họ được trả.", isCorrect: true }
      ]
    },
    theory: "Theo học thuyết của Karl Marx, nguồn gốc của giá trị thặng dư không xuất phát từ việc mua rẻ bán đắt hay trao đổi trên thị trường, bởi trong điều kiện mọi hàng hóa đều được mua và bán đúng giá trị thì sẽ không có giá trị mới được tạo ra. Giá trị thặng dư chỉ hình thành trong quá trình sản xuất, khi người lao động sử dụng sức lao động để tạo ra một lượng giá trị lớn hơn giá trị sức lao động mà họ được trả thông qua tiền lương. Phần giá trị mới vượt quá tiền lương này được gọi là giá trị thặng dư và thuộc về nhà tư bản sau khi sản phẩm được bán ra. Vì vậy, trong ví dụ của Minh, dù nguyên liệu và sản phẩm đều được giao dịch theo đúng giá thị trường, khoản lợi nhuận 50 triệu đồng không đến từ hoạt động mua bán mà đến từ phần giá trị mới do người lao động tạo ra vượt quá chi phí tiền lương, đây chính là nguồn gốc của giá trị thặng dư.",
    quizzes: [
      {
        question: "Theo Karl Marx, nguồn gốc duy nhất tạo ra giá trị thặng dư (m) trong quá trình sản xuất tư bản chủ nghĩa là gì?",
        answers: [
          { text: "A. Hao mòn tự nhiên và giá trị của máy móc, thiết bị kỹ thuật hiện đại.", isCorrect: false },
          { text: "B. Sự chênh lệch do việc mua rẻ bán đắt các loại hàng hóa trên thị trường.", isCorrect: false },
          { text: "C. Hao phí lao động thặng dư (lao động không công) của công nhân làm thuê.", isCorrect: true },
          { text: "D. Tài năng tổ chức quản lý và mức độ chấp nhận rủi ro của nhà tư bản.", isCorrect: false }
        ],
        explanation: "Máy móc hay nguyên vật liệu chỉ dịch chuyển giá trị sẵn có của chúng vào sản phẩm mới (tư bản bất biến), lưu thông không tạo ra giá trị mới. Chỉ có hao phí lao động sống của công nhân ngoài phần bù đắp tiền lương (tức là thời gian lao động thặng dư) mới trực tiếp tạo ra giá trị mới lớn hơn, đây chính là nguồn gốc của giá trị thặng dư."
      },
      {
        question: "Điểm mấu chốt để tiền tệ (T) có thể chuyển hóa thành tư bản là nhà tư bản phải tìm thấy loại hàng hóa đặc biệt nào trên thị trường?",
        answers: [
          { text: "A. Tư liệu tiêu dùng chất lượng cao để phục vụ đời sống của giới chủ.", isCorrect: false },
          { text: "B. Hàng hóa sức lao động, vì khi tiêu dùng nó tạo ra giá trị mới lớn hơn giá trị bản thân nó.", isCorrect: true },
          { text: "C. Các loại máy móc hiện đại nhất có công suất hoạt động không ngừng nghỉ.", isCorrect: false },
          { text: "D. Nguyên nhiên vật liệu khan hiếm để đảm bảo thế độc quyền sản xuất.", isCorrect: false }
        ],
        explanation: "Tiền chỉ biến thành tư bản khi nó hoạt động trong quỹ đạo sinh ra giá trị thặng dư. Sức lao động là hàng hóa đặc biệt duy nhất có giá trị sử dụng là nguồn gốc sinh ra giá trị. Khi tiêu dùng sức lao động, nó tạo ra lượng giá trị lớn hơn chi phí mua nó."
      },
      {
        question: "Trong một ngày lao động của công nhân làm thuê, khoảng thời gian mà họ tạo ra một lượng giá trị tương đương với giá trị sức lao động (tiền lương) của mình được gọi là gì?",
        answers: [
          { text: "A. Thời gian lao động thặng dư.", isCorrect: false },
          { text: "B. Thời gian lao động tất yếu.", isCorrect: true },
          { text: "C. Thời gian lao động bổ sung.", isCorrect: false },
          { text: "D. Thời gian hao phí lao động xã hội cần thiết.", isCorrect: false }
        ],
        explanation: "Ngày lao động của công nhân được chia làm hai phần: (1) Thời gian lao động tất yếu để tái sản xuất ra giá trị sức lao động (trả lương); (2) Thời gian lao động thặng dư để tạo ra giá trị thặng dư cho nhà tư bản chiếm đoạt."
      },
      {
        question: "Phương pháp sản xuất giá trị thặng dư bằng cách rút ngắn thời gian lao động tất yếu dựa trên cơ sở tăng năng suất lao động xã hội được gọi là phương pháp nào?",
        answers: [
          { text: "A. Sản xuất giá trị thặng dư tuyệt đối.", isCorrect: false },
          { text: "B. Sản xuất giá trị thặng dư tương đối.", isCorrect: true },
          { text: "C. Sản xuất giá trị thặng dư siêu ngạch.", isCorrect: false },
          { text: "D. Tích lũy và tập trung tư bản hóa thặng dư.", isCorrect: false }
        ],
        explanation: "Phương pháp sản xuất giá trị thặng dư tương đối rút ngắn thời gian lao động tất yếu bằng cách tăng năng suất lao động xã hội, từ đó hạ thấp giá trị tư liệu sinh hoạt và giảm giá trị sức lao động, dẫn tới tăng thời gian lao động thặng dư khi độ dài ngày lao động không đổi."
      },
      {
        question: "Bản chất kinh tế của mối quan hệ sản xuất tư bản chủ nghĩa thể hiện qua việc chiếm đoạt giá trị thặng dư là gì?",
        answers: [
          { text: "A. Sự hợp tác bình đẳng, cùng có lợi giữa người sở hữu vốn và người sở hữu sức lao động.", isCorrect: false },
          { text: "B. Sự bóc lột của giai cấp tư sản đối với lao động không công của giai cấp công nhân làm thuê.", isCorrect: true },
          { text: "C. Sự chia sẻ rủi ro tài chính công bằng giữa chủ doanh nghiệp và tập thể người lao động.", isCorrect: false },
          { text: "D. Sự hỗ trợ của nhà tư bản giúp người công nhân nâng cao tay nghề và năng suất lao động.", isCorrect: false }
        ],
        explanation: "Phương pháp sản xuất giá trị thặng dư tương đối rút ngắn thời gian lao động tất yếu bằng cách tăng năng suất lao động xã hội, từ đó hạ thấp giá trị tư liệu sinh hoạt và giảm giá trị sức lao động, dẫn tới tăng thời gian lao động thặng dư khi độ dài ngày lao động không đổi."
      }
    ]
  },
  {
    id: 2,
    title: "Chương 2: Công thức chung của tư bản",
    bg: "img/background/Background CHAPTER 2.png",
    story: [
      {
        speaker: "Minh",
        text: "Thương hiệu MINHWEAR dần được nhiều khách hàng biết đến. Sau khi trừ toàn bộ chi phí, mình tích lũy được 500 triệu đồng đầu tiên.",
        avatar: "img/character/Minh (Nhân vật chính).png"
      },
      {
        speaker: "Minh",
        text: "Với số tiền này, có lẽ gửi ngân hàng lấy lãi suất hoặc tích trữ vàng sẽ an toàn hơn trong lúc này nhỉ?",
        avatar: "img/character/Minh (Nhân vật chính).png"
      },
      {
        speaker: "Ông Hoàng",
        text: "Nếu con chỉ gửi ngân hàng hoặc mua vàng thì số tiền đó vẫn chỉ là tiền tệ. Theo con, khi nào tiền mới thực sự trở thành tư bản?",
        avatar: "img/character/Nhân vật ông Hoàng – Cố vấn đầu tư.png"
      },
      {
        speaker: "Ông Hoàng",
        text: "Không phải cứ có nhiều tiền thì gọi là tư bản. Điều quan trọng nhất là tiền phải được vận động theo quy trình đặc biệt để tạo ra giá trị lớn hơn ban đầu.",
        avatar: "img/character/Nhân vật ông Hoàng – Cố vấn đầu tư.png"
      }
    ],
    drivingQuestion: {
      text: "Theo bạn, điều gì khiến tiền trở thành tư bản?",
      choices: [
        { text: "A. Gửi ngân hàng để nhận lãi suất.", feedback: "Sai. Đây chỉ là hoạt động gửi tiết kiệm, tiền không tham gia vào vòng tuần hoàn sản xuất để tạo giá trị mới cho xã hội.", isCorrect: false },
        { text: "B. Mua vàng và chờ tăng giá.", feedback: "Sai. Đây là đầu cơ tích trữ tài sản vật lý, tiền đứng yên không tạo ra sản phẩm mới.", isCorrect: false },
        { text: "C. Dùng tiền mua máy móc, nguyên vật liệu và thuê lao động sản xuất hàng hóa.", feedback: "Chính xác! Khi tiền được dùng để mua tư liệu sản xuất và sức lao động để sản xuất ra hàng hóa có giá trị lớn hơn, tiền đã chuyển hóa thành tư bản.", isCorrect: true }
      ]
    },
    theory: "Theo Karl Marx, tiền không tự động trở thành tư bản chỉ vì có giá trị lớn hay được tích lũy nhiều. Tiền chỉ trở thành tư bản khi được sử dụng để mua tư liệu sản xuất (máy móc, nguyên vật liệu) và sức lao động, sau đó đưa vào quá trình sản xuất nhằm tạo ra một lượng giá trị lớn hơn số tiền ban đầu. Quá trình đó được biểu diễn qua công thức: T -> H -> T' (với T' = T + m). Điểm khác biệt quan trọng là T' > T. Khoản chênh lệch m chính là giá trị thặng dư. Trong câu chuyện của Minh, khi dùng 500 triệu đồng đầu tư máy móc, nguyên liệu và thuê công nhân sản xuất áo thun MINHWEAR, sau đó bán đi thu về 650 triệu đồng, số tiền của Minh đã trở thành tư bản.",
    quizzes: [
      {
        question: "Theo Karl Marx, công thức chung của tư bản là gì?",
        answers: [
          { text: "A. H – T – H", isCorrect: false },
          { text: "B. T – H – T'", isCorrect: true },
          { text: "C. H – H – T", isCorrect: false },
          { text: "D. T – H – H", isCorrect: false }
        ],
        explanation: "Công thức chung của tư bản phản ánh mục đích của nhà tư bản là dùng tiền để tạo ra số tiền lớn hơn ban đầu (T')."
      },
      {
        question: "Điều kiện nào làm cho tiền trở thành tư bản?",
        answers: [
          { text: "A. Có giá trị lớn.", isCorrect: false },
          { text: "B. Được cất giữ trong ngân hàng.", isCorrect: false },
          { text: "C. Được sử dụng để mua sức lao động và tư liệu sản xuất nhằm tạo ra giá trị mới.", isCorrect: true },
          { text: "D. Được đổi sang ngoại tệ.", isCorrect: false }
        ],
        explanation: "Tiền chỉ trở thành tư bản khi tham gia vào quá trình sản xuất và tạo ra giá trị thặng dư."
      },
      {
        question: "Trong công thức M -> C ... P ... C' -> M', ký hiệu P đại diện cho điều gì?",
        answers: [
          { text: "A. Giá bán sản phẩm.", isCorrect: false },
          { text: "B. Quá trình sản xuất.", isCorrect: true },
          { text: "C. Thị trường.", isCorrect: false },
          { text: "D. Lợi nhuận.", isCorrect: false }
        ],
        explanation: "P đại diện cho Production (Quá trình sản xuất), nơi kết hợp tư liệu sản xuất và sức lao động để sản xuất ra hàng hóa mới chứa giá trị thặng dư."
      },
      {
        question: "Điểm khác biệt giữa M (tiền ban đầu) và M' (tiền thu được) là gì?",
        answers: [
          { text: "A. Không có sự khác biệt.", isCorrect: false },
          { text: "B. M' nhỏ hơn M.", isCorrect: false },
          { text: "C. M' lớn hơn M vì có thêm giá trị thặng dư.", isCorrect: true },
          { text: "D. M' chỉ là tiền đổi sang ngoại tệ.", isCorrect: false }
        ],
        explanation: "Mục tiêu tối thượng của tư bản là làm tăng giá trị ban đầu, tức là tạo ra M' lớn hơn M."
      },
      {
        question: "Trong ví dụ của Minh, yếu tố nào quyết định việc 500 triệu đồng trở thành tư bản?",
        answers: [
          { text: "A. Minh gửi tiết kiệm.", isCorrect: false },
          { text: "B. Minh mua vàng.", isCorrect: false },
          { text: "C. Minh đầu tư mua máy móc, nguyên liệu và thuê công nhân để sản xuất hàng hóa.", isCorrect: true },
          { text: "D. Minh giữ tiền trong két sắt.", isCorrect: false }
        ],
        explanation: "Khi tiền được đầu tư vào sản xuất để kết hợp tư liệu sản xuất với sức lao động sinh ra giá trị mới, nó mới chuyển hóa thành tư bản."
      }
    ]
  },
  {
    id: 3,
    title: "Chương 3: Hàng hóa sức lao động",
    bg: "img/background/Background CHAPTER 3.png",
    story: [
      {
        speaker: "Minh",
        text: "MINHWEAR bắt đầu có nhiều đơn hàng hơn hẳn. Để kịp tiến độ sản xuất, mình quyết định tuyển thêm 20 công nhân may mới.",
        avatar: "img/character/Minh (Nhân vật chính).png"
      },
      {
        speaker: "Minh",
        text: "Hôm nay phỏng vấn được nhiều thợ giỏi quá. Vậy là mình đã mua đủ lượng lao động để mở rộng quy mô xưởng rồi!",
        avatar: "img/character/Minh (Nhân vật chính).png"
      },
      {
        speaker: "Ông Hoàng",
        text: "Minh này, con nghĩ doanh nghiệp đang mua 'lao động' của họ hay thực chất chỉ mua 'sức lao động'?",
        avatar: "img/character/Nhân vật ông Hoàng – Cố vấn đầu tư.png"
      },
      {
        speaker: "Anh Nam",
        text: "Đúng thế ạ. Sau khi vào làm em mới trực tiếp làm ra sản phẩm. Còn khi ký hợp đồng, anh Minh chỉ thuê sức lao động của em trong 8 tiếng mỗi ngày thôi.",
        avatar: "img/character/Nhân vật anh Nam - Công nhân.png"
      }
    ],
    drivingQuestion: {
      text: "Theo bạn, doanh nghiệp thực sự mua điều gì khi ký hợp đồng với người lao động?",
      choices: [
        { text: "A. Mua lao động của người công nhân.", feedback: "Sai. Lao động là quá trình tiêu dùng sức lao động, chỉ diễn ra trong quá trình sản xuất chứ không thể bán trực tiếp trên thị trường.", isCorrect: false },
        { text: "B. Mua sức lao động của người công nhân.", feedback: "Chính xác! Doanh nghiệp mua quyền sử dụng sức lao động (thể lực, trí lực) của công nhân trong thời gian thỏa thuận để đưa vào sản xuất.", isCorrect: true },
        { text: "C. Mua thời gian làm việc của người công nhân.", feedback: "Chưa đủ. Thời gian chỉ là thước đo lượng sức lao động được sử dụng, cái thực sự được mua là năng lực lao động (sức lao động).", isCorrect: false }
      ]
    },
    theory: "Theo Karl Marx, điều mà nhà tư bản mua trên thị trường không phải là lao động, mà là hàng hóa sức lao động. Sức lao động là toàn bộ năng lực thể chất và trí tuệ tồn tại trong con người, có khả năng được sử dụng để tạo ra của cải vật chất. Khi ký hợp đồng lao động, doanh nghiệp mua quyền sử dụng sức lao động này trong một thời gian nhất định (ví dụ 8 giờ/ngày). Sức lao động là hàng hóa đặc biệt vì giá trị sử dụng của nó có thuộc tính độc đáo: khi tiêu dùng nó, nó tạo ra một lượng giá trị mới lớn hơn giá trị của chính bản thân nó (lớn hơn chi phí tiền lương). Đây chính là chìa khóa để giải quyết mâu thuẫn trong công thức chung của tư bản.",
    quizzes: [
      {
        question: "Theo Karl Marx, khi tuyển dụng công nhân, doanh nghiệp thực sự mua điều gì?",
        answers: [
          { text: "A. Lao động.", isCorrect: false },
          { text: "B. Sức lao động.", isCorrect: true },
          { text: "C. Giá trị sản phẩm.", isCorrect: false },
          { text: "D. Thời gian nghỉ ngơi.", isCorrect: false }
        ],
        explanation: "Nhà tư bản không thể mua lao động vì lao động chỉ xuất hiện khi sản xuất bắt đầu. Cái họ mua là sức lao động - khả năng lao động của người công nhân."
      },
      {
        question: "Vì sao sức lao động được xem là hàng hóa đặc biệt?",
        answers: [
          { text: "A. Vì nó không có giá trị.", isCorrect: false },
          { text: "B. Vì khi được sử dụng, nó có khả năng tạo ra giá trị mới lớn hơn giá trị của bản thân nó.", isCorrect: true },
          { text: "C. Vì nó không cần trả tiền lương.", isCorrect: false },
          { text: "D. Vì nó không tham gia sản xuất.", isCorrect: false }
        ],
        explanation: "Sức lao động là hàng hóa duy nhất có giá trị sử dụng đặc biệt: nguồn gốc sinh ra một lượng giá trị lớn hơn giá trị của chính nó."
      },
      {
        question: "Điều nào sau đây phân biệt đúng giữa lao động và sức lao động?",
        answers: [
          { text: "A. Hai khái niệm hoàn toàn giống nhau.", isCorrect: false },
          { text: "B. Lao động là hàng hóa được mua bán trên thị trường.", isCorrect: false },
          { text: "C. Sức lao động là khả năng lao động, còn lao động là quá trình sử dụng khả năng đó để tạo ra sản phẩm.", isCorrect: true },
          { text: "D. Lao động tồn tại trước khi người công nhân làm việc.", isCorrect: false }
        ],
        explanation: "Sức lao động tồn tại trong con người trước khi sản xuất và được mang đi mua bán. Lao động chỉ xuất hiện khi sức lao động được sử dụng thực tế."
      },
      {
        question: "Tiền lương mà doanh nghiệp trả cho người lao động là giá cả của:",
        answers: [
          { text: "A. Toàn bộ giá trị sản phẩm.", isCorrect: false },
          { text: "B. Giá trị thặng dư.", isCorrect: false },
          { text: "C. Hàng hóa sức lao động.", isCorrect: true },
          { text: "D. Máy móc sản xuất.", isCorrect: false }
        ],
        explanation: "Tiền lương là biểu hiện bằng tiền của giá trị sức lao động, không phải là toàn bộ giá trị mà người lao động tạo ra cho doanh nghiệp."
      },
      {
        question: "Trong ví dụ của Minh tuyển thêm 20 công nhân, yếu tố nào là nguồn gốc trực tiếp tạo ra giá trị mới cho doanh nghiệp?",
        answers: [
          { text: "A. Máy may công nghiệp.", isCorrect: false },
          { text: "B. Nhà xưởng.", isCorrect: false },
          { text: "C. Nguyên vật liệu.", isCorrect: false },
          { text: "D. Sức lao động của người công nhân khi được sử dụng trong sản xuất.", isCorrect: true }
        ],
        explanation: "Máy móc và nguyên liệu chỉ chuyển giá trị sẵn có của chúng sang sản phẩm mới. Chỉ có sức lao động của công nhân mới tạo thêm giá trị mới."
      }
    ]
  },
  {
    id: 4,
    title: "Chương 4: Sự sản xuất giá trị thặng dư",
    bg: "img/background/Background CHAPTER 4.png",
    story: [
      {
        speaker: "Minh",
        text: "Hôm nay mình xuống xưởng quan sát anh Nam làm việc. Mỗi ngày anh ấy làm 8 giờ, nhận lương là 500.000 đồng.",
        avatar: "img/character/Minh (Nhân vật chính).png"
      },
      {
        speaker: "Lan",
        text: "Theo tính toán của em, chỉ sau 4 giờ sản xuất đầu tiên, anh Nam đã tạo ra lượng sản phẩm có giá trị mới bằng đúng 500.000 đồng tiền lương.",
        avatar: "img/character/Lan - Quản lý sản xuất.png"
      },
      {
        speaker: "Minh",
        text: "Nhưng anh Nam vẫn tiếp tục làm việc thêm 4 giờ còn lại như cam kết. Trong 4 giờ sau, anh ấy tiếp tục làm ra sản phẩm nhưng không nhận thêm tiền lương.",
        avatar: "img/character/Minh (Nhân vật chính).png"
      },
      {
        speaker: "Minh",
        text: "Vậy 4 giờ làm việc sau của anh Nam thực sự tạo ra giá trị cho ai?",
        avatar: "img/character/Minh (Nhân vật chính).png"
      }
    ],
    drivingQuestion: {
      text: "4 giờ làm việc còn lại của người công nhân tạo ra điều gì?",
      choices: [
        { text: "A. Tạo ra giá trị để bù đắp tiền lương", feedback: "Sai. Tiền lương đã được bù đắp hoàn toàn trong 4 giờ đầu tiên (thời gian lao động tất yếu).", isCorrect: false },
        { text: "B. Tạo ra giá trị thặng dư cho nhà tư bản", feedback: "Chính xác! 4 giờ sau chính là thời gian lao động thặng dư, tạo ra phần giá trị thặng dư mà chủ doanh nghiệp chiếm đoạt.", isCorrect: true },
        { text: "C. Không tạo ra thêm giá trị nào", feedback: "Sai. Người công nhân vẫn làm việc cật lực và tạo ra sản phẩm thực tế, do đó vẫn tạo ra giá trị mới.", isCorrect: false }
      ]
    },
    hasSimulation: true,
    simulationType: "timeline",
    theory: "Theo Karl Marx, trong một ngày lao động, thời gian làm việc của người công nhân được chia thành: (1) Thời gian lao động tất yếu: công nhân tạo ra lượng giá trị ngang với giá trị sức lao động của mình (bù đắp tiền lương). (2) Thời gian lao động thặng dư: công nhân tiếp tục làm việc để tạo ra giá trị thặng dư (m) cho chủ doanh nghiệp mà không được trả công thêm. Trong ví dụ của MINHWEAR, 4 giờ đầu là lao động tất yếu, và 4 giờ sau là lao động thặng dư tạo ra giá trị thặng dư cho Minh.",
    quizzes: [
      {
        question: "Trong một ngày lao động của công nhân làm thuê, khoảng thời gian mà họ tạo ra một lượng giá trị tương đương với giá trị sức lao động của mình được gọi là gì?",
        answers: [
          { text: "A. Thời gian lao động thặng dư.", isCorrect: false },
          { text: "B. Thời gian lao động tất yếu.", isCorrect: true },
          { text: "C. Thời gian lao động bổ sung.", isCorrect: false },
          { text: "D. Thời gian lưu thông.", isCorrect: false }
        ],
        explanation: "Thời gian lao động tất yếu là khoảng thời gian công nhân tạo ra giá trị tương đương với tiền lương của mình."
      },
      {
        question: "Khoảng thời gian người công nhân tiếp tục làm việc sau khi đã tạo ra đủ giá trị tương đương với tiền lương được gọi là gì?",
        answers: [
          { text: "A. Thời gian lao động tất yếu.", isCorrect: false },
          { text: "B. Thời gian lao động thặng dư.", isCorrect: true },
          { text: "C. Thời gian lao động cá nhân.", isCorrect: false },
          { text: "D. Thời gian lao động xã hội cần thiết.", isCorrect: false }
        ],
        explanation: "Khoảng thời gian làm thêm sau khi đã bù đắp tiền lương được gọi là thời gian lao động thặng dư, tạo ra giá trị thặng dư."
      },
      {
        question: "Nếu một công nhân làm việc 8 giờ, trong đó có 4 giờ lao động tất yếu và 4 giờ lao động thặng dư, tỷ suất giá trị thặng dư là bao nhiêu?",
        answers: [
          { text: "A. 25%.", isCorrect: false },
          { text: "B. 50%.", isCorrect: false },
          { text: "C. 100%.", isCorrect: true },
          { text: "D. 200%.", isCorrect: false }
        ],
        explanation: "Tỷ suất giá trị thặng dư (m') = (Thời gian lao động thặng dư / Thời gian lao động tất yếu) x 100% = (4 / 4) x 100% = 100%."
      },
      {
        question: "Giá trị thặng dư được tạo ra trong khoảng thời gian nào?",
        answers: [
          { text: "A. Thời gian lao động tất yếu.", isCorrect: false },
          { text: "B. Thời gian lao động thặng dư.", isCorrect: true },
          { text: "C. Thời gian nghỉ ngơi.", isCorrect: false },
          { text: "D. Thời gian lưu thông hàng hóa.", isCorrect: false }
        ],
        explanation: "Trong thời gian lao động thặng dư, người lao động tiếp tục tạo ra giá trị mới vượt quá tiền lương, đó chính là giá trị thặng dư."
      },
      {
        question: "Bản chất của sự sản xuất giá trị thặng dư là gì?",
        answers: [
          { text: "A. Người lao động tạo ra giá trị đúng bằng tiền lương nhận được.", isCorrect: false },
          { text: "B. Người lao động tạo ra giá trị lớn hơn giá trị sức lao động của mình.", isCorrect: true },
          { text: "C. Máy móc tự động tạo ra toàn bộ giá trị thặng dư.", isCorrect: false },
          { text: "D. Nhà tư bản tạo ra giá trị thặng dư thông qua hoạt động mua bán.", isCorrect: false }
        ],
        explanation: "Bản chất là người lao động tạo ra một giá trị lớn hơn giá trị sức lao động (tiền lương), phần dôi ra thuộc về nhà tư bản."
      }
    ]
  },
  {
    id: 5,
    title: "Chương 5: Tư bản bất biến và tư bản khả biến",
    bg: "img/background/Background CHAPTER 5.png",
    story: [
      {
        speaker: "Minh",
        text: "MINHWEAR vừa thu về lợi nhuận tốt, mình có thêm 300 triệu đồng thặng dư để tái đầu tư.",
        avatar: "img/character/Minh (Nhân vật chính).png"
      },
      {
        speaker: "Minh",
        text: "Mình đang phân vân giữa hai phương án: Dùng 300 triệu mua thêm máy may hiện đại để tăng năng suất, hay dùng để tuyển thêm nhiều công nhân mới?",
        avatar: "img/character/Minh (Nhân vật chính).png"
      },
      {
        speaker: "Ông Hoàng",
        text: "Một câu hỏi mấu chốt cho con: Máy móc hay sức lao động sống của công nhân mới thực sự là yếu tố trực tiếp tạo ra giá trị mới tăng thêm?",
        avatar: "img/character/Nhân vật ông Hoàng – Cố vấn đầu tư.png"
      }
    ],
    drivingQuestion: {
      text: "Nên mua thêm máy móc hay tuyển thêm lao động để tạo nhiều giá trị mới hơn?",
      choices: [
        { text: "Mua thêm máy móc", feedback: "Lưu ý: Máy móc chỉ chuyển giá trị sẵn có của nó vào sản phẩm thông qua hao mòn (Tư bản bất biến), bản thân nó không tự tạo ra giá trị thặng dư mới.", isCorrect: false },
        { text: "Tuyển thêm lao động", feedback: "Chính xác! Sức lao động của con người mới là tư bản khả biến, trực tiếp tạo ra giá trị mới lớn hơn giá trị ban đầu của nó.", isCorrect: true },
        { text: "Mua thêm nguyên vật liệu", feedback: "Sai. Vải vóc, chỉ may chỉ chuyển dịch nguyên vẹn giá trị ban đầu vào sản phẩm chứ không tạo thêm giá trị mới.", isCorrect: false }
      ]
    },
    hasSimulation: true,
    simulationType: "capitalSplit",
    theory: "Theo Karl Marx, tư bản tham gia sản xuất được chia làm hai bộ phận: (1) Tư bản bất biến (c): máy móc, nhà xưởng, nguyên vật liệu. Giá trị của chúng được bảo tồn và chuyển dịch dần vào sản phẩm mới, không thay đổi về lượng. (2) Tư bản khả biến (v): bộ phận tư bản dùng để mua sức lao động (trả lương). Trong quá trình sản xuất, lao động sống của công nhân tạo ra giá trị mới lớn hơn giá trị sức lao động, làm thay đổi lượng giá trị của bộ phận này. Do đó, chỉ có sức lao động mới tạo ra giá trị mới và giá trị thặng dư.",
    quizzes: [
      {
        question: "Tư bản bất biến bao gồm những yếu tố nào?",
        answers: [
          { text: "A. Sức lao động và tiền lương.", isCorrect: false },
          { text: "B. Máy móc, nhà xưởng và nguyên vật liệu.", isCorrect: true },
          { text: "C. Giá trị thặng dư và lợi nhuận.", isCorrect: false },
          { text: "D. Người lao động và thời gian lao động.", isCorrect: false }
        ],
        explanation: "Tư bản bất biến (c) tồn tại dưới dạng tư liệu sản xuất như nhà xưởng, máy móc, nguyên vật liệu, chỉ dịch chuyển giá trị chứ không đổi lượng giá trị."
      },
      {
        question: "Tư bản khả biến là phần tư bản được dùng để mua:",
        answers: [
          { text: "A. Máy móc và nhà xưởng.", isCorrect: false },
          { text: "B. Nguyên vật liệu.", isCorrect: false },
          { text: "C. Sức lao động của người công nhân.", isCorrect: true },
          { text: "D. Hàng hóa tiêu dùng.", isCorrect: false }
        ],
        explanation: "Tư bản khả biến (v) là bộ phận tư bản dùng để thuê sức lao động, có khả năng tăng thêm giá trị trong quá trình sản xuất."
      },
      {
        question: "Yếu tố nào trực tiếp tạo ra giá trị mới trong quá trình sản xuất?",
        answers: [
          { text: "A. Máy móc.", isCorrect: false },
          { text: "B. Nguyên vật liệu.", isCorrect: false },
          { text: "C. Lao động sống của người công nhân.", isCorrect: true },
          { text: "D. Nhà xưởng.", isCorrect: false }
        ],
        explanation: "Lao động sống của công nhân trực tiếp tạo ra giá trị mới, trong khi tư liệu sản xuất chỉ truyền dẫn giá trị cũ."
      },
      {
        question: "Một doanh nghiệp trả 500.000 đồng tiền lương cho một công nhân mỗi ngày. Người công nhân tạo ra 1.200.000 đồng giá trị trong ngày đó. Phần chênh lệch 700.000 đồng là cơ sở hình thành:",
        answers: [
          { text: "A. Tư bản bất biến.", isCorrect: false },
          { text: "B. Giá trị thặng dư.", isCorrect: true },
          { text: "C. Chi phí nguyên vật liệu.", isCorrect: false },
          { text: "D. Giá trị hao mòn máy móc.", isCorrect: false }
        ],
        explanation: "Phần giá trị do lao động sống tạo ra vượt quá tiền công (700.000đ) chính là giá trị thặng dư."
      },
      {
        question: "Nhận định nào sau đây đúng về máy móc và lao động?",
        answers: [
          { text: "A. Máy móc tự tạo ra giá trị mới.", isCorrect: false },
          { text: "B. Máy móc không có vai trò trong quá trình sản xuất.", isCorrect: false },
          { text: "C. Máy móc chuyển giá trị của mình vào sản phẩm, còn lao động sống tạo ra giá trị mới.", isCorrect: true },
          { text: "D. Máy móc và lao động tạo ra giá trị mới theo cùng một cách.", isCorrect: false }
        ],
        explanation: "Máy móc giúp tăng năng suất lao động nhưng bản thân nó chỉ chuyển giá trị hao mòn, lao động sống mới làm tăng giá trị mới."
      }
    ]
  },
  {
    id: 6,
    title: "Chương 6: Tiền công",
    bg: "img/background/Background CHAPTER 6.png",
    story: [
      {
        speaker: "Anh Nam",
        text: "Anh Minh ơi, em có thắc mắc nhỏ. Mỗi ngày em làm ra lượng áo có giá trị khoảng 1,2 triệu đồng.",
        avatar: "img/character/Nhân vật anh Nam - Công nhân.png"
      },
      {
        speaker: "Anh Nam",
        text: "Nhưng tiền công em nhận được mỗi ngày chỉ là 500.000 đồng. Sao tiền công lại không bằng toàn bộ giá trị em làm ra ạ?",
        avatar: "img/character/Nhân vật anh Nam - Công nhân.png"
      },
      {
        speaker: "Minh",
        text: "Câu hỏi của anh Nam làm mình nhận ra một vấn đề sâu sắc về bản chất của tiền công trong doanh nghiệp.",
        avatar: "img/character/Minh (Nhân vật chính).png"
      },
      {
        speaker: "Ông Hoàng",
        text: "Đúng thế. Nhiều người lầm tưởng tiền công là giá cả của lao động. Nhưng thực chất nó là giá cả của một thứ khác.",
        avatar: "img/character/Nhân vật ông Hoàng – Cố vấn đầu tư.png"
      }
    ],
    drivingQuestion: {
      text: "Tiền công thực sự là giá của điều gì?",
      choices: [
        { text: "Giá của toàn bộ giá trị sản phẩm tạo ra", feedback: "Sai. Nếu trả toàn bộ giá trị sản phẩm cho công nhân thì doanh nghiệp không có lợi nhuận (giá trị thặng dư = 0).", isCorrect: false },
        { text: "Giá của hàng hóa sức lao động", feedback: "Chính xác! Tiền công là biểu hiện bằng tiền của giá trị sức lao động, tức là chi phí để tái sản xuất sức lao động của công nhân.", isCorrect: true },
        { text: "Giá của lợi nhuận doanh nghiệp", feedback: "Sai. Tiền công là chi phí doanh nghiệp phải trả, ngược lại với lợi nhuận.", isCorrect: false }
      ]
    },
    theory: "Theo Karl Marx, tiền công về bản chất là hình thức biểu hiện bằng tiền của giá trị sức lao động (giá cả của hàng hóa sức lao động), chứ không phải là giá cả của lao động. Người công nhân bán sức lao động của mình chứ không bán lao động đã thực hiện. Khi đưa vào sử dụng, sức lao động tạo ra giá trị mới (ví dụ 1,2 triệu đồng) lớn hơn giá trị bản thân nó (500.000 đồng tiền lương). Tiền công dễ gây ra ảo tưởng rằng toàn bộ ngày lao động đều được trả công, che giấu đi sự bóc lột lao động thặng dư.",
    quizzes: [
      {
        question: "Theo Karl Marx, tiền công về bản chất là giá cả của:",
        answers: [
          { text: "A. Toàn bộ giá trị sản phẩm.", isCorrect: false },
          { text: "B. Sức lao động.", isCorrect: true },
          { text: "C. Lợi nhuận của nhà tư bản.", isCorrect: false },
          { text: "D. Máy móc và nguyên vật liệu.", isCorrect: false }
        ],
        explanation: "Tiền công là giá cả của hàng hóa sức lao động, tức là chi phí để duy trì và tái tạo sức lao động của người công nhân."
      },
      {
        question: "Vì sao tiền công có thể che giấu bản chất của quan hệ sản xuất tư bản chủ nghĩa?",
        answers: [
          { text: "A. Vì người lao động không nhận được tiền lương.", isCorrect: false },
          { text: "B. Vì tiền công khiến người lao động có cảm giác rằng toàn bộ lao động của mình đều được trả công.", isCorrect: true },
          { text: "C. Vì nhà tư bản không sử dụng lao động.", isCorrect: false },
          { text: "D. Vì tiền công luôn bằng giá trị sản phẩm.", isCorrect: false }
        ],
        explanation: "Khi nhận tiền công sau ngày làm việc, công nhân cảm thấy như toàn bộ 8 giờ của mình đều được trả tiền, che đậy việc 4 giờ sau họ làm không công cho chủ."
      },
      {
        question: "Một công nhân nhận 500.000 đồng tiền lương nhưng tạo ra 1.200.000 đồng giá trị. Phần chênh lệch 700.000 đồng là:",
        answers: [
          { text: "A. Tiền công.", isCorrect: false },
          { text: "B. Chi phí sản xuất.", isCorrect: false },
          { text: "C. Giá trị thặng dư.", isCorrect: true },
          { text: "D. Tư bản bất biến.", isCorrect: false }
        ],
        explanation: "Phần chênh lệch giữa giá trị mới tạo ra và tiền công chính là giá trị thặng dư bị nhà tư bản chiếm đoạt."
      },
      {
        question: "Sức lao động là một hàng hóa đặc biệt vì:",
        answers: [
          { text: "A. Khi được sử dụng, nó có thể tạo ra giá trị mới lớn hơn giá trị của bản thân nó.", isCorrect: true },
          { text: "B. Nó không có giá trị sử dụng.", isCorrect: false },
          { text: "C. Nó chỉ được sử dụng trong sản xuất công nghiệp.", isCorrect: false },
          { text: "D. Nó không thể mua bán trên thị trường.", isCorrect: false }
        ],
        explanation: "Sức lao động là hàng hóa duy nhất tạo ra giá trị mới thặng dư khi tiêu dùng nó trong sản xuất."
      },
      {
        question: "Nhận định nào sau đây đúng về mối quan hệ giữa tiền công và giá trị thặng dư?",
        answers: [
          { text: "A. Tiền công luôn bằng toàn bộ giá trị mà người lao động tạo ra.", isCorrect: false },
          { text: "B. Giá trị thặng dư chỉ được tạo ra bởi máy móc.", isCorrect: false },
          { text: "C. Tiền công chính là toàn bộ lợi nhuận của doanh nghiệp.", isCorrect: false },
          { text: "D. Giá trị thặng dư được tạo ra từ phần giá trị vượt quá giá trị sức lao động.", isCorrect: true }
        ],
        explanation: "Giá trị mới được chia làm 2 phần: một phần bù đắp sức lao động (tiền công) và phần vượt quá là giá trị thặng dư."
      }
    ]
  },
  {
    id: 7,
    title: "Chương 7: Tuần hoàn và chu chuyển tư bản",
    bg: "img/background/Background CHAPTER 7.png",
    story: [
      {
        speaker: "Minh",
        text: "MINHWEAR nhận được lượng đơn hàng khổng lồ, nhưng xưởng của mình đang rơi vào tình trạng quá tải và thiếu vốn lưu động tạm thời.",
        avatar: "img/character/Minh (Nhân vật chính).png"
      },
      {
        speaker: "Lan",
        text: "Đúng thế anh, mặc dù doanh thu ghi nhận rất cao nhưng tiền mặt đang bị đọng ở nguyên liệu kho và các đơn hàng chưa giao xong.",
        avatar: "img/character/Lan - Quản lý sản xuất.png"
      },
      {
        speaker: "Ông Hoàng",
        text: "Ta đặt câu hỏi: Làm thế nào để doanh nghiệp thu được nhiều lợi nhuận hơn trong cùng một năm mà không cần tăng thêm vốn ban đầu?",
        avatar: "img/character/Nhân vật ông Hoàng – Cố vấn đầu tư.png"
      }
    ],
    drivingQuestion: {
      text: "Làm thế nào để doanh nghiệp thu được nhiều lợi nhuận hơn trong cùng một năm?",
      choices: [
        { text: "1. Đầu tư công nghệ, máy móc để rút ngắn thời gian sản xuất", feedback: "Tốt! Rút ngắn thời gian sản xuất giúp hoàn thành sản phẩm nhanh hơn, rút ngắn chu kỳ vốn.", isCorrect: true },
        { text: "2. Tối ưu quản lý kho, giảm thời gian lưu trữ nguyên vật liệu và thành phẩm", feedback: "Tốt! Giảm thời gian lưu kho giúp tránh đọng vốn, giải phóng tiền mặt nhanh hơn.", isCorrect: true },
        { text: "3. Cải thiện logistics và giao hàng nhanh để thu tiền sớm", feedback: "Tốt! Rút ngắn thời gian lưu thông trên đường giúp thu hồi vốn nhanh hơn.", isCorrect: true }
      ]
    },
    hasSimulation: true,
    simulationType: "circulation",
    theory: "Vòng tuần hoàn của tư bản trải qua 3 giai đoạn: \n1. Giai đoạn 1 (Lưu thông đầu vào): T -> H (Tư bản tiền tệ chuyển thành Tư bản sản xuất - TLSX và sức lao động). \n2. Giai đoạn 2 (Sản xuất): H ... P ... H' (Tư bản sản xuất hoạt động tạo ra Hàng hóa có giá trị thặng dư H'). \n3. Giai đoạn 3 (Lưu thông đầu ra): H' -> T' (Hàng hóa chuyển thành tiền tệ lớn hơn ban đầu T'). \nThời gian chu chuyển tư bản bằng thời gian sản xuất cộng thời gian lưu thông. Rút ngắn thời gian này giúp dòng vốn quay vòng nhiều lần hơn trong năm, từ đó tạo ra khối lượng lợi nhuận lớn hơn nhiều lần.",
    quizzes: [
      {
        question: "Minh vừa dùng 500 triệu đồng để mua vải, máy may và tuyển công nhân cho MINHWEAR. Doanh nghiệp đang ở giai đoạn nào của tuần hoàn tư bản?",
        answers: [
          { text: "A. Giai đoạn lưu thông đầu vào (T → H)", isCorrect: true },
          { text: "B. Giai đoạn sản xuất (H → H')", isCorrect: false },
          { text: "C. Giai đoạn lưu thông đầu ra (H' → T')", isCorrect: false },
          { text: "D. Giai đoạn thu lợi nhuận", isCorrect: false }
        ],
        explanation: "Dùng tiền (T) để mua các yếu tố sản xuất (H: sức lao động và tư liệu sản xuất) chính là giai đoạn lưu thông đầu vào."
      },
      {
        question: "Sau khi công nhân hoàn thành các sản phẩm thời trang, MINHWEAR đã tạo ra những chiếc áo có giá trị cao hơn chi phí ban đầu. Đây là giai đoạn nào của tuần hoàn tư bản?",
        answers: [
          { text: "A. T → H", isCorrect: false },
          { text: "B. H → H'", isCorrect: true },
          { text: "C. H' → T'", isCorrect: false },
          { text: "D. T' → H", isCorrect: false }
        ],
        explanation: "Giai đoạn sản xuất biến hàng hóa đầu vào (H) thành hàng hóa có giá trị thặng dư (H') thông qua lao động."
      },
      {
        question: "MINHWEAR đã bán hết sản phẩm trên website và nhận được số tiền lớn hơn số vốn ban đầu. Điều này tương ứng với giai đoạn nào?",
        answers: [
          { text: "A. T → H", isCorrect: false },
          { text: "B. H → H'", isCorrect: false },
          { text: "C. H' → T'", isCorrect: true },
          { text: "D. SX → T", isCorrect: false }
        ],
        explanation: "Bán sản phẩm (H') để thu về tiền mặt lớn hơn (T') là giai đoạn lưu thông đầu ra."
      },
      {
        question: "Để doanh nghiệp thu được nhiều lợi nhuận hơn trong cùng một năm, Minh nên ưu tiên làm gì?",
        answers: [
          { text: "A. Kéo dài thời gian lưu kho hàng hóa.", isCorrect: false },
          { text: "B. Rút ngắn thời gian sản xuất và thời gian lưu thông.", isCorrect: true },
          { text: "C. Chỉ tăng giá bán sản phẩm.", isCorrect: false },
          { text: "D. Giảm số lượng đơn hàng.", isCorrect: false }
        ],
        explanation: "Rút ngắn thời gian sản xuất và lưu thông giúp tăng số vòng chu chuyển vốn, tạo nhiều giá trị thặng dư hơn."
      },
      {
        question: "Đơn hàng của MINHWEAR tăng mạnh nhưng nhiều sản phẩm phải lưu kho lâu trước khi đến tay khách hàng. Minh nên ưu tiên giải pháp nào để tăng tốc độ chu chuyển của tư bản?",
        answers: [
          { text: "A. Giữ hàng trong kho đến khi giá bán tăng.", isCorrect: false },
          { text: "B. Đầu tư thêm kho chứa để tích trữ nhiều hàng hơn.", isCorrect: false },
          { text: "C. Tối ưu quy trình giao hàng và bán hàng để rút ngắn thời gian lưu thông.", isCorrect: true },
          { text: "D. Giảm số lượng đơn hàng nhận mỗi tháng.", isCorrect: false }
        ],
        explanation: "Rút ngắn thời gian lưu thông hàng hóa giúp giải phóng vốn bị ứ đọng, tăng tốc độ chu chuyển tư bản."
      }
    ]
  },
  {
    id: 8,
    title: "Chương 8: Bản chất của giá trị thặng dư",
    bg: "img/background/Background CHAPTER 8.png",
    story: [
      {
        speaker: "Minh",
        text: "MINHWEAR gặt hái được nhiều thành công lớn và đang chuẩn bị gọi vốn từ các quỹ đầu tư lớn.",
        avatar: "img/character/Minh (Nhân vật chính).png"
      },
      {
        speaker: "Ông Hoàng",
        text: "Để thuyết phục các nhà đầu tư chuyên nghiệp, con cần làm rõ: Lợi nhuận của doanh nghiệp thực sự được tạo ra từ đâu chứ không chỉ là chênh lệch doanh thu - chi phí.",
        avatar: "img/character/Nhân vật ông Hoàng – Cố vấn đầu tư.png"
      },
      {
        speaker: "Minh",
        text: "Đúng vậy ạ. Bản chất của giá trị thặng dư là gì, và các chỉ số đo lường hiệu suất bóc lột của dòng vốn được tính toán thế nào?",
        avatar: "img/character/Minh (Nhân vật chính).png"
      }
    ],
    drivingQuestion: {
      text: "Bản chất thực sự của giá trị thặng dư là gì?",
      choices: [
        { text: "A. Lợi nhuận do chênh lệch mua bán thương mại mang lại", feedback: "Chưa đúng bản chất. Đó chỉ là hình thức bên ngoài của lưu thông.", isCorrect: false },
        { text: "B. Phần giá trị mới do sức lao động công nhân tạo ra vượt quá tiền lương của họ", feedback: "Chính xác! Giá trị thặng dư phản ánh mối quan hệ bóc lột lao động làm thuê của chủ tư bản.", isCorrect: true },
        { text: "C. Sự gia tăng giá trị tự thân của máy móc kỹ thuật cao", feedback: "Sai. Máy móc không tự sinh thêm giá trị, nó chỉ chuyển dịch giá trị hao mòn.", isCorrect: false }
      ]
    },
    theory: "Bản chất của giá trị thặng dư (m) là phần giá trị mới do lao động của công nhân tạo ra vượt quá giá trị sức lao động (tiền lương), bị nhà tư bản chiếm đoạt. \nTỷ suất giá trị thặng dư: m' = (m / v) * 100%, phản ánh trình độ bóc lột của nhà tư bản đối với công nhân. \nKhối lượng giá trị thặng dư: M = m' * V (trong đó V là tổng tư bản khả biến dùng để trả lương), phản ánh quy mô bóc lột tuyệt đối.",
    quizzes: [
      {
        question: "Theo Karl Marx, lợi nhuận của MINHWEAR thực sự được tạo ra từ đâu?",
        answers: [
          { text: "A. Do doanh nghiệp luôn bán sản phẩm cao hơn giá trị của chúng.", isCorrect: false },
          { text: "B. Do phần lao động không được trả công của người lao động tạo ra giá trị thặng dư.", isCorrect: true },
          { text: "C. Do máy móc tự tạo ra giá trị mới.", isCorrect: false },
          { text: "D. Do nguyên vật liệu tự tăng giá trị trong quá trình sản xuất.", isCorrect: false }
        ],
        explanation: "Lợi nhuận bản chất từ phần lao động không công (thặng dư) của công nhân trong sản xuất tạo ra."
      },
      {
        question: "Anh Nam nói: 'Mỗi ngày tôi tạo ra giá trị lớn hơn nhiều so với tiền lương mình nhận được. Phần giá trị còn lại thuộc về ai?'",
        answers: [
          { text: "A. Thuộc về khách hàng.", isCorrect: false },
          { text: "B. Thuộc về Nhà nước.", isCorrect: false },
          { text: "C. Thuộc về nhà tư bản dưới dạng giá trị thặng dư.", isCorrect: true },
          { text: "D. Không thuộc về ai.", isCorrect: false }
        ],
        explanation: "Phần giá trị thặng dư dôi ra hoàn toàn thuộc về nhà tư bản sở hữu tư liệu sản xuất."
      },
      {
        question: "Tỷ suất giá trị thặng dư phản ánh điều gì?",
        answers: [
          { text: "A. Quy mô của doanh nghiệp.", isCorrect: false },
          { text: "B. Trình độ bóc lột sức lao động của nhà tư bản.", isCorrect: true },
          { text: "C. Mức độ hiện đại của máy móc.", isCorrect: false },
          { text: "D. Khả năng cạnh tranh của doanh nghiệp.", isCorrect: false }
        ],
        explanation: "Tỷ suất giá trị thặng dư (m') đo lường tỷ lệ bóc lột, tức là tỷ lệ giữa thời gian lao động không công và có công."
      },
      {
        question: "Theo công thức của Marx, tỷ suất giá trị thặng dư được tính bằng:",
        answers: [
          { text: "A. m' = m/v × 100%", isCorrect: true },
          { text: "B. m' = v/m × 100%", isCorrect: false },
          { text: "C. m' = m + v", isCorrect: false },
          { text: "D. m' = T − C", isCorrect: false }
        ],
        explanation: "Tỷ suất m' được tính bằng tỷ số giữa giá trị thặng dư (m) và tư bản khả biến (v - tiền lương) nhân với 100%."
      },
      {
        question: "Để tăng khối lượng giá trị thặng dư (M), doanh nghiệp nên làm gì?",
        answers: [
          { text: "A. Chỉ tăng giá bán sản phẩm.", isCorrect: false },
          { text: "B. Giảm chất lượng sản phẩm.", isCorrect: false },
          { text: "C. Tăng tỷ suất giá trị thặng dư hoặc mở rộng quy mô sử dụng lao động.", isCorrect: true },
          { text: "D. Giảm số lượng công nhân.", isCorrect: false }
        ],
        explanation: "Khối lượng M = m' * V, do đó tăng M bằng cách tăng tỷ suất m' (bóc lột hiệu quả hơn) hoặc tăng V (tuyển thêm nhân công)."
      },
      {
        question: "Sau khi nghe Minh trình bày, ông Hoàng kết luận: 'Điều quan trọng nhất mà em cần giải thích với nhà đầu tư là gì?'",
        answers: [
          { text: "A. Lợi nhuận chỉ đến từ việc bán hàng với giá cao.", isCorrect: false },
          { text: "B. Máy móc là nguồn gốc tạo ra toàn bộ lợi nhuận.", isCorrect: false },
          { text: "C. Giá trị thặng dư là kết quả của phần lao động không công mà người lao động tạo ra trong quá trình sản xuất.", isCorrect: true },
          { text: "D. Lợi nhuận chủ yếu đến từ việc cắt giảm nguyên vật liệu.", isCorrect: false }
        ],
        explanation: "Bản chất cốt lõi của giá trị thặng dư chính là lao động không công của người lao động trong quá trình sản xuất."
      }
    ]
  },
  {
    id: 9,
    title: "Chương 9: Giá trị thặng dư trong nền kinh tế số",
    bg: "img/background/Background CHAPTER 9.png",
    story: [
      {
        speaker: "Minh",
        text: "Sau 3 năm phát triển, MINHWEAR đã sở hữu 3 nhà xưởng lớn và hàng trăm công nhân.",
        avatar: "img/character/Minh (Nhân vật chính).png"
      },
      {
        speaker: "Minh",
        text: "Chúng ta vừa ra mắt ứng dụng MINHWEAR CONNECT tối ưu hóa AI tự phân bổ đơn hàng, tối ưu lộ trình và quản lý số hóa.",
        avatar: "img/character/Minh (Nhân vật chính).png"
      },
      {
        speaker: "Ông Hoàng",
        text: "Doanh nghiệp của con đang tăng trưởng lợi nhuận cực kỳ nhanh chóng. Con có biết trong nền kinh tế số hiện nay, giá trị thặng dư được tạo ra tối ưu bằng cách nào không?",
        avatar: "img/character/Nhân vật ông Hoàng – Cố vấn đầu tư.png"
      }
    ],
    drivingQuestion: {
      text: "Nếu là Minh, bạn sẽ chọn chiến lược nào để phát triển doanh nghiệp?",
      choices: [
        { text: "⏰ Kéo dài ngày làm việc của công nhân lên 12 tiếng", feedback: "Chiến lược này tăng giá trị thặng dư tuyệt đối nhưng làm tăng mệt mỏi, giảm mức độ hài lòng của nhân viên (giảm còn 40%) và tăng tỉ lệ nghỉ việc.", isCorrect: false, effect: "bad" },
        { text: "🤖 Đầu tư hệ thống AI tự động hóa và tối ưu quy trình sản xuất", feedback: "Tuyệt vời! Đây là sản xuất giá trị thặng dư tương đối. AI tăng năng suất lao động, giảm thời gian lao động tất yếu, nâng cao tỷ suất m' mà không làm giảm sự hài lòng của công nhân.", isCorrect: true, effect: "ai" },
        { text: "🚚 Tối ưu hóa chuỗi giao hàng và logistics", feedback: "Rất tốt! Rút ngắn thời gian lưu thông giúp tăng tốc độ chu chuyển vốn, gia tăng số vòng quay tư bản trong năm.", isCorrect: true, effect: "logistics" },
        { text: "📚 Đào tạo nâng cao tay nghề công nghệ cho nhân viên", feedback: "Rất tốt! Tăng năng suất lao động xã hội, tạo ra giá trị thặng dư tương đối bền vững.", isCorrect: true, effect: "train" }
      ]
    },
    theory: "Trong nền kinh tế số, các doanh nghiệp nền tảng như Grab, Be, ShopeeFood hay MINHWEAR áp dụng công nghệ số và AI để nâng cao năng suất lao động xã hội vượt bậc. Điều này giúp thực hiện phương pháp sản xuất giá trị thặng dư tương đối bằng cách rút ngắn thời gian lao động tất yếu của người lao động, kéo dài thời gian lao động thặng dư tương ứng. Công nghệ giúp tối ưu hóa, nhưng nguồn gốc tạo ra giá trị thặng dư vẫn là sức lao động của con người hoạt động trên nền tảng công nghệ đó.",
    quizzes: [
      {
        question: "Trong nền kinh tế số, doanh nghiệp thường gia tăng giá trị thặng dư bằng cách nào?",
        answers: [
          { text: "A. Chỉ tăng giá bán sản phẩm.", isCorrect: false },
          { text: "B. Kéo dài thời gian lao động và nâng cao năng suất lao động.", isCorrect: true },
          { text: "C. Chỉ tăng chi phí quảng cáo.", isCorrect: false },
          { text: "D. Chỉ mở rộng thị trường.", isCorrect: false }
        ],
        explanation: "Doanh nghiệp có thể gia tăng giá trị thặng dư qua hai con đường cơ bản: kéo dài ngày lao động (tuyệt đối) hoặc nâng cao năng suất để giảm thời gian tất yếu (tương đối)."
      },
      {
        question: "Việc ứng dụng AI để tự động phân bổ đơn hàng chủ yếu giúp doanh nghiệp:",
        answers: [
          { text: "A. Tạo ra giá trị mới mà không cần lao động.", isCorrect: false },
          { text: "B. Rút ngắn thời gian chu chuyển tư bản và nâng cao năng suất.", isCorrect: true },
          { text: "C. Thay thế hoàn toàn người lao động.", isCorrect: false },
          { text: "D. Làm tăng giá trị của nguyên vật liệu.", isCorrect: false }
        ],
        explanation: "AI giúp tối ưu hóa quy trình, rút ngắn thời gian lưu thông và nâng cao năng suất của lao động sống."
      },
      {
        question: "Theo Karl Marx, yếu tố nào vẫn là nguồn gốc trực tiếp tạo ra giá trị mới?",
        answers: [
          { text: "A. Máy móc.", isCorrect: false },
          { text: "B. Trí tuệ nhân tạo.", isCorrect: false },
          { text: "C. Lao động sống của con người.", isCorrect: true },
          { text: "D. Thuật toán.", isCorrect: false }
        ],
        explanation: "Dù công nghệ hiện đại đến đâu, máy móc và AI chỉ là công cụ. Sức lao động sống của con người mới là nguồn gốc duy nhất sinh ra giá trị mới."
      },
      {
        question: "Đầu tư công nghệ giúp doanh nghiệp chủ yếu tạo ra:",
        answers: [
          { text: "A. Giá trị thặng dư tuyệt đối.", isCorrect: false },
          { text: "B. Giá trị thặng dư tương đối.", isCorrect: true },
          { text: "C. Giá trị sử dụng.", isCorrect: false },
          { text: "D. Giá trị trao đổi.", isCorrect: false }
        ],
        explanation: "Đầu tư công nghệ nâng cao năng suất lao động, làm giảm thời gian lao động tất yếu, tăng thời gian lao động thặng dư - đó là giá trị thặng dư tương đối."
      },
      {
        question: "Qua toàn bộ trò chơi, kết luận nào phản ánh đúng nhất về giá trị thặng dư?",
        answers: [
          { text: "A. Giá trị thặng dư hình thành từ việc mua rẻ bán đắt.", isCorrect: false },
          { text: "B. Giá trị thặng dư chỉ xuất hiện trong nền kinh tế truyền thống.", isCorrect: false },
          { text: "C. Giá trị thặng dư được tạo ra từ sức lao động và có thể gia tăng thông qua tổ chức sản xuất, công nghệ và nâng cao năng suất.", isCorrect: true },
          { text: "D. Giá trị thặng dư do máy móc tự tạo ra.", isCorrect: false }
        ],
        explanation: "Giá trị thặng dư luôn bắt nguồn từ hao phí sức lao động sống của công nhân làm thuê, được tối ưu nhờ tiến bộ công nghệ và tổ chức sản xuất."
      }
    ]
  }
];

// Enterprise State Variables
let currentChapterIdx = 0;
let currentStep = "story"; // "story" -> "question" -> "simulation" -> "theory" -> "quiz"
let storyIdx = 0;
let quizIdx = 0;

// Stats that change based on choices
let enterpriseStats = {
  profit: 50, // in Million VNĐ
  employees: 5,
  automation: 10, // %
  orders: 1000,
  satisfaction: 85, // %
  reputation: 50 // /100
};

let lastEnterpriseStats = null;

// State tracking for Achievements & Inbox
let unlockedAchievements = [];
let inboxEmails = [];

// Achievements Database from SPST_MLN122.txt
const ACHIEVEMENTS_DATA = [
  {
    id: "unicorn",
    name: "Startup Unicorn",
    description: "Đạt lợi nhuận tích lũy trên 100 tỷ VNĐ (100.000 triệu).",
    icon: "🦄",
    check: () => enterpriseStats.profit >= 100000
  },
  {
    id: "gptw",
    name: "Great Place To Work",
    description: "Độ hài lòng nhân viên đạt trên 95%.",
    icon: "😊",
    check: () => enterpriseStats.satisfaction >= 95
  },
  {
    id: "ai_company",
    name: "AI Company",
    description: "Tỷ lệ tự động hóa công nghệ đạt trên 90%.",
    icon: "🤖",
    check: () => enterpriseStats.automation >= 90
  },
  {
    id: "logistics_master",
    name: "Logistics Master",
    description: "Đạt tổng số đơn hàng trên 5 triệu.",
    icon: "📦",
    check: () => enterpriseStats.orders >= 5000000
  },
  {
    id: "employee_hero",
    name: "Employee Hero",
    description: "Số nhân viên đạt trên 300 và độ hài lòng trên 90%.",
    icon: "👥",
    check: () => enterpriseStats.employees >= 300 && enterpriseStats.satisfaction >= 90
  }
];

// Inbox Emails Database from SPST_MLN122.txt
const EMAILS_DATA = [
  {
    id: "email_chap2",
    chapterTrigger: 1, // Triggers at Chapter 2 (idx 1)
    sender: "Lan (Quản lý sản xuất)",
    subject: "Quá tải đơn hàng sản xuất",
    body: "Sếp ơi, đơn hàng đợt này về dồn dập khiến anh em công nhân dưới xưởng đang quá tải trầm trọng. Họ bắt đầu than phiền và mệt mỏi. Sếp xem chúng ta có nên cho tăng ca dưới xưởng không ạ?",
    choices: [
      {
        text: "Cho tăng ca và trả thêm lương 150% phụ cấp.",
        effectsText: "-30 triệu VNĐ Lợi nhuận, +10% Hài lòng nhân sự",
        apply: () => {
          enterpriseStats.profit = Math.max(0, enterpriseStats.profit - 30);
          enterpriseStats.satisfaction = Math.min(100, enterpriseStats.satisfaction + 10);
        }
      },
      {
        text: "Ép tăng ca bắt buộc, không phụ cấp để tối ưu chi phí.",
        effectsText: "+50 triệu VNĐ Lợi nhuận, -25% Hài lòng nhân sự, -10 Uy tín",
        apply: () => {
          enterpriseStats.profit += 50;
          enterpriseStats.satisfaction = Math.max(30, enterpriseStats.satisfaction - 25);
          enterpriseStats.reputation = Math.max(0, (enterpriseStats.reputation ?? 50) - 10);
        }
      },
      {
        text: "Giữ nguyên giờ làm, tuyển thêm thợ phụ thời vụ ngắn hạn.",
        effectsText: "-20 triệu VNĐ Lợi nhuận, +5% Hài lòng nhân sự",
        apply: () => {
          enterpriseStats.profit = Math.max(0, enterpriseStats.profit - 20);
          enterpriseStats.satisfaction = Math.min(100, enterpriseStats.satisfaction + 5);
        }
      }
    ]
  },
  {
    id: "email_chap4",
    chapterTrigger: 3, // Chapter 4 (idx 3)
    sender: "Marketing Manager",
    subject: "Chiến dịch quảng cáo gặp sự cố",
    body: "Sếp ơi, đối thủ cạnh tranh đang tung tin đồn thất thiệt nói chất lượng vải của MINHWEAR có hóa chất gây ngứa. Chiến dịch Marketing mới của chúng ta đang bị ảnh hưởng nghiêm trọng và khách hàng bắt đầu hoang mang. Sếp quyết định thế nào ạ?",
    choices: [
      {
        text: "Thuê đơn vị xử lý khủng hoảng truyền thông chuyên nghiệp công bố kiểm nghiệm.",
        effectsText: "-100 triệu VNĐ Lợi nhuận, +15 Uy tín",
        apply: () => {
          enterpriseStats.profit = Math.max(0, enterpriseStats.profit - 100);
          enterpriseStats.reputation = Math.min(100, (enterpriseStats.reputation ?? 50) + 15);
        }
      },
      {
        text: "Im lặng tập trung cải thiện sản phẩm, tặng quà tri ân khách hàng.",
        effectsText: "-15 Uy tín, +5% Hài lòng nhân viên",
        apply: () => {
          enterpriseStats.reputation = Math.max(0, (enterpriseStats.reputation ?? 50) - 15);
          enterpriseStats.satisfaction = Math.min(100, enterpriseStats.satisfaction + 5);
        }
      }
    ]
  },
  {
    id: "email_chap6",
    chapterTrigger: 5, // Chapter 6 (idx 5)
    sender: "Ông Hoàng (Cố vấn đầu tư)",
    subject: "Lời mời hợp tác trao đổi chuyển đổi số",
    body: "Chào Minh, ta vừa gặp một đối tác công nghệ rất có tiềm năng. Họ có giải pháp tối ưu hóa kho bãi bằng AI. Ta khuyên con nên dành thời gian gặp họ ngày mai để bàn bạc sâu hơn về chiến lược tự động hóa sắp tới.",
    choices: [
      {
        text: "Đồng ý gặp mặt đối tác và ký thử nghiệm giải pháp AI.",
        effectsText: "-50 triệu VNĐ Lợi nhuận, +10% Tự động hóa",
        apply: () => {
          enterpriseStats.profit = Math.max(0, enterpriseStats.profit - 50);
          enterpriseStats.automation = Math.min(95, enterpriseStats.automation + 10);
        }
      },
      {
        text: "Từ chối để tiếp tục tập trung cải tiến mô hình quản lý hiện hữu.",
        effectsText: "+5% Hài lòng nhân viên",
        apply: () => {
          enterpriseStats.satisfaction = Math.min(100, enterpriseStats.satisfaction + 5);
        }
      }
    ]
  }
];

// Functions to save & load game state
function saveGameState() {
  const gameState = {
    currentChapterIdx,
    currentStep,
    storyIdx,
    quizIdx,
    enterpriseStats,
    unlockedAchievements,
    inboxEmails
  };
  localStorage.setItem("capital_journey_state", JSON.stringify(gameState));
}

function loadGameState() {
  const saved = localStorage.getItem("capital_journey_state");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      currentChapterIdx = parsed.currentChapterIdx ?? 0;
      currentStep = parsed.currentStep ?? "story";
      storyIdx = parsed.storyIdx ?? 0;
      quizIdx = parsed.quizIdx ?? 0;
      enterpriseStats = parsed.enterpriseStats ?? enterpriseStats;
      if (enterpriseStats.reputation === undefined) {
        enterpriseStats.reputation = 50;
      }
      unlockedAchievements = parsed.unlockedAchievements ?? [];
      inboxEmails = parsed.inboxEmails ?? [];
      lastEnterpriseStats = { ...enterpriseStats };
      return true;
    } catch (e) {
      console.error("Error loading saved state", e);
    }
  }
  return false;
}

function resetGameState() {
  localStorage.removeItem("capital_journey_state");
  currentChapterIdx = 0;
  currentStep = "story";
  storyIdx = 0;
  quizIdx = 0;
  enterpriseStats = {
    profit: 50,
    employees: 5,
    automation: 10,
    orders: 1000,
    satisfaction: 85,
    reputation: 50
  };
  unlockedAchievements = [];
  inboxEmails = [];
  lastEnterpriseStats = { ...enterpriseStats };
  renderCurrentState();
}

function showStatDelta(parentEl, value, suffix) {
  if (!parentEl) return;
  
  const span = document.createElement("span");
  span.className = "stat-delta " + (value > 0 ? "positive" : "negative");
  
  const sign = value > 0 ? "+" : "";
  let displaySuffix = suffix;
  
  if (suffix.trim() === "%") {
    displaySuffix = "%";
  } else if (suffix.trim() === "/100") {
    displaySuffix = "";
  } else if (suffix.trim() === "người") {
    displaySuffix = " người";
  } else if (suffix.trim() === "triệu VNĐ") {
    displaySuffix = "M";
  } else if (suffix.trim() === "đơn") {
    displaySuffix = " đơn";
    span.innerText = `${sign}${value.toLocaleString('vi-VN')}${displaySuffix}`;
    parentEl.appendChild(span);
    setTimeout(() => {
      span.remove();
    }, 2800);
    return;
  }
  
  span.innerText = `${sign}${value}${displaySuffix}`;
  parentEl.appendChild(span);
  
  setTimeout(() => {
    span.remove();
  }, 2800);
}

function animateStatValue(elementId, startVal, endVal, suffix, isCurrency = false) {
  const obj = document.getElementById(elementId);
  if (!obj) return;

  // Clear previous animations if any
  obj.classList.remove("stat-changed-up", "stat-changed-down");
  
  if (startVal === endVal) {
    if (isCurrency) {
      obj.innerText = endVal >= 1000 ? (endVal / 1000).toFixed(1) + " tỷ VNĐ" : endVal + suffix;
    } else if (suffix.trim() === "đơn") {
      obj.innerText = endVal.toLocaleString('vi-VN') + suffix;
    } else {
      obj.innerText = endVal + suffix;
    }
    return;
  }

  // Trigger floating delta indicator (+ / - value)
  const diff = endVal - startVal;
  showStatDelta(obj.parentElement, diff, suffix);

  // Determine direction and add animation class
  const directionClass = endVal > startVal ? "stat-changed-up" : "stat-changed-down";
  // Trigger reflow to restart animation
  void obj.offsetWidth; 
  obj.classList.add(directionClass);

  const duration = 1000; // 1s animation
  const startTime = performance.now();

  function updateNumber(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Ease out quad
    const easeProgress = progress * (2 - progress);
    const currentVal = Math.round(startVal + (endVal - startVal) * easeProgress);

    if (isCurrency) {
      obj.innerText = currentVal >= 1000 ? (currentVal / 1000).toFixed(1) + " tỷ VNĐ" : currentVal + suffix;
    } else if (suffix.trim() === "đơn") {
      obj.innerText = currentVal.toLocaleString('vi-VN') + suffix;
    } else {
      obj.innerText = currentVal + suffix;
    }

    if (progress < 1) {
      requestAnimationFrame(updateNumber);
    } else {
      // Final set
      if (isCurrency) {
        obj.innerText = endVal >= 1000 ? (endVal / 1000).toFixed(1) + " tỷ VNĐ" : endVal + suffix;
      } else if (suffix.trim() === "đơn") {
        obj.innerText = endVal.toLocaleString('vi-VN') + suffix;
      } else {
        obj.innerText = endVal + suffix;
      }
    }
  }

  requestAnimationFrame(updateNumber);
}

// Update DOM elements representing the enterprise stats
function updateStatsUI() {
  if (!lastEnterpriseStats) {
    lastEnterpriseStats = { ...enterpriseStats };
  }

  animateStatValue("stat-profit", lastEnterpriseStats.profit, enterpriseStats.profit, " triệu VNĐ", true);
  animateStatValue("stat-employees", lastEnterpriseStats.employees, enterpriseStats.employees, " người");
  animateStatValue("stat-satisfaction", lastEnterpriseStats.satisfaction, enterpriseStats.satisfaction, "%");
  animateStatValue("stat-automation", lastEnterpriseStats.automation, enterpriseStats.automation, "%");
  animateStatValue("stat-reputation", lastEnterpriseStats.reputation ?? 50, enterpriseStats.reputation ?? 50, "/100");
  animateStatValue("stat-orders", lastEnterpriseStats.orders ?? 1000, enterpriseStats.orders ?? 1000, " đơn");

  // Keep track of the last values
  lastEnterpriseStats = { ...enterpriseStats };

  // Trigger achievements check
  checkAchievements();
}

function renderCurrentState() {
  saveGameState();
  updateStatsUI();

  // Trigger email inbox updates
  checkAndUnlockEmails();

  // Hide all screens
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("story-screen").style.display = "none";
  document.getElementById("simulation-screen").style.display = "none";
  document.getElementById("theory-screen").style.display = "none";
  document.getElementById("quiz-screen").style.display = "none";
  document.getElementById("end-screen").style.display = "none";

  // Check if all chapters completed
  if (currentChapterIdx >= CHAPTER_DATA.length) {
    renderEndingScreen();
    return;
  }

  const chapter = CHAPTER_DATA[currentChapterIdx];

  // Update chapter header details
  document.getElementById("chapter-title-header").innerText = chapter.title;
  const progressPercent = ((currentChapterIdx) / CHAPTER_DATA.length) * 100;
  document.getElementById("progress-bar-fill").style.width = `${progressPercent}%`;

  if (currentStep === "story") {
    renderStoryStep(chapter);
  } else if (currentStep === "question") {
    renderQuestionStep(chapter);
  } else if (currentStep === "simulation") {
    renderSimulationStep(chapter);
  } else if (currentStep === "theory") {
    renderTheoryStep(chapter);
  } else if (currentStep === "quiz") {
    renderQuizStep(chapter);
  }
}

function renderStoryStep(chapter) {
  const storyScreen = document.getElementById("story-screen");
  storyScreen.style.display = "flex";
  storyScreen.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url("${chapter.bg}")`;

  const dialogue = chapter.story[storyIdx];
  
  // Update character portrait
  const portraitImg = document.getElementById("character-portrait");
  if (dialogue.avatar) {
    portraitImg.src = dialogue.avatar;
    portraitImg.style.display = "block";
  } else {
    portraitImg.style.display = "none";
  }

  // Set speaker name and dialogue text
  document.getElementById("speaker-name").innerText = dialogue.speaker;
  document.getElementById("dialogue-text").innerText = dialogue.text;

  // Render choices inside the choices box
  const choicesContainer = document.getElementById("choices-container");
  choicesContainer.innerHTML = "";
  choicesContainer.style.display = "none";

  // Add click to continue functionality
  const continueBtn = document.getElementById("continue-dialogue-btn");
  continueBtn.style.display = "block";
  continueBtn.onclick = () => {
    storyIdx++;
    if (storyIdx < chapter.story.length) {
      renderStoryStep(chapter);
    } else {
      storyIdx = 0;
      currentStep = "question";
      renderCurrentState();
    }
  };
}

function renderQuestionStep(chapter) {
  const storyScreen = document.getElementById("story-screen");
  storyScreen.style.display = "flex";
  storyScreen.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url("${chapter.bg}")`;

  // Hide avatar for driving question or show main character
  document.getElementById("character-portrait").src = "img/character/Minh (Nhân vật chính).png";
  document.getElementById("character-portrait").style.display = "block";
  document.getElementById("speaker-name").innerText = "Quyết định của Minh";
  
  // Set question text
  const dq = chapter.drivingQuestion;
  document.getElementById("dialogue-text").innerHTML = `<strong class="question-prompt">${dq.text}</strong>`;

  // Render choices inside the choices box
  const choicesContainer = document.getElementById("choices-container");
  choicesContainer.innerHTML = "";
  choicesContainer.style.display = "flex";

  document.getElementById("continue-dialogue-btn").style.display = "none";

  dq.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.innerText = choice.text;
    btn.onclick = () => {
      // Apply effects if any
      if (choice.effect) {
        applyChoiceEffect(choice.effect);
      }
      
      // Show feedback
      const correctChoice = dq.choices.find(c => c.isCorrect);
      const correctAnswerHtml = !choice.isCorrect && correctChoice
        ? `<p style="margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px dashed rgba(239, 68, 68, 0.3); color: hsl(142, 70%, 80%);"><strong>Đáp án đúng là:</strong> ${correctChoice.text}</p>`
        : "";

      document.getElementById("dialogue-text").innerHTML = `
        <strong class="question-prompt">${dq.text}</strong>
        <div class="choice-feedback-box ${choice.isCorrect ? 'correct-feedback' : 'incorrect-feedback'}">
          <p>${choice.feedback}</p>
          ${correctAnswerHtml}
        </div>
      `;
      
      // Clean choices and show continue button
      choicesContainer.innerHTML = "";
      choicesContainer.style.display = "none";
      
      const continueBtn = document.getElementById("continue-dialogue-btn");
      continueBtn.style.display = "block";
      continueBtn.onclick = () => {
        if (chapter.hasSimulation) {
          currentStep = "simulation";
        } else {
          currentStep = "theory";
        }
        renderCurrentState();
      };
    };
    choicesContainer.appendChild(btn);
  });
}

function applyChoiceEffect(effect) {
  if (effect === "bad") {
    enterpriseStats.profit += 1500; // Increased profit
    enterpriseStats.satisfaction = Math.max(20, enterpriseStats.satisfaction - 45); // Heavy satisfaction hit
    enterpriseStats.employees = Math.max(100, enterpriseStats.employees - 50); // Loss of workforce
  } else if (effect === "ai") {
    enterpriseStats.profit += 3500;
    enterpriseStats.automation = Math.min(95, enterpriseStats.automation + 40);
    enterpriseStats.satisfaction = Math.min(100, enterpriseStats.satisfaction + 5);
  } else if (effect === "logistics") {
    enterpriseStats.profit += 2000;
    enterpriseStats.orders += 500000;
  } else if (effect === "train") {
    enterpriseStats.satisfaction = Math.min(100, enterpriseStats.satisfaction + 15);
    enterpriseStats.profit += 1800;
  }
}

function renderSimulationStep(chapter) {
  const simScreen = document.getElementById("simulation-screen");
  simScreen.style.display = "flex";
  simScreen.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url("${chapter.bg}")`;

  const simTitle = document.getElementById("sim-title");
  const simContainer = document.getElementById("sim-content-container");

  if (chapter.simulationType === "timeline") {
    simTitle.innerText = "Mô Phỏng: Ngày Lao Động 8 Tiếng Của Anh Nam";
    simContainer.innerHTML = `
      <div class="simulation-card">
        <p class="sim-instruction">Nhấp vào từng phần của ngày lao động để khám phá bản chất sản xuất giá trị thặng dư:</p>
        <div class="work-day-timeline">
          <div class="timeline-segment labor-necessary" id="seg-necessary">
            <span class="segment-label">4 Giờ Đầu (Lao động tất yếu)</span>
          </div>
          <div class="timeline-segment labor-surplus" id="seg-surplus">
            <span class="segment-label">4 Giờ Sau (Lao động thặng dư)</span>
          </div>
        </div>
        <div class="simulation-detail-box" id="sim-detail-box">
          <p class="placeholder-detail-text">Vui lòng nhấp vào các phân đoạn trên để xem giải thích chi tiết...</p>
        </div>
      </div>
    `;

    document.getElementById("seg-necessary").onclick = () => {
      document.getElementById("sim-detail-box").innerHTML = `
        <h4 class="correct-text">Thời gian lao động tất yếu (4 Giờ đầu)</h4>
        <p><strong>Nhiệm vụ:</strong> Công nhân Nam làm ra sản phẩm có giá trị mới là 500.000 VNĐ.</p>
        <p><strong>Đền bù:</strong> Đúng bằng giá trị sức lao động (tiền lương ngày 500.000 VNĐ) mà Minh trả cho anh Nam.</p>
        <p><em>=> Đây là khoảng thời gian tái tạo lại giá trị sức lao động của công nhân.</em></p>
      `;
    };

    document.getElementById("seg-surplus").onclick = () => {
      document.getElementById("sim-detail-box").innerHTML = `
        <h4 class="incorrect-text">Thời gian lao động thặng dư (4 Giờ sau)</h4>
        <p><strong>Nhiệm vụ:</strong> Công nhân Nam vẫn làm việc theo hợp đồng 8 giờ, tạo thêm 500.000 VNĐ giá trị mới.</p>
        <p><strong>Đền bù:</strong> Minh KHÔNG trả thêm tiền lương cho phần thời gian này.</p>
        <p><em>=> Đây chính là thời gian sản xuất ra giá trị thặng dư (m) mà Minh sẽ chiếm đoạt sau khi bán áo.</em></p>
      `;
    };
  } else if (chapter.simulationType === "capitalSplit") {
    simTitle.innerText = "Mô Phỏng: Vai Trò Của Tư Bản Bất Biến & Tư Bản Khả Biến";
    simContainer.innerHTML = `
      <div class="simulation-card">
        <p class="sim-instruction">Khi đầu tư thêm 300 triệu đồng vào xưởng may, hãy xem sự đóng góp khác nhau:</p>
        <div class="capital-box-split">
          <div class="capital-card constant-c" id="card-constant">
            <h3>Tư Bản Bất Biến (c)</h3>
            <p class="card-metric">300 Triệu máy móc/nguyên liệu</p>
            <p class="click-prompt">Bấm vào để xem kết quả</p>
          </div>
          <div class="capital-card variable-v" id="card-variable">
            <h3>Tư Bản Khả Biến (v)</h3>
            <p class="card-metric">300 Triệu thuê thêm lao động</p>
            <p class="click-prompt">Bấm vào để xem kết quả</p>
          </div>
        </div>
        <div class="simulation-detail-box" id="sim-detail-box">
          <p class="placeholder-detail-text">Hãy chọn một hình thức đầu tư để phân tích sự thay đổi giá trị...</p>
        </div>
      </div>
    `;

    document.getElementById("card-constant").onclick = () => {
      document.getElementById("sim-detail-box").innerHTML = `
        <h4>Kết quả đầu tư vào Máy móc / Nguyên vật liệu (c):</h4>
        <p>Giá trị 300 triệu đồng được chuyển dịch dần vào sản phẩm (dưới dạng hao mòn máy móc hoặc chi phí vải vóc). Không có giá trị mới tự động phát sinh thêm từ chiếc máy nằm yên.</p>
        <p><strong>Quy luật:</strong> Giá trị trước sản xuất = Giá trị sau sản xuất (không thay đổi lượng giá trị).</p>
      `;
    };

    document.getElementById("card-variable").onclick = () => {
      document.getElementById("sim-detail-box").innerHTML = `
        <h4 class="correct-text">Kết quả đầu tư vào Sức lao động (v):</h4>
        <p>300 triệu đồng dùng để trả lương cho công nhân mới. Nhóm công nhân này bắt tay vào làm việc, không chỉ tái tạo ra 300 triệu đồng tiền lương mà còn tạo thêm lượng giá trị thặng dư dôi ra (ví dụ thêm 300 triệu đồng nữa).</p>
        <p><strong>Quy luật:</strong> Giá trị bộ phận này tăng lên trong quá trình sản xuất thông qua lao động sống.</p>
      `;
    };
  } else if (chapter.simulationType === "circulation") {
    simTitle.innerText = "Sơ đồ: Tuần Hoàn Và Chu Chuyển Tư Bản";
    simContainer.innerHTML = `
      <div class="simulation-card">
        <p class="sim-instruction">Bấm vào các giai đoạn của vòng tuần hoàn tư bản:</p>
        <div class="circulation-flow">
          <div class="circ-step" id="circ1">
            <span class="step-badge">GĐ 1</span>
            <span class="step-formula">T → H</span>
            <span class="step-name">Lưu thông vào</span>
          </div>
          <div class="circ-arrow">➔</div>
          <div class="circ-step" id="circ2">
            <span class="step-badge">GĐ 2</span>
            <span class="step-formula">H ... P ... H'</span>
            <span class="step-name">Sản xuất</span>
          </div>
          <div class="circ-arrow">➔</div>
          <div class="circ-step" id="circ3">
            <span class="step-badge">GĐ 3</span>
            <span class="step-formula">H' → T'</span>
            <span class="step-name">Lưu thông ra</span>
          </div>
        </div>
        <div class="simulation-detail-box" id="sim-detail-box">
          <p class="placeholder-detail-text">Chọn một giai đoạn để phân tích sự chuyển hóa hình thái của vốn...</p>
        </div>
      </div>
    `;

    document.getElementById("circ1").onclick = () => {
      document.getElementById("sim-detail-box").innerHTML = `
        <h4>Giai đoạn 1: Mua các yếu tố đầu vào (T → H)</h4>
        <p>Vốn tồn tại dưới dạng <strong>Tư bản tiền tệ</strong>.</p>
        <p>Minh dùng tiền để mua Vải, máy may (TLSX) và tuyển dụng Sức lao động (SLĐ).</p>
        <p><em>Kết quả: Tư bản chuyển hóa từ tiền tệ sang sản xuất.</em></p>
      `;
    };

    document.getElementById("circ2").onclick = () => {
      document.getElementById("sim-detail-box").innerHTML = `
        <h4 class="correct-text">Giai đoạn 2: Quá trình sản xuất (H ... P ... H')</h4>
        <p>Vốn tồn tại dưới dạng <strong>Tư bản sản xuất</strong>.</p>
        <p>Công nhân tiến hành may áo. Đây là giai đoạn quan trọng nhất vì nó trực tiếp tạo ra hàng hóa mới (H') chứa giá trị lớn hơn ban đầu.</p>
      `;
    };

    document.getElementById("circ3").onclick = () => {
      document.getElementById("sim-detail-box").innerHTML = `
        <h4>Giai đoạn 3: Bán hàng thu tiền (H' → T')</h4>
        <p>Vốn tồn tại dưới dạng <strong>Tư bản hàng hóa</strong>.</p>
        <p>Bán áo trên thị trường để chuyển hàng hóa thành tiền mặt có giá trị lớn hơn ban đầu ($T' = T + m$).</p>
      `;
    };
  }

  // Next step button
  const simNextBtn = document.getElementById("sim-next-btn");
  simNextBtn.onclick = () => {
    currentStep = "theory";
    renderCurrentState();
  };
}

function renderTheoryStep(chapter) {
  const theoryScreen = document.getElementById("theory-screen");
  theoryScreen.style.display = "flex";
  theoryScreen.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url("${chapter.bg}")`;

  document.getElementById("theory-text").innerText = chapter.theory;

  const startQuizBtn = document.getElementById("start-quiz-btn");
  startQuizBtn.onclick = () => {
    currentStep = "quiz";
    quizIdx = 0;
    renderCurrentState();
  };
}

function renderQuizStep(chapter) {
  const quizScreen = document.getElementById("quiz-screen");
  quizScreen.style.display = "flex";
  quizScreen.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url("img/background/BG_Quiz_Room.png")`;

  const questionObj = chapter.quizzes[quizIdx];
  
  // Set question header
  document.getElementById("quiz-question-number").innerText = `Câu hỏi ${quizIdx + 1}/${chapter.quizzes.length}`;
  document.getElementById("quiz-question-text").innerText = questionObj.question;

  // Render answers
  const optionsContainer = document.getElementById("quiz-options-container");
  optionsContainer.innerHTML = "";

  const explanationBox = document.getElementById("quiz-explanation-box");
  explanationBox.style.display = "none";

  const nextQuizBtn = document.getElementById("quiz-next-btn");
  nextQuizBtn.style.display = "none";

  questionObj.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.className = "quiz-option-btn";
    btn.innerText = answer.text;
    btn.onclick = () => {
      // Disable all options
      const allBtns = optionsContainer.querySelectorAll(".quiz-option-btn");
      allBtns.forEach(b => b.disabled = true);

      if (answer.isCorrect) {
        btn.classList.add("correct-option");
      } else {
        btn.classList.add("incorrect-option");
        // Highlight correct option
        const correctBtnIdx = questionObj.answers.findIndex(a => a.isCorrect);
        allBtns[correctBtnIdx].classList.add("correct-option");
      }

      // Show explanation
      explanationBox.innerHTML = `<strong>Giải thích:</strong> ${questionObj.explanation}`;
      explanationBox.style.display = "block";
      
      // Update enterprise stats slightly for answering correctly
      if (answer.isCorrect) {
        enterpriseStats.profit += 15;
      } else {
        enterpriseStats.satisfaction = Math.max(30, enterpriseStats.satisfaction - 2);
      }
      updateStatsUI();

      nextQuizBtn.style.display = "block";
    };
    optionsContainer.appendChild(btn);
  });

  nextQuizBtn.onclick = () => {
    quizIdx++;
    if (quizIdx < chapter.quizzes.length) {
      renderQuizStep(chapter);
    } else {
      // Chapter completed!
      applyChapterCompletionStats();
      
      currentChapterIdx++;
      currentStep = "story";
      quizIdx = 0;
      renderCurrentState();
    }
  };
}

function applyChapterCompletionStats() {
  if (currentChapterIdx === 0) {
    enterpriseStats.profit = 50;
    enterpriseStats.employees = 5;
    enterpriseStats.satisfaction = 85;
  } else if (currentChapterIdx === 1) {
    enterpriseStats.profit = 150;
    enterpriseStats.employees = 8;
  } else if (currentChapterIdx === 2) {
    enterpriseStats.employees = 28;
    enterpriseStats.profit = 280;
  } else if (currentChapterIdx === 3) {
    enterpriseStats.profit = 420;
    enterpriseStats.satisfaction = 82;
  } else if (currentChapterIdx === 4) {
    enterpriseStats.profit = 620;
  } else if (currentChapterIdx === 5) {
    enterpriseStats.profit = 850;
  } else if (currentChapterIdx === 6) {
    enterpriseStats.profit = 1200;
    enterpriseStats.orders = 50000;
  } else if (currentChapterIdx === 7) {
    enterpriseStats.profit = 2500;
    enterpriseStats.employees = 150;
  } else if (currentChapterIdx === 8) {
    // Final Chapter choices applied their own stats
  }
}

function renderEndingScreen() {
  const endScreen = document.getElementById("end-screen");
  endScreen.style.display = "flex";
  endScreen.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url("img/background/Background CHAPTER 8.png")`;

  // Calculate ending description based on the stats achieved from SPST_MLN122.txt
  let endingTitle = "";
  let endingDesc = "";
  let endingBadge = "";
  let endingClass = "";

  const p = enterpriseStats.profit;          // in Million VNĐ
  const s = enterpriseStats.satisfaction;    // in %
  const a = enterpriseStats.automation;      // in %
  const e = enterpriseStats.employees;       // in count
  const o = enterpriseStats.orders;          // in count
  const r = enterpriseStats.reputation ?? 50; // in /100

  // Ending 1: Doanh nghiệp nhân văn (The People's Choice)
  if (s >= 95 && e >= 150 && a < 40) {
    endingTitle = "🏆 KẾT THÚC: DOANH NGHIỆP NHÂN VĂN";
    endingDesc = "Bạn tin rằng con người là tài sản quý giá nhất của doanh nghiệp.<br><br>MINHWEAR đã trở thành một trong những nơi làm việc đáng mơ ước, nơi nhân viên được đào tạo bài bản, được ghi nhận những đóng góp của mình và cùng nhau xây dựng một môi trường làm việc tích cực.<br><br><em>\"Một doanh nghiệp vĩ đại không chỉ tạo ra lợi nhuận, mà còn tạo ra những con người hạnh phúc.\"</em>";
    endingBadge = "👨‍👩‍👧‍👦 Best Place To Work";
    endingClass = "ending-human";
  }
  // Ending 2: Đế chế AI (AI Empire)
  else if (a >= 85 && p >= 5000 && s >= 80) {
    endingTitle = "🤖 KẾT THÚC: ĐẾ CHẾ AI";
    endingDesc = "Bạn đã đưa MINHWEAR trở thành doanh nghiệp tiên phong trong chuyển đổi số và ứng dụng công nghệ vào mọi hoạt động sản xuất.<br><br>Nhà máy thông minh vận hành với mức độ tự động hóa cao, giúp doanh nghiệp tối ưu năng suất và tạo ra lợi thế cạnh tranh vượt trội trong thời đại số.<br><br><em>\"Trong kỷ nguyên số, công nghệ chính là tư bản mới.\"</em>";
    endingBadge = "🚀 AI Industry Leader";
    endingClass = "ending-ai";
  }
  // Ending 3: Kỳ lân công nghệ (Startup Unicorn)
  else if (p >= 5000 && r >= 80 && o >= 300000 && a >= 50 && a <= 84) {
    endingTitle = "🦄 KẾT THÚC: KỲ LÂN CÔNG NGHỆ";
    endingDesc = "MINHWEAR đã có những bước phát triển vượt bậc, trở thành doanh nghiệp công nghệ tăng trưởng nhanh với thương hiệu được khách hàng tin tưởng.<br><br>Sự kết hợp giữa công nghệ, hiệu quả vận hành và chiến lược kinh doanh đúng đắn đã giúp doanh nghiệp vươn lên mạnh mẽ trên thị trường.<br><br><em>\"Khởi nghiệp không chỉ là tạo ra sản phẩm, mà còn là tạo ra những giá trị có khả năng thay đổi tương lai.\"</em>";
    endingBadge = "🦄 Startup Unicorn";
    endingClass = "ending-unicorn";
  }
  // Ending 4: Ông vua Logistics (Logistics Master)
  else if (o >= 500000 && p >= 4000) {
    endingTitle = "📦 KẾT THÚC: ÔNG VUA LOGISTICS";
    endingDesc = "Bạn đã tập trung nguồn lực để tối ưu hóa chuỗi cung ứng và hoạt động vận hành của doanh nghiệp.<br><br>MINHWEAR sở hữu hệ thống logistics hiệu quả, đáp ứng hàng trăm nghìn đơn hàng và mang đến trải nghiệm tốt hơn cho khách hàng.<br><br><em>\"Khách hàng không chỉ mua sản phẩm, họ mua cả trải nghiệm mà doanh nghiệp mang lại.\"</em>";
    endingBadge = "📦 Logistics Master";
    endingClass = "ending-logistics";
  }
  // Ending 5: Cỗ máy tạo giá trị thặng dư (The Surplus Value Machine)
  else if (s <= 40 && p >= 4000 && a >= 50) {
    endingTitle = "💸 KẾT THÚC: CỖ MÁY TẠO GIÁ TRỊ THẶNG DƯ";
    endingDesc = "Bạn đã tối đa hóa lợi nhuận bằng mọi nguồn lực mà doanh nghiệp sở hữu.<br><br>MINHWEAR đạt được mức tăng trưởng ấn tượng về mặt tài chính, nhưng đi kèm với đó là sự đánh đổi về môi trường làm việc và mức độ hài lòng của người lao động.<br><br>Bạn đã chứng minh rằng giá trị thặng dư có thể được tạo ra và mở rộng mạnh mẽ trong nền kinh tế số. Tuy nhiên, thành công về mặt kinh tế luôn đi kèm với những câu hỏi về trách nhiệm xã hội của doanh nghiệp.<br><br><em>\"Liệu lợi nhuận có phải là thước đo duy nhất của thành công?\"</em><br><br><strong>Thông điệp:</strong> Giá trị thặng dư không chỉ phản ánh hiệu quả kinh doanh mà còn cho thấy những lựa chọn kinh tế và xã hội mà doanh nghiệp phải đối mặt trong quá trình phát triển.";
    endingBadge = "💸 The Surplus Value Machine";
    endingClass = "ending-surplus";
  }
  // Ending 6: Doanh nghiệp phát triển bền vững (Secret Ending)
  else if (p >= 4000 && s >= 90 && a >= 40 && a <= 70 && r >= 80 && o >= 200000) {
    endingTitle = "🌟 KẾT THÚC BÍ MẬT: DOANH NGHIỆP PHÁT TRIỂN BỀN VỮNG";
    endingDesc = "Bạn đã tìm được sự cân bằng giữa lợi nhuận, công nghệ, con người và hiệu quả vận hành.<br><br>MINHWEAR trở thành hình mẫu của một doanh nghiệp phát triển bền vững trong thời đại số, nơi công nghệ được ứng dụng để hỗ trợ con người thay vì thay thế hoàn toàn họ.<br><br>Bạn đã chứng minh rằng doanh nghiệp có thể tăng trưởng mạnh mẽ mà vẫn tạo ra những giá trị tích cực cho người lao động và xã hội.<br><br><em>\"Công nghệ giúp doanh nghiệp phát triển, nhưng con người mới là yếu tố quyết định tương lai.\"</em>";
    endingBadge = "🌱 Sustainable Enterprise";
    endingClass = "ending-secret";
  }
  // Ending 7: Doanh nghiệp đang chuyển mình (Growing Enterprise)
  else {
    endingTitle = "🏢 KẾT THÚC: DOANH NGHIỆP ĐANG CHUYỂN MÌNH";
    endingDesc = "MINHWEAR đã trải qua một hành trình đầy thử thách từ những ngày đầu khởi nghiệp cho đến khi trở thành một doanh nghiệp có chỗ đứng trên thị trường.<br><br>Dù chưa đạt được một chiến lược phát triển nổi bật, mỗi quyết định mà bạn đưa ra đều là những bài học quý giá về quản trị doanh nghiệp, giá trị thặng dư và sự vận động của nền kinh tế hiện đại.<br><br><em>\"Không tồn tại một công thức thành công duy nhất trong kinh doanh. Điều quan trọng là không ngừng học hỏi và hoàn thiện chiến lược phát triển của mình.\"</em>";
    endingBadge = "🏢 Growing Enterprise";
    endingClass = "ending-growing";
  }

  const endMessageBox = document.getElementById("end-message-box");
  if (endMessageBox) {
    endMessageBox.innerHTML = `
      <!-- Tiêu đề Kết thúc -->
      <h3 class="ending-title ${endingClass}" style="margin-bottom: 0.8rem; font-family: var(--font-title); font-size: 1.4rem; font-weight: 850;">
        ${endingTitle}
      </h3>
      
      <!-- Mô tả & Trích dẫn -->
      <div style="line-height: 1.6; font-size: 0.95rem; color: var(--text-main); margin-bottom: 1.2rem; text-align: center; font-style: italic;">
        ${endingDesc}
      </div>
      
      <!-- Danh hiệu -->
      <div style="font-size: 0.9rem; font-weight: 700; margin-bottom: 1.2rem; line-height: 1.5;">
        <span style="color: var(--text-muted); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px;">Danh hiệu:</span><br>
        <span style="color: var(--accent-primary); font-size: 1.15rem; text-shadow: 0 0 10px var(--accent-glow);">${endingBadge}</span>
      </div>
      
      <!-- Footer thông báo mở khóa -->
      <p style="font-size: 0.85rem; color: var(--text-muted); font-style: italic; margin-top: 0.8rem; margin-bottom: 0;">
        Bạn đã mở khóa 1 trong 7 kết thúc của trò chơi.
      </p>
    `;
  }

  const restartBtn = document.getElementById("restart-game-btn");
  restartBtn.onclick = () => {
    resetGameState();
  };
}

// Start Game Handler
window.addEventListener("DOMContentLoaded", () => {
  const hasSaved = loadGameState();
  
  const startBtn = document.getElementById("start-game-btn");
  startBtn.onclick = () => {
    currentChapterIdx = 0;
    currentStep = "story";
    storyIdx = 0;
    quizIdx = 0;
    renderCurrentState();
  };

  const resumeBtn = document.getElementById("resume-game-btn");
  if (hasSaved) {
    resumeBtn.style.display = "inline-block";
    resumeBtn.onclick = () => {
      renderCurrentState();
    };
  } else {
    resumeBtn.style.display = "none";
  }

  // Set up header buttons click handlers
  const achievementsBtn = document.getElementById("achievements-btn");
  if (achievementsBtn) {
    achievementsBtn.onclick = () => {
      openAchievementsModal();
    };
  }

  const achievementsCloseBtn = document.getElementById("achievements-close-btn");
  if (achievementsCloseBtn) {
    achievementsCloseBtn.onclick = () => {
      document.getElementById("achievements-modal").style.display = "none";
    };
  }

  const inboxBtn = document.getElementById("inbox-btn");
  if (inboxBtn) {
    inboxBtn.onclick = () => {
      openInboxModal();
    };
  }

  const inboxCloseBtn = document.getElementById("inbox-close-btn");
  if (inboxCloseBtn) {
    inboxCloseBtn.onclick = () => {
      document.getElementById("inbox-modal").style.display = "none";
    };
  }
});

// ACHIEVEMENTS & EMAIL ENGINE FUNCTIONS
function checkAchievements() {
  ACHIEVEMENTS_DATA.forEach(ach => {
    if (!unlockedAchievements.includes(ach.id) && ach.check()) {
      unlockedAchievements.push(ach.id);
      showAchievementToast(ach);
      saveGameState();
    }
  });
}

function showAchievementToast(ach) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "achievement-toast";
  toast.innerHTML = `
    <div class="toast-icon">${ach.icon}</div>
    <div class="toast-content">
      <h4>Thành tựu mở khóa!</h4>
      <p><strong>${ach.name}</strong>: ${ach.description}</p>
    </div>
  `;
  container.appendChild(toast);

  // Trigger anim
  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  // Remove
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.remove();
    }, 500);
  }, 4000);
}

function checkAndUnlockEmails() {
  EMAILS_DATA.forEach(email => {
    if (currentChapterIdx >= email.chapterTrigger && !inboxEmails.some(e => e.id === email.id)) {
      inboxEmails.push({
        id: email.id,
        status: "unread"
      });
      showEmailToast(email);
    }
  });
  updateInboxBadge();
}

function showEmailToast(email) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "achievement-toast";
  toast.style.borderColor = "var(--danger-color)";
  toast.style.boxShadow = "0 10px 30px rgba(239, 68, 68, 0.3)";
  toast.innerHTML = `
    <div class="toast-icon">📬</div>
    <div class="toast-content">
      <h4 style="color: var(--danger-color);">Tin nhắn mới!</h4>
      <p><strong>${email.sender}</strong>: ${email.subject}</p>
    </div>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.remove();
    }, 500);
  }, 4000);
}

function updateInboxBadge() {
  const badge = document.getElementById("inbox-badge");
  if (!badge) return;
  const unreadCount = inboxEmails.filter(e => e.status === "unread").length;
  if (unreadCount > 0) {
    badge.innerText = unreadCount;
    badge.style.display = "block";
  } else {
    badge.style.display = "none";
  }
}

function openAchievementsModal() {
  const modal = document.getElementById("achievements-modal");
  const listContainer = document.getElementById("achievements-list");
  if (!modal || !listContainer) return;

  listContainer.innerHTML = "";
  modal.style.display = "flex";

  ACHIEVEMENTS_DATA.forEach(ach => {
    const isUnlocked = unlockedAchievements.includes(ach.id);
    const card = document.createElement("div");
    card.className = "achievement-card " + (isUnlocked ? "unlocked" : "locked");
    
    card.innerHTML = `
      <div class="ach-icon">${ach.icon}</div>
      <div class="ach-info">
        <h4>${ach.name}</h4>
        <p>${ach.description}</p>
      </div>
      <div class="ach-status">${isUnlocked ? "Đã mở" : "Chưa mở"}</div>
    `;
    listContainer.appendChild(card);
  });
}

let activeEmailId = null;

function openInboxModal() {
  const modal = document.getElementById("inbox-modal");
  if (!modal) return;
  modal.style.display = "flex";
  renderInboxList();
}

function renderInboxList() {
  const listContainer = document.getElementById("inbox-email-list");
  if (!listContainer) return;
  listContainer.innerHTML = "";

  if (inboxEmails.length === 0) {
    listContainer.innerHTML = `<p style="color: var(--text-muted); font-size: 0.85rem; text-align: center; margin-top: 1rem;">Hộp thư trống.</p>`;
    document.getElementById("inbox-email-view").innerHTML = `
      <p style="color: var(--text-muted); font-style: italic; text-align: center; margin-top: 4rem;">Chọn một tin nhắn để xem chi tiết.</p>
    `;
    return;
  }

  inboxEmails.forEach(item => {
    const email = EMAILS_DATA.find(e => e.id === item.id);
    if (!email) return;

    const emailDiv = document.createElement("div");
    emailDiv.className = `email-item ${item.status === 'unread' ? 'unread' : ''} ${activeEmailId === item.id ? 'active' : ''}`;
    emailDiv.innerHTML = `
      <div class="email-sender">${email.sender}</div>
      <div class="email-subject">${email.subject}</div>
    `;
    emailDiv.onclick = () => {
      if (item.status === 'unread') {
        item.status = 'read';
      }
      activeEmailId = item.id;
      updateInboxBadge();
      saveGameState();
      renderInboxList();
      viewEmail(email, item);
    };
    listContainer.appendChild(emailDiv);
  });

  if (activeEmailId) {
    const activeItem = inboxEmails.find(e => e.id === activeEmailId);
    const activeEmail = EMAILS_DATA.find(e => e.id === activeEmailId);
    if (activeEmail && activeItem) {
      viewEmail(activeEmail, activeItem);
    }
  }
}

function viewEmail(email, item) {
  const viewer = document.getElementById("inbox-email-view");
  if (!viewer) return;

  const isResolved = item.status === "resolved";

  let choicesHtml = "";
  if (isResolved) {
    choicesHtml = `<p style="color: #10b981; font-weight: 600; text-align: center; margin-top: 1rem;">✓ Bạn đã giải quyết yêu cầu này.</p>`;
  } else {
    choicesHtml = `<div class="inbox-view-choices">`;
    email.choices.forEach((choice, idx) => {
      choicesHtml += `
        <button class="inbox-choice-btn" onclick="resolveEmailChoice('${email.id}', ${idx})">
          <strong>${choice.text}</strong>
          <span class="choice-effects">Hiệu ứng: ${choice.effectsText}</span>
        </button>
      `;
    });
    choicesHtml += `</div>`;
  }

  viewer.innerHTML = `
    <div class="inbox-view-header">
      <h3>${email.subject}</h3>
      <div class="inbox-view-sender">Người gửi: <span>${email.sender}</span></div>
    </div>
    <div class="inbox-view-body">
      <p>${email.body}</p>
    </div>
    ${choicesHtml}
  `;
}

function resolveEmailChoice(emailId, choiceIdx) {
  const item = inboxEmails.find(e => e.id === emailId);
  const email = EMAILS_DATA.find(e => e.id === emailId);
  if (!item || !email) return;

  const choice = email.choices[choiceIdx];
  if (!choice) return;

  choice.apply();
  item.status = "resolved";
  
  updateStatsUI();
  saveGameState();
  renderInboxList();
}
