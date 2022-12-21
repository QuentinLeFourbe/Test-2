import React from 'react'
import styled from 'styled-components'

type Props = {}

function CenteredContent({}: Props) {
  return (
    <div>CenteredContent</div>
  )
}

export default CenteredContent

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`