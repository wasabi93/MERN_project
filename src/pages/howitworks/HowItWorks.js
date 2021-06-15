import { Container, Typography } from '@material-ui/core';
import React from 'react';


export default function About() {
    return(
        <main>
            <Container maxWidth='md'>
                <Typography variant='h5'>
                    THÔNG TIN DỊCH VỤ
                </Typography>
                <Typography variant='h6'>
                    Chúng tôi cung cấp dịch vụ tư vấn và lắp ráp Đá Hoa Cương - Granite trọn gói theo mô hình sau:
                </Typography>
                <Typography>
                    Bước 1: Chọn các mẫu đá quý khách ưa thích ở mục Mẫu đá.
                </Typography>
                <Typography>
                    Bước 2: Cung cấp thông tin ở mục giỏ hàng.
                            - Thông tin liên hệ
                            - Thông tin công trình quý khách muốn lắp ráp (cầu thang, bếp, mặt tiền, ... )
                            - Thời gian (từ 7:00 - 20:00)
                            - Địa điểm hẹn gặp tư vấn (tại địa điểm quý khách chỉ định hoặc các cơ sở đá của chúng tôi)
                </Typography>
                <Typography>
                    Bước 3: Sau khi nhận thông tin qua web chúng tôi sẽ liên hệ lại với quý khách qua Sđt(email) được cung cấp để xác nhận. Sau đó tiến hành gặp mặt trực tiếp để tư vấn và thảo luận chi tiết.
                    (Ngoài các mẫu đá quý khách đã chọn chúng tôi sẽ giới thiệu thêm 1 số mẫu phù hợp với chi tiết công trình của quý khách)
                </Typography>
                <Typography>
                    Bước 4: Thi công - hoàn công - thanh toán
                </Typography>
            </Container>
        </main>
    );
}