import React from 'react'

const CenterDiv = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh', // Adjust as needed for your layout
            backgroundColor: '#f0f0f0', // Example background color
        }}>
            <div style={{
                position: "relative",
                width: '300px', // Example width
                height: '200px', // Example height
                backgroundColor: '#ffffff', // Example background color
                border: '1px solid #ccc', // Example border
                textAlign: 'center',
                padding: '20px',
                borderRadius: '8px', // Example border radius
            }}>
                <img style={{
                    width: '300px', // Example width
                    height: '200px',
                    objectFit: "fill",
                }}
                    src={"https://picsum.photos/id/237/200/300"} alt="" />
                <div style={{
                    position: 'absolute', // Position text absolutely relative to the container
                    bottom: 0, // Align text to the bottom
                    left: 0, // Align text to the left
                    width: '100%', // Ensure text spans the full width
                    // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background color
                    // color: '#ffffff', // Text color
                    // padding: '10px', // Padding around the text
                    boxSizing: 'border-box', // Include padding and border in the element's total width and height
                }}>
                    <h3 style={{ margin: 0 }}>Overlay Text</h3>
                    <p style={{ margin: 0 }}>Text over the image</p>
                </div>
            </div>
        </div>
    )
}

export default CenterDiv
