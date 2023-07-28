import { DisplayFour } from './DisplayFour';
import { DisplayThree } from './DisplayThree';
import { DisplayTwo } from './DisplayTwo';
import { useState } from 'react';

export const DisplayOne = () => {
    const student = [
        { Id: 101, class: 'SYMSC', sname: 'tyu', Department: 'compuer science', math: 56, science: 77, history: 89, marathi: 95, english: 70, geography: 89 },
        { Id: 102, class: 'FYMSC', sname: 'abc', Department: 'compuer science', math: 56, science: 77, history: 89, marathi: 91, english: 86, geography: 72 },
        { Id: 103, class: 'TYMSC', sname: 'aaf', Department: 'compuer science', math: 56, science: 77, history: 89, marathi: 89, english: 67, geography: 59 },
        { Id: 104, class: 'FYMSC', sname: 'bhc', Department: 'compuer science', math: 56, science: 77, history: 89, marathi: 95, english: 87, geography: 76 },
        { Id: 105, class: 'SYMSC', sname: 'kum', Department: 'compuer science', math: 56, science: 77, history: 89, marathi: 78, english: 70, geography: 67 },
        { Id: 106, class: 'TYMSC', sname: 'ert', Department: 'compuer science', math: 56, science: 77, history: 89, marathi: 86, english: 74, geography: 81 },
        { Id: 107, class: 'SYMSC', sname: 'gah', Department: 'compuer science', math: 56, science: 77, history: 89, marathi: 92, english: 73, geography: 49 },
        { Id: 108, class: 'TYMSC', sname: 'pqr', Department: 'compuer science', math: 56, science: 77, history: 89, marathi: 92, english: 73, geography: 49 }
    ]
    const [tone, setTone] = useState(false);
    let q = student.filter((p) =>
        p.class === 'FYMSC'
    )
    function click() {
        setTone(true);
        setA(false);
        setB(false);

    }
    const [a, setA] = useState(false);
    let p = student.filter((x) =>
        x.class === 'SYMSC'
    )
    function clicka() {
        setA(true);
        setB(false);
        setTone(false);
    }
    const [b, setB] = useState(false);
    let r = student.filter((y) =>
        y.class === 'TYMSC'
    )
    function clickb() {
        setB(true);
        setA(false);
        setTone(false);
    }
    return (
        <>
            <button onClick={click}>FYMSC</button>
            <button onClick={clicka}>SYMSC</button>
            <button onClick={clickb}>TYMSC</button>

            <DisplayTwo name={tone} data1={q} />
            <DisplayThree name1={a} data2={p} />
            <DisplayFour name2={b} data3={r} />
        </>
    )
}
