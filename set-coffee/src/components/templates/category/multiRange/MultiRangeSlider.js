import React, { useCallback, useEffect, useState, useRef } from "react";
import styles from "./multiRangeSlider.module.css";

const MultiRangeSlider = ({ min, max, onChange }) => {
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef(null);
    const maxValRef = useRef(null);
    const range = useRef(null);

    // Convert to percentage
    const getPercent = useCallback(
        (value) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    // Set width of the range to decrease from the left side
    useEffect(() => {
        if (maxValRef.current) {
            const minPercent = getPercent(minVal);
            const maxPercent = getPercent(+maxValRef.current.value); // Preceding with '+' converts the value from type string to type number

            if (range.current) {
                range.current.style.left = `${minPercent}%`;
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [minVal, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        if (minValRef.current) {
            const minPercent = getPercent(+minValRef.current.value);
            const maxPercent = getPercent(maxVal);

            if (range.current) {
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [maxVal, getPercent]);

    // Get min and max values when their state changes
    useEffect(() => {
        onChange({ min: minVal, max: maxVal });
    }, [minVal, maxVal, onChange]);

    return (
        <>

            <div className={styles.container}>
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={minVal}
                    ref={minValRef}
                    onChange={(event) => {
                        const value = Math.min(+event.target.value, maxVal - 1);
                        setMinVal(value);
                        event.target.value = value.toString();
                    }}
                    className={`${styles.range}`}
                />
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={maxVal}
                    ref={maxValRef}
                    onChange={(event) => {
                        const value = Math.max(+event.target.value, minVal + 1);
                        setMaxVal(value);
                        event.target.value = value.toString();
                    }}
                    className={`${styles.range}`}
                />
            </div>
            <section className={styles.status}>
                <div className={styles.slider__left_value}>
                    <span>قیمت:</span>
                    <p>{minVal.toLocaleString()}  تومان -</p>
                </div>
                <div className={styles.slider__right_value}>{maxVal.toLocaleString()}  تومان</div>
            </section>
        </>
        );
};


export default MultiRangeSlider;
