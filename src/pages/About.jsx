import './About.css'
import mainImage from '../assets/main.svg'
import mainbox1Image from '../assets/mainbox1.svg'
import mainbox2Image from '../assets/mainbox2.svg'
import companyImage from '../assets/company.png'

function About() {
  const courseItems = [
    {
      chip: 'Succession',
      title: 'Succession Course',
      description: '차세대 리더 육성을 위한 핵심인재 선발 및 육성 프로그램'
    },
    {
      chip: 'Leadership',
      title: 'Leadership Journey Course',
      description: '직책별 맞춤형 리더십 역량 강화 및 조직 관리 역량 제고'
    },
    {
      chip: 'Hierarchy',
      title: <>계층 및<br />승진자 과정</>,
      description: '직급별 필수 역량 습득 및 승진자 대상 마인드셋 변화 교육'
    }
  ]

  return (
    <div className="about">
      {/* 섹션 1: 작은 디스크립션, 큰 타이틀, 우측 이미지 */}
      <section className="about-section-1">
        <div className="section-1-container">
          <div className="section-1-content">
            <p className="section-1-small-desc">
              Biz Insight를 기반으로 기업교육과 경영컨설팅을 선도하며, GBS 과정을 통해 핵심인재 육성에 기여하는 전문 기업입니다.
            </p>
            <h1 className="section-1-title">
              토탈 러닝 솔루션<br />GreenLight
            </h1>
          </div>
          <div className="section-1-image">
            <img src={mainImage} alt="GreenLight 토탈 러닝 솔루션" className="section-1-img" />
          </div>
        </div>
      </section>

      {/* 섹션 2: 큰 타이틀 + 박스 2개 */}
      <section className="about-section-2">
        <div className="section-2-container">
          <h2 className="section-2-title">
            그린라이트는 다년간의 축적된 경험과 기술을 토대로<br />
            센스(Sense)있는 인재를 육성합니다.
          </h2>
          <div className="section-2-boxes">
            <div className="section-2-box">
              <div className="box-content">
                <h3 className="box-title">TOTAL Learning Solution</h3>
                <p className="box-description">
                  그린라이트는 기업교육, 경영컨설팅 뿐만 아니라 출판업을 병행하며 다양한 영역에서 활약하고 있습니다.
                </p>
              </div>
              <div className="box-image">
                <img src={mainbox1Image} alt="TOTAL Learning Solution" className="box-img" />
              </div>
            </div>
            <div className="section-2-box">
              <div className="box-content">
                <h3 className="box-title">GBS I, II, III</h3>
                <p className="box-description">
                  그린라이트의 핵심역량과 MBA, AL의 장점이 융합된 GBS I, II, III 과정은 귀사의 핵심 인재 육성에 매우 큰 도움이 될 것입니다.
                </p>
              </div>
              <div className="box-image">
                <img src={mainbox2Image} alt="GBS I, II, III" className="box-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 섹션 3: 큰 타이틀 + 교육과정 카드 */}
      <section className="about-section-3">
        <div className="section-3-container">
          <h2 className="section-3-title">교육과정</h2>
          <div className="course-grid">
            {courseItems.map((item, index) => (
              <div key={index} className="course-card">
                <div className="course-chip">{item.chip}</div>
                <h3 className="course-card-title">{item.title}</h3>
                <p className="course-card-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 섹션 4: 큰 타이틀 + 회사 로고 */}
      <section className="about-section-4">
        <div className="section-4-container">
          <h2 className="section-4-title">파트너사</h2>
          <div className="section-4-logos">
            <img src={companyImage} alt="파트너사" className="company-logo" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
