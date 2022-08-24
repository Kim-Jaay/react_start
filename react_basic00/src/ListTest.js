


const DATA = [
    { id: 1, name: '김주현', age: 27, sleep: false },
    { id: 2, name: '이주현', age: 7, sleep: true },
    { id: 3, name: '한주현', age: 30, sleep: true }
]

const detail = () => {
    return (
        <h2>DATA[0].title</h2>
    )
}


const ListTest = () => {
    return (
        <ul>
            {
                DATA.map(it => <li key={it.id}>
                    {it.name}is {it.age}age old, she is {it.sleep ? 'sleeping' : 'playing'}.
                </li>)
            }

            {/* {DATA.map(it => <li>{it.name}</li>)}
        {DATA[0].name}은{DATA[0].age}살 {DATA[0].sleep && '자고있음'},
        {DATA[1].name}은{DATA[1].age}살 {DATA[1].sleep && '자고있음'},
        {DATA[2].name}은{DATA[2].age}살 {DATA[2].sleep && '자고있음'},
        {DATA.map(it => <li>{it.name}은 {it.age}살 {it.sleep ? '자고있음' : '놀고있음'}</li>)} */}

            {/* {
          DATA.map(
            (it, idx) =>
              <li key={it.id}>
                {idx + 1}번 {it.name}은 {it.age}살 {it.sleep ? '자고있음' : '놀고있음'}
              </li>
          ).slice(0, 2).reverse()
        } */}

        </ul>
    )
}

export default ListTest;