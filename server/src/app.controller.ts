import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CardGenerator } from '@root/utils/CardGenerator'
import { CREDIT_CARD, VISA } from '@constants/card.constant'

import { Graph } from '@models/graph/Graph'
import { comparator } from '@models/graph/comparator'

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('card')
  getCard() {
    const cardGenerator = new CardGenerator()

    return cardGenerator.generateCard(CREDIT_CARD, VISA, 'Platonov Ivan')
  }

  @Get('graph')
  makeGraph() {
    const graph = new Graph(comparator)

    graph.addNode(1)
    graph.addNode(2)
    graph.addNode(3)
    graph.addNode(4)

    graph.addEdge(1,4)
    graph.addEdge(1,3)
    graph.addEdge(2,3)
    graph.addEdge(3,4)

    graph.addEdge(4,1)

    console.log(graph.nodes.get(2));
    
  }
}
