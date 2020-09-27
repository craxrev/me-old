import styled from "styled-components"

// Desktop base font-size
// 16vw * 100 / 1920
// 0.8333333333333333vw

// Tablet base font-size
// 8.533333333333333vw * 100 / 980
// 0.8707482993197279vw

// Tablet max font-size
// 80px / 9.375
// 8.533333333333333px

// Mobile base font-size
// 4.266666666666667vw * 100 / 768
// 0.5555555555555556vw

// Mobile max font-size
// 40px / 9.375
// 4.266666666666667px

export const Wrapper = styled.div`
    margin-left: 1.375em;
    margin-right: 1.375em;
    // font-size: max(0.8333333333333333vw, 6.4px);
    // font-size: 0.8333333333333333vw;
    font-size: calc(16*100vw/var(--size));
    --size: 1920;

    @media(min-width: 768px) {
        margin-left: 2.75em;
        margin-right: 2.75em;
        // font-size: max(var(--t-size), var(--m-max));
    }

    @media(min-width: 980px) {
        margin-left: 10.625em;
        margin-right: 10.625em;
        // font-size: max(var(--d-size), var(--t-max));
    }

    @media(min-width: 1920px) {
        font-size: 16px;
    }
`
