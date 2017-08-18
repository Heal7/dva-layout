export default {
  namespace: 'question',
  state: {
    formIsShow: false,
    questions: [
      {
        id: 1,
        title: '如何看待“慰安妇”——日军性奴隶受害者为题材的电影《二十二》？',
        description: '8月14日，世界“慰安妇”纪念日。8.14这部电影就要上映了。最近战狼让我们看到了国家的复兴，我们的民族已经很强大了。可是我们不应该只看到辉煌的现在而忘记了不堪回首的过去。“慰安妇”一直是一个很敏感的词汇，人们对它的认识，对它的关注一直以来都太少太少了。',
        voteCount: 77
      },
      {
        id: 2,
        title: '如何评价电影《战狼2》',
        description: '本片拍摄得到了中国人民解放军南京军区的大力支持，动员了多款新式武器装备，采用近万发子弹，上百辆坦克以及武直-10直升机进行实战拍摄。吴京还经过特批在特种部队体验生活18个月',
        voteCount: 7
      },
      {
				id:3,
				title:'热爱编程是一种怎样的体验？',
				description:'别人对玩游戏感兴趣，我对写代码、看技术文章感兴趣；把泡github、stackoverflow、v2ex、reddit、csdn当做是兴趣爱好；遇到重复的工作，总想着能不能通过程序实现自动化；喝酒的时候把写代码当下酒菜，边喝边想边敲；不给工资我也会来加班；做梦都在写代码。',
				voteCount:5
			}
    ]
  },
  reducers: {
    toggleForm(state) {
      return { ...state, formIsShow: !state.formIsShow }
    },
    changeVote(state, {payload}) {
      const {index, question} = payload;
      return { ...state, questions: [...state.questions.slice(0, index), question, ...state.questions.slice(index+1)] }
    },
    addQuestion(state, {payload}) {
      return { ...state, questions: [...state.questions, payload] }
    }
  },
  effects: {},
  subscriptions: {},
};

