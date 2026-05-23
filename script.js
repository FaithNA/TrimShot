import sharp from 'sharp'
new sharp('./input/img.jpeg')
    .rotate()
    .toFile('./output/output.jpeg');