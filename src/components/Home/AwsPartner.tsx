import React from 'react'
import { AWSPartnerCarousel } from './AWSPartnerCarousel'
import Container from '../Container'
import { useTranslations } from 'next-intl';

const AwsPartner = () => {
  const t = useTranslations('Home.AwsPartner');
  return (
    <section className=" mt-10">
        <Container>
          <div className="text-center">
            <h2 className="text-[#764af1] text-xl font-bold tracking-[1.60px] mb-4">
              {t('title')}
            </h2>
            <h3 className="text-4xl xl:text-5xl font-medium text-black">
              {t('subtitle')}
            </h3>
          </div>

          <AWSPartnerCarousel />

        </Container>
        </section>
  )
}

export default AwsPartner