const quizQuestions = [
    {
        id: 1,
        text: "下列句子中，“法”字的用法和含义正确的是？",
        py: "xià liè jù zǐ zhōng fǎ zì de yòng fǎ hé hán yì zhèng què de shì",
        en: "Which of the following explains the usage and meaning of 'fǎ' correctly?",
        options: [
            {
                text: "名词，法律或法度",
                py: "míng cí fǎ lǜ huò fǎ dù",
                en: "Noun, laws or regulations.",
                correct: false,
                explanation: "错误。在“不知卿家君法孤”中，“法”后面带有宾语“孤”，作动词用。",
                explanationPy: "cuò wù zài bù zhī qīng jiā jūn fǎ gū zhōng fǎ hòu miàn dài yǒu bīn yǔ gū zuò dòng cí yòng",
                explanationEn: "Incorrect. In this sentence, 'fa' takes the object 'gu' and thus functions as a verb.",
                en: "Noun, laws"
            },
            {
                text: "动词，效法、模仿、向……学习",
                py: "dòng cí xiào fǎ mó fǎng xiàng ... xué xí",
                en: "Verb, to imitate, follow, or learn from.",
                correct: true,
                explanation: "正确！这里的“法”是名词作动词，意思是“效法”或“向……学习”。",
                explanationPy: "zhèng què zhè lǐ de fǎ scholarly míng cí zuò dòng cí yì si shì xiào fǎ huò xiàng ... xué xí",
                explanationEn: "Correct! Here 'fa' functions as a verb meaning to emulate or follow the example of someone.",
                en: "Verb, to emulate or learn from"
            },
            {
                text: "形容词，守法的、合法的",
                py: "xíng róng cí shǒu fǎ de hé fǎ de",
                en: "Adjective, law-abiding or legal.",
                correct: false,
                explanation: "错误。文中的语境属于人与人之间治政经验的相互借鉴，并非指是否合法。",
                explanationPy: "cuò wù wén zhōng de yǔ jìng shǔ yú rén yǔ rén zhī jiān zhì zhèng jīng yàn de xiāng hù jiè jiàn bìng fēi zhǐ shì fǒu hé fǎ",
                explanationEn: "Incorrect. The context concerns sharing administrative methods, not whether something is legal.",
                en: "Adjective, law-abiding"
            },
            {
                text: "副词，依法、按照规矩",
                py: "fù cí yī fǎ àn zhào guī jǔ",
                en: "Adverb, legally or according to rules.",
                correct: false,
                explanation: "错误。副词不能直接修饰名词宾语“孤”。",
                explanationPy: "cuò wù fù cí bù néng zhí jiē xiū shì míng cí bīn yǔ gū",
                explanationEn: "Incorrect. An adverb cannot directly modify a noun object like 'gu'.",
                en: "Adverb, legally"
            }
        ]
    },
    {
        id: 2,
        text: "对“强者绥之以德，弱者抚之以仁”句式特点分析正确的是？",
        py: "duì qiáng zhě suí zhī yǐ dé ruò zhě fǔ zhī yǐ rén jù shì tè diǎn fēn xī zhèng què de shì",
        en: "Which analysis of the sentence structure 'qiáng zhě suí zhī yǐ dé' is correct?",
        options: [
            {
                text: "倒装句，介词短语后置（状语后置）",
                py: "dǎo zhuāng jù jiè cí duǎn yǔ hòu zhì zhuàng yǔ hòu zhì",
                en: "Inverted sentence, post-positional prepositional phrase (adverbial post-position).",
                correct: true,
                explanation: "正确！“以德”和“以仁”是介词短语，正常语序应为“以德绥之，以仁抚之”，属于典型的状语后置。",
                explanationPy: "zhèng què yǐ dé hé yǐ rén shì jiè cí duǎn yǔ zhèng cháng yǔ xù yīng wéi yǐ dé suí zhī yǐ rén fǔ zhī shǔ yú diǎn xíng de zhuàng yǔ hòu zhì",
                explanationEn: "Correct! 'Yi de' and 'yi ren' are prepositional phrases that act as adverbials. Their normal position should be before the verbs.",
                en: "Inverted phrase, post-positional adverbial"
            },
            {
                text: "被动句，用“以”字表被动",
                py: "bèi dòng jù yòng yǐ zì biǎo bèi dòng",
                en: "Passive sentence, using 'yi' to indicate the passive voice.",
                correct: false,
                explanation: "错误。“以”是介词“用”的意思，整句话是陈述太丘令主动施政的动作，不是被动句。",
                explanationPy: "cuò wù yǐ shì jiè cí yòng de yì si zhěng jù huà shì chén shù tài qiū lìng zhǔ dòng shī zhèng de dòng zuò bú shì bèi dòng jù",
                explanationEn: "Incorrect. 'Yi' means 'with/by means of'. The sentence describes an active governance approach, not a passive one.",
                en: "Passive sentence"
            },
            {
                text: "省略句，主语和宾语都被省略了",
                py: "shěng lüè jù zhǔ yǔ hé bīn yǔ dōu bèi shěng lüè le",
                en: "Elliptical sentence, where both subject and object are omitted.",
                correct: false,
                explanation: "错误。句中的“之”就是代词宾语，代指强者和弱者，并没有省略宾语。",
                explanationPy: "cuò wù jù zhōng de zhī jiù shì dài cí bīn yǔ dài zhǐ qiáng zhě hé ruò zhě bìng méi yǒu shěng lüè bīn yǔ",
                explanationEn: "Incorrect. The character 'zhi' functions as the pronoun object referring to the strong and the weak, so the object is not omitted.",
                en: "Elliptical sentence"
            },
            {
                text: "判断句，利用“……者……也”表判断",
                py: "pàn duàn jù lì yòng zhě yě biǎo pàn duàn",
                en: "Judgment sentence, using 'zhe... ye' to indicate judgment.",
                correct: false,
                explanation: "错误。这里的“者”是名词化成分，意思是“……的人”，全句没有判断动词的意思或“也”字呼应。",
                explanationPy: "cuò wù zhè lǐ de zhě shì míng cí huà chéng fèn yì si shì ... de rén quán jù méi yǒu pàn duàn dòng cí de yì si huò yě zì hū yìng",
                explanationEn: "Incorrect. Here 'zhe' is a nominalizer meaning 'those who...'. The sentence is not a judgment sentence.",
                en: "Judgment sentence"
            }
        ]
    },
    {
        id: 3,
        text: "袁公问元方“不知卿家君法孤，孤法卿父”，其真实意图是？",
        py: "yuán gōng wèn yuán fāng bù zhī qīng jiā jūn fǎ gū gū fǎ qīng fù qí zhēn shí yì tú shì",
        en: "What was Lord Yuan's real intention behind his question?",
        options: [
            {
                text: "虚心请教治国理政的先进经验",
                py: "xū xīn qǐng jiào zhì guó lǐ zhèng de xiān jìn jīng yàn",
                en: "To humbly learn advanced administrative experiences.",
                correct: false,
                explanation: "错误。袁公带有居高临下的试探语气，甚至有暗示自己资历更老的意味，并非纯粹虚心请教。",
                explanationPy: "cuò wù yuán gōng dài yǒu jū gāo lín xià de ... yǔ qì shèn zhì yǒu àn shì zì jǐ zī lì gèng lǎo de yì wèi bìng fēi chún cuì xū xīn qǐng jiào",
                explanationEn: "Incorrect. Lord Yuan's question carried a testing tone, subtly hinting at his own seniority rather than seeking pure advice.",
                en: "Humbly learn governance experience"
            },
            {
                text: "故意用两难的陷阱来测试十一岁元方的言语应对能力",
                py: "gù yì yòng liǎng nán de xiàn jǐng lái cè shì shí yī suì yuán fāng de yán yǔ yìng duì néng lǐ",
                en: "To test the eleven-year-old's verbal responsiveness with a dilemma trap.",
                correct: true,
                explanation: "正确！这是一个两难陷阱，如果说父亲学袁公，就贬低了父亲；如果说袁公学父亲，就得罪了长辈。袁公以此考察元方的机敏度。",
                explanationPy: "zhèng què zhè shì yī gè liǎng nán xiàn jǐng rú guǒ shuō fù qīn xué yuán gōng jiù biǎn dī le fù qīn rú guǒ shuō yuán gōng xué fù qīn jiù dé zuì le zhǎng bèi yuán gōng yǐ cǐ kǎo chá yuán fāng de jī mǐn dù",
                explanationEn: "Correct! This was a dilemma: saying his father imitated Yuan would diminish his father, while saying Yuan imitated his father would offend the elder.",
                en: "Test Yuanfang's wit with a dilemma"
            },
            {
                text: "代表朝廷考核地方官员的政绩",
                py: "dài biǎo cháo tíng kǎo hé dì fāng guān yuán de zhèng jì",
                en: "To evaluate the performance of local officials on behalf of the court.",
                correct: false,
                explanation: "错误。这只是名士之间私下的拜访与闲谈，不属于官方政绩考核。",
                explanationPy: "cuò wù zhè zhǐ shì míng shì zhī jiān sī xià de bài fǎng yǔ xián tán bù shǔ yú guān fāng zhèng jì kǎo hé",
                explanationEn: "Incorrect. This was an informal, private visit and conversation among scholars, not an official performance review.",
                en: "Evaluate official performance"
            },
            {
                text: "控诉陈太丘抄袭了自己的治政方案",
                py: "kòng sù chén tài qiū chāo xí le zì jǐ de zhì zhèng fāng àn",
                en: "To accuse Chen Taiqiu of plagiarizing his administrative plan.",
                correct: false,
                explanation: "错误。语境中两人相距遥远，袁公只是发现治理方式相似，并不是指责抄袭。",
                explanationPy: "cuò wù yǔ jìng zhōng liǎng rén xiāng jù yáo yuǎn yuán gōng zhǐ shì fā xiàn zhì lǐ fāng shì xiāng sì bìng bú... chāo xí",
                explanationEn: "Incorrect. Lord Yuan merely noted the similarity in their benevolent governance; he was not accusing anyone of plagiarism.",
                en: "Accuse Chen of plagiarism"
            }
        ]
    },
    {
        id: 4,
        text: "文中“远近称之”的“之”字指代的是什么？",
        py: "wén zhāng zhōng yuǎn jìn chēng zhī de zhī zì zhǐ dài de shì shén me",
        en: "What does the pronoun 'zhi' in the phrase 'yuǎn jìn chēng zhī' refer to?",
        options: [
            {
                text: "陈元方的治学才能",
                py: "chén yuán fāng de zhì xué cái néng",
                en: "Chen Yuanfang's academic talent.",
                correct: false,
                explanation: "错误。此时袁公是在询问元方父亲（陈太丘）的治政功绩，而非赞扬元方。",
                explanationPy: "cuò wù cǐ shí yuán gōng shì zài xún wèn yuán fāng fù qīn de zhì zhèng gōng jì ér fēi zàn yáng yuán fāng",
                explanationEn: "Incorrect. Lord Yuan was asking about the achievements of Yuanfang's father, not praising Yuanfang himself.",
                en: "Yuanfang's talent"
            },
            {
                text: "元方的父亲（太丘县令陈寔）",
                py: "yuán fāng de fù qīn",
                en: "Yuanfang's father (Chen Shi).",
                correct: true,
                explanation: "正确！“家君”即是对他人父亲的尊称，“称之”代指远近的人都赞扬元方的父亲。",
                explanationPy: "zhèng què jiā jūn jí shì duì tā rén fù qīn de zūn y称 chēng zhī dài zhǐ yuǎn jìn de rén dōu zàn yáng yuán fāng de fù qīn",
                explanationEn: "Correct! 'Zhi' is a third-person pronoun here, substituting for Yuanfang's father who was highly regarded as the magistrate of Taiqiu.",
                en: "Yuanfang's father"
            },
            {
                text: "太丘县优美的风景",
                py: "tài qiū xiàn yōu měi de fēng jǐng",
                en: "The beautiful scenery of Taiqiu County.",
                correct: false,
                explanation: "错误。上下文讨论的是“政事”和德政治理，与自然风光完全无关。",
                explanationPy: "cuò wù shàng xià wén tǎo lùn de shì zhèng shì hé dé zhèng zhì lǐ yǔ zì rán fēng guāng wán quán wú guān",
                explanationEn: "Incorrect. The context focuses entirely on governance and administration, not geography or landscape.",
                en: "The scenery of Taiqiu"
            },
            {
                text: "袁公在邺县的政绩",
                py: "yuán gōng zài yè xiàn de zhèng jì",
                en: "Lord Yuan's performance in Ye County.",
                correct: false,
                explanation: "错误。此时袁公还没有提到自己在邺县当县令的事情。",
                explanationPy: "cuò wù cǐ shí yuán gōng hái méi yǒu tí dào zì jǐ zài yè xiàn dāng xiàn lìng de shì qíng",
                explanationEn: "Incorrect. At this point in the conversation, Lord Yuan had not yet mentioned his own tenure as the Magistrate of Ye.",
                en: "Lord Yuan's performance"
            }
        ]
    },
    {
        id: 5,
        text: "下面哪一项最符合陈元方所展现出来的名士性格？",
        py: "xià miàn nǎ yī xiàng zuì fú hé chén yuán fāng suǒ zhǎn xiàn chū lái de míng shì xìng gé",
        en: "Which trait best describes the scholar-gentry character shown by Chen Yuanfang?",
        options: [
            {
                text: "阿谀奉承，唯唯诺诺",
                py: "ē yú fèng chéng wěi wěi nuò nuò",
                en: "Flattering, obsequious, and submissive.",
                correct: false,
                explanation: "错误。元方面对位高权重的袁公并没有一味迎合奉承，而是有理有据地反驳。",
                explanationPy: "cuò wù yuán fāng miàn duì wèi gāo quán zhòng de yuán gōng bìng méi yǒu yī wèi yíng hé fèng chéng ér shì yǒu lǐ yǒu jù de fǎn bó",
                explanationEn: "Incorrect. Facing the powerful Lord Yuan, Yuanfang did not blindly flatter him but offered a well-reasoned defense.",
                en: "Flattering and submissive"
            },
            {
                text: "傲慢无礼，目中无人",
                py: "ào màn wú lǐ mù zhōng wú rén",
                en: "Arrogant, rude, and supercilious.",
                correct: false,
                explanation: "错误。元方借圣人自况，既不失礼貌，也给袁公留了台阶，不是傲慢。",
                explanationPy: "cuò wù yuán fāng jiè shèng rén zì kuàng jì bù shī lǐ mào yě gěi yuán gōng liú le tái jiē bú shì ào màn",
                explanationEn: "Incorrect. By using the analogy of sages, Yuanfang maintained courtesy and allowed Lord Yuan to save face.",
                en: "Arrogant and rude"
            },
            {
                text: "机敏聪慧，维护尊严而不失礼貌",
                py: "jī mǐn cōng huì wéi hù zūn yán ér bù shī lǐ mào",
                en: "Quick-witted, maintaining dignity while remaining perfectly courteous.",
                correct: true,
                explanation: "正确！面对长辈的言语刁难，元方展现了魏晋儿童典型的机智与“不卑不亢”的名士风度。",
                explanationPy: "zhèng què miàn duì zhǎng bèi de yán yǔ diāo nàn yuán fāng zhǎn xiàn le wèi jìn ér tóng diǎn xíng de jī zhì yǔ bù bēi bú kàng de míng shì fēng dù",
                explanationEn: "Correct! Faced with a verbal challenge from an elder, Yuanfang exhibited the sharp wit and poised elegance characteristic of elite Wei-Jin youth.",
                en: "Quick-witted and dignified"
            },
            {
                text: "胆小懦弱，不敢作声",
                py: "dǎn xiǎo nuò ruò bù gǎn zuò shēng",
                en: "Timid, cowardly, and tongue-tied.",
                correct: false,
                explanation: "错误。元方年仅十一岁却口齿伶俐、对答如流，毫无胆怯之态。",
                explanationPy: "cuò wù yuán fāng nián jǐn shí yī suì què kǒu chǐ líng lì duì dá rú liú háo wú dǎn qiè zhī tài",
                explanationEn: "Incorrect. Although only eleven, Yuanfang was articulate and highly confident, showing no fear or timidity.",
                en: "Timid and silent"
            }
        ]
    }
];
