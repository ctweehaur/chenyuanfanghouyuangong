/**
 * 互动古文教学平台 - 简答题特训专属题库 (马来西亚中学完全对齐版)
 */

const shortQData = [
    {
        id: "Q1",
        qZh: "袁公向陈元方打听他父亲在太丘县的政绩时，元方是如何赞赏自己父亲的？",
        qPy: "yuán gōng xiàng chén yuán fāng dǎ tīng tā fù qīn zài tài qiū xiàn de zhèng jì shí yuán fāng shì rú hé zàn shǎng zì jǐ fù qīn de",
        qEn: "When Lord Yuan asked about his father's achievements in Taiqiu, how did Yuanfang praise his father?",
        sZh: [
            "1. 说明强者绥之以德的意思（对有权势的人）。",
            "2. 说明弱者抚之以仁的意思（对弱小的人）。",
            "3. 说明百姓最后的反应（久而益敬）。"
        ],
        sPy: [
            "shuō míng qiáng zhě suí zhī yǐ dé de yì si duì yǒu quán shì de rén",
            "shuō míng ruò zhě fǔ zhī yǐ rén de yì si duì ruò xiǎo de rén",
            "shuō míng bǎi xìng zuì zhōng de fǎn yìng jiǔ ér yì jìng"
        ],
        sEn: "Step 1: Translate 'pacified the strong with virtue'.<br>Step 2: Translate 'comforted the weak with benevolence'.<br>Step 3: State the final reaction of the people.",
        aZh: "元方说他的父亲在太丘县时，用道德来安抚豪强者，用仁爱来体恤弱小者，顺应百姓的心愿。日子久了，百姓对他更加敬佩和爱戴。",
        aPy: "yuán fāng shuō tā de fù qīn zài tài qiū xiàn shí yòng dào dé lái ān fǔ háo qiáng zhě yòng rén ài lái tǐ xù ruò xiǎo zhě shùn yìng bǎi xìng de xīn yuàn rì zǐ jiǔ le bǎi xìng duì tā gèng jiā jìng pèi hé ài dài",
        aEn: "Yuanfang said that when his father was in Taiqiu, he pacified the powerful with virtue and comforted the weak with benevolence, allowing people to live at ease. Over time, the people respected him all the more."
    },
    {
        id: "Q2",
        qZh: "根据课文，袁公听了元方的回答后，提出了一个什么样的问题？",
        qPy: "gēn jù kè wén yuán gōng tīng le yuán fāng de huí dá hòu tí chū le yī gè shén me yàng de wèn tí",
        qEn: "According to the text, what question did Lord Yuan ask after hearing Yuanfang's reply?",
        sZh: [
            "1. 说明袁公提到自己以前当过邺县县令，也做过同样的事。",
            "2. 指出袁公具体询问两人之间谁模仿谁（法）。"
        ],
        sPy: [
            "shuō míng yuán gōng tí dào zì jǐ yǐ qián dāng guò yè xiàn xiàn lìng yě zuò guò tóng yàng de shì",
            "zhǐ chū yuán gōng jù tǐ xún wèn liǎng rén zhī jiān shéi mó fǎng shéi fǎ"
        ],
        sEn: "Step 1: Mention that Lord Yuan also did the same things when he was the Magistrate of Ye.<br>Step 2: Point out that Lord Yuan asked who imitated whom.",
        aZh: "袁公说自己以前当邺县县令时也是这么做的，接着询问元方：到底是你父亲效法（模仿）我，还是我效法（模仿）你父亲。",
        aPy: "yuán gōng shuō zì jǐ yǐ qián dāng yè xiàn xiàn lìng shí yě shì zhè me zuò de jiē zhe xún wèn yuán fāng dào dǐ ?? nǐ fù qīn xiào fǎ wǒ hái shì wǒ xiào fǎ nǐ fù qīn",
        aEn: "Lord Yuan stated that he had done the same as the Magistrate of Ye, and then asked Yuanfang whether his father imitated Lord Yuan, or Lord Yuan imitated his father."
    },
    {
        id: "Q3",
        qZh: "面对袁公的提问，陈元方举出了哪两个历史人物来作答？",
        qPy: "miàn duì yuán gōng de tí wèn chén yuán fāng jǔ chū le nǎ liǎng gè lì shǐ rén wù lái zuò dá",
        qEn: "Facing Lord Yuan's question, which two historical figures did Chen Yuanfang bring up in his answer?",
        sZh: [
            "1. 从课文最后两句中直接提取两个圣人的名字。",
            "2. 确保名字书写正确（得分点）。"
        ],
        sPy: [
            "cóng kè wén zuì hòu liǎng jù zhōng zhí jiē tí qǔ liǎng gè shèng rén de míng zì",
            "què bǎo míng zì shū xiě zhèng què dé fēn diǎn"
        ],
        sEn: "Step 1: Extract the names of the two sages directly from the text.<br>Step 2: Ensure the spelling and characters are correct.",
        aZh: "陈元方举出了西周时期的“周公”和春秋时期的“孔子”这两位历史人物。",
        aPy: "chén yuán fāng jǔ chū le xī zhōu shí qī de zhōu gōng hé chūn qiū shí qī de kǒng zǐ zhè liǎng gè lì shǐ rén wù",
        aEn: "Chen Yuanfang brought up two historical figures: the Duke of Zhou and Confucius."
    },
    {
        id: "Q4",
        qZh: "陈元方用“周公不师孔子，孔子亦不师周公”这句话，想要说明什么道理？",
        qPy: "chén yuán fāng yòng zhōu gōng bù shī kǒng zǐ kǒng zǐ yì bù shī zhōu gōng zhè jù huà xiǎng yào shuō míng shén me dào lǐ",
        qEn: "What did Chen Yuanfang want to explain by saying 'The Duke of Zhou did not learn from Confucius...'?",
        sZh: [
            "1. 解释周公和孔子虽然时代不同，但做的事和道理是一样的。",
            "2. 说明优秀的管理者不需要互相抄袭模仿，暗示父亲和袁公都是优秀的官员。"
        ],
        sPy: [
            "jiě shì zhōu gōng hé kǒng zǐ suī rán shí dài bù tóng dàn zuò de shì hé dào lǐ shì yī yàng de",
            "shuō míng yōu xiù de guǎn lǐ zhě bù xū yào hù xiāng chāo xí mó fǎng àn shì fù qīn hé yuán gōng dōu shì yōu xiù de guān yuán"
        ],
        sEn: "Step 1: Explain that although from different eras, their principles were the same.<br>Step 2: Indicate that excellent leaders do not need to copy each other.",
        aZh: "他想说明：优秀的人虽然出生在不同时代，但他们的言行和治政道理是一致的，不需要互相模仿。以此说明父亲和袁公都是优秀的官员，没有谁学谁的问题。",
        aPy: "tā xiǎng shuō míng yōu xiù de rén suī rán chū shēng zài bù tóng shí dài dàn tā men de yán xíng hé zhì zhèng dào lǐ shì yī zhì de bù xū yào hù xiāng mó fǎng yǐ cǐ shuō míng fù qīn hé yuán gōng dōu shì yōu xiù de guān yuán méi yǒu shéi xué shéi de wèn tí",
        aEn: "He wanted to explain that excellent people may live in different eras, but their principles are identical and they do not need to copy each other, implying both his father and Lord Yuan were equally outstanding."
    },
    {
        id: "Q5",
        qZh: "读完这个故事，你认为陈元方是一个怎样的孩子？",
        qPy: "dú wán zhè gè gù shì nǐ rèn wéi chén yuán fāng shì yī gè zěn yàng de hái zǐ",
        qEn: "After reading this story, what kind of child do you think Chen Yuanfang is?",
        sZh: [
            "1. 总结元方的性格特点（聪明、会说话）。",
            "2. 结合他回答长辈提问时表现出的礼貌与智慧进行说明。"
        ],
        sPy: [
            "zǒng jié yuán fāng de xìng gé tè diǎn cōng míng huì shuō huà",
            "jié hé tā huí dá zhǎng bèi tí wèn shí biǎo xiàn chū de lǐ mào yǔ zhì huì jìn xíng shuō míng"
        ],
        sEn: "Step 1: Summarize Yuanfang's personality traits (smart, articulate).<br>Step 2: Explain based on how he politely and cleverly answered the elder.",
        aZh: "陈元方是一个非常聪明、机智并且说话很有艺术的孩子。面对长辈不怀好意的问题，他既维护了父亲的尊严，又没有得罪和冒犯长辈。",
        aPy: "chén yuán fāng shì yī gè fēi cháng cōng míng jī zhì bìng qiě shuō huà hěn yǒu yì shù de hái zǐ miàn duì zhǎng bèi bù huái hǎo yì de wèn tí tā jì wéi hù le fù qīn de zūn yán yòu méi yǒu dé zuì hé mào fàn zhǎng bèi",
        aEn: "Chen Yuanfang is a very clever, quick-witted, and articulate child. When facing a tricky question from an elder, he defended his father's dignity without offending the elder."
    }
];
