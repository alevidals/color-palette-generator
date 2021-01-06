import { PdfMakeWrapper, SVG, Txt } from 'pdfmake-wrapper';
import pdfFonts from 'pdfmake/build/vfs_fonts'; // fonts provided for pdfmake
import { ComputedRef } from 'vue';
import { Colors } from '@/interfaces/interfaces';

PdfMakeWrapper.setFonts(pdfFonts);

export default function createPDF(data: ComputedRef<Colors[]>) {
  const pdf = new PdfMakeWrapper();
  pdf.info({
    title: 'Colorly',
    author: 'Colorly',
  });
  pdf.pageMargins([40, 60, 40, 60]);
  pdf.add(
    new Txt('Colorly')
      .color('black')
      .bold()
      .fontSize(45).end,
  );
  data.value.forEach((color: Colors) => {
    pdf.add(new Txt(color.rgb.fullColor).bold().fontSize(15).end);
    pdf.add(new Txt(color.hex).bold().fontSize(15).end);
    pdf.add(
      new SVG(
        `<svg width="515" height="65">
          <rect width="515" height="65"
          style="fill:${color.rgb.fullColor};stroke-width:2;stroke:rgb(0,0,0)" />
        </svg>`,
      ).end,
    );
    pdf.add(pdf.ln(2));
  });
  pdf.add(
    new Txt('https://github.com/alevidals/colorly')
      .bold()
      .color('#fff')
      .background('#000').end,
  );
  pdf.create().download('palette.pdf');
}
