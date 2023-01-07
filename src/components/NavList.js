//그룹객체 key:value

const groupObj = {
  Action: "genre=Action",
  Romance: "genre=Romance",
  Music: "genre=Music",
  Comedy: "genre=Comedy",
  Animation: "genre=Animation",
};
//그룹객체속성 배열로 반환
const groupObjArr = Object.keys(groupObj);

export { groupObj, groupObjArr };
