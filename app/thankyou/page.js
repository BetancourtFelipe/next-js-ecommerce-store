import '../global.scss';
import Image from 'next/image';
import successful from '../../public/images/successful.webp';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Thank you for your order!',
  description:
    "Thank you for using our services! We're excited to contribute to your skateboarding journey!",
};

export default function thankYouPage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Thank you for your order!</h1>
      <div className={styles.container}>
        <div className={styles.successful_order_div}>
          Your order was placed successfully!
        </div>
        <div className={styles.climber_image}>
          <Image src={successful} alt="skateboarder in the air" width="750" />
        </div>
      </div>
    </main>
  );
}
