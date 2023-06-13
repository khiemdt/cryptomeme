import React from "react";

const PrivacyPolicyPage = () => {
  const tabSpaceHead = '&nbsp;'
  const tabSpace = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
  const data = [
    {
      title: 'Giới thiệu về Class For Me và Chính sách bảo mật thông tin ',
      content: [
        {
          name: 'a. Giới thiệu Class For Me',
          description: [
            '<b>(i)</b>&nbsp;&nbsp;&nbsp;Chào mừng Bạn đến với Chính sách bảo mật của Class For Me được vận hành bởi Công ty Cổ phần Authentic Education Hub (sau đây được gọi chung là “<b>Chúng tôi</b>”). Class For Me là nền tảng trực tuyến dạy và học kết nối giáo viên với học sinh có nhu cầu nâng cao kiến thức, kết quả học tập tuyến, bao gồm cả phiên bản trên website và phiên bản trên điện thoại (sau đây được gọi chung là “<b>Nền Tảng</b>”). Với sứ mệnh và tầm nhìn mong muốn mang tới cho học sinh những kiến thức được chọn lọc, giúp học sinh giải đáp những khó khăn khi tham gia học tập trên ghế nhà trường.',
            '<b>(ii)</b>&nbsp;&nbsp;&nbsp;Class For Me nhận thấy rằng Nền Tảng này mang lại không gian trao đổi thông tin dữ liệu chi tiết bao gồm kiến thức, thông tin cá nhân, trình độ, mức độ quan tâm đến các môn học, và nhu cầu của phụ huynh, học sinh, giáo viên tham gia dạy học, trung tâm đào tạo hay bất kỳ bên nào có tài khoản được tạo lập trên Nền Tảng (sau đây gọi là “<b>Người Dùng</b>”, “<b>Khách Hàng</b>” hoặc “<b>Bạn</b>”). Tuy nhiên những thông tin này không phải ai cũng mong muốn chia sẻ rộng rãi. Chúng tôi và các bên liên kết, các đối tác của Chúng tôi, tôn trọng quyền riêng tư của Người Dùng khi sử dụng Nền Tảng và cam kết rằng tất cả các thông tin mà Người Dùng cung cấp cho chúng tôi là những thông tin được bảo mật tuyệt đối và được sử dụng đúng mục đích dạy và học trên Nền Tảng.',
            '<b>(iii)</b>&nbsp;&nbsp;&nbsp;Bên cạnh đó, trên Nền Tảng cũng có những thông tin mà chúng tôi cần được Người Dùng bảo mật (nội dung bài giảng, nội dung trao đổi trong lớp học giữa giáo viên và học sinh dưới bất kỳ hình thức nào như hình ảnh, ghi âm, lời nói hoặc chữ viết,…).',
          ]
        },
        {
          name: 'b. Chính sách bảo mật trên Nền tảng',
          description: [
            '<b>(iv)</b>&nbsp;&nbsp;&nbsp;Chúng tôi nhận biết tầm quan trọng của dữ liệu cá nhân mà Bạn đã tin tưởng giao cho Chúng tôi và tin rằng Chúng tôi có trách nhiệm quản lý, bảo vệ và xử lý dữ liệu cá nhân của Bạn một cách thích hợp. Chính sách bảo mật được thiết lập giúp Người Dùng biết được cách thức chúng tôi thu thập, sử dụng, tiết lộ, lưu trữ và xử lý dữ liệu mà chúng tôi thu thập được trong quá trình cung cấp cho Người Dùng các dịch vụ hoặc quyền truy cập Nền Tảng. Chúng tôi sẽ chỉ thu thập, sử dụng, tiết lộ, lưu trữ và xử lý dữ liệu cá nhân của Người Dùng theo Chính sách bảo mật này.',
            '<b>(v)</b>&nbsp;&nbsp;&nbsp;Chúng tôi cam kết rằng sẽ nỗ lực hết sức sử dụng các biện pháp thích hợp để các thông tin mà Người Dùng cung cấp cho Class For Me, trong quá trình sử dụng Nền Tảng được bảo mật và bảo vệ khỏi sự truy cập trái phép.',
            '<b>(vi)</b>&nbsp;&nbsp;&nbsp;Bằng việc đăng ký một tài khoản với chúng tôi hoặc truy cập Nền tảng, Người Dùng đồng ý với các điều khoản quy định tại chính sách bảo mật này khi sử dụng Nền Tảng. Đồng thời, Người Dùng cũng cam kết rằng đồng ý với các điều khoản bảo mật khác của các đối tác và các bên liên kết của Class For Me trong trường hợp ứng dụng được liên kết với ứng dụng khác nhằm mục đích vận hành Nền Tảng.',
            '<b>(vii)</b>&nbsp;&nbsp;&nbsp;Tất cả các điều khoản này được áp dụng cho Người Dùng sử dụng Nền Tảng.',
            '<b>(viii)</b>&nbsp;&nbsp;&nbsp;Các thông tin cá nhân được lưu trữ trên các máy chủ của Class For Me tại Việt Nam.',
            '<b>(ix)</b>&nbsp;&nbsp;&nbsp;Chúng tôi có thể cập nhật Chính sách bảo mật thông tin tại từng thời điểm. Bất kỳ thay đổi nào được Chúng tôi thực hiện đối với Chính sách bảo mật này trong tương lai sẽ được phản ánh trên Nền Tảng này và những thay đổi quan trọng sẽ được thông báo đến bạn. Bạn đồng ý rằng bạn có trách nhiệm thường xuyên xem xét và kiểm tra Chính sách này để biết nếu có bất kỳ cập nhật hoặc thay đổi nào đã được thực hiện đối với Chính sách này.',
            'Xin vui lòng đọc bản Chính sách bảo mật thông tin dưới đây để hiểu hơn những cam kết mà chúng tôi thực hiện nhằm tôn trọng và bảo vệ quyền lợi của Người Dùng.',
            // {
            //   title: '(ix)  Chính sách bảo mật thông tin bao gồm các nội dung sau:',
            //   content: [
            //     'Mục đích thu thập thông tin;',
            //     'Các dữ liệu mà chúng tôi thu thập từ Người Dùng;',
            //     'Thời gian bảo mật thông tin và lưu trữ thông tin;',
            //     'Cách chúng tôi sử dụng dữ liệu thu thập được từ Người Dùng;',
            //     'An toàn trong việc sử dụng dữ liệu khi vận hành Nền Tảng;',
            //     'Truy cập, sửa đổi, và cập nhật thông tin cá nhân của Nền Tảng;',
            //     'Bảo mật thông tin với bên thứ ba;',
            //     'Cơ chế tiếp nhận và giải quyết khiếu nại; và',
            //     'Hiệu lực chính sách bảo mật'
            //   ]
            // }
          ]
        }
      ]
    },
    {
      title: 'Dữ liệu thu thập từ Người Dùng',
      content: [
        '<b>(i)</b>&nbsp;&nbsp;&nbsp;Thông tin được thu thập khi Người Dùng đồng ý cung cấp thông tin;',
        '<b>(ii)</b>&nbsp;&nbsp;&nbsp;Dữ liệu cá nhân bao gồm các thông tin họ tên, giới tính, ngày sinh, thông tin liên lạc, số điện thoại, địa chỉ gửi thư, địa chỉ email,…',
        '<b>(iii)</b>&nbsp;&nbsp;&nbsp;Dữ liệu thông tin trong quá trình tham gia hoạt động trên Nền Tảng bao gồm nhưng không giới hạn hình ảnh, video, nội dung trao đổi học tập trong lớp học;',
        '<b>(iv)</b>&nbsp;&nbsp;&nbsp;Dữ liệu thanh toán, bao gồm thông tin thẻ ngân hàng, thẻ tín dụng, tài khoản ngân hàng, tài khoản thanh toán,...',
        '<b>(v)</b>&nbsp;&nbsp;&nbsp;Dữ liệu, thông tin mà Người Dùng phản hồi, kết quả khảo sát, khi tiếp nhận thông tin tiếp thị từ chúng tôi và các mối quan tâm của Người Dùng, cuộc trò chuyện, thư điện tử, lịch sử cuộc gọi thoại của Người Dùng trên Nền Tảng với nhau hoặc với bất kỳ bên nào khác (nếu có)',
        '<b>(vi)</b>&nbsp;&nbsp;&nbsp;Dữ liệu thông tin về những người, tài khoản, chủ đề, nội dung mà Người Dùng kết nối, cũng như cách mà Người Dùng tương tác trên Nền Tảng của chúng tôi hoặc các ứng dụng khác liên kết với Nền Tảng chẳng hạn như những giáo viên mà bạn tương tác nhiều nhất, các môn học mà bạn lựa chọn hoặc các chủ đề, nội dung bạn tham gia.',
        '<b>(vii)</b>&nbsp;&nbsp;&nbsp;Dữ liệu mà người khác cung cấp về Người Dùng, chẳng hạn như nội dung, thông tin liên lạc và thông tin mà người khác cung cấp khi sử dụng Nền Tảng của chúng tôi. Thông tin này có thể bao gồm thông tin về Người Dùng, chẳng hạn như người khác chia sẻ ảnh có mặt Người Dùng hoặc thông tin liên hệ của Người Dùng.',
        '<b>(viii)</b>&nbsp;&nbsp;&nbsp;Dữ liệu vị trí được thu thập từ thông tin Người Dùng cung cấp hoặc từ thiết bị của Người Dùng khi truy cập và sử dụng nền tảng của chúng tôi, chẳng hạn như vị trí GPS. ',
        '<b>(ix)</b>&nbsp;&nbsp;&nbsp;Dữ liệu thu thập được từ thiết bị của Người Dùng và các ứng dụng liên kết với Nền Tảng mà Người Dùng sử dụng trong quá trình hoạt động trên Nền Tảng, dữ liệu thông tin từ tài khoản cá nhân của Người Dùng hoặc các thông tin trên thiết bị của Người Dùng nếu Người Dùng chọn tải lên, đồng bộ hoặc nhập thông tin đó từ thiết bị của mình. Chúng tôi thu thập thông tin từ về máy tính, điện thoại, TV được kết nối với các thiết bị kết nối web khác mà Người Dùng sử dụng để tích hợp với ứng dụng của chúng tôi.  ',
        '<b>(x)</b>&nbsp;&nbsp;&nbsp;<b>Các thuộc tính thiết bị:</b> những thông tin như hệ điều hành, phiên bản phần cứng, phần mềm, mức pin, cường độ tín hiệu, dung lượng bộ nhớ trống, plugin, loại trình duyệt, tên cũng như loại của tệp và ứng dụng; ',
        '<b>(xi)</b>&nbsp;&nbsp;&nbsp;<b>Hoạt động trên thiết bị:</b> Thông tin về các hoạt động và hành vi được thực hiện trên thiết bị, chẳng hạn như một cửa sổ xuất hiện ở nền trước hay nền sau hoặc các chuyển động của chuột (thông tin này có thể giúp phân biệt người thật với bot). ',
        '<b>(xii)</b>&nbsp;&nbsp;&nbsp;<b>Dữ liệu từ cài đặt thiết bị:</b> Thông tin Người Dùng cho phép chúng tôi thu thập khi Người Dùng cho phép đồng bộ dữ liệu trên thiết bị chẳng hạn như sổ địa chỉ, danh bạ, nhật ký cuộc gọi, nhật ký sms, ảnh, video,… ',
        '<b>(xiii)</b>&nbsp;&nbsp;&nbsp;<b>Dữ liệu Cookie:</b> Cookie là các tệp văn bản nhỏ (thường bao gồm các chữ cái và số) được đặt trong bộ nhớ của trình duyệt hoặc thiết bị của Người Dùng khi truy cập một trang web hoặc xem một tin nhắn. Cookie cho phép chúng tôi nhận biết một thiết bị hoặc một trình duyệt cụ thể. Cookie không thể đọc thông tin trên ổ cứng của Người Dùng hay thông tin của các cookie được gửi đến bởi các trang web khác. Cookie vô hại với hệ thống của Người Dùng. Người Dùng có thể từ chối hoặc đồng ý tất cả các cookie gửi đến. ',
        '<b>(xiv)</b>&nbsp;&nbsp;&nbsp;<b>Mạng và kết nối:</b> thông tin như tên của nhà mạng di động hoặc ISP, ngôn ngữ, múi giờ, số điện thoại di động, các thông tin được tự động tạo ra khi Người Dùng sử dụng website như thông tin IP, cookies, đăng nhập website... ',
      ]
    },
    {
      title: 'Mục đích thu thập thông tin',
      content: [
        '<b>(i)</b>&nbsp;&nbsp;&nbsp;Thu thập thông tin nhằm nắm rõ hơn nhu cầu của Người Dùng, từ đó, nhằm cung cấp sản phẩm, dịch vụ tốt, gần nhất và phù hợp nhất. ',
        '<b>(ii)</b>&nbsp;&nbsp;&nbsp;Để Người Dùng tiếp cận các chính sách bao gồm chính sách cập nhật bài giảng, cập nhật tin tức mới, chính sách tri ân, quà tặng,… ',
        '<b>(iii)</b>&nbsp;&nbsp;&nbsp;Dịch vụ chăm sóc khách hàng;',
        '<b>(iv)</b>&nbsp;&nbsp;&nbsp;Nắm bắt xu hướng quan tâm của Người Dùng để có cái nhìn hoàn chỉnh hơn về nhu cầu, mức độ quan tâm đến các môn học, sở thích, từ đó cho phép chúng tôi tiếp cận gần nhất với người dùng để cải thiện chất lượng dịch vụ, nâng cấp ứng dụng mang đến trải nghiệm thú vị nhất, bổ ích nhất cho người dùng.<br/>Ngăn ngừa hoạt động giả mạo thông tin Người Dùng.',
      ]
    },
    {
      title: 'Thời gian bảo mật và thời gian lưu trữ ',
      content: [
        '<b>(i)</b>&nbsp;&nbsp;&nbsp;Thông tin được bảo mật kể từ khi bắt đầu đăng ký Nền Tảng. ',
        '<b>(ii)</b>&nbsp;&nbsp;&nbsp;Thông tin được lưu trữ cho đến khi Người Dùng có yêu cầu hủy bỏ. '
      ]
    },
    {
      title: 'Cách chúng tôi sử dụng thông tin thu thập được từ bạn như thế nào?',
      content: [
        '<b>a.</b>&nbsp;&nbsp;&nbsp; Người Dùng đồng ý cho phép Chúng tôi được sử dụng các cụm thông tin dưới đây khi Người Dùng cung cấp khi truy cập Nền Tảng cho các mục đích tương ứng với điều khoản tại điều 3 như sau: ',
        '<b>Cung cấp dịch vụ phù hợp:</b> Chúng tôi sử dụng thông tin liên quan đến thông tin cá nhân, vị trí, chẳng hạn vị trí hiện tại của Người Dùng, nơi Người Dùng sinh sống, địa điểm Người Dùng đi học, đi làm để cung cấp, cá nhân hóa ứng dụng, sản phẩm của chúng tôi, để Người Dùng được lựa chọn những dịch vụ gần nơi Người Dùng sinh sống, học tập và làm việc nhất. Thông tin liên quan đến vị trí có thể dựa trên những dữ liệu như vị trí chính xác của thiết bị (nếu Người Dùng đã cho phép chúng tôi thu thập).',
        '<b>Tăng chất lượng dịch vụ:</b> Chúng tôi sử dụng thông tin phản hồi của Người Dùng về chất lượng dịch vụ, định hướng, nhu cầu, để phát triển, thay đổi nội dung bài giảng, cách thức giảng dạy sao cho phù hợp.',
        '<b>Hiểu trải nghiệm Người Dùng và phục vụ cho quá trình cải thiện ứng dụng:</b> Chúng tôi sử dụng thông tin Người Dùng cung cấp thông tin các bài đánh giá, khảo sát, nghiên cứu, thử nghiệm để hiểu hơn về trải nghiệm Người Dùng trên ứng dụng và Nền tảng, cải thiện ứng dụng và nâng cao chất lượng. ',
        '<b>Chăm sóc Người Dùng:</b> Sử dụng các thông tin trao đổi, giao tiếp của Người Dùng trên nền tảng nhằm giúp giải quyết mọi vấn đề mà Người Dùng đang gặp phải. Có thể sử dụng email, số điện thoại để thông báo cho Người Dùng biết về sản phẩm, dịch vụ, các bản cập nhật ứng dụng, thông tin mới liên quan đến các vấn đề Người Dùng quan tâm.',
        '<b>Tiếp thị và quảng cáo:</b> Để trích lọc được thêm các đặc điểm liên quan đến Người Dùng dựa trên dữ liệu cá nhân mà Người Dùng cung cấp (cho chúng tôi hoặc các bên thứ ba), nhằm cung cấp đến Người Dùng các thông tin trọng tâm và/hoặc liên quan hơn;',
        '<b>Đo lường, phân tích và các dịch vụ kinh doanh khác:</b> Chúng tôi sử dụng thông tin thu thập được về cách mà bạn sử dụng Nền Tảng của chúng tôi, chẳng hạn loại nội dung Người Dùng xem hoặc tương tác, tính năng bạn sử dụng, hành động bạn thực hiện, những người hoặc tài khoản bạn tương tác; và thời gian, tần suất cũng như khoảng thời gian hoạt động của Người Dùng nhằm cung cấp số liệu cụ thể cho phụ huynh thông tin về hiệu quả học tập, sở thích của các con; cung cấp cho giáo viên xu hướng quan tâm của phụ huynh và học sinh;',
        '<b>Tăng tính an toàn, bảo mật và toàn vẹn:</b> Chúng tôi sử dụng thông tin mình có để xác minh tài khoản và hoạt động, chống hành vi có hại, phát hiện và ngăn chặn spam cũng như các trải nghiệm tiêu cực khác, duy trì tính toàn vẹn của Nền Tảng, đồng thời tăng cường tính an toàn và bảo mật cả ở trên lẫn ngoài Nền Tảng. Chẳng hạn như chúng tôi sử dụng dữ liệu mình có để điều tra hoạt động đáng ngờ/các hoạt động vi phạm chính sách hay điều khoản của chúng tôi hoặc phát hiện khi một người nào đó cần trợ giúp.',
        '<b>Liên lạc với Người Dùng:</b> Chúng tôi sử dụng thông tin mình có để gửi cho Người Dùng các thông tin tiếp thị, thông báo cho Người Dùng về Nền Tảng của chúng tôi, cũng như cho Người Dùng biết về chính sách và điều khoản của chúng tôi. Chúng tôi cũng sử dụng thông tin của Người Dùng để trả lời khi Người Dùng liên hệ với chúng tôi.',
        '<b>Pháp lý và vận hành:</b><br/> (a) xác định danh tính của Người Dùng liên quan đến mục đích phát hiện gian lận;<br/> (b) xử lý khiếu nại, phản hồi, thực hiện chế tài và tháo gỡ liên quan đến bất kỳ nội dung vào mà Người Dùng đã tham gia, trải nghiệm trên nền tảng;<br/> (c) để thống kê và nghiên cứu cho các yêu cầu báo cáo nội bộ và báo cáo theo quy định pháp luật và/hoặc yêu cầu lưu trữ hồ sơ;…',
        'Hoặc bất kỳ mục đích nào mà chúng tôi thông báo cho Người Dùng tại thời điểm xin sự cho phép của Người Dùng. ',
        '<b>b.</b>&nbsp;&nbsp;&nbsp; Người Dùng đồng ý cho Chúng tôi sử dụng thông tin đã thu thập được từ các cookie và công nghệ tương tự nhằm cải thiện trải nghiệm Người Dùng và chất lượng chung của các sản phẩm, dịch vụ của Chúng tôi.  ',
      ]
    },
    {
      title: 'Bảo mật thông tin với bên thứ ba',
      content: [
        'Chúng tôi sẽ không cung cấp thông tin cá nhân của Người Dùng cho bất kỳ bên thứ ba nào, trừ một số hoạt động sau đây:',
        '<b>(i)</b>&nbsp;&nbsp;&nbsp;Các đối tác là bên cung cấp dịch vụ cho chúng tôi liên quan đến việc nghiên cứu phát triển Nền Tảng, tổ chức giảng dạy và chỉ giới hạn trong phạm vi thông tin cần thiết cũng như áp dụng các quy định đảm bảo an ninh, bảo mật các thông tin cá nhân. ',
        '<b>(ii)</b>&nbsp;&nbsp;&nbsp;Chúng tôi có thể sử dụng dịch vụ từ một nhà cung cấp dịch vụ là bên thứ ba để thực hiện một số hoạt động liên quan đến Nền Tảng như sửa chữa, bảo trì, nâng cấp ứng dụng và khi đó bên thứ ba này có thể truy cập hoặc xử lý các thông tin cá nhân trong quá trình cung cấp các dịch vụ đó. Chúng tôi yêu cầu bên thứ ba này tuân thủ mọi luật lệ về bảo vệ thông tin cá nhân liên quan và các yêu cầu về an ninh liên quan đến thông tin cá nhân. ',
        '<b>(iii)</b>&nbsp;&nbsp;&nbsp;Các chương trình liên kết, hợp đồng thực hiện, thuê ngoài cho các mục đích được nêu tại mục (ii) và luôn áp dụng các yêu cầu bảo mật thông tin cá nhân.',
        '<b>(iv)</b>&nbsp;&nbsp;&nbsp;Yêu cầu pháp lý: Chúng tôi có thể tiết lộ các thông tin cá nhân nếu điều đó do luật pháp yêu cầu và tiết lộ như vậy là cần thiết một cách hợp lý để tuân thủ các quy trình pháp lý. ',
        '<b>(v)</b>&nbsp;&nbsp;&nbsp;Chuyển giao kinh doanh (nếu có): trong trường hợp sáp nhập, hợp nhất toàn bộ hoặc một phần với công ty khác, người mua sẽ có quyền truy cập thông tin được chúng tôi lưu trữ, duy trì trong đó bao gồm các thông tin cá nhân của Người Dùng. '
      ]
    },
    {
      title: 'An toàn trong việc sử dụng dữ liệu khi vận hành',
      content: [
        'Class For Me nỗ lực làm việc để bảo vệ chính mình và người dùng của mình không bị truy cập trái phép, tiết lộ, phá hoại thông tin mà Class For Me nắm giữ. Cụ thể như sau:',
        '<b>(i)</b>&nbsp;&nbsp;&nbsp;Class For Me thu thập, lưu trữ và xử lý thông tin của mình kể cả biện pháp an ninh vật chất nhằm bảo vệ chống truy cập trái phép vào hệ thống; ',
        '<b>(ii)</b>&nbsp;&nbsp;&nbsp;Class For Me bảo đảm an toàn trong môi trường vận hành: chúng tôi lưu trữ thông tin cá nhân Người Dùng trong môi trường vận hành an toàn, chỉ cho phép nhân viên và người đại diện của Class For Me truy cập thông tin cá nhân vì họ là những người cần biết thông tin này để xử lý các thông tin đó và họ phải chịu sự chi phối của nghĩa vụ bảo mật thông tin nghiêm ngặt trong Hợp đồng, có thể bị kỷ luật, chấm dứt hợp đồng và bồi thường thiệt hại nếu họ không tuân thủ theo các nghĩa vụ đó. ',
        '<b>(iii)</b>&nbsp;&nbsp;&nbsp;Trường hợp máy chủ của Class For Me bị tấn công dẫn đến bị lộ hoặc mất dữ liệu thông tin cá nhân của Người Dùng, chúng tôi có trách nhiệm phối hợp với cơ quan chức năng để điều tra, giải quyết, xử lý kịp thời và thông báo cho Người Dùng được biết. ',
      ]
    },
    {
      title: 'Truy cập, sửa đổi, và cập nhật thông tin cá nhân của Người Dùng',
      content: [
        '<b>(i)</b>&nbsp;&nbsp;&nbsp;Bất kể thời điểm nào Người Dùng truy cập ứng dụng, Class For Me sẽ cố gắng cung cấp cho Người Dùng quyền truy cập thông tin cá nhân của mình. Nếu thông tin bị sai hoặc không chính xác, chúng tôi sẽ cung cấp cho Người Dùng cách để cập nhật nhanh chóng hoặc xóa thông tin đó, trừ các thông tin mà chúng tôi phải giữ lại cho mục đích pháp lý hoặc kinh doanh hợp pháp. Khi cập nhật các thông tin cá nhân, Class For Me có thể yêu cầu Người Dùng xác minh danh tính trước khi Class For Me xử lý yêu cầu của Người Dùng',
        '<b>(ii)</b>&nbsp;&nbsp;&nbsp;Chúng tôi có thể từ chối các yêu cầu lặp lại nhiều lần một cách bất hợp lý, đòi hỏi các nỗ lực không tương xứng về kỹ thuật, gây rủi ro đến sự riêng tư của người khác hoặc quá phi thực tế. (ví dụ: thay đổi thông tin số điện thoại quá 03 lần/ngày);',
        '<b>(iii)</b>&nbsp;&nbsp;&nbsp;Chúng tôi sẽ có thể cung cấp quyền truy cập và chỉnh sửa thông tin, Class For Me cung cấp quyền này là miễn phí, trừ khi việc đó đòi hỏi sự nỗ lực không tương xứng. Nếu đòi hỏi của Người Dùng vượt quá phạm vi cung cấp quyền miễn phí trong trường hợp này, chúng tôi có thể tính một khoản phí hợp lý cho bạn để giải quyết và xử lý yêu cầu truy cập dữ liệu cá nhân của bạn. Nếu chúng tôi có tính phí, chúng tôi sẽ cung cấp cho bạn ước tính lệ phí bằng văn bản.',
        '<b>(iv)</b>&nbsp;&nbsp;&nbsp;Chúng tôi bảo lưu quyền từ chối sửa dữ liệu cá nhân của Người Dùng theo các quy định của pháp luật về bảo vệ bí mật thông tin cá nhân, trường hợp các điều luật đó yêu cầu và/hoặc cho phép một tổ chức từ chối sửa dữ liệu cá nhân trong một số trường hợp cụ thể mà luật quy định.  Class For Me cố gắng duy trì các sản phẩm, dịch vụ của mình theo cách bảo vệ thông tin không bị phá hoại do vô tình hay cố ý. Do vậy, sau khi Người Dùng xóa thông tin cá nhân của chính mình, Class For Me có thể không xóa ngay khỏi máy chủ của Class For Me và có thể không xóa thông tin khỏi hệ thống sao lưu của chúng tôi. '
      ]
    },
    {
      title: 'Cơ chế tiếp nhận và giải quyết khiếu nại',
      content: [
        '<b>(i)</b>&nbsp;&nbsp;&nbsp;Bất kỳ khiếu nại nào liên quan đến việc thông tin cá nhân của Người Dùng có nguy cơ bị tiết lộ, hoặc bị sử dụng sai mục đích thu thập hoặc phạm vi sử dụng mà chúng tôi đã thông báo, Người Dùng có thể gửi thắc mắc hoặc khiếu nại về việc chúng tôi sử dụng dữ liệu cá nhân của Người Dùng thông qua chức năng trò chuyện trực tuyến của chúng tôi hoặc theo các thông tin liên hệ của chúng tôi. ',
        '<b>(ii)</b>&nbsp;&nbsp;&nbsp;Nhân viên của chúng tôi sẽ tiếp cận các khiếu nại của Người Dùng và tùy theo tính chất và mức độ của thắc mắc hoặc khiếu nại của Người Dùng, chúng tôi sẽ có những biện pháp cụ thể để giải quyết thắc mắc hoặc khiếu nại của Người Dùng. '
      ]
    },
    {
      title: 'Hiệu lực của chính sách bảo mật',
      content: [
        'Chính sách này có hiệu lực kể từ ngày 19 tháng 05 năm 2023. Chính sách bảo mật có thể thay đổi theo từng thời điểm tùy thuộc vào tình hình thực tế. Bất kỳ thay đổi nào trong tương lai sẽ được thông báo đến Người Dùng đang sử dụng Nền Tảng. Việc tiếp tục sử dụng Nền Tảng của Class For Me sẽ cấu thành việc xác nhận và chấp thuận việc thay đổi mà chúng tôi thực hiện với chính sách bảo mật dù Người Dùng đã xem xét sự thay đổi hay chưa.']
    }
  ]
  return (
    <div className="w-full max-w-[1080px] px-4 md:px-10 mx-auto flex flex-col py-[80px] policy-page">
      <p className="text-center text-30-40 mb-8 font-svn-gilroy-600">CHÍNH SÁCH BẢO MẬT THÔNG TIN CLASS FOR ME</p>
      <p className="text-right mb-2 text-16-24 font-svn-gilroy-600"><i>Hà Nội, ngày 19 tháng 05 năm 2023</i></p>
      {data.map((el: any, index: number) => {
        return (
          <div key={index}>
            {el.title &&
              <p className="mb-4 font-svn-gilroy-600 text-24-28">{index + 1}. {el.title}</p>
            }
            <div className="mb-4 flex flex-col gap-2">
              {el.content.map((v: any, idx: number) => {
                if (v.name) {
                  return (
                    <div key={idx} className="flex flex-col gap-2 mb-3">
                      <p className="text-20-24 mb-2 font-svn-gilroy-600">{v.name}</p>
                      {v.description.map((elm: any, i: number) => {
                        if (elm.title) {
                          return (
                            <div key={i} className="flex flex-col gap-2">
                              <i className="text-16-24 font-svn-gilroy-500" dangerouslySetInnerHTML={{ __html: elm.title }} />
                              <ul>
                                {elm.content.map((u: string, ii: number) => {
                                  return (
                                    <li dangerouslySetInnerHTML={{ __html: u }} key={ii} className="ml-8 list-disc font-svn-gilroy-500" />
                                  )
                                })}
                              </ul>
                            </div>
                          )
                        }
                        return (
                          <p dangerouslySetInnerHTML={{ __html: elm }} key={i} />
                        )
                      })}
                    </div>
                  )
                }
                return (
                  <p dangerouslySetInnerHTML={{ __html: v }} key={idx} />
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default PrivacyPolicyPage;
