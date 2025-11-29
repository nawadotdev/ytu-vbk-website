import { Separator } from '@/components/ui/separator'

const AboutPage = () => {
    return (
        <div className='max-w-4xl mx-auto px-4 py-12 space-y-10 flex flex-col items-center justify-center'>
            <h2 className='text-2xl font-bold text-center'>Hakkımızda</h2>
            <Separator className='w-full' />
            <p className='text-center text-lg'>
                Yıldız Teknik Üniversitesi Veri Bilimi Kulübü, veri odaklı çözüm üretmeyi, analitik düşünmeyi ve teknolojiyi bir araya getiren bir topluluktur. Amacımız, öğrencilerin veri bilimi alanında bilgi ve yetkinliklerini geliştirmelerini sağlamak, projeler ve atölyeler aracılığıyla teoriyi pratiğe dönüştürmelerine destek olmaktır.
                <br />
                <br />
                Kulüp olarak makine öğrenmesi, yapay zeka, istatistik, veri görselleştirme ve programlama gibi alanlarda etkinlikler düzenliyoruz. Topluluğumuz, farklı disiplinlerden gelen öğrencilerin bir araya gelerek deneyim paylaşabilecekleri, öğrenebilecekleri ve birlikte projeler üretebilecekleri bir platform sunar.
                <br />
                <br />
                Biz, meraklı, üretken ve iş birliğine açık bireylerden oluşan bir aileyiz. Amacımız sadece bilgi paylaşmak değil; aynı zamanda veri biliminin gerçek dünya problemlerine uygulanabilir çözümler geliştirme gücünü göstermek ve üyelerimizi bu süreçte yetkin bireyler olarak yetiştirmektir.
            </p>
        </div>
    )
}

export default AboutPage
