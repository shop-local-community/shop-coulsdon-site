<template>
  <div class="block block-inverse">
    <div id="map" class="block-background"></div>
  </div>
</template>

<script>
import mapkit from 'mapkit'

const TOKEN = process.env.VUE_APP_MAPKIT_TOKEN
const PRIMARY_COLOR = '#61468b'
const BLUE_COLOR = '#007bff'

console.log(TOKEN)

export default {
  name: 'LocalMap',
  props: {
    businesses: Array[Object],
    carParks: Array[Object]
  },
  mounted () {
    mapkit.init({
      authorizationCallback: function (done) {
        done(TOKEN)
      }
    })

    let Coulsdon = new mapkit.CoordinateRegion(
      new mapkit.Coordinate(51.319720, -0.140724),
      new mapkit.CoordinateSpan(0.001, 0.001)
    )

    // Business annotation callout delegate
    const CALLOUT_OFFSET = new DOMPoint(-148, -78)
    let businessAnnotationCallout = {
      calloutElementForAnnotation: function (annotation) {
        return calloutForLandmarkAnnotation(annotation)
      },
      calloutAnchorOffsetForAnnotation: function (annotation, element) {
        return CALLOUT_OFFSET
      },
      calloutShouldAnimateForAnnotation: true,
      calloutAppearanceAnimationForAnnotation: function (annotation) {
        return 'scale-and-fadein .4s 0 1 normal cubic-bezier(0.4, 0, 0, 1.5)'
      }
    }

    // Businesses annotations
    let businessesAnnotations = this.businesses.filter(function (business) {
      return !!business.coordinate
    }).map(function (business) {
      let coordinate = new mapkit.Coordinate(business.coordinate[0], business.coordinate[1])
      let annotation = new mapkit.MarkerAnnotation(coordinate, {
        title: business.name,
        color: PRIMARY_COLOR,
        callout: businessAnnotationCallout
      })

      if (business.facebook) {
        annotation.glyphImage = {
          1: '../assets/img/businesses/' + business.slug + '/glyph.png',
          2: '../assets/img/businesses/' + business.slug + '/glyph@2x.png',
          3: '../assets/img/businesses/' + business.slug + '/glyph@3x.png'
        }
      }

      annotation.business = business
      return annotation
    })

    // Car parks overlays
    let carParkOverlays = this.carParks.filter(function (carPark) {
      return !!carPark.points
    }).map(function (carPark) {
      let points = carPark.points.map(function (point) {
        return new mapkit.Coordinate(point[0], point[1])
      })
      let style = new mapkit.Style({
        strokeColor: BLUE_COLOR,
        strokeOpacity: 1,
        lineWidth: 2,
        lineJoin: 'round',
        lineDash: [2, 2],
        fillColor: BLUE_COLOR,
        fillOpacity: 0.2
      })
      let overlay = new mapkit.PolygonOverlay([points], {
        style: style
      })
      overlay.carPark = carPark
      return overlay
    })

    // Car parks annotations
    let carParkAnnotations = this.carParks.filter(function (carPark) {
      return !!carPark.points
    }).map(function (carPark) {
      let coordinate = new mapkit.Coordinate(
        carPark.points.reduce(function (sum, point) {
          return sum + point[0]
        }, 0) / carPark.points.length,
        carPark.points.reduce(function (sum, point) {
          return sum + point[1]
        }, 0) / carPark.points.length)
      let annotation = new mapkit.MarkerAnnotation(coordinate, {
        title: carPark.name,
        subtitle: 'Car Park',
        color: BLUE_COLOR,
        glyphText: 'P'
      })
      annotation.carPark = carPark
      return annotation
    })

    let map = new mapkit.Map('map', {
      center: new mapkit.Coordinate(51.319720, -0.140724),
      tintColor: PRIMARY_COLOR
    })
    map.region = Coulsdon
    map.showItems(businessesAnnotations)
    map.addAnnotations(carParkAnnotations)
    map.addOverlays(carParkOverlays)

    // Business annotation callout
    function calloutForLandmarkAnnotation (annotation) {
      let div = document.createElement('div')

      let title = div.appendChild(document.createElement('h1'))
      let titleRibbon = title.appendChild(document.createElement('span'))
      titleRibbon.className = 'text-ribbon'
      let titleSpan = titleRibbon.appendChild(document.createElement('span'))
      titleSpan.textContent = annotation.business.name

      let section = div.appendChild(document.createElement('section'))

      let phone = section.appendChild(document.createElement('p'))
      let phoneRibbon = phone.appendChild(document.createElement('span'))
      phoneRibbon.className = 'text-ribbon'
      let phoneSpan = phoneRibbon.appendChild(document.createElement('span'))
      phoneSpan.textContent = annotation.business.phone

      let link = section.appendChild(document.createElement('p'))
      let a = link.appendChild(document.createElement('a'))
      a.href = annotation.business.link
      let linkRibbon = a.appendChild(document.createElement('span'))
      linkRibbon.className = 'text-ribbon'
      let linkSpan = linkRibbon.appendChild(document.createElement('span'))
      linkSpan.textContent = annotation.business.link

      return div
    }
  }
}
</script>
