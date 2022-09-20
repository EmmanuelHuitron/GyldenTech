import { useEffect } from 'react'
const url = '//cdn.credly.com/assets/utilities/embed.js'

export const CertificadosAccreditationTechnical = () => {
  useEffect(() => {
    const script = document.createElement('script')

    script.src = url
    script.async = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])
  return (
    <>
      <div
        data-iframe-width="385"
        data-iframe-height="270"
        data-share-badge-id="1cc21cd0-a18a-49e0-88f0-565927140142"
        data-share-badge-host="https://www.credly.com"
      ></div>
    </>
  )
}

export const CertificadosAccreditationBusiness = () => {
  useEffect(() => {
    const script = document.createElement('script')

    script.src = url
    script.async = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])
  return (
    <>
      <div
        data-iframe-width="385"
        data-iframe-height="270"
        data-share-badge-id="24f853d7-1774-4991-a808-143d5e42d360"
        data-share-badge-host="https://www.credly.com"
      ></div>
    </>
  )
}
export const CertificadosSalesAccreditation = () => {
  useEffect(() => {
    const script = document.createElement('script')

    script.src = url
    script.async = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])
  return (
    <>
      <div
        data-iframe-width="385"
        data-iframe-height="270"
        data-share-badge-id="c3ed006b-f26a-4ee1-9e95-b3bc3b5f77fe"
        data-share-badge-host="https://www.credly.com"
      ></div>
    </>
  )
}
export const CertificadosCloudEconomicsAccreditation = () => {
  useEffect(() => {
    const script = document.createElement('script')

    script.src = url
    script.async = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])
  return (
    <>
      <div
        data-iframe-width="385"
        data-iframe-height="270"
        data-share-badge-id="c1f517b6-8671-4880-ba9a-dd0b90e9329b"
        data-share-badge-host="https://www.credly.com"
      ></div>
    </>
  )
}
