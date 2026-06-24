// 株式会社 悠 — 業務（5グループに統合）。トップと各詳細ページで共有する単一ソース。
export interface Photo {
  src: string;
  label: string;
  badge: string;
}
export interface Feature {
  t: string;
  b: string;
}
export interface Cover {
  t: string;
  b: string;
}
export interface Stat {
  k: string;
  v: string;
}
export interface Service {
  slug: string;
  kanji: string;
  name: string;
  en: string;
  cat: "清掃" | "高所作業" | "設備" | "外構";
  tagline: string;
  intro: string[];
  features: Feature[];
  /** グループ業務がカバーする小業務 / 客室清掃の対応内容 */
  covers?: { heading: string; items: Cover[] };
  /** 主力ページ用の実績数値 */
  stats?: Stat[];
  target: string;
  photos: Photo[] | null;
}

export const SERVICES: Service[] = [
  {
    slug: "kyakushitsu",
    kanji: "室",
    name: "客室清掃",
    en: "Guest Room Cleaning",
    cat: "清掃",
    tagline: "チェックイン時刻までに、たしかな客室を。悠の主力業務です。",
    intro: [
      "ビジネスホテルから外資系シティホテル、旅館、民泊まで。客室清掃は、株式会社 悠がもっとも力を入れている主力業務です。ベッドメイク、バス・トイレ洗浄、アメニティ補充、ゴミ回収、各種点検まで、決められた手順で一室ごとに抜けなく仕上げます。",
      "私たちが何より大切にしているのは「時間」。チェックイン時刻に必ず間に合わせること、それがホテル清掃の最低条件であり、客室稼働の生命線です。繁忙期は提携スタッフを増員し、品質を落とさずに室数を伸ばす体制を整えています。",
      "客室タイプごとに清掃手順を標準化しているため、担当者が変わっても仕上がりはブレません。チェック体制（インスペクション）で品質を担保し、フロント・客室管理との連携もスムーズ。既存のオペレーションをそのまま引き継ぐことも可能です。",
      "「人手が足りない」「今の清掃会社の品質や納期が不安」——そんな課題こそ、まずはご相談ください。現場を十年見てきた代表が、御施設に合った清掃体制をご提案します。",
    ],
    features: [
      { t: "時間厳守", b: "決めた時刻に、決めた室数を、決めた品質で。チェックイン前に必ず納めます。" },
      { t: "標準化された手順", b: "客室タイプごとに清掃手順を統一。担当者が変わっても、仕上がりはブレません。" },
      { t: "インスペクション", b: "清掃後のチェック体制で品質を担保。抜け漏れを次工程で必ず拾います。" },
      { t: "繁忙期の増員体制", b: "連休・観光シーズンも、提携スタッフの増員で稼働を落としません。" },
      { t: "現場連携", b: "フロント・客室管理と密に連携。当日の予約変動にも柔軟に対応します。" },
      { t: "引き継ぎ対応", b: "既存の清掃体制・手順をそのまま引き継ぎ、スムーズに切り替えられます。" },
    ],
    covers: {
      heading: "客室清掃の対応内容",
      items: [
        { t: "ベッドメイク", b: "リネン交換からシワなく整えるベッドメイクまで、ホテル基準で仕上げます。" },
        { t: "バス・トイレ洗浄", b: "水回りの水垢・髪の毛・ニオイまで除去し、清潔感を徹底します。" },
        { t: "客室内清掃", b: "床・家具・鏡・窓まわり・備品の拭き上げと整頓を一室ごとに。" },
        { t: "アメニティ補充", b: "タオル・備品・消耗品の補充とセット。定数管理にも対応します。" },
        { t: "ゴミ回収・分別", b: "客室ゴミの回収から分別、所定の集積まで一括で対応します。" },
        { t: "忘れ物・不具合点検", b: "忘れ物の確認、設備の不具合チェックと一次報告まで行います。" },
      ],
    },
    stats: [
      { k: "MAX / DAY", v: "120 室" },
      { k: "CHECK-IN", v: "時間厳守" },
      { k: "QUALITY", v: "標準手順 + 検品" },
      { k: "SUPPORT", v: "繁忙期 増員" },
    ],
    target: "ビジネスホテル / シティホテル / 旅館 / 民泊・簡易宿所",
    photos: [
      { src: "room-twin.png", label: "ツインルーム", badge: "AFTER" },
      { src: "room-japanese.png", label: "和モダンルーム", badge: "AFTER" },
    ],
  },
  {
    slug: "kannai",
    kanji: "館",
    name: "館内・共用部清掃",
    en: "Interior & Common Area Care",
    cat: "清掃",
    tagline: "共用部・特掃・カーペット・床まで。館全体の清潔感をまとめて。",
    intro: [
      "客室の外側、お客様が最初に目にするロビーや廊下、エレベーターホール、共用トイレから、客室の蓄積汚れを落とす特別清掃（特掃）、カーペットや床のメンテナンスまで。館内まわりの清掃を一括でお任せいただけます。",
      "素材ごとに適した洗剤・道具・機材を使い分け、建物全体の「第一印象」と清潔感を底上げ。日次・週次・月次など、ご希望の頻度に合わせた清掃プランをご提案します。",
    ],
    features: [
      { t: "第一印象を守る", b: "ロビー・共用部は建物の顔。常にお客様を気持ちよく迎えられる状態に保ちます。" },
      { t: "素材別の最適清掃", b: "石材・ガラス・金属・カーペット・床材、それぞれに合った方法で傷めず仕上げます。" },
      { t: "蓄積汚れもリセット", b: "通常清掃で残る水垢・カビ・黄ばみも、特掃でまとめて徹底除去します。" },
    ],
    covers: {
      heading: "このグループに含まれる業務",
      items: [
        { t: "パブリック（共用部全般）", b: "ロビー・廊下・エレベーターホール・共用トイレ・喫煙室まで毎日整えます。" },
        { t: "客室特掃（特別清掃）", b: "水垢・カビ・蓄積汚れを芯から除去。退去後の原状回復にも対応します。" },
        { t: "カーペット清掃", b: "専用機で繊維の奥の汚れをリンスして回収。シミ抜きにも対応します。" },
        { t: "床・フローリングワックス", b: "剥離・洗浄・再ワックスで床の艶を回復し、床材の寿命を延ばします。" },
      ],
    },
    target: "ホテル / オフィスビル / 商業施設 / マンション共用部",
    photos: [
      { src: "tokuso-bath-before.jpg", label: "ユニットバス床（特掃前）", badge: "BEFORE" },
      { src: "tokuso-bath-after.jpg", label: "ユニットバス床（特掃後）", badge: "AFTER" },
    ],
  },
  {
    slug: "gaiso",
    kanji: "高",
    name: "高所・建物外装",
    en: "Height Work & Exterior",
    cat: "高所作業",
    tagline: "ロープ一本で届く高所の窓も、屋上の防水まで。",
    intro: [
      "足場やゴンドラを組めない建物の高所窓は、ロープ高所作業（ブランコ作業）で一枚ずつ磨き上げます。低層の窓拭きから、ビル外壁の上階窓まで対応。水跡を残さない拭き上げで、窓越しの景色までクリアにします。",
      "屋上やバルコニーは、落ち葉・土砂による排水口（ドレン）の詰まりが雨漏りの原因に。定期清掃で排水を確保し、防水層の劣化が見られれば塗膜防水などの防水工事まで一貫して対応。建物を雨水から守ります。",
      "高所作業は、安全がすべての前提です。装備の点検、支点の確保、二重確保の徹底。経験を積んだ作業者が、確実な手順で作業にあたります。",
    ],
    features: [
      { t: "ロープ高所作業に対応", b: "足場が組めない外壁・高層階でも、ロープ作業でガラスを磨き上げます。" },
      { t: "安全管理の徹底", b: "装備点検・支点確保・二重確保を徹底。安全を最優先に作業します。" },
      { t: "防水工事まで一貫", b: "屋上清掃で終わらず、防水層の劣化には塗膜防水などの工事で対応します。" },
    ],
    covers: {
      heading: "このグループに含まれる業務",
      items: [
        { t: "窓清掃（ロープ可）", b: "低層からビル外壁の高所窓まで。ロープ作業で一枚残らず磨きます。" },
        { t: "屋上清掃・防水工事", b: "ドレンの詰まり除去で雨漏りを防止。ウレタン塗膜防水まで対応します。" },
      ],
    },
    target: "オフィスビル / ホテル / 商業施設 / マンション外壁・屋上",
    photos: [
      { src: "work-rope-2.jpg", label: "ビル外壁のロープ作業", badge: "高所" },
      { src: "work-rope-1.jpg", label: "上階窓の清掃", badge: "ロープ" },
    ],
  },
  {
    slug: "setsubi",
    kanji: "設",
    name: "設備メンテナンス",
    en: "Facility Maintenance",
    cat: "設備",
    tagline: "エアコン・水まわり・電気・厨房ダクトの不具合、まとめて。",
    intro: [
      "エアコンの効きやニオイ、蛇口の水漏れ、トイレの詰まり、照明の不点灯、そして火災リスクとなる厨房ダクトの油汚れ——建物を使っていれば必ず出てくる設備まわりの困りごとを、悠の窓口にまとめてご相談いただけます。",
      "日々の清掃で現場に入っているからこそ、不具合の早期発見とすばやい一次対応が可能。エアコンや厨房ダクトは分解して内部まで高圧洗浄し、効率と衛生・安全を取り戻します。大掛かりな工事が必要な場合は、信頼できる専門業者と連携して対応します。",
    ],
    features: [
      { t: "内部まで分解洗浄", b: "エアコン・ダクトのファンや熱交換器を分解し、高圧洗浄で芯まで洗います。" },
      { t: "早期発見・一次対応", b: "清掃で日常的に現場へ入るから、不具合をいち早く見つけて手を打てます。" },
      { t: "火災リスクの低減", b: "厨房ダクト内部の油汚れを除去し、ダクト火災のリスクを下げます。" },
    ],
    covers: {
      heading: "このグループに含まれる業務",
      items: [
        { t: "エアコン分解洗浄", b: "天井埋込・壁掛け・業務用まで分解洗浄。ニオイと効きを改善します。" },
        { t: "設備（蛇口・トイレ・電気）", b: "水漏れ・詰まり・照明など、日常的な設備の不具合に一次対応します。" },
        { t: "厨房ダクト清掃", b: "フード・ダクト内部・排気ファンの油汚れを除去し、火災リスクを下げます。" },
      ],
    },
    target: "ホテル / オフィス / 店舗 / 飲食店 / 住宅",
    photos: [
      { src: "work-aircon.jpg", label: "天井埋込型ファンの分解", badge: "設備" },
      { src: "work-duct-dirty.jpg", label: "排気ファン内部の油汚れ", badge: "BEFORE" },
    ],
  },
  {
    slug: "gaikou",
    kanji: "庭",
    name: "外構・植栽管理",
    en: "Landscaping & Pruning",
    cat: "外構",
    tagline: "建物の表情を決める、緑のメンテナンス。",
    intro: [
      "エントランスや中庭の植栽、生垣の剪定を行います。伸びすぎた枝を整え、風通しと日当たりを確保することで、樹木の健康を保ちながら、建物まわりの景観を引き締めます。",
      "脚立・はしごを使った高さのある樹木の剪定にも対応。剪定後の枝葉の回収・搬出・処分まで一貫して行います。建物の第一印象を左右する外構を、すっきりと美しく保ちます。",
    ],
    features: [
      { t: "景観を整える", b: "建物の第一印象を左右する植栽を、すっきりと美しく整えます。" },
      { t: "樹木の健康を保つ", b: "風通しと採光を考えた剪定で、樹木が長く健やかに育つ環境に。" },
      { t: "枝葉の処分まで", b: "剪定後の枝葉の回収・搬出・処分まで、まとめて対応します。" },
    ],
    covers: {
      heading: "このグループに含まれる業務",
      items: [
        { t: "庭木の剪定", b: "高木から生垣まで、季節と樹種に合わせて美しく整えます。" },
        { t: "植栽・外構管理", b: "エントランス・中庭の植栽管理、除草など外構まわりに対応します。" },
      ],
    },
    target: "ビル・ホテルの植栽 / 店舗外構 / 中庭・生垣",
    photos: [
      { src: "work-pruning-1.jpg", label: "ビル前植栽の剪定", badge: "外構" },
      { src: "work-pruning-2.jpg", label: "高所の枝の手入れ", badge: "剪定" },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

// 英語タグライン（トップ／サービス一覧で使用）。
export const TAGLINE_EN: Record<string, string> = {
  kyakushitsu: "Spotless rooms, ready before every check-in — our flagship service.",
  kannai: "Common areas, deep cleaning, carpets and floors — the whole building refreshed.",
  gaiso: "From rope-access high windows to rooftop waterproofing.",
  setsubi: "A/C, plumbing, electrical and kitchen ducts — handled through one window.",
  gaikou: "Greenery care that shapes the first impression of your building.",
};

// カテゴリの英語表記
export const CAT_EN: Record<string, string> = {
  "清掃": "Cleaning",
  "高所作業": "Height Work",
  "設備": "Facilities",
  "外構": "Exterior",
};

// 業種詳細ページの英語コンテンツ（slug/kanji/en/photos.src は元データを流用）
export interface ServiceEn {
  tagline: string;
  intro: string[];
  features: Feature[];
  covers?: { heading: string; items: Cover[] };
  stats?: Stat[];
  target: string;
  photos?: { label: string; badge: string }[];
}
export const SERVICE_EN: Record<string, ServiceEn> = {
  kyakushitsu: {
    tagline: "Spotless rooms, ready by check-in. This is YOU's flagship service.",
    intro: [
      "From business hotels to international city hotels, ryokan and private lodging, guest-room cleaning is the service YOU puts the most into. Bed-making, bath and toilet cleaning, amenity restocking, waste removal and a full set of checks — every room is finished room by room, with no gaps, to a set procedure.",
      "What we value above all is time. Being ready by check-in is the minimum condition of hotel cleaning, and the lifeline of room occupancy. In busy seasons we add partner staff so we can raise the room count without dropping quality.",
      "Because procedures are standardized by room type, the finish stays consistent even when the person on duty changes. An inspection system guarantees quality, and we coordinate smoothly with the front desk and room management. We can also take over your existing operation exactly as it is.",
      "“We're short on staff,” “We're worried about our current cleaner's quality or deadlines” — these are exactly the issues to bring to us first. Our founder, with ten years on site, will propose a cleaning setup that fits your property.",
    ],
    features: [
      { t: "On-time, always", b: "The agreed room count, at the agreed quality, by the agreed time — always finished before check-in." },
      { t: "Standardized procedures", b: "Cleaning steps unified by room type. The finish never wavers, even when staff change." },
      { t: "Inspection", b: "A post-cleaning check system guarantees quality and catches anything missed in the next step." },
      { t: "Peak-season staffing", b: "Holidays and tourist seasons — we add partner staff so occupancy never drops." },
      { t: "On-site coordination", b: "Close coordination with front desk and room management, flexible to same-day booking changes." },
      { t: "Smooth handover", b: "We take over your existing setup and procedures as-is, for a seamless switch." },
    ],
    covers: {
      heading: "What guest-room cleaning covers",
      items: [
        { t: "Bed-making", b: "From linen changes to crisp, wrinkle-free bed-making, finished to hotel standards." },
        { t: "Bath & toilet", b: "We remove water stains, hair and odor around water areas for a thoroughly clean feel." },
        { t: "In-room cleaning", b: "Floors, furniture, mirrors, windows and fixtures wiped down and tidied, room by room." },
        { t: "Amenity restocking", b: "Towels, fixtures and consumables restocked and set, with par-level management." },
        { t: "Waste collection & sorting", b: "Room waste collected, sorted and taken to the designated point in one go." },
        { t: "Lost items & defect checks", b: "We check for lost property and equipment faults, with a first report." },
      ],
    },
    stats: [
      { k: "MAX / DAY", v: "120 rooms" },
      { k: "CHECK-IN", v: "Always on time" },
      { k: "QUALITY", v: "Set procedure + inspection" },
      { k: "SUPPORT", v: "Peak-season staffing" },
    ],
    target: "Business hotels / city hotels / ryokan / private & budget lodging",
    photos: [
      { label: "Twin room", badge: "AFTER" },
      { label: "Japanese-modern room", badge: "AFTER" },
    ],
  },
  kannai: {
    tagline: "Common areas, special cleaning, carpets and floors — the whole building's cleanliness, together.",
    intro: [
      "Beyond the rooms — the lobby, corridors, elevator halls and shared restrooms guests see first, special cleaning that removes built-up grime, and carpet and floor maintenance. Leave the cleaning around your building's interior to us in one package.",
      "We match cleaning agents, tools and machines to each material, lifting the “first impression” and cleanliness of the whole building. We propose a cleaning plan at the frequency you want — daily, weekly or monthly.",
    ],
    features: [
      { t: "Protect the first impression", b: "Lobbies and common areas are the building's face. We keep them ready to welcome guests at all times." },
      { t: "Material-specific cleaning", b: "Stone, glass, metal, carpet, flooring — each cleaned the right way, without damage." },
      { t: "Reset built-up grime", b: "Water stains, mold and yellowing left by routine cleaning are thoroughly removed by special cleaning." },
    ],
    covers: {
      heading: "Work included in this field",
      items: [
        { t: "Public areas", b: "Lobbies, corridors, elevator halls, shared restrooms and smoking rooms, kept in order every day." },
        { t: "Room special cleaning", b: "Water stains, mold and built-up grime removed to the core, including post-move-out restoration." },
        { t: "Carpet cleaning", b: "Deep fiber dirt rinsed and extracted with dedicated machines; stain removal too." },
        { t: "Floor & wax", b: "Stripping, washing and re-waxing restore the shine and extend the life of the flooring." },
      ],
    },
    target: "Hotels / office buildings / commercial facilities / condominium common areas",
    photos: [
      { label: "Unit-bath floor (before special cleaning)", badge: "BEFORE" },
      { label: "Unit-bath floor (after special cleaning)", badge: "AFTER" },
    ],
  },
  gaiso: {
    tagline: "High windows reachable on a single rope, all the way to rooftop waterproofing.",
    intro: [
      "For high windows on buildings where scaffolding or gondolas can't be set up, we polish each pane by rope access (suspended work). From low-rise window cleaning to upper-floor windows on building facades — wiped streak-free, so even the view through the glass is clear.",
      "On rooftops and balconies, fallen leaves and silt clog drains and cause leaks. Regular cleaning keeps drainage clear, and if the waterproof layer shows wear, we handle waterproofing work such as membrane coating in one flow — protecting the building from rainwater.",
      "In height work, safety is the premise of everything. Equipment checks, secured anchor points, double rigging without exception. Experienced operators carry out the work to reliable procedures.",
    ],
    features: [
      { t: "Rope access capable", b: "Even on facades and high floors where scaffolding won't fit, we polish the glass by rope." },
      { t: "Rigorous safety", b: "Equipment checks, anchor points and double rigging — safety first, always." },
      { t: "Through to waterproofing", b: "We don't stop at rooftop cleaning; worn waterproofing is handled with membrane coating and more." },
    ],
    covers: {
      heading: "Work included in this field",
      items: [
        { t: "Window cleaning (rope OK)", b: "From low-rise to high facade windows — every pane polished by rope access." },
        { t: "Rooftop & waterproofing", b: "Clearing clogged drains to prevent leaks, through to urethane membrane waterproofing." },
      ],
    },
    target: "Office buildings / hotels / commercial facilities / condominium facades & rooftops",
    photos: [
      { label: "Rope access on a building facade", badge: "HEIGHT" },
      { label: "Upper-floor window cleaning", badge: "ROPE" },
    ],
  },
  setsubi: {
    tagline: "A/C, plumbing, electrical and kitchen-duct troubles — handled together.",
    intro: [
      "Weak or smelly air-conditioning, dripping taps, blocked toilets, lights that won't come on, and grease in kitchen ducts that becomes a fire risk — the facility troubles that inevitably appear in any building in use can all be brought to YOU's single window.",
      "Because we're on site daily for cleaning, we can spot faults early and respond quickly. Air-conditioners and kitchen ducts are disassembled and high-pressure washed inside, restoring efficiency, hygiene and safety. When large-scale work is needed, we coordinate with trusted specialist contractors.",
    ],
    features: [
      { t: "Disassembled deep clean", b: "A/C and duct fans and heat exchangers are disassembled and washed to the core by high pressure." },
      { t: "Early detection, first response", b: "Being on site daily for cleaning, we catch faults early and act fast." },
      { t: "Lower fire risk", b: "Removing grease inside kitchen ducts lowers the risk of duct fires." },
    ],
    covers: {
      heading: "Work included in this field",
      items: [
        { t: "A/C disassembled cleaning", b: "Ceiling-recessed, wall-mounted and commercial units disassembled and washed — better smell and cooling." },
        { t: "Facilities (taps, toilets, electrical)", b: "First response to everyday faults: leaks, blockages, lighting and more." },
        { t: "Kitchen-duct cleaning", b: "Grease removed from hoods, duct interiors and exhaust fans to lower fire risk." },
      ],
    },
    target: "Hotels / offices / shops / restaurants / homes",
    photos: [
      { label: "Disassembling a ceiling-recessed fan", badge: "FACILITY" },
      { label: "Grease inside an exhaust fan", badge: "BEFORE" },
    ],
  },
  gaikou: {
    tagline: "Greenery care that sets the expression of your building.",
    intro: [
      "We prune the planting and hedges at entrances and courtyards. By trimming overgrown branches and securing airflow and sunlight, we keep the trees healthy while tightening up the look around the building.",
      "We also handle pruning of taller trees using stepladders and ladders, and take care of collecting, hauling and disposing of the cut branches and leaves afterward. We keep the exterior — which shapes the building's first impression — clean and beautiful.",
    ],
    features: [
      { t: "Shape the scenery", b: "We keep the planting that shapes the building's first impression neat and beautiful." },
      { t: "Keep trees healthy", b: "Pruning that considers airflow and light, for trees that grow healthy and long." },
      { t: "Through to disposal", b: "Collection, hauling and disposal of cut branches and leaves, all handled together." },
    ],
    covers: {
      heading: "Work included in this field",
      items: [
        { t: "Tree pruning", b: "From tall trees to hedges, shaped beautifully to the season and species." },
        { t: "Planting & exterior care", b: "Entrance and courtyard planting management, weeding and other exterior work." },
      ],
    },
    target: "Building & hotel planting / shop exteriors / courtyards & hedges",
    photos: [
      { label: "Pruning planting in front of a building", badge: "EXTERIOR" },
      { label: "Tending high branches", badge: "PRUNING" },
    ],
  },
};
