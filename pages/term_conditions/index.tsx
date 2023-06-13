import React from "react";

const TermConditionsPage = () => {
  const tabSpaceHead = '&nbsp;'
  const tabSpace = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
  const data = [
    {
      title: 'A. ĐIỀU KHOẢN CHUNG',
      content: [
        tabSpaceHead + 'Khi bạn truy cập hoặc sử dụng bất kỳ tính năng, dịch vụ nào được cung cấp qua website, ứng dụng điện thoại thuộc “Class For Me” (sau đây gọi là “<b>Nền Tảng</b>”) của Công ty Cổ phần Authentic Education Hub (gọi chung là “Chúng tôi hoặc “<b>Công ty</b>”)  nghĩa là bạn đã hiểu và đồng ý tuân theo các điều khoản và điều kiện dưới đây (gọi tắt là “<b>Điều Khoản Dịch Vụ</b>”). Trong phạm vi của Điều Khoản này, “Class For Me” bao hàm việc đề cập đến Công ty Cổ phần Authentic Education Hub và các bên kế thừa, nhận chuyển nhượng dự án Class For Me. Chúng tôi có quyền thay đổi, chỉnh sửa, thêm hoặc lược bỏ bất kỳ phần nào trong Điều khoản dịch vụ này vào bất cứ lúc nào. Các thay đổi có hiệu lực ngay khi được đăng trên Hệ thống. Nếu bạn tiếp tục sử dụng Nền Tảng của chúng tôi có nghĩa là bạn chấp nhận và đồng ý tuân theo Điều Khoản Dịch Vụ mới được cập nhật.',
        tabSpaceHead + 'Vui lòng đọc kỹ và kiểm tra Điều Khoản Dịch Vụ thường xuyên để cập nhật những thay đổi của chúng tôi. ',
      ]
    },
    {
      title: '1. Giới thiệu ',
      content: [
        'Class For Me là nền tảng trực tuyến kết nối giáo viên với phụ huynh, học sinh (sau đây gọi chung là “<b>Người Dùng</b>” hoặc gọi riêng là “<b>Giáo Viên</b>”, “<b>Học Sinh</b>”, “<b>Phụ Huynh</b>”) tích hợp các phần mềm dạy học với công cụ hỗ trợ trực quan, sinh động giúp giáo viên và học sinh tương tác với nhau giống như đang tương tác trực tiếp trên lớp học, góp phần ôn luyện kiến thức và giải đáp những khó khăn, thắc mắc của học sinh trong suốt quá trình học tập.',
        'Class For Me giúp giáo viên truyền đạt kiến thức cho học sinh ở bất kỳ vùng miền và quốc gia nào chỉ với máy tính hoặc điện thoại, máy tính bảng có kết nối internet, chúng tôi hỗ trợ những kiến thức mà học sinh có nhu cầu và mong muốn được giải đáp. Bên cạnh đó, chúng tôi góp phần tạo thêm nguồn thu nhập hỗ trợ giáo viên yên tâm gắn bó với nghề. ',
        'Class For Me tháo gỡ băn khoăn của các bậc phụ huynh về nhu cầu hỗ trợ ôn luyện cho con em mình trong quá trình học tập với sự đồng hành và tin tưởng của hàng ngàn giáo viên có uy tín và giàu kinh nghiệm đến từ các cơ sở giáo dục chất lượng ở Việt Nam và quốc tế. ',
        'Class For Me mang đến cho học sinh những giáo viên phù hợp với năng lực và nhu cầu học tập để có thể đồng hành cùng các em trong suốt chặng đường tích luỹ tri thức cho tương lai để các em không chỉ tự tin làm chủ kiến thức tại nhà trường mà còn vững vàng bước ra thế giới với sự chuẩn bị kỹ lưỡng. '
      ]
    },
    {
      title: '2. Điều kiện đăng ký sử dụng',
      content: [
        'Nếu bạn là người chưa thành niên hoặc bị giới hạn về năng lực hành vi dân sư theo quy định pháp luật tại nơi bạn sinh sống, bạn cần nhận được sự hỗ trợ hoặc chấp thuận từ cha mẹ hoặc người giám hộ hợp pháp, tùy từng trường hợp áp dụng, để mở tài khoản hoặc sử dụng dịch vụ. Nếu bạn chưa chắc chắn về độ tuổi cũng như hoặc năng lực hành vi dân sự của mình, vui lòng không tạo tài khoản Class For Me (“<b>Tài Khoản</b>”) cho đến khi được cha mẹ hoặc người giám hộ hợp pháp giúp đỡ. ',
        'Nếu bạn là Phụ Huynh hoặc người giám hộ hợp pháp của người chưa thành niên hoặc giới hạn về năng lực hành vi dân sự, bạn cần đọc và hiểu rõ Điều Khoản Sử Dụng này trước khi tạo lập Tài Khoản cho con em của mình hoặc tạo lập Tài Khoản Phụ Huynh để kiểm tra và giám sát tài khoản của Học Sinh. Bên cạnh đó, bạn có trách nhiệm hỗ trợ giải thích để Học Sinh hiểu rõ, chấp nhận các Điều Khoản Dịch Vụ này và chịu trách nhiệm đối với toàn bộ quá trình sử dụng Tài Khoản. '
      ]
    },
    {
      title: 'B. ĐIỀU KHOẢN CHI TIẾT',
      content: [
        {
          name: 'Tài khoản và bảo mật',
          description: [
            {
              title: '1.1&nbsp;&nbsp;&nbsp;Người Dùng đồng ý:',
              content: [
                'Giữ bí mật mật khẩu và chỉ sử dụng tên đăng nhập và mật khẩu khi đăng nhập;',
                'Đảm bảo đăng xuất khỏi Tài Khoản của mình sau mỗi phiên đăng nhập trên Nền Tảng;  ',
                'Không chuyển nhượng, cho thuê hoặc thực hiện bất kỳ hành động nào cho phép người khác sử dụng Tài Khoản của mình; ',
                'Thông báo ngay lập tức với Class For Me nếu phát hiện bất kỳ việc sử dụng trái phép đối với tài khoản, tên đăng nhập hoặc mật khẩu của mình. Người Dùng phải chịu hoàn toàn trách nhiệm với mọi hoạt động được thực hiện dưới tên đăng nhập và Tài Khoản của mình, ngay cả khi những hoạt động hoặc việc sử dụng đó không do Người Dùng thực hiện. Class For Me không chịu trách nhiệm đối với bất kỳ tổn thất hoặc thiệt hại nào đối với Người Dùng hoặc bất kỳ bên thứ ba nào phát sinh từ việc sử dụng trái phép Tài Khoản hoặc từ việc không tuân thủ Điều Khoản Dịch Vụ này của Người Dùng. ',
              ]
            },
            {
              title: '1.2&nbsp;&nbsp;&nbsp;Người Dùng có thể sử dụng Tài Khoản của mình để truy cập vào website hoặc dịch vụ khác của các đơn vị cung cấp khác nếu được Class For Me cho phép. Việc sử dụng sản phẩm dịch vụ; tuân thủ các điều khoản sử dụng và các quy định liên quan theo yêu cầu của các đơn vị cung cấp là thoả thuận giữa Người Dùng và đơn vị cung cấp tương ứng. Class For Me không kiểm tra và không chịu trách nhiệm với bất kỳ nội dung thoả thuận nào giữa Người Dùng và các đơn vị này.',
              content: []
            },
            {
              title: '1.3&nbsp;&nbsp;&nbsp;Người Dùng đồng ý rằng Class For Me có toàn quyền xóa Tài Khoản và tên đăng nhập của Người Dùng ngay lập tức; gỡ bỏ khỏi Class For Me bất kỳ nội dung nào liên quan đến Tài Khoản của Người Dùng với bất kỳ lý do nào mà không có hoặc không cần thông báo hay chịu trách nhiệm với Người Dùng hay bên đối tác nào khác. Căn cứ để thực hiện các hành động này có thể bao gồm, nhưng không giới hạn ở việc: ',
              content: [
                'Tài Khoản và tên đăng nhập không hoạt động trong thời gian dài;',
                'Cung cấp thông tin sai sự thật;',
                'Vi phạm điều khoản hoặc tinh thần của các Điều Khoản Dịch Vụ này;',
                'Có hành vi bất hợp pháp, lừa đảo, quấy rối, xâm phạm, đe dọa hoặc lạm dụng, tuyên truyền gây ảnh hưởng xấu đến cộng đồng hoặc chống phá nhà nước; ',
                'Một Người Dùng có nhiều Tài Khoản khác nhau;',
                'Có hành vi gây hại tới những Người Dùng khác, các bên thứ ba hoặc các đối tác của Class For Me; ',
                'Có hành vi gian lận, trục lợi hoặc lôi kéo, thao túng người khác thực hiện hành vi gian lận, trục lợi từ chính sách của Class For Me. '
              ]
            },
            'Việc sử dụng Tài Khoản cho các mục đích bất hợp pháp, lừa đảo, quấy rối, xâm phạm, đe dọa hoặc lạm dụng có thể được gửi cho cơ quan nhà nước có thẩm quyền mà không cần thông báo trước cho Người Dùng. Trường hợp có tranh chấp liên quan đến xóa Tài Khoản của Người Dùng hoặc việc sử dụng của bạn đối với dịch vụ với bất kỳ lý do gì, Class For Me có quyền xóa Tài Khoản của bạn ngay lập tức mà không cần thông báo. ',
            {
              title: '1.4&nbsp;&nbsp;&nbsp;Trong trường hợp Người Dùng, vì lý do cá nhân, không thể sử dụng Tài Khoản, Người Dùng có thể yêu cầu xóa Tài Khoản bằng cách thông báo đến Class For Me thông qua Nền Tảng, email, hotline, văn bản. Người Dùng có trách nhiệm hoàn thành các giao dịch phát sinh trước thời điểm xoá Tài Khoản. Người Dùng đồng ý rằng việc hoàn trả học phí, huỷ khoá học và thanh toán cho Giáo Viên được giải quyết theo quy định của từng khoá học cụ thể.',
              content: []
            },
            'Class For Me không có trách nhiệm bồi thường và không chịu trách nhiệm đối với bất kỳ tổn thất nào phát sinh từ bất kỳ hành động nào liên quan đến việc xoá Tài Khoản; Người Dùng đảm bảo Class For Me được miễn trừ mọi khiếu nại và tranh chấp có liên quan. '
          ]
        },
        {
          name: 'Quyền sở hữu và tài sản trí tuệ ',
          description: [
            {
              title: '2.1&nbsp;&nbsp;&nbsp;Tài Sản Trí Tuệ bao gồm nhưng không giới hạn quyền tác giả, quyền liên quan đến quyền tác giả, quyền sở hữu công nghiệp đối với bất kỳ tác phẩm, bản vẽ, thiết kế, sáng kiến, nhãn hiệu và các tài sản trí tuệ khác theo quy định pháp luật, có sẵn hoặc được tạo ra từ các tài liệu, thông tin do Class For Me cung cấp, hoặc được tạo ra từ chính sự nghiên cứu, tìm tòi, sự sáng tạo của Người Dùng trong quá trình sử dụng Nền Tảng. ',
              content: []
            },
            {
              title: '2.2&nbsp;&nbsp;&nbsp;Tài Sản Trí Tuệ do Class For Me cung cấp bằng bất cứ phương tiện nào hoặc được tạo ra từ các thông tin, dữ liệu do Class For Me cung cấp được đăng tải trên bất kỳ phần mềm, ứng dụng, website trực thuộc hoặc ngoài hệ thống Class For Me đều thuộc quyền sở hữu của Class For Me và các đối tác có liên quan của Class For Me bất kể các tài sản này đã được ghi nhận đăng ký hay chưa đăng ký tại hệ thống đăng ký quốc gia về quyền sở hữu trí tuệ. ',
              content: []
            },
            {
              title: '2.3&nbsp;&nbsp;&nbsp;Tài Sản Trí Tuệ do chính Giáo Viên nghiên cứu, sáng tạo bao gồm nhưng không giới hạn giáo án, đề bài, bài nghiên cứu, sáng kiến, phát minh được tạo ra trong quá trình sử dụng Class For Me sẽ thuộc quyền sở hữu của Giáo Viên. Giáo Viên đảm bảo các tài sản này không xâm phạm quyền sở hữu trí tuệ của bất kỳ tổ chức, cá nhân nào và tự chịu trách nhiệm trong trường hợp phát sinh bất kỳ tranh chấp nào liên quan. Class For Me sẽ xem xét hỗ trợ Giáo Viên đăng ký quyền sở hữu trí tuệ được tạo ra dưới tên Giáo Viên trong trường hợp cần thiết.',
              content: []
            },
            {
              title: '2.4&nbsp;&nbsp;&nbsp;Nếu bạn là chủ sở hữu của quyền sở hữu trí tuệ hoặc là đại diện được ủy quyền chủ sở hữu quyền sở hữu trí tuệ và bạn tin rằng các quyền của bản thân hoặc của thân chủ có nguy cơ bị xâm phạm, vui lòng gửi văn bản đến Class For Me và cung cấp cho chúng tôi các tài liệu như hướng dẫn để hỗ trợ việc giải quyết khiếu nại. Chúng tôi sẽ dành một khoảng thời gian hợp lý để xử lý các thông tin cung cấp và sẽ phản hồi khiếu nại của bạn trong thời gian sớm nhất.',
              content: []
            },
          ]
        },
        {
          name: 'Điều khoản sử dụng',
          description: [
            {
              title: '3.1&nbsp;&nbsp;&nbsp;Người Dùng được phép sử dụng Nền Tảng và dịch vụ do Class For Me cung cấp kể từ thời điểm Người Dùng đồng ý với các điều khoản và điều kiện khi đăng ký Tài Khoản. Quyền sử dụng Nền Tảng sẽ bị chấm dứt trong trường hợp Người Dùng vi phạm bất kỳ điều khoản hoặc điều kiện nào được quy định tại Điều Khoản Dịch Vụ này hoặc các chính sách của Class For Me theo từng thời điểm. Việc chấm dứt có thể bằng thông báo hoặc không cần thông báo.',
              content: []
            },
            {
              title: '3.2&nbsp;&nbsp;&nbsp;Người Dùng cam kết:',
              content: [
                'Cung cấp đầy đủ, chính xác các thông tin được yêu cầu khi đăng ký Tài Khoản. Không kê khai thông tin gian dối hoặc lấy thông tin của người khác để đăng ký và sử dụng Nền Tảng, không cho thuê tài khoản hoặc bán tài khoản; ',
                'Đồng ý với các chính sách của Class For Me tại từng thời điểm; ',
                'Không tải lên, truyền tải hoặc bằng cách khác công khai bất cứ nội dung, hình ảnh nào trái pháp luật, có hại, đe dọa, lạm dụng, quấy rối, gây hoang mang, lo lắng, xuyên tạc, phỉ báng, xúc phạm, khiêu dâm, bôi nhọ, xâm phạm quyền riêng tư của người khác, phân biệt chủng tộc, dân tộc hoặc bất kỳ nội dung không đúng đắn nào khác; ',
                'Không đăng tải, truyền tin, hoặc bằng bất kỳ hình thức nào khác hiển thị bất kỳ Nội dung nào có sự xuất hiện của người chưa thành niên khi chưa được Phụ Huynh hoặc người giám hộ đồng ý hoặc sử dụng dịch vụ nhằm mục đích trực tiếp hoặc gián tiếp gây tổn hại cho người chưa thành niên; ',
                'Không sử dụng Dịch Vụ hoặc đăng tải Nội Dung để mạo danh bất kỳ cá nhân hoặc tổ chức nào, hoặc bằng cách nào khác xuyên tạc cá nhân hoặc tổ chức; ',
                'Không được giả tạo các tiêu đề hoặc bằng cách khác ngụy tạo các định dạng nhằm che giấu nguồn gốc của bất kỳ Nội Dung nào được truyền tải thông qua Nền Tảng; ',
                'Sử dụng ngôn từ dưới dạng lời nói hoặc văn bản và hành vi lịch sự, phù hợp trong suốt quá trình giảng dạy, học tập, tương tác và giao tiếp với Người Dùng khác trên Nền Tảng. Không sử dụng lời nói, từ ngữ cho các mục đích xâm hại, quấy rối hoặc các mục đích khác vi phạm quy định của pháp luật Việt Nam; ',
                'Không can thiệp, điều khiển, làm gián đoạn Nền Tảng hoặc máy chủ hoặc phần mềm được liên kết với Nền Tảng hoặc tới việc sử dụng và trải nghiệm Nền Tảng của người khác, hoặc không tuân thủ bất kỳ yêu cầu, quy trình, chính sách, luật lệ đối với các hệ thống được liên kết với Nền Tảng; ',
                'Không gây ra, chấp nhận hoặc ủy quyền cho việc sao chép, sửa đổi, cấu thành các sản phẩm phái sinh, hoặc chuyển thể của Nền Tảng mà không được sự cho phép rõ ràng của Class For Me; ',
                'Không thực hiện bất kỳ hành động hoặc hành vi nào có thể trực tiếp hoặc gián tiếp phá hủy, vô hiệu hóa, làm quá tải hoặc làm suy yếu Nền Tảng hoặc máy chủ hoặc hệ thống liên kết với Nền Tảng;',
                'Không sử dụng Nền Tảng cho các mục đích xâm phạm quyền riêng tư của người khác, hoặc để “lén theo dõi” người khác; ',
                'Không đăng ký sử dụng Nền Tảng để thu thập hoặc lưu trữ dữ liệu cá nhân của Người Dùng liên quan đến hành vi và hoạt động bị cấm như đề cập ở trên; và/hoặc ',
                'Không thực hiện bất kỳ hành động nào để có thể phá hoại hệ thống xếp hạng, ghi nhận ý kiến phản hồi của Class For Me. ',
              ]
            },
            {
              title: '3.3&nbsp;&nbsp;&nbsp;Giáo Viên cam kết:',
              content: [
                'Giảng dạy và kiểm tra năng lực định kỳ của học sinh theo đúng khung chương trình đã cam kết với Class For Me (“Khung Chương Trình”), không sử dụng các giáo án của giáo viên/trung tâm khác hoặc sử dụng các tài liệu/văn bản có dấu hiệu vi phạm quyền sở hữu trí tuệ để giảng dạy trên Nền Tảng. Việc sửa đổi, bổ sung Khung Chương Trình cần có sự kiểm tra và phê duyệt của Class For Me; ',
                'Chấp hành các yêu cầu, quy định cụ thể của Class For Me về trang phục, tác phong, lịch dạy học, giờ lên lớp khi tham gia giảng dạy tại Nền Tảng; ',
                'Thực hiện đúng quy trình quản lý chất lượng giảng dạy, chất lượng học tập về kiểm tra chất lượng cho Học Sinh được Class For Me quy định vào từng thời điểm; ',
                'Không ghi âm, ghi hình bằng bất kỳ phương tiện nào nếu không được sự cho phép của Class For Me trong bất kỳ giờ học nào trong suốt quá trình sử dụng Nền Tảng; ',
                'Không sử dụng Nền Tảng và Dịch Vụ cho các hoạt động nhằm mục đích tìm kiếm, lôi kéo Phụ Huynh và/hoặc Học Sinh tổ chức dạy thêm, học thêm tại nhà. ',
              ]
            },
            {
              title: '3.4&nbsp;&nbsp;&nbsp;Phụ Huynh cam kết:',
              content: [
                'Kê khai thông tin đăng ký Tài Khoản trung thực, chính xác, cập nhật nếu có thay đổi; ',
                'Hiểu rõ và giải thích rõ ràng các quy định, quy chế sử dụng Nền Tảng để Học Sinh hiểu và tuân thủ; ',
                'Phản ánh đúng và đầy đủ về tình trạng học tập và tiếp thu của Học Sinh định kỳ sau quá trình học trên Nền Tảng để Class For Me đánh giá lại, đồng thời đưa ra đúng phương pháp giảng dạy và chương trình tiếp cận phù hợp với Học Sinh; ',
                'Có chứng minh hợp lý và phù hợp về việc năng lực và sự tiếp thu trong quá trình học tập của Học Sinh không thay đổi hoặc không tiến bộ khi yêu cầu thay đổi Giáo Viên hoặc thay đổi khóa học trên Nền Tảng. Việc yêu cầu phải được thông báo đến Class For Me thông qua các hình thức hotline, email, cố vấn học tập,…',
                'Thanh toán đầy đủ và đúng thời hạn học phí cho Class For Me thông qua các hình thức được quy định tại Điều 5 của Điều Khoản Dịch Vụ này. ',
                'Chịu trách nhiệm trước Class For Me, Giáo Viên và pháp luật trong trường hợp Phụ Huynh vi phạm bất kỳ quy định nào của Điều Khoản Dịch Vụ này, các quy định khác của Nền Tảng và quy định pháp luật. ',
              ]
            },
            {
              title: '3.5&nbsp;&nbsp;&nbsp;Học Sinh cam kết:',
              content: [
                'Hiểu rõ và tuân thủ các quy định của Điều Khoản Dịch Vụ này. ',
                'Tuân thủ lịch học của khóa học và tham gia học tập đầy đủ. Trong trường hợp nghỉ ốm hoặc nghỉ phép, Phụ Huynh hoặc Học Sinh cần thông báo trước cho Giáo Viên hoặc cố vấn học tập của Class For Me để sắp xếp lịch học bù và giáo án dạy bù kiến thức cho Học Sinh. ',
                'Tuân thủ các quy định của Class For Me về quy trình kiểm tra chất lượng dạy và học, hoàn thành các bài kiểm tra đánh giá năng lực định kỳ làm cơ sở để Class For Me và Giáo Viên đưa ra đánh giá chính xác và điều chỉnh Khung Chương Trình phù hợp với từng Học Sinh. ',
                'Chịu trách nhiệm giải trình trước Phụ Huynh, Class For Me, Giáo Viên và cơ quan nhà nước có thẩm quyền hoặc những người có liên quan và phối hợp để giải quyết trong trường hợp Học Sinh vi phạm bất kỳ quy định nào của Điều Khoản Dịch Vụ này, các quy định khác của Nền Tảng và quy định pháp luật. ',
              ]
            },
            {
              title: '3.6&nbsp;&nbsp;&nbsp;Người Dùng trong quá trình sử dụng Nền Tảng được quyền khiếu nại, báo cáo đến hệ thống Class For Me trong trường hợp quyền và lợi ích của mình bị xâm phạm bao gồm nhưng không giới hạn bị xúc phạm danh dự, nhân phẩm; bị đe dọa bằng vũ lực hoặc bằng tinh thần; bị phỉ báng, thóa mạ gây ảnh hưởng đến tâm lý hoặc ảnh hưởng đến cuộc sống hằng ngày. ',
              content: []
            },
            {
              title: '3.7&nbsp;&nbsp;&nbsp;Người Dùng thừa nhận rằng Class For Me và các bên đối tác của mình có quyền nhưng không có nghĩa vụ sàng lọc, từ chối, xóa, tạm dừng, gỡ bỏ bất kỳ Nội Dung hoặc thông tin nào được đăng tải trên Class For Me. Không giới hạn ở những điều trên, Class For Me và các bên đối tác của mình có quyền gỡ bỏ bất kỳ nội dung và/hoặc gỡ bỏ, xóa, khóa bất kỳ tài khoản nào khi (a) xâm phạm đến Điều Khoản Dịch Vụ; (b) Class For Me nhận được khiếu nại từ Người Dùng khác; (c) Class For Me nhận được thông báo về vi phạm quyền sở hữu trí tuệ hoặc các yêu cầu pháp lý từ cơ quan nhà nước có thẩm quyền cho việc gỡ bỏ; hoặc (iv) những nguyên nhân khác theo quy định pháp luật. ',
              content: []
            },
            {
              title: '3.8&nbsp;&nbsp;&nbsp;Người Dùng thừa nhận, chấp thuận và đồng ý rằng Class For Me có thể truy cập, duy trì và tiết lộ thông tin từ Tài Khoản của Người Dùng trong trường hợp pháp luật yêu cầu hoặc theo lệnh của tòa án hoặc bất kỳ cơ quan chính phủ hoặc cơ quan nhà nước có thẩm quyền hoặc theo quan điểm của Class For Me thì viêc duy trì truy cập hoặc tiết lộ đó là cần thiết để: (a) tuân thủ các thủ tục pháp luật; (b) thực thi Điều Khoản Dịch Vụ; (c) phản hồi các khiếu nại về Nội dung xâm phạm đến quyền lợi của bên thứ ba; (d) phản hồi các yêu cầu của Người Dùng liên quan đến chăm sóc khách hàng; hoặc (e) bảo vệ các quyền, tài sản hoặc an toàn của Class For Me, Người Dùng và/hoặc cộng đồng. ',
              content: []
            },
          ]
        },
        {
          name: 'Vi phạm điều khoản dịch vụ',
          description: [
            {
              title: 'Tùy thuộc vào mức độ vi phạm, Class For Me có thể xem xét áp dụng một hoặc kết hợp các hình thức sau đây: ',
              content: [
                'Hạ mức độ ưu tiên hiển thị trên kết quả tìm kiếm của Phụ Huynh, Học Sinh; ',
                'Khóa tài khoản tạm thời; ',
                'Khóa tài khoản vĩnh viễn; ',
                'Gỡ khỏi hệ thống Class For Me; ',
                'Phạt vi phạm và bồi thường thiệt hại; ',
                'Giới hạn quyền sử dụng tài khoản; ',
                'Xử lý hành chính/dân sự/hình sự theo quy định pháp luật. ',
              ]
            },
          ]
        },
        {
          name: 'Mua bán khóa học ',
          description: [
            {
              title: '5.1&nbsp;&nbsp;&nbsp;Phương thức mua bán ',
              content: [
                'a. Phụ Huynh và Học Sinh có thể tìm kiếm các Giáo Viên theo môn học, bậc học mà Học Sinh và Phụ Huynh cảm thấy phù hợp với nhu cầu và năng lực của bản thân. Giá bán cho mỗi khóa học mà Giáo Viên đó đảm nhiệm sẽ được niêm yết công khai trên Nền Tảng.',
                'b. Trong trường hợp chưa có điều kiện tìm hiểu về Giáo Viên của hệ thống Class For Me, Phụ Huynh và Học Sinh có thể liên hệ với Class For Me để tư vấn và yêu cầu học thử 01 (một) buổi miễn phí để từ đó đưa ra quyết định phù hợp với nhu cầu hoặc quay lại bước tìm kiếm Giáo Viên theo quy định tại mục a Điều 5.1 nêu trên. ',
              ]
            },
            {
              title: '5.2&nbsp;&nbsp;&nbsp;Phương thức thanh toán ',
              content: [
                'Vào từng thời điểm, Class For Me hỗ trợ một hoặc nhiều phương thức thanh toán cho Phụ Huynh như sau:',
                `Thẻ tín dụng/Ghi nợ<br/>Thanh toán qua thẻ tín dụng/ghi nợ được thực hiện thông qua kênh thanh toán của bên thứ ba và danh sách thẻ được chấp nhận phụ thuộc vào kênh thanh toán mà bạn đang sử dụng. `,
                `Thanh toán bằng Thẻ ATM Nội Địa – Internet Banking<br/>Hình thức thanh toán bằng thẻ ATM nội địa – Internet Banking chỉ dành cho Người Dùng có thẻ ATM nội địa có liên kết internet banking (thanh toán trực tuyến), và không áp dụng đối với các thẻ VISA và Mastercard `,
                `Ví điện tử của đối tác Class For Me<br/>Người Dùng có thể liên kết tài khoản ngân hàng với ví điện tử được hiển thị trên Nền Tảng và thanh toán khóa học thông qua ví này. Class For Me cam kết rằng ví điện tử này là một trong những đối tác của Class For Me, được thành lập và hoạt động theo quy định pháp luật. <br/> Nếu có lỗi xảy ra khi Người Dùng thực hiện thao tác qua hình thức này, Người Dùng vui lòng thông báo/khiếu nại đến Class For Me để được hỗ trợ và giải quyết nhanh chóng. `,
              ]
            },
          ]
        },
        {
          name: 'Giải quyết tranh chấp ',
          description: [
            {
              title: '6.1&nbsp;&nbsp;&nbsp;Class For Me cố gắng đưa ra các quy tắc rõ ràng nhằm hạn chế đến mức thấp nhất hoặc hy vọng sẽ tránh được tranh chấp giữa Người Dùng và Class For Me. Tuy nhiên, nếu xảy ra tranh chấp, bạn nên nắm rõ về chính sách của Class For Me để bảo vệ quyền lợi của chính mình. ',
              content: []
            },
            {
              title: '6.2&nbsp;&nbsp;&nbsp;Trường hợp phát sinh vấn đề liên quan đến quá trình giảng dạy, học tập, Người Dùng sẽ cần đối thoại với nhau để cố gắng giải quyết tranh chấp đó bằng thảo luận giữa hai bên, và Class For Me sẽ trở thành cầu nối, kết nối nguyện vọng của các bên và cố gắng tìm ra một cách hợp lý để thu xếp. Nếu vấn đề không được giải quyết bằng thảo luận hai bên, Người Dùng có thể khiếu nại lên cơ quan có thẩm quyền của địa phương để giải quyết các tranh chấp phát sinh này. ',
              content: []
            },
            {
              title: '6.3&nbsp;&nbsp;&nbsp;Đối với tranh chấp phát sinh giữa Giáo Viên và Class For Me, các bên sẽ căn cứ dựa trên tình hình thực tế, các điều khoản quy định trong Hợp đồng cung cấp dịch vụ và các chính sách khác của Class For Me mà Giáo Viên chấp nhận và đồng ý để giải quyết trên tinh thần thiện chí, bình đẳng, các bên cùng có lợi. ',
              content: []
            },
            {
              title: '6.4&nbsp;&nbsp;&nbsp;Mỗi Người Dùng cam kết và đồng ý rằng mình sẽ không tiến hành thủ tục tố tụng hoặc bằng cách khác khiếu nại đối Class For Me hoặc các công ty đối tác của Class For Me liên quan đến bất kỳ hoạt động nào trong quá trình sử dụng Nền Tảng hoặc bất kỳ tranh chấp nào liên quan đến việc sử dụng Nền Tảng khi chưa có chứng cứ xác thực và chưa tham gia thỏa thuận, đối thoại theo quy định tại khoản 6.2 nêu trên.  ',
              content: []
            },
          ]
        },
        {
          name: 'Loại trừ trách nhiệm ',
          description: [
            {
              title: '7.1&nbsp;&nbsp;&nbsp;Class For Me không đảm bảo rằng các dịch vụ hoặc các chức tăng được tích hợp trên Nền Tảng luôn có sẵn, có thể truy cập bất kỳ lúc nào, không bị gián đoạn, an toàn, chính xác, hoàn thiện hoặc không bị lỗi, rằng các lỗi phát sinh, nếu có, sẽ được khắc phục, hoặc rằng trang Class For Me và/hoặc máy chủ sẵn có những chức năng an toàn với virus hoặc bất cứ mã, lệnh, chương trình, thành tố có hại nào khác. ',
              content: []
            },
            {
              title: '7.2&nbsp;&nbsp;&nbsp;Class For Me không chịu trách nhiệm về cách thức dạy học và truyền đạt kiến thức đối với mọi học sinh tham gia Nền Tảng, nó tùy thuộc vào phong cách giảng dạy của từng Giáo Viên. ',
              content: []
            },
            {
              title: '7.3&nbsp;&nbsp;&nbsp;Class For Me không chịu trách nhiệm về khả năng mua khóa học của Phụ Huynh, khả năng tiếp thu và tương thích của Học Sinh đối với phương pháp và nội dung giảng dạy của Giáo Viên. Người Dùng đồng ý rằng yếu tố này cần được kiểm chứng thông qua quá trình tương tác dạy và học trên thực tế, phù hợp với thời gian của khóa học mà Phụ Huynh đã mua tại Class For Me. ',
              content: []
            },
            {
              title: '7.4&nbsp;&nbsp;&nbsp;Người Dùng cần thừa nhận rằng mọi rủi ro phát sinh ngoài việc sử dụng dịch vụ của trang Class For Me sẽ thuộc về Người Dùng trong giới hạn tối đa pháp luật cho phép. ',
              content: []
            },
            {
              title: '7.5&nbsp;&nbsp;&nbsp;Class For Me không chịu trách nhiệm phát sinh từ thiệt hại gián tiếp, ngẫu nhiên, đặc biệt hoặc mang tính hệ quả nào (gồm bất kỳ mất mát nào về dữ liệu, gián đoạn dịch vụ, máy tính, điện thoại hoặc các thiết bị di động khác) phát sinh từ hoặc liên quan đến việc sử dụng trang Class For Me hoặc Nền Tảng. ',
              content: []
            },
            {
              title: '7.6&nbsp;&nbsp;&nbsp;Bạn có quyền yêu cầu chấm dứt tài khoản của bạn và/hoặc dừng sử dụng Nền Tảng trong trường hợp không thỏa mãn với Nền Tảng. ',
              content: []
            },
            {
              title: '7.7&nbsp;&nbsp;&nbsp;Trường hợp Class For Me, theo phán quyết của tòa án có thẩm quyền, phải chịu trách nhiệm trong giới hạn tối đa pháp luật cho phép (bao gồm đối với lỗi bất cẩn không đáng kể) thì trách nhiệm của Class For Me đối với Người Dùng hoặc bất kỳ bên thứ ba nào chỉ giới hạn trong một mức không cao hơn (a) khoản học phí còn lại của bạn ; hoặc (b) một khoản tiền cụ thể như trong phán quyết của tòa án các cấp có thẩm quyền. ',
              content: []
            },
            {
              title: '7.8&nbsp;&nbsp;&nbsp;Không có nội dung nào trong Điều Khoản Dịch Vụ này sẽ làm giới hạn hoặc miễn trừ bất kỳ trách nhiệm nào đối với thương vong hoặc tai nạn cá nhân do sự bất cẩn của Class For Me hoặc bất kỳ trách nhiệm nào khác có phần tham gia của Class For Me. ',
              content: []
            },
          ]
        },
        {
          name: 'Liên kết và tương tác với trang của Bên thứ ba ',
          description: [
            {
              title: '8.1&nbsp;&nbsp;&nbsp;Các đường dẫn/quảng cáo của bên thứ ba có thể xuất hiện trên Nền Tảng và khiến Người Dùng thoát khỏi Nền Tảng. Các website hoặc ứng dụng được truy cập từ các đường dẫn này đều không thuộc sự kiểm soát của Class For Me trừ những website hoặc ứng dụng của đối tác của Class For Me được tích hợp trong Nền Tảng hoặc được hướng dẫn để truy cập và vì thế bạn phải tự chịu trách nhiệm đối với tất các rủi ro khi truy cập, tương tác hoặc giao dịch trên những website hoặc ứng dụng này. ',
              content: []
            },
            {
              title: '8.2&nbsp;&nbsp;&nbsp;Người Dùng có thể tương tác với và/hoặc sử dụng dịch vụ (bao gồm tham gia vào các chương trình đào tạo, khóa học, hoặc các dịch vụ khác) của các bên thứ ba trong quá trình sử dụng Nền Tảng. Bất kỳ hoạt động nào như vậy và bất kỳ điều khoản, điều kiện, bảo đảm hoặc cam đoan nào liên quan đến hoạt động đó, sẽ chỉ là giao dịch/thỏa thuận giữa Người Dùng và bên thứ ba đó. ',
              content: []
            },
            {
              title: '8.3&nbsp;&nbsp;&nbsp;Class For Me cung cấp dịch vụ cho Người Dùng theo quy định tại Điều Khoản Dịch Vụ này. Người Dùng ghi nhận và đồng ý rằng, khi Người Dùng lựa chọn sử dụng dịch vụ khác của bên thứ ba hoặc bên đối tác thông qua Nền Tảng, bên thứ ba hoặc bên đối tác sẽ yêu cầu bạn đồng ý với các điều khoản và điều kiện kèm theo. Việc chấp nhận các điều khoản dịch vụ này sẽ cấu thành một ràng buộc pháp lý riêng biệt giữa bạn và các bên thứ ba đó hoặc các đối tác của Class For Me. ',
              content: []
            },
            {
              title: '8.4&nbsp;&nbsp;&nbsp;Người Dùng đồng ý rằng Class For Me cung cấp các đường dẫn hoặc tạo điều kiện cho sự tương tác này với bên thứ ba không phải đối tác của Class For Me thông qua Nền Tảng đơn thuần để tạo sự thuận lợi, và sẽ không, dù bất kỳ hình thức nào, hàm ý hoặc thể hiện việc liên kết, xác nhận hoặc bảo trợ của Class For Me đối với bất kỳ website hoặc ứng dụng được liên kết nào và/hoặc bất kỳ nội dung nào trong đó. ',
              content: []
            },
          ]
        },
        {
          name: 'Đóng góp của người dùng đối với các nội dung và dịch vụ cung cấp ',
          description: [
            {
              title: '9.1&nbsp;&nbsp;&nbsp;Khi gửi, đăng tải, truyền tải bất kỳ nội dung nào trên Nền Tảng bao gồm nhưng không giới hạn tài liệu chỉnh sửa chương trình đào tạo của Class For Me, ý kiến bổ sung, nhận xét, các tài liệu đóng góp khác mang tính học thuật, bạn khẳng định và đảm bảo rằng bạn có đầy đủ các quyền về sở hữu trí tuệ và là người chịu trách nhiệm duy nhất đối với bất cứ nội dung gì bạn đóng góp đăng tải trên Nền Tảng, bao gồm trách nhiệm về độ chính xác, độ tin cậy, tính nguyên bản, rõ ràng các quyền, tính tuân thủ pháp luật và các giới hạn pháp lý liên quan đến bất kỳ nội dung nào. ',
              content: []
            },
            {
              title: '9.2&nbsp;&nbsp;&nbsp;Người Dùng theo đây cấp quyền cho Class For Me, các bên đối tác của Class For Me, một cách liên tục, không hủy ngang, mang tính toàn cầu, độc quyền, không bản quyền các quyền sử dụng, sao chép, phân phối, tái bản, chuyển giao, thay đổi, chỉnh sửa, tạo các sản phẩm phái sinh , thể hiện công khai, và thực hiện nội dung đóng góp đó dưới bất kỳ phương tiện và kênh truyền thông nào nhằm mục đích phát triển nội dung Khung Chương Trình; phát triển và hoàn thiện Nền Tảng (hoặc các sản phẩm phái sinh của Nền Tảng). Quyền mà bạn trao cho chúng tôi chỉ chấm dứt khi bạn hoặc Class For Me loại bỏ nội dung đóng góp ra khỏi Nền Tảng. Bạn hiểu rằng sự đóng góp của bạn có thể được chuyển giao sang nhiều hệ thống khác nhau và được thay đổi để phù hợp và đáp ứng các yêu cầu về kỹ thuật cũng như yêu cầu về nội dung của các hệ thống đó. ',
              content: []
            },
          ]
        },
        {
          name: 'Tính riêng lẻ',
          description: [
            'Nếu bất kì điều khoản nào trong Điều Khoản Dịch Vụ này không hợp pháp, bị bãi bỏ, hoặc vì bất kỳ lý do nào không thể thực thi theo pháp luật, thì điều khoản đó sẽ được tách ra khỏi các điều khoản và điều kiện này và sẽ không ảnh hưởng tới hiệu lực cũng như tính thi hành của bất kỳ điều khoản nào còn lại. '
          ]
        },
        {
          name: 'Bồi thường ',
          description: [
            'Người Dùng đồng ý rằng sẽ bảo vệ, bồi thường, không gây hại cho Class For Me, công ty con, công ty liên kết, công ty thành viên, các bên đối tác (bao gồm cả bên tư vấn pháp lý) và nhân viên của Class For Me đối với bất kỳ khiếu nại, thủ tục tố tụng, chi phí, thiệt hại, tổn thất, trách nhiệm và phí tổn (bao gồm cả chi phí pháp lý, chi phí giải quyết tranh chấp) mà Class For Me phải gánh chịu phát sinh từ việc (a) tranh chấp liên quan đến giao dịch được thực hiện trên Nền Tảng, giao dịch thực hiện với bên đối tác, bên thứ ba thông qua Nền Tảng (b) vi phạm hoặc không tuân thủ bất kỳ điều khoản nào trong các Điều Khoản Dịch Vụ này hoặc bất kỳ chính sách hoặc hướng dẫn nào (c) vi phạm của bạn đối với bất kỳ luật hoặc bất kỳ các quyền của bên thứ ba nào, hoặc (d) bất kỳ nội dung vi phạm pháp luật nào được đăng tải bởi Người Dùng. '
          ]
        },
        {
          name: 'Luật áp dụng ',
          description: [
            'Các Điều Khoản Dịch Vụ này sẽ được điều chỉnh bởi và giải thích theo luật pháp của Việt Nam. Bất kỳ tranh chấp, khiếu nại hoặc sự bất đồng dưới bất cứ hình thức nào phát sinh từ hoặc liên quan đến các Điều Khoản Dịch Vụ này liên quan đến Class For Me hoặc bất kỳ bên nào là đối tượng của các Điều Khoản Dịch Vụ này sẽ được giải quyết bằng Trung Tâm Trọng Tài Quốc Tế Việt Nam (VIAC). Ngôn ngữ của trọng tài là Tiếng Việt. Chi phí trọng tài do bên thua kiện chịu. '
          ]
        },
        {
          name: 'Quy định chung ',
          description: [
            {
              title: '13.1&nbsp;&nbsp;&nbsp;Điều Khoản Dịch Vụ này có hiệu lực kể từ thời điểm ban hành. Class For Me có quyền chỉnh sửa, bổ sung các Điều Khoản Dịch Vụ này vào bất cứ thời điểm nào thông qua việc đăng tải các Điều Khoản Dịch Vụ được chỉnh sửa lên Nền Tảng. Việc Người Dùng tiếp tục sử dụng Nền Tảng sau khi việc thay đổi được đăng tải sẽ cấu thành việc Người Dùng chấp nhận và đồng ý với Điều Khoản Dịch Vụ được chỉnh sửa. ',
              content: []
            },
            {
              title: '13.2&nbsp;&nbsp;&nbsp;Người Dùng không được phép chuyển giao, cấp lại quyền hoặc chuyển nhượng bất kỳ các quyền hoặc nghĩa vụ được cấp cho Người Dùng theo đây. ',
              content: []
            },
            {
              title: '13.3&nbsp;&nbsp;&nbsp;Các điều khoản được quy định trong Điều Khoản Dịch Vụ này và bất kỳ các thỏa thuận hay chính sách được bao gồm hoặc được dẫn chiếu trong Điều Khoản Dịch Vụ này cấu thành nên sự thỏa thuận của các bên đối với dịch vụ và Nền Tảng. Các bên không dựa vào bất kỳ tuyên bố, khẳng định, đảm bảo, cách hiểu, cam kết, lời hứa hoặc cam đoan nào của bất kỳ người nào để thực hiện các hành vi trái với Điều Khoản Dịch Vụ này và trái với quy định pháp luật.  ',
              content: []
            },
          ]
        },
      ]
    },
    {
      title: '',
      content: [
        'TÔI ĐÃ ĐỌC CÁC ĐIỀU KHOẢN DỊCH VỤ NÀY VÀ ĐỒNG Ý VỚI TẤT CẢ CÁC ĐIỀU KHOẢN NHƯ TRÊN CŨNG NHƯ BẤT KỲ ĐIỀU KHOẢN NÀO ĐƯỢC CHỈNH SỬA SAU NÀY.  BẰNG CÁCH BẤM NÚT “<b>ĐĂNG KÝ TÀI KHOẢN</b>” KHI ĐĂNG KÝ SỬ DỤNG NỀN TẢNG CLASS FOR ME, TÔI HIỂU RẰNG TÔI ĐANG XÁC NHẬN ĐIỀU KHOẢN DỊCH  VỤ NÀY BẰNG CHỮ KÝ ĐIỆN TỬ CỦA MÌNH MÀ TÔI HIỂU RẰNG NÓ CÓ GIÁ TRỊ VÀ HIỆU LỰC TƯƠNG TỰ NHƯ CHỮ KÝ TÔI KÝ BẰNG TAY. ',
        'Điều khoản Dịch vụ này có hiệu lực kể từ ngày 19 tháng 5 năm 2023 cho đến khi có Điều khoản Dịch vụ khác thay thế. '
      ]
    }
  ]
  return (
    <div className="w-full max-w-[1080px] px-4 md:px-10 mx-auto flex flex-col py-[80px] policy-page">
      <p className="text-center text-30-40 mb-8 font-svn-gilroy-600">ĐIỀU KHOẢN DỊCH VỤ CLASS FOR ME</p>
      {data.map((el: any, index: number) => {
        return (
          <div key={index}>
            {el.title &&
              <p className="mb-4 font-svn-gilroy-600 text-24-28">{el.title}</p>
            }
            <div className="mb-4 flex flex-col gap-2">
              {el.content.map((v: any, idx: number) => {
                if (v.name) {
                  return (
                    <div key={idx} className="flex flex-col gap-2 mb-3">
                      <p className="text-20-24 mb-2 font-svn-gilroy-600">{idx + 1}. {v.name}</p>
                      {v.description.map((elm: any, i: number) => {
                        if (elm.title) {
                          return (
                            <div key={i} className="flex flex-col gap-2">
                              <i className="text-16-24 font-svn-gilroy-500" dangerouslySetInnerHTML={{ __html: elm.title }} />
                              <ul>
                                {elm.content.map((u: string, ii: number) => {
                                  return (
                                    <li dangerouslySetInnerHTML={{ __html: u }} key={ii} className="ml-8 list-disc font-svn-gilroy-400" />
                                  )
                                })}
                              </ul>
                            </div>
                          )
                        }
                        return (
                          <p dangerouslySetInnerHTML={{ __html: tabSpace + elm }} key={i} />
                        )
                      })}
                    </div>
                  )
                }
                return (
                  <p dangerouslySetInnerHTML={{ __html: tabSpace + v }} key={idx} />
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default TermConditionsPage;
