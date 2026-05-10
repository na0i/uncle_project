import { useState, useRef } from 'react'
import './Education.css'
import successionbox1 from '../assets/succession/successionbox1.svg'
import successionbox2 from '../assets/succession/successionbox2.svg'
import successionbox3 from '../assets/succession/successionbox3.svg'
import successionbox4 from '../assets/succession/successionbox4.svg'
import chevronRight from '../assets/chevron-right.svg'
import successionSection1 from '../assets/succession/successionSection1.png'
import successionSection2 from '../assets/succession/successionSection2.png'
import successionSection3_1 from '../assets/succession/successionSection3-1.png'
import successionSection3_2 from '../assets/succession/successionSection3-2.png'
import h23 from '../assets/hierarchy/h-23.svg'
import h24 from '../assets/hierarchy/h-24.svg'
import h25 from '../assets/hierarchy/h-25.svg'
import h26 from '../assets/hierarchy/h-26.svg'
import h27 from '../assets/hierarchy/h-27.svg'
import h28 from '../assets/hierarchy/h-28.svg'
import l19 from '../assets/leadership/l-19.svg'
import l20 from '../assets/leadership/l-20.svg'
import l21 from '../assets/leadership/l-21.svg'

function Education() {
  const [activeTab, setActiveTab] = useState(1)
  const detailSectionRef = useRef(null)

  const handleTabClick = (id) => {
    setActiveTab(id)
    detailSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const courseBoxes = [
    {
      id: 1,
      title: 'Succession Course',
      sectionTitle: 'Succession Course',
      description: '차세대 리더 육성을 위한 핵심인재 선발 및 육성 프로그램으로, 리더십 개발 단계에 있어 現 Level의 수행관점과 상위 Level 수행을 위한 Qualification 측면에서 운영됩니다.',
      image: successionbox1,
      sectionImages: [
        { image: successionSection1, description: '핵심인재 개발단계: 리더십 개발 단계에 있어 육성 프로그램은 現 Level의 수행관점과 상위 Level 수행을 위한 Qualification 측면에서 운영이 필요함' },
        { image: successionSection2, description: '핵심인재 육성체계: 핵심인재 육성체계는 총 2개의 Track으로 되어있으며 현 Level 수행 및 상위 Level로의 성장 관점에서 각각 직급/직책 역량강화 Track과 차세대 리더십 육성 Track으로 구분됨' },
        { image: successionSection3_1, description: 'GBS(Greenlight Business School): 전략 실행 주체로서의 팀원 경영관리역량 제고를 위해 일반 MBA형식의 Business Course를 개설하고, 전략 수립 주체로서의 팀장 전략경영 역량 제고를 위해 전략특화 MBA 형식의 Strategy Course를 개설함' },
        { image: successionSection3_2, description: 'MBA 고급과정으로 과목 또는 사업부문(BU)間 Contextual Thinking을 제고하기 위하여 다수의 Cross Functional Issue Case Study를 통해 사업전체의 Biz. Insight를 제고함' }
      ]
    },
    {
      id: 2,
      title: 'Leadership Journey Course',
      sectionTitle: 'Leadership Journey Course',
      description: '직책별 맞춤형 리더십 역량 강화 및 조직 관리 역량 제고를 위한 과정입니다.',
      image: successionbox2,
      sectionImages: [
        { image: l19, description: null },
        { image: l20, description: null },
        { image: l21, description: null }
      ]
    },
    {
      id: 3,
      title: <>계층 및<br />승진자 과정</>,
      sectionTitle: '계층 및 승진자 과정',
      description: '직급별 필수 역량 습득 및 승진자 대상 마인드셋 변화 교육을 제공합니다.',
      image: successionbox3,
      sectionImages: [
        { image: h23, description: null },
        { image: h24, description: null },
        { image: h25, description: null },
        { image: h26, description: null },
        { image: h27, description: null },
        { image: h28, description: null }
      ]
    }
  ]

  const activeCourse = courseBoxes.find(box => box.id === activeTab)

  return (
    <div className="education">
      {/* 최상단 타이틀 섹션 */}
      <section className="education-header">
        <div className="education-header-container">
          <h1 className="education-main-title">교육과정</h1>
          <p className="education-sub-title">
            그린 라이트의 체계적인 교육 과정을 경험해보세요
          </p>
        </div>
      </section>

      {/* 탭 버튼 섹션 */}
      <section className="course-boxes-section">
        <div className="course-boxes-container">
          {courseBoxes.map((box) => (
            <div 
              key={box.id} 
              className={`course-box ${activeTab === box.id ? 'active' : ''}`}
              onClick={() => handleTabClick(box.id)}
            >
              <div className="course-box-background">
                <img src={box.image} alt={box.title} className="course-box-bg-image" />
              </div>
              <div className="course-box-content">
                <h3 className="course-box-title">{box.title}</h3>
                <div className="course-box-indicator">
                  <img src={chevronRight} alt="이동" className="course-box-arrow-icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 상세 콘텐츠 섹션 (탭 전환 방식) */}
      <section className="course-detail-section" ref={detailSectionRef}>
        <div className="course-detail-container">
          <h2 className="course-detail-title">{activeCourse.sectionTitle}</h2>
          <div className="course-detail-images-vertical">
            <p className="course-detail-description">{activeCourse.description}</p>
            {activeCourse.sectionImages.map((item, idx) => (
              <div key={idx} className="course-detail-item">
                {item.description && (
                  <p className="course-detail-item-description">{item.description}</p>
                )}
                <div className="course-detail-image">
                  <img 
                    src={item.image} 
                    alt={`${activeCourse.sectionTitle} ${idx + 1}`} 
                    className="course-detail-img"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Education
