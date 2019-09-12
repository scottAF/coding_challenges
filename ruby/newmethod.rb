class Piece
  @name

  def initialize(name)
    @name = name    
  end

  def move
    puts "piece was moved" 
  end

end

class Pawn < Piece
  def move
    puts "Pawn #{@name} was moved"
  end
end

class Queen < Piece
  def move
    puts "Queen #{@name} was moved"
  end
end

pawn = Pawn.new("Dan")

queen = Queen.new("Nicole")

arr = [pawn, queen]

arr.each do |piece|
  piece.move()
end
