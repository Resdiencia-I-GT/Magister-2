const Wrapper = (props: WrapperProps) => {
  const {title, contentList} = props
  
  return(
    <div>
      <h3>{title}</h3>
      <div>
        {contentList.map((item: ContentListType) => 
          <p>{item.content} : {item.time}</p>
        )}
      </div>
    </div>   
  )
}

export default Wrapper